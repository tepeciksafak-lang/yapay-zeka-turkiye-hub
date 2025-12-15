import { useLanguage } from '@/contexts/LanguageContext';
import { AlertTriangle, Clock, Globe, Shield, Home } from 'lucide-react';

export const AgitateAlmanya = () => {
  const { t } = useLanguage();

  const whyItems = [
    { icon: Clock, text: t('almanya.agitate.why.1') },
    { icon: Globe, text: t('almanya.agitate.why.2') },
    { icon: Shield, text: t('almanya.agitate.why.3') },
    { icon: Home, text: t('almanya.agitate.why.4') },
  ];

  return (
    <section className="almanya-section bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="almanya-animate-on-scroll text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            {t('almanya.agitate.title')}
          </h2>

          <div className="almanya-animate-on-scroll grid md:grid-cols-3 gap-6 mb-12">
            {/* Scenario */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold text-primary mb-3">{t('almanya.agitate.scenario.title')}</h3>
              <p className="text-muted-foreground text-sm">{t('almanya.agitate.scenario.text')}</p>
            </div>

            {/* Problem */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold text-orange-500 mb-3">{t('almanya.agitate.problem.title')}</h3>
              <p className="text-muted-foreground text-sm">{t('almanya.agitate.problem.text')}</p>
            </div>

            {/* Result */}
            <div className="bg-card border border-destructive/50 rounded-xl p-6">
              <h3 className="font-semibold text-destructive mb-3">{t('almanya.agitate.result.title')}</h3>
              <p className="text-muted-foreground text-sm font-medium">{t('almanya.agitate.result.text')}</p>
            </div>
          </div>

          {/* Hard Truth */}
          <div className="almanya-animate-on-scroll bg-destructive/10 border border-destructive/30 rounded-xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-destructive mb-2">{t('almanya.agitate.truth.title')}</h3>
                <p className="text-foreground">{t('almanya.agitate.truth.text')}</p>
              </div>
            </div>
          </div>

          {/* Why You're Losing */}
          <div className="almanya-animate-on-scroll">
            <h3 className="text-xl font-semibold text-center mb-6 text-foreground">
              {t('almanya.agitate.why.title')}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {whyItems.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 bg-card border border-border rounded-lg p-4"
                >
                  <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-destructive" />
                  </div>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
