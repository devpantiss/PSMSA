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

const TEAL = "#4eeac8";
const PURPLE = "#9333ea";

const CoreIndustriesJobRolesMarquee: React.FC = () => {
  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      {/* ===== Futuristic Background System ===== */}
      <div className="pointer-events-none absolute inset-0">
        {/* Dual glow for contrast */}
        <div
          className="absolute -top-44 left-[-140px] w-[520px] h-[520px] rounded-full blur-[190px] opacity-40"
          style={{ backgroundColor: `${TEAL}20` }}
        />
        <div
          className="absolute top-[20%] right-[-180px] w-[560px] h-[560px] rounded-full blur-[200px] opacity-35"
          style={{ backgroundColor: `${PURPLE}18` }}
        />
        <div
          className="absolute bottom-[-260px] left-[20%] w-[520px] h-[520px] rounded-full blur-[200px] opacity-25"
          style={{ backgroundColor: `${TEAL}14` }}
        />

        {/* Sci-fi grid */}
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(78,234,200,0.20)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.20)_1px,transparent_1px)] [background-size:18px_18px]" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.94)_100%)]" />
      </div>

      {/* ===== Content ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/75 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full animate-pulse bg-white/80" />
            Workforce Pathways • Core Industries • High Demand Roles
          </p>

          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${TEAL}, ${PURPLE})`,
              }}
            >
              Blue-Collar Job Roles
            </span>
            <br />
            in Core Industrial Sectors
          </h2>

          <p className="mt-5 text-white/70 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            High-demand operational roles across Mining, Steel, and Aluminium —
            aligned with real industrial job requirements and placement pathways.
          </p>
        </div>

        {/* Marquees */}
        <div className="space-y-7 pb-8">
          {jobCategories.map((category, index) => {
            const accent = index % 2 === 0 ? TEAL : PURPLE;
            const accentSoft = `${accent}18`;

            return (
              <div
                key={category.industry}
                className="relative flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8"
              >
                {/* Industry Pill */}
                <div
                  className="
                    relative group
                    w-full lg:w-[280px]
                    flex items-center justify-between
                    rounded-2xl border border-white/10
                    bg-white/5 backdrop-blur-xl
                    px-5 py-4
                    transition-all duration-500
                    hover:border-white/20 hover:bg-white/10
                  "
                  style={{
                    boxShadow: `0 0 0 1px rgba(255,255,255,0.06), 0 0 70px ${accentSoft}`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-black/50"
                      style={{
                        boxShadow: `inset 0 0 18px rgba(255,255,255,0.06), 0 0 40px ${accentSoft}`,
                        color: accent,
                      }}
                    >
                      {React.cloneElement(category.icon as any, {
                        className:
                          "w-5 h-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
                      })}
                    </div>

                    <div>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                        Sector
                      </p>
                      <p className="text-sm md:text-base font-semibold text-white">
                        {category.industry}
                      </p>
                    </div>
                  </div>

                  {/* tiny indicator */}
                  <div className="hidden lg:flex items-center gap-2 text-xs text-white/55">
                    <span className="opacity-70">Live</span>
                    <span
                      className="h-2 w-2 rounded-full animate-pulse"
                      style={{ backgroundColor: accent }}
                    />
                  </div>

                  {/* hover sweep */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500">
                    <div
                      className="absolute -left-24 top-1/2 h-44 w-44 -translate-y-1/2 rounded-full blur-[90px]"
                      style={{ backgroundColor: accentSoft }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-20" />
                  </div>
                </div>

                {/* Roles Marquee Panel */}
                <div className="relative flex-1 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-3 py-3">
                  {/* edge fades */}
                  <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black/90 to-transparent z-10" />
                  <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black/90 to-transparent z-10" />

                  <Marquee
                    gradient={false}
                    speed={40}
                    direction={index % 2 === 0 ? "left" : "right"}
                    pauseOnHover
                  >
                    <div className="flex gap-4 pr-4">
                      {category.roles.map((role, idx) => {
                        const chipAccent = idx % 2 === 0 ? accent : index % 2 === 0 ? PURPLE : TEAL;

                        return (
                          <div
                            key={idx}
                            className="
                              group/role relative
                              px-6 py-3 rounded-full
                              text-sm md:text-base font-medium whitespace-nowrap
                              border border-white/10
                              bg-black/40 text-white/80
                              transition-all duration-500
                              hover:text-white hover:border-white/20
                              hover:scale-[1.04]
                            "
                            style={{
                              boxShadow: `0 0 0 1px rgba(255,255,255,0.04)`,
                            }}
                          >
                            <span
                              className="inline-block mr-2 h-2 w-2 rounded-full"
                              style={{ backgroundColor: chipAccent }}
                            />
                            {role}

                            {/* micro hover glow */}
                            <div
                              className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover/role:opacity-100 transition duration-500"
                              style={{
                                boxShadow: `0 0 55px ${chipAccent}22`,
                              }}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </Marquee>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div
        className="absolute bottom-0 left-0 w-full h-[2px]"
        style={{
          background: `linear-gradient(to right, transparent, ${TEAL}, ${PURPLE}, transparent)`,
          opacity: 0.95,
        }}
      />
    </section>
  );
};

export default CoreIndustriesJobRolesMarquee;