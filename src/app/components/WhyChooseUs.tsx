"use client";

import React from 'react';
import NumberTicker from "./magicui/number-ticker";

interface Stat {
  value: number;
  suffix?: string;
  description: string;
}

const stats: Stat[] = [
  { value: 10, suffix: "+", description: 'Years in Business' },
  { value: 500, suffix: "+", description: 'Satisfied Clients' },
  { value: 350, suffix: "+", description: 'Projects Delivered' },
  { value: 100, suffix: "'s", description: 'Five Star Experiences' },
];

const StatsContainer: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="bg-gray-100 rounded-3xl p-4 md:p-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 md:mb-2 text-black">
                <NumberTicker value={stat.value} />
                {stat.suffix}
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-white text-black py-8 md:py-16">
      <StatsContainer />
      
      <div className="container mx-auto px-4 mt-12 md:mt-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight mb-3 md:mb-6">
              OffsureIT consistently delivers outstanding software development services, ensuring punctuality and adherence to budget, much to your end clients' appreciation.
            </p>
            <p className="text-lg md:text-xl font-signature">Barry Johnson</p>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="rounded-3xl overflow-hidden max-w-[400px] max-h-[300px] mx-auto">
              <img 
                src="/images/barry.png" 
                alt="Testimonial"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;