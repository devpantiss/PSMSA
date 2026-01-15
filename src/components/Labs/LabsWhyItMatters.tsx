import React from "react";
import { ShieldCheck, Cpu, Factory, TrendingUp, Sparkles } from "lucide-react";

const ACCENT = "#4eeac8";

const points = [
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Zero-Risk Training",
    desc: "Simulated environments eliminate safety risks",
  },
  {
    icon: <Cpu className="h-5 w-5" />,
    title: "Industry 4.0 Ready",
    desc: "AR/VR, simulators & digital twins",
  },
  {
    icon: <Factory className="h-5 w-5" />,
    title: "Real-World Exposure",
    desc: "Replicates actual site conditions",
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "Faster Employability",
    desc: "Reduced onboarding time for employers",
  },
];

const LabsWhyItMatters: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-transparent py-16 md:py-20">
      {/* ===== Background FX ===== */}
      {/* <div className="pointer-events-none absolute inset-0"> */}
        {/* neon glow blobs */}
        {/* <div
          className="absolute -top-52 left-1/2 h-[760px] w-[760px] -translate-x-1/2 rounded-full blur-[240px]"
          style={{ backgroundColor: `${ACCENT}14` }}
        /> */}
        {/* <div
          className="absolute bottom-[-340px] right-[-220px] h-[820px] w-[820px] rounded-full blur-[260px]"
          style={{ backgroundColor: `${ACCENT}10` }}
        /> */}

        {/* grid */}
        {/* <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:56px_56px]" /> */}

        {/* scanlines */}
        {/* <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:100%_9px]" /> */}

        {/* vignette */}
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.07),transparent_60%)]" /> */}
      {/* </div> */}

      <div className="relative mx-auto max-w-7xl px-6">
        {/* ===== Section Header ===== */}
        <div className="mb-10 flex flex-col items-start gap-3">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur-xl">
            <span
              className="h-2 w-2 rounded-full animate-pulse"
              style={{ backgroundColor: ACCENT }}
            />
            WHY IT MATTERS • FUTURE READY TRAINING
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Why these{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${ACCENT}, rgba(78,234,200,0.55))`,
              }}
            >
              labs
            </span>{" "}
            change everything
          </h2>

          <p className="max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
            Our advanced labs are built to deliver safer training, real-world exposure,
            and faster employability — aligned with modern industry needs.
          </p>
        </div>

        {/* ===== Cards Grid ===== */}
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
          {points.map((p) => (
            <div
              key={p.title}
              className="
                group relative overflow-hidden rounded-3xl
                border border-white/10 bg-white/5
                p-6 backdrop-blur-2xl
                transition hover:border-white/20
              "
            >
              {/* card glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <div
                  className="absolute -left-20 -top-20 h-48 w-48 rounded-full blur-[90px]"
                  style={{ backgroundColor: `${ACCENT}16` }}
                />
                <div
                  className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full blur-[90px]"
                  style={{ backgroundColor: `${ACCENT}12` }}
                />
              </div>

              {/* subtle HUD lines */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:100%_7px]" />

              {/* icon */}
              <div
                className="relative z-10 grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-black/40"
                style={{ boxShadow: `0 0 35px ${ACCENT}20`, color: ACCENT }}
              >
                {p.icon}
              </div>

              {/* text */}
              <h3 className="relative z-10 mt-4 text-base font-semibold text-white">
                {p.title}
              </h3>
              <p className="relative z-10 mt-2 text-sm text-white/60">
                {p.desc}
              </p>

              {/* bottom chip */}
              <div className="relative z-10 mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] text-white/60">
                <Sparkles className="h-3.5 w-3.5" style={{ color: ACCENT }} />
                Advantage
              </div>

              {/* neon border accent line */}
              <div
                className="pointer-events-none absolute left-0 top-0 h-[2px] w-full opacity-70"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${ACCENT}, transparent)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LabsWhyItMatters;