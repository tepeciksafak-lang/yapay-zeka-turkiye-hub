import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'
  const locales = ['tr', 'de', 'en']
  
  const routes = [
    '',
    '/hakkimda',
    '/pazarlama',
    '/otomasyon',
    '/satis-otomasyonu',
    '/satis-otomasyonu-demo',
    '/veri-analizi',
    '/yapay-zeka-is-alanlari',
    '/vaka-calismalari',
    '/blog',
    '/services5'
  ]

  const sitemap: MetadataRoute.Sitemap = []

  routes.forEach((route) => {
    locales.forEach((locale) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((loc) => [loc, `${baseUrl}/${loc}${route}`])
          )
        }
      })
    })
  })

  return sitemap
}