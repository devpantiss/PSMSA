import React from "react";
import { motion } from "framer-motion";

const PromotionalBanner: React.FC = () => {
  return (
    <section className="relative py-32 px-6 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Cinematic Video Banner */}
        <div className="relative rounded-[3rem] overflow-hidden p-12 md:p-24 flex flex-col items-center justify-center text-center gap-12 group h-[600px] shadow-[0_40px_100px_rgba(0,0,0,0.8)] border border-white/5">
          
          {/* Background Looping Video */}
          <div className="absolute inset-0 z-0">
             <video
                src="https://cdn.coverr.co/videos/coverr-mining-excavator-working-1875/1080p.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                className="w-full h-full object-cover scale-105 opacity-40 group-hover:opacity-50 transition-opacity duration-1000 grayscale"
             />
             
             {/* Deep Gradient Overlays */}
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
             <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 to-transparent mix-blend-multiply" />
          </div>

          <div className="relative z-10 max-w-4xl flex flex-col items-center">
            
            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="px-6 py-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md mb-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.4em] text-zinc-300"
            >
               <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
               Industrial Transition Standard
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.05] text-white mb-8"
            >
              Train Like a Professional. <br className="hidden md:block"/>
              <span className="text-zinc-500">Work Like an Expert.</span>
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <button className="px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-full transition-transform hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                Join a Program
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanner;