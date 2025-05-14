import { ArrowRight } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';

export default function Hero1() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#001C48] to-[#003A95] px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Transforming Today For Digital Tomorrow</title>
      </Head>
      
      <div className="text-center text-white max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Transforming Today
          <span className="block mt-2">For <br /> Digital Tomorrow</span>
        </h1>
        
        <p className="text-lg md:text-xl mb-8 mx-auto max-w-3xl leading-relaxed">
          We are committed to offering state-of-the-art software solutions that <br />
          enable companies to prosper in the digital world.
        </p>

        <Link
          href="#"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-red-500 rounded-lg transition-colors duration-300 font-medium"
          aria-label="Learn more about our solutions"
        >
          Learn More
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}