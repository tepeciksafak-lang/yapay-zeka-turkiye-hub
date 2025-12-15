import { useLanguage } from '@/contexts/LanguageContext';
import { Languages, ShieldCheck, TrendingUp, Settings } from 'lucide-react';

export const RealityCheckAlmanya = () => {
  const { t } = useLanguage();

  const cards = [
    {
      icon: Languages,
      title: t('almanya.trustfoundation.1.title'),
      bullets: [
        t('almanya.trustfoundation.1.bullet1'),
        t('almanya.trustfoundation.1.bullet2'),
        t('almanya.trustfoundation.1.bullet3'),
      ],
      trust: t('almanya.trustfoundation.1.trust'),
    },
    {
      icon: ShieldCheck,
      title: t('almanya.trustfoundation.2.title'),
      bullets: [
        t('almanya.trustfoundation.2.bullet1'),
        t('almanya.trustfoundation.2.bullet2'),
        t('almanya.trustfoundation.2.bullet3'),
      ],
      trust: t('almanya.trustfoundation.2.trust'),
    },
    {
      icon: TrendingUp,
      title: t('almanya.trustfoundation.3.title'),
      bullets: [
        t('almanya.trustfoundation.3.bullet1'),
        t('almanya.trustfoundation.3.bullet2'),
        t('almanya.trustfoundation.3.bullet3'),
      ],
      trust: t('almanya.trustfoundation.3.trust'),
    },
    {
      icon: Settings,
      title: t('almanya.trustfoundation.4.title'),
      bullets: [
        t('almanya.trustfoundation.4.bullet1'),
        t('almanya.trustfoundation.4.bullet2'),
        t('almanya.trustfoundation.4.bullet3'),
      ],
      trust: t('almanya.trustfoundation.4.trust'),
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

                {/* Bullets */}
                <ul className="space-y-2 mb-4">
                  {card.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={bulletIndex}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Trust Line */}
                <p className="text-sm text-primary/80 italic border-t border-border/50 pt-4">
                  {card.trust}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
