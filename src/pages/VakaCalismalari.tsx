import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Clock, Target, Zap } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import ConnectedTimeline from "@/components/ConnectedTimeline";
import { useState, useEffect } from "react";

const VakaCalismalari = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("Hepsi");
  const [autoExpandCase, setAutoExpandCase] = useState<number | null>(null);
  
  // Exact copy data with normalization (â/Â → a/A)
  const caseStudies = [
    {
      id: 1,
      etiket: "Satis Otomasyonu",
      baslik: "Car Studio AI", 
      ozet: "Uluslararasi pazarda ekip büyütmeden sürdürülebilir satis altyapisi kurulumu.",
      kpis: [
        { label: "E-posta Gönderimi", value: "3000+" },
        { label: "Zaman Tasarrufu", value: "20+ saat/ay" },
        { label: "Kurulum Süresi", value: "1 hafta" }
      ],
      problem: [
        "Dogru firmalari ve karar vericileri bulma",
        "Her firmaya özel mesajlar hazirlama",
        "Düzenli takip sistemi kurma"
      ],
      cozum: "Yapay zeka destekli e-posta sistemi her firmanin özelliklerine göre kisisellestirilmis mesajlar olusturdu. LinkedIn profilleri ve sirket web sitelerinden alinan bilgilerle, dikkat çeken ve güven olusturan içerikler hazirlandi.",
      uygulamaAsamalari: ["Otomatik E-posta Süreci", "Yapay Zeka ile Arama (Cold Calling)", "Kisisellestirilmis Mesajlasma"],
      sonuclar: [
        "3000'den fazla kisisellestirilmis e-posta hiç manuel islem gerektirmeden gönderildi",
        "Cold calling sayesinde kaliteli potansiyel müsteriler kazanildi", 
        "Satis ekibi ayda 20 saatten fazla zaman tasarrufu sagladi"
      ],
      alinti: "Otomasyon sayesinde artik sadece gerçekten ilgilenen müsterilerle görüsüyoruz. Bu da satis basarimizi önemli ölçüde artirdi."
    },
    {
      id: 2,
      etiket: "Pazarlama Otomasyonu",
      baslik: "Acilsatis",
      ozet: "Gayrimenkul ve otomobil sektöründe hizli büyüme ve organik trafik artisi.",
      kpis: [
        { label: "Platform Ilani", value: "5000+" },
        { label: "Hedef Sektör", value: "2 Ana Sektör" },
        { label: "Kurulum", value: "Birkaç gün" }
      ],
      problem: [
        "Sektördeki binlerce emlakçi ve oto saticisina kisa sürede ulasmak",
        "Platformu potansiyel kullanicilara kisisel ve dogrudan tanitmak",
        "Organik büyümeyi yüksek reklam maliyetleri olmadan gerçeklestirmek",
        "Sürekli yüksek web trafigi saglamak",
        "Sosyal medyada hizli, kaliteli ve sürekli içerik üretimi saglamak"
      ],
      cozum: "Potansiyel kullanicilar, Instagram hesaplari üzerinden otomatik olarak tespit edildi. Ardindan her kullaniciya özel hazirlanmis, ilgi çekici mesajlar olusturuldu ve hem Instagram DM hem de SMS yoluyla iletildi. Ek olarak tamamen yapay zeka tarafindan üretilen reklam videolariyla markanin dijital ortamda görünürlügü ve ilgi çekiciligi artirildi.",
      uygulamaAsamalari: ["Veri Toplama (Scraping)", "Otomatik Mesaj Gönderimi", "Yapay Zeka ile Video Üretimi"],
      sonuclar: [
        "Kisa sürede yüzlerce emlakçi ve oto saticisiyla kisisel iletisim saglandi",
        "Web sitesi trafigi ve platform bilinirliginde belirgin artis gerçeklesti",
        "Tamamen otomatik sistem sayesinde pazarlama için ayrilan haftalik zaman ciddi oranda azaldi",
        "Sosyal medya içerik üretimi sifir manuel müdahaleyle hiz kazandi ve kalite yükseldi"
      ],
      alinti: "Artik sektör profesyonelleri bizi taniyor ve bize güveniyor. Trafik artisi sayesinde kullanici sayimiz hizla artiyor."
    },
    {
      id: 3,
      etiket: "Içerik Otomasyonu",
      baslik: "Salevium",
      ozet: "Oyun temelli satis egitimi sirketinin LinkedIn pazarlama sürecinin tamamen otomatiklestilmesi.",
      kpis: [
        { label: "Manuel Içerik", value: "%0" },
        { label: "Takipçi Sayisi", value: "22,000+" },
        { label: "Etkilesim Artisi", value: "5x" }
      ],
      problem: [
        "LinkedIn pazarlama süreci tamamen kurucunun omuzlarindaydi",
        "Içerik üretimi her hafta saatler aliyordu", 
        "Oyunlastirma alanindaki liderlik konumu sürdürülemiyordu",
        "Içerikler kaliteli fakat düzensizdi",
        "Ölçeklenebilir bir sistem mevcut degildi"
      ],
      cozum: "Gelistirilen sistem, tamamen otomatik bir içerik akisi olusturarak, LinkedIn stratejisini manuel efor harcamadan yürütebilecek sekilde yapilandirildi. Bilimsel arastirma motoru, oyunlastirma dönüsüm sistemi ve tek tikla onay sistemi ile süreç optimize edildi.",
      uygulamaAsamalari: ["Stratejik Içerik Planlamas​i", "Bilimsel Arastirma Motoru", "Oyunlastirma Dönüsüm Sistemi", "Tek Tikla Onay Sistemi"],
      sonuclar: [
        "Manuel içerik üretimi %0 (öncesi haftalik 9–12 saat)",
        "LinkedIn görünürlügünde %45 artis",
        "Takipçi sayisi 22.000'in üzerine çikti",
        "Içerik etkilesim orani 5 katina çikti",
        "Haftalik otomatik içerik sayisi 3–5",
        "Kurulum süresi 2 gün",
        "Içerik onay süresi 48 saatten 4 dakikaya düstü"
      ],
      alinti: "Siz de içerik üretimi veya sosyal medya stratejinizde benzer sorunlar yasiyor musunuz? Salevium için kurdugumuz bu otomatik sistemin sizin is modelinize nasil uygulanabilecegini birlikte kesfedebiliriz."
    }
  ];

  // Handle hash navigation for direct case linking
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#case-')) {
      const caseNumber = parseInt(hash.replace('#case-', ''));
      if (caseNumber >= 1 && caseNumber <= caseStudies.length) {
        setAutoExpandCase(caseNumber);
        // Scroll to timeline after a short delay to ensure it's rendered
        setTimeout(() => {
          const timelineElement = document.querySelector('[data-timeline]');
          if (timelineElement) {
            timelineElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Vaka Çalismalari - Basari Hikayeleri | Yapay Zeka Çözümleri"
        description="Car Studio AI, Acilsatis ve Salevium'un yapay zeka ve otomasyon ile elde ettigi basari hikayelerini kesfedin. Gerçek sonuçlar, somut veriler."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ 
        minHeight: '50vh', 
        backgroundColor: '#0B0F14',
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(163, 230, 53, 0.05) 0%, transparent 70%), url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23A3E635" fill-opacity="0.02"%3E%3Cpath d="m0 40l40-40h-40v40zm40 0v-40h-40l40 40z"/%3E%3C/g%3E%3C/svg%3E")'
      }}>
        <div className="container mx-auto px-4 relative py-16 lg:py-24">
          <div className="max-w-6xl mx-auto">
            <Badge 
              variant="outline" 
              className="mb-8 border border-[#A3E635] text-[#A3E635] bg-transparent hover:bg-[#A3E635]/5"
            >
              Basari Hikayeleri
            </Badge>
            
            <div className="lg:flex lg:items-start lg:justify-between lg:gap-12 mb-12">
              <div className="lg:flex-1">
                <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6" style={{ color: '#E5E7EB' }}>
                  <span className="relative inline-block">
                    Gerçek sonuçlar.
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#A3E635] transform scale-x-100 transition-transform duration-300"></span>
                  </span>
                  <br />
                  Yapay zeka + otomasyonla büyüyen markalar.
                </h1>
                
                <div className="space-y-3 text-lg lg:text-xl" style={{ color: '#94A3B8' }}>
                  <p>
                    Asagidaki vakalarda, kurulumdan günler içinde ölçülen kazanimlari görürsünüz.
                  </p>
                  <p>
                    Tiklayin, her vakanin detaylarini açin.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 lg:mt-0 lg:flex-shrink-0">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-[#A3E635] text-[#A3E635] hover:bg-[#A3E635]/10"
                >
                  Danismanlık alin
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* KPI Strip */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="flex items-center gap-3 px-4 py-3 rounded-full border" style={{ 
                backgroundColor: '#111827', 
                borderColor: '#1F2937' 
              }}>
                <TrendingUp className="h-5 w-5 text-[#A3E635]" />
                <div>
                  <div className="font-bold text-[#E5E7EB]">3000+</div>
                  <div className="text-xs text-[#94A3B8]">e-posta</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 px-4 py-3 rounded-full border" style={{ 
                backgroundColor: '#111827', 
                borderColor: '#1F2937' 
              }}>
                <Clock className="h-5 w-5 text-[#A3E635]" />
                <div>
                  <div className="font-bold text-[#E5E7EB]">20+ saat/ay</div>
                  <div className="text-xs text-[#94A3B8]">tasarruf</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 px-4 py-3 rounded-full border" style={{ 
                backgroundColor: '#111827', 
                borderColor: '#1F2937' 
              }}>
                <Target className="h-5 w-5 text-[#A3E635]" />
                <div>
                  <div className="font-bold text-[#E5E7EB]">5x</div>
                  <div className="text-xs text-[#94A3B8]">etkilesim</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 px-4 py-3 rounded-full border" style={{ 
                backgroundColor: '#111827', 
                borderColor: '#1F2937' 
              }}>
                <Zap className="h-5 w-5 text-[#A3E635]" />
                <div>
                  <div className="font-bold text-[#E5E7EB]">1-7 gün</div>
                  <div className="text-xs text-[#94A3B8]">kurulum</div>
                </div>
              </div>
            </div>
            
            {/* Filter Chips */}
            <div className="flex flex-wrap gap-2 lg:gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {['Hepsi', 'Satis Otomasyonu', 'Pazarlama Otomasyonu', 'İçerik Otomasyonu'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    selectedFilter === filter
                      ? 'bg-[#A3E635]/10 border border-[#A3E635] text-[#A3E635]'
                      : 'border border-[#1F2937] text-[#94A3B8] hover:border-[#A3E635]/50 hover:text-[#A3E635]'
                  }`}
                  style={{ backgroundColor: selectedFilter === filter ? undefined : 'transparent' }}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Connected Timeline */}
      <div data-timeline>
        <ConnectedTimeline 
          caseStudies={caseStudies} 
          selectedFilter={selectedFilter} 
          autoExpandCase={autoExpandCase}
        />
      </div>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Siz de Basari Hikayenizi Yazmaya Hazir misiniz?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Bu müsterilerimiz gibi siz de yapay zeka ve otomasyon ile isinizi bir üst seviyeye tasiуabilirsiniz.
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