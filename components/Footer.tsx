import Link from 'next/link'
import { Brain, Linkedin, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold">Inteliverse</span>
            </Link>
            <p className="mt-2 text-sm">Transforming businesses with intelligent AI solutions</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="hover:text-purple-400">Services</Link></li>
              <li><Link href="/industries" className="hover:text-purple-400">Industries</Link></li>
              <li><Link href="/case-studies" className="hover:text-purple-400">Case Studies</Link></li>
              <li><Link href="/about-us" className="hover:text-purple-400">About Us</Link></li>
              <li><Link href="/resources" className="hover:text-purple-400">Resources</Link></li>
              <li><Link href="/contact" className="hover:text-purple-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="hover:text-purple-400">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-purple-400">Terms of Service</Link></li>
              <li><Link href="/sitemap" className="hover:text-purple-400">Sitemap</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6 hover:text-purple-400" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-6 w-6 hover:text-purple-400" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-6 w-6 hover:text-purple-400" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Inteliverse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}