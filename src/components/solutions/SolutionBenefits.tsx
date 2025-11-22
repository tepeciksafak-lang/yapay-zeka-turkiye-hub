import { LucideIcon } from 'lucide-react';

interface Benefit {
  text: string;
  icon: LucideIcon;
}

interface SolutionBenefitsProps {
  title: string;
  benefits: Benefit[];
}

export const SolutionBenefits = ({ title, benefits }: SolutionBenefitsProps) => {
  return (
    <section className="w3d-section">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-w3d-text">{title}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <benefit.icon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700 font-medium">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
