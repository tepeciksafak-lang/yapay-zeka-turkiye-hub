import { useLanguage } from '@/contexts/LanguageContext';
import { useModal } from '@/contexts/ModalContext';
import { Building2, Network, ArrowRight } from 'lucide-react';

export const SegmentationAlmanya = () => {
  const { t } = useLanguage();
  const { openQuickAnalysis } = useModal();

  return (
    <section className="almanya-section py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="almanya-animate-on-scroll text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            {t('almanya.segmentation.title')}
          </h2>
          <p className="almanya-animate-on-scroll text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            {t('almanya.segmentation.subtitle')}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Box A: Marka Prestiji */}
            <button
              onClick={openQuickAnalysis}
              className="almanya-animate-on-scroll group bg-card border-2 border-border rounded-2xl p-8 text-left hover:border-primary transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Building2 className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {t('almanya.segmentation.a.title')}
              </h3>
              <p className="text-muted-foreground mb-4">
                {t('almanya.segmentation.a.description')}
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                {t('almanya.segmentation.cta')}
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>

            {/* Box B: Bayi Ağı */}
            <button
              onClick={openQuickAnalysis}
              className="almanya-animate-on-scroll group bg-card border-2 border-border rounded-2xl p-8 text-left hover:border-primary transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Network className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {t('almanya.segmentation.b.title')}
              </h3>
              <p className="text-muted-foreground mb-4">
                {t('almanya.segmentation.b.description')}
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                {t('almanya.segmentation.cta')}
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
