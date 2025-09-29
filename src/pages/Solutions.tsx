import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Target, 
  Megaphone, 
  Users, 
  Heart, 
  TrendingUp,
  ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEO } from "@/components/SEO";
import { Hero } from "@/components/hero/Hero";

const Solutions = () => {
  const { currentLanguage } = useLanguage();

  const solutions = [
    {
      eyebrow: "Segment 1",
      title: "Lead Generation / Akıllı Müşteri Kazanımı",
      description: "Yeni müşteri kazanımı artık tesadüf değil. Yapay zekâ destekli araştırma, kişiselleştirme ve otomatik outreach sistemleriyle düzenli toplantılar yaratıyoruz.",
      icon: Target,
      features: [
        "Cold Calling & E-Mail Outreach",
        "LinkedIn, Instagram & X DMs",
        "Leadscraping",
        "Çok dilli iletişim (TR, DE, EN)"
      ]
    },
    {
      eyebrow: "Segment 2",
      title: "Marketing / Pazarlama",
      description: "Markanızı görünür kılın, güven inşa edin. AI ile içerik üretimi, kampanya yönetimi ve otomatik süreçlerle markanızı hem yerelde hem globalde büyütün.",
      icon: Megaphone,
      features: [
        "İçerik & kampanya üretimi",
        "Reklam yönetimi & funnel otomasyonu",
        "Topluluk oluşturma & nurturing"
      ]
    },
    {
      eyebrow: "Segment 3",
      title: "Sales System / CRM",
      description: "Lead'leri satışa dönüştürün. AI tabanlı CRM süreçleri, Time-to-Lead optimizasyonu ve otomatik teklifler ile satış ekibiniz sadece doğru müşterilere odaklanır.",
      icon: Users,
      features: [
        "CRM dokümantasyonu",
        "Time-to-Lead optimizasyonu",
        "Teklif oluşturma (AI destekli)",
        "Lead scoring & nitelendirme"
      ]
    },
    {
      eyebrow: "Segment 4",
      title: "Customer Success / Müşteri İlişkileri",
      description: "Her müşteri daha fazla potansiyel. AI destekli destek yönetimi ve otomatik upsell sistemleri ile mevcut müşterilerinizden daha fazla gelir yaratın.",
      icon: Heart,
      features: [
        "Destek yönetimi",
        "Upsell & cross-sell sistemleri"
      ]
    },
    {
      eyebrow: "Segment 5",
      title: "Conversion Optimization / Dönüşüm Optimizasyonu",
      description: "Trafiği müşteriye dönüştürün. Web sitenizi ve satış hattınızı AI ile optimize ederek daha fazla ziyaretçiyi gerçek müşteriye çevirin.",
      icon: TrendingUp,
      features: [
        "Website optimizasyonu",
        "Speed-to-Lead sistemleri",
        "Instagram Chatbot"
      ]
    }
  ];

  // Hero content for Solutions page
  const solutionsHero = {
    title1: 'İşletmenizi büyütmek için',
    title2: 'hangi aşamada desteğe ihtiyacınız var?',
    subtitle: 'Lead üretiminden müşteri ilişkilerine kadar tüm hattınızı yapay zekâ ve otomasyonla kuruyoruz.',
    ctaPrimary: 'Danışmanlık alın',
    socialProof: '100+ B2B ekip için pratik kurulumlar'
  };

  return (
    <>
      <SEO
        title="Çözümler – Yapay zekâ ve otomasyonla uçtan uca büyüme"
        description="Lead üretiminden müşteri ilişkilerine kadar tüm hattınızı yapay zekâ ve otomasyonla kuruyoruz. Daha fazla müşteri, daha düşük maliyet, sürdürülebilir büyüme."
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Main Headlines */}
            <div className="space-y-4">
              <h1 className="group headline text-4xl md:text-6xl lg:text-7xl text-foreground leading-[1.25] md:leading-[1.2]">
                <span className="block">{solutionsHero.title1}</span>
                <span className="block text-primary pb-1 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-right after:transition-transform after:duration-1000 after:ease-out group-hover:after:scale-x-100 group-hover:after:origin-left">
                  {solutionsHero.title2}
                </span>
              </h1>
            </div>
            
            {/* Subtitle */}
            <p className="body-text text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {solutionsHero.subtitle}
            </p>
            
            {/* CTA Buttons */}
            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-semibold rounded-xl transition-colors duration-200"
                asChild
              >
                <Link to="/tr">
                  {solutionsHero.ctaPrimary}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-12 py-6 text-lg font-semibold rounded-xl"
                asChild
              >
                  <Link to="/tr">
                    İletişime geçin
                </Link>
              </Button>
            </div>
            
            {/* Social Proof */}
            <p className="text-sm text-muted-foreground pt-4">
              {solutionsHero.socialProof}
            </p>
          </div>
        </div>
      </section>
      
      <div className="bg-background">

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="pt-8">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-semibold rounded-xl transition-colors duration-200"
                  asChild
                >
                  <Link to="/tr">
                    Şimdi ücretsiz başlayın
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground pt-4">
                100+ B2B ekip için pratik otomasyon kurguladık.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Solutions;