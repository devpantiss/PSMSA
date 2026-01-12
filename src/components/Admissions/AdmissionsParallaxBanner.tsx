import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

const AdmissionsParallaxBanner: React.FC = () => {
  return (
    <section className="relative h-[70vh] overflow-hidden mt-8">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('/admission_hero.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 bg-gradient-to-b from-black/30 via-transparent to-black/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-500 mb-6">
            Build Your Career with Industry-Aligned Programmes
          </h2>

          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
            From certifications and ITI trades to degree programmes and
            international opportunities — explore pathways designed for
            real-world impact and employability.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {/* Explore Button */}
            <a
              href="#programmes"
              className="inline-flex items-center gap-2 px-7 py-3 bg-green-500 text-black rounded-lg font-semibold hover:bg-green-600 transition"
            >
              Explore Our Programmes <FaArrowDown />
            </a>

            {/* Apply Button */}
            <a
              href="/apply"
              className="inline-flex items-center gap-2 px-7 py-3 border border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-black transition"
            >
              Apply Now <FaArrowRight />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdmissionsParallaxBanner;
