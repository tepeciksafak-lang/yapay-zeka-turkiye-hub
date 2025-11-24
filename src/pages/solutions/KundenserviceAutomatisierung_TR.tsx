import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useModal } from '@/contexts/ModalContext';
import { SEO } from '@/components/SEO';
import { SolutionHero } from '@/components/solutions/SolutionHero';
import { SolutionProblem } from '@/components/solutions/SolutionProblem';
import { SolutionProcess } from '@/components/solutions/SolutionProcess';
import { SolutionFeatures } from '@/components/solutions/SolutionFeatures';
import { SolutionBenefits } from '@/components/solutions/SolutionBenefits';
import { SolutionCaseStudy } from '@/components/solutions/SolutionCaseStudy';
import { SolutionFinalCTA } from '@/components/solutions/SolutionFinalCTA';
import { MessageSquare, X, Clock, Users, Moon, Bot, Phone, ArrowRight, HelpCircle, Globe, BarChart, CheckCircle } from 'lucide-react';

const KundenserviceAutomatisierung_TR = () => {
  const { t, currentLanguage } = useLanguage();
  const { openQuickAnalysis } = useModal();
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (currentLanguage !== 'tr') {
      navigate('/tr/cozumler/musteri-hizmeti-otomasyonu');
    }
  }, [currentLanguage, navigate]);

  const scrollToCaseStudy = () => {
    document.querySelector('.case-study-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const problems = [
    { text: t('solutions.kundenservice.problem.1'), icon: X },
    { text: t('solutions.kundenservice.problem.2'), icon: Clock },
    { text: t('solutions.kundenservice.problem.3'), icon: Users },
    { text: t('solutions.kundenservice.problem.4'), icon: Moon }
  ];

  const processSteps = [
    {
      number: 1,
      title: t('solutions.kundenservice.process.step1.title'),
      description: t('solutions.kundenservice.process.step1.description'),
      icon: HelpCircle
    },
    {
      number: 2,
      title: t('solutions.kundenservice.process.step2.title'),
      description: t('solutions.kundenservice.process.step2.description'),
      icon: Bot
    },
    {
      number: 3,
      title: t('solutions.kundenservice.process.step3.title'),
      description: t('solutions.kundenservice.process.step3.description'),
      icon: MessageSquare
    },
    {
      number: 4,
      title: t('solutions.kundenservice.process.step4.title'),
      description: t('solutions.kundenservice.process.step4.description'),
      icon: BarChart
    }
  ];

  const features = [
    { title: t('solutions.kundenservice.feature1.title'), description: t('solutions.kundenservice.feature1.description'), icon: Bot },
    { title: t('solutions.kundenservice.feature2.title'), description: t('solutions.kundenservice.feature2.description'), icon: Phone },
    { title: t('solutions.kundenservice.feature3.title'), description: t('solutions.kundenservice.feature3.description'), icon: ArrowRight },
    { title: t('solutions.kundenservice.feature4.title'), description: t('solutions.kundenservice.feature4.description'), icon: HelpCircle },
    { title: t('solutions.kundenservice.feature5.title'), description: t('solutions.kundenservice.feature5.description'), icon: Globe },
    { title: t('solutions.kundenservice.feature6.title'), description: t('solutions.kundenservice.feature6.description'), icon: BarChart }
  ];

  const benefits = [
    { text: t('solutions.kundenservice.benefit.1'), icon: Clock },
    { text: t('solutions.kundenservice.benefit.2'), icon: CheckCircle },
    { text: t('solutions.kundenservice.benefit.3'), icon: MessageSquare },
    { text: t('solutions.kundenservice.benefit.4'), icon: Users }
  ];

  return (
    <>
      <SEO 
        title={t('solutions.kundenservice.seo.title')}
        description={t('solutions.kundenservice.seo.description')}
        routeKey="solution-kundenservice"
      />
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Müşteri Hizmeti Otomasyonu",
          "provider": {
            "@type": "Organization",
            "name": "Pratik Yapay Zeka"
          },
          "description": t('solutions.kundenservice.seo.description'),
          "areaServed": "TR",
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://yapayzekapratik.com/tr/cozumler/musteri-hizmeti-otomasyonu"
          }
        })}
      </script>

      <div className="min-h-screen">
        <SolutionHero 
          title={t('solutions.kundenservice.hero.title')}
          subtitle={t('solutions.kundenservice.hero.subtitle')}
          ctaPrimary={t('solutions.kundenservice.cta.primary')}
          ctaSecondary={t('solutions.kundenservice.cta.secondary')}
          icon={MessageSquare}
          onPrimaryCTA={openQuickAnalysis}
          onSecondaryCTA={scrollToCaseStudy}
        />

        <SolutionProblem 
          title={t('solutions.kundenservice.problem.title')}
          problems={problems}
        />

        <SolutionProcess 
          title={t('solutions.kundenservice.process.title')}
          steps={processSteps}
        />

        <SolutionFeatures 
          title={t('solutions.kundenservice.features.title')}
          features={features}
        />

        <SolutionBenefits 
          title={t('solutions.kundenservice.benefits.title')}
          benefits={benefits}
        />

        <SolutionCaseStudy 
          company="Acilsatis"
          result="1000+ Otomatik Yanıt, 24/7 Müsait"
          description={t('solutions.kundenservice.casestudy.description')}
          link="/tr/vaka-calismalari/acilsatis"
          image="/logos/acilsatis.avif"
        />

        <SolutionFinalCTA 
          title={t('solutions.kundenservice.finalcta.title')}
          subtitle={t('solutions.kundenservice.finalcta.subtitle')}
          ctaPrimary={t('solutions.kundenservice.cta.primary')}
          ctaSecondary="Diğer Çözümleri Görüntüle"
          onPrimaryCTA={openQuickAnalysis}
          onSecondaryCTA={() => navigate('/tr/cozumler')}
        />
      </div>
    </>
  );
};

export default KundenserviceAutomatisierung_TR;
