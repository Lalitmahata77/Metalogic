// pages/index.js


const Why = () => {
  return (
   <div className="min-h-screen bg-gradient-to-b from-[#001C48] to-[#003A95] flex items-center justify-center">
      <div className="bg-[#23395d]/90 rounded-xl shadow-lg p-10 max-w-4xl w-full border border-white/10">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Why MetaLogic <span className="text-red-400">?</span>
        </h1>
        <p className="text-gray-200 mb-8">
          Innovation is our driving force. We explore the latest tech trends to deliver groundbreaking solutions that keep you ahead.
        </p>
        <div className="relative pl-8 ml-28">
          {/* Vertical timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-1 bg-gradient-to-b from-pink-400 to-blue-400 rounded-full"></div>
          {/* Timeline point and content */}
          <div className="mb-8 flex items-start">
            <span className="w-5 h-5 bg-gradient-to-br from-pink-400 to-blue-400 rounded-full border-4 border-[#23395d] absolute -left-3"></span>
            <div>
              <h2 className="text-lg md:text-xl font-bold text-white">Innovation at the Core</h2>
              <p className="text-gray-200">
                We thrive on innovation and continuously explore the latest technologies to provide you with groundbreaking solutions that keep you ahead of the curve.
              </p>
            </div>
          </div>
          <div className="mb-8 flex items-start">
            <span className="w-5 h-5 bg-gradient-to-br from-pink-400 to-blue-400 rounded-full border-4 border-[#23395d] absolute -left-3 mt-1"></span>
            <div>
              <h2 className="text-lg md:text-xl font-bold text-white">Collaboration is the key</h2>
              <p className="text-gray-200">
                We work closely with you to understand your goals, challenges, and aspirations, ensuring our solutions align perfectly with your business objectives.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="w-5 h-5 bg-gradient-to-br from-pink-400 to-blue-400 rounded-full border-4 border-[#23395d] absolute -left-3 mt-1"></span>
            <div>
              <h2 className="text-lg md:text-xl font-bold text-white">Your Success, Our Purpose</h2>
              <p className="text-gray-200">
                Our solutions are designed to enhance efficiency, boost productivity, and drive ROI, giving you a competitive edge in your industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
