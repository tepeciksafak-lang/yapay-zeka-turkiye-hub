import { useLanguage } from '@/contexts/LanguageContext';
import { useModal } from '@/contexts/ModalContext';
import { ArrowRight, CheckCircle } from 'lucide-react';
import safakImage from '@/assets/safak-tepecik-almanya.jpeg';

export const HeroAlmanya = () => {
  const { t } = useLanguage();
  const { openQuickAnalysis } = useModal();

  const timelineItems = [
    t('almanya.hero.timeline.week1'),
    t('almanya.hero.timeline.week2'),
    t('almanya.hero.timeline.week3'),
  ];

  return (
    <section className="almanya-section pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content - 60% */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <h1 className="almanya-fade-in text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {t('almanya.hero.h1')}
              <span className="block text-primary mt-2">
                {t('almanya.hero.h1.highlight')}
              </span>
            </h1>
            
            <p className="almanya-fade-in almanya-stagger-1 text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
              {t('almanya.hero.subtitle')}
            </p>

            {/* Micro Timeline */}
            <div className="almanya-fade-in almanya-stagger-1 flex flex-col gap-2 mb-8">
              {timelineItems.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            
            <div className="almanya-fade-in almanya-stagger-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <button 
                onClick={openQuickAnalysis} 
                className="almanya-btn-primary inline-flex items-center gap-2 justify-center"
              >
                {t('almanya.hero.cta.primary')}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Trust Badge */}
            <p className="almanya-fade-in almanya-stagger-3 text-sm text-muted-foreground border border-border rounded-full px-4 py-2 inline-block">
              {t('almanya.hero.trust')}
            </p>
          </div>

          {/* Right Image - 40% */}
          <div className="lg:col-span-2 almanya-fade-in almanya-stagger-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-3xl" />
              <img
                src={safakImage}
                alt="Şafak Tepecik - Almanya İhracat + İkamet Uzmanı"
                className="relative w-full max-w-md mx-auto lg:max-w-none rounded-2xl shadow-2xl border border-border/50"
              />
              {/* Bio Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 lg:left-4 lg:translate-x-0 bg-card/95 backdrop-blur-sm border border-border rounded-xl px-4 py-2 shadow-lg">
                <p className="text-xs text-muted-foreground text-center lg:text-left">
                  {t('almanya.hero.bio')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
