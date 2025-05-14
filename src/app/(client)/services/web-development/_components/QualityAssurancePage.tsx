import {
  Target,
  HandCoins,
  Medal,
  ShieldCheck,
  Handshake,
  BookOpen,
} from "lucide-react";

const features = [
  {
    icon: <Target size={40} className="text-orange-400 bg-orange-100 rounded-full p-2" />,
    title: "precise scoping",
    desc: "We took great care to ensure that all software needs were fully specified, without any ambiguities or inconsistencies. This helps us precisely plan the project and avoid scope creep in the future.",
  },
  {
    icon: <HandCoins size={40} className="text-indigo-700 bg-indigo-100 rounded-full p-2" />,
    title: "Accurate cost projection",
    desc: "In order to provide our clients with accurate estimates, we compute the project cost after carefully reviewing the work breakdown structure and software needs.",
  },
  {
    icon: <Medal size={40} className="text-orange-600 bg-orange-100 rounded-full p-2" />,
    title: "Management of quality",
    desc: "Every step of the SDLC is integrated with quality assurance (QA) at Metalogic, ensuring that there are no serious flaws in the final product. Our quality management strategy complies with ISO 9001 requirements.",
  },
  {
    icon: <ShieldCheck size={40} className="text-indigo-900 bg-indigo-100 rounded-full p-2" />,
    title: "Robust security",
    desc: "We guarantee complete security for the project environment, digital assets and intellectual property belonging to our clients, and online software we develop.",
  },
  {
    icon: <Handshake size={40} className="text-orange-800 bg-indigo-100 rounded-full p-2" />,
    title: "Adaptable cooperation",
    desc: "We adjust our rate and manner of our interactions in line with our clients' requests to ensure transparency and steady progress in projects related to web development.",
  },
  {
    icon: <BookOpen size={40} className="text-orange-400 bg-yellow-100 rounded-full p-2" />,
    title: "The whole set of project papers",
    desc: "To enable future maintenance and modification of the program with ease, we meticulously record all significant choices made during the development process.",
  },
];

export default function QualityAssurancePage() {
  return (
    <main className="bg-white min-h-screen py-12 px-2">
      <section className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#0a174e] text-center mb-3">
          How the Web Development Project Quality Is Assured
        </h1>
        {/* Subheading */}
        <p className="text-gray-500 text-center max-w-3xl mx-auto mb-10">
          Other than technical expertise, a wide range of other factors may directly or indirectly affect the quality of the program and the project is conclusion. At Metalogic, we value every single one of them greatly.
        </p>
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-7 flex flex-col items-start hover:shadow-lg transition"
            >
              {f.icon}
              <h3 className="mt-5 mb-2 font-bold text-lg text-[#0a174e] capitalize">{f.title}</h3>
              <p className="text-gray-500 text-[15px]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}