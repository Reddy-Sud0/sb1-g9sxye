import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Briefcase, Award } from 'lucide-react';

const AboutUsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Inteliverse | AI Innovation Leaders</title>
        <meta name="description" content="Learn about Inteliverse, our mission to transform businesses with AI, and the team behind our innovative solutions." />
      </Helmet>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">About Inteliverse</h1>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Inteliverse is a leading AI solutions provider, dedicated to transforming businesses through innovative technology and data-driven insights.
          </p>
          
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2015 by a team of AI experts and industry veterans, Inteliverse was born out of a vision to make advanced AI technologies accessible to businesses of all sizes. We recognized the transformative power of AI and set out to create solutions that could drive real, measurable impact across various industries.
            </p>
            <p className="text-gray-700 mb-4">
              Over the years, we've grown from a small startup to a global leader in AI solutions, serving clients across multiple sectors including e-commerce, healthcare, finance, and technology. Our commitment to innovation, ethical AI practices, and customer success has been the cornerstone of our growth and reputation in the industry.
            </p>
          </section>
          
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              At Inteliverse, our mission is to empower businesses with intelligent AI solutions that drive growth, efficiency, and innovation. We strive to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Deliver cutting-edge AI technologies that solve real-world business challenges</li>
              <li>Foster a culture of continuous learning and innovation in AI and data science</li>
              <li>Promote ethical AI practices and responsible use of technology</li>
              <li>Build long-lasting partnerships with our clients, helping them achieve sustainable success through AI</li>
            </ul>
          </section>
          
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-700 mb-4">
              Inteliverse is powered by a diverse team of AI researchers, data scientists, software engineers, and industry experts. Our leadership team brings decades of experience in AI, machine learning, and business transformation:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              <TeamMember
                name="Dr. Sarah Chen"
                title="Founder & CEO"
                bio="Ph.D. in Machine Learning, 15+ years experience in AI research and applications"
              />
              <TeamMember
                name="Michael Rodriguez"
                title="CTO"
                bio="Former lead engineer at Google AI, expert in large-scale AI systems"
              />
              <TeamMember
                name="Emma Thompson"
                title="Chief Data Scientist"
                bio="Pioneering work in NLP and computer vision, 20+ published papers"
              />
            </div>
          </section>
          
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ValueCard
                icon={<Users className="h-12 w-12 text-purple-600" />}
                title="Client-Centric Innovation"
                description="We put our clients' needs at the heart of everything we do, constantly innovating to deliver solutions that drive real business value."
              />
              <ValueCard
                icon={<Briefcase className="h-12 w-12 text-purple-600" />}
                title="Ethical AI Practices"
                description="We are committed to developing and deploying AI responsibly, ensuring transparency, fairness, and privacy in all our solutions."
              />
              <ValueCard
                icon={<Award className="h-12 w-12 text-purple-600" />}
                title="Excellence in Execution"
                description="We strive for excellence in every project, delivering high-quality solutions that exceed expectations and drive measurable results."
              />
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
            <p className="text-gray-700 mb-4">
              We're always looking for talented individuals who are passionate about AI and want to make a difference. If you're interested in joining our team, check out our current openings:
            </p>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-purple-700 transition duration-300">
              View Career Opportunities
            </button>
          </section>
        </div>
      </div>
    </>
  );
};

const TeamMember: React.FC<{ name: string; title: string; bio: string }> = ({ name, title, bio }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-purple-600 mb-2">{title}</p>
      <p className="text-gray-600">{bio}</p>
    </div>
  );
};

const ValueCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-4">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default AboutUsPage;