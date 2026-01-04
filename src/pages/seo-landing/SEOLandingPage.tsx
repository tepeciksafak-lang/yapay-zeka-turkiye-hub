import { useLocation } from 'react-router-dom';
import { SEOLandingPageTemplate } from '@/components/seo-landing/SEOLandingPageTemplate';
import { getPageBySlug } from '@/data/seoLandingPagesContent';
import NotFound from '@/pages/NotFound';
import { useModal } from '@/contexts/ModalContext';

const SEOLandingPage = () => {
  const location = useLocation();
  const { openQuickAnalysis } = useModal();

  const slug = location.pathname;
  const pageContent = getPageBySlug(slug);

  if (!pageContent) {
    return <NotFound />;
  }

  const handlePrimaryCTA = () => {
    openQuickAnalysis();
  };

  return (
    <SEOLandingPageTemplate 
      content={pageContent} 
      onPrimaryCTA={handlePrimaryCTA} 
    />
  );
};

export default SEOLandingPage;
