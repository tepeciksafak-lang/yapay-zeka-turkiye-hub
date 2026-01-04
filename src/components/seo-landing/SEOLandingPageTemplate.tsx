import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
}

interface SEOLandingPageTemplateProps {
  content: SEOLandingPageContent;
  onPrimaryCTA: () => void;
}

export const SEOLandingPageTemplate = ({ content, onPrimaryCTA }: SEOLandingPageTemplateProps) => {
  const siteUrl = 'https://yapayzekapratik.com';
  const canonicalUrl = `${siteUrl}${content.slug}`;

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

      {/* SECTION 1: HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center py-20 px-6">
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
