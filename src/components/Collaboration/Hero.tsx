import React, { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaShieldAlt, FaBriefcase, FaArrowRight } from "react-icons/fa";
import { MousePointer2 } from "lucide-react";

const PlacementsHero: React.FC = memo(() => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.08)_0%,transparent_70%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Badge - Shifted to Purple */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-purple-400 text-xs font-bold uppercase tracking-[0.3em] mb-12 backdrop-blur-md"
        >
          <FaBriefcase className="animate-pulse" />
          <span>Outcome-Driven Skilling Excellence</span>
        </motion.div>

        {/* Main Title - Purple dominant */}
        <div className="relative mb-10">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] bg-gradient-to-b from-white via-white to-white/20 bg-clip-text text-transparent uppercase italic"
          >
            Where <span className="text-purple-600">Skills</span> <br/> 
            Become <span className="text-white">Careers</span>
          </motion.h1>
          
          {/* Decorative Elements - Subtle Teal Accent */}
          <motion.div 
            animate={{ left: ["-10%", "110%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-2 h-[2px] w-20 bg-gradient-to-r from-transparent via-purple-500 to-transparent blur-sm pointer-events-none"
          />
        </div>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-2xl text-xl md:text-2xl text-gray-400 leading-relaxed font-light mb-16"
        >
          Pantiss Skill University engineers high-performance talent through <span className="text-white font-bold tracking-wider underline decoration-purple-500/50 decoration-2 underline-offset-8">structured industry pathways</span> and zero-gap employment models.
        </motion.p>

        {/* Buttons - Purple focus */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <Link
            to="/placements/recruit"
            className="group relative px-10 py-5 bg-purple-600 text-white font-black uppercase tracking-widest text-sm rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Recruit Talent <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>

          <Link
            to="/apply"
            className="group relative px-10 py-5 border border-white/10 bg-white/5 text-white font-black uppercase tracking-widest text-sm rounded-full overflow-hidden transition-all hover:bg-white/10 hover:border-white/20"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Placed <FaShieldAlt className="text-purple-500 group-hover:rotate-12 transition-transform" />
            </span>
          </Link>
        </motion.div>

        {/* Scroll Guide - Purple accent */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-24"
        >
          <div className="flex flex-col items-center gap-4">
             <div className="w-px h-16 bg-gradient-to-b from-purple-500 to-transparent" />
             <MousePointer2 className="text-purple-500 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default PlacementsHero;
