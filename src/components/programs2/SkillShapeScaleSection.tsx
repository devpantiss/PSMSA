import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type PanelId = "01" | "02" | "03";

type AccordionPanel = {
  id: PanelId;
  image: string;
  caption: string;
};

const panels: AccordionPanel[] = [
  {
    id: "01",
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1600&q=80",
    caption:
      "4.9 CSAT, 7,400+ staff transformed:\nElevating service excellence across 7 international airports through blended,\nscalable training",
  },
  {
    id: "02",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    caption:
      "96% confidence, 89% proficiency:\nTransforming 1600+ campus hires for one of the world’s top consulting firms",
  },
  {
    id: "03",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80",
    caption:
      "20-point score improvement, 95%+ completion:\nPowering capability transformation at a global leader in credit\nreporting and insights",
  },
];

/* -----------------------------
   Count Up Hook (supports suffix)
----------------------------- */
const useCountUp = (end: number, enabled: boolean, duration = 1600) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    const startTime = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [end, enabled, duration]);

  return count;
};

export default function SkillShapeScaleAccordionSection() {
  const [active, setActive] = useState<PanelId>("01");


  /* -----------------------------
     Impact stats + Observer
  ----------------------------- */
  const impactRef = useRef<HTMLDivElement>(null);
  const [impactVisible, setImpactVisible] = useState(false);

  useEffect(() => {
    const el = impactRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImpactVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: 10, suffix: "", label: "YEARS OF UPGRADE\nEXPERTISE & REACH" },
    { number: 56, suffix: "", label: "BRANDON HALL\nAWARDS" },
    { number: 800, suffix: "", label: "ENTERPRISE\nCLIENTS GLOBALLY" },
    { number: 10, suffix: "M+", label: "GLOBAL LEARNERS\nFROM 70+ COUNTRIES" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#0B0B0E] text-white mt-28">
      {/* ===== Background (Purple instead of Red) ===== */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0B0B0E]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(147,51,234,0.78),transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_85%,rgba(147,51,234,0.35),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.85)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-12">
        {/* ===== Top Layout ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT TEXT */}
          <div className="lg:col-span-5">
            <h2 className="text-[52px] leading-[0.95] font-light tracking-tight text-white/95">
              SKILL
              <br />
              SHAPE
              <br />
              SCALE
            </h2>

            <p className="mt-8 max-w-md text-white/70 text-sm leading-relaxed">
              Empowering businesses to{" "}
              <span className="text-white/90 font-semibold">discover</span>,{" "}
              <span className="text-white/90 font-semibold">nurture</span> and{" "}
              <span className="text-white/90 font-semibold">grow</span>{" "}
              best-in-class talent through dedicated learning solutions.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="group inline-flex items-center justify-center gap-3 border border-white/10 bg-white px-8 py-4 text-xs font-semibold tracking-widest text-black transition hover:bg-white/90">
                EXPLORE PROGRAMS
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
              </button>

              <button className="group inline-flex items-center justify-center gap-3 border border-white/20 bg-transparent px-10 py-4 text-xs font-semibold tracking-widest text-white/85 transition hover:bg-white/5 hover:text-white">
                TALK TO US
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
              </button>
            </div>
          </div>

          {/* RIGHT ACCORDION */}
          <div className="lg:col-span-7">
            <div className="relative flex h-[420px] w-full items-stretch overflow-hidden">
              {/* left divider like screenshot */}
              <div className="hidden lg:block absolute -left-6 top-0 bottom-0 w-px bg-white/15" />

              {panels.map((panel) => {
                const isActive = panel.id === active;

                return (
                  <button
                    key={panel.id}
                    onClick={() => setActive(panel.id)}
                    className={[
                      "relative h-full text-left transition-all duration-500 ease-out",
                      "border-l border-white/15",
                      "focus:outline-none",
                      isActive ? "flex-[8]" : "flex-[1.3] hover:flex-[1.6]",
                    ].join(" ")}
                  >
                    {/* Top + icon */}
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 text-white/65 text-2xl select-none">
                      +
                    </div>

                    {/* Active content */}
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div
                          key={panel.id}
                          initial={{ opacity: 0, x: 16 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.35 }}
                          className="h-full w-full px-6 py-6"
                        >
                          {/* Image box */}
                          <div className="h-[260px] w-full overflow-hidden border border-white/10 bg-white/5">
                            <img
                              src={panel.image}
                              alt={panel.id}
                              className="h-full w-full object-cover grayscale"
                            />
                          </div>

                          {/* Caption */}
                          <p className="mt-6 text-sm text-white/85 leading-relaxed whitespace-pre-line max-w-[520px]">
                            {panel.caption}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Bottom number */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm tracking-widest">
                      {panel.id}
                    </div>

                    {/* right divider line */}
                    <div className="absolute top-0 bottom-0 right-0 w-px bg-white/15" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ===== Bottom Stats (Count-Up) ===== */}
        <div
          ref={impactRef}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-10 items-end"
        >
          {stats.map((stat, idx) => {
            const animatedValue = useCountUp(stat.number, impactVisible);

            return (
              <div key={idx} className="relative">
                <div className="text-5xl md:text-6xl font-light text-white/95">
                  {animatedValue}
                  {stat.suffix}
                </div>

                <div className="mt-3 text-[11px] leading-relaxed tracking-widest text-white/55 whitespace-pre-line">
                  {stat.label}
                </div>

                {/* vertical separator */}
                {idx !== 3 && (
                  <div className="hidden md:block absolute top-2 right-0 h-16 w-px bg-white/15" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}