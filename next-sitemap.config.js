/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*', '/admin/*'],
  alternateRefs: [
    {
      href: process.env.NEXT_PUBLIC_BASE_URL + '/tr',
      hreflang: 'tr',
    },
    {
      href: process.env.NEXT_PUBLIC_BASE_URL + '/de',
      hreflang: 'de',
    },
    {
      href: process.env.NEXT_PUBLIC_BASE_URL + '/en',
      hreflang: 'en',
    },
  ],
  transform: async (config, path) => {
    // Handle locale-specific URLs
    const locales = ['tr', 'de', 'en']
    
    return {
      loc: path,
      changefreq: path === '/' ? 'weekly' : 'monthly',
      priority: path === '/' ? 1.0 : 0.8,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: locales.map(locale => ({
        href: `${config.siteUrl}/${locale}${path === '/' ? '' : path}`,
        hreflang: locale,
      })),
    }
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/']
      }
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com'}/sitemap.xml`,
    ],
  },
}