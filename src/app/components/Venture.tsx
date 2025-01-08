"use client";

type Venture = {
  name: string;
  description: string;
  imageUrl: string;
  placeholderColor: string;
};

const ventures: Venture[] = [
  {
    name: "Brolly",
    description: "Innovative insurance platform revolutionizing the Caribbean market.",
    imageUrl: "/images/startups/Brolly.png",
    placeholderColor: "bg-rose-200"
  },
  {
    name: "Veekle", 
    description: "Digital peer-to-peer car rental platform transforming mobility in Jamaica.",
    imageUrl: "/images/startups/Veekle.png",
    placeholderColor: "bg-sky-200"
  },
  {
    name: "Laundris",
    description: "On-demand laundry and dry cleaning service with contactless delivery.",
    imageUrl: "/images/startups/Laundris.png",
    placeholderColor: "bg-violet-200"
  }
];

export default function Venture() {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
          Venture Capital
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {ventures.map((venture, index) => (
            <div key={index} className="bg-gray-50 rounded-lg sm:rounded-xl shadow overflow-hidden">
              <div className={`relative w-full pt-[56.25%] ${venture.placeholderColor}`}>
                <img
                  src={venture.imageUrl}
                  alt={venture.name}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-gray-900">{venture.name}</h3>
                <p className="text-sm sm:text-base text-gray-600">{venture.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}