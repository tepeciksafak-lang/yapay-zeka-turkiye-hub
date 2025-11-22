import { LucideIcon } from 'lucide-react';

interface Problem {
  text: string;
  icon: LucideIcon;
}

interface SolutionProblemProps {
  title: string;
  problems: Problem[];
}

export const SolutionProblem = ({ title, problems }: SolutionProblemProps) => {
  return (
    <section className="w3d-section bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-w3d-text">{title}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <problem.icon className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">{problem.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
