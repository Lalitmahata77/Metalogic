export default function CustomSoftwareBenefits() {
  const benefits = [
    {
      text: (
        <>
          Functionality is <span className="font-semibold">fully tailored</span> to your requirements.
        </>
      ),
    },
    {
      text: (
        <>
          <span className="font-semibold">Flexibility</span> to evolve the solution when needed.
        </>
      ),
    },
    {
      text: (
        <>
          <span className="font-semibold">Short learning curve</span> due to tailored UX and UI.
        </>
      ),
    },
    {
      text: (
        <>
          Powerful <span className="font-semibold">security</span> of data and digital assets.
        </>
      ),
    },
    {
      text: (
        <>
          Functionality is <span className="font-semibold">fully tailored</span> to your requirements.
        </>
      ),
    },
    {
      text: (
        <>
          The ability to use <span className="font-semibold">advanced techs</span> (AI/ML, blockchain, IoT, etc.)
        </>
      ),
    },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col items-center py-16 px-4">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B2241] text-center mb-4">
        Major Benefits of custom<br className="hidden md:block" /> software development
      </h2>
      {/* Subheading */}
      <p className="text-gray-500 text-center mb-12 max-w-2xl">
        Stay ahead of industry trends and compliance requirements with software that adapts to evolving standards.
      </p>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {benefits.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-xl shadow-md flex items-start gap-3 p-6 min-h-[120px] transition hover:shadow-lg"
          >
            {/* Star Icon */}
            <span className="flex-shrink-0 mt-1">
              <svg
                width={36}
                height={36}
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-yellow-400"
              >
                <path
                  d="M18 3l4.09 8.26L31 12.27l-6 5.84L26.18 29 18 24.27 9.82 29 11 18.11l-6-5.84 8.91-1.01L18 3z"
                  fill="#FDB022"
                />
              </svg>
            </span>
            {/* Benefit Text */}
            <span className="text-gray-800 text-base">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
