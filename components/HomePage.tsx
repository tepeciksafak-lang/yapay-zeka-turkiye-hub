'use client'

import { useState } from 'react'
import Image from 'next/image'
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
  ChevronRight,
  X
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { useI18n } from '@/locales/client'
import { MotionButton } from '@/components/MotionButton'
import { QuickAnalysisModal } from '@/components/QuickAnalysisModal'

export function HomePage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const t = useI18n()

  const features = [
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: t('features.outbound.title'),
      description: t('features.outbound.description'),
      proof: t('features.outbound.proof')
    },
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      title: t('features.marketing.title'), 
      description: t('features.marketing.description'),
      proof: t('features.marketing.proof')
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-primary" />,
      title: t('features.chatbot.title'),
      description: t('features.chatbot.description'),
      proof: t('features.chatbot.proof')
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: t('features.analytics.title'),
      description: t('features.analytics.description'),
      proof: t('features.analytics.proof')
    }
  ]

  const cases = [
    {
      company: "Car Studio AI",
      result: t('cases.carstudio.result'),
      metric: t('cases.carstudio.metric')
    },
    {
      company: "Acilsatis",
      result: t('cases.acilsatis.result'),
      metric: t('cases.acilsatis.metric')
    },
    {
      company: "Salevium",
      result: t('cases.salevium.result'),
      metric: t('cases.salevium.metric')
    }
  ]

  const testimonials = [
    {
      text: t('testimonial.carstudio.text'),
      name: "Car Studio AI",
      company: t('testimonial.carstudio.company'),
      metric: t('testimonial.carstudio.metric')
    },
    {
      text: t('testimonial.acilsatis.text'),
      name: "Acilsatis",
      company: t('testimonial.acilsatis.company'),
      metric: t('testimonial.acilsatis.metric')
    },
    {
      text: t('testimonial.salevium.text'),
      name: "Salevium",
      company: t('testimonial.salevium.company'),
      metric: t('testimonial.salevium.metric')
    }
  ]

  const faqs = [
    {
      question: t('faq.setup.question'),
      answer: t('faq.setup.answer')
    },
    {
      question: t('faq.integration.question'),
      answer: t('faq.integration.answer')
    },
    {
      question: t('faq.roi.question'),
      answer: t('faq.roi.answer')
    },
    {
      question: t('faq.security.question'),
      answer: t('faq.security.answer')
    },
    {
      question: t('faq.technical.question'),
      answer: t('faq.technical.answer')
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <>


      {/* Features Grid */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="glass">
              {t('features.title')}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              {t('features.subtitle')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass hover-glow transition-all duration-300 group">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                  <div className="text-xs text-primary font-medium">
                    ✓ {feature.proof}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="py-16 lg:py-24 bg-muted/20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/30">
                  {t('beforeafter.before.title')}
                </Badge>
                <ul className="space-y-3">
                  {[
                    t('beforeafter.before.item1'),
                    t('beforeafter.before.item2'),
                    t('beforeafter.before.item3'),
                    t('beforeafter.before.item4')
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3 text-muted-foreground">
                      <X className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  {t('beforeafter.after.title')}
                </Badge>
                <ul className="space-y-3">
                  {[
                    t('beforeafter.after.item1'),
                    t('beforeafter.after.item2'),
                    t('beforeafter.after.item3'),
                    t('beforeafter.after.item4')
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Cases */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="glass">
              {t('cases.title')}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              {t('cases.subtitle')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((case_, index) => (
              <Card key={index} className="glass hover-glow-purple transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-bold text-lg gradient-text">{case_.company}</h3>
                  <p className="text-muted-foreground">{case_.result}</p>
                  <div className="text-sm text-primary font-medium">
                    📈 {case_.metric}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Call Out */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              {t('cta.title')} <span className="gradient-text">{t('cta.title.highlight')}</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('cta.description')}
            </p>
            <MotionButton 
              size="lg"
              className="hover-glow bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0"
              onClick={() => setModalOpen(true)}
            >
              {t('cta.button')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </MotionButton>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="glass">
              {t('pricing.title')}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              {t('pricing.subtitle')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter */}
            <Card className="glass hover-glow transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{t('pricing.starter.title')}</h3>
                  <p className="text-muted-foreground">{t('pricing.starter.subtitle')}</p>
                </div>
                <div className="space-y-4">
                  <div className="text-3xl font-bold">€497<span className="text-base font-normal text-muted-foreground">/ay</span></div>
                  <ul className="space-y-3">
                    {[
                      t('pricing.starter.feature1'),
                      t('pricing.starter.feature2'),
                      t('pricing.starter.feature3'),
                      t('pricing.starter.feature4')
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <MotionButton className="w-full hover-glow" variant="outline">
                  {t('pricing.starter.button')}
                </MotionButton>
              </CardContent>
            </Card>

            {/* Growth (Popular) */}
            <Card className="glass hover-glow-purple transition-all duration-300 border-primary relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                  {t('pricing.growth.badge')}
                </Badge>
              </div>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{t('pricing.growth.title')}</h3>
                  <p className="text-muted-foreground">{t('pricing.growth.subtitle')}</p>
                </div>
                <div className="space-y-4">
                  <div className="text-3xl font-bold">€997<span className="text-base font-normal text-muted-foreground">/ay</span></div>
                  <ul className="space-y-3">
                    {[
                      t('pricing.growth.feature1'),
                      t('pricing.growth.feature2'),
                      t('pricing.growth.feature3'),
                      t('pricing.growth.feature4'),
                      t('pricing.growth.feature5')
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <MotionButton className="w-full hover-glow bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0">
                  {t('pricing.growth.button')}
                </MotionButton>
              </CardContent>
            </Card>

            {/* Enterprise */}
            <Card className="glass hover-glow transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{t('pricing.enterprise.title')}</h3>
                  <p className="text-muted-foreground">{t('pricing.enterprise.subtitle')}</p>
                </div>
                <div className="space-y-4">
                  <div className="text-3xl font-bold">{t('pricing.enterprise.price')}<span className="text-base font-normal text-muted-foreground"> Fiyat</span></div>
                  <ul className="space-y-3">
                    {[
                      t('pricing.enterprise.feature1'),
                      t('pricing.enterprise.feature2'),
                      t('pricing.enterprise.feature3'),
                      t('pricing.enterprise.feature4'),
                      t('pricing.enterprise.feature5')
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <MotionButton className="w-full hover-glow" variant="outline">
                  {t('pricing.enterprise.button')}
                </MotionButton>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-muted/20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="glass">
              {t('testimonials.title')}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              {t('testimonials.subtitle')}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="glass hover-glow-purple transition-all duration-300">
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-center justify-between mb-8">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={prevTestimonial}
                    className="hover-glow"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <div
                        key={index}
                        className={`h-2 w-2 rounded-full transition-colors ${
                          index === currentTestimonial ? 'bg-primary' : 'bg-muted'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={nextTestimonial}
                    className="hover-glow"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>

                <div className="text-center space-y-6">
                  <div className="flex justify-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl lg:text-2xl font-medium text-foreground leading-relaxed">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                  
                  <div className="space-y-2">
                    <div className="font-semibold text-lg gradient-text">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonials[currentTestimonial].company}
                    </div>
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      {testimonials[currentTestimonial].metric}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="glass">
              {t('faq.title')}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              {t('faq.subtitle')}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border/40 rounded-lg px-6 glass">
                  <AccordionTrigger className="hover:text-primary focus-visible text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              {t('footer.cta')}
            </h2>
            <p className="text-xl text-muted-foreground">
              15 dakikalık ücretsiz analiz ile başlayın. 
              Hangi süreçlerinizin otomatikleştirilebileceğini keşfedin.
            </p>
            <MotionButton 
              size="lg"
              className="hover-glow-purple bg-gradient-to-r from-secondary to-accent text-secondary-foreground border-0"
              onClick={() => setModalOpen(true)}
            >
              {t('footer.cta.button')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </MotionButton>
          </div>
        </div>
      </section>

      <QuickAnalysisModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  )
}