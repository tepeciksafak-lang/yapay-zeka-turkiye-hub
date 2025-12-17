import { useLanguage } from '@/contexts/LanguageContext';
import { Search, Building2, Rocket, RefreshCw } from 'lucide-react';

export const ProcessAlmanya = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: '01',
      icon: Search,
      title: t('almanya.process.step1.title'),
      description: t('almanya.process.step1.description'),
    },
    {
      number: '02',
      icon: Building2,
      title: t('almanya.process.step2.title'),
      description: t('almanya.process.step2.description'),
    },
    {
      number: '03',
      icon: Rocket,
      title: t('almanya.process.step3.title'),
      description: t('almanya.process.step3.description'),
    },
    {
      number: '04',
      icon: RefreshCw,
      title: t('almanya.process.step4.title'),
      description: t('almanya.process.step4.description'),
    },
  ];

  return (
    <section className="bg-black py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('almanya.process.title')}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              {t('almanya.process.subtitle')}
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.number}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon */}
                  <Icon className="w-7 h-7 text-primary/60 mb-4" strokeWidth={1.5} />
                  
                  {/* Number */}
                  <span className="text-4xl md:text-5xl font-bold text-primary/80 mb-3">
                    {step.number}
                  </span>
                  
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
