'use client';

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [showServices, setShowServices] = useState(false);

  const services = [
    {
      title: 'Custom Software Development',
      desc: 'Tailored software solutions for your needs.',
      link: '/services/software-development'
    },
    {
      title: 'Web Development',
      desc: 'Websites that work on all devices.',
      link: '/services/web-development'
    },
    {
      title: 'Mobile App Development',
      desc: 'Apps for phones and tablets.',
      link: '/services/mobile-app-development'
    },
    {
      title: 'Cloud Computing Services',
      desc: 'Use the internet to improve your business.',
      link: '/services/cloud-computing'
    },
    {
      title: 'Quality Assurance and Testing',
      desc: 'Checking software for reliability.',
      link: '/services/quality-assurance'
    },
    {
      title: 'UI/UX Designing',
      desc: 'Creating user-friendly interfaces.',
      link: '/services/ui-ux-designing'
    },
    {
      title: 'Maintenance and Support',
      desc: 'Keeping your software running smoothly.',
      link: '/services/support'
    },
    {
      title: 'Dev Ops',
      desc: 'Faster and safer software delivery.',
      link: '/services/dev-ops'
    },
    {
      title: 'Blockchain Solutions',
      desc: 'Secure technology for your business.',
      link: '/services/blockchain-solutions'
    }
  ];

  return (
    <header className="bg-[#061a3a] text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="bg-red-600 rounded-full w-10 h-10 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">M</span>
          </div>
          <span className="text-2xl font-semibold">MetaLogic</span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-white font-medium">
          <Link href="/" className="relative group">
            <span className="pb-1 border-b-2 border-red-500">Home</span>
          </Link>

          <div className="relative">
            <button
              className="flex items-center space-x-1 cursor-pointer focus:outline-none"
              onClick={() => setShowServices(!showServices)}
            >
              <span>Services</span>
              <ChevronDown size={16} />
            </button>
            {showServices && (
              <div className="absolute top-full left-0 mt-4 bg-[#061a3a] text-white rounded-md shadow-xl w-[700px] grid grid-cols-3 gap-4 p-4 z-50 border border-gray-700">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={service.link}
                    onClick={() => setShowServices(false)}
                    className="hover:bg-[#0b2a5a] p-2 rounded cursor-pointer"
                  >
                    <h4 className="font-semibold text-sm mb-1">{service.title}</h4>
                    <p className="text-xs text-gray-300">{service.desc}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/career" className="hover:text-red-400">Career</Link>
          <Link href="/blogs" className="hover:text-red-400">Blogs</Link>
          <Link href="/about" className="hover:text-red-400">About Us</Link>
        </nav>

        <Link
          href="/contact"
          className="ml-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md font-semibold"
        >
          Get in Touch
        </Link>
      </div>
    </header>
  );
}