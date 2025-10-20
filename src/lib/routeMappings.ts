// URL mappings for different languages
// Maps logical route names to actual URL paths per language

export type RouteKey = 
  | 'home'
  | 'solutions'
  | 'cases'
  | 'case-detail'
  | 'free-content'
  | 'blog'
  | 'blog-post'
  | 'privacy'
  | 'terms';

export const routeMappings: Record<string, Record<RouteKey, string>> = {
  tr: {
    'home': '',
    'solutions': '/cozumler',
    'cases': '/vaka-calismalari',
    'case-detail': '/vaka-calismalari/:slug',
    'free-content': '/ucretsiz-icerikler',
    'blog': '/blog',
    'blog-post': '/blog/:slug',
    'privacy': '/gizlilik',
    'terms': '/kullanim-kosullari'
  },
  de: {
    'home': '',
    'solutions': '/losungen',
    'cases': '/fallstudien',
    'case-detail': '/fallstudien/:slug',
    'free-content': '/kostenlose-inhalte',
    'blog': '/blog',
    'blog-post': '/blog/:slug',
    'privacy': '/datenschutz',
    'terms': '/nutzungsbedingungen'
  },
  en: {
    'home': '',
    'solutions': '/solutions',
    'cases': '/case-studies',
    'case-detail': '/case-studies/:slug',
    'free-content': '/free-resources',
    'blog': '/blog',
    'blog-post': '/blog/:slug',
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

/**
 * Extract parameters from a path based on route key
 * @param path - The path to extract parameters from
 * @param language - The language code
 * @param routeKey - The route key
 * @returns Object with extracted parameters or undefined
 */
export const extractParamsFromPath = (
  path: string,
  language: string,
  routeKey: RouteKey
): Record<string, string> | undefined => {
  const mapping = routeMappings[language] || routeMappings.tr;
  const pattern = mapping[routeKey];
  
  if (!pattern) return undefined;
  
  const cleanPath = path.replace(`/${language}`, '').split('?')[0];
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
