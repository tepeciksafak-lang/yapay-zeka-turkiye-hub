import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const {
      language,
      title,
      excerpt,
      content,
      author,
      category,
      tags,
      cover_image,
      cover_image_alt,
      meta_title,
      meta_description,
      meta_keywords,
      read_time,
      status = "published",
      author_bio,
    } = await req.json();

    // Validation
    if (!language || !["tr", "de"].includes(language)) {
      return new Response(
        JSON.stringify({ error: "Invalid language. Must be 'tr' or 'de'" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!title || !excerpt || !content || !author || !category) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: title, excerpt, content, author, category" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Creating blog post:", { language, title, author });

    // Generate slug from title and language
    const baseSlug = title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
    
    const slug = `${baseSlug}-${language}`;

    // Handle cover image upload if provided
    let coverImageUrl = null;
    if (cover_image) {
      try {
        let imageData: Uint8Array;
        
        // Check if it's base64 or URL
        if (cover_image.startsWith("data:image")) {
          // Base64 image
          const base64Data = cover_image.split(",")[1];
          imageData = Uint8Array.from(atob(base64Data), c => c.charCodeAt(0));
        } else if (cover_image.startsWith("http")) {
          // URL - download image
          const imageResponse = await fetch(cover_image);
          if (!imageResponse.ok) {
            throw new Error("Failed to download image from URL");
          }
          const arrayBuffer = await imageResponse.arrayBuffer();
          imageData = new Uint8Array(arrayBuffer);
        } else {
          throw new Error("Invalid image format. Provide base64 or URL");
        }

        // Upload to storage
        const fileName = `${slug}-${Date.now()}.jpg`;
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from("blog-images")
          .upload(fileName, imageData, {
            contentType: "image/jpeg",
            cacheControl: "3600",
            upsert: false,
          });

        if (uploadError) {
          console.error("Image upload error:", uploadError);
          throw uploadError;
        }

        // Get public URL
        const { data: { publicUrl } } = supabase.storage
          .from("blog-images")
          .getPublicUrl(fileName);
        
        coverImageUrl = publicUrl;
        console.log("Image uploaded successfully:", coverImageUrl);
      } catch (imageError) {
        console.error("Error processing cover image:", imageError);
        // Continue without image if upload fails
      }
    }

    // Insert blog post
    const { data: post, error: insertError } = await supabase
      .from("blog_posts")
      .insert({
        language,
        slug,
        title,
        excerpt,
        content,
        author,
        author_bio,
        category,
        tags: tags || [],
        cover_image_url: coverImageUrl,
        cover_image_alt: cover_image_alt || "",
        meta_title: meta_title || title,
        meta_description: meta_description || excerpt,
        meta_keywords: meta_keywords || [],
        read_time: read_time || 5,
        status,
        published_at: status === "published" ? new Date().toISOString() : null,
      })
      .select()
      .single();

    if (insertError) {
      console.error("Insert error:", insertError);
      return new Response(
        JSON.stringify({ error: "Failed to create blog post", details: insertError.message }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Blog post created successfully:", post.id);

    // Generate URL based on language
    const baseUrl = supabaseUrl.replace("https://", "https://");
    const postUrl = `${baseUrl}/${language}/blog/${slug}`;

    return new Response(
      JSON.stringify({
        success: true,
        post_id: post.id,
        slug: slug,
        url: postUrl,
        cover_image_url: coverImageUrl,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred", details: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
