export default function MissionSection() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdfbfa] px-4">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-12 py-16">
        {/* Left: 2x2 Colored Squares */}
        <div className="grid grid-cols-2 grid-rows-2 gap-6">
          <div className="w-28 h-28 rounded-lg bg-gray-200 shadow-lg" />
          <div className="w-36 h-36 rounded-lg bg-blue-600 shadow-lg col-start-2 row-start-1" />
          <div className="w-28 h-28 rounded-lg bg-red-500 shadow-lg" />
          <div className="w-36 h-36 rounded-lg bg-gray-200 shadow-lg col-start-2 row-start-2" />
        </div>
        {/* Right: Mission Statement */}
        <div className="max-w-xl">
          <div className="text-red-500 font-semibold mb-2">OUR MISSION</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B2241] leading-tight mb-4">
            Dedication to<br />innovation
          </h2>
          <p className="text-gray-700 text-base md:text-lg">
            We believe that every project is an opportunity to create something remarkable – a chance to push boundaries, challenge norms, and exceed expectations. We approach each endeavor with curiosity and creativity, striving to craft solutions that not only meet your needs but also propel you ahead of the curve.
          </p>
        </div>
      </div>
    </div>
  );
}