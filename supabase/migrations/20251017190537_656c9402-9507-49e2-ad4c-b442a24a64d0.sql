-- Add language column to blog_posts table
ALTER TABLE blog_posts 
ADD COLUMN language TEXT NOT NULL DEFAULT 'tr';

-- Add unique constraint for (slug, language)
-- Each slug can only exist once per language
ALTER TABLE blog_posts 
ADD CONSTRAINT unique_slug_language UNIQUE (slug, language);

-- Add indexes for performance
CREATE INDEX idx_blog_posts_language ON blog_posts(language);
CREATE INDEX idx_blog_posts_slug_language ON blog_posts(slug, language);
CREATE INDEX idx_blog_posts_status_language ON blog_posts(status, language);

-- Add check constraint for valid languages (tr, de)
ALTER TABLE blog_posts 
ADD CONSTRAINT valid_language CHECK (language IN ('tr', 'de'));