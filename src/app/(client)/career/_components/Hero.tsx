'use client';

export default function CareerHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#c1c1c1] to-white flex flex-col items-center justify-center text-center px-4">
      {/* Floating stars */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-pulse text-white text-xl absolute top-10 left-1/2 transform -translate-x-1/2">+</div>
        <div className="animate-pulse text-white text-sm absolute top-1/3 left-1/3">+</div>
        <div className="animate-pulse text-white text-xs absolute top-1/2 right-1/4">+</div>
      </div>

      <h2 className="text-lg font-semibold text-black mb-2">Careers</h2>

      <h1 className="text-4xl sm:text-5xl font-bold text-black mb-6">
        Navigate Your Next <br />
        <span className="text-green-600">Career</span> Move
      </h1>

      {/* Bubble behind text */}
      <div className="relative z-10 bg-white px-8 py-6 rounded-full shadow-lg max-w-md">
        <p className="text-black text-base sm:text-lg mb-4">
          We're continuously searching for the right talent. Check if you're a good match.
        </p>
        <button className="bg-[#001C48] text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-[#003A95] transition">
          Explore Opportunities
        </button>
      </div>

      {/* Bubble background decorations */}
      <div className="absolute z-0 bottom-10 flex gap-6 opacity-30">
        <div className="w-40 h-40 bg-white rounded-full"></div>
        <div className="w-64 h-64 bg-white rounded-full"></div>
        <div className="w-24 h-24 bg-white rounded-full"></div>
      </div>
    </section>
  );
}

