import { ArrowRight, LucideIcon } from 'lucide-react';

interface SolutionHeroProps {
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  icon?: LucideIcon;
  onPrimaryCTA: () => void;
  onSecondaryCTA: () => void;
}

export const SolutionHero = ({ 
  title, 
  subtitle, 
  ctaPrimary, 
  ctaSecondary, 
  icon: Icon,
  onPrimaryCTA,
  onSecondaryCTA 
}: SolutionHeroProps) => {
  return (
    <section className="w3d-section text-center">
      <div className="max-w-4xl mx-auto w3d-animate-on-scroll">
        {Icon && <Icon className="w-16 h-16 mx-auto mb-6 text-[#7C3AED]" />}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-w3d-text">{title}</h1>
        <p className="text-xl text-gray-600 mb-10">{subtitle}</p>
        
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
