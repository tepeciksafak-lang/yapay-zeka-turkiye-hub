import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

// Single Domain Configuration (Turkish only)
const DOMAIN = 'yapayzekapratik.com';

// Generate sitemap
const generateSitemap = (): string => {
  const baseUrl = `https://${DOMAIN}`;
  const today = new Date().toISOString().split('T')[0];

  const urlEntry = (path: string, priority: string = '0.8', changefreq: string = 'monthly') => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;

  const urls = `
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
  ${urlEntry('/cozumler/almanya-ihracat', '0.85', 'weekly')}
  ${urlEntry('/gizlilik-politikasi', '0.3')}
  ${urlEntry('/kullanim-kosullari', '0.3')}
  
  ${/* SEO LANDING PAGES - 20 Seiten */''}
  ${/* Entry Page */''}
  ${urlEntry('/yapay-zeka-otomasyonu', '0.9', 'weekly')}
  
  ${/* Hub: Marketing Automation */''}
  ${urlEntry('/marketing-otomasyonu', '0.9', 'weekly')}
  ${urlEntry('/marketing-otomasyonu/lead-uretimi', '0.8')}
  ${urlEntry('/marketing-otomasyonu/email-otomasyonu', '0.8')}
  ${urlEntry('/marketing-otomasyonu/sosyal-medya-otomasyonu', '0.8')}
  ${urlEntry('/marketing-otomasyonu/icerik-uretimi', '0.8')}
  ${urlEntry('/marketing-otomasyonu/seo-otomasyonu', '0.8')}
  ${urlEntry('/marketing-otomasyonu/reklam-otomasyonu', '0.8')}
  ${urlEntry('/marketing-otomasyonu/chatbot-otomasyonu', '0.8')}
  ${urlEntry('/marketing-otomasyonu/analitik-otomasyonu', '0.8')}
  ${urlEntry('/marketing-otomasyonu/kampanya-otomasyonu', '0.8')}
  ${urlEntry('/marketing-otomasyonu/kisisellestirilmis-pazarlama', '0.8')}
  ${urlEntry('/marketing-otomasyonu/funnel-otomasyonu', '0.8')}
  ${urlEntry('/marketing-otomasyonu/retargeting-otomasyonu', '0.8')}
  ${urlEntry('/marketing-otomasyonu/whatsapp-otomasyonu', '0.8')}
  ${urlEntry('/marketing-otomasyonu/influencer-pazarlama', '0.8')}
  
  ${/* Hub: Sales Automation */''}
  ${urlEntry('/satis-otomasyonu', '0.9', 'weekly')}
  ${urlEntry('/satis-otomasyonu/crm-satis', '0.8')}
  ${urlEntry('/satis-otomasyonu/teklif-otomasyonu', '0.8')}
  ${urlEntry('/satis-otomasyonu/musteri-edinme', '0.8')}`;

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`;
};

serve(async (_req: Request) => {
  const sitemapXML = generateSitemap();

  return new Response(sitemapXML, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400" // 24 hours
    },
  });
});
