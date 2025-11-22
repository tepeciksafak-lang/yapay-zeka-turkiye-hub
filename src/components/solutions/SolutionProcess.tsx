import { LucideIcon } from 'lucide-react';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

interface SolutionProcessProps {
  title: string;
  steps: ProcessStep[];
}

export const SolutionProcess = ({ title, steps }: SolutionProcessProps) => {
  return (
    <section className="w3d-section">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-w3d-text">{title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="w3d-card text-center">
              <step.icon className="w-12 h-12 mx-auto mb-4 text-[#7C3AED]" />
              <div className="text-3xl font-bold text-[#7C3AED] mb-2">{step.number}</div>
              <h3 className="text-xl font-bold mb-3 text-w3d-text">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
