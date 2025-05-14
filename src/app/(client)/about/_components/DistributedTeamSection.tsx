import Image from "next/image";

export default function DistributedTeamSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] bg-white">
      <h2 className="text-4xl md:text-5xl font-bold text-[#0a174e] text-center mt-8 mb-8">
        We Are a Distributed Team
      </h2>
      <div className="flex justify-center">
        <Image
          src="/assets/earth.png" // Make sure this matches your image filename in /public
          alt="Distributed Team Globe"
          width={400}
          height={400}
          className="mx-auto"
          priority
        />
      </div>
    </section>
  );
}