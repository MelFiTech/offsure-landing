export default function FeaturesSection() {
  return (
    <section className="py-12 sm:py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-white">
          Our Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Feature cards */}
          <FeatureCard
            title="Communication & Transparency"
            description="Clear and consistent communication channels with regular updates on project progress and milestones"
          />
          <FeatureCard
            title="Established Processes" 
            description="Well-defined development methodologies and workflows ensuring efficient project delivery and quality outcomes"
          />
          <FeatureCard
            title="Experienced Engineers"
            description="Team of skilled developers with extensive experience in various technologies and industry best practices"
          />
          <FeatureCard
            title="Proper Coding"
            description="Clean, maintainable, and well-documented code following industry standards and best practices"
          />
          <FeatureCard
            title="Portfolio"
            description="Extensive portfolio of successful projects across different industries and technologies"
          />
          <FeatureCard
            title="Support"
            description="Dedicated support team providing timely assistance and maintenance services post-deployment"
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-gray-900 p-4 sm:p-6 rounded-xl hover:bg-gray-800 transition-all transform hover:scale-105">
      <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white">{title}</h3>
      <p className="text-sm sm:text-base text-gray-400">{description}</p>
    </div>
  )
}