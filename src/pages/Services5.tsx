import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Services5 = () => {
  const { t, currentLanguage } = useLanguage();
  
  return (
    <>
      <SEO 
        title={t('services.seo.title')}
        description={t('services.seo.description')}
      />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('services.page.title')}
            </h1>
          </header>

          <div className="space-y-12">
            <section className="bg-card rounded-lg p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-foreground mb-4">
                <Link 
                  to={`/${currentLanguage}/otomasyon`}
                  className="text-primary hover:text-primary/80 transition-colors underline decoration-2 underline-offset-4"
                >
                  {t('services.automation.title')}
                </Link>
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {t('services.automation.text')}
              </p>
            </section>

            <section className="bg-card rounded-lg p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-foreground mb-4">
                <Link 
                  to={`/${currentLanguage}/veri-analizi`}
                  className="text-primary hover:text-primary/80 transition-colors underline decoration-2 underline-offset-4"
                >
                  {t('services.data-analysis.title')}
                </Link>
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {t('services.data-analysis.text')}
              </p>
            </section>

            <section className="bg-card rounded-lg p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-foreground mb-4">
                <Link 
                  to={`/${currentLanguage}/müşteri-iletişimi-çözümleri`}
                  className="text-primary hover:text-primary/80 transition-colors underline decoration-2 underline-offset-4"
                >
                  {t('services.customer-communication.title')}
                </Link>
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {t('services.customer-communication.text')}
              </p>
            </section>

            <section className="bg-card rounded-lg p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-foreground mb-4">
                <Link 
                  to={`/${currentLanguage}/danışmanlık-ve-eğitim`}
                  className="text-primary hover:text-primary/80 transition-colors underline decoration-2 underline-offset-4"
                >
                  {t('services.consulting.title')}
                </Link>
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {t('services.consulting.text')}
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Services5;