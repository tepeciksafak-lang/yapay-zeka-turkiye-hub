import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'
  
  // Turkish routes (fully implemented)
  const trRoutes = [
    '',
    '/cozumler',
    '/vaka-calismalari',
    '/vaka-calismalari/car-studio-ai',
    '/vaka-calismalari/acilsatis',
    '/vaka-calismalari/salevium',
    '/vaka-calismalari/erpa-teknoloji',
    '/vaka-calismalari/cemkimsan',
    '/vaka-calismalari/dkm-coach-bilge',
    '/ucretsiz-icerikler',
    '/blog',
    '/gizlilik',
    '/kullanim-kosullari'
  ]

  // DE and EN routes (only homepage for now)
  const deRoutes = ['']
  const enRoutes = ['']

  const sitemap: MetadataRoute.Sitemap = []

  // Add Turkish routes
  trRoutes.forEach((route) => {
    sitemap.push({
      url: `${baseUrl}/tr${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1.0 : 0.8,
      alternates: {
        languages: {
          'tr': `${baseUrl}/tr${route}`,
          'de': `${baseUrl}/de`,
          'en': `${baseUrl}/en`
        }
      }
    })
  })

  // Add German homepage
  sitemap.push({
    url: `${baseUrl}/de`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1.0,
    alternates: {
      languages: {
        'de': `${baseUrl}/de`,
        'tr': `${baseUrl}/tr`,
        'en': `${baseUrl}/en`
      }
    }
  })

  // Add English homepage
  sitemap.push({
    url: `${baseUrl}/en`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1.0,
    alternates: {
      languages: {
        'en': `${baseUrl}/en`,
        'tr': `${baseUrl}/tr`,
        'de': `${baseUrl}/de`
      }
    }
  })

  return sitemap
}