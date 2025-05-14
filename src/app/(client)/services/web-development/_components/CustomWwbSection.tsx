import Image from "next/image";

export default function CustomWebSection() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Text Content */}
        <div className="md:w-1/2">
          <div className="mb-2 text-lg font-semibold text-red-600 tracking-wide">
            Website Development
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#16244c] mb-6">
Scalable & Seamless Web Development

          </h1>
          <p className="text-gray-700 text-base md:text-lg">
          Engage users with lightning-fast and reliable Progressive Web Apps. We harness the power of modern web technologies to deliver app-like experiences directly through browsers.

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