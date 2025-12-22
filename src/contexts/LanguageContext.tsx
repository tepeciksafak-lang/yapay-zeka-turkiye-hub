import { createContext, useContext, ReactNode, useState, useCallback } from 'react';
import trTranslations from '../../locales/tr';

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
  
  const initializeLanguage = useCallback((_lang: string | undefined) => {
    // Always Turkish - no action needed
  }, []);
  
  const setLanguage = (_newLang: Language) => {
    // Always Turkish - no action needed
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
    // Return a safe fallback during HMR or before provider mounts
    return {
      currentLanguage: 'tr' as const,
      setLanguage: () => {},
      t: (key: string) => key,
      initializeLanguage: () => {},
    };
  }
  return context;
};
