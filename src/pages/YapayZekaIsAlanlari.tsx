import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedRoute } from "@/lib/routeMappings";

const YapayZekaIsAlanlari = () => {
  const { t, currentLanguage } = useLanguage();
  
  return (
    <>
      <SEO
        title={t('ai.business.seo.title')}
        description={t('ai.business.seo.description')}
      />
      <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 text-foreground sm:text-5xl">
              {t('ai.business.hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t('ai.business.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <img 
              src="https://static.wixstatic.com/media/754410_55c8964c1d854926ba6681a929fa122e~mv2.jpg"
              alt="Yapay Zeka İş Alanları - Dijital Dönüşüm"
              className="w-full rounded-xl shadow-lg mb-12"
              loading="lazy"
            />
            
            {/* Satış Otomasyonu Section */}
            <div className="bg-card rounded-xl p-8 shadow-md mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                {t('ai.business.sales.title')}
              </h2>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {t('ai.business.sales.feature1.title')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('ai.business.sales.feature1.text')}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {t('ai.business.sales.feature2.title')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('ai.business.sales.feature2.text')}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {t('ai.business.sales.feature3.title')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('ai.business.sales.feature3.text')}
                  </p>
                </div>
              </div>
              
              <Button asChild className="bg-gradient-to-r from-primary to-accent">
                <Link to={getLocalizedRoute(currentLanguage, 'sales-automation')}>
                  {t('ai.business.sales.cta')}
                </Link>
              </Button>
            </div>

            <img 
              src="https://static.wixstatic.com/media/754410_032b6035730549d7a14eb9baf8c330c6~mv2.jpg"
              alt="Pazarlama Otomasyonu"
              className="w-full rounded-xl shadow-lg mb-12"
              loading="lazy"
            />

            {/* Pazarlama Otomasyonu Section */}
            <div className="bg-card rounded-xl p-8 shadow-md mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                {t('ai.business.marketing.title')}
              </h2>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {t('ai.business.marketing.feature1.title')}
                  </h3>
                  <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                    <li>{t('ai.business.marketing.feature1.text1')}</li>
                    <li>{t('ai.business.marketing.feature1.text2')}</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {t('ai.business.marketing.feature2.title')}
                  </h3>
                  <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                    <li>{t('ai.business.marketing.feature2.text1')}</li>
                    <li>{t('ai.business.marketing.feature2.text2')}</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {t('ai.business.marketing.feature3.title')}
                  </h3>
                  <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                    <li>{t('ai.business.marketing.feature3.text1')}</li>
                    <li>{t('ai.business.marketing.feature3.text2')}</li>
                  </ul>
                </div>
              </div>
              
              <Button asChild className="bg-gradient-to-r from-primary to-accent">
                <Link to={`/${currentLanguage}/yapay-zeka-is-alanlari/pazarlama`}>
                  {t('ai.business.marketing.cta')}
                </Link>
              </Button>
            </div>

            <img 
              src="https://static.wixstatic.com/media/754410_92125b9defe6460fb8fc220d5f88b244~mv2.jpg"
              alt="Yapay Zeka Çözümleri"
              className="w-full rounded-xl shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
    </>
  );
};

export default YapayZekaIsAlanlari;