import { useLanguage } from '@/contexts/LanguageContext';
import { useModal } from '@/contexts/ModalContext';
import { ArrowRight } from 'lucide-react';

export const FinalCTAAlmanya = () => {
  const { t } = useLanguage();
  const { openQuickAnalysis } = useModal();

  return (
    <section className="almanya-section bg-primary/5 border-t border-primary/20 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="almanya-animate-on-scroll text-lg md:text-xl text-foreground mb-8">
            {t('almanya.finalcta.text')}
          </p>
          
          <button 
            onClick={openQuickAnalysis}
            className="almanya-animate-on-scroll almanya-btn-primary inline-flex items-center gap-2"
          >
            {t('almanya.finalcta.button')}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
