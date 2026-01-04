import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useModal } from '@/contexts/ModalContext';
import { QuickAnalysisModal } from './QuickAnalysisModal';

interface LanguageWrapperProps {
  children: React.ReactNode;
}

export const LanguageWrapper = ({ children }: LanguageWrapperProps) => {
  const { initializeLanguage } = useLanguage();
  const { isQuickAnalysisOpen, closeQuickAnalysis } = useModal();

  // Monolingual site - always Turkish
  const derivedLang = 'tr';

  useEffect(() => {
    initializeLanguage(derivedLang);
  }, [initializeLanguage]);

  return (
    <>
      {children}
      <QuickAnalysisModal 
        open={isQuickAnalysisOpen} 
        onOpenChange={closeQuickAnalysis} 
      />
    </>
  );
};