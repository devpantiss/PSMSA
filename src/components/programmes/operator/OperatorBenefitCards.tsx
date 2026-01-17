import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const benefits = [
  {
    id: "simulator",
    title: "Simulator-First Operator Training",
    subtitle: "Master HEMM operations safely before moving to real machines",
    tag: "SAFE LEARNING",
    image:
      "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "safety",
    title: "Safety & SOP Readiness",
    subtitle: "PPE discipline, hazard awareness, and mining safety protocols",
    tag: "SAFETY FIRST",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "equipment",
    title: "HEMM Vehicle Exposure",
    subtitle:
      "Hands-on familiarity with Dumper, Loader, Excavator & Haul Truck operations",
    tag: "REAL EQUIPMENT",
    image:
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df35?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "certification",
    title: "Industry-Aligned Certification",
    subtitle: "Assessments mapped to operator job roles and industry standards",
    tag: "JOB READY",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "mentorship",
    title: "Women-Focused Mentorship",
    subtitle:
      "Confidence building, workplace readiness, and supportive learning ecosystem",
    tag: "INCLUSIVE",
    image:
      "https://images.unsplash.com/photo-1604011237320-8e0506614fdf?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "placement",
    title: "Deployment & Career Pathways",
    subtitle:
      "Industry linkages for operator roles across mines and industrial sites",
    tag: "CAREER OUTCOMES",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c44367f?auto=format&fit=crop&w=1400&q=80",
  },
];

const OperatorBenefitCards: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <section
      aria-labelledby="women-benefits-heading"
      className={`relative bg-black py-20 px-6 text-white ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-sm text-purple-400 mb-2">
            Women in Mining
          </p>
          <h2
            id="women-benefits-heading"
            className="text-4xl md:text-5xl font-extrabold"
          >
            Programme Benefits
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto mt-4">
            A future-ready training pathway designed to empower women for
            high-demand HEMM vehicle operator job roles — combining simulator
            practice, safety excellence, and industry deployment support.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="
                relative group rounded-3xl overflow-hidden
                border border-purple-600/40
                shadow-[0_0_40px_rgba(147,51,234,0.18)]
                hover:shadow-[0_0_60px_rgba(147,51,234,0.35)]
                transition-all duration-500
              "
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center scale-105 group-hover:scale-110 transition-transform duration-700"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20" />

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col justify-end h-[360px]">
                <span className="text-xs uppercase tracking-widest text-purple-300 mb-2">
                  {item.tag}
                </span>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-200 text-sm mb-6 max-w-md">
                  {item.subtitle}
                </p>

                <button
                  className="
                    inline-flex items-center gap-3 w-fit
                    px-6 py-3 rounded-full
                    bg-gradient-to-r from-purple-600 to-green-500
                    text-black font-semibold
                    hover:scale-105 transition
                  "
                >
                  Explore
                  <FaArrowRight />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="mt-14 flex justify-center">
          <a
            href="/our-programmes/women-in-mining"
            className="
              inline-flex items-center gap-3 px-8 py-4 rounded-full
              bg-gradient-to-r from-purple-600 to-green-500
              text-black font-semibold shadow-lg
              hover:scale-105 transition
            "
          >
            View Women in Mining Programme
            <FaArrowRight />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default OperatorBenefitCards;