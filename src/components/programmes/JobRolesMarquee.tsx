import React from "react";
import Marquee from "react-fast-marquee";
import { HardHat, Factory } from "lucide-react";

const jobCategories = [
  {
    industry: "Mining",
    icon: <HardHat className="w-6 h-6" />,
    roles: [
      "Mine Helper",
      "Drill Operator",
      "Blaster",
      "Haul Truck Driver",
      "Loader Operator",
      "Mine Safety Assistant",
      "Maintenance Fitter (Mines)",
      "Survey Assistant",
    ],
  },
  {
    industry: "Steel Industry",
    icon: <Factory className="w-6 h-6" />,
    roles: [
      "Furnace Operator",
      "Crane Operator",
      "Casting Helper",
      "Rolling Mill Worker",
      "Welder",
      "Maintenance Technician",
      "Material Handler",
      "Quality Inspection Assistant",
    ],
  },
  {
    industry: "Aluminium Industry",
    icon: <Factory className="w-6 h-6" />,
    roles: [
      "Smelter Operator",
      "Potline Worker",
      "Casting Operator",
      "Anode Plant Technician",
      "Maintenance Electrician",
      "Forklift Operator",
      "Material Handling Assistant",
      "Safety & Compliance Helper",
    ],
  },
];

const CoreIndustriesJobRolesMarquee: React.FC = () => {
  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      {/* Subtle Industrial Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]"></div>
      </div>

      {/* Ambient Green Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-green-400/20 rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16 px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            <span className="text-green-400">Blue-Collar Job Roles</span>
            <br />
            in Core Industrial Sectors
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            High-demand operational roles across mining, steel, and aluminium
            industries—aligned with real industrial job requirements.
          </p>
        </div>

        {/* Marquees */}
        <div className="space-y-6 pb-12">
          {jobCategories.map((category, index) => (
            <div
              key={category.industry}
              className="flex items-center gap-6 group px-6"
            >
              {/* Industry Pill */}
              <div
                className="
                  flex items-center gap-3 px-5 py-3 w-64
                  rounded-full font-semibold text-sm md:text-base
                  border border-green-400/40
                  backdrop-blur-md
                  hover:bg-green-500/10
                  hover:shadow-lg hover:shadow-green-500/20
                  transition
                "
              >
                {React.cloneElement(category.icon, {
                  className:
                    "w-6 h-6 text-green-400 group-hover:scale-110 transition",
                })}
                <span>{category.industry}</span>
              </div>

              {/* Roles Marquee */}
              <div className="flex-1 overflow-hidden">
                <Marquee
                  gradient={false}
                  speed={38}
                  direction={index % 2 === 0 ? "left" : "right"}
                  pauseOnHover
                >
                  <div className="flex gap-4">
                    {category.roles.map((role, idx) => (
                      <div
                        key={idx}
                        className="
                          px-6 py-3 rounded-full
                          text-sm md:text-base font-medium whitespace-nowrap
                          bg-green-500/10 text-green-400
                          border border-green-500/30
                          hover:bg-green-500/20 hover:text-green-300
                          hover:shadow-lg hover:shadow-green-500/20
                          transition transform hover:scale-105
                        "
                      >
                        {role}
                      </div>
                    ))}
                  </div>
                </Marquee>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-green-500 via-black to-green-500" />
      </div>
    </section>
  );
};

export default CoreIndustriesJobRolesMarquee;
