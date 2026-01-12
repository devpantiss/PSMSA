import React from "react";
import { motion } from "framer-motion";

const AdmissionsHero: React.FC = () => {
  return (
    <section className="relative h-[100vh] pt-36 w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/admission_hero.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-500 leading-tight">
              Admissions & Programmes
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200">
              Industry-aligned education and skill pathways for Mining,
              Infrastructure and Allied Sectors — from certifications to
              full-degree programmes.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#programmes"
                className="px-6 py-3 bg-green-500 text-black rounded-lg font-semibold hover:bg-green-600 transition"
              >
                Explore Programmes
              </a>

              <a
                href="/apply"
                className="px-6 py-3 border border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-black transition"
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsHero;
