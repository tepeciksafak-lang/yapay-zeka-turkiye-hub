import { SEOLandingPageContent } from '@/components/seo-landing/SEOLandingPageTemplate';

// Define all marketing sub-page slugs
const marketingSubPages = [
  '/marketing-otomasyonu/lead-uretimi',
  '/marketing-otomasyonu/funnel-otomasyonu',
  '/marketing-otomasyonu/landing-page-otomasyonu',
  '/marketing-otomasyonu/form-otomasyonu',
  '/marketing-otomasyonu/email-otomasyonu',
  '/marketing-otomasyonu/crm-entegrasyonu',
  '/marketing-otomasyonu/lead-nurturing',
  '/marketing-otomasyonu/musteri-segmentasyonu',
  '/marketing-otomasyonu/whatsapp-otomasyonu',
  '/marketing-otomasyonu/chatbot-otomasyonu',
  '/marketing-otomasyonu/musteri-iletisim-otomasyonu',
  '/marketing-otomasyonu/sosyal-medya-otomasyonu',
  '/marketing-otomasyonu/icerik-uretimi',
  '/marketing-otomasyonu/reklam-otomasyonu',
];

// Define all sales sub-page slugs
const salesSubPages = [
  '/satis-otomasyonu/crm-satis',
  '/satis-otomasyonu/teklif-otomasyonu',
  '/satis-otomasyonu/follow-up-otomasyonu',
];

export const seoLandingPagesContent: SEOLandingPageContent[] = [
  // === PAGE 1: /marketing-otomasyonu (HUB_PAGE - Informational) ===
  {
    slug: '/marketing-otomasyonu',
    title: 'Pazarlama Otomasyonu Rehberi: Tüm Kanallar ve Use Cases',
    metaDescription: 'Pazarlama otomasyonu nedir, nasıl çalışır? Lead üretimi, funnel, e-posta ve daha fazlası — kapsamlı rehber.',
    h1MainKeyword: 'Pazarlama Otomasyonu: Kapsamlı Rehber',
    heroSubheadlineBenefit: 'Pazarlama otomasyonunun tüm yönlerini keşfedin.',
    heroOneLinerDescription: 'Lead üretiminden müşteri segmentasyonuna, e-posta otomasyonundan CRM entegrasyonuna kadar tüm pazarlama konularını kapsayan rehber.',
    primaryCtaText: 'Ücretsiz Analiz Alın',
    problemHeadline: 'Pazarlama Ekiplerinin Yaşadığı Zorluklar',
    problemBullets: [
      'Kampanyalar manuel yürütüldüğünden ekip kapasitesi sınırlanıyor.',
      'Leadler zamanında takip edilemiyor, fırsatlar kayıp gidiyor.',
      'Pazarlama verileri dağınık, raporlama zaman alıyor.'
    ],
    solutionHeadline: 'Pazarlama Otomasyonu Nedir?',
    solutionParagraphs: [
      'Pazarlama otomasyonu, kampanya yürütmeden lead skorlamaya kadar tüm süreçleri sistematik hale getiren teknolojilerdir.',
      'Bu rehberde her bir pazarlama otomasyonu alt konusunu detaylı inceleyebilirsiniz.',
      'Profesyonel çözüm arıyorsanız, pazarlama otomasyonu çözümlerimizi inceleyin.'
    ],
    howItWorksHeadline: 'Pazarlama Otomasyonu Nasıl Çalışır?',
    steps: [
      { title: 'Analiz', description: 'Mevcut pazarlama süreçlerinizi ve veri akışlarınızı inceliyoruz.' },
      { title: 'Tasarım', description: 'Otomasyona uygun iş akışları ve entegrasyon planı hazırlıyoruz.' },
      { title: 'Uygulama', description: 'Sistemi kuruyoruz, ekibinizi eğitiyoruz ve canlı takip yapıyoruz.' }
    ],
    useCaseHeadline: 'Örnek Senaryo',
    useCaseDescription: 'Bir B2B yazılım firmasının pazarlama ekibi, kampanya yürütme ve lead takibini otomatikleştirdikten sonra haftalık 15 saat zaman kazandı. Aynı zamanda lead dönüş oranı yüzde 22 arttı.',
    whyUsHeadline: 'Rehber İçindekiler',
    whyUsBullets: [
      'Lead üretimi ve nurturing stratejileri',
      'E-posta, sosyal medya ve reklam otomasyonu',
      'CRM entegrasyonu ve veri yönetimi'
    ],
    ctaHeadline: 'Profesyonel Çözüm mü Arıyorsunuz?',
    ctaDescription: 'Pazarlama süreçlerinizi otomatikleştirmek için profesyonel destek alın.',
    footerTrustNote: 'Türkiye\'nin öncü B2B şirketleri ile çalışıyoruz.',
    relatedPages: marketingSubPages,
    // Hub-to-Money internal link
    moneyPageLink: '/cozumler/pazarlama-otomasyonu',
    moneyPageAnchor: 'Pazarlama Otomasyonu Çözümlerimiz →',
  },

  // === PAGE 2: /marketing-otomasyonu/lead-uretimi ===
  {
    slug: '/marketing-otomasyonu/lead-uretimi',
    title: 'Yapay Zeka ile Lead Uretimi',
    metaDescription: 'Hedef kitlenize otomatik ulasarak nitelikli lead uretin. Yapay zeka destekli lead generation sistemi. Hemen basvurun.',
    h1MainKeyword: 'Yapay Zeka ile Lead Uretimi',
    heroSubheadlineBenefit: 'Dogru musterilere otomatik ulasarak satis hattinizi doldurun.',
    heroOneLinerDescription: 'Hedefleme, erisim ve ilk temas sureclerini yapay zeka ile otomatiklestirin.',
    primaryCtaText: 'Ucretsiz Demo Talep Edin',
    problemHeadline: 'Lead Uretiminde Yasanan Sorunlar',
    problemBullets: [
      'Hedef kitle belirleme sureci manuel ve zaman alici.',
      'Soguk erisimler dusuk yanit oranlariyla sonuclaniyor.',
      'Leadler nitelendirmeden satisa gonderiliyor.'
    ],
    solutionHeadline: 'Akilli Lead Uretim Sistemi',
    solutionParagraphs: [
      'Yapay zeka, ideal musteri profilinize uyan firmalari otomatik olarak tespit eder.',
      'Kisisellestirmis mesajlarla ilk temasi kurar ve yanit alanlari onceliklendirir.',
      'Sonuc: daha yuksek yanit orani, daha nitelikli satis firsatlari.'
    ],
    howItWorksHeadline: 'Surec Nasil Isler?',
    steps: [
      { title: 'Hedefleme', description: 'Ideal musteri profilinizi tanimliyoruz ve veri kaynaklarini belirliyoruz.' },
      { title: 'Otomasyon', description: 'Erisim kampanyalarini kurguluyoruz ve mesajlari kisisellestiriyoruz.' },
      { title: 'Nitelendirme', description: 'Gelen yanitlari skorluyor ve satisa hazir leadleri aktariyoruz.' }
    ],
    useCaseHeadline: 'Gercek Uygulama',
    useCaseDescription: 'Bir danismanlik firmasi, yapay zeka destekli lead uretim sistemiyle ayda 120 nitelikli lead elde etti. Manuel arastirma suresi yuzde 80 azaldi.',
    whyUsHeadline: 'Neden Bu Sistem?',
    whyUsBullets: [
      'Veri tabanlarindan otomatik hedef kitle cikarimi.',
      'Kisisellestirmis ve olceklenebilir erisim kampanyalari.',
      'Satis ekibiyle entegre lead aktarimi.'
    ],
    ctaHeadline: 'Satis Hattinizi Doldurun',
    ctaDescription: 'Nitelikli lead uretimini otomatik hale getirin. Ucretsiz demo icin formu doldurun.',
    footerTrustNote: 'B2B firmalar icin sonuc odakli lead generation cozumleri.',
    parentHub: '/marketing-otomasyonu',
  },

  // === PAGE 3: /marketing-otomasyonu/funnel-otomasyonu ===
  {
    slug: '/marketing-otomasyonu/funnel-otomasyonu',
    title: 'Satis Funnel Otomasyonu',
    metaDescription: 'B2B satis funnelinizi yapay zeka ile otomatiklestirin. Lead nurturing ve donusum optimizasyonu. Ucretsiz strateji gorusmesi.',
    h1MainKeyword: 'Satis Funnel Otomasyonu',
    heroSubheadlineBenefit: 'Leadlerinizi sistematik olarak satisa hazir hale getirin.',
    heroOneLinerDescription: 'Funnel asamalarini otomatiklestirin, her asamada dogru aksiyonlarla donusumu artirin.',
    primaryCtaText: 'Strateji Gorusmesi Planlayin',
    problemHeadline: 'Uzun Satis Dongusunun Zorluklari',
    problemBullets: [
      'Leadler funnel icerisinde kayip gidiyor, takip yapilmiyor.',
      'Her asamada manuel mudahale gerektiriyor.',
      'Donusum oranlarini olcmek ve iyilestirmek zor.'
    ],
    solutionHeadline: 'Otomatik Funnel Yonetimi',
    solutionParagraphs: [
      'Funnel otomasyonu, her asamada doğru aksiyonlarin otomatik alinmasini saglar.',
      'Leadler davranislarina gore skorlanir ve dogru iceriklerle beslenir.',
      'Sonuc: kisalan satis donguleri ve artan donusum oranlari.'
    ],
    howItWorksHeadline: 'Sistem Nasil Calisir?',
    steps: [
      { title: 'Funnel Tasarimi', description: 'Mevcut satis sureclerinizi analiz ediyor ve funnel asamalarini tanimliyoruz.' },
      { title: 'Otomasyon Kurulumu', description: 'Her asamadaki aksiyonlari otomatiklestiriyoruz.' },
      { title: 'Optimizasyon', description: 'Performans verilerini izliyor ve surekli iyilestirme yapiyoruz.' }
    ],
    useCaseHeadline: 'Basari Hikayesi',
    useCaseDescription: 'Bir SaaS sirketi, funnel otomasyonu ile satis dongusu suresini 45 gunlerden 28 gune indirdi. Donusum orani yuzde 18 artti.',
    whyUsHeadline: 'Avantajlarimiz',
    whyUsBullets: [
      'B2B satis dongulerine ozel funnel tasarimi.',
      'CRM entegrasyonu ile kesintisiz veri akisi.',
      'A/B test ve surekli optimizasyon destegi.'
    ],
    ctaHeadline: 'Funnelinizi Otomatiklestirin',
    ctaDescription: 'Satis sureclerinizi sistematik hale getirin. Strateji gorusmesi icin simdi iletisime gecin.',
    footerTrustNote: 'Uzun satis donguleri icin optimize edilmis funnel cozumleri.',
    parentHub: '/marketing-otomasyonu',
  },

  // === PAGE 4: /marketing-otomasyonu/landing-page-otomasyonu ===
  {
    slug: '/marketing-otomasyonu/landing-page-otomasyonu',
    title: 'Landing Page Otomasyonu',
    metaDescription: 'Kampanyalariniz icin landing page uretimini ve optimizasyonunu otomatiklestirin. Daha hizli lansman, daha yuksek donusum.',
    h1MainKeyword: 'Landing Page Otomasyonu',
    heroSubheadlineBenefit: 'Kampanyalariniz icin hizli ve etkili landing page uretimi.',
    heroOneLinerDescription: 'Sablonlar, A/B testler ve form entegrasyonlari ile landing page sureclerinizi otomatiklestirin.',
    primaryCtaText: 'Demo Talebinde Bulunun',
    problemHeadline: 'Kampanya Ekiplerinin Karsilastigi Sorunlar',
    problemBullets: [
      'Her kampanya icin yeni landing page olusturmak zaman aliyor.',
      'Tasarim ve gelistirme ekibine bagimlilik lansmani yavaslaatiyor.',
      'A/B test ve optimizasyon manuel yurutuluyor.'
    ],
    solutionHeadline: 'Otomatik Landing Page Sistemi',
    solutionParagraphs: [
      'Onaylanmis sablonlarla dakikalar icerisinde yeni landing page olusturun.',
      'Form verileri otomatik olarak CRM sistemine akar.',
      'Sonuc: hizli lansman, tutarli marka deneyimi ve artan donusum.'
    ],
    howItWorksHeadline: 'Calisma Mantigi',
    steps: [
      { title: 'Sablon Secimi', description: 'Kampanya hedefine uygun sablonu seciyorsunuz.' },
      { title: 'Icerik Girisi', description: 'Metin ve gorselleri ekleyerek sayfayi kisisellestiriyorsunuz.' },
      { title: 'Yayinlama', description: 'Tek tikla yayinliyor, performansi izlemeye basliyorsunuz.' }
    ],
    useCaseHeadline: 'Uygulama Ornegi',
    useCaseDescription: 'Bir e-ticaret B2B firmasi, landing page otomasyonu ile kampanya lansman suresini 5 gunlerden 1 gune indirdi.',
    whyUsHeadline: 'Nicin Tercih Ediliyoruz?',
    whyUsBullets: [
      'Kod bilgisi gerektirmeyen drag-drop arayuz.',
      'CRM ve e-posta araclariyla hazir entegrasyonlar.',
      'Dahili A/B test ve analitik modulu.'
    ],
    ctaHeadline: 'Kampanyalarinizi Hizlandirin',
    ctaDescription: 'Landing page sureclerinizi otomatik hale getirin. Demo icin hemen basvurun.',
    footerTrustNote: 'Pazarlama ekipleri icin tasarlanmis self-servis landing page sistemi.',
    parentHub: '/marketing-otomasyonu',
  },

  // === PAGE 5: /marketing-otomasyonu/form-otomasyonu ===
  {
    slug: '/marketing-otomasyonu/form-otomasyonu',
    title: 'Form Otomasyonu ile Lead Toplama',
    metaDescription: 'Formlarinizdan gelen leadleri otomatik isleyin ve CRM sisteminize aktarin. Yapay zeka destekli form otomasyonu.',
    h1MainKeyword: 'Form Otomasyonu Yapay Zeka',
    heroSubheadlineBenefit: 'Formlardan gelen her lead otomatik olarak degerlendirilsin ve yonlendirilsin.',
    heroOneLinerDescription: 'Form verilerini toplama, skorlama ve CRM aktarimini tek bir sistemde birlestirin.',
    primaryCtaText: 'Ucretsiz Analiz Alin',
    problemHeadline: 'Form Yonetimindeki Aksakliklar',
    problemBullets: [
      'Form verileri farkli sistemlerde dagnik tutuluyor.',
      'Leadler zamaninda islenmiyor, takip gecikiyor.',
      'Hangi formlarin daha iyi performans gosterdigi belirsiz.'
    ],
    solutionHeadline: 'Akilli Form Yonetimi',
    solutionParagraphs: [
      'Tum formlarinizdan gelen veriler tek bir platformda toplanir.',
      'Yapay zeka, leadleri otomatik skorlar ve dogru ekibe yonlendirir.',
      'Sonuc: hizli yanit sureleri ve artan lead kalitesi.'
    ],
    howItWorksHeadline: 'Sistem Isleyisi',
    steps: [
      { title: 'Form Entegrasyonu', description: 'Mevcut formlarinizi sisteme bagliyoruz.' },
      { title: 'Otomatik Skorlama', description: 'Gelen veriler yapay zeka ile analiz edilip skorlaniyor.' },
      { title: 'CRM Aktarimi', description: 'Nitelikli leadler otomatik olarak satis ekibine iletiliyor.' }
    ],
    useCaseHeadline: 'Gercek Sonuc',
    useCaseDescription: 'Bir egitim firmasinin web formlarindan gelen leadler otomatik skorlandi ve satis ekibine 2 saat icerisinde ulastirildi. Ilk temas suresi yuzde 70 kisaldi.',
    whyUsHeadline: 'Farklarimiz',
    whyUsBullets: [
      'Tum form araclariyla uyumlu entegrasyon.',
      'Gercek zamanli lead skorlama ve bildirim.',
      'Detayli form performans analitiği.'
    ],
    ctaHeadline: 'Formlarinizi Akillica Yonetin',
    ctaDescription: 'Lead kayiplarini onleyin, form verilerinizi otomatik isleyin. Ucretsiz analiz icin iletisime gecin.',
    footerTrustNote: 'Form odakli lead yonetimi icin tasarlanmis otomasyon cozumu.',
    parentHub: '/marketing-otomasyonu',
  },

  // === PAGE 6: /marketing-otomasyonu/email-otomasyonu ===
  {
    slug: '/marketing-otomasyonu/email-otomasyonu',
    title: 'E-posta Pazarlama Otomasyonu',
    metaDescription: 'E-posta kampanyalarinizi yapay zeka ile otomatiklestirin. Kisisellestirmis icerik, zamanlanmis gonderim. Simdi basvurun.',
    h1MainKeyword: 'E-posta Pazarlama Otomasyonu',
    heroSubheadlineBenefit: 'Dogru mesaji dogru kisiye dogru zamanda iletin.',
    heroOneLinerDescription: 'E-posta dizileri, segmentasyon ve performans takibini tek platformda yonetin.',
    primaryCtaText: 'Ucretsiz Demo Talep Edin',
    problemHeadline: 'E-posta Pazarlamasinda Karsilasilan Engeller',
    problemBullets: [
      'Toplu gonderimler dusuk acilma oranlarina neden oluyor.',
      'Kisisellestirme manuel yapildigi icin olceklenemiyor.',
      'Hangi e-postalarin isletigi analiz edilemiyor.'
    ],
    solutionHeadline: 'Yapay Zeka Destekli E-posta Sistemi',
    solutionParagraphs: [
      'E-postalar alici davranisina gore otomatik kisisellestiriliyor.',
      'Gonderim zamanlari yapay zeka ile optimize ediliyor.',
      'Sonuc: daha yuksek acilma ve tiklama oranlari.'
    ],
    howItWorksHeadline: 'Nasil Calisir?',
    steps: [
      { title: 'Liste Segmentasyonu', description: 'Alicilarinizi davranissal verilere gore grupluyoruz.' },
      { title: 'Icerik Kisisellestirme', description: 'Her segment icin dinamik icerikler olusturuyoruz.' },
      { title: 'Otomatik Gonderim', description: 'En uygun zamanda e-postalar otomatik gonderiliyor.' }
    ],
    useCaseHeadline: 'Ornek Basari',
    useCaseDescription: 'Bir B2B hizmet firmasinin e-posta acilma orani yuzde 18den yuzde 34e yukseldi. Satis ekibine aktarilan lead sayisi iki katina cikti.',
    whyUsHeadline: 'Tercih Nedenlerimiz',
    whyUsBullets: [
      'Davranissal tetikleyicilerle otomatik e-posta dizileri.',
      'A/B test ve performans optimizasyonu.',
      'CRM ve pazarlama araclariyla entegrasyon.'
    ],
    ctaHeadline: 'E-posta Performansinizi Artirin',
    ctaDescription: 'E-posta pazarlamanizi yapay zeka ile guclendirin. Ucretsiz demo icin formu doldurun.',
    footerTrustNote: 'B2B e-posta pazarlamasinda kanitlanmis sonuclar.',
    parentHub: '/marketing-otomasyonu',
  },

  // === PAGE 7: /marketing-otomasyonu/crm-entegrasyonu ===
  {
    slug: '/marketing-otomasyonu/crm-entegrasyonu',
    title: 'CRM Entegrasyonu ile Pazarlama Otomasyonu',
    metaDescription: 'CRM sisteminizi pazarlama araclariyla entegre edin. Veri akisini otomatiklestirin, lead kayiplarini onleyin.',
    h1MainKeyword: 'CRM Otomasyonu Yapay Zeka',
    heroSubheadlineBenefit: 'Pazarlama ve satis verilerinizi tek bir sistemde birlestirin.',
    heroOneLinerDescription: 'CRM entegrasyonu ile lead takibi, veri senkronizasyonu ve raporlamayi otomatik hale getirin.',
    primaryCtaText: 'Entegrasyon Analizi Isteyin',
    problemHeadline: 'Veri Kopuklugunden Kaynaklanan Sorunlar',
    problemBullets: [
      'Pazarlama ve satis verileri farkli sistemlerde tutuluyor.',
      'Lead gecisleri manuel yapilarak zaman kaybediliyor.',
      'Kampanya performansi satis verileriyle eslestirilemeiyor.'
    ],
    solutionHeadline: 'Entegre Veri Akisi',
    solutionParagraphs: [
      'CRM sisteminiz pazarlama araclariyla otomatik senkronize olur.',
      'Leadler tek bir gorunumde takip edilir, gecmisi kaybolmaz.',
      'Sonuc: daha iyi isbirligi ve daha dogru raporlama.'
    ],
    howItWorksHeadline: 'Entegrasyon Sureci',
    steps: [
      { title: 'Sistem Analizi', description: 'Mevcut CRM ve pazarlama araclarinizi inceliyoruz.' },
      { title: 'Entegrasyon Tasarimi', description: 'Veri akis senaryolarini ve eslemeleri belirliyoruz.' },
      { title: 'Uygulama', description: 'Entegrasyonu kuruyoruz ve test ediyoruz.' }
    ],
    useCaseHeadline: 'Basarili Entegrasyon',
    useCaseDescription: 'Bir uretim firmasinin CRM ve pazarlama otomasyonu entegrasyonu sonrasi lead kayip orani yuzde 40 azaldi.',
    whyUsHeadline: 'Uzmanlik Alanlarimiz',
    whyUsBullets: [
      'Tum buyuk CRM sistemleriyle entegrasyon deneyimi.',
      'Ozel API gelistirme ve veri esleme.',
      'Surekli izleme ve bakim destegi.'
    ],
    ctaHeadline: 'Sistemlerinizi Baglayin',
    ctaDescription: 'Veri kopuklugune son verin. Entegrasyon analizi icin hemen iletisime gecin.',
    footerTrustNote: 'CRM entegrasyonunda uzman teknik ekip.',
    parentHub: '/marketing-otomasyonu',
  },

  // === PAGE 8: /marketing-otomasyonu/lead-nurturing ===
  {
    slug: '/marketing-otomasyonu/lead-nurturing',
    title: 'Lead Nurturing Otomasyonu',
    metaDescription: 'Leadlerinizi otomatik icerik dizileriyle satisa hazir hale getirin. B2B lead nurturing cozumu. Ucretsiz strateji gorusmesi.',
    h1MainKeyword: 'Lead Nurturing Otomasyonu',
    heroSubheadlineBenefit: 'Soguk leadleri sicak firsatlara donusturn.',
    heroOneLinerDescription: 'Otomatik icerik dizileri ve davranissal tetikleyicilerle leadlerinizi besliyoruz.',
    primaryCtaText: 'Strateji Gorusmesi Planlayin',
    problemHeadline: 'Lead Beslemede Yasanan Aksakliklar',
    problemBullets: [
      'Leadler yeterince isitilmadan satisa gonderiliyor.',
      'Icerik gonderimleri manuel ve tutarsiz.',
      'Hangi leadlerin satisa hazir oldugu belirsiz.'
    ],
    solutionHeadline: 'Otomatik Nurturing Sistemi',
    solutionParagraphs: [
      'Leadler kayit oldugu andan itibaren otomatik icerik dizilerine alinir.',
      'Davranislarina gore skorlanir ve satisa hazir hale gelince bildirim gonderilir.',
      'Sonuc: daha nitelikli firsatlar ve daha yuksek kapanis oranlari.'
    ],
    howItWorksHeadline: 'Sistem Nasil Isliyor?',
    steps: [
      { title: 'Dizi Tasarimi', description: 'Lead profillerine gore icerik dizileri olusturuyoruz.' },
      { title: 'Otomatik Besleme', description: 'Leadler davranislarina gore icerikleri otomatik aliyor.' },
      { title: 'Satis Aktarimi', description: 'Hazir leadler otomatik olarak satis ekibine iletiliyor.' }
    ],
    useCaseHeadline: 'Uygulama Ornegi',
    useCaseDescription: 'Bir danismanlik firmasinin lead nurturing sistemi, satisa aktarilan leadlerin kapanis oranini yuzde 35 artirdi.',
    whyUsHeadline: 'Sunduklarimiz',
    whyUsBullets: [
      'Sektore ozel icerik dizi tasarimi.',
      'Davranissal skorlama ve otomatik bildirimler.',
      'Satis ekibiyle sorunsuz entegrasyon.'
    ],
    ctaHeadline: 'Leadlerinizi Isitmeye Baslayin',
    ctaDescription: 'Satisa hazir lead sayinizi artirin. Strateji gorusmesi icin hemen iletisime gecin.',
    footerTrustNote: 'Uzun satis donguleri icin tasarlanmis nurturing cozumleri.',
    parentHub: '/marketing-otomasyonu',
  },

  // === PAGE 9: /marketing-otomasyonu/musteri-segmentasyonu ===
  {
    slug: '/marketing-otomasyonu/musteri-segmentasyonu',
    title: 'Yapay Zeka ile Musteri Segmentasyonu',
    metaDescription: 'Musterilerinizi yapay zeka ile segmente edin. Hedefli kampanyalar, kisisellestirmis iletisim. Ucretsiz analiz.',
    h1MainKeyword: 'Musteri Segmentasyonu Yapay Zeka',
    heroSubheadlineBenefit: 'Her musteri grubuna ozel iletisim stratejisi olusturun.',
    heroOneLinerDescription: 'Yapay zeka ile davranissal ve demografik segmentasyon yaparak kampanya etkinligini artirin.',
    primaryCtaText: 'Segmentasyon Analizi Isteyin',
    problemHeadline: 'Tek Tip Iletisimin Sinirlari',
    problemBullets: [
      'Tum musterilere ayni mesaj gonderiliyor, etki dusuk.',
      'Segmentasyon manuel ve zaman alici.',
      'Hangi segmentlerin degerli oldugu belirsiz.'
    ],
    solutionHeadline: 'Akilli Segmentasyon',
    solutionParagraphs: [
      'Yapay zeka, musteri verilerinizi analiz ederek anlamli segmentler olusturur.',
      'Her segmente ozel kampanyalar ve mesajlar tasarlanir.',
      'Sonuc: daha yuksek etkilesim ve daha iyi donusum oranlari.'
    ],
    howItWorksHeadline: 'Segmentasyon Sureci',
    steps: [
      { title: 'Veri Analizi', description: 'Musteri verilerinizi toplayip analiz ediyoruz.' },
      { title: 'Segment Olusturma', description: 'Yapay zeka ile anlamli segmentler tanimliyoruz.' },
      { title: 'Kampanya Tasarimi', description: 'Her segmente ozel kampanyalar hazirliyoruz.' }
    ],
    useCaseHeadline: 'Basari Ornegi',
    useCaseDescription: 'Bir fintech firmasi, yapay zeka destekli segmentasyon ile e-posta kampanya donusumunu yuzde 28 artirdi.',
    whyUsHeadline: 'Nicin Biz?',
    whyUsBullets: [
      'Gelismis yapay zeka modelleri ile davranissal segmentasyon.',
      'CRM ve pazarlama araclariyla entegre calisma.',
      'Surekli optimizasyon ve segment guncelleme.'
    ],
    ctaHeadline: 'Musterilerinizi Daha Iyi Taniyin',
    ctaDescription: 'Hedefli pazarlama icin segmentasyon analizinizi alin. Hemen iletisime gecin.',
    footerTrustNote: 'Veri odakli pazarlama icin yapay zeka destekli segmentasyon.',
    parentHub: '/marketing-otomasyonu',
  },

  // === PAGE 10: /marketing-otomasyonu/whatsapp-otomasyonu ===
  {
    slug: '/marketing-otomasyonu/whatsapp-otomasyonu',
    title: 'WhatsApp Pazarlama Otomasyonu',
    metaDescription: 'WhatsApp uzerinden otomatik lead takibi ve musteri iletisimi. Yapay zeka destekli chatbot cozumu. Hemen basvurun.',
    h1MainKeyword: 'WhatsApp Pazarlama Otomasyonu',
    heroSubheadlineBenefit: 'Musterilerinizle WhatsApp uzerinden otomatik iletisim kurun.',
    heroOneLinerDescription: 'WhatsApp Business API ile lead takibi, bildirimler ve musteri destegini otomatiklestirin.',
    primaryCtaText: 'Ucretsiz Demo Alin',
    problemHeadline: 'WhatsApp Iletisimindeki Zorluklar',
    problemBullets: [
      'Gelen mesajlar tek tek yanitlaniyor, zaman alici.',
      'Lead takibi ve kayit sistematik degil.',
      'Mesaj gecmisi CRM ile entegre degil.'
    ],
    solutionHeadline: 'Otomatik WhatsApp Yonetimi',
    solutionParagraphs: [
      'WhatsApp Business API ile gelen mesajlar otomatik yanitlanir.',
      'Leadler otomatik kaydedilir ve CRM sistemine aktarilir.',
      'Sonuc: hizli yanit sureleri ve sistematik lead yonetimi.'
    ],
    howItWorksHeadline: 'Sistem Isleyisi',
    steps: [
      { title: 'API Entegrasyonu', description: 'WhatsApp Business API baglantisini kuruyoruz.' },
      { title: 'Chatbot Kurulumu', description: 'Sikca sorulan sorular icin otomatik yanitlar olusturuyoruz.' },
      { title: 'CRM Senkronizasyonu', description: 'Mesaj ve lead verilerini CRM ile senkronize ediyoruz.' }
    ],
    useCaseHeadline: 'Uygulama Senaryosu',
    useCaseDescription: 'Bir emlak firmasinin WhatsApp otomasynonu ile ilk yanit suresi 2 saatten 2 dakikaya dustu. Lead kayit orani yuzde 45 artti.',
    whyUsHeadline: 'Farkimiz',
    whyUsBullets: [
      'Resmi WhatsApp Business API partnerligi.',
      'Yapay zeka destekli akilli chatbot.',
      'CRM ve pazarlama araclariyla entegrasyon.'
    ],
    ctaHeadline: 'WhatsApp Iletisiminizi Otomatiklestirin',
    ctaDescription: 'Musterilerinize aninda yanit verin. Ucretsiz demo icin simdi basvurun.',
    footerTrustNote: 'WhatsApp Business API ile kurumsal iletisim cozumleri.',
    parentHub: '/marketing-otomasyonu',
  },

  // === PAGE 11: /marketing-otomasyonu/chatbot-otomasyonu ===
  {
    slug: '/marketing-otomasyonu/chatbot-otomasyonu',
    title: 'Yapay Zeka Chatbot Cozumleri',
    metaDescription: 'Web siteniz icin yapay zeka destekli chatbot. 7/24 musteri destegi ve lead toplama. Simdi demo alin.',
    h1MainKeyword: 'Yapay Zeka Chatbot',
    heroSubheadlineBenefit: 'Ziyaretcilerinizi 7/24 karsilayan akilli asistan.',
    heroOneLinerDescription: 'Yapay zeka destekli chatbot ile musteri sorularini yanitlayin ve lead toplayin.',
    primaryCtaText: 'Chatbot Demo Talep Edin',
    problemHeadline: 'Canli Destek Ekiplerinin Karsilastigi Sorunlar',
    problemBullets: [
      'Mesai saatleri disinda gelen sorular cevapsiz kaliyor.',
      'Tekrarlayan sorular ekip zamanini tuketiyor.',
      'Web sitesi ziyaretcileri lead olarak yakalanamayan.'
    ],
    solutionHeadline: 'Akilli Chatbot Sistemi',
    solutionParagraphs: [
      'Yapay zeka chatbot, sikca sorulan sorulari aninda yanitlar.',
      'Ziyaretcilerden iletisim bilgilerini toplayarak lead olusturur.',
      'Sonuc: 7/24 hizmet, dusuk operasyonel yuk ve artan lead sayisi.'
    ],
    howItWorksHeadline: 'Chatbot Nasil Calisir?',
    steps: [
      { title: 'Egitim', description: 'Chatbotu sektorunuze ve SSS listenize gore egitiyoruz.' },
      { title: 'Entegrasyon', description: 'Web sitenize veya uygulamaniza ekliyoruz.' },
      { title: 'Izleme', description: 'Konusmalarl analiz edip chatbotu surekli iyilestiriyoruz.' }
    ],
    useCaseHeadline: 'Gercek Sonuc',
    useCaseDescription: 'Bir yazilim firmasinin yapay zeka chatbotu ayda 800 konusma yonetti ve 120 nitelikli lead uretti.',
    whyUsHeadline: 'Chatbot Avantajlarimiz',
    whyUsBullets: [
      'Dogal dil isleme ile insan benzeri konusmalar.',
      'CRM ve destek araclariyla entegrasyon.',
      'Surekli ogrenme ve iyilestirme.'
    ],
    ctaHeadline: '7/24 Destek Saglayin',
    ctaDescription: 'Ziyaretcilerinizi kaybetmeyin. Chatbot demo icin hemen basvurun.',
    footerTrustNote: 'B2B sirketler icin yapay zeka chatbot cozumleri.',
    parentHub: '/marketing-otomasyonu',
  },

  // === PAGE 12: /marketing-otomasyonu/musteri-iletisim-otomasyonu ===
  {
    slug: '/marketing-otomasyonu/musteri-iletisim-otomasyonu',
    title: 'Musteri Iletisim Otomasyonu',
    metaDescription: 'Musteri iletisiminizi tum kanallarda otomatiklestirin. E-posta, SMS, WhatsApp tek platformda. Simdi basvurun.',
    h1MainKeyword: 'Musteri Iletisim Otomasyonu',
    heroSubheadlineBenefit: 'Tum iletisim kanallarinizi tek platformda yonetin.',
    heroOneLinerDescription: 'E-posta, SMS ve anlık mesajlasma platformlarini entegre ederek iletisimi otomatiklestirin.',
    primaryCtaText: 'Ucretsiz Analiz Isteyin',
    problemHeadline: 'Cok Kanalli Iletisimin Zorluklari',
    problemBullets: [
      'Farkli kanallar farkli araclarla yonetiliyor.',
      'Musteri gecmisi parcalanmis, butunsel gorunum yok.',
      'Iletisim zamanlama ve tutarliligi saglanamaniyor.'
    ],
    solutionHeadline: 'Entegre Iletisim Platformu',
    solutionParagraphs: [
      'Tum iletisim kanallari tek bir platformda birlesir.',
      'Musteri etkilesimleri tek bir gorunumde takip edilir.',
      'Sonuc: tutarli marka deneyimi ve verimli iletisim.'
    ],
    howItWorksHeadline: 'Platform Isleyisi',
    steps: [
      { title: 'Kanal Entegrasyonu', description: 'E-posta, SMS ve mesajlasma uygulamalarini bagliyoruz.' },
      { title: 'Is Akisi Tasarimi', description: 'Otomatik iletisim senaryolari olusturuyoruz.' },
      { title: 'Tek Gorunum', description: 'Tum musteri etkilesimlerini tek yerden izliyorsunuz.' }
    ],
    useCaseHeadline: 'Basari Hikayesi',
    useCaseDescription: 'Bir hizmet firmasinin iletisim otomasynonu sonrasi musteri memnuniyet skoru yuzde 22 yukseldi.',
    whyUsHeadline: 'Platform Avantajlari',
    whyUsBullets: [
      'Tum buyuk iletisim kanallariyla entegrasyon.',
      'Musteri 360 gorunumu ve etkilesim gecmisi.',
      'Otomatik iletisim kurallari ve tetikleyiciler.'
    ],
    ctaHeadline: 'Iletisiminizi Birlestirin',
    ctaDescription: 'Cok kanalli iletisimi basitlestirin. Ucretsiz analiz icin hemen iletisime gecin.',
    footerTrustNote: 'Omnichannel iletisim otomasyonu cozumleri.',
    parentHub: '/marketing-otomasyonu',
  },

  // === PAGE 13: /marketing-otomasyonu/sosyal-medya-otomasyonu ===
  {
    slug: '/marketing-otomasyonu/sosyal-medya-otomasyonu',
    title: 'Sosyal Medya Otomasyonu',
    metaDescription: 'Sosyal medya iceriklerinizi otomatik planlayin ve yayinlayin. Performans takibi ve raporlama. Hemen basvurun.',
    h1MainKeyword: 'Sosyal Medya Otomasyonu',
    heroSubheadlineBenefit: 'Sosyal medya yonetiminizi verimli hale getirin.',
    heroOneLinerDescription: 'Icerik planlama, zamanlama ve performans analizini tek platformda yonetin.',
    primaryCtaText: 'Demo Talep Edin',
    problemHeadline: 'Sosyal Medya Yonetimindeki Zorluklar',
    problemBullets: [
      'Icerikler her platform icin ayri ayri paylasilmak zorunda.',
      'En iyi paylasim zamanlari tahmin ediliyor.',
      'Performans olcumu ve raporlama dagnik.'
    ],
    solutionHeadline: 'Merkezi Sosyal Medya Yonetimi',
    solutionParagraphs: [
      'Tum sosyal medya hesaplarinizi tek bir platformda yonetin.',
      'Icerikleri onceden planlayin ve otomatik yayinlayin.',
      'Sonuc: zamandan tasarruf ve tutarli marka varligi.'
    ],
    howItWorksHeadline: 'Platform Ozellikleri',
    steps: [
      { title: 'Hesap Baglama', description: 'Sosyal medya hesaplarinizi platforma bagliyorsunuz.' },
      { title: 'Icerik Planlama', description: 'Iceriklerinizi takvimde zamanliyorsunuz.' },
      { title: 'Analiz', description: 'Performans raporlarini tek gorunumde inceliyorsunuz.' }
    ],
    useCaseHeadline: 'Uygulama Ornegi',
    useCaseDescription: 'Bir B2B marka, sosyal medya otomasyonu ile haftalik icerik hazirlama suresini 8 saatten 2 saate indirdi.',
    whyUsHeadline: 'Tercih Nedenlerimiz',
    whyUsBullets: [
      'Tum buyuk sosyal medya platformlariyla entegrasyon.',
      'Yapay zeka destekli en iyi zaman onerileri.',
      'Detayli performans analitiği ve raporlama.'
    ],
    ctaHeadline: 'Sosyal Medyanizi Otomatiklestirin',
    ctaDescription: 'Icerik yonetiminizi kolaylastirin. Demo icin hemen basvurun.',
    footerTrustNote: 'B2B sosyal medya yonetimi icin tasarlanmis otomasyon araci.',
    parentHub: '/marketing-otomasyonu',
  },

  // === PAGE 14: /marketing-otomasyonu/icerik-uretimi ===
  {
    slug: '/marketing-otomasyonu/icerik-uretimi',
    title: 'Yapay Zeka ile Icerik Uretimi',
    metaDescription: 'Pazarlama iceriklerinizi yapay zeka ile olusturun. Blog, sosyal medya, e-posta metinleri. Simdi deneyin.',
    h1MainKeyword: 'Yapay Zeka Icerik Uretimi',
    heroSubheadlineBenefit: 'Pazarlama iceriklerinizi hizla ve kaliteli urettin.',
    heroOneLinerDescription: 'Yapay zeka destekli icerik uretimi ile blog yazilari, sosyal medya paylasimları ve e-posta metinleri olusturun.',
    primaryCtaText: 'Ucretsiz Deneme Basvurusu',
    problemHeadline: 'Icerik Uretimindeki Darbogazlar',
    problemBullets: [
      'Kaliteli icerik uretmek zaman ve kaynak gerektiriyor.',
      'Icerik takvimini doldurmak zorlasıyor.',
      'Her kanal icin farkli formatta icerik gerekiyor.'
    ],
    solutionHeadline: 'Yapay Zeka Destekli Icerik Uretimi',
    solutionParagraphs: [
      'Yapay zeka, marka sesinize uygun icerikler olusturur.',
      'Blog, sosyal medya ve e-posta formatlarinda icerik uretilebilir.',
      'Sonuc: daha fazla icerik, daha az zaman.'
    ],
    howItWorksHeadline: 'Icerik Uretim Sureci',
    steps: [
      { title: 'Brief Girisi', description: 'Konu ve hedef kitlenizi belirliyorsunuz.' },
      { title: 'Icerik Olusturma', description: 'Yapay zeka taslak icerikleri uretiyor.' },
      { title: 'Duzenleme', description: 'Icerikleri inceleyip yayina hazir hale getiriyorsunuz.' }
    ],
    useCaseHeadline: 'Gercek Uygulama',
    useCaseDescription: 'Bir pazarlama ajansi, yapay zeka ile aylik blog icerik uretim suresini yuzde 60 kisaltti.',
    whyUsHeadline: 'Icerik Uretim Avantajlarimiz',
    whyUsBullets: [
      'Marka sesine uyarlanabilen yapay zeka modelleri.',
      'Coklu format destegi: blog, sosyal medya, e-posta.',
      'SEO optimizasyonu onerileri.'
    ],
    ctaHeadline: 'Icerik Uretimini Hizlandirin',
    ctaDescription: 'Yapay zeka ile icerik uretmeye baslayin. Ucretsiz deneme icin basvurun.',
    footerTrustNote: 'B2B pazarlama icin yapay zeka destekli icerik cozumleri.',
    parentHub: '/marketing-otomasyonu',
  },

  // === PAGE 15: /marketing-otomasyonu/reklam-otomasyonu ===
  {
    slug: '/marketing-otomasyonu/reklam-otomasyonu',
    title: 'Dijital Reklam Otomasyonu',
    metaDescription: 'Dijital reklam kampanyalarinizi yapay zeka ile optimize edin. Daha dusuk maliyet, daha yuksek donusum. Hemen basvurun.',
    h1MainKeyword: 'Dijital Reklam Otomasyonu',
    heroSubheadlineBenefit: 'Reklam harcamalarinizdan maksimum verim alin.',
    heroOneLinerDescription: 'Yapay zeka destekli reklam yonetimi ile butce optimizasyonu ve hedefleme iyilestirmesi.',
    primaryCtaText: 'Reklam Analizi Isteyin',
    problemHeadline: 'Reklam Yonetimindeki Zorluklar',
    problemBullets: [
      'Reklam butcesi verimli kullanilmiyor.',
      'A/B testler ve optimizasyon manuel yurutuluyor.',
      'Farkli platformlardaki kampanyalar ayri yonetiliyor.'
    ],
    solutionHeadline: 'Akilli Reklam Yonetimi',
    solutionParagraphs: [
      'Yapay zeka, reklam performansini surekli izler ve optimize eder.',
      'Butce en iyi performans gosteren kampanyalara otomatik yonlendirilir.',
      'Sonuc: dusuk edinim maliyeti ve yuksek donusum orani.'
    ],
    howItWorksHeadline: 'Otomasyon Sureci',
    steps: [
      { title: 'Hesap Baglama', description: 'Reklam platformlarinizi sisteme bagliyoruz.' },
      { title: 'Kural Tanimlama', description: 'Optimizasyon kurallarini ve hedefleri belirliyoruz.' },
      { title: 'Otomatik Optimizasyon', description: 'Yapay zeka kampanyalari surekli optimize ediyor.' }
    ],
    useCaseHeadline: 'Basari Ornegi',
    useCaseDescription: 'Bir e-ticaret B2B firmasi, reklam otomasyonu ile lead basi maliyeti yuzde 35 dusurdu.',
    whyUsHeadline: 'Reklam Otomasyonu Avantajlari',
    whyUsBullets: [
      'Google, Meta ve LinkedIn reklam platformlari destegi.',
      'Gercek zamanli butce optimizasyonu.',
      'Detayli performans raporlamasi.'
    ],
    ctaHeadline: 'Reklam Performansinizi Artirin',
    ctaDescription: 'Reklam harcamalarinizi akillica yonetin. Ucretsiz analiz icin hemen iletisime gecin.',
    footerTrustNote: 'Performance marketing icin yapay zeka destekli otomasyon.',
    parentHub: '/marketing-otomasyonu',
  },

  // === PAGE 16: /satis-otomasyonu (HUB_PAGE - Informational) ===
  {
    slug: '/satis-otomasyonu',
    title: 'Satış Otomasyonu Rehberi: CRM, Teklif ve Follow-up',
    metaDescription: 'Satış otomasyonu nedir? CRM, teklif oluşturma ve takip süreçleri — tüm satış otomasyonu konuları tek rehberde.',
    h1MainKeyword: 'Satış Otomasyonu: Kapsamlı Rehber',
    heroSubheadlineBenefit: 'Satış otomasyonunun tüm yönlerini keşfedin.',
    heroOneLinerDescription: 'CRM yönetimi, teklif oluşturma ve follow-up süreçlerini kapsayan kapsamlı satış otomasyonu rehberi.',
    primaryCtaText: 'Ücretsiz Satış Analizi',
    problemHeadline: 'Satış Ekiplerinin Yaşadığı Zorluklar',
    problemBullets: [
      'CRM güncelleme ve veri girişi zaman alıyor.',
      'Lead takipleri gecikiyor veya unutuluyor.',
      'Teklif hazırlama süreçleri manuel ve yavaş.'
    ],
    solutionHeadline: 'Satış Otomasyonu Nedir?',
    solutionParagraphs: [
      'Satış otomasyonu, CRM güncellemelerini ve hatırlatmaları otomatik hale getiren teknolojilerdir.',
      'Bu rehberde CRM, teklif ve follow-up otomasyonu konularını detaylı inceleyebilirsiniz.',
      'Profesyonel çözüm arıyorsanız, satış otomasyonu çözümlerimizi inceleyin.'
    ],
    howItWorksHeadline: 'Satış Otomasyonu Nasıl Çalışır?',
    steps: [
      { title: 'Süreç Analizi', description: 'Mevcut satış süreçlerinizi ve CRM kullanımınızı inceliyoruz.' },
      { title: 'Otomasyon Tasarımı', description: 'Otomasyona uygun iş akışları hazırlıyoruz.' },
      { title: 'Uygulama', description: 'Sistemi kuruyoruz ve satış ekibinizi eğitiyoruz.' }
    ],
    useCaseHeadline: 'Örnek Senaryo',
    useCaseDescription: 'Bir B2B hizmet firmasının satış ekibi, otomasyon sonrası haftalık 12 saat idari işten kurtuldu ve satış görüşme sayısını yüzde 30 artırdı.',
    whyUsHeadline: 'Rehber İçindekiler',
    whyUsBullets: [
      'CRM otomasyonu ve veri yönetimi',
      'Teklif oluşturma ve fiyatlandırma',
      'Follow-up ve lead takip sistemleri'
    ],
    ctaHeadline: 'Profesyonel Çözüm mü Arıyorsunuz?',
    ctaDescription: 'Satış süreçlerinizi otomatikleştirmek için profesyonel destek alın.',
    footerTrustNote: 'B2B satış ekipleri için otomasyon çözümleri.',
    relatedPages: salesSubPages,
    // Hub-to-Money internal link
    moneyPageLink: '/cozumler/satis-otomasyonu',
    moneyPageAnchor: 'Satış Otomasyonu Çözümlerimiz →',
  },

  // === PAGE 17: /satis-otomasyonu/crm-satis ===
  {
    slug: '/satis-otomasyonu/crm-satis',
    title: 'CRM Satis Otomasyonu',
    metaDescription: 'CRM sisteminizi satis odakli otomatiklestirin. Veri girisi, hatirlatmalar ve raporlama otomasyonu. Simdi basvurun.',
    h1MainKeyword: 'CRM Satis Otomasyonu',
    heroSubheadlineBenefit: 'CRM sisteminizi satisin hizmetine sunun.',
    heroOneLinerDescription: 'Otomatik veri girisi, akilli hatirlatmalar ve gercek zamanli raporlama ile CRM verimliligi artirin.',
    primaryCtaText: 'CRM Analizi Isteyin',
    problemHeadline: 'CRM Kullanimindaki Aksakliklar',
    problemBullets: [
      'Satis ekibi CRM guncellemelerini atlatiyor.',
      'Veri kalitesi dusuk, raporlar guvenilir degil.',
      'CRM sistemini etkin kullanmak egitim ve zaman gerektiriyor.'
    ],
    solutionHeadline: 'Otomatik CRM Yonetimi',
    solutionParagraphs: [
      'CRM verileri otomatik olarak guncellenir, manuel giris minimuma iner.',
      'Akilli hatirlatmalar satis ekibini dogru zamanda bilgilendirir.',
      'Sonuc: temiz veri, guvenilir raporlar ve verimli satis sureci.'
    ],
    howItWorksHeadline: 'Sistem Isleyisi',
    steps: [
      { title: 'CRM Entegrasyonu', description: 'Mevcut CRM sisteminizi platforma bagliyoruz.' },
      { title: 'Otomasyon Kurulumu', description: 'Veri akislari ve hatirlatma kurallarini tanimliyoruz.' },
      { title: 'Izleme', description: 'CRM sagligini surekli izliyor ve optimize ediyoruz.' }
    ],
    useCaseHeadline: 'Basari Hikayesi',
    useCaseDescription: 'Bir uretim firmasinin CRM otomasyonu sonrasi veri dogruluk orani yuzde 85ten yuzde 97ye yukseldi.',
    whyUsHeadline: 'CRM Uzmanligi',
    whyUsBullets: [
      'Salesforce, HubSpot, Pipedrive ve diger CRM sistemleriyle deneyim.',
      'Satis odakli otomasyon tasarimi.',
      'Surekli izleme ve iyilestirme destegi.'
    ],
    ctaHeadline: 'CRM Verimliliginizi Artirin',
    ctaDescription: 'CRM sisteminizi satisin gercek destekleyicisi yapin. Ucretsiz analiz icin hemen iletisime gecin.',
    footerTrustNote: 'CRM odakli satis otomasyonu cozumleri.',
    parentHub: '/satis-otomasyonu',
  },

  // === PAGE 18: /satis-otomasyonu/teklif-otomasyonu ===
  {
    slug: '/satis-otomasyonu/teklif-otomasyonu',
    title: 'Teklif Olusturma Otomasyonu',
    metaDescription: 'Satis tekliflerinizi dakikalar icinde hazirlayin. Sablon bazli, hizli ve tutarli teklif olusturma. Simdi deneyin.',
    h1MainKeyword: 'Teklif Olusturma Otomasyonu',
    heroSubheadlineBenefit: 'Profesyonel teklifler dakikalar icerisinde hazir.',
    heroOneLinerDescription: 'Sablon bazli teklif olusturma ve otomatik fiyatlandirma ile satis surecini hizlandirin.',
    primaryCtaText: 'Demo Talep Edin',
    problemHeadline: 'Teklif Hazirlama Surecindeki Aksakliklar',
    problemBullets: [
      'Her teklif bastan hazirlanmak zorunda, zaman aliyor.',
      'Fiyatlandirma hatalari ve tutarsizliklar yasinaiyor.',
      'Teklif gonderimi sonrasi takip yapilmiyor.'
    ],
    solutionHeadline: 'Otomatik Teklif Sistemi',
    solutionParagraphs: [
      'Onaylanmis sablonlarla dakikalar icerisinde profesyonel teklifler olusturun.',
      'Fiyatlandirma kurallari otomatik uygulanir, hatalar minimize edilir.',
      'Sonuc: hizli teklif sureci, tutarli fiyatlandirma ve daha yuksek kapanis orani.'
    ],
    howItWorksHeadline: 'Teklif Olusturma Sureci',
    steps: [
      { title: 'Sablon Secimi', description: 'Ihtiyaca uygun teklif sablonunu seciyorsunuz.' },
      { title: 'Veri Girisi', description: 'Musteri ve urun bilgilerini giriyorsunuz.' },
      { title: 'Gonderim', description: 'Teklifi tek tikla gonderiyorsunuz ve takibe aliyorsunuz.' }
    ],
    useCaseHeadline: 'Uygulama Ornegi',
    useCaseDescription: 'Bir yazilim sirketi, teklif otomasyonu ile teklif hazirlama suresini 2 saatten 15 dakikaya indirdi.',
    whyUsHeadline: 'Teklif Sistemi Avantajlari',
    whyUsBullets: [
      'Markaniza ozel profesyonel sablon tasarimi.',
      'Dinamik fiyatlandirma ve iskonto kurallari.',
      'Teklif takibi ve hatirlatma otomasyonu.'
    ],
    ctaHeadline: 'Tekliflerinizi Hizlandirin',
    ctaDescription: 'Profesyonel teklifleri dakikalar icerisinde hazirlayin. Demo icin hemen basvurun.',
    footerTrustNote: 'B2B satis ekipleri icin teklif yonetim sistemi.',
    parentHub: '/satis-otomasyonu',
  },

  // === PAGE 19: /satis-otomasyonu/follow-up-otomasyonu ===
  {
    slug: '/satis-otomasyonu/follow-up-otomasyonu',
    title: 'Satis Follow-up Otomasyonu',
    metaDescription: 'Satis takiplerini otomatik hatirlatmalar ve e-posta dizileriyle sistematik hale getirin. Firsatlari kaybetmeyin.',
    h1MainKeyword: 'Satis Follow-up Otomasyonu',
    heroSubheadlineBenefit: 'Hic bir satis firsatini takipsiz birakmayin.',
    heroOneLinerDescription: 'Otomatik hatirlatmalar ve follow-up e-posta dizileriyle satis takibini sistematiklestirin.',
    primaryCtaText: 'Ucretsiz Analiz Alin',
    problemHeadline: 'Satis Takibindeki Aksakliklar',
    problemBullets: [
      'Leadler zamaninda takip edilmiyor, firsatlar kayip gidiyor.',
      'Takip e-postalari manuel yaziliyor ve tutarsiz.',
      'Hangi leadlerin oncelikli oldugu belirsiz.'
    ],
    solutionHeadline: 'Otomatik Takip Sistemi',
    solutionParagraphs: [
      'Sistem, belirli asamalardaki leadler icin otomatik hatirlatmalar olusturur.',
      'Follow-up e-posta dizileri otomatik gonderilir ve yanitlar izlenir.',
      'Sonuc: sistematik takip, daha yuksek yanit orani ve artan kapanis.'
    ],
    howItWorksHeadline: 'Takip Sureci',
    steps: [
      { title: 'Kural Tanimlama', description: 'Takip tetikleyicilerini ve zamanlamasini belirliyoruz.' },
      { title: 'Dizi Kurulumu', description: 'Follow-up e-posta dizilerini olusturuyoruz.' },
      { title: 'Otomatik Takip', description: 'Sistem leadleri otomatik izliyor ve aksiyonlari uyguluyor.' }
    ],
    useCaseHeadline: 'Gercek Sonuc',
    useCaseDescription: 'Bir danismanlik firmasinin follow-up otomasyonu sonrasi yanitlanmamis lead orani yuzde 45ten yuzde 12ye dustu.',
    whyUsHeadline: 'Follow-up Sistemi Avantajlari',
    whyUsBullets: [
      'CRM entegrasyonlu otomatik hatirlatmalar.',
      'Kisisellestirmis follow-up e-posta dizileri.',
      'Yanit izleme ve onceliklendirme.'
    ],
    ctaHeadline: 'Takiplerinizi Sistematiklestirin',
    ctaDescription: 'Satis firsatlarini kaybetmeyin. Ucretsiz analiz icin hemen iletisime gecin.',
    footerTrustNote: 'Satis ekipleri icin follow-up otomasyon cozumleri.',
    parentHub: '/satis-otomasyonu',
  },

  // === PAGE 20: /yapay-zeka-otomasyonu ===
  {
    slug: '/yapay-zeka-otomasyonu',
    title: 'Yapay Zeka ile Is Sureci Otomasyonu',
    metaDescription: 'Isletmenizi yapay zeka ile donusturun. Satis, pazarlama ve operasyon otomasyonu. Ucretsiz danismanlik alin.',
    h1MainKeyword: 'Yapay Zeka Otomasyonu',
    heroSubheadlineBenefit: 'Is sureclerinizi yapay zeka ile donusturun.',
    heroOneLinerDescription: 'Satis, pazarlama ve operasyon sureclerinizi yapay zeka destekli otomasyonlarla gucendirin.',
    primaryCtaText: 'Ucretsiz Danismanlik Alin',
    problemHeadline: 'Isletmelerin Karsilastigi Ortak Zorluklar',
    problemBullets: [
      'Tekrarlayan gorevler ekip kapasitesini tuketiyor.',
      'Is surecleri daginik ve olceklenmesi zor.',
      'Rekabet avantaji icin dijital donusum gereksiz.'
    ],
    solutionHeadline: 'Yapay Zeka Destekli Donusum',
    solutionParagraphs: [
      'Yapay zeka otomasyonu, tekrarlayan gorevleri devralarak ekibinizin stratejik islere odaklanmasini saglar.',
      'Is surecleri sistematik hale gelir, olceklenmesi ve yonetilmesi kolaylasir.',
      'Sonuc: verimlilik artisi, maliyet dususu ve rekabet avantaji.'
    ],
    howItWorksHeadline: 'Donusum Sureci',
    steps: [
      { title: 'Kesfif', description: 'Is sureclerinizi ve hedeflerinizi birlikte analiz ediyoruz.' },
      { title: 'Strateji', description: 'Oncelikli otomasyon alanlarini ve yol haritasini belirliyoruz.' },
      { title: 'Uygulama', description: 'Otomasyonlari kuruyoruz, ekibinizi egitiyoruz ve sonuclari izliyoruz.' }
    ],
    useCaseHeadline: 'Donusum Ornegi',
    useCaseDescription: 'Bir orta olcekli B2B firma, yapay zeka otomasyonu ile yillik 1200 saat manuel is yukunden kurtuldu ve gelir artisini yuzde 18 hizlandirdi.',
    whyUsHeadline: 'Neden Bizimle Calisin?',
    whyUsBullets: [
      'B2B is sureclerinde uzman deneyimli ekip.',
      'Kanıtlanmis otomasyon metodolojisi.',
      'Olculebilir sonuclar ve surekli destek.'
    ],
    ctaHeadline: 'Is Sureclerinizi Donusturun',
    ctaDescription: 'Yapay zeka ile isletmenizi geleceğe tasıyın. Ucretsiz danismanlik gorusmesi icin hemen iletisime gecin.',
    footerTrustNote: 'Turkiyenin lider B2B sirketlerine yapay zeka otomasyonu sagliyoruz.',
    relatedPages: ['/marketing-otomasyonu', '/satis-otomasyonu'],
  }
];

// Helper function to get page by slug
export const getPageBySlug = (slug: string): SEOLandingPageContent | undefined => {
  return seoLandingPagesContent.find(page => page.slug === slug);
};

// Get all marketing pages (under /marketing-otomasyonu)
export const getMarketingPages = (): SEOLandingPageContent[] => {
  return seoLandingPagesContent.filter(page => page.slug.startsWith('/marketing-otomasyonu'));
};

// Get all sales pages (under /satis-otomasyonu)
export const getSalesPages = (): SEOLandingPageContent[] => {
  return seoLandingPagesContent.filter(page => page.slug.startsWith('/satis-otomasyonu'));
};

// Get hub pages only (top-level)
export const getHubPages = (): SEOLandingPageContent[] => {
  return seoLandingPagesContent.filter(page => 
    page.slug === '/marketing-otomasyonu' || 
    page.slug === '/satis-otomasyonu' || 
    page.slug === '/yapay-zeka-otomasyonu'
  );
};
