import { useLanguage } from '@/contexts/LanguageContext';
import { Quote } from 'lucide-react';

export const AuthorityAlmanya = () => {
  const { t } = useLanguage();

  const points = [
    t('almanya.authority.point1'),
    t('almanya.authority.point2'),
    t('almanya.authority.point3'),
  ];

  return (
    <section className="almanya-section bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="almanya-animate-on-scroll text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            {t('almanya.authority.title')}
          </h2>

          <div className="almanya-animate-on-scroll bg-card border border-border rounded-2xl p-8 md:p-12">
            <p className="text-lg text-muted-foreground mb-8">
              {t('almanya.authority.intro')}
            </p>

            <ul className="space-y-4 mb-8">
              {points.map((point, index) => (
                <li key={index} className="text-foreground text-lg">
                  {point}
                </li>
              ))}
            </ul>

            <div className="relative bg-primary/5 border border-primary/20 rounded-xl p-6">
              <Quote className="absolute -top-3 -left-3 w-8 h-8 text-primary bg-card rounded-full p-1" />
              <p className="text-foreground font-medium italic pl-4">
                {t('almanya.authority.usp')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
