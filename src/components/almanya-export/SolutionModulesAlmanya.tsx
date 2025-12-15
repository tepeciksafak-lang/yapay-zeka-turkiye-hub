import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Palette, Rocket, Globe, Bot, FileText, Video, PenTool, Mail, Users, Home, Plane, Heart } from 'lucide-react';

export const SolutionModulesAlmanya = () => {
  const { t } = useLanguage();

  const modules = [
    {
      title: t('almanya.solution.module1.title'),
      subtitle: t('almanya.solution.module1.subtitle'),
      icon: Shield,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      features: [
        { icon: Globe, title: t('almanya.solution.module1.feature1.title'), description: t('almanya.solution.module1.feature1.description') },
        { icon: Bot, title: t('almanya.solution.module1.feature2.title'), description: t('almanya.solution.module1.feature2.description') },
      ],
      result: t('almanya.solution.module1.result'),
    },
    {
      title: t('almanya.solution.module2.title'),
      subtitle: t('almanya.solution.module2.subtitle'),
      icon: Palette,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      features: [
        { icon: Video, title: t('almanya.solution.module2.feature1.title'), description: t('almanya.solution.module2.feature1.description') },
        { icon: PenTool, title: t('almanya.solution.module2.feature2.title'), description: t('almanya.solution.module2.feature2.description') },
      ],
    },
    {
      title: t('almanya.solution.module3.title'),
      subtitle: t('almanya.solution.module3.subtitle'),
      icon: Rocket,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      features: [
        { icon: FileText, title: t('almanya.solution.module3.feature1.title'), description: t('almanya.solution.module3.feature1.description') },
        { icon: Users, title: t('almanya.solution.module3.feature2.title'), description: t('almanya.solution.module3.feature2.description') },
      ],
    },
    {
      title: t('almanya.solution.module4.title'),
      subtitle: t('almanya.solution.module4.subtitle'),
      icon: Home,
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
      features: [
        { icon: FileText, title: t('almanya.solution.module4.feature1.title'), description: t('almanya.solution.module4.feature1.description') },
        { icon: Plane, title: t('almanya.solution.module4.feature2.title'), description: t('almanya.solution.module4.feature2.description') },
        { icon: Heart, title: t('almanya.solution.module4.feature3.title'), description: t('almanya.solution.module4.feature3.description') },
      ],
      result: t('almanya.solution.module4.result'),
    },
  ];

  return (
    <section className="almanya-section py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="almanya-animate-on-scroll text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            {t('almanya.solution.title')}
          </h2>
          <p className="almanya-animate-on-scroll text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Hizmet değil, "Pazara Giriş Altyapısı" sunuyoruz.
          </p>

          <div className="space-y-8">
            {modules.map((module, index) => (
              <div 
                key={index}
                className="almanya-animate-on-scroll bg-card border border-border rounded-2xl p-6 md:p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl ${module.bgColor} flex items-center justify-center`}>
                    <module.icon className={`w-6 h-6 ${module.color}`} />
                  </div>
                  <div>
                    <span className={`text-sm font-medium ${module.color}`}>{module.subtitle}</span>
                    <h3 className="text-xl font-bold text-foreground">{module.title}</h3>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  {module.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm">{feature.title}</h4>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {module.result && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-primary font-medium text-sm">→ {module.result}</p>
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
