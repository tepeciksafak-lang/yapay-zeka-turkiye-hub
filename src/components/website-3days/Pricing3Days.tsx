import { useLanguage } from '@/contexts/LanguageContext';
import { Check, Star } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface PricingCardProps {
  name: string;
  oldPrice: string;
  newPrice: string;
  savings: string;
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

const PricingCard = ({ name, oldPrice, newPrice, savings, description, features, cta, isPopular, badge }: PricingCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), 100);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`w3d-card relative ${isPopular ? 'w3d-card-popular' : ''} w3d-animate-on-scroll w3d-gpu-accelerated`}
    >
      {isPopular && badge && (
        <div className={`absolute -top-4 left-1/2 -translate-x-1/2 bg-[#7C3AED] text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1 ${isVisible ? 'w3d-badge-slide-in' : 'opacity-0'}`}>
          <Star className="w-4 h-4 fill-current" />
          {badge}
        </div>
      )}
      
      <h3 className="text-2xl font-semibold mb-2">{name}</h3>
      
      {/* Pricing Display with Discount Animation */}
      <div className="mb-4">
        {/* Old Price - strikethrough animation */}
        <div className={`text-2xl text-gray-400 line-through transition-all duration-500 ${isVisible ? 'w3d-price-strikethrough' : 'opacity-0'}`}>
          {oldPrice} €
        </div>
        
        {/* New Price - scale + glow */}
        <div className="flex items-baseline gap-2">
          <span 
            className={`text-5xl font-bold text-[#7C3AED] transition-all duration-700 ${isVisible ? 'w3d-price-scale-glow' : 'opacity-0'}`}
            style={{ transitionDelay: '0.2s' }}
          >
            {newPrice}
          </span>
          <span className="text-xl text-gray-600">€ / Monat</span>
        </div>
        
        {/* Savings Badge */}
        <div 
          className={`inline-block mt-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-semibold transition-all duration-500 ${isVisible ? 'w3d-savings-slide-in' : 'opacity-0'}`}
          style={{ transitionDelay: '0.4s' }}
        >
          {savings}
        </div>
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
          oldPrice="200"
          newPrice="150"
          savings="Du sparst 50 €"
          description={t('website3days.pricing.starter.description')}
          features={starterFeatures}
          cta={t('website3days.pricing.starter.cta')}
        />
        
        <PricingCard
          name={t('website3days.pricing.growth.name')}
          oldPrice="400"
          newPrice="250"
          savings="Du sparst 150 €"
          description={t('website3days.pricing.growth.description')}
          features={growthFeatures}
          cta={t('website3days.pricing.growth.cta')}
          isPopular
          badge={t('website3days.pricing.growth.badge')}
        />
        
        <PricingCard
          name={t('website3days.pricing.fullservice.name')}
          oldPrice="1000"
          newPrice="750"
          savings="Du sparst 250 €"
          description={t('website3days.pricing.fullservice.description')}
          features={fullserviceFeatures}
          cta={t('website3days.pricing.fullservice.cta')}
        />
      </div>
    </section>
  );
};
