// pages/progress.js
export default function ProgressPage() {
  const steps = [
    {
      id: 1,
      title: "Ideate",
      description: "Let's brainstorm together and explore creative ideas to solve your unique challenges.",
      position: "right",
    },
    {
      id: 2,
      title: "Design",
      description: "Our skilled designers will craft visually stunning and intuitive user interfaces that enhance the user experience.",
      position: "left",
    },
    {
      id: 3,
      title: "Develop",
      description: "Our expert developers will turn your approved design into a robust and scalable software solution.",
      position: "right",
    },
    {
      id: 4,
      title: "Launch",
      description: "We'll meticulously prepare for a successful launch, ensuring a smooth transition from development to deployment.",
      position: "left",
    },
    {
      id: 5,
      title: "Scale",
      description: "As your business grows, we'll work with you to scale your software and accommodate increasing demands.",
      position: "right",
    },
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold text-center text-gray-700 mb-12">Design, Build And Scale Your Vision With Us</h1>
      <div className="relative mx-auto max-w-4xl">
        {steps.map((step) => (
          <div key={step.id} className="flex items-center justify-between mb-12 relative">
            {step.position === "left" && (
              <div className="w-1/2 text-right pr-6">
                <p className="text-lg text-blue-900">{step.description}</p>
              </div>
            )}
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-bold z-10">
              {step.id}
            </div>
            {step.position === "right" && (
              <div className="w-1/2 text-left pl-6">
                <p className="text-lg text-blue-900">{step.description}</p>
              </div>
            )}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-gradient from-pink-500 to-blue-600"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
