import { createContext, useContext, ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Language = 'de' | 'tr' | 'en';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  initializeLanguage: (lang: string | undefined) => void;
}

const translations = {
  de: {
    // Navigation
    'nav.solutions': 'Lösungen',
    'nav.cases': 'Vaka Çalışmaları', 
    'nav.freeContent': 'Kostenlose Inhalte',
    'nav.blog': 'Blog',
    'nav.contact': 'Kontakt',
    
    // Hero
    'hero.headline': 'Sie führen das Unternehmen.',
    'hero.headline.highlight': 'Wir bauen die Künstliche Intelligenz.',
    'hero.subheadline': 'KI + Automatisierung, die Ihr Unternehmen skaliert – ohne dass Sie mehr leisten müssen.',
    'hero.cta.primary': 'Jetzt kostenlos starten',
    
    'hero.social.proof': '100+ B2B Teams vertrauen auf unsere praktischen Automatisierungen.',
  },
  tr: {
    // Navigation  
    'nav.solutions': 'Çözümler',
    'nav.cases': 'Vaka Çalışmaları',
    'nav.freeContent': 'Ücretsiz İçerikler', 
    'nav.blog': 'Blog',
    'nav.contact': 'İletişim',
    
    // Hero
    'hero.headline': 'Siz şirketi yönetin.',
    'hero.headline.highlight': 'Biz Yapay Zekayı kurarız.',
    'hero.subheadline': 'Yapay Zeka + Otomasyon ile Şirketinizi Daha da Büyütün – Fazladan Çaba Harcamadan.',
    'hero.cta.primary': 'Şimdi ücretsiz başlayın',
     
    'hero.social.proof': '100+ B2B ekip için pratik otomasyon kurguladık.',
  },
  en: {
    // Navigation
    'nav.solutions': 'Solutions',
    'nav.cases': 'Case Studies',
    'nav.freeContent': 'Free Content',
    'nav.blog': 'Blog', 
    'nav.contact': 'Contact',
    
    // Hero
    'hero.headline': 'You run the business.',
    'hero.headline.highlight': 'We build the Artificial Intelligence.',
    'hero.subheadline': 'AI + Automation that scales your company — without you doing more.',
    'hero.cta.primary': 'Start free now',
    
    'hero.social.proof': '100+ B2B teams trust our practical automation solutions.',
  }
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