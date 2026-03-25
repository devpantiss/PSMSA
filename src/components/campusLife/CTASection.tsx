import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const CTASection: React.FC = () => {
  return (
    <section className="relative py-40 px-6 bg-[#050505] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Deep immersive gradients */}
        <div className="absolute inset-0 z-0">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[150px] rounded-full" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-teal-400/10 blur-[100px] rounded-full" />
        </div>

        <div className="relative z-10 text-center flex flex-col items-center">
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl lg:text-[6rem] font-bold text-white tracking-tighter leading-[1.05] mb-8"
          >
             Start Your Journey <br />
             <span className="text-zinc-500">In Mining & Industrial Careers.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl text-xl text-zinc-400 font-light leading-relaxed mb-16 tracking-wide"
          >
            The future of industrial operation isn't learned from a textbook. It's mastered on the track, inside the simulator, and field-tested in our 100-acre resort.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Link
              to="/admissions"
              className="px-10 py-5 bg-white text-black font-semibold uppercase tracking-widest text-sm rounded-full transition-all hover:scale-105 flex items-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            >
              Apply Now <FaArrowRight />
            </Link>
            <Link
              to="/contact-us"
              className="px-10 py-5 border border-white/20 text-white font-semibold uppercase tracking-widest text-sm rounded-full backdrop-blur-md transition-all hover:bg-white/10"
            >
              Contact Admissions
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;