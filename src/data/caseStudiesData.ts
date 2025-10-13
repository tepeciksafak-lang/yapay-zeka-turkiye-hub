export interface CaseStudy {
  id: number;
  slug: string;
  etiket: string;
  baslik: string;
  ozet: string;
  metaTitle: string;
  metaDescription: string;
  ogImage?: string;
  kpis: Array<{
    label: string;
    value: string;
  }>;
  problem: string[];
  cozum: string;
  uygulamaAsamalari: string[];
  sonuclar: string[];
  alinti?: string;
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: 1,
    slug: "car-studio-ai",
    etiket: "Satis Otomasyonu",
    baslik: "Car Studio AI",
    ozet: "Uluslararasi pazarda ekip büyütmeden sürdürülebilir satis altyapisi kurulumu.",
    metaTitle: "Car Studio AI Vaka Çalışması - Satış Otomasyonu ile 3000+ Kişiselleştirilmiş E-posta",
    metaDescription: "Car Studio AI'nin uluslararası pazarda ekip büyütmeden 3000+ kişiselleştirilmiş e-posta ile satış otomasyonu başarı hikayesi. Yapay zeka destekli e-posta sistemi ile ayda 20+ saat zaman tasarrufu.",
    ogImage: "/og-car-studio.jpg",
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
    slug: "acilsatis",
    etiket: "Pazarlama Otomasyonu",
    baslik: "Acilsatis",
    ozet: "Gayrimenkul ve otomobil sektöründe hizli büyüme ve organik trafik artisi.",
    metaTitle: "Acilsatis Vaka Çalışması - Pazarlama Otomasyonu ile 5000+ Platform İlanı",
    metaDescription: "Acilsatis'in gayrimenkul ve otomobil sektöründe 5000+ platform ilanı ile hızlı büyüme ve organik trafik artışı başarı hikayesi. Instagram DM ve SMS otomasyonu ile pazarlama dönüşümü.",
    ogImage: "/og-acilsatis.jpg",
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
    slug: "salevium",
    etiket: "Içerik Otomasyonu",
    baslik: "Salevium",
    ozet: "Oyun temelli satis egitimi sirketinin LinkedIn pazarlama sürecinin tamamen otomatiklestilmesi.",
    metaTitle: "Salevium Vaka Çalışması - LinkedIn İçerik Otomasyonu ile 22K+ Takipçi",
    metaDescription: "Salevium'un oyun temelli satış eğitimi için LinkedIn pazarlama otomasyonu başarı hikayesi. %0 manuel içerik ile 22.000+ takipçi ve 5x etkilesim artısı.",
    ogImage: "/og-salevium.jpg",
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
    slug: "erpa-teknoloji",
    etiket: "Uluslararasi Pazarlama",
    baslik: "ERPA Teknoloji",
    ozet: "TOCHI markasiyla stadyum dijital ekran sistemlerinde Avrupa pazarina stratejik giris. AI destekli lead generation ve kisisellestirilmis iletisim kampanyasi.",
    metaTitle: "ERPA Teknoloji Vaka Çalışması - Avrupa Stadyumları için AI Destekli Lead Generation",
    metaDescription: "ERPA Teknoloji'nin TOCHI markasıyla Avrupa pazarına stratejik girişi. AI destekli lead generation ile stadyum işletmecilerine ulaşma ve ilk ayda nitelikli görüşmeler elde etme başarısı.",
    ogImage: "/og-erpa.jpg",
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
  },
  {
    id: 5,
    slug: "cemkimsan",
    etiket: "B2B Export & Distribütör Agi",
    baslik: "Cemkimsan",
    ozet: "1980'den beri su aritma ve denizcilik kimyasallari üreticisi Cemkimsan'in uluslararasi distribütör agini 20+ ülkede genisletme projesi. Veri odakli ve otomatik B2B lead generation.",
    metaTitle: "Cemkimsan Vaka Çalışması - 20+ Ülkede 1000+ Doğrulanmış Distribütör Ağı",
    metaDescription: "Cemkimsan'ın su arıtma ve denizcilik kimyasalları için 20+ ülkede 1000+ doğrulanmış distribütör ağı kurma projesi. AI destekli B2B export ve sistematik ihracat büyümesi.",
    ogImage: "/og-cemkimsan.jpg",
    kpis: [
      { label: "Hedef Ülke", value: "20+ Ülke" },
      { label: "Dogrulanmis Distribütör", value: "1000+" },
      { label: "Pilot Pazar", value: "Kuveyt" }
    ],
    problem: [
      "Yeni ihracat pazarlarinda dogru distribütörleri bulmak",
      "20+ ülkede su aritma ve kimya ithalatçilarini tespit etmek",
      "Her ülkenin ticari ve kültürel özelliklerine uygun mesajlar olusturmak",
      "Manuel arastirma ve iletisim süreçlerinin çok fazla zaman almasi",
      "Uluslararasi B2B iletisimde profesyonel ve güvenilir görünmek",
      "Distribütör kalitesini ve potansiyelini degerlendirmek"
    ],
    cozum: "Yapay zeka destekli pazar arastirmasi ile Körfez ülkeleri, Kuzey Afrika, Orta Asya ve Güneydogu Avrupa'daki su aritma kimyasallari distribütörleri için kapsamli bir veri tabani olusturuldu. Her ülkenin ticari yapisi, kültürel özellikleri ve sektör normlarini göz önünde bulundurarak kisisellestirilmis Ingilizce iletisim sablonlari hazirlandi. Otomatik takip sistemi, lead kalifikasyonu ve önceliklendirme yapildi.",
    uygulamaAsamalari: [
      "Ülke Bazli Pazar ve Hedef Firma Arastirmasi",
      "Distribütör Veri Tabani Olusturma (1000+ Firma)",
      "Kültürel ve Sektörel Mesaj Sablonlari",
      "Otomatik Iletisim ve Takip Sistemi",
      "Lead Kalifikasyonu ve Tier Siniflandirmasi (1-3)",
      "Pilot Pazar Testi (Kuveyt)"
    ],
    sonuclar: [
      "1000'den fazla dogrulanmis potansiyel distribütör 20+ ülkede tespit edildi",
      "Tier 1-3 önceliklendirme ile pazar potansiyeline göre siniflandirma yapildi",
      "Kuveyt pilot pazarinda basarili test ve pozitif geri bildirimler alindi",
      "Uluslararasi satis süreçleri tamamen yapilandirildi ve takip edilebilir hale getirildi",
      "Ihracat ekibine önemli zaman tasarrufu ve süreç seffafligi saglandi",
      "Cemkimsan artik bagimsiz olarak yeni pazarlari analiz edip partner bulabiliyor"
    ],
    alinti: "Bu proje sayesinde ihracat süreçlerimizi modernlestirdik ve 20'den fazla ülkede sistematik bir distribütör agi kurmaya basladik. Artik hangi pazarda kim ile görüsecegimizi net olarak biliyoruz ve zaman kaybetmeden hedefli çalisiyoruz."
  }
];

// Helper function to get case study by slug
export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  return caseStudiesData.find(cs => cs.slug === slug);
};

// Helper function to get next/previous case studies
export const getAdjacentCaseStudies = (currentSlug: string) => {
  const currentIndex = caseStudiesData.findIndex(cs => cs.slug === currentSlug);
  
  if (currentIndex === -1) return { prev: null, next: null };
  
  return {
    prev: currentIndex > 0 ? caseStudiesData[currentIndex - 1] : null,
    next: currentIndex < caseStudiesData.length - 1 ? caseStudiesData[currentIndex + 1] : null
  };
};
