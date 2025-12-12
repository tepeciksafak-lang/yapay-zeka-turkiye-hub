import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEO } from '@/components/SEO';
import { FAQSchema } from '@/components/FAQSchema';
import { HeroAlmanya } from '@/components/almanya-export/HeroAlmanya';
import { AgitateAlmanya } from '@/components/almanya-export/AgitateAlmanya';
import { SolutionModulesAlmanya } from '@/components/almanya-export/SolutionModulesAlmanya';
import { AuthorityAlmanya } from '@/components/almanya-export/AuthorityAlmanya';
import { SocialProofAlmanya } from '@/components/almanya-export/SocialProofAlmanya';
import { ProcessAlmanya } from '@/components/almanya-export/ProcessAlmanya';
import { FAQAlmanya } from '@/components/almanya-export/FAQAlmanya';
import { FinalCTAAlmanya } from '@/components/almanya-export/FinalCTAAlmanya';

const AlmanyaExport = () => {
  const { t, currentLanguage } = useLanguage();

  const faqData = [
    { question: t('almanya.faq.q1'), answer: t('almanya.faq.a1') },
    { question: t('almanya.faq.q2'), answer: t('almanya.faq.a2') },
    { question: t('almanya.faq.q3'), answer: t('almanya.faq.a3') },
  ];

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
      <FAQSchema faqs={faqData} />
      
      <div className="almanya-export-page">
        <HeroAlmanya />
        <AgitateAlmanya />
        <SolutionModulesAlmanya />
        <AuthorityAlmanya />
        <SocialProofAlmanya />
        <ProcessAlmanya />
        <FAQAlmanya />
        <FinalCTAAlmanya />
      </div>
    </>
  );
};

export default AlmanyaExport;
