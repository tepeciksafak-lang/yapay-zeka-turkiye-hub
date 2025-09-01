import { createContext, useContext, ReactNode } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

type Language = 'de' | 'tr' | 'en';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  de: {
    // Navigation
    'nav.solutions': 'Lösungen',
    'nav.cases': 'Vaka Çalışmaları', 
    'nav.pricing': 'Preise',
    'nav.blog': 'Blog',
    'nav.contact': 'Kontakt',
    
    // Hero
    'hero.headline': 'Sie führen das Unternehmen.',
    'hero.headline.highlight': 'Wir bauen die Künstliche Intelligenz.',
    'hero.subheadline': 'KI + Automatisierung, die Ihr Unternehmen skaliert – ohne dass Sie mehr leisten müssen.',
    'hero.cta.primary': 'Jetzt kostenlos starten',
    'hero.cta.secondary': 'Demos ansehen',
    'hero.social.proof': '100+ B2B Teams vertrauen auf unsere praktischen Automatisierungen.',
  },
  tr: {
    // Navigation  
    'nav.solutions': 'Çözümler',
    'nav.cases': 'Vaka Çalışmaları',
    'nav.pricing': 'Fiyatlandırma', 
    'nav.blog': 'Blog',
    'nav.contact': 'İletişim',
    
    // Hero
    'hero.headline': 'Siz şirketi yönetin.',
    'hero.headline.highlight': 'Biz Yapay Zekayı kurarız.',
    'hero.subheadline': 'Yapay Zeka + Otomasyon ile Şirketinizi Daha da Büyütün – Fazladan Çaba Harcamadan.',
    'hero.cta.primary': 'Şimdi ücretsiz başlayın',
    'hero.cta.secondary': 'Demoları Gör', 
    'hero.social.proof': '100+ B2B ekip için pratik otomasyon kurguladık.',
  },
  en: {
    // Navigation
    'nav.solutions': 'Solutions',
    'nav.cases': 'Case Studies',
    'nav.pricing': 'Pricing',
    'nav.blog': 'Blog', 
    'nav.contact': 'Contact',
    
    // Hero
    'hero.headline': 'You run the business.',
    'hero.headline.highlight': 'We build the Artificial Intelligence.',
    'hero.subheadline': 'AI + Automation that scales your company — without you doing more.',
    'hero.cta.primary': 'Start free now',
    'hero.cta.secondary': 'See Demos',
    'hero.social.proof': '100+ B2B teams trust our practical automation solutions.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  
  const currentLanguage = (lang as Language) || 'tr'; // Default to Turkish
  
  const setLanguage = (newLang: Language) => {
    const currentPath = window.location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/(de|tr|en)/, '') || '/';
    navigate(`/${newLang}${pathWithoutLang}`);
  };

  const t = (key: string): string => {
    return translations[currentLanguage]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
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