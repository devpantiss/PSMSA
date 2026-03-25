import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Campus Area", value: "100+", suffix: " Acres" },
  { label: "Training Capacity", value: "5000+", suffix: "" },
  { label: "Simulator Zones", value: "12", suffix: " Units" },
  { label: "Practice Track", value: "1000+", suffix: " Meters" },
];

const StatStrip: React.FC = () => {
  return (
    <div className="relative z-20 -mt-10 md:-mt-14 px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-8 p-10 rounded-[2.5rem] bg-zinc-900/60 border border-white/10 backdrop-blur-3xl shadow-2xl overflow-hidden">
        
        {/* Decorative Background Glow */}
        <div className="absolute top-0 right-1/4 w-32 h-full bg-purple-600/5 blur-[50px] -rotate-12 pointer-events-none" />

        {stats.map((stat, i) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col flex-1 min-w-[150px] text-center md:text-left relative"
          >
            {i !== 0 && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-px bg-white/10 hidden md:block" />
            )}
            <div className="md:pl-10">
              <span className="text-3xl md:text-4xl font-black text-white tracking-tighter italic">
                {stat.value}<span className="text-purple-500">{stat.suffix}</span>
              </span>
              <p className="mt-1 text-[10px] uppercase font-black tracking-[0.3em] text-gray-500">
                {stat.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatStrip;