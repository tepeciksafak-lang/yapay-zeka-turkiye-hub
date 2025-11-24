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
import { Database, X, Clock, FileText, Eye, Settings, TrendingUp, Zap, FileCheck, Link, BarChart, CheckCircle } from 'lucide-react';

const CRMProzessAutomatisierung_TR = () => {
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
      navigate('/tr/cozumler/crm-otomasyonu');
    }
  }, [currentLanguage, navigate]);

  const scrollToCaseStudy = () => {
    document.querySelector('.case-study-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const problems = [
    { text: t('solutions.crm.problem.1'), icon: X },
    { text: t('solutions.crm.problem.2'), icon: Clock },
    { text: t('solutions.crm.problem.3'), icon: FileText },
    { text: t('solutions.crm.problem.4'), icon: Eye }
  ];

  const processSteps = [
    {
      number: 1,
      title: t('solutions.crm.process.step1.title'),
      description: t('solutions.crm.process.step1.description'),
      icon: Settings
    },
    {
      number: 2,
      title: t('solutions.crm.process.step2.title'),
      description: t('solutions.crm.process.step2.description'),
      icon: Zap
    },
    {
      number: 3,
      title: t('solutions.crm.process.step3.title'),
      description: t('solutions.crm.process.step3.description'),
      icon: Link
    },
    {
      number: 4,
      title: t('solutions.crm.process.step4.title'),
      description: t('solutions.crm.process.step4.description'),
      icon: TrendingUp
    }
  ];

  const features = [
    { title: t('solutions.crm.feature1.title'), description: t('solutions.crm.feature1.description'), icon: Database },
    { title: t('solutions.crm.feature2.title'), description: t('solutions.crm.feature2.description'), icon: TrendingUp },
    { title: t('solutions.crm.feature3.title'), description: t('solutions.crm.feature3.description'), icon: Zap },
    { title: t('solutions.crm.feature4.title'), description: t('solutions.crm.feature4.description'), icon: FileCheck },
    { title: t('solutions.crm.feature5.title'), description: t('solutions.crm.feature5.description'), icon: Link },
    { title: t('solutions.crm.feature6.title'), description: t('solutions.crm.feature6.description'), icon: BarChart }
  ];

  const benefits = [
    { text: t('solutions.crm.benefit.1'), icon: CheckCircle },
    { text: t('solutions.crm.benefit.2'), icon: Clock },
    { text: t('solutions.crm.benefit.3'), icon: Link },
    { text: t('solutions.crm.benefit.4'), icon: Eye }
  ];

  return (
    <>
      <SEO 
        title={t('solutions.crm.seo.title')}
        description={t('solutions.crm.seo.description')}
        routeKey="solution-crm"
      />
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "CRM ve Süreç Otomasyonu",
          "provider": {
            "@type": "Organization",
            "name": "Pratik Yapay Zeka"
          },
          "description": t('solutions.crm.seo.description'),
          "areaServed": "TR",
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://yapayzekapratik.com/tr/cozumler/crm-otomasyonu"
          }
        })}
      </script>

      <div className="min-h-screen">
        <SolutionHero 
          title={t('solutions.crm.hero.title')}
          subtitle={t('solutions.crm.hero.subtitle')}
          ctaPrimary={t('solutions.crm.cta.primary')}
          ctaSecondary={t('solutions.crm.cta.secondary')}
          icon={Database}
          onPrimaryCTA={openQuickAnalysis}
          onSecondaryCTA={scrollToCaseStudy}
        />

        <SolutionProblem 
          title={t('solutions.crm.problem.title')}
          problems={problems}
        />

        <SolutionProcess 
          title={t('solutions.crm.process.title')}
          steps={processSteps}
        />

        <SolutionFeatures 
          title={t('solutions.crm.features.title')}
          features={features}
        />

        <SolutionBenefits 
          title={t('solutions.crm.benefits.title')}
          benefits={benefits}
        />

        <SolutionCaseStudy 
          company="Car Studio AI"
          result="15 Saat/Hafta Tasarruf"
          description={t('solutions.crm.casestudy.description')}
          link="/tr/vaka-calismalari/car-studio-ai"
          image="/logos/carstudio.avif"
        />

        <SolutionFinalCTA 
          title={t('solutions.crm.finalcta.title')}
          subtitle={t('solutions.crm.finalcta.subtitle')}
          ctaPrimary={t('solutions.crm.cta.primary')}
          ctaSecondary="Diğer Çözümleri Görüntüle"
          onPrimaryCTA={openQuickAnalysis}
          onSecondaryCTA={() => navigate('/tr/cozumler')}
        />
      </div>
    </>
  );
};

export default CRMProzessAutomatisierung_TR;
