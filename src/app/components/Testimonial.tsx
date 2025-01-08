"use client";

import { useState } from 'react';

const testimonials = [
  {
    quote: "Working with Barry has been transformative for our business. Their team delivered a mobile app that exceeded our expectations in every way. The attention to detail, innovative features, and seamless user experience have helped us increase user engagement by 150% in just three months.",
    author: "Sarah Chen",
    position: "CTO at TechFlow Solutions"
  },
  {
    quote: "The expertise and professionalism of Barry's team is unmatched. They took our complex requirements and turned them into an elegant, user-friendly solution. The AI integration they implemented has reduced our operational costs by 40% and improved customer satisfaction scores significantly.",
    author: "Michael Rodriguez",
    position: "Head of Innovation at DataSmart Inc"
  },
  {
    quote: "Barry's approach to project management and development is exceptional. They not only delivered our healthcare app on time and within budget but also provided valuable insights that improved our initial concept. The app has received outstanding feedback from both patients and healthcare providers.",
    author: "Dr. Emily Thompson",
    position: "Founder of HealthTech Innovations"
  }
];

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8">
          What People<br />Say
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Testimonial Content */}
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="transition-transform duration-500 ease-in-out flex"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className="w-full flex-shrink-0 px-4 sm:px-6"
                  >
                    <p className="text-lg sm:text-xl md:text-2xl text-center text-gray-800 mb-4 sm:mb-6 leading-relaxed">
                      {testimonial.quote}
                    </p>
                    <div className="text-center">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                        {testimonial.author}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-500">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center items-center gap-3 mt-6 sm:mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index 
                      ? 'w-6 sm:w-8 bg-blue-500' 
                      : 'w-1.5 sm:w-2 bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}