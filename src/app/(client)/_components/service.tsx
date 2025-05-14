export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center px-6 py-16">
      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-16">
        {/* Left Column: Service Cards */}
        <div className="flex flex-col gap-8 w-full md:w-1/2 items-center">
          {/* Mobile Development */}
          <ServiceCard
            gradient
            icon={
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <rect x="7" y="2" width="10" height="20" rx="2" />
                <circle cx="12" cy="18" r="1" />
              </svg>
            }
            title="Mobile Development"
            description="From streamlining operations to data-driven insights, we create solutions that empower your business to thrive in the digital age."
          />
          {/* UI/UX */}
          <ServiceCard
                      icon={<svg className="w-12 h-12 text-[#ff6a6a]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <rect x="3" y="4" width="18" height="14" rx="2" />
                          <path d="M8 20h8" />
                      </svg>}
                      title="UI/UX"
                      description="We create interfaces that are not just visually appealing, but also intuitive and conversion-focused." gradient={undefined}          />
          {/* Web Development */}
          <ServiceCard
                      icon={<svg className="w-12 h-12 text-[#ff6a6a]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M2 12h20" />
                          <path d="M12 2a15.3 15.3 0 010 20" />
                          <path d="M12 2a15.3 15.3 0 000 20" />
                      </svg>}
                      title="Web Development"
                      description="Our creative designers and skilled developers collaborate to create stunning websites that engage visitors and convert them into loyal customers." gradient={undefined}          />
          {/* Brand & Marketing */}
          <ServiceCard
                      icon={<svg className="w-12 h-12 text-[#ff6a6a]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path d="M12 21c-4.97-4.97-8-8-8-11.5A5.5 5.5 0 0112 4a5.5 5.5 0 018 5.5c0 3.5-3.03 6.53-8 11.5z" />
                      </svg>}
                      title="Brand & Marketing"
                      description="Our branding experts craft strategies, logos, and visuals that resonate with your target audience, leaving a lasting impression." gradient={undefined}          />
          {/* Internship/Training */}
          <ServiceCard
            gradient
            icon={
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <rect x="7" y="2" width="10" height="20" rx="2" />
                <rect x="2" y="7" width="20" height="10" rx="2" />
              </svg>
            }
            title="Internship/Training"
            description="Our training programs and workshops cover a range of topics, from software utilization to design principles, enhancing your team's expertise."
          />
        </div>

        {/* Right Column: Main Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start pt-4">
          <span className="text-gray-800 font-medium mb-2 uppercase tracking-wide">
            Our Services
          </span>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
            Empowering <br /> Your Vision
          </h1>
          <p className="text-gray-600 mb-8 max-w-lg leading-relaxed">
            Our range of offerings is carefully curated to cater to your diverse needs, ensuring that your digital journey is seamless, captivating, and results-driven.
          </p>
          <button className="inline-flex items-center px-6 py-3 border border-[#ff6a6a] text-[#ff6a6a] rounded-lg font-medium hover:bg-[#ff6a6a]/10 transition-all duration-300">
            Learn More
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// Service Card Component
type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient?: boolean;
};

function ServiceCard({ icon, title, description, gradient }: ServiceCardProps) {
  return (
    <div
      className={`flex flex-col items-center text-center p-8 rounded-xl shadow-lg w-80 transition-transform transform hover:scale-105 ${
        gradient
          ? "bg-gradient-to-br from-[#ff6a6a] to-[#ff4e8e] text-white"
          : "bg-white border border-gray-200 text-gray-900"
      }`}
    >
      <div
        className={`mb-4 flex items-center justify-center rounded-full p-4 ${
          gradient ? "" : "bg-[#ff6a6a]/10"
        }`}
      >
        {icon}
      </div>
      <h3 className={`text-lg font-bold mb-2 ${gradient ? "text-white" : "text-gray-900"}`}>
        {title}
      </h3>
      <p className={`text-sm leading-relaxed ${gradient ? "text-white/90" : "text-gray-700"}`}>
        {description}
      </p>
    </div>
  );
}