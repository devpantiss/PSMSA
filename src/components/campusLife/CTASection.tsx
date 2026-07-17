import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, GraduationCap } from "lucide-react";

const CTASection: React.FC = () => {
  return (
    <section className="relative py-32 md:py-40 px-6 bg-[#050505] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Deep immersive gradients */}
        <div className="absolute inset-0 z-0">
           <img
             src="/labs_hero.jpg"
             alt="Students training in an industry-linked campus environment"
             loading="lazy"
             className="h-full w-full object-cover opacity-30"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/75 to-[#050505]/35" />
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(5,5,5,0.9)_72%)]" />
        </div>

        <div className="relative z-10 text-center flex flex-col items-center">
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl lg:text-[6rem] font-bold text-white tracking-tighter leading-[1.05] mb-8"
          >
             Your Career Journey <br />
             <span className="text-zinc-500">Starts Here</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl text-xl text-zinc-400 font-light leading-relaxed mb-16 tracking-wide"
          >
            Join a campus where every workshop, simulation, project and interaction brings you closer to the industry.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/our-programmes"
              className="flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-widest text-black transition-all hover:scale-105"
            >
              Explore Our Courses <GraduationCap className="h-4 w-4" />
            </Link>
            <Link
              to="/contact-us"
              className="flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white backdrop-blur-md transition-all hover:bg-white/10"
            >
              Book a Campus Visit <CalendarDays className="h-4 w-4" />
            </Link>
            <Link
              to="/academics/admissions"
              className="flex items-center gap-3 rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-widest text-black transition-all hover:scale-105"
              style={{ background: "linear-gradient(90deg,#4eeac8,#38bdf8)" }}
            >
              Apply for Admission <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.28 }}
            className="mt-8 rounded-full border border-white/10 bg-black/35 px-5 py-3 text-xs text-white/55 backdrop-blur"
          >
            Parent and student enquiry support available through the contact team.
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
