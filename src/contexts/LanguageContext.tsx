import { createContext, useContext, ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import deTranslations from '../../locales/de';
import trTranslations from '../../locales/tr';
import enTranslations from '../../locales/en';
import { getRouteKeyFromPath, getLocalizedRoute, extractParamsFromPath } from '@/lib/routeMappings';

type Language = 'de' | 'tr' | 'en';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  initializeLanguage: (lang: string | undefined) => void;
}

const translations = {
  de: deTranslations,
  tr: trTranslations,
  en: enTranslations
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('tr');
  const navigate = useNavigate();
  
  const initializeLanguage = (lang: string | undefined) => {
    const validLang = (lang as Language);
    if (validLang && ['de', 'tr', 'en'].includes(validLang)) {
      setCurrentLanguage(validLang);
    } else {
      setCurrentLanguage('tr'); // Default to Turkish
    }
  };
  
  const setLanguage = (newLang: Language) => {
    const currentPath = window.location.pathname;
    const currentLang = currentPath.split('/')[1] as Language;
    
    // Find the route key of the current page
    const routeKey = getRouteKeyFromPath(currentPath, currentLang);
    
    if (routeKey) {
      // Extract parameters using the helper function
      const params = extractParamsFromPath(currentPath, currentLang, routeKey);
      
      // Generate correct localized URL
      const newPath = getLocalizedRoute(newLang, routeKey, params || {});
      navigate(newPath);
    } else {
      // Fallback: Simple replacement for unknown routes
      const pathWithoutLang = currentPath.replace(/^\/(de|tr|en)/, '') || '/';
      navigate(`/${newLang}${pathWithoutLang}`);
    }
    
    setCurrentLanguage(newLang);
  };

  const t = (key: string): string => {
    const tryGet = (lang: Language) => translations[lang]?.[key];
    return (
      tryGet(currentLanguage) ??
      tryGet('de') ??
      tryGet('en') ??
      tryGet('tr') ??
      key
    );
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t, initializeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};