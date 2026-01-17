import React from "react";
import { motion } from "framer-motion";
import { FaTools, FaIndustry, FaBriefcase, FaGlobe } from "react-icons/fa";

const ACCENT = "#7c3aed"; // purple-600
const SOFT = "#4eeac8"; // teal secondary

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
    <section className="relative overflow-hidden py-28">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/banner.jpg')" }}
      />

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85" />

      {/* Futuristic ambient + patterns */}
      <div className="pointer-events-none absolute inset-0">
        {/* glow blobs */}
        <div
          className="absolute -top-56 left-1/3 h-[740px] w-[740px] -translate-x-1/2 rounded-full blur-[240px]"
          style={{ backgroundColor: `${ACCENT}22` }}
        />
        <div
          className="absolute bottom-[-340px] right-[-280px] h-[780px] w-[780px] rounded-full blur-[250px]"
          style={{ backgroundColor: `${SOFT}16` }}
        />

        {/* diagonal beams */}
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `
              linear-gradient(115deg, rgba(124,58,237,0.22), transparent 55%),
              linear-gradient(295deg, rgba(78,234,200,0.14), transparent 60%)
            `,
          }}
        />

        {/* scanlines */}
        <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:100%_7px]" />

        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.93)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur-xl">
            <span
              className="h-2 w-2 rounded-full animate-pulse"
              style={{ backgroundColor: ACCENT }}
            />
            Career Journey Framework
          </p>

          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            The{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${SOFT}, ${ACCENT})`,
              }}
            >
              Pantiss Placement Pipeline
            </span>
          </h2>

          <p className="mt-4 text-lg text-white/70">
            A structured, outcome-driven journey from skill acquisition to sustainable
            careers.
          </p>

          <div
            className="mx-auto mt-8 h-[3px] w-28 rounded-full"
            style={{
              backgroundImage: `linear-gradient(90deg, ${ACCENT}, transparent)`,
            }}
          />
        </div>

        {/* Pipeline */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="pointer-events-none absolute left-0 right-0 top-[52%] hidden md:block">
            <div
              className="mx-auto h-[2px] w-[92%] rounded-full opacity-70"
              style={{
                backgroundImage: `linear-gradient(90deg, transparent, ${ACCENT}, ${SOFT}, transparent)`,
                boxShadow: `0 0 40px ${ACCENT}22`,
              }}
            />
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="group relative"
              >
                {/* Card wrapper: ensures equal height */}
                <div className="h-full">
                  <div
                    className="
                      relative flex h-full min-h-[320px] flex-col
                      overflow-hidden rounded-3xl
                      border border-white/10 bg-white/5
                      p-8 text-center backdrop-blur-xl
                      transition hover:border-white/20
                    "
                  >
                    {/* hover glow */}
                    <div
                      className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full blur-[90px] opacity-0 transition duration-500 group-hover:opacity-100"
                      style={{ backgroundColor: `${ACCENT}28` }}
                    />
                    <div
                      className="pointer-events-none absolute -left-16 -bottom-16 h-44 w-44 rounded-full blur-[90px] opacity-0 transition duration-500 group-hover:opacity-100"
                      style={{ backgroundColor: `${SOFT}20` }}
                    />

                    {/* Step number badge */}
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-100">
                      <div
                        className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-black/60 text-xs font-bold text-white shadow-xl"
                        style={{
                          boxShadow: `0 0 30px ${ACCENT}22`,
                        }}
                      >
                        {i + 1}
                      </div>
                    </div>

                    {/* Icon */}
                    <div
                      className="
                        mx-auto mb-6 grid h-16 w-16 place-items-center
                        rounded-2xl border border-white/10 bg-black/50
                        text-2xl transition group-hover:scale-[1.06]
                      "
                      style={{
                        color: SOFT,
                        boxShadow: `0 0 40px ${SOFT}18`,
                      }}
                    >
                      {step.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-white">
                      {step.title}
                    </h3>

                    {/* Accent line */}
                    <div
                      className="mx-auto mt-4 h-[2px] w-12 rounded-full"
                      style={{
                        backgroundImage: `linear-gradient(90deg, ${ACCENT}, transparent)`,
                      }}
                    />

                    {/* Desc (flex-grow keeps spacing consistent) */}
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-white/70">
                      {step.desc}
                    </p>

                    {/* Bottom micro detail (adds premium structure) */}
                    <div className="mt-6 text-[11px] uppercase tracking-[0.24em] text-white/40">
                      Step {i + 1} of {steps.length}
                    </div>

                    {/* Shine sweep */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                      <div
                        className="absolute -left-24 top-0 h-full w-44 rotate-12 blur-2xl"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent, rgba(124,58,237,0.22), transparent)",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Node dot on connector line (desktop) */}
                <div className="pointer-events-none absolute left-1/2 top-[52%] hidden -translate-x-1/2 md:block">
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{
                      backgroundColor: SOFT,
                      boxShadow: `0 0 20px ${SOFT}55`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementPipeline;