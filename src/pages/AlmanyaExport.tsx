import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEO } from '@/components/SEO';
import { HeroAlmanya } from '@/components/almanya-export/HeroAlmanya';
import { RealityCheckAlmanya } from '@/components/almanya-export/RealityCheckAlmanya';
import { CaseTimelineAlmanya } from '@/components/almanya-export/CaseTimelineAlmanya';
import { ProcessAlmanya } from '@/components/almanya-export/ProcessAlmanya';

const AlmanyaExport = () => {
  const { t, currentLanguage } = useLanguage();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const animatedElements = document.querySelectorAll('.almanya-animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Only render for Turkish locale
  if (currentLanguage !== 'tr') {
    return null;
  }

  return (
    <>
      <SEO
        title={t('almanya.seo.title')}
        description={t('almanya.seo.description')}
        type="website"
        routeKey="almanya-export"
      />
      
      <div className="almanya-export-page">
        <HeroAlmanya />
        <RealityCheckAlmanya />
        <CaseTimelineAlmanya />
        <ProcessAlmanya />
      </div>
    </>
  );
};

export default AlmanyaExport;
