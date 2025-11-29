import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useModal } from "@/contexts/ModalContext";
import { analytics } from "@/utils/analytics";

// Types for locale support (Next.js compatibility)
export type HeroLang = 'tr' | 'de' | 'en';

interface HeroProps {
  locale?: HeroLang;
}

// Hero content - using the same translations from LanguageContext
const heroCopy = {
  tr: {
    title1: 'Siz şirketi yönetin.',
    title2: 'Biz sizin için 7/24 çalışan yapay zeka işçileri kuruyoruz.',
    subtitle: '',
    ctaPrimary: 'Şimdi ücretsiz başlayın',
    socialProof: '100+ B2B ekip için pratik otomasyon kurguladık.'
  },
  de: {
    title1: 'Sie führen Ihr Unternehmen.',
    title2: 'Wir stellen Ihnen KI-Mitarbeiter zur Seite, die 24/7 für Sie arbeiten.',
    subtitle: '',
    ctaPrimary: 'Jetzt kostenlos starten',
    socialProof: '100+ B2B Teams vertrauen auf unsere praktischen Automatisierungen.'
  },
  en: {
    title1: 'You run the business.',
    title2: 'We build the Artificial Intelligence.',
    subtitle: 'AI + Automation that scales your company — without you doing more.',
    ctaPrimary: 'Start free now',
    socialProof: '100+ B2B teams trust our practical automation solutions.'
  }
};

export function Hero({ locale }: HeroProps) {
  // For React Router context (src/ pages)
  const languageContext = useLanguage?.();
  const { openQuickAnalysis } = useModal();
  
  // Determine which locale to use - prefer prop (Next.js) over context (React Router)
  const currentLocale = locale || (languageContext?.currentLanguage as HeroLang) || 'tr';
  const copy = heroCopy[currentLocale];

  const handleCtaClick = () => {
    // Track button click
    analytics.trackButtonClick('hero_cta_button', 'hero_section');
    
    // Open the QuickAnalysisModal
    openQuickAnalysis();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center" aria-label="Hero section">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" aria-hidden="true" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Main Headlines */}
          <div className="space-y-4">
            <h1 className="group headline text-4xl md:text-6xl lg:text-7xl text-foreground leading-[1.25] md:leading-[1.2]">
              <span className="block">{copy.title1}</span>
              <span className="block text-primary pb-1 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-right after:transition-transform after:duration-1000 after:ease-out group-hover:after:scale-x-100 group-hover:after:origin-left">
                {copy.title2}
              </span>
            </h1>
          </div>
          
          {/* Subtitle */}
          {copy.subtitle && (
            <p className="body-text text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {copy.subtitle}
            </p>
          )}
          
          {/* CTA Button */}
          <div className="pt-8">
            <Button
              onClick={handleCtaClick}
              size="lg"
              aria-label={copy.ctaPrimary}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-semibold rounded-xl transition-colors duration-200 min-h-[48px] min-w-[48px]"
            >
              {copy.ctaPrimary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;