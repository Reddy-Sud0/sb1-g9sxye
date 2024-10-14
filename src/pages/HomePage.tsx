import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, BarChart, Zap, DollarSign } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Inteliverse - AI Solutions for Business Transformation</title>
        <meta name="description" content="Transform your business with Inteliverse's cutting-edge AI solutions. Unlock intelligent automation, data insights, and growth." />
      </Helmet>
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Unlock Intelligent Business Solutions with AI</h1>
            <p className="text-xl mb-8">Transform the way you work, accelerate your growth</p>
            <button className="bg-white text-purple-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300">
              Book a Free AI Consultation Today!
            </button>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Struggling with operational inefficiencies and missed business opportunities?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Brain className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
              <p>Leverage machine learning to uncover hidden patterns and opportunities in your data.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Zap className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Automation Solutions</h3>
              <p>Streamline operations and reduce manual tasks with intelligent process automation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <BarChart className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Predictive Analytics</h3>
              <p>Make data-driven decisions with advanced forecasting and trend analysis.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Real Results Delivered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">E-commerce Giant Boosts Sales by 35%</h3>
              <p className="mb-4">Using our AI-powered recommendation engine and customer segmentation tools, a leading e-commerce platform saw a significant increase in sales and customer engagement.</p>
              <div className="flex items-center">
                <DollarSign className="h-8 w-8 text-green-500 mr-2" />
                <span className="text-2xl font-bold text-green-500">35% Revenue Increase</span>
              </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Healthcare Provider Reduces Wait Times by 50%</h3>
              <p className="mb-4">Our AI-driven scheduling and resource allocation system helped a major healthcare provider dramatically improve patient experience and operational efficiency.</p>
              <div className="flex items-center">
                <Zap className="h-8 w-8 text-blue-500 mr-2" />
                <span className="text-2xl font-bold text-blue-500">50% Reduced Wait Times</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl mb-8">Let's discuss how Inteliverse can help you achieve your goals.</p>
          <button className="bg-white text-purple-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300">
            Schedule Your Free Consultation
          </button>
        </div>
      </section>
    </>
  );
};

export default HomePage;