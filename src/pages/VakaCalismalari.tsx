import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import ConnectedTimeline from "@/components/ConnectedTimeline";

const VakaCalismalari = () => {
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

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Vaka Çalismalari - Basari Hikayeleri | Yapay Zeka Çözümleri"
        description="Car Studio AI, Acilsatis ve Salevium'un yapay zeka ve otomasyon ile elde ettigi basari hikayelerini kesfedin. Gerçek sonuçlar, somut veriler."
      />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 bg-primary/10 border-primary/20 text-primary">
              Basari Hikayeleri
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Vaka Çalismalarimiz
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Yapay zeka ve otomasyon çözümlerimizle müsterilerimizin elde ettigi 
              <span className="text-primary font-semibold"> gerçek sonuçlari</span> kesfеdin
            </p>
          </div>
        </div>
      </section>

      {/* Connected Timeline */}
      <ConnectedTimeline caseStudies={caseStudies} />

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