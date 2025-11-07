import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <!-- Homepage -->
  <url>
    <loc>https://yapayzekapratik.com/tr</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="tr" href="https://yapayzekapratik.com/tr" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://yapayzekapratik.com/tr" />
  </url>
  <!-- Solutions -->
  <url>
    <loc>https://yapayzekapratik.com/tr/cozumler</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="tr" href="https://yapayzekapratik.com/tr/cozumler" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://yapayzekapratik.com/tr/cozumler" />
  </url>
  <!-- Case Studies Overview -->
  <url>
    <loc>https://yapayzekapratik.com/tr/vaka-calismalari</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="tr" href="https://yapayzekapratik.com/tr/vaka-calismalari" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://yapayzekapratik.com/tr/vaka-calismalari" />
  </url>
  <!-- Case Study Details -->
  <url>
    <loc>https://yapayzekapratik.com/tr/vaka-calismalari/car-studio-ai</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="tr" href="https://yapayzekapratik.com/tr/vaka-calismalari/car-studio-ai" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://yapayzekapratik.com/tr/vaka-calismalari/car-studio-ai" />
  </url>
  <url>
    <loc>https://yapayzekapratik.com/tr/vaka-calismalari/acilsatis</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="tr" href="https://yapayzekapratik.com/tr/vaka-calismalari/acilsatis" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://yapayzekapratik.com/tr/vaka-calismalari/acilsatis" />
  </url>
  <url>
    <loc>https://yapayzekapratik.com/tr/vaka-calismalari/salevium</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="tr" href="https://yapayzekapratik.com/tr/vaka-calismalari/salevium" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://yapayzekapratik.com/tr/vaka-calismalari/salevium" />
  </url>
  <url>
    <loc>https://yapayzekapratik.com/tr/vaka-calismalari/erpa-teknoloji</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="tr" href="https://yapayzekapratik.com/tr/vaka-calismalari/erpa-teknoloji" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://yapayzekapratik.com/tr/vaka-calismalari/erpa-teknoloji" />
  </url>
  <url>
    <loc>https://yapayzekapratik.com/tr/vaka-calismalari/cemkimsan</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="tr" href="https://yapayzekapratik.com/tr/vaka-calismalari/cemkimsan" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://yapayzekapratik.com/tr/vaka-calismalari/cemkimsan" />
  </url>
  <url>
    <loc>https://yapayzekapratik.com/tr/vaka-calismalari/dkm-coach-bilge</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="tr" href="https://yapayzekapratik.com/tr/vaka-calismalari/dkm-coach-bilge" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://yapayzekapratik.com/tr/vaka-calismalari/dkm-coach-bilge" />
  </url>
  <!-- Free Content -->
  <url>
    <loc>https://yapayzekapratik.com/tr/ucretsiz-icerikler</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="tr" href="https://yapayzekapratik.com/tr/ucretsiz-icerikler" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://yapayzekapratik.com/tr/ucretsiz-icerikler" />
  </url>
  <!-- Blog -->
  <url>
    <loc>https://yapayzekapratik.com/tr/blog</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="tr" href="https://yapayzekapratik.com/tr/blog" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://yapayzekapratik.com/tr/blog" />
  </url>
  <!-- Blog Posts -->
  <url>
    <loc>https://yapayzekapratik.com/tr/blog/yapay-zeka-nedir-basit-ve-anlalr-anlatm-2025-gncel-rehber-tr</loc>
    <lastmod>2025-10-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
    <xhtml:link rel="alternate" hreflang="tr" href="https://yapayzekapratik.com/tr/blog/yapay-zeka-nedir-basit-ve-anlalr-anlatm-2025-gncel-rehber-tr" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://yapayzekapratik.com/tr/blog/yapay-zeka-nedir-basit-ve-anlalr-anlatm-2025-gncel-rehber-tr" />
  </url>
  <url>
    <loc>https://yapayzekapratik.com/tr/blog/yapay-zeka-ile-satis-artirma-2025</loc>
    <lastmod>2025-11-02</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
    <xhtml:link rel="alternate" hreflang="tr" href="https://yapayzekapratik.com/tr/blog/yapay-zeka-ile-satis-artirma-2025" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://yapayzekapratik.com/tr/blog/yapay-zeka-ile-satis-artirma-2025" />
  </url>
  <url>
    <loc>https://yapayzekapratik.com/tr/blog/yapay-zeka-nedir</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
    <xhtml:link rel="alternate" hreflang="tr" href="https://yapayzekapratik.com/tr/blog/yapay-zeka-nedir" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://yapayzekapratik.com/tr/blog/yapay-zeka-nedir" />
  </url>
  <url>
    <loc>https://yapayzekapratik.com/tr/blog/yapay-zeka-avantajlari-dezavantajlari</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
    <xhtml:link rel="alternate" hreflang="tr" href="https://yapayzekapratik.com/tr/blog/yapay-zeka-avantajlari-dezavantajlari" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://yapayzekapratik.com/tr/blog/yapay-zeka-avantajlari-dezavantajlari" />
  </url>
  <url>
    <loc>https://yapayzekapratik.com/tr/blog/yapay-zeka-uygulama-alanlari</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
    <xhtml:link rel="alternate" hreflang="tr" href="https://yapayzekapratik.com/tr/blog/yapay-zeka-uygulama-alanlari" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://yapayzekapratik.com/tr/blog/yapay-zeka-uygulama-alanlari" />
  </url>
  <url>
    <loc>https://yapayzekapratik.com/tr/blog/yapay-zeka-gelecek</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
    <xhtml:link rel="alternate" hreflang="tr" href="https://yapayzekapratik.com/tr/blog/yapay-zeka-gelecek" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://yapayzekapratik.com/tr/blog/yapay-zeka-gelecek" />
  </url>
  <!-- Legal Pages -->
  <url>
    <loc>https://yapayzekapratik.com/tr/gizlilik</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
    <xhtml:link rel="alternate" hreflang="tr" href="https://yapayzekapratik.com/tr/gizlilik" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://yapayzekapratik.com/tr/gizlilik" />
  </url>
  <url>
    <loc>https://yapayzekapratik.com/tr/kullanim-kosullari</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
    <xhtml:link rel="alternate" hreflang="tr" href="https://yapayzekapratik.com/tr/kullanim-kosullari" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://yapayzekapratik.com/tr/kullanim-kosullari" />
  </url>
</urlset>`;

serve((_req) => {
  console.log("Sitemap function called");
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
      "X-Content-Type-Options": "nosniff",
    },
  });
});
