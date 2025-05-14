import Image from "next/image";

export default function ProjectCTA() {
  return (
    <section className="flex justify-center items-center py-12 bg-white">
      <div className="flex flex-col md:flex-row items-center bg-green-100 rounded-2xl w-full max-w-5xl px-8 py-8 gap-72">
        {/* Illustration */}
        <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
          <Image
            src="/assets/photo.png" // update path if needed
            alt="Contact Illustration"
            width={180}
            height={180}
            className="w-44 h-44 object-contain"
            priority
          />
        </div>
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a174e] mb-2">
            Have a Project in<br className="hidden md:block" /> Mind?
          </h2>
          <p className="text-gray-700 mb-4">
            Let is Connect and Ignite Success!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-2 rounded bg-[#0a174e] text-white font-semibold shadow hover:bg-[#11235a] transition-colors"
          >
            Get Your Quote
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}