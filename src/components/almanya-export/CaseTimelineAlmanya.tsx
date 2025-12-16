import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useRef, useState } from 'react';

interface CaseBlockProps {
  title: string;
  sections: {
    label: string;
    content: string | string[];
  }[];
  isVisible: boolean;
  delay: number;
}

const CaseBlock = ({ title, sections, isVisible, delay }: CaseBlockProps) => {
  return (
    <div
      className={`relative pl-8 transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-3'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Vertical Line */}
      <div
        className={`absolute left-0 top-0 w-0.5 bg-primary/30 transition-all duration-500 ease-out ${
          isVisible ? 'h-full' : 'h-0'
        }`}
        style={{ transitionDelay: `${delay + 100}ms` }}
      />

      {/* Case Title */}
      <h3 className="text-xl font-bold text-foreground mb-8">{title}</h3>

      {/* Sections */}
      <div className="space-y-6">
        {sections.map((section, idx) => (
          <div key={idx} className="space-y-2">
            <span className="text-sm font-medium text-primary uppercase tracking-wide">
              {section.label}
            </span>
            {Array.isArray(section.content) ? (
              <ul className="space-y-1">
                {section.content.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-muted-foreground leading-relaxed flex items-start gap-2">
                    <span className="text-primary/60">–</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground leading-relaxed">{section.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export const CaseTimelineAlmanya = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cases = [
    {
      title: t('almanya.casetimeline.case1.title'),
      sections: [
        {
          label: t('almanya.casetimeline.label.durum'),
          content: t('almanya.casetimeline.case1.durum'),
        },
        {
          label: t('almanya.casetimeline.label.yapilan'),
          content: [
            t('almanya.casetimeline.case1.yapilan.1'),
            t('almanya.casetimeline.case1.yapilan.2'),
            t('almanya.casetimeline.case1.yapilan.3'),
          ],
        },
        {
          label: t('almanya.casetimeline.label.sonuc'),
          content: [
            t('almanya.casetimeline.case1.sonuc.1'),
            t('almanya.casetimeline.case1.sonuc.2'),
          ],
        },
      ],
    },
    {
      title: t('almanya.casetimeline.case2.title'),
      sections: [
        {
          label: t('almanya.casetimeline.label.durum'),
          content: t('almanya.casetimeline.case2.durum'),
        },
        {
          label: t('almanya.casetimeline.label.hedef'),
          content: t('almanya.casetimeline.case2.hedef'),
        },
        {
          label: t('almanya.casetimeline.label.yapilan'),
          content: [
            t('almanya.casetimeline.case2.yapilan.1'),
            t('almanya.casetimeline.case2.yapilan.2'),
            t('almanya.casetimeline.case2.yapilan.3'),
          ],
        },
        {
          label: t('almanya.casetimeline.label.sonuc'),
          content: [
            t('almanya.casetimeline.case2.sonuc.1'),
            t('almanya.casetimeline.case2.sonuc.2'),
          ],
        },
      ],
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('almanya.casetimeline.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('almanya.casetimeline.subtitle')}
            </p>
          </div>

          {/* Cases */}
          <div className="space-y-16">
            {cases.map((caseItem, index) => (
              <CaseBlock
                key={index}
                title={caseItem.title}
                sections={caseItem.sections}
                isVisible={isVisible}
                delay={200 + index * 300}
              />
            ))}
          </div>

          {/* Trust Line */}
          <p
            className={`text-sm text-muted-foreground/70 italic text-center mt-16 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            {t('almanya.casetimeline.trustline')}
          </p>
        </div>
      </div>
    </section>
  );
};
