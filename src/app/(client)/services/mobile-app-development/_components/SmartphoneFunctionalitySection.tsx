import {
  MapPin,
  Wallet,
  MessageCircle,
  RefreshCcw,
  Mic,
  Bot,
  CalendarClock,
  UserCog,
  QrCode,
  Bell,
} from "lucide-react";

const features = [
  {
    icon: <MapPin size={32} className="text-white" />,
    bg: "bg-red-200",
    iconBg: "bg-red-400",
    title: "Geolocation Management",
  },
  {
    icon: <Wallet size={32} className="text-white" />,
    bg: "bg-green-100",
    iconBg: "bg-green-400",
    title: "Payments",
  },
  {
    icon: <MessageCircle size={32} className="text-white" />,
    bg: "bg-blue-100",
    iconBg: "bg-blue-400",
    title: "Messaging & Video calling",
  },
  {
    icon: <RefreshCcw size={32} className="text-white" />,
    bg: "bg-green-100",
    iconBg: "bg-green-400",
    title: "Multi-device Syncronization",
  },
  {
    icon: <Mic size={32} className="text-white" />,
    bg: "bg-yellow-100",
    iconBg: "bg-yellow-400",
    title: "Voice recognization & Recording",
  },
  {
    icon: <Bot size={32} className="text-white" />,
    bg: "bg-red-100",
    iconBg: "bg-red-400",
    title: "ChatBots",
  },
  {
    icon: <CalendarClock size={32} className="text-white" />,
    bg: "bg-blue-100",
    iconBg: "bg-blue-400",
    title: "Scheduling & Booking",
  },
  {
    icon: <UserCog size={32} className="text-white" />,
    bg: "bg-yellow-100",
    iconBg: "bg-yellow-400",
    title: "UX Personalization",
  },
  {
    icon: <QrCode size={32} className="text-white" />,
    bg: "bg-green-100",
    iconBg: "bg-green-400",
    title: "QR Scanning",
  },
  {
    icon: <Bell size={32} className="text-white" />,
    bg: "bg-yellow-100",
    iconBg: "bg-yellow-400",
    title: "Push Notification",
  },
];

export default function SmartphoneFunctionalitySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0a174e] mb-4">
          Creating Every Smartphone Functionality That Today's Users Require
        </h2>
        {/* Subheading */}
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
          Whether developing a mobile app for a business or a consumer, we depend on our knowledge of various technologies and tools to create apps that are genuinely beneficial and worthy of users' screen real estate. Even if we can duplicate the functionalities, no two applications are the same since we give each one a special value proposition and customize the functionality to meet the demands of its target user base.
        </p>
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border border-gray-200 p-6 flex flex-col items-start shadow-sm bg-white hover:shadow-md transition`}
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-lg mb-4 ${feature.iconBg}`}>
                {feature.icon}
              </div>
              <span className="font-semibold text-[#0a174e] text-base">{feature.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}