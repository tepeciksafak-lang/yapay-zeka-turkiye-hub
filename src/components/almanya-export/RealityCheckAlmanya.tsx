import { useLanguage } from '@/contexts/LanguageContext';
import { Languages, ShieldCheck, Target, Home, ArrowDown } from 'lucide-react';

export const RealityCheckAlmanya = () => {
  const { t } = useLanguage();

  const challenges = [
    {
      icon: Languages,
      title: t('almanya.realitycheck.1.title'),
      description: t('almanya.realitycheck.1.description'),
    },
    {
      icon: ShieldCheck,
      title: t('almanya.realitycheck.2.title'),
      description: t('almanya.realitycheck.2.description'),
    },
    {
      icon: Target,
      title: t('almanya.realitycheck.3.title'),
      description: t('almanya.realitycheck.3.description'),
    },
    {
      icon: Home,
      title: t('almanya.realitycheck.4.title'),
      description: t('almanya.realitycheck.4.description'),
    },
  ];

  const scrollToSolution = () => {
    const element = document.getElementById('solution-modules');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="almanya-section py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="almanya-animate-on-scroll text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            {t('almanya.realitycheck.title')}
          </h2>
          <p className="almanya-animate-on-scroll text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            {t('almanya.realitycheck.subtitle')}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="almanya-animate-on-scroll bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <challenge.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {challenge.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>

          <div className="almanya-animate-on-scroll text-center">
            <button
              onClick={scrollToSolution}
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              {t('almanya.realitycheck.cta')}
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
