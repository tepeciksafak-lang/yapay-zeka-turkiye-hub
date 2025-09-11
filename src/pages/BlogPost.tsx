import { useParams } from "react-router-dom";
import { SEO } from "@/components/SEO";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  
  if (!id) {
    return <div>Post bulunamadı</div>;
  }

  return (
    <main
      className="mx-auto w-full max-w-3xl px-4 py-12 min-h-screen"
      style={{ background: "#0B0F14" }}
    >
      <SEO 
        title={id.replace(/-/g, " ")}
        description="Blog yazısı içeriği"
      />
      
      <h1
        className="text-3xl md:text-4xl font-semibold"
        style={{ color: "#E5E7EB" }}
      >
        {id.replace(/-/g, " ")}
      </h1>
      <p className="mt-4" style={{ color: "#94A3B8" }}>
        Bu içerik yakında yayında olacak.
      </p>
    </main>
  );
};

export default BlogPost;