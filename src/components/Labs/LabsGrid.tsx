import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const labs = [
  {
    id: "operator",
    title: "Operator Training Simulator Lab",
    desc: "Heavy equipment & mining simulators",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762158602/WhatsApp_Image_2025-03-03_at_10.47.37_PM_ex1zpe.jpg",
  },
  {
    id: "arvr",
    title: "AR/VR Electrical Lab",
    desc: "Immersive electrical & safety training",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762160341/WhatsApp_Image_2025-11-03_at_2.21.32_PM_cepy4c.jpg",
  },
  {
    id: "welding",
    title: "Welding & Fabrication Lab",
    desc: "Advanced industrial welding systems",
    image:
      "https://www.ferris.edu/CET/design-mfg/welding/laboratory-facilities/images/labs-classrooms-home.jpg",
  },
  {
    id: "shipping",
    title: "Shipping & Logistics Simulator",
    desc: "Port, cargo & maritime simulations",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762158602/WhatsApp_Image_2025-02-28_at_5.00.19_PM_frl41v.jpg",
  },
];

const AUTO_SLIDE_INTERVAL = 4500;

const LabsGridSplitCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % labs.length);
    }, AUTO_SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-[#185044] to-black overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4eeac8]/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT — TEXT */}
        <div>
          <span className="block mb-3 text-xs tracking-[0.35em] uppercase text-purple-500">
            Advanced Training Infrastructure
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Building{" "}
            <span className="text-[#4eeac8]">Industry-Grade Skills</span>
            <br />
            Through Futuristic Labs
          </h2>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-xl">
            Pantiss Skill Universe operates next-generation training labs that
            replicate real industrial environments using simulators, AR/VR
            systems, and industry-grade equipment. These labs ensure safe,
            scalable, and job-oriented workforce readiness.
          </p>

          <div className="mt-8 w-24 h-[3px] bg-gradient-to-r from-[#4eeac8] to-transparent rounded-full" />
        </div>

        {/* RIGHT — SLIDING CARD */}
        <div className="relative h-[360px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={labs[index].id}
              initial={{ x: "120%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "-60%", opacity: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1], // cinematic ease
              }}
              className="
                absolute inset-0 rounded-3xl overflow-hidden
                bg-black/40 backdrop-blur-xl
                border border-[#4eeac8]/30
                shadow-[0_0_40px_rgba(78,234,200,0.25)]
              "
            >
              {/* Image */}
              <img
                src={labs[index].image}
                alt={labs[index].title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                <span className="text-xs uppercase tracking-widest text-[#4eeac8] mb-2">
                  Featured Lab
                </span>

                <h3 className="text-2xl font-extrabold text-white">
                  {labs[index].title}
                </h3>

                <p className="mt-3 text-gray-300 text-sm max-w-md">
                  {labs[index].desc}
                </p>

                <div className="mt-5 w-12 h-[2px] bg-[#4eeac8] rounded-full" />
              </div>

              {/* Neon ring */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-[#4eeac8]/20" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default LabsGridSplitCarousel;