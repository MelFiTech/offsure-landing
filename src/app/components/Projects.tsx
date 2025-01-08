"use client";

import { useEffect, useRef } from 'react';

const logos = [
  { src: '/images/logos/logo1.png', alt: 'Logo 1' },
  { src: '/images/logos/logo2.png', alt: 'Logo 2' },
  { src: '/images/logos/logo3.png', alt: 'Logo 3' },
  { src: '/images/logos/logo4.png', alt: 'Logo 4' },
  { src: '/images/logos/logo5.png', alt: 'Logo 5' },
  { src: '/images/logos/logo6.png', alt: 'Logo 6' },
  { src: '/images/logos/logo7.png', alt: 'Logo 7' },
];

export default function Projects() {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    let animationFrameId: number;
    let position = 0;
    const speed = 0.8; // Slightly slower for better mobile viewing

    const animate = () => {
      position -= speed;
      
      // Reset position when first set of logos moves out of view
      if (position <= -(ticker.firstElementChild as HTMLElement)?.offsetWidth * logos.length) {
        position = 0;
      }
      
      ticker.style.transform = `translateX(${position}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <section className="bg-[#000000] py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <h4 className="text-primary text-center text-lg sm:text-xl mb-6 sm:mb-8">
          Companies we work with
        </h4>
        
        <div className="relative overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#000000] to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#000000] to-transparent z-10"></div>
          
          {/* Ticker content */}
          <div ref={tickerRef} className="flex whitespace-nowrap transition-transform duration-100">
            {/* Double the logos for seamless loop */}
            {[...logos, ...logos].map((logo, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-28 sm:w-36 h-28 sm:h-36 mx-2 sm:mx-4 flex items-center justify-center"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="w-20 sm:w-28 h-20 sm:h-28 object-contain opacity-100 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}