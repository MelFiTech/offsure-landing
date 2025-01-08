"use client";

type Project = {
  title: string;
  description: string;
  bgColor: string;
};

const projects: Project[] = [
  {
    title: "Plugins",
    description: "Connect your site to the most popular apps out there.",
    bgColor: "bg-rose-50",
  },
  {
    title: "Powerful Effects", 
    description: "Add effects with a few clicks and capture your audience's attention when they land on your website.",
    bgColor: "bg-blue-50",
  },
  {
    title: "Design & Layout",
    description: "Design your site on a familiar free-form canvas. Visually set up your breakpoints to make it responsive.",
    bgColor: "bg-green-50",
  }
];

export default function Current() {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
          Our Current Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`${project.bgColor} rounded-lg sm:rounded-2xl p-4 sm:p-6 transition-transform hover:scale-105
                ${index === projects.length - 1 ? 'md:col-span-2' : ''}`}
            >
              <div className="h-48 sm:h-56 mb-4 sm:mb-5 rounded-lg sm:rounded-xl bg-white/80"></div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-gray-900">{project.title}</h3>
              <p className="text-sm sm:text-base text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}