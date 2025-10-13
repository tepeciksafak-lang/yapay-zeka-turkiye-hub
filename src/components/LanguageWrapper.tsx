import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface LanguageWrapperProps {
  children: React.ReactNode;
}

export const LanguageWrapper = ({ children }: LanguageWrapperProps) => {
  const { lang } = useParams<{ lang: string }>();
  const location = useLocation();
  const { initializeLanguage } = useLanguage();

  useEffect(() => {
    // Try to get language from params first, then from URL path
    let effectiveLang = lang;
    
    if (!effectiveLang) {
      // Extract language from pathname (e.g., "/de/about" -> "de")
      const pathSegments = location.pathname.split('/').filter(Boolean);
      const firstSegment = pathSegments[0];
      
      // Check if first segment is a valid language code
      if (firstSegment === 'de' || firstSegment === 'tr' || firstSegment === 'en') {
        effectiveLang = firstSegment;
      }
    }
    
    initializeLanguage(effectiveLang);
  }, [lang, location.pathname, initializeLanguage]);

  return <>{children}</>;
};