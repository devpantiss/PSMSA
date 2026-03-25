import React from "react";
import { motion } from "framer-motion";
import { Monitor, Cpu, Truck, Home } from "lucide-react";

// The Futurist Campus Intro replaces the old "Life Pillars"
const CampusIntro: React.FC = () => {
  const elements = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Smart Classrooms",
      desc: "Digitally augmented theory spaces blending AI-driven analytics with core industrial fundamentals."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Simulation Labs",
      desc: "Ultra-realistic virtual reality rigs for hazard-free, high-intensity heavy machinery practice."
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Operator Training Zones",
      desc: "Live field environments designed to replicate active mining and logistics sites perfectly."
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Residential Facilities",
      desc: "Premium, resort-style living quarters designed for deep rest and high-performance recovery."
    }
  ];

  return (
    <section className="relative py-24 md:py-40 px-6 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Split Layout: Concept vs Highlights */}
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Left: Concept Explanation */}
          <div className="w-full lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-8"
            >
              Beyond a Campus. <br />
              <span className="text-zinc-500">A Skill Training Resort.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="text-lg text-zinc-400 leading-relaxed font-light mb-8"
            >
              We completely reimagined traditional industrial training. By merging elite hospitality with rigorous technical education, we've built an aspirational environment. This isn't just about learning to operate a machine—it's about adopting the mindset, discipline, and lifestyle of a world-class professional.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="w-16 h-1 bg-gradient-to-r from-purple-500 to-teal-400 rounded-full"
            />
          </div>

          {/* Right: SVG Icon Grid */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {elements.map((el, i) => (
                <motion.div
                  key={el.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-8 rounded-[2rem] bg-zinc-900/40 border border-white/5 backdrop-blur-md hover:bg-zinc-900/80 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 group-hover:text-teal-400 transition-all">
                    {el.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{el.title}</h3>
                  <p className="text-sm text-zinc-500 font-light leading-relaxed">{el.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CampusIntro;