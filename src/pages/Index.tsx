import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, Zap, TrendingUp } from "lucide-react";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO 
        title="Yapay Zeka Danışmanlığı ve Otomasyon Çözümleri"
        description="Pratik Yapay Zeka olarak, Yapay Zeka'nın gücünü kullanarak insanların hayatlarına değer katmak ve onların geleceği aktif bir şekilde şekillendirmelerine yardımcı olmaktır."
        image="https://static.wixstatic.com/media/754410_55c8964c1d854926ba6681a929fa122e~mv2.jpg"
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-accent/10 py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Yapay Zeka Danışmanlığı ve{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Otomasyon Çözümleri
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground sm:text-xl">
              Pratik Yapay Zeka olarak, Yapay Zeka (YZ)'nın yalnızca bir araç olmadığını, aynı zamanda insanlığın geleceğini kökten değiştirecek bir devrim niteliğinde güç olduğuna inanıyoruz. Misyonumuz, Türkiye'deki insanları bu dönüşüme hazırlamak ve onlara bu teknolojiyi günlük hayatlarında anlamlı ve pratik bir şekilde kullanabilmeleri için gerekli bilgi, araçlar ve desteği sunmaktır.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent">
                <Link to="/danismanlik">
                  Ücretsiz Danışmanlık <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/yapay-zeka-is-alanlari">İş Alanlarını Keşfet</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-8 text-lg text-muted-foreground">
              İnanıyoruz ki, YZ yalnızca teknoloji uzmanları için değil, herkes içindir. İster bir girişimci, ister öğrenci, ya da sadece meraklı bir birey olun – Yapay Zeka'nın sunduğu fırsatları anlamak ve bunlardan yararlanmak herkesin hakkıdır. Amacımız, YZ'nin gücünü kullanarak insanların hayatlarına değer katmak ve onların, geleceği aktif bir şekilde şekillendirmelerine yardımcı olmaktır.
            </p>
            <p className="text-lg text-muted-foreground">
              Sonuç olarak, hedefimiz, Türkiye'deki bireylerin ve işletmelerin Yapay Zeka devrimine uyum sağlamalarını sağlamak ve onları bu yeni çağın sunduğu sınırsız fırsatlar için hazırlamaktır.
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-secondary/20 py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">Hizmetlerimiz</h2>
            <p className="mb-12 text-lg text-muted-foreground">
              İşletmenizi yapay zeka ile güçlendirin
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-card p-6 shadow-md transition-shadow hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Otomasyon</h3>
              <p className="text-muted-foreground mb-4">
                Günlük tekrar eden işleri otomatize ederek zaman kazanın
              </p>
              <Button asChild variant="outline" size="sm">
                <Link to="/otomasyon">Daha Fazla</Link>
              </Button>
            </div>
            <div className="rounded-xl bg-card p-6 shadow-md transition-shadow hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Satış Otomasyonu</h3>
              <p className="text-muted-foreground mb-4">
                Yapay zeka ile satış süreçlerinizi hızlandırın
              </p>
              <Button asChild variant="outline" size="sm">
                <Link to="/yapay-zeka-is-alanlari/yapay-zeka-satis-otomasyonu">Daha Fazla</Link>
              </Button>
            </div>
            <div className="rounded-xl bg-card p-6 shadow-md transition-shadow hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Pazarlama</h3>
              <p className="text-muted-foreground mb-4">
                İçerik üretimi ve SEO optimizasyonunu AI ile hızlandırın
              </p>
              <Button asChild variant="outline" size="sm">
                <Link to="/yapay-zeka-is-alanlari/pazarlama">Daha Fazla</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Yapay Zeka Yolculuğunuza Başlayın
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Size özel yapay zeka çözümleri için ücretsiz danışmanlık alın
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent">
              <Link to="/danismanlik">
                Hemen İletişime Geçin <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Index;
