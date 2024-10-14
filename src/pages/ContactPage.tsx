import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Inteliverse | AI Solutions Provider</title>
        <meta name="description" content="Get in touch with Inteliverse for AI solutions tailored to your business needs. Schedule a consultation or request more information." />
      </Helmet>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Ready to transform your business with AI? Get in touch with our team of experts to discuss your needs and explore how Inteliverse can help you achieve your goals.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
                  <input type="text" id="company" name="company" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-purple-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-purple-700 transition duration-300">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-purple-600 mr-2" />
                  <span>info@inteliverse.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-purple-600 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-purple-600 mr-2" />
                  <span>123 AI Street, Tech City, CA 94000</span>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Schedule a Consultation</h2>
              <p className="mb-4">
                Want to discuss your AI needs in detail? Schedule a free consultation with one of our experts.
              </p>
              <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-purple-700 transition duration-300">
                Book a Consultation
              </button>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">FAQs</h2>
              <div className="space-y-4">
                <details className="bg-white p-4 rounded-lg shadow-md">
                  <summary className="font-semibold cursor-pointer">What industries do you serve?</summary>
                  <p className="mt-2">We serve a wide range of industries including e-commerce, healthcare, finance, technology, and more. Our AI solutions are tailored to meet the specific needs of each sector.</p>
                </details>
                <details className="bg-white p-4 rounded-lg shadow-md">
                  <summary className="font-semibold cursor-pointer">How long does it take to implement an AI solution?</summary>
                  <p className="mt-2">The implementation timeline varies depending on the complexity of the solution and your specific requirements. Typically, our projects range from a few weeks for simple integrations to several months for more comprehensive solutions.</p>
                </details>
                <details className="bg-white p-4 rounded-lg shadow-md">
                  <summary className="font-semibold cursor-pointer">Do you offer support after implementation?</summary>
                  <p className="mt-2">Yes, we provide ongoing support and maintenance for all our AI solutions. We also offer training to ensure your team can effectively use and manage the implemented systems.</p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;