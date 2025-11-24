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
import { PhoneCall, X, Clock, MessageSquare, Search, Mail, Repeat, Calendar, TrendingUp, BarChart } from 'lucide-react';

const LeadGenerationKI_TR = () => {
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
      navigate('/tr/cozumler/lead-generation');
    }
  }, [currentLanguage, navigate]);

  const scrollToCaseStudy = () => {
    document.querySelector('.case-study-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const problems = [
    { text: t('solutions.leadgen.problem.1'), icon: X },
    { text: t('solutions.leadgen.problem.2'), icon: Clock },
    { text: t('solutions.leadgen.problem.3'), icon: MessageSquare },
    { text: t('solutions.leadgen.problem.4'), icon: Repeat }
  ];

  const processSteps = [
    {
      number: 1,
      title: t('solutions.leadgen.process.step1.title'),
      description: t('solutions.leadgen.process.step1.description'),
      icon: BarChart
    },
    {
      number: 2,
      title: t('solutions.leadgen.process.step2.title'),
      description: t('solutions.leadgen.process.step2.description'),
      icon: PhoneCall
    },
    {
      number: 3,
      title: t('solutions.leadgen.process.step3.title'),
      description: t('solutions.leadgen.process.step3.description'),
      icon: Search
    },
    {
      number: 4,
      title: t('solutions.leadgen.process.step4.title'),
      description: t('solutions.leadgen.process.step4.description'),
      icon: TrendingUp
    }
  ];

  const features = [
    { title: t('solutions.leadgen.feature1.title'), description: t('solutions.leadgen.feature1.description'), icon: Search },
    { title: t('solutions.leadgen.feature2.title'), description: t('solutions.leadgen.feature2.description'), icon: MessageSquare },
    { title: t('solutions.leadgen.feature3.title'), description: t('solutions.leadgen.feature3.description'), icon: Mail },
    { title: t('solutions.leadgen.feature4.title'), description: t('solutions.leadgen.feature4.description'), icon: Repeat },
    { title: t('solutions.leadgen.feature5.title'), description: t('solutions.leadgen.feature5.description'), icon: Calendar },
    { title: t('solutions.leadgen.feature6.title'), description: t('solutions.leadgen.feature6.description'), icon: BarChart }
  ];

  const benefits = [
    { text: t('solutions.leadgen.benefit.1'), icon: TrendingUp },
    { text: t('solutions.leadgen.benefit.2'), icon: Clock },
    { text: t('solutions.leadgen.benefit.3'), icon: MessageSquare },
    { text: t('solutions.leadgen.benefit.4'), icon: BarChart }
  ];

  return (
    <>
      <SEO 
        title={t('solutions.leadgen.seo.title')}
        description={t('solutions.leadgen.seo.description')}
        routeKey="solution-leadgen-ki"
      />
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Yapay Zeka Lead Üretimi",
          "provider": {
            "@type": "Organization",
            "name": "Pratik Yapay Zeka"
          },
          "description": t('solutions.leadgen.seo.description'),
          "areaServed": "TR",
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://yapayzekapratik.com/tr/cozumler/lead-generation"
          }
        })}
      </script>

      <div className="min-h-screen">
        <SolutionHero 
          title={t('solutions.leadgen.hero.title')}
          subtitle={t('solutions.leadgen.hero.subtitle')}
          ctaPrimary={t('solutions.leadgen.cta.primary')}
          ctaSecondary={t('solutions.leadgen.cta.secondary')}
          icon={PhoneCall}
          onPrimaryCTA={openQuickAnalysis}
          onSecondaryCTA={scrollToCaseStudy}
        />

        <SolutionProblem 
          title={t('solutions.leadgen.problem.title')}
          problems={problems}
        />

        <SolutionProcess 
          title={t('solutions.leadgen.process.title')}
          steps={processSteps}
        />

        <SolutionFeatures 
          title={t('solutions.leadgen.features.title')}
          features={features}
        />

        <SolutionBenefits 
          title={t('solutions.leadgen.benefits.title')}
          benefits={benefits}
        />

        <SolutionCaseStudy 
          company="Car Studio AI"
          result="+30 Randevu/Ay"
          description={t('solutions.leadgen.casestudy.description')}
          link="/tr/vaka-calismalari/car-studio-ai"
          image="/logos/carstudio.avif"
        />

        <SolutionFinalCTA 
          title={t('solutions.leadgen.finalcta.title')}
          subtitle={t('solutions.leadgen.finalcta.subtitle')}
          ctaPrimary={t('solutions.leadgen.cta.primary')}
          ctaSecondary="Diğer Çözümleri Görüntüle"
          onPrimaryCTA={openQuickAnalysis}
          onSecondaryCTA={() => navigate('/tr/cozumler')}
        />
      </div>
    </>
  );
};

export default LeadGenerationKI_TR;
