import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEO } from '@/components/SEO';
import { FAQSchema } from '@/components/FAQSchema';
import { Hero3Days } from '@/components/website-3days/Hero3Days';
import { Pricing3Days } from '@/components/website-3days/Pricing3Days';
import { Process3Days } from '@/components/website-3days/Process3Days';
import { WhyItWorks3Days } from '@/components/website-3days/WhyItWorks3Days';
import { FitNoFit3Days } from '@/components/website-3days/FitNoFit3Days';
import { References3Days } from '@/components/website-3days/References3Days';
import { Guarantee3Days } from '@/components/website-3days/Guarantee3Days';
import { FAQ3Days } from '@/components/website-3days/FAQ3Days';
import { FinalCTA3Days } from '@/components/website-3days/FinalCTA3Days';

const faqData = [
  {
    question: 'Wie funktioniert die kostenlose Entwurfs-Garantie?',
    answer: 'Sie erhalten nach 3 Werktagen den ersten Entwurf Ihrer Website. Gefällt er Ihnen nicht, zahlen Sie nichts. Erst wenn Sie zufrieden sind und die Website live geht, beginnt die monatliche Zahlung.'
  },
  {
    question: 'Kann ich monatlich kündigen?',
    answer: 'Ja, alle Pakete sind monatlich kündbar. Es gibt keine langfristigen Verträge oder versteckte Gebühren.'
  },
  {
    question: 'Was passiert, wenn ich mit dem Entwurf nicht zufrieden bin?',
    answer: 'Dann arbeiten wir an Verbesserungen bis Sie zufrieden sind. Sollte es nicht passen, zahlen Sie nichts und wir beenden die Zusammenarbeit ohne Kosten für Sie.'
  },
  {
    question: 'Ist Hosting und Domain im Preis enthalten?',
    answer: 'Ja, in allen Paketen ist professionelles Hosting und eine Domain inklusive. Sie müssen sich um nichts kümmern.'
  },
  {
    question: 'Wie schnell ist die Website wirklich?',
    answer: 'Alle unsere Websites sind auf Speed und Mobile optimiert. Wir erreichen regelmäßig 90+ Punkte bei Google PageSpeed Insights.'
  },
  {
    question: 'Was bedeutet "KI-gestützte Prozesse"?',
    answer: 'Wir nutzen KI für Text-Optimierung, Design-Vorschläge und technische Automatisierung. Das beschleunigt den Prozess erheblich, ohne Qualitätsverlust.'
  },
  {
    question: 'Bekomme ich Zugriff auf die Website?',
    answer: 'Ja, Sie erhalten vollen Zugriff und können jederzeit Änderungen anfragen. Bei Bedarf schulen wir Sie auch im Umgang mit dem System.'
  }
];

const WebsiteIn3Days = () => {
  const { t, currentLanguage } = useLanguage();
  
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
      <WhyItWorks3Days />
      <FitNoFit3Days />
      <Guarantee3Days />
      <FAQ3Days faqData={faqData} />
      <FinalCTA3Days />
      </div>
    </>
  );
};

export default WebsiteIn3Days;
