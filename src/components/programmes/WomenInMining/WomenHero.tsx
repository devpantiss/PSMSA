import React from "react";
import { motion } from "framer-motion";

const WomenHero: React.FC = () => {
  return (
    <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image (Fixed Parallax) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/program/women/women_hero.jpg')",
          backgroundAttachment: "fixed", // ✅ Parallax effect
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-gray-900/20 to-black/10"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg tracking-tight font-sans">
          Women in Mining — Vehicle Operator Training
        </h1>

        <p className="text-lg md:text-xl text-gray-100 drop-shadow-md leading-relaxed">
          A future-ready training programme designed to empower women for
          high-demand{" "}
          <span className="text-green-400 font-semibold">
            HEMM vehicle operator
          </span>{" "}
          job roles in the mining sector. Learn through simulator-based practice,
          real equipment exposure, safety-first operations, and industry-aligned
          certification — preparing you for roles like{" "}
          <span className="text-purple-300 font-semibold">
            Dumper Operator, Loader Operator, Excavator Operator, and Haul Truck
            Operator
          </span>
          .
        </p>
      </motion.div>

      {/* Decorative Borders */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 via-black to-purple-600"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-black to-green-600"></div>

      {/* Background Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-green-500/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl opacity-50 animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default WomenHero;