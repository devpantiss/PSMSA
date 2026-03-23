import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import { TrendingUp, Users, Trophy, Globe } from "lucide-react";

const ACCENT_PURPLE = "#7c3aed"; 
const ACCENT_TEAL = "#4eeac8";

const stats = [
  { label: "Placement Rate", value: 92, suffix: "%", icon: <TrendingUp className="h-6 w-6" />, color: ACCENT_PURPLE },
  { label: "Hiring Partners", value: 300, suffix: "+", icon: <Users className="h-6 w-6" />, color: ACCENT_PURPLE },
  { label: "Highest Package", value: 6.5, suffix: " LPA", icon: <Trophy className="h-6 w-6" />, color: ACCENT_PURPLE },
  { label: "Intl. Placements", value: 20, suffix: "+", icon: <Globe className="h-6 w-6" />, color: ACCENT_PURPLE },
];

const Counter = ({ value, suffix, delay = 0 }: { value: number; suffix: string; delay?: number }) => {
  const count = useMotionValue(0);
  const rounded = useSpring(count, { stiffness: 50, damping: 20 });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        count.set(value);
      }, delay * 1000);
    }
  }, [isInView, value, count, delay]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      if (value % 1 !== 0) {
        setDisplayValue(latest.toFixed(1));
      } else {
        setDisplayValue(Math.floor(latest).toString());
      }
    });
  }, [rounded, value]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

const CollabImpact: React.FC = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-purple-500 font-black uppercase tracking-[0.4em] text-xs mb-6"
            >
              <div className="w-10 h-px bg-purple-500" />
              Impact Analytics
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none italic mb-6">
              The <span className="text-purple-600">Outcomes</span> <br/> that Define Us
            </h2>
            <div className="h-1.5 w-32 bg-purple-600 rounded-full" />
          </div>
          <p className="max-w-md text-gray-500 text-sm font-medium uppercase tracking-[0.2em] leading-relaxed">
            Real-world metrics powered by structured training and strategic industry partnerships.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative h-full p-10 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:border-purple-500/30"
            >
              {/* Card Background Glow */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Icon Container */}
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-black/50 border border-white/5 transition-all duration-500 group-hover:scale-110 group-hover:bg-purple-500/10 group-hover:text-purple-400 group-hover:border-purple-500/20"
                style={{ color: stat.color }}
              >
                {stat.icon}
              </div>

              {/* Value with Counter */}
              <div className="text-5xl font-black text-white tracking-tighter mb-4 italic">
                <Counter value={stat.value} suffix={stat.suffix} delay={i * 0.1} />
              </div>

              {/* Progress Line */}
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mb-6">
                <motion.div 
                   initial={{ width: 0 }}
                   whileInView={{ width: "100%" }}
                   viewport={{ once: true }}
                   transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
                   className="h-full bg-gradient-to-r from-purple-500/50 to-purple-800/50"
                />
              </div>

              {/* Label */}
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 group-hover:text-purple-400 transition-colors">
                {stat.label}
              </h3>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                 <div className="w-8 h-8 border-t-2 border-r-2 border-white rounded-tr-lg" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollabImpact;