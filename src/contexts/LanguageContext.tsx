import { createContext, useContext, ReactNode, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import trTranslations from '../../locales/tr';
import { getRouteKeyFromPath, getLocalizedRoute, extractParamsFromPath } from '@/lib/routeMappings';

type Language = 'tr';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  initializeLanguage: (lang: string | undefined) => void;
}

const translations = {
  tr: trTranslations
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLanguage] = useState<Language>('tr');
  const navigate = useNavigate();
  
  const initializeLanguage = useCallback((lang: string | undefined) => {
    // Always Turkish - no action needed
  }, []);
  
  const setLanguage = (newLang: Language) => {
    // Always Turkish - redirect to Turkish version
    const currentPath = window.location.pathname;
    const routeKey = getRouteKeyFromPath(currentPath, 'tr');
    
    if (routeKey) {
      const params = extractParamsFromPath(currentPath, 'tr', routeKey);
      const newPath = getLocalizedRoute('tr', routeKey, params || {});
      navigate(newPath);
    } else {
      const pathWithoutLang = currentPath.replace(/^\/(de|tr|en)/, '') || '/';
      navigate(`/tr${pathWithoutLang}`);
    }
  };

  const t = (key: string): string => {
    return translations.tr?.[key] ?? key;
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
