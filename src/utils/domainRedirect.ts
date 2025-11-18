// Multi-Domain Configuration
export const DOMAIN_CONFIG = {
  de: 'ki-automatisieren.de',
  tr: 'yapayzekapratik.com'
} as const;

export type SupportedLanguage = keyof typeof DOMAIN_CONFIG;

/**
 * Check if user is on correct domain for current language
 * Redirects to correct domain if necessary
 */
export const checkAndRedirectDomain = () => {
  const currentDomain = window.location.hostname;
  const currentPath = window.location.pathname;
  const currentLang = currentPath.split('/')[1] as SupportedLanguage;
  
  // Skip redirect for localhost/staging/lovable
  if (
    currentDomain.includes('localhost') || 
    currentDomain.includes('lovable.app') ||
    currentDomain.includes('127.0.0.1')
  ) {
    return;
  }
  
  // Root path redirects
  if (currentPath === '/' || currentPath === '') {
    // ki-automatisieren.de/ → /de
    if (currentDomain.includes('ki-automatisieren.de')) {
      window.location.replace('https://ki-automatisieren.de/de');
      return;
    }
    // yapayzekapratik.com/ → /tr
    if (currentDomain.includes('yapayzekapratik.com')) {
      window.location.replace('https://yapayzekapratik.com/tr');
      return;
    }
  }
  
  // Get expected domain for current language
  const expectedDomain = DOMAIN_CONFIG[currentLang];
  
  // Redirect if on wrong domain
  if (expectedDomain && !currentDomain.includes(expectedDomain)) {
    const newUrl = `https://${expectedDomain}${currentPath}${window.location.search}${window.location.hash}`;
    window.location.replace(newUrl);
  }
};

/**
 * Get the correct domain URL for a given language
 */
export const getDomainForLanguage = (lang: SupportedLanguage): string => {
  return `https://${DOMAIN_CONFIG[lang]}`;
};
