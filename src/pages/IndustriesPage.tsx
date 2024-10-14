import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShoppingCart, Heart, Users, DollarSign, Rocket } from 'lucide-react';

const IndustriesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Industries We Serve | Inteliverse</title>
        <meta name="description" content="Discover how Inteliverse's AI solutions are tailored for various industries including eCommerce, Healthcare, Recruitment, Finance, and Startups." />
      </Helmet>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Industries We Serve</h1>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Inteliverse delivers tailored AI solutions across various industries, helping businesses overcome unique challenges and unlock new opportunities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <IndustryCard
              icon={<ShoppingCart className="h-12 w-12 text-purple-600" />}
              title="eCommerce"
              description="Drive conversions and boost sales with AI and data science solutions tailored for eCommerce businesses."
            />
            <IndustryCard
              icon={<Heart className="h-12 w-12 text-purple-600" />}
              title="Healthcare"
              description="Enhance patient care and streamline operations with our healthcare AI and data analytics solutions."
            />
            <IndustryCard
              icon={<Users className="h-12 w-12 text-purple-600" />}
              title="Recruitment"
              description="Improve hiring processes and candidate matching with our AI-driven recruitment solutions."
            />
            <IndustryCard
              icon={<DollarSign className="h-12 w-12 text-purple-600" />}
              title="Finance"
              description="Optimize financial processes and gain insights with our AI and business intelligence solutions tailored for finance."
            />
            <IndustryCard
              icon={<Rocket className="h-12 w-12 text-purple-600" />}
              title="Custom AI for Startups"
              description="Innovative AI and data science solutions specifically designed to meet the needs of growing startups."
            />
          </div>
        </div>
      </div>
    </>
  );
};

const IndustryCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-4">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
      <button className="mt-4 text-purple-600 font-semibold hover:text-purple-800">Explore Solutions &rarr;</button>
    </div>
  );
};

export default IndustriesPage;