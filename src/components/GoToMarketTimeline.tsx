"use client";
import { PhoneCall, Megaphone, Database, Handshake, FlaskConical } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Lead Üretimi",
    date: "Şimdi",
    content: `Yeni müşteri adaylarını yapay zekâ destekli ve otomatik sistemlerle yaratın.

• Cold Calling için AI listeler
• Otomatik e-posta outreach
• LinkedIn/Instagram/X DM otomasyonları
• Lead scraping & yurtdışı açılımı`,
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
    content: `Markanızı yapay zekâ ile görünür kılın; hedeflenmiş kampanyalarla güven inşa edin.

• AI içerik & kampanya üretimi
• Reklam yönetimi & funnel otomasyonu
• Topluluk oluşturma & nurturing`,
    category: "Marketing",
    icon: Megaphone,
    relatedIds: [1, 3],
    status: "in-progress" as const,
    energy: 80,
  },
  {
    id: 3,
    title: "Sales & CRM",
    date: "Bu çeyrek",
    content: `Lead'leri fırsata dönüştürün — yapay zekâ tabanlı CRM süreçleriyle hız kazanın.

• CRM dokümantasyonu + AI entegrasyonu
• Time-to-Lead optimizasyonu
• AI destekli teklif oluşturma
• Otomatik lead skorlama`,
    category: "Sales & CRM",
    icon: Database,
    relatedIds: [1, 2, 4],
    status: "in-progress" as const,
    energy: 72,
  },
  {
    id: 4,
    title: "Customer Success",
    date: "Sürekli",
    content: `Müşteri elde tutma ve upsell artık yapay zekâ ile otomatikleşiyor.

• AI destekli destek yönetimi
• Upsell & cross-sell sistemleri`,
    category: "Customer Success",
    icon: Handshake,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 58,
  },
  {
    id: 5,
    title: "Conversion Optimization",
    date: "Her zaman",
    content: `Trafiği gelire dönüştürün — yapay zekâ destekli testler ve otomatik yanıtlarla.

• Web optimizasyonu (AI heatmaps & testler)
• Speed-to-Lead otomatik yanıt
• Instagram Chatbot (AI görsel satış)`,
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
            Hem yeni müşteri kazanın, hem mevcut müşterilerinizden daha fazla değer yaratın.
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