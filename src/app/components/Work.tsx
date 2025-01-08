"use client";

import { useEffect, useRef } from 'react';

const workItems = [
  {
    type: 'stat',
    number: 'Over 200+',
    label: 'World Class Clients',
    bgColor: 'bg-blue-500',
  },
  {
    type: 'image',
    src: '/images/work/Reel1.png',
    alt: 'Project showcase 1',
  },
  {
    type: 'image', 
    src: '/images/work/Reel2.png',
    alt: 'Project showcase 2',
  },
  {
    type: 'stat',
    number: '3,200',
    label: 'Completed projects',
    bgColor: 'bg-blue-800',
  },
  {
    type: 'image',
    src: '/images/work/Reel3.png',
    alt: 'Project showcase 3',
  },
];

export default function Work() {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    let animationFrameId: number;
    let position = 0;
    const speed = 0.5;

    const animate = () => {
      position -= speed;
      
      if (position <= -(ticker.firstElementChild as HTMLElement)?.offsetWidth * workItems.length) {
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
    <section className="bg-white py-20">
      <div className="container mx-auto mb-16 px-4">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-black leading-tight">
          We are always working
        </h2>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white to-transparent z-10"></div>

        <div ref={tickerRef} className="flex gap-6 whitespace-nowrap transition-transform duration-100">
          {[...workItems, ...workItems].map((item, index) => (
            <div 
              key={index} 
              className={`flex-shrink-0 ${item.type === 'stat' ? 'w-[240px]' : 'w-[400px]'} h-[280px] rounded-[32px] overflow-hidden`}
            >
              {item.type === 'stat' ? (
                <div className={`${item.bgColor} w-full h-full p-10 flex flex-col justify-center items-center text-center`}>
                  <div className="text-4xl font-bold text-white mb-3">
                    {item.number}
                  </div>
                  <div className="text-2xl text-white font-light">
                    {item.label}
                  </div>
                </div>
              ) : (
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}