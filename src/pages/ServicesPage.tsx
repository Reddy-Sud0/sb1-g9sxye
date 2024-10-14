import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Database, BarChart2, Cpu, Cloud } from 'lucide-react';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Services | Inteliverse</title>
        <meta name="description" content="Explore Inteliverse's comprehensive AI services including AI Solutions, Data Science, Business Intelligence, RPA, and Cloud Computing." />
      </Helmet>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Our AI Services</h1>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Inteliverse offers a wide range of AI-powered services to transform your business. From intelligent chatbots to advanced data analytics, we have the solutions to drive your success.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Brain className="h-12 w-12 text-purple-600" />}
              title="AI Solutions"
              description="Leverage AI chatbots, virtual assistants, and natural language processing (NLP) to transform customer interactions and business efficiency."
            />
            <ServiceCard
              icon={<Database className="h-12 w-12 text-purple-600" />}
              title="Data Science"
              description="Turn data into actionable insights and power your business decisions with our advanced data science solutions."
            />
            <ServiceCard
              icon={<BarChart2 className="h-12 w-12 text-purple-600" />}
              title="Business Intelligence"
              description="Transform raw data into meaningful reports and dashboards for better decision-making with our BI solutions."
            />
            <ServiceCard
              icon={<Cpu className="h-12 w-12 text-purple-600" />}
              title="Robotic Process Automation (RPA)"
              description="Automate repetitive tasks, improve efficiency, and reduce costs with our RPA solutions designed for modern businesses."
            />
            <ServiceCard
              icon={<Cloud className="h-12 w-12 text-purple-600" />}
              title="Cloud Computing Solutions"
              description="Simplify data storage and processing with our cloud solutions, leveraging AWS, Google Cloud, and Azure."
            />
          </div>
        </div>
      </div>
    </>
  );
};

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-4">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
      <button className="mt-4 text-purple-600 font-semibold hover:text-purple-800">Learn More &rarr;</button>
    </div>
  );
};

export default ServicesPage;