import React from "react";
import { motion } from "framer-motion";
import { Hammer, Cpu, Shield, Briefcase } from "lucide-react";

const PILLARS = [
  {
    icon: <Hammer className="h-6 w-6" />,
    label: "Learn by Doing",
    title: "Hands-On from Day One",
    desc: "Every lesson is practised in workshops, simulators and live equipment zones. Theory becomes skill through immediate application in real industrial settings.",
    accent: "#4eeac8",
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    label: "Train with Technology",
    title: "Industry-Grade Technology",
    desc: "AR/VR simulation labs, digital assessments, smart classrooms and performance-tracking systems prepare trainees for technology-enabled workplaces.",
    accent: "#38bdf8",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    label: "Grow with Discipline",
    title: "Safety, Punctuality and Professionalism",
    desc: "Daily safety briefings, PPE compliance, attendance standards and workplace behaviour training build the discipline employers demand.",
    accent: "#f97316",
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    label: "Prepare for Industry",
    title: "Career-Aligned from Day One",
    desc: "Industry visits, employer sessions, trade assessments and placement preparation run throughout the programme — not just at the end.",
    accent: "#a78bfa",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

const LifePillars: React.FC = () => {
  return (
    <section className="relative py-28 md:py-36 px-6 bg-[#050505] overflow-hidden">
      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:60px_60px]" />

      <div className="max-w-7xl mx-auto">
        {/* Split layout */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* Left: intro copy */}
          <div className="w-full lg:w-5/12">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-4 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#4eeac8]"
            >
              Campus Experience
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-6"
            >
              More Than Training.{" "}
              <span className="text-zinc-500">A Career Foundation.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base text-zinc-400 leading-relaxed font-light mb-8 max-w-xl"
            >
              Campus life at Pantiss Skill University is designed around the realities of mining, steel and aluminium work. From the first day to graduation, every experience reinforces safe, disciplined and job-ready industrial practice.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18 }}
              className="origin-left h-[2px] w-20 rounded-full"
              style={{ background: "linear-gradient(90deg,#4eeac8,#38bdf8)" }}
            />

            {/* Industries served */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.24 }}
              className="mt-10 flex flex-wrap gap-2"
            >
              {[
                "Mining", "Steel", "Aluminium", "HEMM Operations",
                "Welding", "Electrical", "Safety", "Plant Maintenance"
              ].map((ind) => (
                <span
                  key={ind}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white/50"
                >
                  {ind}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: pillars grid */}
          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {PILLARS.map((pillar, i) => (
                <motion.div
                  key={pillar.label}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  className="group relative overflow-hidden rounded-[24px] border border-white/8 bg-zinc-900/40 p-7 backdrop-blur-sm hover:border-white/15 transition-all duration-300"
                >
                  {/* Hover glow */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[24px]"
                    style={{
                      background: `radial-gradient(ellipse at top left, ${pillar.accent}14, transparent 65%)`,
                    }}
                  />

                  {/* Icon */}
                  <div
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/40"
                    style={{ color: pillar.accent }}
                  >
                    {pillar.icon}
                  </div>

                  {/* Eyebrow */}
                  <p
                    className="mb-2 text-[10px] font-semibold uppercase tracking-[0.28em]"
                    style={{ color: pillar.accent }}
                  >
                    {pillar.label}
                  </p>

                  <h3 className="mb-3 text-lg font-semibold text-white leading-snug">{pillar.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{pillar.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifePillars;
