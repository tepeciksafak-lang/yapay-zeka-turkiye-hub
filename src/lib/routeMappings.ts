// URL mappings for Turkish language only (root level, no /tr prefix)

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

export const routeMappings: Record<RouteKey, string> = {
  'home': '/',
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
};

/**
 * Get the localized path for a route key (no language prefix needed)
 */
export const getLocalizedRoute = (
  _language: string,
  routeKey: RouteKey,
  params?: Record<string, string>
): string => {
  let path = routeMappings[routeKey] || '/';
  
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      path = path.replace(`:${key}`, value);
    });
  }
  
  return path;
};

/**
 * Get the route key from a path
 */
export const getRouteKeyFromPath = (path: string, _language?: string): RouteKey | undefined => {
  const cleanPath = path.split('?')[0];
  
  for (const [key, value] of Object.entries(routeMappings)) {
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
  _language: string,
  routeKey: RouteKey
): Record<string, string> | undefined => {
  const pattern = routeMappings[routeKey];
  
  if (!pattern) return undefined;
  
  const cleanPath = path.split('?')[0];
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
  const path = getLocalizedRoute('tr', routeKey, params);
  
  const urls: Record<string, string> = {
    'tr': `${baseUrl}${path}`,
    'x-default': `${baseUrl}${path}`
  };
  
  return urls;
};
