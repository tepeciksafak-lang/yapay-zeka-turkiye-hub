import { useLanguage } from '@/contexts/LanguageContext';
import { Zap, Users, Code, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const reasons = [
  { icon: Zap, key: 'website3days.why.reason1' },
  { icon: Users, key: 'website3days.why.reason2' },
  { icon: Code, key: 'website3days.why.reason3' },
  { icon: MessageSquare, key: 'website3days.why.reason4' }
];

export const WhyItWorks3Days = () => {
  const { t } = useLanguage();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, idx: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setMousePos({ x, y });
    setHoveredCard(idx);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section className="w3d-section bg-[#F8F9FA]">
      <h2 className="text-center mb-16 w3d-animate-on-scroll">
        {t('website3days.why.title')}
      </h2>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {reasons.map((reason, idx) => {
          const Icon = reason.icon;
          const isHovered = hoveredCard === idx;
          
          return (
            <div
              key={idx}
              className="w3d-card text-center group cursor-pointer w3d-animate-on-scroll w3d-tilt-3d"
              style={{ 
                transitionDelay: `${idx * 0.1}s`,
                transform: isHovered 
                  ? `perspective(1000px) rotateX(${mousePos.y * 8}deg) rotateY(${mousePos.x * 8}deg) scale(1.02)`
                  : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
                transition: 'transform 0.15s ease-out, box-shadow 0.3s ease'
              }}
              onMouseMove={(e) => handleMouseMove(e, idx)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Icon with pulse */}
              <div className="w-14 h-14 bg-[#7C3AED]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#7C3AED]/20 transition-colors">
                <Icon className="w-7 h-7 text-[#7C3AED] w3d-pulse-slow" />
              </div>
              <p className="font-semibold text-lg group-hover:text-[#7C3AED] transition-colors">
                {t(reason.key)}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
