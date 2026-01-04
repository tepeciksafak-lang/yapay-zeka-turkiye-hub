import { useParams, useNavigate } from 'react-router-dom';
import { SEOLandingPageTemplate } from '@/components/seo-landing/SEOLandingPageTemplate';
import { getPageBySlug } from '@/data/seoLandingPagesContent';
import NotFound from '@/pages/NotFound';
import { useModal } from '@/contexts/ModalContext';

const SEOLandingPage = () => {
  const { '*': path } = useParams();
  const navigate = useNavigate();
  const { openQuickAnalysis } = useModal();

  // Construct the full slug from the path
  const slug = `/${path || ''}`;
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
