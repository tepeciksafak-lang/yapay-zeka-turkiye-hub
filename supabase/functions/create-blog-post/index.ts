import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Position mapping for automatic image insertion
const positionMap: Record<string, string> = {
  // Legacy positions (AI Basics post)
  "tarihçe": "## Yapay Zekanın Kısa Tarihi",
  "calisma-prensibi": "## Yapay Zeka Nasıl Çalışır?",
  "uygulama-alanlari": "## Yapay Zeka Nerelerde Kullanılır?",
  "avantaj-dezavantaj": "## Yapay Zekanın Artıları ve Eksileri",
  "gelecek": "## Yapay Zekanın Geleceği",
  
  // Reklam Yapma post positions
  "before-senaryo": "## Senaryo Oluşturma",
  "after-analiz": "## Video Üretimi",
  "after-ses-uyumu": "## Hangi Yapay Zeka Modelleri",
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
      images = [],
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

    // Helper function to upload image
    async function uploadImage(imageSource: string, fileName: string): Promise<string | null> {
      try {
        let imageData: Uint8Array;
        
        if (imageSource.startsWith("data:image")) {
          const base64Data = imageSource.split(",")[1];
          imageData = Uint8Array.from(atob(base64Data), c => c.charCodeAt(0));
        } else if (imageSource.startsWith("http")) {
          const imageResponse = await fetch(imageSource);
          if (!imageResponse.ok) {
            throw new Error("Failed to download image from URL");
          }
          const arrayBuffer = await imageResponse.arrayBuffer();
          imageData = new Uint8Array(arrayBuffer);
        } else {
          throw new Error("Invalid image format. Provide base64 or URL");
        }

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

        const { data: { publicUrl } } = supabase.storage
          .from("blog-images")
          .getPublicUrl(fileName);
        
        console.log("Image uploaded successfully:", publicUrl);
        return publicUrl;
      } catch (error) {
        console.error("Error processing image:", error);
        return null;
      }
    }

    // Handle cover image upload
    let coverImageUrl = null;
    if (cover_image) {
      const fileName = `${slug}-cover-${Date.now()}.jpg`;
      coverImageUrl = await uploadImage(cover_image, fileName);
    }

    // Process content images
    let processedContent = content;
    const uploadedImages: Array<{ position: string; url: string }> = [];
    const skippedImages: string[] = [];

    if (images && images.length > 0) {
      for (const img of images) {
        const { position, image_url, image_meta_description } = img;
        
        // Skip cover image in content
        if (position === "kapak") {
          continue;
        }

        const fileName = `${slug}-${position}-${Date.now()}.jpg`;
        const uploadedUrl = await uploadImage(image_url, fileName);

        if (uploadedUrl) {
          uploadedImages.push({ position, url: uploadedUrl });

          const altText = image_meta_description || `Image for ${position}`;
          const imageMarkdown = `\n\n![${altText}](${uploadedUrl})\n`;
          let inserted = false;

          // Check if position is a direct heading match (e.g., "Senaryo Oluşturma", "Video Üretimi")
          const directHeadingMatch = `## ${position}`;
          if (processedContent.includes(directHeadingMatch)) {
            const headingIndex = processedContent.indexOf(directHeadingMatch);
            const afterHeading = headingIndex + directHeadingMatch.length;
            processedContent = processedContent.slice(0, afterHeading) + imageMarkdown + processedContent.slice(afterHeading);
            console.log(`Inserted image directly after heading "## ${position}"`);
            inserted = true;
          } else {
            // Try position map lookup
            const heading = positionMap[position];
            if (heading) {
              const headingIndex = processedContent.indexOf(heading);
              if (headingIndex !== -1) {
                // For "before-" positions, insert before the heading
                if (position.startsWith('before-')) {
                  processedContent = processedContent.slice(0, headingIndex) + imageMarkdown + processedContent.slice(headingIndex);
                  console.log(`Inserted image BEFORE heading "${heading}" for position "${position}"`);
                } else {
                  // For other positions, insert after the heading
                  const afterHeading = headingIndex + heading.length;
                  processedContent = processedContent.slice(0, afterHeading) + imageMarkdown + processedContent.slice(afterHeading);
                  console.log(`Inserted image AFTER heading "${heading}" for position "${position}"`);
                }
                inserted = true;
              }
            }
          }

          if (!inserted) {
            console.warn(`Could not insert image for position "${position}" - appending to end`);
            processedContent += imageMarkdown;
          }
        } else {
          console.error(`Failed to upload image for position: ${position}`);
          skippedImages.push(position);
        }
      }
    }

    // Insert blog post with processed content
    const { data: post, error: insertError } = await supabase
      .from("blog_posts")
      .insert({
        language,
        slug,
        title,
        excerpt,
        content: processedContent,
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
        uploaded_images: uploadedImages,
        skipped_images: skippedImages,
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
