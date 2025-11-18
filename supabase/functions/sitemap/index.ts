import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

// Multi-Domain Configuration
const DOMAINS = {
  tr: 'yapayzekapratik.com',
  de: 'ki-automatisieren.de'
};

// Determine language from request hostname
const getLanguageFromRequest = (req: Request): 'tr' | 'de' => {
  const url = new URL(req.url);
  const hostname = url.hostname;
  
  // Return language based on domain
  if (hostname.includes(DOMAINS.de)) {
    return 'de';
  }
  return 'tr'; // Default to Turkish
};

// Generate sitemap for specific language
const generateSitemap = (lang: 'tr' | 'de'): string => {
  const baseUrl = `https://${DOMAINS[lang]}`;
  const langPath = `/${lang}`;
  
  const urlEntry = (path: string, priority: string = '0.8', changefreq: string = 'monthly') => `
  <url>
    <loc>${baseUrl}${langPath}${path}</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;

  const trUrls = `
  ${urlEntry('', '1.0', 'weekly')}
  ${urlEntry('/cozumler')}
  ${urlEntry('/vaka-calismalari')}
  ${urlEntry('/vaka-calismalari/car-studio-ai', '0.7')}
  ${urlEntry('/vaka-calismalari/acilsatis', '0.7')}
  ${urlEntry('/vaka-calismalari/salevium', '0.7')}
  ${urlEntry('/vaka-calismalari/erpa-teknoloji', '0.7')}
  ${urlEntry('/vaka-calismalari/cemkimsan', '0.7')}
  ${urlEntry('/vaka-calismalari/dkm-coach-bilge', '0.7')}
  ${urlEntry('/ucretsiz-icerikler')}
  ${urlEntry('/blog', '0.9', 'daily')}
  ${urlEntry('/blog/yapay-zeka-ile-reklam-video-olusturma')}
  ${urlEntry('/blog/yapay-zeka-ile-reklam-senaryosu-olusturma')}
  ${urlEntry('/blog/yapay-zeka-ile-reklam-yapmak')}
  ${urlEntry('/blog/yapay-zeka-ile-satis-arttirma')}
  ${urlEntry('/hakkimizda')}
  ${urlEntry('/website-in-3-tagen', '0.85', 'weekly')}
  ${urlEntry('/gizlilik-politikasi', '0.3')}
  ${urlEntry('/kullanim-kosullari', '0.3')}`;

  const deUrls = `
  ${urlEntry('', '1.0', 'weekly')}
  ${urlEntry('/losungen')}
  ${urlEntry('/website-in-3-tagen', '0.9', 'weekly')}
  ${urlEntry('/uber-uns')}
  ${urlEntry('/datenschutz', '0.3')}
  ${urlEntry('/nutzungsbedingungen', '0.3')}`;

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${lang === 'tr' ? trUrls : deUrls}
</urlset>`;
};

serve(async (req: Request) => {
  const lang = getLanguageFromRequest(req);
  const sitemapXML = generateSitemap(lang);
  
  return new Response(sitemapXML, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400", // 24 hours
      "X-Robots-Tag": "noindex"
    },
  });
});
