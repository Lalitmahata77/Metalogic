"use client"
import { useState } from "react";

const faqs = [
  {
    question: "What is custom software development, and how does it differ from off-the-shelf solutions?",
    answer:
      "Custom software development involves creating tailored solutions designed to meet specific business needs. Unlike off-the-shelf software, custom development ensures that the application aligns precisely with your unique requirements.",
  },
  {
    question: "Why should I opt for custom software development instead of using pre-built software?",
    answer: "Custom software allows you to address specific business challenges and streamline processes more efficiently. It provides flexibility, scalability, and the ability to incorporate features that are essential to your business, giving you a competitive edge.",
  },
  {
    question: "How does the custom software development process work with your team?",
    answer: "Our custom software development process typically involves consultation, requirements gathering, design, development, testing, deployment, and ongoing support. We work closely with you at every stage to ensure the final product meets your expectations.",
  },
  {
    question: "What technologies does your team specialize in for custom software development?",
    answer: "We have expertise in a variety of technologies and programming languages, including but not limited to Java, Python, .NET, JavaScript, and more. The choice of technology depends on the specific requirements of your project.",
  },
  {
    question: "Can you integrate the custom software with existing systems or third-party APIs?",
    answer: "Yes, we specialize in seamless integration with existing systems and third-party APIs. This ensures that your custom software can work cohesively with other tools and platforms used in your organization.",
  },
  {
    question: "How do you ensure the security of custom software applications?",
    answer: "Security is a top priority. We implement industry best practices, conduct thorough security assessments, and apply encryption and authentication measures to safeguard your custom software from potential vulnerabilities.",
  },
  {
    question: "What is the typical timeline for custom software development projects?",
    answer: "The timeline varies based on the complexity and scope of the project. We provide a detailed project timeline during the initial consultation after understanding your specific requirements.",
  },
  {
    question: "Do you provide ongoing support and maintenance for custom software applications?",
    answer: "Yes, we offer ongoing support and maintenance services to address any issues, implement updates, and ensure the continued performance and security of your custom software.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <main className="min-h-screen bg-white flex flex-col items-center px-4 py-12">
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">
        <span className="text-teal-600">FAQs</span> <span className="text-black">(Frequently Asked Questions)</span>
      </h2>
      <div className="w-full max-w-3xl">
        {faqs.map((faq, idx) => (
          <div key={idx}>
            <button
              className="flex justify-between items-center w-full py-5 text-left focus:outline-none"
              onClick={() => setOpenIndex(idx === openIndex ? -1 : idx)}
            >
              <span
                className={`text-base md:text-lg font-medium ${
                  idx === 0 ? "text-blue-800 underline" : "text-black"
                }`}
              >
                {faq.question}
              </span>
              <svg
                className={`w-5 h-5 text-gray-400 transform transition-transform duration-200 ${
                  openIndex === idx ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === idx && faq.answer && (
              <div className="pb-5 pl-1 pr-3 text-gray-800 text-base">
                {faq.answer}
              </div>
            )}
            <div className="border-b border-gray-200" />
          </div>
        ))}
      </div>
    </main>
  );
}