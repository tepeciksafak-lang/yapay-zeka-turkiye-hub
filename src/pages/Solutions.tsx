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

  return (
    <>
      <SEO
        title="Çözümler – Yapay zekâ ve otomasyonla uçtan uca büyüme"
        description="Lead üretiminden müşteri ilişkilerine kadar tüm hattınızı yapay zekâ ve otomasyonla kuruyoruz. Daha fazla müşteri, daha düşük maliyet, sürdürülebilir büyüme."
      />
      
      <div className="min-h-screen bg-background">

        {/* Solutions Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {solutions.map((solution, index) => (
                <Card 
                  key={index} 
                  className="carbon-card p-8 h-full transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-lime-400/10 flex items-center justify-center">
                        <solution.icon className="w-6 h-6 text-lime-400" strokeWidth={2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-medium text-lime-400 uppercase tracking-wider mb-2">
                          {solution.eyebrow}
                        </p>
                        <h2 className="text-xl md:text-2xl font-bold text-text-hi mb-3 leading-tight">
                          {solution.title}
                        </h2>
                      </div>
                    </div>
                    
                    <p className="text-text-muted mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <div className="mt-auto">
                      <ul className="space-y-2">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-text-muted">
                            <div className="w-1.5 h-1.5 bg-lime-400 rounded-full mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-4xl font-bold text-text-hi mb-6">
                İşletmenizi büyütmek için hangi aşamada desteğe ihtiyacınız var?
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button 
                  variant="lime" 
                  size="lg"
                  asChild
                  className="hover-glow focus-lime"
                >
                  <Link to={`/${currentLanguage}/contact`}>
                    Danışmanlık alın
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  asChild
                  className="focus-lime"
                >
                  <Link to={`/${currentLanguage}/contact`}>
                    İletişime geçin
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-text-muted">
                100+ B2B ekip için pratik kurulumlar
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Solutions;