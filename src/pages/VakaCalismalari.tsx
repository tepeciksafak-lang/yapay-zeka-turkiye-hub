import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, TrendingUp, Users, Clock, Target, BarChart3 } from "lucide-react";
import { SEO } from "@/components/SEO";

const VakaCalismalari = () => {
  const caseStudies = [
    {
      id: 1,
      company: "Car Studio AI",
      title: "Stratejik Büyümenin Otomatikleştirilmesi",
      category: "Satış Otomasyonu",
      description: "Uluslararası pazarda ekip büyütmeden sürdürülebilir satış altyapısı kurulumu",
      metrics: [
        { label: "E-posta Gönderimi", value: "3000+", icon: <Zap className="h-4 w-4" /> },
        { label: "Zaman Tasarrufu", value: "20+ saat/ay", icon: <Clock className="h-4 w-4" /> },
        { label: "Kurulum Süresi", value: "1 hafta", icon: <Target className="h-4 w-4" /> }
      ],
      challenges: [
        "Doğru firmaları ve karar vericileri bulma",
        "Her firmaya özel mesajlar hazırlama", 
        "Düzenli takip sistemi kurma"
      ],
      solution: "Yapay zeka destekli e-posta sistemi her firmanın özelliklerine göre kişiselleştirilmiş mesajlar oluşturdu. LinkedIn profilleri ve şirket web sitelerinden alınan bilgilerle, dikkat çeken ve güven oluşturan içerikler hazırlandı.",
      results: [
        "3000'den fazla kişiselleştirilmiş e-posta hiç manuel işlem gerektirmeden gönderildi",
        "Cold calling sayesinde kaliteli potansiyel müşteriler kazanıldı",
        "Satış ekibi ayda 20 saatten fazla zaman tasarrufu sağladı"
      ],
      quote: "Otomasyon sayesinde artık sadece gerçekten ilgilenen müşterilerle görüşüyoruz. Bu da satış başarımızı önemli ölçüde artırdı.",
      features: ["Otomatik E-posta Süreci", "Yapay Zeka ile Arama (Cold Calling)", "Kişiselleştirilmiş Mesajlaşma"]
    },
    {
      id: 2,
      company: "Acilsatis",
      title: "Yapay Zeka Destekli Görsel ve Video Üretimi ile Marka Bilinirliğini Artırın",
      category: "Pazarlama Otomasyonu",
      description: "Gayrimenkul ve otomobil sektöründe hızlı büyüme ve organik trafik artışı",
      metrics: [
        { label: "Platform İlanı", value: "5000+", icon: <BarChart3 className="h-4 w-4" /> },
        { label: "Hedef Sektör", value: "2 Ana Sektör", icon: <Users className="h-4 w-4" /> },
        { label: "Kurulum", value: "Birkaç gün", icon: <Zap className="h-4 w-4" /> }
      ],
      challenges: [
        "Sektördeki binlerce emlakçı ve oto satıcısına kısa sürede ulaşmak",
        "Platformu potansiyel kullanıcılara kişisel ve doğrudan tanıtmak", 
        "Organik büyümeyi yüksek reklam maliyetleri olmadan gerçekleştirmek",
        "Sürekli yüksek web trafiği sağlamak",
        "Sosyal medyada hızlı, kaliteli ve sürekli içerik üretimi sağlamak"
      ],
      solution: "Potansiyel kullanıcılar, Instagram hesapları üzerinden otomatik olarak tespit edildi. Ardından her kullanıcıya özel hazırlanmış, ilgi çekici mesajlar oluşturuldu ve hem Instagram DM hem de SMS yoluyla iletildi. Ek olarak tamamen yapay zeka tarafından üretilen reklam videolarıyla markanın dijital ortamda görünürlüğü ve ilgi çekiciliği artırıldı.",
      results: [
        "Kısa sürede yüzlerce emlakçı ve oto satıcısıyla kişisel iletişim sağlandı",
        "Web sitesindeki trafik ve platform bilinirliğinde belirgin artış gerçekleşti",
        "Sistemin tamamen otomatik olması sayesinde pazarlama faaliyetlerine ayrılan haftalık zaman ciddi oranda azaltıldı",
        "Sosyal medya içerik üretimi sıfır manuel müdahaleyle hız kazandı ve içerik kalitesi yükseldi"
      ],
      quote: "Artık sektör profesyonelleri bizi tanıyor ve bize güveniyor. Trafik artışı sayesinde kullanıcı sayımız hızla artıyor.",
      features: ["Veri Toplama (Scraping)", "Otomatik Mesaj Gönderimi", "Yapay Zeka ile Video Üretimi"]
    },
    {
      id: 3,
      company: "Salevium",
      title: "Yapay Zeka ile LinkedIn Otomasyonu",
      category: "İçerik Otomasyonu",
      description: "Oyun temelli satış eğitimi şirketinin LinkedIn pazarlama sürecinin tamamen otomatikleştirilmesi",
      metrics: [
        { label: "Manuel İçerik", value: "%0", icon: <Target className="h-4 w-4" /> },
        { label: "Takipçi Sayısı", value: "22,000+", icon: <Users className="h-4 w-4" /> },
        { label: "Etkileşim Artışı", value: "5x", icon: <TrendingUp className="h-4 w-4" /> }
      ],
      challenges: [
        "LinkedIn pazarlama süreci tamamen kurucunun omuzlarındaydı",
        "İçerik üretimi her hafta saatler alıyordu",
        "Oyunlaştırma alanındaki liderlik konumu sürdürülemiyordu",
        "İçerikler kaliteli fakat düzensizdi",
        "Ölçeklenebilir bir sistem mevcut değildi"
      ],
      solution: "Geliştirilen sistem, tamamen otomatik bir içerik akışı oluşturarak, LinkedIn stratejisini manuel efor harcamadan yürütebilecek şekilde yapılandırıldı. Bilimsel araştırma motoru, oyunlaştırma dönüşüm sistemi ve tek tıkla onay sistemi ile süreç optimize edildi.",
      results: [
        "Manuel içerik üretimi yüzde sıfıra indirildi (öncesinde haftalık 9-12 saat)",
        "LinkedIn görünürlüğünde yüzde 45 artış",
        "Takipçi sayısı 22.000'in üzerine çıktı",
        "İçerik etkileşim oranı 5 katına çıktı",
        "Haftalık otomatik içerik sayısı 3 ile 5 arasında",
        "Sistemin kurulum süresi yalnızca 2 gün",
        "İçerik onay süresi 48 saatten 4 dakikaya düştü"
      ],
      quote: "Siz de içerik üretimi veya sosyal medya stratejinizde benzer sorunlar yaşıyor musunuz? Salevium için kurduğumuz bu otomatik sistemin sizin iş modelinize nasıl uygulanabileceğini birlikte keşfedebiliriz.",
      features: ["Stratejik İçerik Planlaması", "Bilimsel Araştırma Motoru", "Oyunlaştırma Dönüşüm Sistemi", "Tek Tıkla Onay Sistemi"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Vaka Çalışmaları - Başarı Hikayeleri | Yapay Zeka Çözümleri"
        description="Car Studio AI, Acilsatis ve Salevium'un yapay zeka ve otomasyon ile elde ettiği başarı hikayelerini keşfedin. Gerçek sonuçlar, somut veriler."
      />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 bg-primary/10 border-primary/20 text-primary">
              Başarı Hikayeleri
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Vaka Çalışmalarımız
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Yapay zeka ve otomasyon çözümlerimizle müşterilerimizin elde ettiği 
              <span className="text-primary font-semibold"> gerçek sonuçları</span> keşfedin
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card key={study.id} className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover-glow">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="relative">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {study.category}
                    </Badge>
                    <h2 className="text-2xl font-bold text-primary">{study.company}</h2>
                  </div>
                  <CardTitle className="text-3xl md:text-4xl mb-4 bg-gradient-primary bg-clip-text text-transparent">
                    {study.title}
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground">
                    {study.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-8">
                  {/* Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-background/50 p-6 rounded-lg border border-border/50">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            {metric.icon}
                          </div>
                          <span className="text-sm text-muted-foreground">{metric.label}</span>
                        </div>
                        <div className="text-2xl font-bold text-primary">{metric.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Challenges */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Karşılaşılan Zorluklar</h3>
                    <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-6">
                      <ul className="space-y-2">
                        {study.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Solution */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Çözüm</h3>
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                      <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Uygulama Aşamaları</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {study.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="p-3 bg-accent/10 border-accent/20 text-accent justify-center">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Sonuçlar</h3>
                    <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
                      <ul className="space-y-3">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-6">
                    <blockquote className="text-lg italic text-foreground leading-relaxed">
                      "{study.quote}"
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Siz de Başarı Hikayenizi Yazmaya Hazır mısınız?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Bu müşterilerimiz gibi siz de yapay zeka ve otomasyon ile işinizi bir üst seviyeye taşıyabilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hover-glow">
                Ücretsiz Konsültasyon Al
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="hover-glow-purple">
                Demo Talep Et
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VakaCalismalari;