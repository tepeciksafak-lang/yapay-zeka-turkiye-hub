import { useParams, Navigate } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { blogPosts } from "@/data/blogData";
import { Badge } from "@/components/ui/badge";
import { Clock, User, Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const { currentLanguage } = useLanguage();
  
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return <Navigate to={`/${currentLanguage}/blog`} replace />;
  }

  return (
    <>
        <SEO 
          title={`${post.title} - Blog`}
          description={post.excerpt}
        />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple/5" />
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <Link to={`/${currentLanguage}/blog`}>
                <Button variant="ghost" className="mb-8 hover-glow">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Blog'a Dön
                </Button>
              </Link>

              {/* Post Header */}
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-primary/90 text-primary-foreground">
                  {post.category}
                </Badge>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  {post.title}
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('tr-TR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readTime} dakika okuma
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              {post.image && (
                <div className="relative overflow-hidden rounded-xl mb-12 hover-glow">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 md:h-96 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card border border-border/50 rounded-xl p-8 md:p-12 hover-glow">
                <div className="prose prose-lg prose-invert max-w-none">
                  <ReactMarkdown 
                    components={{
                      h1: ({children}) => <h1 className="text-3xl font-bold text-foreground mb-6 mt-8">{children}</h1>,
                      h2: ({children}) => <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">{children}</h2>,
                      h3: ({children}) => <h3 className="text-xl font-bold text-foreground mb-3 mt-6">{children}</h3>,
                      p: ({children}) => <p className="text-muted-foreground mb-4 leading-relaxed">{children}</p>,
                      ul: ({children}) => <ul className="list-disc ml-6 mb-4 space-y-2 text-muted-foreground">{children}</ul>,
                      li: ({children}) => <li className="text-muted-foreground">{children}</li>,
                    }}
                  >
                    {post.content}
                  </ReactMarkdown>
                </div>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-border/50">
                  <h4 className="text-sm font-medium text-foreground mb-4">Etiketler:</h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="hover-glow">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPost;