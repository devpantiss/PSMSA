import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ScanEye, Sparkles } from "lucide-react";

/* ===================== CONSTANTS ===================== */

const ACCENT = "#4eeac8";

/* ===================== LAB DATA ===================== */

const labs = [
  {
    id: "operator",
    title: "Operator Training Simulator Lab",
    desc: "Heavy equipment & mining simulators",
    video: "/lab/operator.mp4",
  },
  {
    id: "arvr",
    title: "AR/VR Electrical Lab",
    desc: "Immersive electrical & safety training",
    video: "/lab/electrical.mp4",
  },
  {
    id: "welding",
    title: "Welding & Fabrication Lab",
    desc: "Advanced industrial welding systems",
    video: "/lab/welder.mp4",
  },
  {
    id: "shipping",
    title: "Shipping & Logistics Simulator",
    desc: "Port, cargo & maritime simulations",
    video: "/lab/shipping.mp4",
  },
];

/* ===================== COMPONENT ===================== */

const LabsGridSplitCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
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

  return (
    <section className="relative overflow-hidden bg-transparent py-16 md:py-20">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* ================= LEFT PANEL ================= */}
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur-xl">
              <span
                className="h-2 w-2 rounded-full"
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
              and industry-grade equipment — enabling safe, scalable, job-ready learning.
            </p>

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

          {/* ================= RIGHT — VIDEO CAROUSEL ================= */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl">

              {/* Top HUD */}
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
                  MANUAL MODE
                </div>
              </div>

              {/* VIDEO SLIDE */}
              <div className="relative h-[380px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeLab.id}
                    initial={{ x: "120%", opacity: 0, scale: 0.98 }}
                    animate={{ x: "0%", opacity: 1, scale: 1 }}
                    exit={{ x: "-60%", opacity: 0, scale: 0.985 }}
                    transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <video
                      src={activeLab.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

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
                  </motion.div>
                </AnimatePresence>

                {/* CONTROLS */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between">
                  <button
                    onClick={goPrev}
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-black/60 px-4 py-2 text-sm text-white/80 backdrop-blur-xl"
                  >
                    <ChevronLeft className="h-4 w-4" /> Prev
                  </button>

                  <button
                    onClick={goNext}
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-black/60 px-4 py-2 text-sm text-white/80 backdrop-blur-xl"
                  >
                    Next <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* PROGRESS BAR (MANUAL RESET) */}
              <div className="relative z-10 border-t border-white/10 bg-black/35 px-5 py-4">
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    key={progressKey}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${ACCENT}, rgba(78,234,200,0.35))`,
                    }}
                  />
                </div>
              </div>
            </div>

            <p className="mt-4 text-center text-xs text-white/45">
              Use controls to explore labs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabsGridSplitCarousel;
