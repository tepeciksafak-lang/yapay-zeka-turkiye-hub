import { createContext, useContext, ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import deTranslations from '../../locales/de';
import trTranslations from '../../locales/tr';
import enTranslations from '../../locales/en';

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
    const pathWithoutLang = currentPath.replace(/^\/(de|tr|en)/, '') || '/';
    navigate(`/${newLang}${pathWithoutLang}`);
    setCurrentLanguage(newLang);
  };

  const t = (key: string): string => {
    return translations[currentLanguage]?.[key] || key;
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