import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedRoute } from "@/lib/routeMappings";

const SatisOtomasyonu = () => {
  const { t, currentLanguage } = useLanguage();
  
  return (
    <>
      <SEO
        title={t('sales.automation.seo.title')}
        description={t('sales.automation.seo.description')}
      />
      <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 text-foreground sm:text-5xl">
              {t('sales.automation.hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('sales.automation.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Outbound Satış Section */}
            <div className="bg-card rounded-xl p-8 shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                {t('sales.automation.outbound.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t('sales.automation.outbound.subtitle')}
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-foreground">{t('sales.automation.outbound.feature1.title')}</strong>
                    <span className="text-muted-foreground"> {t('sales.automation.outbound.feature1.text')}</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-foreground">{t('sales.automation.outbound.feature2.title')}</strong>
                    <span className="text-muted-foreground"> {t('sales.automation.outbound.feature2.text')}</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-foreground">{t('sales.automation.outbound.feature3.title')}</strong>
                    <span className="text-muted-foreground"> {t('sales.automation.outbound.feature3.text')}</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-foreground">{t('sales.automation.outbound.feature4.title')}</strong>
                    <span className="text-muted-foreground"> {t('sales.automation.outbound.feature4.text')}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary/20 p-6 rounded-lg">
                <strong className="text-foreground">{t('sales.automation.outbound.result.title')}</strong>
                <span className="text-muted-foreground"> {t('sales.automation.outbound.result.text')}</span>
              </div>
            </div>

            {/* Inbound Satış Section */}
            <div className="bg-card rounded-xl p-8 shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                {t('sales.automation.inbound.main-title')}
              </h2>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">{t('sales.automation.inbound.title')}</h3>
              <p className="text-lg text-muted-foreground mb-8">
                {t('sales.automation.inbound.subtitle')}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-foreground">{t('sales.automation.inbound.feature1.title')}</strong>
                    <span className="text-muted-foreground"> {t('sales.automation.inbound.feature1.text')}</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-foreground">{t('sales.automation.inbound.feature2.title')}</strong>
                    <span className="text-muted-foreground"> {t('sales.automation.inbound.feature2.text')}</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-foreground">{t('sales.automation.inbound.feature3.title')}</strong>
                    <span className="text-muted-foreground"> {t('sales.automation.inbound.feature3.text')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center space-y-6 py-12">
              <h3 className="text-2xl font-bold text-foreground">
                {t('sales.automation.cta.title')}
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent">
                  <Link to={`/${currentLanguage}/danismanlik`}>
                    {t('sales.automation.cta.contact')}
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to={getLocalizedRoute(currentLanguage, 'sales-automation-demo')}>
                    {t('sales.automation.cta.learn-more')}
                  </Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
    </>
  );
};

export default SatisOtomasyonu;