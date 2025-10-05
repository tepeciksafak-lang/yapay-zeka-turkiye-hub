import { useParams } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { blogPosts } from "@/data/blogData";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  
  if (!id) {
    return <div>Post bulunamadı</div>;
  }

  const post = blogPosts.find(p => p.id === id);
  const baseUrl = window.location.origin;

  // Article Schema for SEO
  const articleSchema = post ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Pratik Yapay Zeka",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    },
    "image": post.image ? `${baseUrl}${post.image}` : `${baseUrl}/placeholder.svg`,
    "articleBody": post.content.substring(0, 500),
    "keywords": post.tags.join(", "),
    "articleSection": post.category
  } : null;

  return (
    <>
      <SEO 
        title={post?.title || id.replace(/-/g, " ")}
        description={post?.excerpt || "Blog yazısı içeriği"}
      />
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      <main
        className="mx-auto w-full max-w-3xl px-4 py-12 min-h-screen"
        style={{ background: "#0B0F14" }}
      >
        <h1
          className="text-3xl md:text-4xl font-semibold"
          style={{ color: "#E5E7EB" }}
        >
          {post?.title || id.replace(/-/g, " ")}
        </h1>
        <p className="mt-4" style={{ color: "#94A3B8" }}>
          {post?.excerpt || "Bu içerik yakında yayında olacak."}
        </p>
      </main>
    </>
  );
};

export default BlogPost;