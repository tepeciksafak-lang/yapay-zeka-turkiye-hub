import { useLanguage } from '@/contexts/LanguageContext';
import { useModal } from '@/contexts/ModalContext';
import { ArrowRight, Play } from 'lucide-react';
import { getLocalizedRoute } from '@/lib/routeMappings';

export const HeroAlmanya = () => {
  const { t, currentLanguage } = useLanguage();
  const { openQuickAnalysis } = useModal();

  const scrollToCases = () => {
    document.getElementById('social-proof')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="almanya-section pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="almanya-fade-in text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
            {t('almanya.hero.h1')}
            <span className="block text-primary mt-2">
              {t('almanya.hero.h1.highlight')}
            </span>
          </h1>
          
          <p className="almanya-fade-in almanya-stagger-1 text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            {t('almanya.hero.subtitle')}
          </p>
          
          <div className="almanya-fade-in almanya-stagger-2 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openQuickAnalysis} 
              className="almanya-btn-primary inline-flex items-center gap-2 justify-center"
            >
              {t('almanya.hero.cta.primary')}
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={scrollToCases} 
              className="almanya-btn-secondary inline-flex items-center gap-2 justify-center"
            >
              <Play className="w-4 h-4" />
              {t('almanya.hero.cta.secondary')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
