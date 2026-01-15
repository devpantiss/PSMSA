import React from "react";
import Rotating3DLabsCarousel from "./Rotating3DLabsCarousel";
import { ArrowRight, Cpu, ScanEye, ShieldCheck, Sparkles } from "lucide-react";

const ACCENT = "#4eeac8";

const FuturisticLabsShowcaseSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-transparent py-14 md:py-20">
      {/* ===== Background Effects ===== */}
      {/* <div className="pointer-events-none absolute inset-0"> */}
        {/* Neon glow blobs */}
        {/* <div
          className="absolute -top-44 left-1/2 h-[720px] w-[720px] -translate-x-1/2 rounded-full blur-[230px]"
          style={{ backgroundColor: `${ACCENT}18` }}
        /> */}
        {/* <div
          className="absolute bottom-[-340px] right-[-260px] h-[820px] w-[820px] rounded-full blur-[250px]"
          style={{ backgroundColor: `${ACCENT}12` }}
        /> */}
        {/* <div
          className="absolute bottom-[-320px] left-[-220px] h-[760px] w-[760px] rounded-full blur-[240px]"
          style={{ backgroundColor: `${ACCENT}10` }}
        /> */}

        {/* Futuristic grid */}
        {/* <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:56px_56px]" /> */}

        {/* Scanlines */}
        {/* <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:100%_9px]" /> */}

        {/* Vignette */}
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" /> */}
      {/* </div> */}

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* ===== Header ===== */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur-xl">
              <span
                className="h-2 w-2 rounded-full animate-pulse"
                style={{ backgroundColor: ACCENT }}
              />
              Futuristic Lab Ecosystem • Real-World Training
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Futuristic{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${ACCENT}, rgba(78,234,200,0.55))`,
                }}
              >
                Advanced Labs
              </span>
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
              Explore our next-generation lab infrastructure designed for Industry 4.0
              skill training — immersive, safety-first, and job-ready.
            </p>
          </div>

          {/* CTA */}
          <a
            href="/labs"
            className="group inline-flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white/85 backdrop-blur-xl transition hover:border-white/20 hover:text-white"
          >
            Explore Our Labs
            <ArrowRight
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              style={{ color: ACCENT }}
            />
          </a>
        </div>

        {/* ===== Main Layout ===== */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          {/* LEFT — Carousel Frame */}
          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/5 backdrop-blur-2xl">
            {/* HUD overlay */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:100%_7px]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,rgba(0,0,0,0.80)_100%)]" />
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.06), 0 0 80px ${ACCENT}12`,
                }}
              />
            </div>

            {/* Top bar */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 bg-black/30 px-5 py-4">
              <div className="flex items-center gap-3">
                <div
                  className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-black/40"
                  style={{ boxShadow: `0 0 35px ${ACCENT}22` }}
                >
                  <ScanEye className="h-5 w-5" style={{ color: ACCENT }} />
                </div>
                <div>
                  <p className="text-xs text-white/50">Interactive Gallery</p>
                  <p className="text-sm font-semibold text-white">
                    Rotating 3D Lab Showcase
                  </p>
                </div>
              </div>

              <span className="hidden rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs text-white/70 md:inline-flex">
                Hover to pause • Click to preview
              </span>
            </div>

            {/* Carousel */}
            <div className="relative z-10 px-3 py-4 md:px-5 md:py-6">
              <Rotating3DLabsCarousel />
            </div>

            {/* Bottom hint */}
            <div className="relative z-10 border-t border-white/10 bg-black/40 px-5 py-4 text-xs text-white/60 backdrop-blur-xl">
              Immersive UI: Tilt control + spotlight platform + fullscreen preview
            </div>
          </div>

          {/* RIGHT — Content Panel */}
          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl md:p-8">
            {/* glow accent */}
            <div className="pointer-events-none absolute inset-0">
              <div
                className="absolute -right-24 -top-24 h-72 w-72 rounded-full blur-[130px]"
                style={{ backgroundColor: `${ACCENT}16` }}
              />
            </div>

            <div className="relative">
              <h3 className="text-2xl font-semibold text-white md:text-3xl">
                Built for modern skill training
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
                Our labs are designed to simulate real industrial environments with
                modern infrastructure, safety systems, and hands-on learning setups.
              </p>

              {/* Highlights */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  {
                    icon: <Cpu className="h-4 w-4" />,
                    title: "Industry 4.0 Ready",
                    desc: "Modern learning ecosystems & tools",
                  },
                  {
                    icon: <ShieldCheck className="h-4 w-4" />,
                    title: "Safety First",
                    desc: "Risk-free practice environments",
                  },
                  {
                    icon: <Sparkles className="h-4 w-4" />,
                    title: "Immersive Training",
                    desc: "Real-world workflows & simulations",
                  },
                  {
                    icon: <ScanEye className="h-4 w-4" />,
                    title: "Visual Learning",
                    desc: "Explore labs in a modern UI format",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-black/30 p-4"
                  >
                    <div className="flex items-center gap-2 text-white">
                      <span style={{ color: ACCENT }}>{item.icon}</span>
                      <p className="text-sm font-semibold">{item.title}</p>
                    </div>
                    <p className="mt-2 text-xs text-white/60">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <a
                  href="/labs"
                  className="group inline-flex w-full items-center justify-between rounded-2xl px-6 py-4 text-sm font-semibold text-black transition hover:opacity-95"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${ACCENT}, rgba(78,234,200,0.65))`,
                    boxShadow: `0 18px 60px ${ACCENT}18`,
                  }}
                >
                  Enter Lab Universe
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>

                <p className="mt-3 text-xs text-white/50">
                  Explore labs • Training programs • Skill infrastructure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuturisticLabsShowcaseSection;
