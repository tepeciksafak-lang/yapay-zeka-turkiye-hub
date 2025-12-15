import { useLanguage } from '@/contexts/LanguageContext';
import { useModal } from '@/contexts/ModalContext';
import { Quote, ArrowRight, CheckCircle } from 'lucide-react';
import safakImage from '@/assets/safak-tepecik-almanya.jpeg';

export const AuthorityAlmanya = () => {
  const { t } = useLanguage();
  const { openQuickAnalysis } = useModal();

  return (
    <section className="almanya-section bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="almanya-animate-on-scroll text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            {t('almanya.authority.title')}
          </h2>

          <div className="almanya-animate-on-scroll grid md:grid-cols-5 gap-8 items-center">
            {/* Image */}
            <div className="md:col-span-2">
              <img
                src={safakImage}
                alt="Şafak Tepecik"
                className="w-full max-w-xs mx-auto rounded-2xl shadow-lg border border-border/50"
              />
            </div>

            {/* Content */}
            <div className="md:col-span-3">
              {/* Credentials Badge */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">Almanya Doğumlu</span>
                <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">8+ Yıl B2B SaaS</span>
                <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">%90+ Visa Başarı</span>
              </div>

              <p className="text-lg text-muted-foreground mb-4">
                {t('almanya.authority.intro')}
              </p>

              <p className="text-lg text-foreground mb-6 leading-relaxed">
                {t('almanya.authority.text')}
              </p>

              <div className="relative bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
                <Quote className="absolute -top-3 -left-3 w-8 h-8 text-primary bg-card rounded-full p-1" />
                <p className="text-foreground font-medium italic pl-4">
                  {t('almanya.authority.usp')}
                </p>
              </div>

              <button
                onClick={openQuickAnalysis}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                {t('almanya.authority.cta')}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
