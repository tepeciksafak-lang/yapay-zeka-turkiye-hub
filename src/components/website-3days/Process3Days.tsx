import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, Rocket, CheckCircle2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const processSteps = [
  { icon: Calendar, titleKey: 'website3days.process.step1.title', durationKey: 'website3days.process.step1.duration', descKey: 'website3days.process.step1.description' },
  { icon: Rocket, titleKey: 'website3days.process.step2.title', durationKey: 'website3days.process.step2.duration', descKey: 'website3days.process.step2.description' },
  { icon: CheckCircle2, titleKey: 'website3days.process.step3.title', durationKey: 'website3days.process.step3.duration', descKey: 'website3days.process.step3.description' }
];

export const Process3Days = () => {
  const { t } = useLanguage();
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reveal steps sequentially
          [0, 1, 2].forEach((idx) => {
            setTimeout(() => {
              setVisibleSteps((prev) => [...prev, idx]);
            }, idx * 300);
          });
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w3d-section relative">
      {/* Animated timeline line */}
      <div 
        className="absolute left-1/2 top-32 -translate-x-1/2 w-0.5 hidden md:block w3d-line-draw overflow-hidden"
        style={{ 
          background: 'linear-gradient(to bottom, rgba(124, 58, 237, 0), rgba(124, 58, 237, 0.5), rgba(124, 58, 237, 0))',
          height: '0'
        }}
      />
      
      <h2 className="text-center mb-16 w3d-animate-on-scroll">
        {t('website3days.process.title')}
      </h2>
      
      <div className="max-w-4xl mx-auto space-y-12">
        {processSteps.map((step, idx) => {
          const Icon = step.icon;
          const isVisible = visibleSteps.includes(idx);
          
          return (
            <div
              key={idx}
              className={`flex gap-6 items-start transition-all duration-700 w3d-gpu-accelerated ${
                isVisible ? 'opacity-100 translate-x-0 blur-0' : 'opacity-0 -translate-x-12 blur-sm'
              }`}
            >
              {/* Icon with rotate + scale */}
              <div 
                className={`flex-shrink-0 w-16 h-16 bg-[#7C3AED] rounded-2xl flex items-center justify-center transition-all duration-700 ${
                  isVisible ? 'w3d-icon-reveal' : 'opacity-0'
                }`}
              >
                <Icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h3 className="text-2xl font-semibold">{t(step.titleKey)}</h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {t(step.durationKey)}
                  </span>
                </div>
                <p className="text-gray-600">{t(step.descKey)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
