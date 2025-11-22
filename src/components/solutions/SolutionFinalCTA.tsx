import { ArrowRight } from 'lucide-react';

interface SolutionFinalCTAProps {
  title: string;
  subtitle?: string;
  ctaPrimary: string;
  ctaSecondary: string;
  onPrimaryCTA: () => void;
  onSecondaryCTA: () => void;
}

export const SolutionFinalCTA = ({ 
  title, 
  subtitle, 
  ctaPrimary, 
  ctaSecondary, 
  onPrimaryCTA, 
  onSecondaryCTA 
}: SolutionFinalCTAProps) => {
  return (
    <section className="w3d-section text-center">
      <div className="max-w-3xl mx-auto w3d-animate-on-scroll">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-w3d-text">{title}</h2>
        {subtitle && <p className="text-xl text-gray-600 mb-10">{subtitle}</p>}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={onPrimaryCTA} 
            className="w3d-btn-primary inline-flex items-center gap-2 justify-center"
          >
            {ctaPrimary}
            <ArrowRight className="w-5 h-5" />
          </button>
          <button 
            onClick={onSecondaryCTA} 
            className="w3d-btn-secondary"
          >
            {ctaSecondary}
          </button>
        </div>
      </div>
    </section>
  );
};
