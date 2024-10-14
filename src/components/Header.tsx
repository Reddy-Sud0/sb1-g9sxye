import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Menu, X, Search, Globe, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-purple-600" />
            <span className="text-xl font-bold text-gray-800">Inteliverse</span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link to="/services" className="text-gray-600 hover:text-purple-600">Services</Link>
            <Link to="/industries" className="text-gray-600 hover:text-purple-600">Industries</Link>
            <Link to="/case-studies" className="text-gray-600 hover:text-purple-600">Case Studies</Link>
            <Link to="/about-us" className="text-gray-600 hover:text-purple-600">About Us</Link>
            <Link to="/resources" className="text-gray-600 hover:text-purple-600">Resources</Link>
            <Link to="/contact" className="text-gray-600 hover:text-purple-600">Contact</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="hidden md:block bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300">
              Request a Consultation
            </button>
            <div className="hidden md:flex items-center space-x-2">
              <Phone className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-600">+1 (555) 123-4567</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <Mail className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-600">info@inteliverse.com</span>
            </div>
            <Search className="h-6 w-6 text-gray-600 cursor-pointer" />
            <Globe className="h-6 w-6 text-gray-600 cursor-pointer" />
            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-2">
              <Link to="/services" className="text-gray-600 hover:text-purple-600">Services</Link>
              <Link to="/industries" className="text-gray-600 hover:text-purple-600">Industries</Link>
              <Link to="/case-studies" className="text-gray-600 hover:text-purple-600">Case Studies</Link>
              <Link to="/about-us" className="text-gray-600 hover:text-purple-600">About Us</Link>
              <Link to="/resources" className="text-gray-600 hover:text-purple-600">Resources</Link>
              <Link to="/contact" className="text-gray-600 hover:text-purple-600">Contact</Link>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300">
                Request a Consultation
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;