export interface CaseStudy {
  id: number;
  slug: string;
  etiket: string;
  baslik: string;
  ozet: string;
  metaTitle: string;
  metaDescription: string;
  ogImage?: string;
  logo?: string;
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
    etiket: "Satış Otomasyonu",
    baslik: "Car Studio AI",
    ozet: "Uluslararası pazarda ekip büyütmeden sürdürülebilir satış altyapısı kurulumu.",
    metaTitle: "Car Studio AI Vaka Çalışması - Satış Otomasyonu ile 3000+ Kişiselleştirilmiş E-posta",
    metaDescription: "Car Studio AI'nin uluslararası pazarda ekip büyütmeden 3000+ kişiselleştirilmiş e-posta ile satış otomasyonu başarı hikayesi. Yapay zeka destekli e-posta sistemi ile ayda 20+ saat zaman tasarrufu.",
    ogImage: "/og-car-studio.jpg",
    logo: "/logos/carstudio.avif",
    kpis: [
      { label: "E-posta Gönderimi", value: "3000+" },
      { label: "Zaman Tasarrufu", value: "20+ saat/ay" },
      { label: "Kurulum Süresi", value: "1 hafta" }
    ],
    problem: [
      "Doğru firmaları ve karar vericileri bulma",
      "Her firmaya özel mesajlar hazırlama",
      "Düzenli takip sistemi kurma"
    ],
    cozum: "Yapay zeka destekli e-posta sistemi her firmanın özelliklerine göre kişiselleştirilmiş mesajlar oluşturdu. LinkedIn profilleri ve şirket web sitelerinden alınan bilgilerle, dikkat çeken ve güven oluşturan içerikler hazırlandı.",
    uygulamaAsamalari: ["Otomatik E-posta Süreci", "Yapay Zeka ile Arama (Cold Calling)", "Kişiselleştirilmiş Mesajlaşma"],
    sonuclar: [
      "3000'den fazla kişiselleştirilmiş e-posta hiç manuel işlem gerektirmeden gönderildi",
      "Cold calling sayesinde kaliteli potansiyel müşteriler kazanıldı",
      "Satış ekibi ayda 20 saatten fazla zaman tasarrufu sağladı"
    ],
    alinti: "Otomasyon sayesinde artık sadece gerçekten ilgilenen müşterilerle görüşüyoruz. Bu da satış başarımızı önemli ölçüde artırdı."
  },
  {
    id: 2,
    slug: "acilsatis",
    etiket: "Pazarlama Otomasyonu",
    baslik: "Acilsatis",
    ozet: "Gayrimenkul ve otomobil sektöründe hızlı büyüme ve organik trafik artışı.",
    metaTitle: "Acilsatis Vaka Çalışması - Pazarlama Otomasyonu ile 5000+ Platform İlanı",
    metaDescription: "Acilsatis'in gayrimenkul ve otomobil sektöründe 5000+ platform ilanı ile hızlı büyüme ve organik trafik artışı başarı hikayesi. Instagram DM ve SMS otomasyonu ile pazarlama dönüşümü.",
    ogImage: "/og-acilsatis.jpg",
    logo: "/logos/acilsatis.avif",
    kpis: [
      { label: "Platform İlanı", value: "5000+" },
      { label: "Hedef Sektör", value: "2 Ana Sektör" },
      { label: "Kurulum", value: "Birkaç gün" }
    ],
    problem: [
      "Sektördeki binlerce emlakçı ve oto satıcısına kısa sürede ulaşmak",
      "Platformu potansiyel kullanıcılara kişisel ve doğrudan tanıtmak",
      "Organik büyümeyi yüksek reklam maliyetleri olmadan gerçekleştirmek",
      "Sürekli yüksek web trafiği sağlamak",
      "Sosyal medyada hızlı, kaliteli ve sürekli içerik üretimi sağlamak"
    ],
    cozum: "Potansiyel kullanıcılar, Instagram hesapları üzerinden otomatik olarak tespit edildi. Ardından her kullanıcıya özel hazırlanmış, ilgi çekici mesajlar oluşturuldu ve hem Instagram DM hem de SMS yoluyla iletildi. Ek olarak tamamen yapay zeka tarafından üretilen reklam videolarıyla markanın dijital ortamda görünürlüğü ve ilgi çekiciliği artırıldı.",
    uygulamaAsamalari: ["Veri Toplama (Scraping)", "Otomatik Mesaj Gönderimi", "Yapay Zeka ile Video Üretimi"],
    sonuclar: [
      "Kısa sürede yüzlerce emlakçı ve oto satıcısıyla kişisel iletişim sağlandı",
      "Web sitesi trafiği ve platform bilinirliğinde belirgin artış gerçekleşti",
      "Tamamen otomatik sistem sayesinde pazarlama için ayrılan haftalık zaman ciddi oranda azaldı",
      "Sosyal medya içerik üretimi sıfır manuel müdahaleyle hız kazandı ve kalite yükseldi"
    ],
    alinti: "Artık sektör profesyonelleri bizi tanıyor ve bize güveniyor. Trafik artışı sayesinde kullanıcı sayımız hızla artıyor."
  },
  {
    id: 3,
    slug: "salevium",
    etiket: "İçerik Otomasyonu",
    baslik: "Salevium",
    ozet: "Oyun temelli satış eğitimi şirketinin LinkedIn pazarlama sürecinin tamamen otomatikleştirilmesi.",
    metaTitle: "Salevium Vaka Çalışması - LinkedIn İçerik Otomasyonu ile 22K+ Takipçi",
    metaDescription: "Salevium'un oyun temelli satış eğitimi için LinkedIn pazarlama otomasyonu başarı hikayesi. %0 manuel içerik ile 22.000+ takipçi ve 5x etkilesim artısı.",
    ogImage: "/og-salevium.jpg",
    logo: "/logos/salevium.avif",
    kpis: [
      { label: "Manuel İçerik", value: "%0" },
      { label: "Takipçi Sayısı", value: "22,000+" },
      { label: "Etkileşim Artışı", value: "5x" }
    ],
    problem: [
      "LinkedIn pazarlama süreci tamamen kurucunun omuzlarındaydı",
      "İçerik üretimi her hafta saatler alıyordu",
      "Oyunlaştırma alanındaki liderlik konumu sürdürülemiyordu",
      "İçerikler kaliteli fakat düzensizdi",
      "Ölçeklenebilir bir sistem mevcut değildi"
    ],
    cozum: "Geliştirilen sistem, tamamen otomatik bir içerik akışı oluşturarak, LinkedIn stratejisini manuel efor harcamadan yürütebilecek şekilde yapılandırıldı. Bilimsel araştırma motoru, oyunlaştırma dönüşüm sistemi ve tek tıkla onay sistemi ile süreç optimize edildi.",
    uygulamaAsamalari: ["Stratejik İçerik Planlaması", "Bilimsel Araştırma Motoru", "Oyunlaştırma Dönüşüm Sistemi", "Tek Tıkla Onay Sistemi"],
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
    etiket: "Uluslararası Pazarlama",
    baslik: "ERPA Teknoloji",
    ozet: "TOCHI markasıyla stadyum dijital ekran sistemlerinde Avrupa pazarına stratejik giriş. AI destekli lead generation ve kişiselleştirilmiş iletişim kampanyası.",
    metaTitle: "ERPA Teknoloji Vaka Çalışması - Avrupa Stadyumları için AI Destekli Lead Generation",
    metaDescription: "ERPA Teknoloji'nin TOCHI markasıyla Avrupa pazarına stratejik girişi. AI destekli lead generation ile stadyum işletmecilerine ulaşma ve ilk ayda nitelikli görüşmeler elde etme başarısı.",
    ogImage: "/og-erpa.jpg",
    logo: "/logos/erpa.avif",
    kpis: [
      { label: "Hedef Pazar", value: "Avrupa Stadyumları" },
      { label: "Karar Verici Tipi", value: "4+ Pozisyon" },
      { label: "Kampanya Süresi", value: "İlk Ay" }
    ],
    problem: [
      "Avrupa pazarında stadyum işletmecilerine ulaşmak",
      "Doğru karar vericileri (Hospitality Director, Marketing Manager, etc.) tespit etmek",
      "Her stadyuma özel kişiselleştirilmiş mesajlar oluşturmak",
      "Yüksek kaliteli lead'lere dönüşmek",
      "Uluslararası iletişimde profesyonel ve güvenilir imaj"
    ],
    cozum: "Yapay zeka tabanlı araştırma ile Avrupa genelindeki stadyum işletmecileri ve arena yöneticileri için kapsamlı bir veri tabanı oluşturuldu. Her karar vericinin pozisyonuna göre uyarlanmış, TOCHI'nin teknolojik üstünlüklerini vurgulayan kısa ve etkili e-posta metinleri hazırlandı. Otomasyon sistemiyle mesajlar gönderildi, yanıtlar sınıflandırıldı ve satış ekibine yönlendirildi.",
    uygulamaAsamalari: [
      "Pazar ve Karar Verici Araştırması",
      "Kişiselleştirilmiş E-posta Metinleri",
      "Otomasyon ve Lead Yönetimi",
      "Yanıt Analizi ve Satış Transferi"
    ],
    sonuclar: [
      "İlk ayda birden fazla nitelikli görüşme planlandı",
      "Sektör ortalamasının üzerinde geri dönüş oranı",
      "Stadyum işletmecilerinden doğrudan yanıt geldi",
      "Satış ekibi sadece ilgilenen lead'lerle ilgilendi",
      "TOCHI markasının uluslararası görünürlüğü arttı",
      "Profesyonel bir iletişim süreci sağlandı"
    ],
    alinti: "Yapay zeka ile sadece mesaj göndermekle kalmadık; her mesajın ardından neyin işleyip işlemediğini görüp sürekli iyileştirdik. Bu sayede süreç hem etkili hem de sürdürülebilir oldu."
  },
  {
    id: 5,
    slug: "cemkimsan",
    etiket: "Uluslararası Satış & Pazarlama",
    baslik: "Cemkimsan",
    ozet: "Uluslararası kimya üreticisinin 20'den fazla ülkede satış ve pazarlama kampanyaları yürütme başarısı.",
    metaTitle: "Cemkimsan Vaka Çalışması - 20+ Ülkede Satış & Pazarlama Otomasyonu",
    metaDescription: "Cemkimsan'ın uluslararası kimya üreticisi olarak 20+ ülkede satış ve pazarlama kampanyaları başarı hikayesi. Yapay zeka ile global genişleme ve bayi ağı büyütme.",
    ogImage: "/og-cemkimsan.jpg",
    logo: "/logos/cemkimsan.avif",
    kpis: [
      { label: "Hedef Ülke", value: "20+" },
      { label: "Yeni Fırsatlar", value: "6" },
      { label: "Kurulum", value: "3 hafta" }
    ],
    problem: [
      "20+ ülkede otonom satış ve pazarlama kampanyaları yürütme ihtiyacı",
      "Kimya sektöründe doğrudan karar vericilere ulaşmak",
      "Kimya laboratuvarı ve endüstriyel müşterileri tespit etmek",
      "Her ülke için yerel dilde ve kültürel olarak uygun mesajlar oluşturmak",
      "Bayi ağı genişletmek ve büyümeyi hızlandırmak"
    ],
    cozum: "Yapay zeka tabanlı çok dilli sistemle, her ülke için otomatik hedef kitle araştırması yapıldı. Karar vericiler tespit edildi ve her ülkenin dili ve kültürüne uygun kişiselleştirilmiş mesajlar oluşturuldu. E-posta kampanyaları otomatik olarak hazırlandı, gönderildi ve yanıtlar analiz edildi. Ek olarak her ülke için lokal bayi adayları belirlenerek genişleme fırsatları yaratıldı.",
    uygulamaAsamalari: [
      "Çok Dilli Hedef Kitle Araştırması",
      "Kişiselleştirilmiş E-posta Kampanyaları",
      "Otomatik Yanıt Analizi",
      "Bayi Ağı Genişleme Stratejisi"
    ],
    sonuclar: [
      "20+ ülkede satış ve pazarlama kampanyaları başarıyla yürütüldü",
      "Manuel operasyona ihtiyaç duymadan global ölçekte erişim sağlandı",
      "6 farklı ülkeden yeni iş fırsatları elde edildi",
      "Bayi ağı genişleme sürecinde somut adımlar atıldı",
      "Her ülke için otomatik follow-up sistemleri kuruldu"
    ],
    alinti: "Artık yeni bir ülkeye açılmak, bayi ağı genişletmek veya uluslararası pazarlarda görünürlük kazanmak için aylarca kaynak ayırmamıza gerek kalmıyor. Sistem, bizim için çalışıyor."
  },
  {
    id: 6,
    slug: "dkm-coach-bilge",
    etiket: "Lead Generation",
    baslik: "DKM / Coach Bilge",
    ozet: "Fuar öncesinde oyunlaştırılmış lead funnel ile lead elde etme ve fuar sonrası otomatik takip sistemi kurulması.",
    metaTitle: "DKM / Coach Bilge Vaka Çalışması - Fuar Lead Generation Otomasyonu",
    metaDescription: "DKM ve Coach Bilge'nin fuar öncesi oyunlaştırılmış lead funnel ile 300+ ekstra lead elde etme başarı hikayesi. Yapay zeka ile fuar sonrası otomatik takip sistemi.",
    ogImage: "/og-dkm-coach-bilge.jpg",
    logo: "/logos/coach-bilge.avif",
    kpis: [
      { label: "Ekstra Lead", value: "300+" },
      { label: "Takip Orani", value: "%100" },
      { label: "Kurulum", value: "1 hafta" }
    ],
    problem: [
      "Fuar öncesi etkilesimi artirmak ve fuar standini dikkat çekici hale getirmek",
      "Fuar boyunca daha fazla potansiyel müsteri ile iletisim kurmak",
      "Fuar sonrasi potansiyel müsterileri takip etmek için zaman ve kaynak kisitliligi",
      "Manuel takip sistemlerinin düsük verimililigi",
      "Her potansiyel müsteriye kisisellestirilmis mesajlarla ulasmak"
    ],
    cozum: "Fuar öncesinde oyunlastirilmis bir dijital kampanya ile dikkati çekici içerikler olusturuldu ve potansiyel müsterilerle ön iletisim saglandi. Fuar standina gelen kisiler için oyunlastirilmis bir lead funnel tasarlandi. Fuar sonrasi tüm potansiyel müsterilere otomatik ve kisisellestirilmis e-postalar gönderildi. Yanit verenlere otomatik follow-up yapildi ve satis ekibi için öncelikli lead'ler belirlendi.",
    uygulamaAsamalari: [
      "Fuar Öncesi Oyunlastirilmis Kampanya",
      "Stand'da Lead Funnel Tasarimi",
      "Fuar Sonrasi Otomatik E-posta Akisi",
      "Kisisellestirilmis Follow-up Sistemi"
    ],
    sonuclar: [
      "Fuar öncesi kampanyayla 300'den fazla ekstra potansiyel müsteriye ulasıldı",
      "Fuar standinda yüksek etkilesim orani saglandi",
      "Fuar sonrasi %100 takip orani ile tüm potansiyel müsterilere ulasildi",
      "Manuel takip yerine otomatik sistem kullanilarak zaman ve is gücü tasarrufu saglandi",
      "Satis ekibi sadece öncelikli lead'lerle ilgilendi"
    ],
    alinti: "Fuar öncesi ve sonrasi sürecin tamamen otomatiklesmesi hem büyük zaman tasarrufu sagladi hem de daha fazla kisiyle iletisim kurmamiza olanak tandi. Artik fuarlardan çok daha verimli sonuçlar aliyoruz."
  }
];

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  return caseStudiesData.find(cs => cs.slug === slug);
};

export const getAdjacentCaseStudies = (currentSlug: string) => {
  const currentIndex = caseStudiesData.findIndex(cs => cs.slug === currentSlug);
  
  return {
    prev: currentIndex > 0 ? caseStudiesData[currentIndex - 1] : null,
    next: currentIndex < caseStudiesData.length - 1 ? caseStudiesData[currentIndex + 1] : null
  };
};

export const getLocalizedCaseStudy = (slug: string): CaseStudy | undefined => {
  return getCaseStudyBySlug(slug);
};

export const getLocalizedCaseStudies = (): CaseStudy[] => {
  return caseStudiesData;
};
