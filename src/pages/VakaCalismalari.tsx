import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Clock, Target, Zap } from "lucide-react";
import { SEO } from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { Badge } from "@/components/ui/badge";
import ConnectedTimeline from "@/components/ConnectedTimeline";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useModal } from "@/contexts/ModalContext";

const VakaCalismalari = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("Hepsi");
  const [autoExpandCase, setAutoExpandCase] = useState<number | null>(null);
  const { t } = useLanguage();
  const { openQuickAnalysis } = useModal();
  
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
    },
    {
      id: 4,
      etiket: "Uluslararasi Pazarlama",
      baslik: "ERPA Teknoloji",
      ozet: "TOCHI markasiyla stadyum dijital ekran sistemlerinde Avrupa pazarina stratejik giris. AI destekli lead generation ve kisisellestirilmis iletisim kampanyasi.",
      kpis: [
        { label: "Hedef Pazar", value: "Avrupa Stadyumlari" },
        { label: "Karar Verici Tipi", value: "4+ Pozisyon" },
        { label: "Kampanya Süresi", value: "Ilk Ay" }
      ],
      problem: [
        "Avrupa pazarinda stadyum isletmecilerine ulasmak",
        "Dogru karar vericileri (Hospitality Director, Marketing Manager, etc.) tespit etmek",
        "Her stadyuma özel kisisellestirilmis mesajlar olusturmak",
        "Yüksek kaliteli lead'lere donüsmek",
        "Uluslararasi iletisimde profesyonel ve güvenilir imaj"
      ],
      cozum: "Yapay zeka tabanli arastirma ile Avrupa genelindeki stadyum isletmecileri ve arena yoneticileri icin kapsamli bir veri tabani olusturuldu. Her karar vericinin pozisyonuna göre uyarlanmis, TOCHI'nin teknolojik üstünlüklerini vurgulayan kisa ve etkili e-posta metinleri hazirlandi. Otomasyon sistemiyle mesajlar gönderildi, yanitlar siniflandirildi ve satis ekibine yönlendirildi.",
      uygulamaAsamalari: [
        "Pazar ve Karar Verici Arastirmasi",
        "Kisisellestirilmis E-posta Metinleri",
        "Otomasyon ve Lead Yönetimi",
        "Yanit Analizi ve Satis Transferi"
      ],
      sonuclar: [
        "Ilk ayda birden fazla nitelikli görüsme planlandi",
        "Sektor ortalamasinin üzerinde geri dönüs orani",
        "Avrupa genelinde stadyum isletmecileriyle dogrudan iletisim kuruldu",
        "Ölçeklenebilir ve veri odakli pazarlama altyapisi olusturuldu",
        "Türk mühendisliginin Avrupa pazarinda görünürlügü artti"
      ],
      alinti: "Bu proje, TOCHI markasinin Avrupa pazarinda taninmasini ve stadyum isletmecileriyle stratejik iliskiler kurmasini sagladi. Otomasyon sayesinde ekip büyütmeden uluslararasi pazarlara açilabildik."
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
        description="Car Studio AI, Acilsatis, Salevium ve ERPA Teknoloji'nin yapay zeka ve otomasyon ile elde ettigi basari hikayelerini kesfedin. Uluslararasi pazarlama, satis otomasyonu ve içerik üretiminde gerçek sonuçlar."
      />
      <BreadcrumbSchema items={[
        { name: "Ana Sayfa", url: "https://pratikyz.com/tr" },
        { name: "Vaka Çalışmaları", url: "https://pratikyz.com/tr/vaka-calismalari" }
      ]} />
      
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
              {t('nav.cases')}
            </Badge>
            
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6" style={{ color: '#E5E7EB' }}>
                {t('cases.title')}
              </h1>
              
              <p className="text-lg lg:text-xl mb-8" style={{ color: '#94A3B8' }}>
                {t('cases.subtitle')}
              </p>
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
              {t('cases.final.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('cases.final.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hover-glow" onClick={openQuickAnalysis}>
                {t('hero.cta.primary')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VakaCalismalari;