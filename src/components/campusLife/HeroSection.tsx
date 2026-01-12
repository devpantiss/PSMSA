const HeroSection = () => (
    <section className="relative h-[75vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/pantiss-campus.mp4" type="video/mp4" />
      </video>
  
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />
  
      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-6">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase tracking-widest text-sm text-purple-500 mb-4">
            Pantiss School for Mines, Steel & Aluminium
          </p>
  
          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
            Campus Life Built for
            <br />
            <span className="text-neutral-300">
              Core Industry Professionals
            </span>
          </h1>
  
          <p className="mt-6 max-w-2xl text-lg text-neutral-300">
            An immersive, disciplined, industry-aligned campus environment
            designed to prepare students for real-world mining, metals,
            and heavy industrial operations.
          </p>
        </div>
      </div>
    </section>
  );

  export default HeroSection;