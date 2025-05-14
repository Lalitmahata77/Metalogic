import Image from "next/image";

const cards = [
  {
    title: "Discover",
    desc: "Product scaffolding may be made more effective by conducting extensive research, reference, and testing.",
    icon: "/assets/uiux.png", // Place this in /public
    tags: ["UX Research", "R&D", "Auditing", "Competitor Analysis"],
  },
  {
    title: "Define",
    desc: "Putting characters, processes, and tactics inside robust frames of efficiency and beauty.",
    icon: "/assets/uiux.png", // Place this in /public
    tags: ["Idea, Plan, and Structure", "Positioning and Branding", "Design Direction"],
  },
  {
    title: "Design",
    desc: "Bringing forward early concepts using creative boundaries and markers within the design philosophy.",
    icon: "/assets/uiux.png", // Place this in /public

    tags: ["Interface Design", "Experience Design", "Creating Interactions", "feasibility assurance"],
  },
  {
    title: "Delivery",
    desc: "Completing design assurances through extended excursions and optimization.",
    icon: "/assets/uiux.png", // Place this in /public
    tags: ["Dynamic Prototype", "After-launch optimization", "Dev Handover", "Iteration and Testing"],
  },
];

export default function DesignExperienceSection() {
  return (
    <section className="bg-[#fdfbe9] py-12 px-2 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#131d3c] mb-4">
          Authentic, Aesthetic &<br />
          Affirmative design experiences
        </h2>
        {/* Subheading */}
        <p className="text-gray-700 mb-10 max-w-3xl">
          Positioned as an enthusiast leading the way in the industry, our team at the forefront champions the "design-first" approach. Our skilled UX/UI designers are proven experts dedicated to promoting a context-driven design philosophy that spans across the entire spectrum of services within this field.
        </p>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl shadow-md p-6 flex flex-col md:flex-row items-start gap-5"
            >
              <div>
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={80}
                  height={80}
                  className="rounded-xl"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#131d3c] mb-1">{card.title}</h3>
                <p className="text-gray-700 mb-3 text-sm">{card.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium shadow"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
