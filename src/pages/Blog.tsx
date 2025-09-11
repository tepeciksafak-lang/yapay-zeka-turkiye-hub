import { useSearchParams } from "react-router-dom";
import BlogCard, { type BlogPost } from "@/components/blog/BlogCard";
import Pagination from "@/components/blog/Pagination";
import { SEO } from "@/components/SEO";

const allPosts: BlogPost[] = [
  {
    slug: "ai-outreach-101",
    title: "AI ile Otomatik Outreach: 5 Adımda İlk Toplantılar",
    excerpt:
      "Yapay zekâ destekli kişiselleştirme ve doğru zamanlamayla haftalık düzenli toplantılar üretmenin pratik yolu.",
    coverImage: "/placeholder.svg",
    date: "2025-03-05",
    readTime: "6 dk",
    author: "Safak Tepecik",
    tags: ["outreach", "automation", "b2b"],
  },
];

const Blog = () => {
  const [searchParams] = useSearchParams();
  const pageSize = 12;
  const total = allPosts.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const currentPage = Math.min(
    totalPages,
    Math.max(1, Number(searchParams.get("page") ?? 1))
  );
  const start = (currentPage - 1) * pageSize;
  const posts = allPosts.slice(start, start + pageSize);

  return (
    <main style={{ background: "#0B0F14" }} className="min-h-screen">
      <SEO 
        title="Blog – Kaynaklar & İçgörüler"
        description="Pratik, AI destekli büyüme için içgörüler ve vaka yazıları."
      />
      
      <section className="relative mx-auto w-full max-w-6xl px-4 pt-12 md:pt-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-15"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(163,230,53,0.18), transparent 60%)",
            filter: "blur(24px)",
          }}
        />
        <h1
          className="text-3xl md:text-5xl font-semibold tracking-tight"
          style={{ color: "#E5E7EB" }}
        >
          Blog
        </h1>
        <p
          className="mt-3 max-w-[65ch] text-base md:text-lg"
          style={{ color: "#94A3B8" }}
        >
          Pratik, AI destekli büyüme için içgörüler ve vaka yazıları.
        </p>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-12 md:pb-16">
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          basePath="/tr/blog"
        />
      </section>
    </main>
  );
};

export default Blog;