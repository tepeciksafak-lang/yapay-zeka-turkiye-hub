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
import { PhoneCall, X, Clock, FileText, Repeat, Target, TrendingUp, Database, Zap, BarChart, CheckCircle } from 'lucide-react';

const VertriebsAutomatisierung_TR = () => {
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
      navigate('/tr/cozumler/satis-otomasyonu');
    }
  }, [currentLanguage, navigate]);

  const scrollToCaseStudy = () => {
    document.querySelector('.case-study-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const problems = [
    { text: t('solutions.vertrieb.problem.1'), icon: X },
    { text: t('solutions.vertrieb.problem.2'), icon: Clock },
    { text: t('solutions.vertrieb.problem.3'), icon: FileText },
    { text: t('solutions.vertrieb.problem.4'), icon: Repeat }
  ];

  const processSteps = [
    {
      number: 1,
      title: t('solutions.vertrieb.process.step1.title'),
      description: t('solutions.vertrieb.process.step1.description'),
      icon: Target
    },
    {
      number: 2,
      title: t('solutions.vertrieb.process.step2.title'),
      description: t('solutions.vertrieb.process.step2.description'),
      icon: PhoneCall
    },
    {
      number: 3,
      title: t('solutions.vertrieb.process.step3.title'),
      description: t('solutions.vertrieb.process.step3.description'),
      icon: Database
    },
    {
      number: 4,
      title: t('solutions.vertrieb.process.step4.title'),
      description: t('solutions.vertrieb.process.step4.description'),
      icon: TrendingUp
    }
  ];

  const features = [
    { title: t('solutions.vertrieb.feature1.title'), description: t('solutions.vertrieb.feature1.description'), icon: PhoneCall },
    { title: t('solutions.vertrieb.feature2.title'), description: t('solutions.vertrieb.feature2.description'), icon: Database },
    { title: t('solutions.vertrieb.feature3.title'), description: t('solutions.vertrieb.feature3.description'), icon: TrendingUp },
    { title: t('solutions.vertrieb.feature4.title'), description: t('solutions.vertrieb.feature4.description'), icon: FileText },
    { title: t('solutions.vertrieb.feature5.title'), description: t('solutions.vertrieb.feature5.description'), icon: Zap },
    { title: t('solutions.vertrieb.feature6.title'), description: t('solutions.vertrieb.feature6.description'), icon: BarChart }
  ];

  const benefits = [
    { text: t('solutions.vertrieb.benefit.1'), icon: TrendingUp },
    { text: t('solutions.vertrieb.benefit.2'), icon: Clock },
    { text: t('solutions.vertrieb.benefit.3'), icon: CheckCircle },
    { text: t('solutions.vertrieb.benefit.4'), icon: Zap }
  ];

  return (
    <>
      <SEO 
        title={t('solutions.vertrieb.seo.title')}
        description={t('solutions.vertrieb.seo.description')}
        routeKey="solution-vertrieb"
      />
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Satış Otomasyonu",
          "provider": {
            "@type": "Organization",
            "name": "Pratik Yapay Zeka"
          },
          "description": t('solutions.vertrieb.seo.description'),
          "areaServed": "TR",
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://yapayzekapratik.com/tr/cozumler/satis-otomasyonu"
          }
        })}
      </script>

      <div className="min-h-screen">
        <SolutionHero 
          title={t('solutions.vertrieb.hero.title')}
          subtitle={t('solutions.vertrieb.hero.subtitle')}
          ctaPrimary={t('solutions.vertrieb.cta.primary')}
          ctaSecondary={t('solutions.vertrieb.cta.secondary')}
          icon={PhoneCall}
          onPrimaryCTA={openQuickAnalysis}
          onSecondaryCTA={scrollToCaseStudy}
        />

        <SolutionProblem 
          title={t('solutions.vertrieb.problem.title')}
          problems={problems}
        />

        <SolutionProcess 
          title={t('solutions.vertrieb.process.title')}
          steps={processSteps}
        />

        <SolutionFeatures 
          title={t('solutions.vertrieb.features.title')}
          features={features}
        />

        <SolutionBenefits 
          title={t('solutions.vertrieb.benefits.title')}
          benefits={benefits}
        />

        <SolutionCaseStudy 
          company="ERPA Teknoloji"
          result="Sistematik B2B Müşteri Kazanımı"
          description={t('solutions.vertrieb.casestudy.description')}
          link="/tr/vaka-calismalari/erpa"
          image="/logos/erpa.avif"
        />

        <SolutionFinalCTA 
          title={t('solutions.vertrieb.finalcta.title')}
          subtitle={t('solutions.vertrieb.finalcta.subtitle')}
          ctaPrimary={t('solutions.vertrieb.cta.primary')}
          ctaSecondary="Diğer Çözümleri Görüntüle"
          onPrimaryCTA={openQuickAnalysis}
          onSecondaryCTA={() => navigate('/tr/cozumler')}
        />
      </div>
    </>
  );
};

export default VertriebsAutomatisierung_TR;
