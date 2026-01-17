import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Trophy, Globe } from "lucide-react";

const ACCENT = "#7c3aed"; // purple-600

const stats = [
  { label: "Placement Rate", value: "92%", icon: <TrendingUp className="h-5 w-5" /> },
  { label: "Hiring Partners", value: "300+", icon: <Users className="h-5 w-5" /> },
  { label: "Highest Package", value: "₹6.5 LPA", icon: <Trophy className="h-5 w-5" /> },
  { label: "International Placements", value: "20+", icon: <Globe className="h-5 w-5" /> },
];

const PlacementStats: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-black py-24">
      {/* Futuristic Background (NEW PATTERN) */}
      <div className="pointer-events-none absolute inset-0">
        {/* nebula glows */}
        <div
          className="absolute -top-52 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full blur-[220px]"
          style={{ backgroundColor: `${ACCENT}18` }}
        />
        <div
          className="absolute bottom-[-280px] right-[-260px] h-[760px] w-[760px] rounded-full blur-[240px]"
          style={{ backgroundColor: `${ACCENT}12` }}
        />

        {/* diagonal tech beams */}
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `
              linear-gradient(120deg, rgba(124,58,237,0.18), transparent 55%),
              linear-gradient(300deg, rgba(124,58,237,0.14), transparent 60%)
            `,
          }}
        />

        {/* scanlines */}
        <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:100%_7px]" />

        {/* subtle dotted matrix */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(124,58,237,0.35) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_48%,rgba(0,0,0,0.96)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur-xl">
            <span
              className="h-2 w-2 rounded-full animate-pulse"
              style={{ backgroundColor: ACCENT }}
            />
            Placement Performance Snapshot
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Outcomes that feel{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${ACCENT}, rgba(124,58,237,0.55))`,
              }}
            >
              premium
            </span>
          </h2>

          <p className="mt-3 text-sm text-white/60 md:text-base">
            Industry-ready talent powered by structured training & real hiring pathways.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition hover:border-white/20"
            >
              {/* hover glow */}
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full blur-[90px] opacity-0 transition duration-500 group-hover:opacity-100"
                style={{ backgroundColor: `${ACCENT}22` }}
              />

              {/* shine sweep */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div
                  className="absolute -left-24 top-0 h-full w-44 rotate-12 blur-2xl"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(124,58,237,0.20), transparent)",
                  }}
                />
              </div>

              {/* Icon */}
              <div
                className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/40"
                style={{
                  color: ACCENT,
                  boxShadow: `0 0 40px ${ACCENT}22`,
                }}
              >
                {stat.icon}
              </div>

              {/* Value */}
              <p className="text-4xl font-extrabold text-white tracking-tight">
                {stat.value}
              </p>

              {/* Accent line */}
              <div
                className="mt-4 h-[2px] w-12 rounded-full"
                style={{ backgroundColor: ACCENT }}
              />

              {/* Label */}
              <p className="mt-3 text-xs uppercase tracking-[0.22em] text-white/60">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacementStats;