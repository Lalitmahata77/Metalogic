import React from 'react';
import { BookOpen, Users, Lightbulb, UserCheck, Target, Repeat } from 'lucide-react';

const Values = () => {
  return (
    <section className="bg-[#f6f8ff] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Subtitle */}
        <h3 className="text-red-500 font-semibold text-lg tracking-wide">Values</h3>
        {/* Title */}
        <h2 className="text-4xl font-bold text-[#0b1223] mt-2">We Believe in</h2>
        {/* Description */}
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
          We believe in creating an environment where individuals can thrive and make a meaningful impact.
        </p>

        {/* Cards grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <article
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md text-left hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                <value.icon size={32} className="text-red-500" aria-label={value.alt} />
              </div>
              <h4 className="font-semibold text-xl text-[#0b1223]">{value.title}</h4>
              <p className="text-gray-600 mt-2 leading-relaxed">{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const values = [
  {
    title: 'Continuous Learning',
    description:
      "We invest in our team's growth through ongoing training, mentorship, and opportunities to expand your skill set. We're dedicated to your professional development journey.",
    icon: BookOpen,
    alt: 'Continuous Learning',
  },
  {
    title: 'Team Work',
    description:
      'We believe that the best solutions come from diverse perspectives and collaborative efforts.',
    icon: Users,
    alt: 'Team Work',
  },
  {
    title: 'Innovation',
    description:
      'Whether it’s the quality of our work, the impact we make, or the relationships we build, we consistently strive for the highest standards.',
    icon: Lightbulb,
    alt: 'Innovation',
  },
  {
    title: 'Mentorship',
    description:
      'We embrace change, learn from challenges, and remain resilient in the face of obstacles, always seeking opportunities for improvement.',
    icon: UserCheck,
    alt: 'Mentorship',
  },
  {
    title: 'Tangible Impact',
    description:
      'We’re committed to delivering solutions that not only meet but exceed expectations.',
    icon: Target,
    alt: 'Tangible Impact',
  },
  {
    title: 'Adaptability',
    description:
      'Thrive in a fast-paced world with resilience as your ally, valuing and cultivating adaptability in your career journey.',
    icon: Repeat,
    alt: 'Adaptability',
  },
];

export default Values;