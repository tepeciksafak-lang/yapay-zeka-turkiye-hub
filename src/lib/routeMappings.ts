// URL mappings for Turkish language only

export type RouteKey = 
  | 'home'
  | 'solutions'
  | 'cases'
  | 'case-detail'
  | 'free-content'
  | 'blog'
  | 'blog-post'
  | 'about'
  | 'privacy'
  | 'terms'
  | 'solution-leadgen-ki'
  | 'solution-vertrieb'
  | 'solution-marketing'
  | 'solution-crm'
  | 'solution-kundenservice'
  | 'almanya-export';

export const routeMappings: Record<string, Record<RouteKey, string>> = {
  tr: {
    'home': '',
    'solutions': '/cozumler',
    'cases': '/vaka-calismalari',
    'case-detail': '/vaka-calismalari/:slug',
    'free-content': '/ucretsiz-icerikler',
    'blog': '/blog',
    'blog-post': '/blog/:slug',
    'about': '/hakkimizda',
    'privacy': '/gizlilik',
    'terms': '/kullanim-kosullari',
    'solution-leadgen-ki': '/cozumler/lead-generation',
    'solution-vertrieb': '/cozumler/satis-otomasyonu',
    'solution-marketing': '/cozumler/pazarlama-otomasyonu',
    'solution-crm': '/cozumler/crm-otomasyonu',
    'solution-kundenservice': '/cozumler/musteri-hizmeti-otomasyonu',
    'almanya-export': '/cozumler/almanya-ihracat'
  }
};

/**
 * Get the localized path for a route key
 */
export const getLocalizedRoute = (
  language: string,
  routeKey: RouteKey,
  params?: Record<string, string>
): string => {
  const mapping = routeMappings['tr']; // Always use Turkish
  let path = mapping[routeKey] || '';
  
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      path = path.replace(`:${key}`, value);
    });
  }
  
  return `/tr${path}`;
};

/**
 * Get the route key from a path
 */
export const getRouteKeyFromPath = (path: string, language: string): RouteKey | undefined => {
  const mapping = routeMappings['tr'];
  const cleanPath = path.replace(/^\/tr/, '').split('?')[0];
  
  for (const [key, value] of Object.entries(mapping)) {
    const pattern = value.replace(/:[^/]+/g, '[^/]+');
    const regex = new RegExp(`^${pattern}$`);
    if (regex.test(cleanPath)) {
      return key as RouteKey;
    }
  }
  
  return undefined;
};

/**
 * Extract parameters from a path based on route key
 */
export const extractParamsFromPath = (
  path: string,
  language: string,
  routeKey: RouteKey
): Record<string, string> | undefined => {
  const mapping = routeMappings['tr'];
  const pattern = mapping[routeKey];
  
  if (!pattern) return undefined;
  
  const cleanPath = path.replace(/^\/tr/, '').split('?')[0];
  const regex = new RegExp(pattern.replace(/:[^/]+/g, '([^/]+)'));
  const match = cleanPath.match(regex);
  
  if (!match) return undefined;
  
  const params: Record<string, string> = {};
  const paramNames = pattern.match(/:[^/]+/g)?.map(p => p.slice(1)) || [];
  
  paramNames.forEach((name, index) => {
    params[name] = match[index + 1];
  });
  
  return params;
};

/**
 * Generate hreflang URLs (Turkish only)
 */
export const getHreflangUrls = (
  routeKey: RouteKey,
  params?: Record<string, string>
): Record<string, string> => {
  const baseUrl = 'https://yapayzekapratik.com';
  
  const urls: Record<string, string> = {
    'tr': `${baseUrl}${getLocalizedRoute('tr', routeKey, params)}`,
    'x-default': `${baseUrl}${getLocalizedRoute('tr', routeKey, params)}`
  };
  
  return urls;
};
