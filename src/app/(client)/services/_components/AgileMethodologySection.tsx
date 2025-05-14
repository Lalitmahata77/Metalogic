import Image from "next/image";

export default function AgileMethodologySection() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-8 py-16">
        {/* Left: Illustration */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/assets/agile.png"
            alt="Agile Development Illustration"
            className="max-w-md w-full"
            width={250}
            height={250}
          />
        </div>
        {/* Right: Content */}
        <div className="md:w-1/2 flex flex-col items-start">
          <span className="text-red-600 font-semibold mb-2 tracking-wide">
            OUR METHODOLOGY
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#16244c] mb-6 leading-tight">
            Agile development<br />methodology
          </h2>
          <p className="text-gray-700 text-base md:text-lg">
            We use the agile development methodology to minimize risk, such as bugs, cost overruns, and changing requirements, when adding new functionality. In our approach, we develop the software in iterations that contain mini-increments of the new functionality. We consider different forms of the agile development method, including scrum, crystal, extreme programming (XP), and feature-driven development (FDD).
          </p>
        </div>
      </div>
    </div>
  );
}