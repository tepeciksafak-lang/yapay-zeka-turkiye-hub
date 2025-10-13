// URL mappings for different languages
// Maps logical route names to actual URL paths per language

export type RouteKey = 
  | 'home'
  | 'solutions'
  | 'cases'
  | 'case-detail'
  | 'about'
  | 'sales-automation'
  | 'sales-automation-demo'
  | 'ai-business-areas'
  | 'free-content'
  | 'blog'
  | 'blog-post'
  | 'services'
  | 'privacy'
  | 'terms';

export const routeMappings: Record<string, Record<RouteKey, string>> = {
  tr: {
    'home': '',
    'solutions': '/cozumler',
    'cases': '/vaka-calismalari',
    'case-detail': '/vaka-calismalari/:slug',
    'about': '/hakkimda',
    'sales-automation': '/satis-otomasyonu',
    'sales-automation-demo': '/satis-otomasyonu-demo',
    'ai-business-areas': '/yapay-zeka-is-alanlari',
    'free-content': '/ucretsiz-icerikler',
    'blog': '/blog',
    'blog-post': '/blog/:slug',
    'services': '/hizmetlerimiz',
    'privacy': '/gizlilik',
    'terms': '/kullanim-kosullari'
  },
  de: {
    'home': '',
    'solutions': '/losungen',
    'cases': '/fallstudien',
    'case-detail': '/fallstudien/:slug',
    'about': '/uber-uns',
    'sales-automation': '/vertriebsautomatisierung',
    'sales-automation-demo': '/vertriebsautomatisierung-demo',
    'ai-business-areas': '/ki-geschaftsbereiche',
    'free-content': '/kostenlose-inhalte',
    'blog': '/blog',
    'blog-post': '/blog/:slug',
    'services': '/dienstleistungen',
    'privacy': '/datenschutz',
    'terms': '/nutzungsbedingungen'
  },
  en: {
    'home': '',
    'solutions': '/solutions',
    'cases': '/case-studies',
    'case-detail': '/case-studies/:slug',
    'about': '/about-us',
    'sales-automation': '/sales-automation',
    'sales-automation-demo': '/sales-automation-demo',
    'ai-business-areas': '/ai-business-areas',
    'free-content': '/free-resources',
    'blog': '/blog',
    'blog-post': '/blog/:slug',
    'services': '/services',
    'privacy': '/privacy',
    'terms': '/terms'
  }
};

/**
 * Get the localized path for a route key
 * @param language - The language code (tr, de, en)
 * @param routeKey - The route key from RouteKey type
 * @param params - Optional parameters to replace in the path (e.g., { slug: 'my-post' })
 * @returns The full localized path (e.g., '/de/losungen')
 */
export const getLocalizedRoute = (
  language: string,
  routeKey: RouteKey,
  params?: Record<string, string>
): string => {
  const mapping = routeMappings[language] || routeMappings.tr;
  let path = mapping[routeKey] || '';
  
  // Replace parameters in path (e.g., :slug -> actual-slug)
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      path = path.replace(`:${key}`, value);
    });
  }
  
  return `/${language}${path}`;
};

/**
 * Get the route key from a path
 * @param path - The path to check
 * @returns The route key if found, otherwise undefined
 */
export const getRouteKeyFromPath = (path: string, language: string): RouteKey | undefined => {
  const mapping = routeMappings[language] || routeMappings.tr;
  const cleanPath = path.replace(`/${language}`, '').split('?')[0];
  
  // Find matching route key
  for (const [key, value] of Object.entries(mapping)) {
    const pattern = value.replace(/:[^/]+/g, '[^/]+');
    const regex = new RegExp(`^${pattern}$`);
    if (regex.test(cleanPath)) {
      return key as RouteKey;
    }
  }
  
  return undefined;
};
