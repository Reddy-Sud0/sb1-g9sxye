import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen, FileText, Video, Mic } from 'lucide-react';

const ResourcesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Resources & Insights | Inteliverse</title>
        <meta name="description" content="Access valuable AI resources, including blog posts, whitepapers, webinars, and podcasts from Inteliverse's experts." />
      </Helmet>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Resources</h1>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Explore our collection of AI resources and stay up-to-date with the latest trends, insights, and best practices in the world of artificial intelligence and business transformation.
          </p>
          
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <BookOpen className="h-6 w-6 mr-2 text-purple-600" />
              Blog
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <BlogPost
                title="The Future of AI in Customer Service"
                date="May 15, 2023"
                excerpt="Explore how AI is revolutionizing customer service, from chatbots to predictive analytics."
              />
              <BlogPost
                title="5 Ways Machine Learning is Transforming Finance"
                date="May 8, 2023"
                excerpt="Discover the key applications of machine learning in the financial sector and their impact."
              />
              <BlogPost
                title="Ethical AI: Balancing Innovation and Responsibility"
                date="May 1, 2023"
                excerpt="Learn about the importance of ethical considerations in AI development and deployment."
              />
            </div>
            <button className="mt-8 text-purple-600 font-semibold hover:text-purple-800">
              View All Blog Posts &rarr;
            </button>
          </section>
          
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <FileText className="h-6 w-6 mr-2 text-purple-600" />
              Whitepapers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Whitepaper
                title="The State of AI in 2023: Trends and Predictions"
                description="A comprehensive analysis of current AI trends and future projections across industries."
              />
              <Whitepaper
                title="Implementing AI in Healthcare: Challenges and Opportunities"
                description="An in-depth look at the potential of AI in healthcare and strategies for successful implementation."
              />
              <Whitepaper
                title="AI-Driven Supply Chain Optimization"
                description="Explore how AI is revolutionizing supply chain management and logistics."
              />
            </div>
            <button className="mt-8 text-purple-600 font-semibold hover:text-purple-800">
              Download Whitepapers &rarr;
            </button>
          </section>
          
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Video className="h-6 w-6 mr-2 text-purple-600" />
              Webinars
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Webinar
                title="AI in Action: Real-World Case Studies"
                date="June 1, 2023"
                time="2:00 PM EST"
                description="Join our experts as they discuss successful AI implementations across various industries."
              />
              <Webinar
                title="Building Scalable AI Systems: Best Practices"
                date="June 15, 2023"
                time="1:00 PM EST"
                description="Learn how to design and implement scalable AI systems for enterprise applications."
              />
            </div>
            <button className="mt-8 text-purple-600 font-semibold hover:text-purple-800">
              View All Webinars &rarr;
            </button>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Mic className="h-6 w-6 mr-2 text-purple-600" />
              Podcasts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Podcast
                title="AI Insights with Inteliverse"
                episode="Episode 10: The Role of AI in Cybersecurity"
                description="Explore how AI is shaping the future of cybersecurity and threat detection."
              />
              <Podcast
                title="AI Insights with Inteliverse"
                episode="Episode 9: Explainable AI - Making AI Decisions Transparent"
                description="Dive into the importance of explainable AI and its impact on trust and adoption."
              />
              <Podcast
                title="AI Insights with Inteliverse"
                episode="Episode 8: AI and the Future of Work"
                description="Discuss how AI is changing the job market and skills needed for the future workforce."
              />
            </div>
            <button className="mt-8 text-purple-600 font-semibold hover:text-purple-800">
              Listen to All Episodes &rarr;
            </button>
          </section>
        </div>
      </div>
    </>
  );
};

const BlogPost: React.FC<{ title: string; date: string; excerpt: string }> = ({ title, date, excerpt }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm mb-2">{date}</p>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <button className="text-purple-600 font-semibold hover:text-purple-800">Read More &rarr;</button>
    </div>
  );
};

const Whitepaper: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="text-purple-600 font-semibold hover:text-purple-800">Download PDF &rarr;</button>
    </div>
  );
};

const Webinar: React.FC<{ title: string; date: string; time: string; description: string }> = ({ title, date, time, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm mb-2">{date} at {time}</p>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="bg-purple-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-purple-700 transition duration-300">
        Register Now
      </button>
    </div>
  );
};

const Podcast: React.FC<{ title: string; episode: string; description: string }> = ({ title, episode, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-purple-600 mb-2">{episode}</p>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="text-purple-600 font-semibold hover:text-purple-800">Listen Now &rarr;</button>
    </div>
  );
};

export default ResourcesPage;