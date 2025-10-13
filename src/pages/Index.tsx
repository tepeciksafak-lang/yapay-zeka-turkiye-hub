import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  ArrowRight, 
  Star, 
  CheckCircle, 
  Users, 
  Zap, 
  Target, 
  BarChart3, 
  MessageSquare, 
  TrendingUp, 
  Clock,
  Bot, 
  MessageCircle,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { QuickAnalysisModal } from "@/components/QuickAnalysisModal";
import { SEO } from "@/components/SEO";
import { FAQSchema } from "@/components/FAQSchema";
import { useLanguage } from "@/contexts/LanguageContext";
import { Hero } from "@/components/hero/Hero";
import AgitateDemo from "@/components/AgitateDemo";
import SolutionSection from "@/components/SolutionSection";
import GoToMarketTimeline from "@/components/GoToMarketTimeline";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const navigate = useNavigate();

  const features = [
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Outbound Satış Otomasyonu",
      description: "Kişiselleştirilmiş e-postalar ve akıllı takip.",
      proof: "Günde 500+ kişiselleştirilmiş mesaj gönderimi"
    },
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      title: "Pazarlama Otomasyonu", 
      description: "İçerik, SEO ve reklam optimizasyonu otomatik.",
      proof: "SEO skorunda %85+ artış garantisi"
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-primary" />,
      title: "Müşteri İletişimi (Chatbot)",
      description: "7/24 kişiselleştirilmiş yanıt.",
      proof: "Müşteri memnuniyetinde %40 artış"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Veri Analizi",
      description: "Gerçek zamanlı içgörü, daha doğru karar.",
      proof: "Karar alma süresinde %60 hızlanma"
    }
  ];

  const cases = [
    {
      company: "AcilSatis",
      result: "Hızlı bilinirlik, sürekli trafik.",
      metric: "+%45 görünürlük"
    },
    {
      company: "Carstudio AI", 
      result: "Ekip büyütmeden yeni pazarlara açılım.",
      metric: "3x pazar genişlemesi"
    },
    {
      company: "Salevium",
      result: "İçerik üretimi: saatlerden dakikalara.",
      metric: "%90 zaman tasarrufu"
    },
    {
      company: "ERPA Teknoloji",
      result: "Avrupa pazarına AI destekli stratejik giriş.",
      metric: "İlk ayda görüşmeler"
    },
    {
      company: "Cemkimsan",
      result: "20'den fazla ülkeye satış ve pazarlama kampanyası.",
      metric: "6 yeni fırsat"
    },
    {
      company: "DKM/Coach Bilge",
      result: "Oyun formatında lead funnel ile yüzlerce ek lead.",
      metric: "+300 nitelikli lead"
    }
  ];

  const caseMap: { [key: string]: string } = {
    "AcilSatis": "case-2",
    "Carstudio AI": "case-1", 
    "Salevium": "case-3",
    "ERPA Teknoloji": "case-4",
    "Cemkimsan": "case-5",
    "DKM/Coach Bilge": "case-6"
  };

  const testimonials = [
    {
      text: "Satış süreçlerimiz tamamen değişti. Lead kalitemiz %300 arttı.",
      name: "Mehmet Yılmaz",
      company: "TechStart CEO",
      metric: "%300 lead artışı"
    },
    {
      text: "İçerik üretiminde inanılmaz hızlanma. Ekip verimliliği çok arttı.",
      name: "Ayşe Kara", 
      company: "Marketing Director",
      metric: "%85 verimlilik artışı"
    },
    {
      text: "Müşteri hizmetleri 7/24 çalışıyor artık. Memnuniyet rekor seviyede.",
      name: "Can Özkan",
      company: "E-ticaret Uzmanı", 
      metric: "%95 müşteri memnuniyeti"
    }
  ];

  const faqs = [
    {
      question: "Kurulum ne kadar sürer?",
      answer: "Genelde 2 gün. Basit entegrasyonlar aynı gün, kompleks sistemler için 1 hafta sürebilir."
    },
    {
      question: "Veri güvenliği nasıl sağlanıyor?",
      answer: "Müşteri verileri tamamen gizli tutulur, erişimler kısıtlıdır. KVKK uyumlu çalışıyoruz."
    },
    {
      question: "İçerik sahipliği kimde?",
      answer: "Üretilen tüm varlıklar size aittir. Hiçbir telif hakkı sorunu yaşamazsınız."
    },
    {
      question: "Fiyat nasıl belirlenir?",
      answer: "İhtiyaca ve entegrasyonlara göre özelleştirilen paketler sunuyoruz. Ücretsiz analiz sonrası net fiyat."
    },
    {
      question: "Teknik bilgi gerekli mi?",
      answer: "Hayır. Tüm süreci biz yönetiyoruz. Sadece iş süreçlerinizi anlamamız yeterli."
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <SEO
        title="Pratik Yapay Zeka – Satış ve Pazarlama Otomasyonu"
        description="Lead'den toplantıya kadar uçtan uca AI otomasyonları. Outbound & inbound, içerik ve sosyal medya otomasyonu ile satışlarınızı artırın."
      />
      <FAQSchema faqs={faqs} />
      
      {/* Hero Section */}
      <Hero modalOpen={modalOpen} onModalOpenChange={setModalOpen} />

      {/* Agitate Demo Section */}
      <AgitateDemo />

      {/* Solution Section */}
      <SolutionSection />

      {/* Go-to-Market Timeline */}
      <GoToMarketTimeline />

      {/* Mini Cases */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">Success Stories</h2>
            <p className="text-muted-foreground">
              <a href="/tr/vaka-calismalari" className="text-primary hover:underline">Detaylı vaka çalışmalarımızı</a> inceleyin ve başarı hikayelerimizi keşfedin.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {cases.map((c) => (
              <Card 
                key={c.company} 
                className="group transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
                onClick={() => {
                  const caseId = caseMap[c.company];
                  if (caseId) {
                    const slug = {
                      "case-1": "car-studio-ai",
                      "case-2": "acilsatis",
                      "case-3": "salevium",
                      "case-4": "erpa-teknoloji",
                      "case-5": "cemkimsan",
                      "case-6": "dkm-coach-bilge"
                    }[caseId];
                    navigate(`/tr/vaka-calismalari/${slug}`);
                  }
                }}
              >
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{c.company}</h3>
                  <p className="mb-4 text-muted-foreground">{c.result}</p>
                  <Badge className="bg-primary/10 text-primary">{c.metric}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      <QuickAnalysisModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
};

export default Index;
