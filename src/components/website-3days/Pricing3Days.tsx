import { useLanguage } from '@/contexts/LanguageContext';
import { Check, Star } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  isPopular?: boolean;
  badge?: string;
}

const starterFeatures = [
  'Website in 3 Werktagen',
  'Individuelle Umsetzung',
  'KI-optimierte Texte',
  'DSGVO-Pflichtseiten',
  'Hosting + Domain',
  'Mobile + Speed',
  'Formular + Terminmodul',
  'Updates & Support'
];

const growthFeatures = [
  'Alles aus Starter, plus:',
  'SEO-Optimierung',
  'Keyword-Setup',
  'Speed-Optimierung',
  'SEO-Report',
  'Content-Empfehlungen'
];

const fullserviceFeatures = [
  'Alles aus Growth, plus:',
  '2 KI-Postings / Woche (Bild oder Video)',
  'KI-Bilder & KI-Videos',
  'Redaktionsplan',
  'Posting-Service',
  'Reporting'
];

const PricingCard = ({ name, price, description, features, cta, isPopular, badge }: PricingCardProps) => {
  const [count, setCount] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const target = parseInt(price);
          const duration = 800;
          const steps = 30;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [price]);

  return (
    <div
      ref={cardRef}
      className={`w3d-card relative ${isPopular ? 'w3d-card-popular' : ''} w3d-animate-on-scroll`}
    >
      {isPopular && badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#7C3AED] text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
          <Star className="w-4 h-4 fill-current" />
          {badge}
        </div>
      )}
      
      <h3 className="text-2xl font-semibold mb-2">{name}</h3>
      
      <div className="mb-4">
        <span className="text-5xl font-bold text-[#7C3AED] w3d-price-counter">{count}</span>
        <span className="text-xl text-gray-600"> € / Monat</span>
      </div>
      
      <p className="text-gray-600 mb-6">{description}</p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <Check className="w-5 h-5 text-[#7C3AED] flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button className="w-full w3d-btn-primary">
        {cta}
      </button>
    </div>
  );
};

export const Pricing3Days = () => {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="w3d-section bg-[#F8F9FA]">
      <h2 className="text-center mb-16 w3d-animate-on-scroll">
        {t('website3days.pricing.title')}
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <PricingCard
          name={t('website3days.pricing.starter.name')}
          price={t('website3days.pricing.starter.price')}
          description={t('website3days.pricing.starter.description')}
          features={starterFeatures}
          cta={t('website3days.pricing.starter.cta')}
        />
        
        <PricingCard
          name={t('website3days.pricing.growth.name')}
          price={t('website3days.pricing.growth.price')}
          description={t('website3days.pricing.growth.description')}
          features={growthFeatures}
          cta={t('website3days.pricing.growth.cta')}
          isPopular
          badge={t('website3days.pricing.growth.badge')}
        />
        
        <PricingCard
          name={t('website3days.pricing.fullservice.name')}
          price={t('website3days.pricing.fullservice.price')}
          description={t('website3days.pricing.fullservice.description')}
          features={fullserviceFeatures}
          cta={t('website3days.pricing.fullservice.cta')}
        />
      </div>
    </section>
  );
};
