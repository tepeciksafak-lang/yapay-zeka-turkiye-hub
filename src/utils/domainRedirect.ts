// Domain Configuration - Turkish only
export const DOMAIN_CONFIG = {
  tr: 'yapayzekapratik.com'
} as const;

export type SupportedLanguage = keyof typeof DOMAIN_CONFIG;

/**
 * Check if user is on correct domain
 * No redirects needed for single-language setup
 */
export const checkAndRedirectDomain = () => {
  // No redirects needed - single language/domain setup
};

/**
 * Get the domain URL
 */
export const getDomainForLanguage = (_lang: SupportedLanguage): string => {
  return 'https://yapayzekapratik.com';
};
