import React, { useState } from "react";
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
import { useLanguage } from "@/contexts/LanguageContext";
import AgitateDemo from "@/components/AgitateDemo";
import SolutionSection from "@/components/SolutionSection";
import GoToMarketTimeline from "@/components/GoToMarketTimeline";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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
    }
  ];

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
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute inset-0 opacity-30" style={{background: 'var(--glow-lime)'}} />
        <div className="container relative mx-auto px-4 py-20">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="mb-8 headline text-4xl sm:text-5xl lg:text-7xl xl:text-8xl animate-slide-up leading-tight">
              <span className="block text-text-hi">
                {t('hero.headline')}
              </span>
              <span className="block mt-2 bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent lime-underline">
                {t('hero.headline.highlight')}
              </span>
            </h1>
            <p className="mb-12 body-text text-text-muted max-w-4xl mx-auto animate-slide-up [animation-delay:0.2s] leading-relaxed">
              {t('hero.subheadline')}
            </p>
            <div className="flex flex-col gap-6 sm:flex-row sm:justify-center animate-slide-up [animation-delay:0.4s]">
              <Button 
                size="lg" 
                variant="lime"
                onClick={() => setModalOpen(true)}
                className="text-lg px-8 py-4 h-auto hover-glow focus-lime"
              >
                {t('hero.cta.primary')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

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
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cases.map((case_item, index) => (
              <Card key={index} className="group transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{case_item.company}</h3>
                  <p className="mb-4 text-muted-foreground">{case_item.result}</p>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-primary/10 text-primary">{case_item.metric}</Badge>
                    <a 
                      href="#cases" 
                      className="text-sm text-primary hover:underline focus-visible:outline-2 focus-visible:outline-primary"
                    >
                      Detaylar
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="relative">
              <Card>
                <CardContent className="p-8 text-center">
                  <blockquote className="mb-6 text-lg text-foreground">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                  <div className="mb-2 font-semibold text-foreground">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="mb-4 text-sm text-muted-foreground">
                    {testimonials[currentTestimonial].company}
                  </div>
                  <Badge className="bg-primary/10 text-primary">
                    {testimonials[currentTestimonial].metric}
                  </Badge>
                </CardContent>
              </Card>
              
              <div className="mt-6 flex items-center justify-center gap-4">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`h-2 w-2 rounded-full transition-colors ${
                        index === currentTestimonial ? 'bg-primary' : 'bg-muted-foreground/30'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuickAnalysisModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
};

export default Index;
