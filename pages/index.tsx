import Head from 'next/head'
import { Brain, BarChart, Zap, DollarSign } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Inteliverse - AI Solutions for Business Transformation</title>
        <meta name="description" content="Transform your business with Inteliverse's cutting-edge AI solutions. Unlock intelligent automation, data insights, and growth." />
      </Head>
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

      {/* Add more sections here */}
    </>
  )
}