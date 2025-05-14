export default function Offering() {
  const sections = [
    {
      title: "UI/UX",
      items: [
        "Design and Digital Modeling",
        "Infrastructure of Data",
        "Designing Interactions",
        "Enhancements in accessibility",
        "Maintenance of Content and Assets",
        "Cross-platform Experience Design",
      ],
    },
    {
      title: "Digital Products",
      items: [
        "Creates Systems",
        "Interface Design",
        "Enhancements in functionality",
        "Revamping the user interface",
      ],
    },
    {
      title: "Branding",
      items: [
        "Branding Websites",
        "Brand Identity Design",
        "Rebranding",
        "Marketing collaterals & Templating",
        "Brand house Strategising",
        "Interface Modernization",
      ],
    },
    {
      title: "Research",
      items: [
        "UX strategy",
        "UX consultation",
        "UX Standardisation",
        "Competitor analysis",
        "Design Auditing",
        "Design thinking",
        "Usability testing",
      ],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
        Our UI/UX & Branding Offering
      </h1>
      <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
        Offering aficionado solutions for all sizes of design and branding problems.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {sections.map(({ title, items }) => (
          <div key={title} className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">{title}</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
