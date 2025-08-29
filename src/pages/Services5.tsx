import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

const Services5 = () => {
  return (
    <>
      <SEO 
        title="Hizmetlerimiz | Pratik Yapay Zeka"
        description="Otomasyon, veri analizi, müşteri iletişimi ve eğitim/danışmanlık: İşletmeniz için pratik AI çözümleri."
      />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Hizmetlerimiz | Pratik Yapay Zeka
            </h1>
          </header>

          <div className="space-y-12">
            <section className="bg-card rounded-lg p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-foreground mb-4">
                <Link 
                  to="/otomasyon" 
                  className="text-primary hover:text-primary/80 transition-colors underline decoration-2 underline-offset-4"
                >
                  Otomasyon
                </Link>
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Telefonunuzda veya bilgisayarınızda yaptığınız birçok işi artık yapay zeka sizin yerinize yapabilir. Günlük tekrar eden işleri otomatize ederek, size ve ekibinize daha değerli işlere odaklanma fırsatı sunuyoruz. Teknolojiyi işlerinizin bir parçası haline getirerek zaman kazanın ve iş süreçlerinizi kolaylaştırın.
              </p>
            </section>

            <section className="bg-card rounded-lg p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-foreground mb-4">
                <Link 
                  to="/veri-analizi" 
                  className="text-primary hover:text-primary/80 transition-colors underline decoration-2 underline-offset-4"
                >
                  Veri analizi
                </Link>
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Dağınık bilgilerinizi bir araya getirmenize, analiz etmenize ve net bilgilere dönüştürmenize yardımcı oluyoruz. İster satış istatistikleri, ister müşteri geri bildirimleri veya performans göstergeleri olsun – işletmenizde doğru kararlar almanız için size gerekli bilgileri sunuyoruz.
              </p>
            </section>

            <section className="bg-card rounded-lg p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-foreground mb-4">
                <Link 
                  to="/m%C3%BC%C5%9Fteri-i%CC%87leti%C5%9Fimi-%C3%A7%C3%B6z%C3%BCmleri" 
                  className="text-primary hover:text-primary/80 transition-colors underline decoration-2 underline-offset-4"
                >
                  Müşteri İletişimi
                </Link>
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Dijitalleşme size karmaşık mı görünüyor? Yapay zeka sizin işinize uygun mu? Biz, sizin ihtiyaçlarınıza özel çözümler sunuyoruz. Ayrıca, ekibinizi bu yeniliklere hazırlamak için kolay anlaşılır eğitimler düzenliyoruz.
              </p>
            </section>

            <section className="bg-card rounded-lg p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-foreground mb-4">
                <Link 
                  to="/dan%C4%B1%C5%9Fmanl%C4%B1k-ve-e%C4%9Fitim" 
                  className="text-primary hover:text-primary/80 transition-colors underline decoration-2 underline-offset-4"
                >
                  Danışmanlık ve Eğitim
                </Link>
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Yapay zeka projelerinizi planlama aşamasından uygulamaya kadar yönetiyoruz ve başarıyla sonuçlanmasını sağlıyoruz.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Services5;