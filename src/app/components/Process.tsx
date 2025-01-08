"use client";

import { useState } from 'react';

type ProcessStep = {
  title: string;
  content: string;
};

const processSteps: ProcessStep[] = [
  {
    title: "Define the Problem",
    content: "We start by thoroughly understanding your business needs, challenges, and objectives. This involves detailed discussions, research, and analysis to ensure we have a clear picture of what needs to be achieved."
  },
  {
    title: "Scope & Estimate: Time and Money", 
    content: "Based on the defined requirements, we provide detailed time and cost estimates. We break down the project into manageable phases and set clear milestones and deliverables."
  },
  {
    title: "Design",
    content: "Our design team creates intuitive and engaging user interfaces that align with your brand identity. We follow modern design principles and ensure optimal user experience across all devices."
  },
  {
    title: "Define Development Operations:",
    content: "We establish the technical architecture, choose appropriate technologies, and set up development workflows. This includes defining coding standards, testing procedures, and deployment strategies."
  },
  {
    title: "Development",
    content: "Our experienced developers bring the design to life, writing clean, efficient, and maintainable code. We follow agile methodologies with regular updates and feedback sessions."
  },
  {
    title: "Delivery",
    content: "We ensure smooth deployment of your solution, including thorough testing, documentation, and knowledge transfer. Our team handles all technical aspects of the launch process."
  },
  {
    title: "Support & Maintenance",
    content: "We provide ongoing support and maintenance services to ensure your solution continues to perform optimally. This includes regular updates, bug fixes, and performance optimization."
  }
];

export default function Process() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6 text-white">
          Our Process
        </h2>
        
        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-8 sm:mb-12 text-base sm:text-lg px-4">
          We have predictable outcomes because we have a well defined process. This process has been optimized and
          tested over several years to make sure we have it 'just right'. While gaining you as a client is important, there is
          nothing more important than delivering the product that exceeds your expectations.
        </p>

        <div className="max-w-2xl mx-auto space-y-2 sm:space-y-3">
          {processSteps.map((step, index) => (
            <div key={index} className="group">
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full flex items-center justify-between p-4 sm:p-5 bg-zinc-900 transition-all duration-300 border border-zinc-800 hover:bg-zinc-800 ${
                  activeIndex === index ? 'rounded-t-lg' : 'rounded-lg'
                }`}
              >
                <span className="text-base sm:text-lg font-medium text-white pr-4">{step.title}</span>
                <span className={`transform transition-transform duration-300 text-white flex-shrink-0 ${
                  activeIndex === index ? 'rotate-45' : ''
                }`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="p-4 sm:p-5 bg-zinc-900 rounded-b-lg border-t-0 border border-zinc-800">
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{step.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}