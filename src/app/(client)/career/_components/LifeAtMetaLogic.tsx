import React from 'react';
import {
  Clock,
  UserCircle,
  BarChart2,
  Target,
  Users,
  Globe,
  Eye,
  Star,
} from 'lucide-react';

export default function LifeAtMetaLogic() {
  const benefits = [
    {
      icon: <Clock className="w-8 h-8 text-red-600" aria-label="Flexibility at work" />,
      title: 'Flexibility at work',
      desc: 'Do your best work at a time and place that fits us and your work-life balance.',
    },
    {
      icon: <UserCircle className="w-8 h-8 text-red-600" aria-label="Take Ownership" />,
      title: 'Take Ownership',
      desc: 'Take responsibility to solve customer challenges by acting as your own boss.',
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-red-600" aria-label="Unlimited Growth" />,
      title: 'Unlimited Growth',
      desc: 'With no inner circle... absolutely everyone has the same opportunity to thrive.',
    },
    {
      icon: <Target className="w-8 h-8 text-red-600" aria-label="Make Yourself Heard" />,
      title: 'Make Yourself Heard',
      desc: 'We encourage diverse perspectives - making it count in achieving our collective goals.',
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-400" aria-label="Team Spirit" />,
      title: 'Team Spirit',
      desc: 'Come together, work as one – this is at the heart of how we work, achieve results and collaborate.',
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" aria-label="Inclusivity at Work" />,
      title: 'Inclusivity at Work',
      desc: 'We believe that everyone is entitled to equal opportunities to learn, lead, and grow in all directions.',
    },
    {
      icon: <Eye className="w-8 h-8 text-red-600" aria-label="Transparent Environment" />,
      title: 'Transparent Environment',
      desc: 'Build confidence in a culture of trust and open communication - with each other and our clients.',
    },
    {
      icon: <Star className="w-8 h-8 text-red-600" aria-label="Fuel Your Passion" />,
      title: 'Fuel Your Passion',
      desc: 'We encourage you to strive, push the limits and achieve your dreams by being the best you can be.',
    },
  ];

  return (
    <div className="bg-white py-16 px-4">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <div className="text-red-600 font-semibold mb-2">Benefits</div>
        <h2 className="text-4xl font-extrabold text-[#0B2241]">Life At MetaLogic</h2>
      </div>
      {/* Benefits Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {benefits.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <div className="mb-3">{item.icon}</div>
            <h3 className="font-bold text-[#0B2241] mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}