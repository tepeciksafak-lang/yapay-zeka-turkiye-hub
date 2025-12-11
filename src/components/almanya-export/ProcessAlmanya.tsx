import { useLanguage } from '@/contexts/LanguageContext';

export const ProcessAlmanya = () => {
  const { t } = useLanguage();

  const steps = [
    {
      week: '1',
      title: t('almanya.process.step1.title'),
      description: t('almanya.process.step1.description'),
    },
    {
      week: '2',
      title: t('almanya.process.step2.title'),
      description: t('almanya.process.step2.description'),
    },
    {
      week: '3',
      title: t('almanya.process.step3.title'),
      description: t('almanya.process.step3.description'),
    },
  ];

  return (
    <section className="almanya-section bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="almanya-animate-on-scroll text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            {t('almanya.process.title')}
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

            <div className="space-y-8 md:space-y-0">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`almanya-animate-on-scroll relative md:flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-card border border-border rounded-xl p-6">
                      <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </div>

                  {/* Week indicator */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground items-center justify-center font-bold text-lg z-10">
                    {step.week}
                  </div>

                  {/* Mobile week indicator */}
                  <div className="md:hidden flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {step.week}
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
