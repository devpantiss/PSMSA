import React from "react";
import Marquee from "react-fast-marquee";
import { HardHat, Factory } from "lucide-react";

const jobCategories = [
  {
    industry: "Mining",
    icon: <HardHat className="w-5 h-5" />,
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
    icon: <Factory className="w-5 h-5" />,
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
    icon: <Factory className="w-5 h-5" />,
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

      {/* ===================== PROFESSIONAL BACKGROUND ===================== */}
      <div className="pointer-events-none absolute inset-0">

        {/* Base industrial tint */}
        <div className="absolute inset-0 bg-zinc-950" />

        {/* Micro dot grid (industrial blueprint feel) */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
            backgroundSize: "26px 26px",
          }}
        />

        {/* Diagonal technical lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(255,255,255,0.8) 0, rgba(255,255,255,0.8) 1px, transparent 1px, transparent 48px)",
          }}
        />

        {/* Subtle purple institutional accent */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(220,38,38,0.08),transparent_55%)]" />

        {/* Edge vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,rgba(0,0,0,0.92)_100%)]" />
      </div>

      {/* ===================== CONTENT ===================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="inline-block text-xs uppercase tracking-widest text-purple-500 mb-3">
            PSMSA • Programs • Industry Roles
          </p>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Core Industry Job Roles
          </h2>

          <p className="mt-4 text-white/70 max-w-3xl mx-auto text-base">
            Industry-aligned blue-collar job roles under PSMSA programs,
            designed to meet workforce requirements across Mining, Steel
            and Aluminium sectors.
          </p>
        </div>

        {/* Industry Blocks */}
        <div className="space-y-10">
          {jobCategories.map((category, index) => (
            <div
              key={category.industry}
              className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6 items-center"
            >
              {/* Industry Card */}
              <div className="rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-purple-600/10 border border-purple-600/30 flex items-center justify-center text-purple-500">
                  {category.icon}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/50">
                    Sector
                  </p>
                  <p className="text-base font-semibold">
                    {category.industry}
                  </p>
                </div>
              </div>

              {/* Roles Marquee */}
              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900 px-3 py-3">
                <div className="pointer-events-none absolute left-0 top-0 h-full w-14 bg-gradient-to-r from-black to-transparent z-10" />
                <div className="pointer-events-none absolute right-0 top-0 h-full w-14 bg-gradient-to-l from-black to-transparent z-10" />

                <Marquee
                  gradient={false}
                  speed={34}
                  direction={index % 2 === 0 ? "left" : "right"}
                  pauseOnHover
                >
                  <div className="flex gap-3 pr-4">
                    {category.roles.map((role, idx) => (
                      <div
                        key={idx}
                        className="
                          px-5 py-2.5 rounded-full
                          text-sm font-medium whitespace-nowrap
                          bg-black border border-white/10
                          text-white/80
                          hover:text-white
                          hover:border-purple-600/50
                          transition
                        "
                      >
                        <span className="inline-block mr-2 h-2 w-2 rounded-full bg-purple-600" />
                        {role}
                      </div>
                    ))}
                  </div>
                </Marquee>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-600 to-transparent" />
    </section>
  );
};

export default CoreIndustriesJobRolesMarquee;
