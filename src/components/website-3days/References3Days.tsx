import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useRef, useState } from 'react';

const referenceProjects = [
  {
    image: '/logos/carstudio.avif',
    result: '3000+ E-Mails, 20+ Std. gespart',
    company: 'Car Studio AI'
  },
  {
    image: '/logos/salevium.avif',
    result: '90% Zeit gespart bei Content',
    company: 'Salevium'
  },
  {
    image: '/logos/erpa.avif',
    result: 'Europa-Expansion in 4 Wochen',
    company: 'ERPA Teknoloji'
  }
];

export const References3Days = () => {
  const { t } = useLanguage();
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          [0, 1, 2].forEach((idx) => {
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, idx]);
            }, idx * 200);
          });
        }
      },
      { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w3d-section bg-[#F8F9FA]">
      <h2 className="text-center mb-16 w3d-animate-on-scroll">
        {t('website3days.references.title')}
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {referenceProjects.map((project, idx) => {
          const isVisible = visibleCards.includes(idx);
          
          return (
            <div
              key={idx}
              className="w3d-card text-center group overflow-hidden w3d-gpu-accelerated"
            >
              {/* Image with clip-path reveal */}
              <div className="relative h-12 mb-4 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.company}
                  className={`h-full mx-auto object-contain transition-all duration-1000 group-hover:scale-110 ${
                    isVisible ? 'w3d-clip-reveal' : 'w3d-clip-hidden'
                  }`}
                />
              </div>
              
              {/* Result with inline typewriter effect */}
              <p className={`font-semibold text-lg text-[#7C3AED] ${isVisible ? 'w3d-typewriter' : 'opacity-0'}`}>
                {project.result}
              </p>
              <p className={`text-sm text-gray-600 mt-1 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1s' }}>
                {project.company}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
