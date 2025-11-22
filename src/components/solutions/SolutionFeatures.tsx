import { LucideIcon } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface SolutionFeaturesProps {
  title: string;
  features: Feature[];
}

export const SolutionFeatures = ({ title, features }: SolutionFeaturesProps) => {
  return (
    <section className="w3d-section bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-w3d-text">{title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="w3d-card">
              <feature.icon className="w-10 h-10 mb-4 text-[#7C3AED]" />
              <h3 className="text-lg font-bold mb-2 text-w3d-text">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
