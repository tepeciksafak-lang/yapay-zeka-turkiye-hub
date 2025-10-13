import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface LanguageWrapperProps {
  children: React.ReactNode;
}

export const LanguageWrapper = ({ children }: LanguageWrapperProps) => {
  const { lang } = useParams<{ lang: string }>();
  const { initializeLanguage } = useLanguage();

  useEffect(() => {
    initializeLanguage(lang);
  }, [lang, initializeLanguage]);

  return <>{children}</>;
};