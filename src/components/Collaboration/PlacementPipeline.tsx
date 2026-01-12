import React from "react";
import { FaTools, FaIndustry, FaBriefcase, FaGlobe } from "react-icons/fa";

const steps = [
  {
    icon: <FaTools />,
    title: "Skill Training",
    desc: "Industry-aligned hands-on training with labs, simulators, and workshops",
  },
  {
    icon: <FaIndustry />,
    title: "Industry Exposure",
    desc: "Live projects, plant visits, and paid apprenticeships",
  },
  {
    icon: <FaBriefcase />,
    title: "Placement",
    desc: "Structured hiring, employer matching, and onboarding support",
  },
  {
    icon: <FaGlobe />,
    title: "Career Growth",
    desc: "Domestic placements, overseas mobility, and long-term progression",
  },
];

const PlacementPipeline: React.FC = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('/banner.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/40 to-black/5" />

      {/* Ambient glow */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            The <span className="text-green-500">Pantiss</span>{" "}
            <span className="text-purple-600">Placement Pipeline</span>
          </h2>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto text-lg">
            A structured, outcome-driven journey from skill acquisition to
            sustainable careers.
          </p>
        </div>

        {/* Pipeline */}
        <div className="relative grid md:grid-cols-4 gap-10">
          {/* Connector Line (desktop) */}
          <div className="hidden md:block absolute top-[52%] left-0 right-0 h-[2px] bg-gradient-to-r from-green-500 via-purple-500 to-green-500" />

          {steps.map((step, i) => (
            <div
              key={i}
              className="relative group bg-black/60 backdrop-blur-xl border border-purple-600/30 rounded-2xl p-8 text-center
                         hover:border-green-500/60 hover:scale-[1.03]
                         transition-all duration-500 shadow-lg hover:shadow-green-500/20"
            >
              {/* Step Indicator */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full 
                              bg-gradient-to-br from-green-400 to-green-600 text-black 
                              flex items-center justify-center text-sm font-bold shadow-lg">
                {i + 1}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-full 
                              bg-gradient-to-br from-purple-500 to-green-500
                              text-black flex items-center justify-center text-2xl
                              group-hover:rotate-6 transition-transform duration-500 shadow-xl">
                {step.icon}
              </div>

              {/* Text */}
              <h3 className="text-lg font-semibold text-purple-400 mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {step.desc}
              </p>

              {/* Glow hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                              transition duration-500 pointer-events-none
                              bg-gradient-to-r from-purple-600/10 to-green-500/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacementPipeline;
