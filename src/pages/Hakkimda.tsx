import { SEO } from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";

const Hakkimda = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <SEO 
        title={t('about.seo.title')}
        description={t('about.seo.description')}
      />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('about.page.title')}
            </h1>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="bg-card rounded-lg p-8 shadow-sm border border-border mb-8">
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t('about.intro.text')}
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t('about.section.background.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t('about.section.background.text')}
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t('about.section.current.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t('about.section.current.text')}
              </p>

              <p className="text-muted-foreground leading-relaxed">
                {t('about.section.vision.text')}
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hakkimda;