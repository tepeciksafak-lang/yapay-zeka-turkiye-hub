-- Blog Posts Tabelle erstellen
CREATE TABLE public.blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  author TEXT NOT NULL,
  author_bio TEXT,
  date TIMESTAMPTZ DEFAULT now(),
  category TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  read_time INTEGER DEFAULT 5,
  cover_image_url TEXT,
  cover_image_alt TEXT,
  
  -- SEO Felder
  meta_title TEXT,
  meta_description TEXT,
  meta_keywords TEXT[],
  og_image_url TEXT,
  
  -- Status & Timestamps
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Indizes für schnellere Abfragen
CREATE INDEX idx_blog_posts_slug ON public.blog_posts(slug);
CREATE INDEX idx_blog_posts_status ON public.blog_posts(status);
CREATE INDEX idx_blog_posts_published_at ON public.blog_posts(published_at DESC);

-- RLS aktivieren
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Jeder kann veröffentlichte Posts lesen (öffentlich)
CREATE POLICY "Anyone can read published posts" ON public.blog_posts
  FOR SELECT USING (status = 'published');

-- Service kann Posts erstellen (für Webhook)
CREATE POLICY "Service can insert posts" ON public.blog_posts
  FOR INSERT WITH CHECK (true);

-- Service kann Posts aktualisieren
CREATE POLICY "Service can update posts" ON public.blog_posts
  FOR UPDATE USING (true);

-- Blog-Bilder Storage Bucket erstellen
INSERT INTO storage.buckets (id, name, public)
VALUES ('blog-images', 'blog-images', true);

-- RLS für Storage aktivieren
CREATE POLICY "Public can view blog images" ON storage.objects
  FOR SELECT USING (bucket_id = 'blog-images');

-- Service kann Bilder hochladen
CREATE POLICY "Service can upload blog images" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'blog-images');