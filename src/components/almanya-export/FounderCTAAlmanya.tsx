import { useLanguage } from '@/contexts/LanguageContext';
import { useModal } from '@/contexts/ModalContext';
import { ArrowRight, Check } from 'lucide-react';
import founderImage from '@/assets/safak-tepecik-almanya.jpeg';

export const FounderCTAAlmanya = () => {
  const { t } = useLanguage();
  const { openQuickAnalysis } = useModal();

  const bulletPoints = [
    'Alman iş kültürü ve karar mekanizmalarına hakim',
    'Sahada kurulmuş, test edilmiş satış sistemleri',
    'Teorik danışmanlık değil, uygulama odaklı yaklaşım'
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-center">
            {/* Foto - Links (40%) */}
            <div className="md:col-span-2 flex justify-center md:justify-start">
              <div className="relative">
                <div className="w-64 h-80 md:w-72 md:h-96 rounded-lg overflow-hidden border border-border/30 shadow-xl">
                  <img 
                    src={founderImage} 
                    alt="Şafak Tepecik - Almanya & Avrupa B2B Satış Danışmanı"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Subtle accent */}
                <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-primary/10 rounded-lg -z-10" />
              </div>
            </div>

            {/* Text + CTA - Rechts (60%) */}
            <div className="md:col-span-3 space-y-6">
              {/* Headline */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Bu süreci kim yönetiyor?
              </h2>

              {/* Name & Role */}
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                  Şafak Tepecik
                </h3>
                <p className="text-primary font-medium">
                  Almanya & Avrupa B2B Satış Danışmanı
                </p>
              </div>

              {/* Kurztext */}
              <p className="text-muted-foreground leading-relaxed">
                8 yılı aşkın süredir Almanya ve Avrupa pazarında B2B satış süreçleri kuruyorum.
                Son 2 yıldır bu tecrübeyi yapay zeka destekli sistemlerle birleştirerek, 
                Türkiye'de başarılı olan firmaların Almanya pazarına kontrollü şekilde açılmasını sağlıyorum.
              </p>

              {/* Bullet Points */}
              <ul className="space-y-3">
                {bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="pt-4 space-y-3">
                <button 
                  onClick={openQuickAnalysis}
                  className="almanya-btn-primary inline-flex items-center gap-2 justify-center"
                >
                  İlk Analizi Talep Et
                  <ArrowRight className="w-5 h-5" />
                </button>

                {/* Microcopy */}
                <p className="text-sm text-muted-foreground">
                  Her firma için uygun değildir. Önce birlikte değerlendiriyoruz.
                </p>

                {/* Subtle Tagline */}
                <p className="text-xs text-muted-foreground/70 italic">
                  Almanya pazarına plansız değil, sistemli giriyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
