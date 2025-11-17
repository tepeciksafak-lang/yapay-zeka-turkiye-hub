import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export const Hero3Days = () => {
  const { t } = useLanguage();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePos({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const h1Text = t('website3days.hero.h1');
  const subheadlineText = t('website3days.hero.subheadline');

  return (
    <section className="w3d-section pt-32 pb-24 text-center relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 w3d-gradient-shift pointer-events-none" 
           style={{ 
             background: 'radial-gradient(ellipse at center, rgba(124, 58, 237, 0.08), transparent 60%)' 
           }} 
      />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* H1 with letter reveal */}
        <h1 className="mb-6">
          {h1Text.split('').map((char, idx) => (
            <span 
              key={idx} 
              className="w3d-blur-reveal"
              style={{ animationDelay: `${idx * 0.02}s` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
        
        {/* Subheadline with wave */}
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
          {subheadlineText.split(' ').map((word, idx) => (
            <span 
              key={idx}
              className="w3d-word-wave"
              style={{ animationDelay: `${0.8 + idx * 0.05}s` }}
            >
              {word}{' '}
            </span>
          ))}
        </p>
        
        {/* CTAs with magnetic hover */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a 
            href="#contact" 
            className="w3d-btn-primary inline-flex items-center gap-2 justify-center group relative overflow-hidden w3d-magnetic-hover"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ 
              transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
              transition: 'transform 0.15s ease-out'
            }}
          >
            <span className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
            <span className="relative z-10">{t('website3days.hero.cta.primary')}</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>
          <button 
            onClick={scrollToPricing} 
            className="w3d-btn-secondary hover:scale-105 transition-all duration-300"
          >
            {t('website3days.hero.cta.secondary')}
          </button>
        </div>
        
        {/* Micro-Proof */}
        <div className="flex items-center justify-center gap-2 text-sm text-gray-600 opacity-0 w3d-fade-in" style={{ animationDelay: '1.5s' }}>
          <CheckCircle className="w-4 h-4 text-[#7C3AED]" />
          <span>{t('website3days.hero.microproof')}</span>
        </div>
      </div>
    </section>
  );
};
