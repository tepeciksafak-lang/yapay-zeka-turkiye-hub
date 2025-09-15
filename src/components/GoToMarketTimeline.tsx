"use client";
import { PhoneCall, Megaphone, Database, Handshake, FlaskConical } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Yeni Müşteri Kazanımı",
    date: "Şimdi",
    content: `Takviminizi kendi kendine dolduran akıllı sistemler.

• Telefonla soğuk satış: hedef listenizi AI ile hazırlayın
• Yöneticilere kişiselleştirilmiş e-mail kampanyaları
• Sosyal medya DM kampanyaları (LinkedIn, Instagram, X)
• Çok dilli iletişimle yurtdışına açılım`,
    category: "Lead Generation",
    icon: PhoneCall,
    relatedIds: [2, 3],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 2,
    title: "Pazarlama",
    date: "Bu ay",
    content: `İçeriğiniz ve reklamlarınız artık tesadüfe değil sisteme dayanıyor.

• Hızlı ve zahmetsiz içerik üretimi (AI destekli)
• Web sitesi tasarımı & optimizasyonu
• Reklam videolari ve tanitim videolari`,
    category: "Marketing",
    icon: Megaphone,
    relatedIds: [1, 3],
    status: "in-progress" as const,
    energy: 80,
  },
  {
    id: 3,
    title: "Satış & CRM",
    date: "Bu çeyrek",
    content: `Satıcılarınız satmakla meşgul olsun, dökümantasyonla değil.

• Otomatik CRM dokümantasyonu
• Hızlı ve kolay teklif oluşturma (size özel)
• Satıcılarınızın müşteri kazanma oranını yükseltin`,
    category: "Sales & CRM",
    icon: Database,
    relatedIds: [1, 2, 4],
    status: "in-progress" as const,
    energy: 72,
  },
  {
    id: 4,
    title: "Müşteri Başarısı",
    date: "Sürekli",
    content: `Mevcut müşterilerinizle bağınızı güçlendirin, gelir potansiyelini artırın.

• AI destekli müşteri destek ajanı: talepleri telefon ve mail üzerinden anında cevaplar
• Upsell & cross-sell sistemleriyle mevcut müşterilerden daha fazla değer yaratın`,
    category: "Customer Success",
    icon: Handshake,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 58,
  },
  {
    id: 5,
    title: "Dönüşüm Optimizasyonu",
    date: "Her zaman",
    content: `Web sitenizden gelen başvuruları artırın.

• Yapay zeka ile sitenizi optimize edin, başvuru oranlarını yükseltin
• Speed-to-Lead: potansiyel müşteri hafta sonu bile yazsa, 2 dk içinde cevap
• Instagram chatbot: vitrininizde anında ilgilenen bir satış temsilcisi gibi`,
    category: "CRO",
    icon: FlaskConical,
    relatedIds: [1, 3, 4],
    status: "pending" as const,
    energy: 64,
  }
];

export default function GoToMarketTimeline() {
  return (
    <section 
      aria-labelledby="gtm-title" 
      className="relative py-16 md:py-24 bg-bg-1"
      style={{ 
        minHeight: window.innerWidth <= 480 ? '130vh' : 'auto',
        paddingBottom: window.innerWidth <= 480 ? 'max(8rem, env(safe-area-inset-bottom, 2rem))' : undefined
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="gtm-title" className="text-2xl md:text-3xl font-semibold tracking-tight text-text-hi mb-4">
            Sıfırdan yeni lead kazanımından, sadık müşteri yaratmaya kadar uçtan uca otomasyon
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Hem yeni müşteri kazanımı hem de mevcut müşterilerinizi daha iyi yönetip upsell etmeniz için uçtan uca otomatik sistemler kuruyoruz.
          </p>
        </div>
        <RadialOrbitalTimeline timelineData={timelineData} />
      </div>
    </section>
  );
}