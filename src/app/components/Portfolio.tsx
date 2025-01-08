import React from 'react';
import Image from 'next/image';

interface PortfolioItem {
  id: string;
  name: string;
  image: string;
  description: string;
  url: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'tactical-nav',
    name: 'Tactical Nav',
    image: '/Tactical.png',
    description: 'Highly accurate and powerful mobile navigation platform',
    url: 'https://framer.offsure.ai/portfolio/tactical-nav'
  },
  {
    id: 'veekle',
    name: 'Veekle', 
    image: '/veekle.png',
    description: 'Digital peer-to-peer car renting without the risk (Jamaica)',
    url: 'https://framer.offsure.ai/portfolio/veekle'
  },
  {
    id: 'boomerang',
    name: 'Boomerang',
    image: '/boom.png',
    description: 'Easy Ordering, Food Delivery & Take Out',
    url: 'https://framer.offsure.ai/portfolio/boomerang'
  },
  {
    id: 'barfolio',
    name: 'Barfolio',
    image: '/bar.png',
    description: 'Field sales mobile app for on-premise beverage sales reps',
    url: 'https://framer.offsure.ai/portfolio/barfolio'
  },
  {
    id: 'minor-chores',
    name: 'Minor Chores',
    image: '/minor.png',
    description: 'Marketplace for young entrepreneurs doing business',
    url: 'https://framer.offsure.ai/portfolio/minor-chores'
  },
  {
    id: 'aesthedika-live',
    name: 'Aesthedika Live',
    image: '/aes.png',
    description: 'Aesthetic Telehealth platform offering virtual good faith evals',
    url: 'https://framer.offsure.ai/portfolio/aesthedika-live'
  }
];

const Portfolio: React.FC = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <h3 className="text-primary text-center text-xl mb-6">Our Portfolio</h3>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Checkout what we have been up to
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <a href={item.url} key={item.id} target="_blank" rel="noopener noreferrer">
              <div className="flex flex-col">
                <div className="bg-[#0D0D0D] rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg aspect-square w-full">
                  <div className="relative w-full h-full">
                    <Image
                      src={item.image}
                      alt={item.name}
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                      className="transition-all duration-300 hover:opacity-80"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-xl font-semibold mb-2 transition-all duration-300 hover:text-primary">{item.name}</h4>
                  <p className="text-gray-400 transition-all duration-300 hover:text-white">{item.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
