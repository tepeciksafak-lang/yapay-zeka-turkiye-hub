import { Link } from 'react-router-dom';

interface SolutionCaseStudyProps {
  company: string;
  result: string;
  description: string;
  link: string;
  image?: string;
}

export const SolutionCaseStudy = ({ company, result, description, link, image }: SolutionCaseStudyProps) => {
  return (
    <section className="w3d-section bg-gray-50 case-study-section">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-w3d-text">Erfolgsbeispiel</h2>
        <div className="w3d-card p-8">
          {image && <img src={image} alt={company} className="w-32 h-32 object-contain mx-auto mb-6" />}
          <h3 className="text-2xl font-bold mb-4 text-center text-w3d-text">{company}</h3>
          <p className="text-3xl font-bold text-[#7C3AED] mb-4 text-center">{result}</p>
          <p className="text-gray-700 text-center mb-6">{description}</p>
          <div className="text-center">
            <Link to={link} className="text-[#7C3AED] hover:underline font-semibold">
              Zur vollständigen Fallstudie →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
