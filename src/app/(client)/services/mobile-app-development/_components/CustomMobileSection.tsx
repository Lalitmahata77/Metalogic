import Image from "next/image";

export default function CustomMobileSection() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Text Content */}
        <div className="md:w-1/2">
          <div className="mb-2 text-sm font-semibold text-red-600 tracking-wide">
            Mobile App Development

          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#16244c] mb-6">
          Seamless iOS and Android <br /> Development
          </h1>
          <p className="text-gray-700 text-base md:text-lg">
            Stay ahead in the digital landscape with our innovative mobile app solutions. Our team combines creativity and technical expertise to develop custom applications tailored to your business needs.
          </p>
        </div>
        {/* Right: Illustration */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/assets/work.png"
            alt="Custom Software Solutions Illustration"
            className="max-w-md w-full"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}