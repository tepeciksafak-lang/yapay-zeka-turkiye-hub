import { useLanguage } from "@/contexts/LanguageContext";
import { useModal } from "@/contexts/ModalContext";
import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { getLocalizedRoute } from "@/lib/routeMappings";
import { TrendingUp, Bot, MessageCircle, BarChart3, Youtube, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { caseStudiesData } from "@/data/caseStudiesData";

const Hakkimizda = () => {
  const { t, currentLanguage } = useLanguage();
  const { openQuickAnalysis } = useModal();

  const coreServices = [
    {
      icon: TrendingUp,
      title: "Outbound Sales Automation",
      description: "Lead generation, cold e-mail kampanyaları ve otomatik takip sistemleri"
    },
    {
      icon: Bot,
      title: "Marketing Automation",
      description: "İçerik üretimi, sosyal medya yönetimi ve kampanya otomasyonu"
    },
    {
      icon: MessageCircle,
      title: "AI Chatbots & Assistenten",
      description: "Müşteri destek botları, satış asistanları ve akıllı yanıt sistemleri"
    },
    {
      icon: BarChart3,
      title: "Data Analytics & Reporting",
      description: "Performans takibi, veri analizi ve karar destek sistemleri"
    }
  ];

  const values = [
    {
      emoji: "🎯",
      title: "Sonuç Odaklılık",
      description: "Ölçülebilir ROI ve somut sonuçlar"
    },
    {
      emoji: "🚀",
      title: "Hız & Verimlilik",
      description: "Haftalarda kurulum, günlerde sonuç"
    },
    {
      emoji: "🤝",
      title: "Şeffaflık",
      description: "Her adımda tam görünürlük"
    },
    {
      emoji: "🔒",
      title: "Güvenilirlik",
      description: "Veri güvenliği önceliğimiz"
    }
  ];

  return (
    <>
      <SEO
        title="Hakkımızda - ST-Automatisierung | Yapay Zeka & Otomasyon Çözümleri"
        description="ST-Automatisierung 2024'ten beri KMU'lara yapay zeka ve otomasyon çözümleri sunuyor. Dortmund merkezli, 6+ başarılı proje, ölçeklenebilir sistemler."
        routeKey="about"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-accent/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Yapay Zeka ile{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                İşinizi Büyütün
              </span>
            </h1>
            <p className="text-xl text-text-muted">
              2024'ten beri işletmelerin satış ve pazarlama süreçlerini otomasyonla dönüştürüyoruz
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-bg-2">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-center">Misyonumuz</h2>
              <p className="text-lg text-text-muted leading-relaxed">
                KMU'ların yapay zeka ve otomasyon teknolojilerini karmaşık IT altyapısı olmadan kullanabilmesini sağlıyoruz. 
                Hedefimiz, her işletmenin büyük şirketler gibi verimli, hızlı ve ölçeklenebilir olmasını mümkün kılmak.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-center">Vizyonumuz</h2>
              <p className="text-lg text-text-muted leading-relaxed">
                Türkiye ve Avrupa'daki her KMU'nun yapay zeka destekli süreçlerle rekabet avantajı elde ettiği bir gelecek yaratıyoruz.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {values.map((value, index) => (
                <Card key={index} className="border-border bg-card hover-glow-subtle transition-all">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="text-4xl">{value.emoji}</div>
                    <h3 className="font-semibold text-text-hi">{value.title}</h3>
                    <p className="text-sm text-text-muted">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-accent">
                <div className="w-12 h-12 bg-lime-400 rounded-lg"></div>
              </div>
              <h2 className="text-3xl font-bold">Hikayemiz</h2>
            </div>
            
            <div className="space-y-6 text-lg text-text-muted leading-relaxed">
              <p>
                <strong className="text-text-hi">ST-Automatisierung</strong>, 2024 yılında Almanya'nın Dortmund bölgesinde kuruldu.
              </p>
              <p>
                Kurucumuz, yıllarca B2B satış ve pazarlama alanında çalışarak şirketlerin en büyük sorununun 
                <span className="text-primary font-semibold"> "doğru müşterilere ulaşmak ve süreçleri ölçeklemek"</span> olduğunu fark etti.
              </p>
              <p>
                Bu sorunu çözmek için yapay zeka ve otomasyon teknolojilerini bir araya getirerek 
                <span className="text-accent font-semibold"> pratik, uygulanabilir çözümler</span> geliştirmeye başladı.
              </p>
              <p className="text-text-hi font-medium">
                Bugün, 6+ başarılı proje ve onlarca memnun müşteriyle büyümeye devam ediyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-bg-2">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Temel Hizmetlerimiz</h2>
              <p className="text-lg text-text-muted">
                İşletmenizin büyümesi için kapsamlı yapay zeka çözümleri
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="border-border bg-card hover-glow transition-all">
                    <CardContent className="p-8 space-y-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <Icon className="w-6 h-6 text-background" />
                      </div>
                      <h3 className="text-xl font-semibold text-text-hi">{service.title}</h3>
                      <p className="text-text-muted">{service.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* References with Logos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Referanslarımız</h2>
              <p className="text-lg text-text-muted">
                Başarı hikayelerimiz ve memnun müşterilerimiz
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudiesData.slice(0, 6).map((caseStudy) => (
                <Card key={caseStudy.id} className="border-border bg-card hover-glow transition-all">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-16 w-full bg-muted rounded-lg flex items-center justify-center">
                      <span className="text-muted-foreground text-sm font-medium">
                        {caseStudy.baslik} Logo
                      </span>
                    </div>
                    <h3 className="font-semibold text-text-hi text-lg">{caseStudy.baslik}</h3>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.kpis.map((kpi, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {kpi.value}
                        </Badge>
                      ))}
                    </div>
                    <Link 
                      to={getLocalizedRoute(currentLanguage, 'case-detail', { slug: caseStudy.slug })}
                      className="inline-flex items-center text-primary hover:text-accent transition-colors text-sm font-medium"
                    >
                      Detayları Gör →
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-bg-2">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Bizi Takip Edin</h2>
              <p className="text-lg text-text-muted">
                Yapay zeka ve otomasyon hakkında pratik ipuçları için sosyal medyada bize katılın
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="outline"
                size="lg"
                className="gap-2 hover-glow"
                asChild
              >
                <a href="https://www.youtube.com/@Pratikyapayzeka" target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-5 h-5" />
                  YouTube
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 hover-glow"
                asChild
              >
                <a href="https://www.tiktok.com/@pratikyapayzeka" target="_blank" rel="noopener noreferrer">
                  <FaTiktok className="w-5 h-5" />
                  TikTok
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 hover-glow"
                asChild
              >
                <a href="https://www.instagram.com/pratikyapayzeka" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5" />
                  Instagram
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-border bg-gradient-to-br from-primary/10 via-background to-accent/10">
              <CardContent className="p-12 text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Hemen Başlayın</h2>
                <p className="text-lg text-text-muted max-w-2xl mx-auto">
                  İşletmeniz için özel yapay zeka çözümlerini keşfedin. Ücretsiz analiz ile başlayın.
                </p>
                <Button 
                  variant="lime" 
                  size="lg"
                  className="hover-glow"
                  onClick={openQuickAnalysis}
                >
                  Ücretsiz Analiz Talep Et
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hakkimizda;
