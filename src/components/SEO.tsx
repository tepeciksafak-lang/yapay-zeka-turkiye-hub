import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { RouteKey, getHreflangUrls } from "@/lib/routeMappings";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
  routeKey?: RouteKey;
  params?: Record<string, string>;
}

const SEO = ({ title, description, image, url, type = "website", routeKey, params }: SEOProps) => {
  const location = useLocation();
  
  const siteTitle = 'Pratik Yapay Zeka';
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;
  const defaultImage = "/og-homepage.jpg";
  const siteUrl = 'https://yapayzekapratik.com';
  
  // Clean canonical URL: remove query strings, hash, normalize trailing slash
  const getCleanCanonical = () => {
    if (url) return url;
    
    let pathname = location.pathname;
    
    // Remove trailing slash (except for root)
    if (pathname !== '/' && pathname.endsWith('/')) {
      pathname = pathname.slice(0, -1);
    }
    
    // Root path: no trailing slash
    if (pathname === '/') {
      return siteUrl;
    }
    
    return `${siteUrl}${pathname}`;
  };

  const canonicalUrl = getCleanCanonical();
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteTitle} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />
      
      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* hreflang Tags - Removed: Monolingual site (Turkish only) */}
      
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      
      {/* Structured Data - Organization */}
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
      
      {/* Structured Data - WebSite with SearchAction */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": siteTitle,
          "url": siteUrl,
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${siteUrl}/blog?search={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
    </Helmet>
  );
};

export { SEO };