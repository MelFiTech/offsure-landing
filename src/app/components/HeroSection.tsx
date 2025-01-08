export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-end justify-center px-4 pb-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url("/images/hero-image.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content */}
      <div className="container relative z-10">
        <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-black text-white leading-[1.2] sm:leading-[1.1] tracking-wider w-full text-center sm:text-left">
          MOBILE APPLICATION<br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          DEVELOPMENT SERVICES
        </h2>
      </div>
    </section>
  )
}