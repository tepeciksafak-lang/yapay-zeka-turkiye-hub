import { useLanguage } from '@/contexts/LanguageContext';
import { Languages, ShieldCheck, Target, Settings } from 'lucide-react';

export const RealityCheckAlmanya = () => {
  const { t } = useLanguage();

  const cards = [
    {
      icon: Languages,
      title: t('almanya.trustfoundation.1.title'),
      text: t('almanya.trustfoundation.1.text'),
    },
    {
      icon: ShieldCheck,
      title: t('almanya.trustfoundation.2.title'),
      text: t('almanya.trustfoundation.2.text'),
    },
    {
      icon: Target,
      title: t('almanya.trustfoundation.3.title'),
      text: t('almanya.trustfoundation.3.text'),
    },
    {
      icon: Settings,
      title: t('almanya.trustfoundation.4.title'),
      text: t('almanya.trustfoundation.4.text'),
    },
  ];

  return (
    <section className="almanya-section py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <h2 className="almanya-animate-on-scroll text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            {t('almanya.trustfoundation.title')}
          </h2>
          <p className="almanya-animate-on-scroll text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            {t('almanya.trustfoundation.subtitle')}
          </p>

          {/* 4-Card Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="almanya-animate-on-scroll bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <card.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {card.title}
                </h3>

                {/* Text */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
