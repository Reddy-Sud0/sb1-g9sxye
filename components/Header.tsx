import { useState } from 'react'
import Link from 'next/link'
import { Brain, Menu, X, Search, Globe, Phone, Mail } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-purple-600" />
            <span className="text-xl font-bold text-gray-800">Inteliverse</span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <div className="relative group">
              <Link href="/services" className="text-gray-600 hover:text-purple-600">Services</Link>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
                <Link href="/services/ai-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">AI Solutions</Link>
                <Link href="/services/data-science" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Data Science</Link>
                <Link href="/services/business-intelligence" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Business Intelligence</Link>
                <Link href="/services/rpa" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">RPA</Link>
                <Link href="/services/cloud-computing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cloud Computing</Link>
              </div>
            </div>
            <div className="relative group">
              <Link href="/industries" className="text-gray-600 hover:text-purple-600">Industries</Link>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
                <Link href="/industries/ecommerce" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">eCommerce</Link>
                <Link href="/industries/healthcare" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Healthcare</Link>
                <Link href="/industries/recruitment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Recruitment</Link>
                <Link href="/industries/finance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Finance</Link>
                <Link href="/industries/startups" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Startups</Link>
              </div>
            </div>
            <Link href="/case-studies" className="text-gray-600 hover:text-purple-600">Case Studies</Link>
            <div className="relative group">
              <Link href="/about-us" className="text-gray-600 hover:text-purple-600">About Us</Link>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
                <Link href="/about-us/our-story" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Our Story</Link>
                <Link href="/about-us/leadership" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Leadership</Link>
                <Link href="/about-us/careers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Careers</Link>
              </div>
            </div>
            <div className="relative group">
              <Link href="/resources" className="text-gray-600 hover:text-purple-600">Resources</Link>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
                <Link href="/resources/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Blog</Link>
                <Link href="/resources/whitepapers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Whitepapers</Link>
                <Link href="/resources/webinars" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Webinars</Link>
                <Link href="/resources/podcasts" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Podcasts</Link>
              </div>
            </div>
            <Link href="/contact" className="text-gray-600 hover:text-purple-600">Contact</Link>
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
              <Link href="/services" className="text-gray-600 hover:text-purple-600">Services</Link>
              <Link href="/industries" className="text-gray-600 hover:text-purple-600">Industries</Link>
              <Link href="/case-studies" className="text-gray-600 hover:text-purple-600">Case Studies</Link>
              <Link href="/about-us" className="text-gray-600 hover:text-purple-600">About Us</Link>
              <Link href="/resources" className="text-gray-600 hover:text-purple-600">Resources</Link>
              <Link href="/contact" className="text-gray-600 hover:text-purple-600">Contact</Link>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300">
                Request a Consultation
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}