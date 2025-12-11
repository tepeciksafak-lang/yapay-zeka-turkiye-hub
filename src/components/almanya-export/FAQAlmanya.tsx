import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQAlmanya = () => {
  const { t } = useLanguage();

  const faqs = [
    { question: t('almanya.faq.q1'), answer: t('almanya.faq.a1') },
    { question: t('almanya.faq.q2'), answer: t('almanya.faq.a2') },
    { question: t('almanya.faq.q3'), answer: t('almanya.faq.a3') },
  ];

  return (
    <section className="almanya-section py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="almanya-animate-on-scroll text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            {t('almanya.faq.title')}
          </h2>

          <Accordion type="single" collapsible className="almanya-animate-on-scroll space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-foreground font-medium text-left hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
