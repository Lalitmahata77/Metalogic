'use client';

import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const servicesRef = useRef<HTMLDivElement>(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100vh] bg-gradient-to-b from-[#001C48] to-[#003A95] text-white flex flex-col justify-center items-center px-6">
      {/* Main Content */}
      <div className="max-w-5xl text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
          Driving Innovations <br />
          <span className="text-white/90">And Empowering Business</span>
        </h1>
        <p className="text-lg md:text-xl text-white/80 font-medium max-w-3xl mx-auto">
          Metalogic envisions a future where technology serves as a catalyst for limitless human potential,
          fostering innovation and empowering organizations to thrive in a transformative digital era.
        </p>
      </div>

      {/* Stats Box */}
      <div className="absolute -bottom-2 w-full max-w-5xl px-4">
        <div className="bg-white text-gray-900 rounded-2xl shadow-2xl grid grid-cols-1 sm:grid-cols-3 gap-6 text-center py-8 px-6">
          <div>
            <h3 className="text-4xl font-extrabold text-teal-600">32+</h3>
            <p className="mt-2 font-semibold">Projects Completed</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-teal-600">50+</h3>
            <p className="mt-2 font-semibold">Satisfied Clients</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-teal-600">18+</h3>
            <p className="mt-2 font-semibold">Experts</p>
          </div>
        </div>
      </div>

      {/* Chevron Button */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToServices}
          className="p-2 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Scroll to Services"
        >
          <ChevronDown size={36} className="animate-bounce" />
        </button>
      </div>

      {/* Placeholder Ref for Services */}
      <div ref={servicesRef}></div>
    </section>
  );
}
