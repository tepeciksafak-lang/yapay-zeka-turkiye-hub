import { useLanguage } from '@/contexts/LanguageContext';
import { Factory, Monitor, CalendarCheck } from 'lucide-react';

export const SocialProofAlmanya = () => {
  const { t } = useLanguage();

  const cases = [
    {
      icon: Factory,
      title: t('almanya.socialproof.case1.title'),
      description: t('almanya.socialproof.case1.description'),
      logo: '/logos/cemkimsan.avif',
    },
    {
      icon: Monitor,
      title: t('almanya.socialproof.case2.title'),
      description: t('almanya.socialproof.case2.description'),
      logo: '/logos/erpa.avif',
    },
    {
      icon: CalendarCheck,
      title: t('almanya.socialproof.case3.title'),
      description: t('almanya.socialproof.case3.description'),
      logo: null,
    },
  ];

  return (
    <section id="social-proof" className="almanya-section py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="almanya-animate-on-scroll text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            {t('almanya.socialproof.title')}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((caseItem, index) => (
              <div 
                key={index}
                className="almanya-animate-on-scroll bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <caseItem.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{caseItem.title}</h3>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {caseItem.description}
                </p>

                {caseItem.logo && (
                  <div className="pt-4 border-t border-border">
                    <img 
                      src={caseItem.logo} 
                      alt={caseItem.title}
                      className="h-8 w-auto opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
