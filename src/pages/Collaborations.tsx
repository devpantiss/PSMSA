import React from 'react'
import { motion, useScroll, useSpring } from "framer-motion";
import HeroSection from '../components/Collaboration/Hero'
import PartnersLogos from '../components/Collaboration/PartnersLogos'
import CollabImpact from '../components/Collaboration/CollabImpact'
import MouSection from '../components/Collaboration/MouSection'
import PlacementPipeline from '../components/Collaboration/PlacementPipeline'
import PlacementSuccessStories from '../components/Collaboration/TestimonialSection'

const FuturisticBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#050505]">
      {/* Dynamic Mesh Gradients - Shifted to Deep Purple */}
      <motion.div 
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[10%] -left-[5%] w-[60%] h-[60%] bg-purple-900/10 blur-[130px] rounded-full"
      />
      <motion.div 
        animate={{
          scale: [1.1, 1, 1.1],
          x: [0, -20, 0],
          y: [0, -10, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[10%] -right-[5%] w-[70%] h-[70%] bg-purple-800/5 blur-[150px] rounded-full"
      />
      
      {/* Animated Scanlines - Extremely Subtle */}
      <div className="absolute inset-0 opacity-[0.02] z-10"
           style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 3px, transparent 4px)", backgroundSize: "100% 4px" }} />
           
      {/* Industrial Grid with Perspective - Purple tint */}
      <div className="absolute inset-0 opacity-[0.05] z-0" 
           style={{ 
             backgroundImage: "linear-gradient(#7c3aed 1px, transparent 1px), linear-gradient(90deg, #7c3aed 1px, transparent 1px)", 
             backgroundSize: "100px 100px",
             perspective: "1200px",
             transform: "rotateX(60deg) translateY(-25%) translateZ(-300px)"
           }} />

      {/* Floating Particles - Reduced count and opacity */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.2, 0],
              scale: [0, 1, 0.5],
              x: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
              y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
            }}
            transition={{ 
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
          />
        ))}
      </div>
    </div>
  );
};

const Collaborations: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[#050505] text-gray-100 font-sans selection:bg-purple-500/30 selection:text-purple-400 overflow-x-hidden">
      <FuturisticBackground />
      
      {/* Scroll Progress Bar - Purple dominant */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-800 via-purple-600 to-purple-800 z-[100] origin-left shadow-[0_0_15px_rgba(124,58,237,0.3)]"
        style={{ scaleX }}
      />

      <div className="relative z-10">
        <HeroSection />
        <CollabImpact />
        <PlacementPipeline />
        <PartnersLogos />
        <PlacementSuccessStories />
        <MouSection />
      </div>
    </div>
  )
}

export default Collaborations