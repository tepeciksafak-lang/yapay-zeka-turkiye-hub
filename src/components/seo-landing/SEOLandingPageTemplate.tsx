import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { SEO } from '@/components/SEO';
import { Helmet } from 'react-helmet-async';

export interface SEOLandingPageContent {
  slug: string;
  title: string;
  metaDescription: string;
  h1MainKeyword: string;
  heroSubheadlineBenefit: string;
  heroOneLinerDescription: string;
  primaryCtaText: string;
  problemHeadline: string;
  problemBullets: [string, string, string];
  solutionHeadline: string;
  solutionParagraphs: [string, string, string];
  howItWorksHeadline: string;
  steps: [
    { title: string; description: string },
    { title: string; description: string },
    { title: string; description: string }
  ];
  useCaseHeadline: string;
  useCaseDescription: string;
  whyUsHeadline: string;
  whyUsBullets: [string, string, string];
  ctaHeadline: string;
  ctaDescription: string;
  footerTrustNote?: string;
  parentHub?: string;
  relatedPages?: string[];
}

interface SEOLandingPageTemplateProps {
  content: SEOLandingPageContent;
  onPrimaryCTA: () => void;
  getPageBySlug: (slug: string) => SEOLandingPageContent | undefined;
}

export const SEOLandingPageTemplate = ({ content, onPrimaryCTA, getPageBySlug }: SEOLandingPageTemplateProps) => {
  const siteUrl = 'https://yapayzekapratik.com';
  const canonicalUrl = `${siteUrl}${content.slug}`;
  
  // Get parent hub content for back-link
  const parentHubContent = content.parentHub ? getPageBySlug(content.parentHub) : null;
  
  // Get related pages content for hub pages
  const relatedPagesContent = content.relatedPages 
    ? content.relatedPages.map(slug => getPageBySlug(slug)).filter(Boolean) as SEOLandingPageContent[]
    : [];
  return (
    <>
      <SEO
        title={content.title}
        description={content.metaDescription}
        url={canonicalUrl}
      />
      <Helmet>
        {/* NOINDEX for initial launch */}
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* BACK-LINK TO HUB (for sub-pages only) */}
      {parentHubContent && (
        <nav className="container mx-auto px-6 pt-8 pb-4">
          <Link 
            to={content.parentHub!} 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {parentHubContent.h1MainKeyword}
          </Link>
        </nav>
      )}

      {/* SECTION 1: HERO */}
      <section className={`relative ${parentHubContent ? 'min-h-[60vh] py-16' : 'min-h-[70vh] py-20'} flex items-center justify-center px-6`}>
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        
        <div className="relative z-10 container mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="headline text-4xl md:text-5xl lg:text-6xl text-foreground">
              <span className="text-primary">{content.h1MainKeyword}</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-semibold text-foreground/90">
              {content.heroSubheadlineBenefit}
            </p>
            
            <p className="body-text text-muted-foreground max-w-3xl mx-auto text-lg">
              {content.heroOneLinerDescription}
            </p>
            
            <div className="pt-8">
              <Button 
                onClick={onPrimaryCTA} 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg"
              >
                {content.primaryCtaText}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DAS PROBLEM */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            {content.problemHeadline}
          </h2>
          
          <ul className="space-y-6">
            {content.problemBullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive/20 text-destructive flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </span>
                <p className="text-lg text-muted-foreground">{bullet}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 3: DIE LÖSUNG */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            {content.solutionHeadline}
          </h2>
          
          <div className="space-y-6">
            {content.solutionParagraphs.map((paragraph, index) => (
              <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WIE ES FUNKTIONIERT */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
            {content.howItWorksHeadline}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {content.steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card border border-border rounded-xl p-8 h-full">
                  <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xl mb-6">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-primary/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: USE CASE / SZENARIO */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            {content.useCaseHeadline}
          </h2>
          
          <div className="bg-card border border-border rounded-xl p-8 md:p-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {content.useCaseDescription}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: WARUM WIR */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            {content.whyUsHeadline}
          </h2>
          
          <ul className="space-y-6">
            {content.whyUsBullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-lg text-muted-foreground">{bullet}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 6.5: WEITERE LÖSUNGEN (for hub pages with related pages) */}
      {relatedPagesContent.length > 0 && (
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Weitere Lösungen
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPagesContent.map((page) => (
                <Link 
                  key={page.slug} 
                  to={page.slug}
                  className="group block"
                >
                  <Card className="h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {page.h1MainKeyword}
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground line-clamp-2">
                        {page.heroOneLinerDescription}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 7: CALL TO ACTION */}
      <section className="py-20 px-6 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {content.ctaHeadline}
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            {content.ctaDescription}
          </p>
          
          <Button 
            onClick={onPrimaryCTA} 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg"
          >
            {content.primaryCtaText}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* FOOTER NOTE (optional) */}
      {content.footerTrustNote && (
        <section className="py-8 px-6 border-t border-border">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-sm text-muted-foreground">
              {content.footerTrustNote}
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default SEOLandingPageTemplate;
