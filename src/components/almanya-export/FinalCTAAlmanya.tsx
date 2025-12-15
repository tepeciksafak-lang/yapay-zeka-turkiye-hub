import { useLanguage } from '@/contexts/LanguageContext';
import { useModal } from '@/contexts/ModalContext';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

export const FinalCTAAlmanya = () => {
  const { t } = useLanguage();
  const { openQuickAnalysis } = useModal();

  const bullets = [
    t('almanya.finalcta.bullet1'),
    t('almanya.finalcta.bullet2'),
    t('almanya.finalcta.bullet3'),
  ];

  return (
    <section className="almanya-section bg-primary/5 border-t border-primary/20 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="almanya-animate-on-scroll inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            {t('almanya.finalcta.badge')}
          </div>
          
          <h2 className="almanya-animate-on-scroll text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('almanya.finalcta.title')}
          </h2>
          
          <p className="almanya-animate-on-scroll text-lg md:text-xl text-muted-foreground mb-8">
            {t('almanya.finalcta.text')}
          </p>

          {/* Bullets */}
          <div className="almanya-animate-on-scroll flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            {bullets.map((bullet, index) => (
              <div key={index} className="flex items-center gap-2 text-foreground">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>
          
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
