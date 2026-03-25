import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 overflow-hidden bg-[#050505]">
      {/* Immersive Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover opacity-60 scale-105"
          autoPlay
          muted
          loop
          playsInline
        >
          {/* Using a high-quality industrial/mining placeholder if local isn't available */}
          <source src="/videos/pantiss-campus.mp4" type="video/mp4" />
        </video>
        
        {/* Apple/Tesla-style deep gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-[#050505]/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center mt-20">
        
        {/* Location / Resort Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-[10px] font-semibold uppercase tracking-[0.3em] mb-8 backdrop-blur-md"
        >
          <FaMapMarkerAlt className="text-teal-400" />
          <span>Pantiss Skill Training Resort</span>
        </motion.div>

        {/* Main Title - Clean, Premium Typography */}
        <div className="relative mb-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-7xl md:text-[6rem] font-bold tracking-tighter leading-[1.05] text-white"
          >
            Where Skills <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">Meet the Future.</span>
          </motion.h1>
        </div>

        {/* Descriptive Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl text-lg md:text-xl text-zinc-400 leading-relaxed font-light mb-12 tracking-wide"
        >
          Step into a 100-acre futuristic training ecosystem dedicated to blue-collar excellence. Master heavy machinery and critical industrial operations in a setting designed for tomorrow.
        </motion.p>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <button
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
            className="group relative px-8 py-4 bg-white text-black font-semibold uppercase tracking-widest text-xs rounded-full overflow-hidden transition-all hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Facilities <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-zinc-200 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </motion.div>
      </div>
      
      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 height-32 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default HeroSection;