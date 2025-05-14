
import Image from "next/image";

export default function PartnershipSection() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
        {/* Left: Illustration */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/assets/photo.png" // Ensure this file exists in /public
            alt="Partnership Illustration"
            width={400}
            height={400}
            className="w-full max-w-md h-auto"
            priority
          />
        </div>
        {/* Right: Text Content */}
        <div className="flex-1">
          <div className="mb-2 text-sm font-semibold text-red-600 uppercase">
            Benefits of Working With Us
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Reliability in<br />Partnership
          </h1>
          <p className="text-gray-700 text-base md:text-lg">
            Rely on us for more than just solutions-rely on a steadfast partnership. Discover the assurance of reliability, commitment, and a shared commitment to your sustained success.
          </p>
        </div>
      </div>
    </main>
  );
}