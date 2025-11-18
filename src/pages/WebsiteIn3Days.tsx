import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEO } from '@/components/SEO';
import { FAQSchema } from '@/components/FAQSchema';
import { Hero3Days } from '@/components/website-3days/Hero3Days';
import { Pricing3Days } from '@/components/website-3days/Pricing3Days';
import { Process3Days } from '@/components/website-3days/Process3Days';
import { References3Days } from '@/components/website-3days/References3Days';
import { Guarantee3Days } from '@/components/website-3days/Guarantee3Days';
import { FAQ3Days } from '@/components/website-3days/FAQ3Days';
import { FinalCTA3Days } from '@/components/website-3days/FinalCTA3Days';

const WebsiteIn3Days = () => {
  const { t, currentLanguage } = useLanguage();
  
  const faqData = [
    {
      question: t('website3days.faq.q1'),
      answer: t('website3days.faq.a1')
    },
    {
      question: t('website3days.faq.q2'),
      answer: t('website3days.faq.a2')
    },
    {
      question: t('website3days.faq.q3'),
      answer: t('website3days.faq.a3')
    },
    {
      question: t('website3days.faq.q4'),
      answer: t('website3days.faq.a4')
    },
    {
      question: t('website3days.faq.q5'),
      answer: t('website3days.faq.a5')
    },
    {
      question: t('website3days.faq.q6'),
      answer: t('website3days.faq.a6')
    }
  ];

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

    const animatedElements = document.querySelectorAll('.w3d-animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Only render for German locale
  if (currentLanguage !== 'de') {
    return null;
  }

  return (
    <>
      <SEO
        title={t('website3days.seo.title')}
        description={t('website3days.seo.description')}
        type="website"
        routeKey="website-in-3-days"
      />
      <FAQSchema faqs={faqData} />
      
      <div className="website-3days-page">
        <Hero3Days />
        <Pricing3Days />
        <References3Days />
        <Process3Days />
        <Guarantee3Days />
        <FAQ3Days faqData={faqData} />
        <FinalCTA3Days />
      </div>
    </>
  );
};

export default WebsiteIn3Days;
