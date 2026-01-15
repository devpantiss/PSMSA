import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ScanEye, Sparkles } from "lucide-react";

const ACCENT = "#4eeac8";

const labs = [
  {
    id: "operator",
    title: "Operator Training Simulator Lab",
    desc: "Heavy equipment & mining simulators",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762158602/WhatsApp_Image_2025-03-03_at_10.47.37_PM_ex1zpe.jpg",
  },
  {
    id: "arvr",
    title: "AR/VR Electrical Lab",
    desc: "Immersive electrical & safety training",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762160341/WhatsApp_Image_2025-11-03_at_2.21.32_PM_cepy4c.jpg",
  },
  {
    id: "welding",
    title: "Welding & Fabrication Lab",
    desc: "Advanced industrial welding systems",
    image:
      "https://www.ferris.edu/CET/design-mfg/welding/laboratory-facilities/images/labs-classrooms-home.jpg",
  },
  {
    id: "shipping",
    title: "Shipping & Logistics Simulator",
    desc: "Port, cargo & maritime simulations",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762158602/WhatsApp_Image_2025-02-28_at_5.00.19_PM_frl41v.jpg",
  },
];

const AUTO_SLIDE_INTERVAL = 4500;

const LabsGridSplitCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // progress animation key
  const [progressKey, setProgressKey] = useState(0);

  const activeLab = useMemo(() => labs[index], [index]);

  const goNext = () => {
    setIndex((prev) => (prev + 1) % labs.length);
    setProgressKey((k) => k + 1);
  };

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + labs.length) % labs.length);
    setProgressKey((k) => k + 1);
  };

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % labs.length);
      setProgressKey((k) => k + 1);
    }, AUTO_SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section className="relative overflow-hidden bg-transparent py-16 md:py-20">
      {/* ===== Futuristic Background Layer ===== */}
      {/* <div className="pointer-events-none absolute inset-0"> */}
        {/* neon glows */}
        {/* <div
          className="absolute -top-52 left-1/2 h-[760px] w-[760px] -translate-x-1/2 rounded-full blur-[240px]"
          style={{ backgroundColor: `${ACCENT}16` }}
        /> */}
        {/* <div
          className="absolute bottom-[-360px] right-[-240px] h-[820px] w-[820px] rounded-full blur-[260px]"
          style={{ backgroundColor: `${ACCENT}12` }}
        /> */}

        {/* grid */}
        {/* <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:56px_56px]" /> */}

        {/* scanlines */}
        {/* <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:100%_9px]" /> */}

        {/* vignette */}
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.07),transparent_60%)]" /> */}
      {/* </div> */}

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* ================= LEFT — TEXT PANEL ================= */}
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur-xl">
              <span
                className="h-2 w-2 rounded-full animate-pulse"
                style={{ backgroundColor: ACCENT }}
              />
              TRAINING CORE • FUTURE READY
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
              Building{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${ACCENT}, rgba(78,234,200,0.55))`,
                }}
              >
                Industry-Grade Skills
              </span>
              <br />
              Through Futuristic Labs
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
              Pantiss Skill Universe operates next-generation training labs that
              replicate real industrial environments using simulators, AR/VR systems,
              and industry-grade equipment — enabling safe, scalable and job-ready learning.
            </p>

            {/* micro highlights */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                { title: "Immersive Simulations", meta: "Operator-ready training" },
                { title: "Safety-First Practice", meta: "Controlled environments" },
                { title: "Industry 4.0 Tools", meta: "Modern lab systems" },
                { title: "Hands-on Learning", meta: "Skill validation focus" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
                >
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-xs text-white/55">{item.meta}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT — HUD SLIDER ================= */}
          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* HUD Card Shell */}
            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl">
              {/* Neon frame glow */}
              <div className="pointer-events-none absolute inset-0">
                <div
                  className="absolute inset-0 opacity-70"
                  style={{
                    boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.06), 0 0 80px ${ACCENT}16`,
                  }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,rgba(0,0,0,0.86)_100%)]" />
              </div>

              {/* Top HUD bar */}
              <div className="relative z-10 flex items-center justify-between border-b border-white/10 bg-black/35 px-5 py-4">
                <div className="flex items-center gap-3">
                  <div
                    className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-black/40"
                    style={{ boxShadow: `0 0 35px ${ACCENT}22` }}
                  >
                    <ScanEye className="h-5 w-5" style={{ color: ACCENT }} />
                  </div>

                  <div>
                    <p className="text-xs text-white/50">Featured Lab Module</p>
                    <p className="text-sm font-semibold text-white">
                      {activeLab.title}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs text-white/70">
                  <Sparkles className="h-4 w-4" style={{ color: ACCENT }} />
                  SYSTEM ACTIVE
                </div>
              </div>

              {/* Slide Area */}
              <div className="relative h-[380px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeLab.id}
                    initial={{ x: "120%", opacity: 0, scale: 0.98 }}
                    animate={{ x: "0%", opacity: 1, scale: 1 }}
                    exit={{ x: "-60%", opacity: 0, scale: 0.985 }}
                    transition={{
                      duration: 0.85,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0"
                  >
                    {/* Image */}
                    <img
                      src={activeLab.image}
                      alt={activeLab.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />

                    {/* overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

                    {/* content */}
                    <div className="relative z-10 flex h-full flex-col justify-end p-7">
                      <p
                        className="text-xs uppercase tracking-[0.35em]"
                        style={{ color: ACCENT }}
                      >
                        LAB NODE {String(index + 1).padStart(2, "0")}
                      </p>

                      <h3 className="mt-2 text-2xl font-semibold text-white">
                        {activeLab.title}
                      </h3>

                      <p className="mt-3 max-w-md text-sm text-white/70">
                        {activeLab.desc}
                      </p>

                      <div className="mt-5 flex items-center justify-between">
                        <div
                          className="h-[2px] w-14 rounded-full"
                          style={{ backgroundColor: ACCENT }}
                        />
                        <p className="text-xs text-white/50">
                          {index + 1}/{labs.length}
                        </p>
                      </div>
                    </div>

                    {/* subtle neon ring */}
                    <div
                      className="pointer-events-none absolute inset-0 rounded-[30px]"
                      style={{
                        boxShadow: `inset 0 0 0 1px rgba(78,234,200,0.16)`,
                      }}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Controls */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between">
                  <button
                    onClick={goPrev}
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-black/60 px-4 py-2 text-sm text-white/80 backdrop-blur-xl transition hover:bg-black/75"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Prev
                  </button>

                  <div className="rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs text-white/70 backdrop-blur-xl">
                    {paused ? "PAUSED" : "AUTO SCROLL"}
                  </div>

                  <button
                    onClick={goNext}
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-black/60 px-4 py-2 text-sm text-white/80 backdrop-blur-xl transition hover:bg-black/75"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Progress bar */}
              <div className="relative z-10 border-t border-white/10 bg-black/35 px-5 py-4">
                <div className="flex items-center justify-between text-xs text-white/50">
                  <span>Slide Progress</span>
                  <span>{paused ? "HOLD" : "RUNNING"}</span>
                </div>

                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    key={progressKey}
                    initial={{ width: "0%" }}
                    animate={{ width: paused ? "0%" : "100%" }}
                    transition={{
                      duration: paused ? 0 : AUTO_SLIDE_INTERVAL / 1000,
                      ease: "linear",
                    }}
                    className="h-full rounded-full"
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${ACCENT}, rgba(78,234,200,0.35))`,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Small helper text */}
            <p className="mt-4 text-center text-xs text-white/45">
              Hover to pause • Use controls to explore labs manually
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabsGridSplitCarousel;