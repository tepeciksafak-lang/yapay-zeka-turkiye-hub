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
import { getLocalizedRoute } from "@/lib/routeMappings";
import { Link } from "react-router-dom";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { t, currentLanguage } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const navigate = useNavigate();

  const features = [
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: t('index.features.outbound.title'),
      description: t('index.features.outbound.description'),
      proof: t('index.features.outbound.proof')
    },
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      title: t('index.features.marketing.title'), 
      description: t('index.features.marketing.description'),
      proof: t('index.features.marketing.proof')
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-primary" />,
      title: t('index.features.chatbot.title'),
      description: t('index.features.chatbot.description'),
      proof: t('index.features.chatbot.proof')
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: t('index.features.analytics.title'),
      description: t('index.features.analytics.description'),
      proof: t('index.features.analytics.proof')
    }
  ];

  const cases = [
    {
      company: "AcilSatis",
      result: t('index.cases.acilsatis.result'),
      metric: t('index.cases.acilsatis.metric')
    },
    {
      company: "Carstudio AI", 
      result: t('index.cases.carstudio.result'),
      metric: t('index.cases.carstudio.metric')
    },
    {
      company: "Salevium",
      result: t('index.cases.salevium.result'),
      metric: t('index.cases.salevium.metric')
    },
    {
      company: "ERPA Teknoloji",
      result: t('index.cases.erpa.result'),
      metric: t('index.cases.erpa.metric')
    },
    {
      company: "Cemkimsan",
      result: t('index.cases.cemkimsan.result'),
      metric: t('index.cases.cemkimsan.metric')
    },
    {
      company: "DKM/Coach Bilge",
      result: t('index.cases.dkm.result'),
      metric: t('index.cases.dkm.metric')
    }
  ];

  const testimonials = [
    {
      text: t('index.testimonials.1.text'),
      name: t('index.testimonials.1.name'),
      company: t('index.testimonials.1.company'),
      metric: t('index.testimonials.1.metric')
    },
    {
      text: t('index.testimonials.2.text'),
      name: t('index.testimonials.2.name'), 
      company: t('index.testimonials.2.company'),
      metric: t('index.testimonials.2.metric')
    },
    {
      text: t('index.testimonials.3.text'),
      name: t('index.testimonials.3.name'),
      company: t('index.testimonials.3.company'), 
      metric: t('index.testimonials.3.metric')
    }
  ];

  const faqs = [
    {
      question: t('index.faq.1.question'),
      answer: t('index.faq.1.answer')
    },
    {
      question: t('index.faq.2.question'),
      answer: t('index.faq.2.answer')
    },
    {
      question: t('index.faq.3.question'),
      answer: t('index.faq.3.answer')
    },
    {
      question: t('index.faq.4.question'),
      answer: t('index.faq.4.answer')
    },
    {
      question: t('index.faq.5.question'),
      answer: t('index.faq.5.answer')
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
        title={t('index.seo.title')}
        description={t('index.seo.description')}
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
            <h2 className="mb-4 text-3xl font-bold text-foreground">{t('index.cases.title')}</h2>
            <p className="text-muted-foreground">
              <Link to={getLocalizedRoute(currentLanguage, 'cases')} className="text-primary hover:underline">{t('index.cases.link')}</Link> {t('index.cases.subtitle')}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {cases.map((case_item, index) => (
              <Card key={index} className="group transition-all duration-300 hover:border-primary/30">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{case_item.company}</h3>
                  <p className="mb-4 text-muted-foreground">{case_item.result}</p>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-primary/10 text-primary pointer-events-none">{case_item.metric}</Badge>
                    <button 
                      onClick={() => {
                        const caseMap: Record<number, number> = { 0: 2, 1: 1, 2: 3, 3: 4, 4: 5 };
                        const caseSlugMap: Record<number, string> = { 
                          0: 'acilsatis', 
                          1: 'car-studio-ai', 
                          2: 'salevium', 
                          3: 'erpa-teknoloji', 
                          4: 'cemkimsan',
                          5: 'dkm-coach-bilge'
                        };
                        navigate(getLocalizedRoute(currentLanguage, 'case-detail', { slug: caseSlugMap[index] }));
                      }}
                      className="text-sm text-primary hover:underline focus-visible:outline-2 focus-visible:outline-primary"
                    >
                      {t('index.cases.details')}
                    </button>
                  </div>
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
