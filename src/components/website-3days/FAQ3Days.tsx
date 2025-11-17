import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQ3DaysProps {
  faqData: FAQItem[];
}

export const FAQ3Days = ({ faqData }: FAQ3DaysProps) => {
  const { t } = useLanguage();
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  return (
    <section className="w3d-section bg-[#F8F9FA]">
      <h2 className="text-center mb-16 w3d-animate-on-scroll">
        {t('website3days.faq.title')}
      </h2>
      
      <div className="max-w-3xl mx-auto w3d-animate-on-scroll">
        <Accordion 
          type="single" 
          collapsible 
          className="space-y-4"
          value={openItem}
          onValueChange={setOpenItem}
        >
          {faqData.map((item, idx) => {
            const isOpen = openItem === `item-${idx}`;
            
            return (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="w3d-card border-none transition-all duration-300 hover:bg-white/80 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline group [&[data-state=open]>svg]:rotate-180">
                  <span className="flex items-center gap-3 w-full">
                    {/* Animated Icon */}
                    <ChevronDown 
                      className={`w-5 h-5 text-[#7C3AED] transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                    <span className="flex-1">{item.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2 pl-8">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};
