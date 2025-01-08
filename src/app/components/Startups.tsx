"use client";

type Startup = {
  name: string;
  description: string;
  imageUrl: string;
  placeholderColor: string;
};

const startups: Startup[] = [
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
  },
  {
    name: "Kandiid",
    description: "Social media platform empowering creators to monetize their content.",
    imageUrl: "/images/startups/Kandiid.png",
    placeholderColor: "bg-emerald-200"
  },
  {
    name: "Fit2Flaunt",
    description: "Personalized fitness coaching and wellness community platform.",
    imageUrl: "/images/startups/Fit2flaunt.png",
    placeholderColor: "bg-yellow-200"
  },
  {
    name: "Boomerang",
    description: "Food delivery service connecting local restaurants with hungry customers.",
    imageUrl: "/images/startups/Boomerang.png",
    placeholderColor: "bg-orange-200"
  }
];

export default function Startups() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-2xl md:text-5xl font-bold text-center mb-8 sm:mb-12">
          Black Startups
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {startups.map((startup, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className={`relative w-full pt-[56.25%] ${startup.placeholderColor}`}>
                <img
                  src={startup.imageUrl}
                  alt={startup.name}
                  className={`absolute top-0 left-0 w-full h-full object-cover ${startup.name === "Brolly" ? "object-top -translate-y-1" : ""}`}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-semibold mb-1.5 text-gray-900">{startup.name}</h3>
                <p className="text-sm sm:text-base text-gray-700">{startup.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}