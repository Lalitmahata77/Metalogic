import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function BlogHighlight() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-[60vh] bg-white px-4 py-12">
      {/* Blog Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="rounded-2xl overflow-hidden shadow-lg max-w-[540px] w-full">
          <Image
            src="/assets/evolution.png" 
            alt="Blockchain Illustration"
            width={800}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
      {/* Blog Content */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-12 flex flex-col items-start">
        <span className="text-red-600 font-semibold text-lg mb-2">Blogs</span>
        <h1 className="text-[#0a174e] text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ lineHeight: 1.1 }}>
          Revolutionizing Software Development:<br className="hidden md:block" />
          Exploring Innovative Uses of Blockchain
        </h1>
        <p className="text-gray-600 text-base md:text-lg mb-6 max-w-xl">
          Blockchain technology, initially known for its association with cryptocurrencies, has transcended its initial boundaries to become a transformative force in various industries. In the realm of software development, blockchain offers a myriad of innovative applications that go beyond conventional
        </p>
        <a
          href="#"
          className="flex items-center text-blue-600 font-medium hover:underline group transition"
        >
          Read More
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}