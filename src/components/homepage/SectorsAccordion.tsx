import React, { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGem,
  FaIndustry,
  FaBolt,
  FaTools,
  FaTruck,
  FaFire,
} from "react-icons/fa";
import { Link } from "react-router-dom";

/* ===================== TYPES ===================== */
interface Sector {
  title: string;
  description: string;
  icon: React.FC<{ className?: string }>;
  backgroundImage: string;
}

/* ===================== DATA ===================== */
const sectors: Sector[] = [
  {
    title: "Mining Operations",
    description:
      "Advanced training for safe and efficient mining operations aligned with NSQF Levels 4–6.",
    icon: FaGem,
    backgroundImage: "/homepage/sectors/mining.jpg",
  },
  {
    title: "Fabrication & Welding",
    description:
      "Precision fabrication and industrial welding for heavy manufacturing.",
    icon: FaIndustry,
    backgroundImage: "/homepage/sectors/weldermine.jpg",
  },
  {
    title: "Electricals",
    description:
      "Electrical systems, diagnostics, and renewable energy integration.",
    icon: FaBolt,
    backgroundImage: "/homepage/sectors/electrician.jpg",
  },
  {
    title: "Mechanical Maintenance",
    description:
      "Industrial machinery maintenance and reliability engineering.",
    icon: FaTools,
    backgroundImage: "/homepage/sectors/HEMMmine.png",
  },
  {
    title: "HEMM Operations",
    description:
      "Certified training for Heavy Earth Moving Machinery operators.",
    icon: FaTruck,
    backgroundImage: "/homepage/sectors/HEMM.jpg",
  },
  {
    title: "Casting & Foundry",
    description:
      "Metal casting, foundry processes, and precision manufacturing.",
    icon: FaFire,
    backgroundImage: "/homepage/sectors/foundry.jpg",
  },
];

/* ===================== MAIN ===================== */
const SectorsAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const visibleIndex = hoverIndex ?? activeIndex;

  return (
    <section className="relative py-28 bg-black overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-48 -left-48 w-[700px] h-[700px] bg-green-500/10 blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-purple-600/10 blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Our <span className="text-green-500">Core Departments</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-3xl mx-auto text-lg">
            Carefully designed departments delivering industry-ready expertise.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex h-[440px] w-full rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-xl">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            const isActive = visibleIndex === index;

            return (
              <div
                key={sector.title}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                onClick={() => setActiveIndex(index)}
                role="button"
                tabIndex={0}
                className={`
                  relative overflow-hidden cursor-pointer
                  transition-[flex] duration-500 ease-out
                  ${isActive ? "flex-[5]" : "flex-[1]"}
                  border-r border-white/10 last:border-r-0
                `}
              >
                {/* Background Image */}
                <img
                  src={sector.backgroundImage}
                  alt={sector.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />

                {/* Collapsed Label */}
                {!isActive && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="rotate-[-90deg] text-white/80 font-semibold tracking-[0.2em] text-sm">
                      {sector.title}
                    </span>
                  </div>
                )}

                {/* Expanded Card */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 30 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="absolute inset-0 flex items-center justify-center p-10"
                    >
                      <div className="relative max-w-md w-full bg-white/[0.06] backdrop-blur-2xl border border-white/15 rounded-2xl p-8 text-center shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
                        {/* Icon Halo */}
                        <div className="mx-auto mb-5 w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center shadow-inner">
                          <Icon className="text-3xl text-green-400" />
                        </div>

                        <h3 className="text-2xl font-semibold text-white mb-3">
                          {sector.title}
                        </h3>

                        <div className="h-px w-16 mx-auto mb-4 bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />

                        <p className="text-gray-300 leading-relaxed text-sm">
                          {sector.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to="/academics"
            className="inline-flex px-9 py-4 rounded-full bg-green-600 hover:bg-green-700 transition text-white font-semibold shadow-lg shadow-green-600/20"
          >
            Explore All Departments
          </Link>
        </div>
      </div>
    </section>
  );
};

export default memo(SectorsAccordion);