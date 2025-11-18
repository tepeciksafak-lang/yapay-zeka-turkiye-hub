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
  translations?: {
    de?: {
      etiket: string;
      baslik: string;
      ozet: string;
      metaTitle: string;
      metaDescription: string;
      kpis: Array<{ label: string; value: string }>;
      problem: string[];
      cozum: string;
      uygulamaAsamalari: string[];
      sonuclar: string[];
      alinti?: string;
    };
  };
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
    alinti: "Otomasyon sayesinde artık sadece gerçekten ilgilenen müşterilerle görüşüyoruz. Bu da satış başarımızı önemli ölçüde artırdı.",
    translations: {
      de: {
        etiket: "Vertriebsautomatisierung",
        baslik: "Car Studio AI – KI im Vertrieb für internationale Märkte",
        ozet: "Aufbau einer nachhaltigen Vertriebsinfrastruktur auf internationalen Märkten ohne Teamvergrößerung durch KI im Vertrieb.",
        metaTitle: "Car Studio AI Fallstudie – KI im Vertrieb | 3000+ personalisierte E-Mails",
        metaDescription: "Erfolgsgeschichte von Car Studio AI: KI im Vertrieb für internationale Expansion. 3000+ personalisierte E-Mails, 20+ Stunden Zeitersparnis monatlich durch Vertriebsautomatisierung.",
        kpis: [
          { label: "E-Mail-Versand", value: "3000+" },
          { label: "Zeitersparnis", value: "20+ Std./Monat" },
          { label: "Setup-Zeit", value: "1 Woche" }
        ],
        problem: [
          "Die richtigen Unternehmen und Entscheidungsträger finden",
          "Individuelle Nachrichten für jedes Unternehmen erstellen",
          "Ein regelmäßiges Follow-up-System aufbauen"
        ],
        cozum: "Das KI-gestützte E-Mail-System erstellte personalisierte Nachrichten basierend auf den Eigenschaften jedes Unternehmens mit KI im Vertrieb. Mit Informationen aus LinkedIn-Profilen und Unternehmenswebseiten wurden aufmerksamkeitsstarke und vertrauensbildende Inhalte erstellt.",
        uygulamaAsamalari: ["Automatischer E-Mail-Prozess mit KI im Vertrieb", "KI-gestützte Kaltakquise (Cold Calling)", "Personalisierte Nachrichtenübermittlung"],
        sonuclar: [
          "Über 3000 personalisierte E-Mails ohne manuelle Arbeit versendet dank KI im Vertrieb",
          "Hochwertige potenzielle Kunden durch Kaltakquise gewonnen",
          "Vertriebsteam spart monatlich über 20 Stunden durch KI im Vertrieb"
        ],
        alinti: "Dank der KI-Automatisierung im Vertrieb sprechen wir jetzt nur noch mit wirklich interessierten Kunden. Das hat unseren Vertriebserfolg deutlich gesteigert."
      }
    }
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
    alinti: "Artık sektör profesyonelleri bizi tanıyor ve bize güveniyor. Trafik artışı sayesinde kullanıcı sayımız hızla artıyor.",
    translations: {
      de: {
        etiket: "Marketingautomatisierung",
        baslik: "Acilsatis – KI im Marketing für Immobilien und Automotive",
        ozet: "Schnelles Wachstum und organische Traffic-Steigerung im Immobilien- und Automobilsektor durch KI im Marketing.",
        metaTitle: "Acilsatis Fallstudie – KI im Marketing | 5000+ Plattform-Anzeigen",
        metaDescription: "Acilsatis Erfolg mit KI im Marketing: 5000+ automatisierte Plattform-Anzeigen, Instagram DM & SMS-Automatisierung für schnelles Wachstum im Immobilien- und Automobilsektor.",
        kpis: [
          { label: "Plattform-Anzeigen", value: "5000+" },
          { label: "Zielsektoren", value: "2 Hauptsektoren" },
          { label: "Setup-Zeit", value: "Wenige Tage" }
        ],
        problem: [
          "Tausende von Immobilienmaklern und Autohändlern in kurzer Zeit erreichen",
          "Die Plattform potenziellen Nutzern persönlich und direkt vorstellen",
          "Organisches Wachstum ohne hohe Werbekosten realisieren",
          "Kontinuierlich hohen Web-Traffic generieren",
          "Schnelle, qualitativ hochwertige und kontinuierliche Content-Produktion in Social Media"
        ],
        cozum: "Potenzielle Nutzer wurden über Instagram-Accounts automatisch identifiziert. Mit KI im Marketing wurden für jeden Nutzer individuell zugeschnittene, ansprechende Nachrichten erstellt und sowohl per Instagram DM als auch SMS versendet. Zusätzlich wurde die digitale Sichtbarkeit und Attraktivität der Marke durch vollständig KI-generierte Werbevideos gesteigert.",
        uygulamaAsamalari: ["Datenerfassung (Scraping) mit KI im Marketing", "Automatischer Nachrichtenversand", "KI-Video-Produktion"],
        sonuclar: [
          "In kurzer Zeit persönliche Kommunikation mit Hunderten Immobilienmaklern und Autohändlern dank KI im Marketing",
          "Deutliche Steigerung des Website-Traffics und der Plattformbekanntheit",
          "Wöchentlicher Zeitaufwand für Marketing erheblich reduziert durch vollautomatisches System",
          "Social-Media-Content-Produktion ohne manuelle Eingriffe beschleunigt und Qualität verbessert"
        ],
        alinti: "Dank KI im Marketing kennen uns Branchenprofis jetzt und vertrauen uns. Mit steigendem Traffic wächst unsere Nutzerzahl rasant."
      }
    }
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
    alinti: "Siz de içerik üretimi veya sosyal medya stratejinizde benzer sorunlar yasiyor musunuz? Salevium için kurdugumuz bu otomatik sistemin sizin is modelinize nasil uygulanabilecegini birlikte kesfedebiliriz.",
    translations: {
      de: {
        etiket: "Content-Automatisierung",
        baslik: "Salevium – KI LinkedIn Automatisierung für B2B-Content",
        ozet: "Vollständige Automatisierung des LinkedIn-Marketing-Prozesses eines gamifizierten Vertriebstrainings-Unternehmens durch KI LinkedIn.",
        metaTitle: "Salevium Fallstudie – KI LinkedIn | Content-Produktion in Minuten",
        metaDescription: "Salevium nutzt KI LinkedIn-Automatisierung: Von Stunden zu Minuten bei Content-Erstellung. 90% Zeitersparnis, 22.000+ Follower durch KI-gestützte LinkedIn-Posts.",
        kpis: [
          { label: "Manueller Content", value: "0%" },
          { label: "Follower", value: "22.000+" },
          { label: "Engagement-Steigerung", value: "5x" }
        ],
        problem: [
          "LinkedIn-Marketing-Prozess lag vollständig auf den Schultern des Gründers",
          "Content-Produktion nahm wöchentlich Stunden in Anspruch",
          "Führungsposition im Gamification-Bereich konnte nicht aufrechterhalten werden",
          "Inhalte waren qualitativ, aber unregelmäßig",
          "Kein skalierbares System vorhanden"
        ],
        cozum: "Das entwickelte System schuf einen vollautomatischen Content-Flow mit KI LinkedIn, der die LinkedIn-Strategie ohne manuellen Aufwand ausführt. Wissenschaftlicher Research-Motor, Gamification-Konvertierungssystem und One-Click-Approval-System optimierten den Prozess.",
        uygulamaAsamalari: ["Strategische Content-Planung mit KI LinkedIn", "Wissenschaftlicher Research-Motor", "Gamification-Konvertierungssystem", "One-Click-Approval-System"],
        sonuclar: [
          "0% manuelle Content-Produktion dank KI LinkedIn (vorher wöchentlich 9–12 Stunden)",
          "45% Steigerung der LinkedIn-Sichtbarkeit",
          "Follower-Anzahl über 22.000",
          "Content-Engagement-Rate verfünffacht durch KI LinkedIn",
          "Wöchentliche automatische Content-Anzahl: 3–5",
          "Setup-Zeit: 2 Tage",
          "Content-Approval-Zeit: von 48 Stunden auf 4 Minuten reduziert"
        ],
        alinti: "Haben Sie ähnliche Herausforderungen bei der Content-Produktion oder Social-Media-Strategie? Gemeinsam können wir entdecken, wie das automatisierte System mit KI LinkedIn, das wir für Salevium aufgebaut haben, auf Ihr Geschäftsmodell angewendet werden kann."
      }
    }
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
    alinti: "Yapay zeka ile sadece mesaj göndermekle kalmadık; her mesajın ardından neyin işleyip işlemediğini görüp sürekli iyileştirdik. Bu sayede süreç hem etkili hem de sürdürülebilir oldu.",
    translations: {
      de: {
        etiket: "Internationale Markterschließung",
        baslik: "ERPA Teknoloji – KI in der Kundengewinnung für Europa",
        ozet: "Strategischer Eintritt in den europäischen Markt für Stadion-Digitaldisplays mit der TOCHI-Marke durch KI in der Kundengewinnung.",
        metaTitle: "ERPA Teknoloji Fallstudie – KI in der Kundengewinnung | Europäischer Markt",
        metaDescription: "ERPA Teknoloji: KI in der Kundengewinnung für strategischen Eintritt in europäische Märkte. Erste Meetings im ersten Monat durch KI-gestützte Lead-Generierung für Stadion-Betreiber.",
        kpis: [
          { label: "Zielmarkt", value: "Europäische Stadien" },
          { label: "Entscheidertypen", value: "4+ Positionen" },
          { label: "Kampagnendauer", value: "Erster Monat" }
        ],
        problem: [
          "Stadion-Betreiber im europäischen Markt erreichen",
          "Richtige Entscheidungsträger identifizieren (Hospitality Director, Marketing Manager, etc.)",
          "Für jedes Stadion personalisierte Nachrichten erstellen",
          "In hochwertige Leads konvertieren",
          "Professionelles und vertrauenswürdiges Image in internationaler Kommunikation"
        ],
        cozum: "Mit KI-basierter Recherche wurde eine umfassende Datenbank für Stadion-Betreiber und Arena-Manager in ganz Europa erstellt. Kurze und effektive E-Mail-Texte wurden erstellt, die auf die Position jedes Entscheidungsträgers zugeschnitten waren und TOCHIs technologische Überlegenheit betonten. Durch KI in der Kundengewinnung wurden Nachrichten automatisch versendet, Antworten klassifiziert und an das Vertriebsteam weitergeleitet.",
        uygulamaAsamalari: [
          "Markt- und Entscheider-Recherche mit KI in der Kundengewinnung",
          "Personalisierte E-Mail-Texte",
          "Automatisierung und Lead-Management",
          "Antwort-Analyse und Vertriebsübergabe"
        ],
        sonuclar: [
          "Mehrere qualifizierte Meetings im ersten Monat geplant durch KI in der Kundengewinnung",
          "Überdurchschnittliche Rücklaufquote im Branchenvergleich",
          "Direkte Antworten von Stadion-Betreibern",
          "Vertriebsteam konzentrierte sich nur auf interessierte Leads",
          "Internationale Sichtbarkeit der TOCHI-Marke gesteigert durch KI in der Kundengewinnung",
          "Professioneller Kommunikationsprozess gewährleistet"
        ],
        alinti: "Mit KI in der Kundengewinnung haben wir nicht nur Nachrichten versendet, sondern nach jeder Nachricht gesehen, was funktioniert und kontinuierlich verbessert. So wurde der Prozess effektiv und nachhaltig."
      }
    }
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
    alinti: "Artık yeni bir ülkeye açılmak, bayi ağı genişletmek veya uluslararası pazarlarda görünürlük kazanmak için aylarca kaynak ayırmamıza gerek kalmıyor. Sistem, bizim için çalışıyor.",
    translations: {
      de: {
        etiket: "Internationaler Vertrieb & Marketing",
        baslik: "Cemkimsan – KI Vertrieb für globale Expansion",
        ozet: "Erfolg eines internationalen Chemieherstellers bei der Durchführung von Vertriebs- und Marketingkampagnen in über 20 Ländern durch KI Vertrieb.",
        metaTitle: "Cemkimsan Fallstudie – KI Vertrieb | 20+ Länder Marketing",
        metaDescription: "Cemkimsan setzt auf KI Vertrieb: Vertriebs- und Marketingkampagnen in über 20 Ländern. 6 neue Chancen durch KI-gestützte Vertriebsautomatisierung und Händlernetzwerk-Expansion.",
        kpis: [
          { label: "Zielländer", value: "20+" },
          { label: "Neue Chancen", value: "6" },
          { label: "Setup-Zeit", value: "3 Wochen" }
        ],
        problem: [
          "Autonome Vertriebs- und Marketingkampagnen in 20+ Ländern durchführen",
          "Direkte Entscheidungsträger in der Chemiebranche erreichen",
          "Chemielabore und industrielle Kunden identifizieren",
          "Für jedes Land in Landessprache und kulturell angemessene Nachrichten erstellen",
          "Händlernetzwerk erweitern und Wachstum beschleunigen"
        ],
        cozum: "Mit einem KI-basierten mehrsprachigen System wurde für jedes Land eine automatische Zielgruppenforschung durchgeführt. Entscheidungsträger wurden identifiziert und personalisierte Nachrichten erstellt, die der Sprache und Kultur jedes Landes entsprachen. E-Mail-Kampagnen wurden mit KI Vertrieb automatisch vorbereitet, versendet und Antworten analysiert. Zusätzlich wurden für jedes Land lokale Händlerkandidaten identifiziert, um Expansionsmöglichkeiten zu schaffen.",
        uygulamaAsamalari: [
          "Mehrsprachige Zielgruppenforschung mit KI Vertrieb",
          "Personalisierte E-Mail-Kampagnen",
          "Automatische Antwort-Analyse",
          "Händlernetzwerk-Expansionsstrategie"
        ],
        sonuclar: [
          "Vertriebs- und Marketingkampagnen in 20+ Ländern erfolgreich durch KI Vertrieb durchgeführt",
          "Globale Reichweite ohne manuelle Operationen erreicht",
          "6 neue Geschäftsmöglichkeiten aus verschiedenen Ländern gewonnen durch KI Vertrieb",
          "Konkrete Schritte im Händlernetzwerk-Expansionsprozess unternommen",
          "Automatische Follow-up-Systeme für jedes Land eingerichtet"
        ],
        alinti: "Dank KI Vertrieb müssen wir nicht mehr monatelang Ressourcen aufwenden, um in ein neues Land zu expandieren, das Händlernetzwerk zu erweitern oder Sichtbarkeit auf internationalen Märkten zu gewinnen. Das System arbeitet für uns."
      }
    }
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
    alinti: "Fuar öncesi ve sonrasi sürecin tamamen otomatiklesmesi hem büyük zaman tasarrufu sagladi hem de daha fazla kisiyle iletisim kurmamiza olanak tandi. Artik fuarlardan çok daha verimli sonuçlar aliyoruz.",
    translations: {
      de: {
        etiket: "Lead-Generierung",
        baslik: "Coach Bilge – KI Messe Lead-Generierung mit Gamification",
        ozet: "Lead-Generierung vor der Messe mit gamifiziertem Lead-Funnel und Aufbau eines automatischen Follow-up-Systems nach der Messe durch KI Messe-Strategien.",
        metaTitle: "Coach Bilge Fallstudie – KI Messe | 300+ zusätzliche Leads",
        metaDescription: "Coach Bilge nutzt KI Messe-Strategie: Gamification-Lead-Funnel generiert 300+ zusätzliche Leads. Innovative KI-gestützte Messeautomatisierung für maximalen ROI.",
        kpis: [
          { label: "Zusätzliche Leads", value: "300+" },
          { label: "Follow-up-Rate", value: "100%" },
          { label: "Setup-Zeit", value: "1 Woche" }
        ],
        problem: [
          "Engagement vor der Messe steigern und Messestand auffällig gestalten",
          "Während der Messe mit mehr potenziellen Kunden kommunizieren",
          "Zeit- und Ressourcenbeschränkungen für Follow-up nach der Messe",
          "Geringe Effizienz manueller Follow-up-Systeme",
          "Jeden potenziellen Kunden mit personalisierten Nachrichten erreichen"
        ],
        cozum: "Vor der Messe wurden mit einer gamifizierten digitalen Kampagne aufmerksamkeitsstarke Inhalte erstellt und Vorabkommunikation mit potenziellen Kunden hergestellt. Für Messebesucher wurde ein gamifizierter Lead-Funnel mit KI Messe-Technologie entwickelt. Nach der Messe wurden automatisch personalisierte E-Mails an alle potenziellen Kunden gesendet. Automatisches Follow-up für Antwortende und Priorisierung von Leads für das Vertriebsteam.",
        uygulamaAsamalari: [
          "Gamifizierte Kampagne vor der Messe mit KI Messe",
          "Lead-Funnel-Design am Stand",
          "Automatischer E-Mail-Flow nach der Messe",
          "Personalisiertes Follow-up-System"
        ],
        sonuclar: [
          "Kampagne vor der Messe erreichte 300+ zusätzliche potenzielle Kunden durch KI Messe",
          "Hohe Engagement-Rate am Messestand erzielt",
          "100% Follow-up-Rate nach der Messe – alle potenziellen Kunden erreicht",
          "Zeit- und Arbeitsersparnis durch automatisches System statt manuellem Follow-up",
          "Vertriebsteam konzentrierte sich nur auf priorisierte Leads dank KI Messe"
        ],
        alinti: "Die vollständige Automatisierung des Prozesses vor und nach der Messe mit KI Messe hat nicht nur große Zeitersparnis gebracht, sondern ermöglicht uns auch, mit mehr Menschen zu kommunizieren. Jetzt erzielen wir viel effizientere Ergebnisse von Messen."
      }
    }
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

export const getLocalizedCaseStudy = (
  slug: string,
  language: 'tr' | 'de' | 'en' = 'tr'
): CaseStudy | undefined => {
  const caseStudy = getCaseStudyBySlug(slug);
  
  if (!caseStudy) return undefined;
  
  // If German and translation exists, merge with German data
  if (language === 'de' && caseStudy.translations?.de) {
    return {
      ...caseStudy,
      ...caseStudy.translations.de,
      // Keep logo, ogImage, slug, id from original
      logo: caseStudy.logo,
      ogImage: caseStudy.ogImage,
      slug: caseStudy.slug,
      id: caseStudy.id
    };
  }
  
  // Fallback to original data
  return caseStudy;
};

export const getLocalizedCaseStudies = (
  language: 'tr' | 'de' | 'en' = 'tr'
): CaseStudy[] => {
  return caseStudiesData.map(cs => {
    if (language === 'de' && cs.translations?.de) {
      return {
        ...cs,
        ...cs.translations.de,
        logo: cs.logo,
        ogImage: cs.ogImage,
        slug: cs.slug,
        id: cs.id
      };
    }
    return cs;
  });
};
