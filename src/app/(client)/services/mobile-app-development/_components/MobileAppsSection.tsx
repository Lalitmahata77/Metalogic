import { Star } from "lucide-react";

const features = [
  {
    text: "Apps available on all iOS, watchOS, Android, and Wear OS platforms",
  },
  {
    text: "Apps that are native and cross-platform (Xamarin, Flutter, React Native)",
  },
  {
    text: "Business applications (for internal usage) and paid goods",
  },
  {
    text: "Solutions utilizing both mobile apps and web apps (including PWAs*)",
  },
];

export default function MobileAppsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-gray-700">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          We offer mobile devices<br />
          <span className="font-bold">
            applications for every platform, every device, and every audience, such as:
          </span>
        </h2>
        {/* Features */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-gray-50 rounded-2xl shadow-sm px-6 py-8 w-full md:w-1/4 min-w-[220px]"
            >
              <Star size={44} className="text-orange-400 mb-4" fill="#fbbf24" />
              <p className="text-center text-gray-800">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}