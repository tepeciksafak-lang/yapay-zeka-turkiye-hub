import { useLanguage } from '@/contexts/LanguageContext';
import { useModal } from '@/contexts/ModalContext';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/almanya-bridge-hero.jpeg';

export const HeroAlmanya = () => {
  const { t } = useLanguage();
  const { openQuickAnalysis } = useModal();

  return (
    <section className="almanya-section pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* H1 */}
          <h1 className="almanya-fade-in text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            {t('almanya.hero.h1')}
            <span className="block text-primary mt-2">
              {t('almanya.hero.h1.highlight')}
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="almanya-fade-in almanya-stagger-1 text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            {t('almanya.hero.subtitle')}
          </p>

          {/* Trust Box */}
          <div className="almanya-fade-in almanya-stagger-1 bg-muted/30 border border-border rounded-xl p-6 mb-8 max-w-2xl mx-auto text-left">
            <p className="text-lg font-semibold text-foreground mb-2">
              {t('almanya.hero.trust.title')}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('almanya.hero.trust.text')}
            </p>
            <p className="text-sm text-muted-foreground/70">
              {t('almanya.hero.signature')}
            </p>
          </div>
          
          {/* CTA */}
          <div className="almanya-fade-in almanya-stagger-2 flex flex-col items-center gap-3 mb-12">
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

          {/* Hero Image */}
          <div className="almanya-fade-in almanya-stagger-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl blur-3xl" />
              <img
                src={heroImage}
                alt="Türkiye'den Almanya'ya Satış Sistemi - Yapay Zeka ile Yurtdışı Açılımı"
                className="relative w-full rounded-2xl shadow-2xl border border-border/50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
