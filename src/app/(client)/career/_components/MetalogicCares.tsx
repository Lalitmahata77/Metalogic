import {
  Gift,
  Heart,
  Umbrella,
  BookOpenCheck,
  Cookie,
  Users
} from "lucide-react";

export default function MetalogicCares() {
  const benefits = [
    {
      icon: <Gift size={36} strokeWidth={2} className="text-[#0B2241]" />,
      label: "Performance Bonus",
    },
    {
      icon: <Heart size={36} strokeWidth={2} className="text-red-500" />,
      label: "Health Benefits",
    },
    {
      icon: <Umbrella size={36} strokeWidth={2} className="text-red-400" />,
      label: "Paid Leave Policy",
    },
    {
      icon: <BookOpenCheck size={36} strokeWidth={2} className="text-blue-400" />,
      label: "Learning And Development",
    },
    {
      icon: <Cookie size={36} strokeWidth={2} className="text-yellow-500" />,
      label: "Food Credit",
    },
    {
      icon: <Users size={36} strokeWidth={2} className="text-yellow-400" />,
      label: "Team Activities",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFDDC] flex items-center justify-center px-4 py-12">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-start gap-12">
        {/* Left: Heading and Description */}
        <div className="md:w-1/3">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2241] mb-4">
            Metalogic Cares For You
          </h2>
          <p className="text-[#0B2241] text-base">
            We're less about valuing perks and more about valuing people. Our employee benefits are built around enhancing your wellbeing – at work and at home
          </p>
        </div>
        {/* Right: Benefits Grid */}
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md flex flex-col items-center justify-center p-8 min-h-[140px] transition hover:shadow-lg"
            >
              <div className="mb-4">{benefit.icon}</div>
              <div className="text-[#0B2241] font-medium text-center">{benefit.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}