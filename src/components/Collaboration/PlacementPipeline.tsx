import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaTools, FaIndustry, FaBriefcase, FaGlobe } from "react-icons/fa";

const ACCENT_PURPLE = "#7c3aed"; 
const ACCENT_TEAL = "#4eeac8";

const steps = [
  {
    icon: <FaTools />,
    title: "Skill Training",
    desc: "Industry-aligned hands-on training with labs, simulators, and workshops",
    color: ACCENT_PURPLE
  },
  {
    icon: <FaIndustry />,
    title: "Industry Exposure",
    desc: "Live projects, plant visits, and paid apprenticeships",
    color: ACCENT_PURPLE
  },
  {
    icon: <FaBriefcase />,
    title: "Placement",
    desc: "Structured hiring, employer matching, and onboarding support",
    color: ACCENT_PURPLE
  },
  {
    icon: <FaGlobe />,
    title: "Career Growth",
    desc: "Domestic placements, overseas mobility, and long-term progression",
    color: ACCENT_PURPLE
  },
];

const TiltCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
};

const PlacementPipeline: React.FC = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
           <div className="order-2 md:order-1 max-w-md text-gray-500 text-sm font-medium uppercase tracking-[0.2em] leading-relaxed">
            A structured, outcome-driven journey from skill acquisition to sustainable global careers.
          </div>
          <div className="order-1 md:order-2 text-right">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-end gap-3 text-purple-500 font-black uppercase tracking-[0.4em] text-xs mb-6"
            >
              The Pathway
              <div className="w-10 h-px bg-purple-500" />
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none italic mb-6">
              Placement <span className="text-purple-600">Pipeline</span>
            </h2>
            <div className="h-1.5 w-32 bg-purple-600 rounded-full ml-auto" />
          </div>
        </div>

        {/* Pipeline Grid */}
        <div className="relative">
          {/* Connector line - Purple dominant */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent hidden lg:block -translate-y-1/2 pointer-events-none overflow-hidden">
             {/* Moving Light Particles */}
             <motion.div 
               animate={{ x: ["-100%", "200%"] }}
               transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
               className="w-40 h-full bg-gradient-to-r from-transparent via-purple-400 to-transparent"
             />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, i) => (
              <TiltCard key={step.title} className="group">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative p-10 rounded-[3rem] bg-zinc-900/40 border border-white/5 backdrop-blur-3xl h-full flex flex-col items-center text-center transition-all duration-500 hover:border-purple-500/30 group-hover:bg-zinc-900/60 "
                >
                  {/* Step Number Badge */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center text-xs font-black text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all">
                    0{i + 1}
                  </div>

                  {/* Icon */}
                  <div 
                    className="w-20 h-20 rounded-3xl flex items-center justify-center mb-8 bg-black/50 border border-white/5 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110"
                    style={{ color: step.color }}
                  >
                    <div className="text-3xl">{step.icon}</div>
                  </div>

                  <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-4 italic transition-colors group-hover:text-purple-400">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm text-gray-500 leading-relaxed font-medium tracking-wide text-pretty">
                    {step.desc}
                  </p>

                  {/* Decorative Elements */}
                  <div className="mt-auto pt-8 flex items-center gap-1 opacity-20 group-hover:opacity-100 transition-opacity">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-1 h-4 bg-purple-500/50 rounded-full" />
                      ))}
                    </div>
                </motion.div>
                
                {/* Node dot on connector line (desktop) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block -z-10">
                   <div className="w-4 h-4 rounded-full bg-purple-500 blur-sm opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_20px_#7c3aed]" />
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementPipeline;