import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({ title, description, image, url, type = "website" }: SEOProps) => {
  const location = useLocation();
  const siteTitle = "Pratik Yapay Zeka";
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;
  const defaultImage = "/og-image.jpg";
  const siteUrl = "https://yapayzekapratik.com";
  
  // Check if page is German or English - add noindex
  const shouldNoIndex = location.pathname.startsWith('/de') || location.pathname.startsWith('/en');
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={url || window.location.href} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteTitle} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />
      
      {/* Additional */}
      <link rel="canonical" href={url || `${siteUrl}${location.pathname}`} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content={shouldNoIndex ? "noindex, nofollow" : "index, follow"} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": siteTitle,
          "description": description,
          "url": siteUrl,
          "logo": `${siteUrl}/logo.png`,
          "sameAs": [],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "areaServed": "TR",
            "availableLanguage": "Turkish"
          }
        })}
      </script>
    </Helmet>
  );
};

export { SEO };