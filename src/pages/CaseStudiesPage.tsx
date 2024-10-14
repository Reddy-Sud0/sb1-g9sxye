import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowUpRight } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Success Stories | Inteliverse Case Studies</title>
        <meta name="description" content="Explore real-world AI success stories and case studies from Inteliverse. See how our AI solutions have transformed businesses across industries." />
      </Helmet>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Case Studies</h1>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Discover how Inteliverse's AI solutions have driven real results for businesses across various industries.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudyCard
              title="E-commerce Giant Boosts Sales by 35%"
              industry="E-commerce"
              description="Using our AI-powered recommendation engine and customer segmentation tools, a leading e-commerce platform saw a significant increase in sales and customer engagement."
              results={["35% increase in revenue", "28% improvement in customer retention", "50% reduction in cart abandonment"]}
            />
            <CaseStudyCard
              title="Healthcare Provider Reduces Wait Times by 50%"
              industry="Healthcare"
              description="Our AI-driven scheduling and resource allocation system helped a major healthcare provider dramatically improve patient experience and operational efficiency."
              results={["50% reduction in patient wait times", "30% increase in appointment capacity", "95% patient satisfaction rate"]}
            />
            <CaseStudyCard
              title="Financial Institution Detects Fraud with 99% Accuracy"
              industry="Finance"
              description="Implementing our advanced AI fraud detection system, a leading bank significantly improved its ability to identify and prevent fraudulent transactions."
              results={["99% fraud detection accuracy", "60% reduction in false positives", "$10M saved in potential fraud losses"]}
            />
            <CaseStudyCard
              title="Tech Startup Accelerates Growth with AI-Driven Insights"
              industry="Technology"
              description="A rapidly growing tech startup leveraged our AI-powered market analysis and predictive modeling tools to identify new opportunities and optimize their product roadmap."
              results={["200% increase in user acquisition", "40% improvement in product development efficiency", "3x faster time-to-market for new features"]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const CaseStudyCard: React.FC<{ title: string; industry: string; description: string; results: string[] }> = ({ title, industry, description, results }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-purple-600 mb-4">{industry}</p>
      <p className="text-gray-600 mb-4">{description}</p>
      <h4 className="font-semibold mb-2">Key Results:</h4>
      <ul className="list-disc list-inside mb-4">
        {results.map((result, index) => (
          <li key={index} className="text-gray-600">{result}</li>
        ))}
      </ul>
      <button className="flex items-center text-purple-600 font-semibold hover:text-purple-800">
        Read Full Case Study
        <ArrowUpRight className="ml-2 h-4 w-4" />
      </button>
    </div>
  );
};

export default CaseStudiesPage;