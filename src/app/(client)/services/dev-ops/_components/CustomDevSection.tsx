import Image from "next/image";

export default function CustomDevSection() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Text Content */}
        <div className="md:w-1/2">
          <div className="mb-2 text-sm font-semibold text-red-600 tracking-wide">
         Devops Solution
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#16244c] mb-6">
Agile Development <br /> with  DevOps <span className=" text-green-500">Profit</span>  <br /> Paradise          </h1>
          <p className="text-gray-700 text-base md:text-lg">
          Achieve agility in your software development lifecycle through our DevOps services, ensuring rapid, high-quality releases and adapting to the evolving needs of your business.

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