import { useLanguage } from '@/contexts/LanguageContext';
import { useModal } from '@/contexts/ModalContext';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/almanya-bridge-hero.png';

export const HeroAlmanya = () => {
  const { t } = useLanguage();
  const { openQuickAnalysis } = useModal();

  return (
    <section className="almanya-section pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* H1 */}
            <h1 className="almanya-fade-in text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {t('almanya.hero.h1')}
              <span className="block text-primary mt-2">
                {t('almanya.hero.h1.highlight')}
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="almanya-fade-in almanya-stagger-1 text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              {t('almanya.hero.subtitle')}
            </p>

            {/* CTA */}
            <div className="almanya-fade-in almanya-stagger-2 flex flex-col items-center lg:items-start gap-3">
              <button 
                onClick={openQuickAnalysis} 
                className="almanya-btn-primary inline-flex items-center gap-2 justify-center"
              >
                {t('almanya.hero.cta.primary')}
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-sm text-muted-foreground">
                {t('almanya.hero.microcopy')}
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="almanya-fade-in almanya-stagger-2">
            <img
              src={heroImage}
              alt="Türkiye'den Almanya'ya Satış Sistemi - Yapay Zeka ile Yurtdışı Açılımı"
              className="w-full max-w-lg mx-auto lg:max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
