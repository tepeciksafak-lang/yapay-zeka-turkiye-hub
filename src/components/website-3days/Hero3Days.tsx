import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const Hero3Days = () => {
  const { t } = useLanguage();

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w3d-section pt-32 pb-24 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="w3d-fade-in mb-6">
          {t('website3days.hero.h1')}
        </h1>
        
        <p className="w3d-fade-in w3d-stagger-1 text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
          {t('website3days.hero.subheadline')}
        </p>
        
        <div className="w3d-fade-in w3d-stagger-2 flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a href="#contact" className="w3d-btn-primary inline-flex items-center gap-2 justify-center">
            {t('website3days.hero.cta.primary')}
            <ArrowRight className="w-5 h-5" />
          </a>
          <button onClick={scrollToPricing} className="w3d-btn-secondary">
            {t('website3days.hero.cta.secondary')}
          </button>
        </div>
        
        <div className="w3d-fade-in w3d-stagger-3 flex items-center justify-center gap-2 text-sm text-gray-600">
          <CheckCircle className="w-4 h-4 text-[#7C3AED]" />
          <span>{t('website3days.hero.microproof')}</span>
        </div>
      </div>
    </section>
  );
};
