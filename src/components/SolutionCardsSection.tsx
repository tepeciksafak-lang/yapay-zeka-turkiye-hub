"use client";

import { GlowCard } from "./ui/spotlight-card";
import { PhoneCall, Megaphone, Database, Handshake, FlaskConical, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

export default function SolutionCardsSection() {
  const { currentLanguage, t } = useLanguage();

  const solutionLinks: Record<number, string> = {
    1: currentLanguage === 'de' ? '/de/losungen/leadgenerierung-ki' : '/tr/cozumler/lead-generation',
    2: currentLanguage === 'de' ? '/de/losungen/marketing-automatisierung' : '/tr/cozumler/marketing-automation',
    3: currentLanguage === 'de' ? '/de/losungen/vertriebsautomatisierung' : '/tr/cozumler/sales-automation',
    4: currentLanguage === 'de' ? '/de/losungen/kundenservice-automatisierung' : '/tr/cozumler/customer-service',
    5: currentLanguage === 'de' ? '/de/losungen/crm-prozessautomatisierung' : '/tr/cozumler/crm-automation',
  };

  const solutionCards = currentLanguage === 'de' ? [
    {
      id: 1,
      title: t('timeline.step1.title'),
      content: t('timeline.step1.description'),
      category: "Lead Generation",
      icon: PhoneCall,
      glowColor: "lime" as const,
    },
    {
      id: 2,
      title: t('timeline.step2.title'),
      content: t('timeline.step2.description'),
      category: "Marketing",
      icon: Megaphone,
      glowColor: "lime" as const,
    },
    {
      id: 3,
      title: t('timeline.step3.title'),
      content: t('timeline.step3.description'),
      category: "Sales & CRM",
      icon: Database,
      glowColor: "lime" as const,
    },
    {
      id: 4,
      title: t('timeline.step4.title'),
      content: t('timeline.step4.description'),
      category: "Customer Success",
      icon: Handshake,
      glowColor: "lime" as const,
    },
    {
      id: 5,
      title: t('timeline.step5.title'),
      content: t('timeline.step5.description'),
      category: "Conversion Optimization",
      icon: FlaskConical,
      glowColor: "lime" as const,
    }
  ] : [
    {
      id: 1,
      title: "Lead Generation",
      content: `Takviminizi kendi kendine dolduran akıllı sistemler.

• Telefonla soğuk satış: hedef listenizi AI ile hazırlayın
• Yöneticilere kişiselleştirilmiş e-mail kampanyaları
• Sosyal medya DM kampanyaları (LinkedIn, Instagram, X)
• Çok dilli iletişimle yurtdışına açılım`,
      category: "Lead Generation",
      icon: PhoneCall,
      glowColor: "lime" as const,
    },
    {
      id: 2,
      title: "Pazarlama",
      content: `İçeriğiniz ve reklamlarınız artık tesadüfe değil sisteme dayanıyor.

• Hızlı ve zahmetsiz içerik üretimi (AI destekli)
• Web sitesi tasarımı & optimizasyonu
• Reklam videolari ve tanitim videolari`,
      category: "Marketing",
      icon: Megaphone,
      glowColor: "lime" as const,
    },
    {
      id: 3,
      title: "Satış & CRM",
      content: `Satıcılarınız satmakla meşgul olsun, dökümantasyonla değil.

• Otomatik CRM dokümantasyonu
• Hızlı ve kolay teklif oluşturma (size özel)
• Satıcılarınızın müşteri kazanma oranını yükseltin`,
      category: "Sales & CRM",
      icon: Database,
      glowColor: "lime" as const,
    },
    {
      id: 4,
      title: "Müşteri Başarısı",
      content: `Mevcut müşterilerinizle bağınızı güçlendirin, gelir potansiyelini artırın.

• AI destekli müşteri destek ajanı: talepleri telefon ve mail üzerinden anında cevaplar
• Upsell & cross-sell sistemleriyle mevcut müşterilerden daha fazla değer yaratın`,
      category: "Customer Success",
      icon: Handshake,
      glowColor: "lime" as const,
    },
    {
      id: 5,
      title: "Dönüşüm Optimizasyonu",
      content: `Web sitenizden gelen başvuruları artırın.

• Yapay zeka ile sitenizi optimize edin, başvuru oranlarını yükseltin
• Speed-to-Lead: potansiyel müşteri hafta sonu bile yazsa, 2 dk içinde cevap
• Instagram chatbot: vitrininizde anında ilgilenen bir satış temsilcisi gibi`,
      category: "Conversion Optimization",
      icon: FlaskConical,
      glowColor: "lime" as const,
    }
  ];

  return (
    <section className="relative py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center mb-12">
          <h2 className="headline text-3xl md:text-4xl tracking-tight text-foreground mb-6">
            {currentLanguage === 'de' ? t('timeline.title') : 'Sıfırdan yeni lead kazanımından, sadık müşteri yaratmaya kadar uçtan uca otomasyon'}
          </h2>
        </div>

        {/* Cards Grid - 3 on top, 2 on bottom for desktop */}
        <div className="max-w-6xl mx-auto">
          {/* Top row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {solutionCards.slice(0, 3).map((card) => {
              const IconComponent = card.icon;
              return (
                <GlowCard key={card.id} glowColor={card.glowColor} size="lg" className="h-full">
                  <div className="flex flex-col h-full text-center gap-4 p-6">
                    <div className="flex flex-col items-center gap-3">
                      <IconComponent 
                        className="w-10 h-10" 
                        style={{ color: '#A3E635', strokeWidth: 2 }}
                      />
                      <h3 className="text-lg font-bold text-foreground">
                        {card.title}
                      </h3>
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line mb-4">
                        {card.content}
                      </p>
                      <Link 
                        to={solutionLinks[card.id]} 
                        className="inline-flex items-center justify-center gap-2 text-sm font-medium hover:underline"
                        style={{ color: '#A3E635' }}
                      >
                        {currentLanguage === 'de' ? 'Mehr erfahren' : 'Daha fazla bilgi'}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </GlowCard>
              );
            })}
          </div>

          {/* Bottom row - 2 cards centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {solutionCards.slice(3, 5).map((card) => {
              const IconComponent = card.icon;
              return (
                <GlowCard key={card.id} glowColor={card.glowColor} size="lg" className="h-full">
                  <div className="flex flex-col h-full text-center gap-4 p-6">
                    <div className="flex flex-col items-center gap-3">
                      <IconComponent 
                        className="w-10 h-10" 
                        style={{ color: '#A3E635', strokeWidth: 2 }}
                      />
                      <h3 className="text-lg font-bold text-foreground">
                        {card.title}
                      </h3>
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line mb-4">
                        {card.content}
                      </p>
                      <Link 
                        to={solutionLinks[card.id]} 
                        className="inline-flex items-center justify-center gap-2 text-sm font-medium hover:underline"
                        style={{ color: '#A3E635' }}
                      >
                        {currentLanguage === 'de' ? 'Mehr erfahren' : 'Daha fazla bilgi'}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </GlowCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}