'use client';

export default function Approach() {
  return (
    <section
      className="relative bg-cover bg-center text-center text-[#031B4E] py-20 px-4"
      style={{  backgroundImage: `url('/assets/back.png')`, }} // Replace with your actual background path
    >
      <div className="max-w-4xl mx-auto">
        <h4 className="text-red-600 font-semibold text-sm mb-2 tracking-wide uppercase">
          Our Approach
        </h4>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Where Vision Meets <br /> Execution
        </h2>
        <p className="text-gray-800 text-base md:text-lg leading-relaxed">
          At Metalogic, we navigate the digital landscape with innovation, <span className="font-medium">collaboration</span>,
          and a dedicated focus on client success. Rooted in a commitment to pioneering solutions and anticipating future needs,
          our client relationships go beyond transactions. Understanding unique challenges, we craft solutions that align
          effortlessly with business objectives. With a user-centric design philosophy, agile methodologies, and a commitment
          to continuous learning, we promise transformative success at Metalogic Software Pvt. Ltd.
        </p>
      </div>
    </section>
  );
}
