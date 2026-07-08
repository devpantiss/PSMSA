import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/* ===================== TYPES ===================== */

type PanelId = "01" | "02" | "03";

type AccordionPanel = {
  id: PanelId;
  image: string;
  caption: string;
};

/* ===================== ACCORDION DATA (PSMSA HERO) ===================== */

const panels: AccordionPanel[] = [
  {
    id: "01",
    image:
      "https://images.unsplash.com/photo-1697281679321-a9ce55ce0a8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RlZWwlMjBpbmR1c3RyeXxlbnwwfHwwfHx8MA%3D%3D",
    caption:
      "CORE INDUSTRIAL SKILLING\n\nFrom entry-level technicians to shop-floor supervisors,\nPSMSA delivers hands-on skilling across Mining, Steel,\nAluminium, Power and Shipping — aligned to NSQF and\nindustry deployment needs.",
  },
  {
    id: "02",
    image:
      "https://images.unsplash.com/photo-1587919968590-fbc98cea6c9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWluaW5nfGVufDB8fDB8fHww",
    caption:
      "ADVANCED & OPERATOR CERTIFICATION\n\nSpecialised licensing and certification programs for\nHEMM operators, plant equipment handlers and safety-\ncritical roles — built for compliance, productivity\nand zero-incident environments.",
  },
  {
    id: "03",
    image:
      "https://images.unsplash.com/photo-1656077217715-bdaeb06bd01f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2xvYmFsfGVufDB8MHwwfHx8Mg%3D%3D",
    caption:
      "GLOBAL & FUTURE WORKFORCE PATHWAYS\n\nInternational mobility, women-in-mining initiatives and\nfuture-ready upskilling programs designed for global\nstandards, evolving technologies and long-term workforce\nresilience.",
  },
];

/* ===================== COUNT UP HOOK ===================== */

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

const ImpactStat = ({
  stat,
  showDivider,
  visible,
}: {
  stat: { number: number; suffix: string; label: string };
  showDivider: boolean;
  visible: boolean;
}) => {
  const animatedValue = useCountUp(stat.number, visible);

  return (
    <div className="relative">
      <div className="text-5xl md:text-6xl font-light text-white/95">
        {animatedValue}
        {stat.suffix}
      </div>

      <div className="mt-3 text-[11px] leading-relaxed tracking-widest text-white/55 whitespace-pre-line">
        {stat.label}
      </div>

      {showDivider && (
        <div className="hidden md:block absolute top-2 right-0 h-16 w-px bg-white/15" />
      )}
    </div>
  );
};

/* ===================== MAIN COMPONENT ===================== */

export default function PSMSAOurProgrammesHero() {
  const [active, setActive] = useState<PanelId>("01");

  /* ----- Impact Stats Observer ----- */
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
    { number: 10, suffix: "+", label: "YEARS OF\nINDUSTRIAL SKILLING" },
    { number: 120, suffix: "+", label: "PARTNER\nINDUSTRIES & SITES" },
    { number: 50, suffix: "+", label: "CERTIFIED\nPROGRAMMES" },
    { number: 1, suffix: "M+", label: "LEARNERS\nIMPACTED" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#07040E] text-white mt-28">
      {/* ===================== ENTERPRISE BACKGROUND ===================== */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#07040E]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(147,51,234,0.55),transparent_48%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_78%,rgba(59,130,246,0.35),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.9)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-12">
        {/* ===================== TOP LAYOUT ===================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT COPY */}
          <div className="lg:col-span-5">
            <h2 className="text-[52px] leading-[0.95] font-light tracking-tight text-white/95">
              OUR
              <br />
              PROGRAMMES
            </h2>

            <p className="mt-8 max-w-md text-white/70 text-sm leading-relaxed">
              Structured skilling pathways designed to{" "}
              <span className="text-white/90 font-semibold">build</span>,{" "}
              <span className="text-white/90 font-semibold">certify</span> and{" "}
              <span className="text-white/90 font-semibold">deploy</span>{" "}
              industry-ready talent across core and emerging sectors.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="group inline-flex items-center gap-3 border border-white/10 bg-white px-8 py-4 text-xs font-semibold tracking-widest text-black transition hover:bg-white/90">
                EXPLORE PROGRAMMES
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
              </button>

              <button className="group inline-flex items-center gap-3 border border-white/20 px-10 py-4 text-xs font-semibold tracking-widest text-white/85 transition hover:bg-white/5 hover:text-white">
                TALK TO US
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
              </button>
            </div>
          </div>

          {/* ===================== RIGHT ACCORDION ===================== */}
          <div className="lg:col-span-7">
            <div className="relative flex h-[420px] w-full items-stretch overflow-hidden">
              <div className="hidden lg:block absolute -left-6 top-0 bottom-0 w-px bg-white/15" />

              {panels.map((panel) => {
                const isActive = panel.id === active;

                return (
                  <button
                    key={panel.id}
                    onClick={() => setActive(panel.id)}
                    className={[
                      "relative h-full text-left transition-all duration-500 ease-out",
                      "border-l border-white/15 focus:outline-none",
                      isActive
                        ? "flex-[8]"
                        : "flex-[1.3] hover:flex-[1.6]",
                    ].join(" ")}
                  >
                    {/* Plus Icon */}
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 text-white/65 text-2xl select-none">
                      +
                    </div>

                    {/* Active Panel */}
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, x: 16 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.35 }}
                          className="h-full w-full px-6 py-6"
                        >
                          <div className="relative h-[260px] w-full overflow-hidden border border-white/10 bg-black/20">
                            <img loading="lazy" decoding="async"                               src={panel.image}
                              alt={panel.id}
                              className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                          </div>

                          <p className="mt-6 text-sm text-white/85 leading-relaxed whitespace-pre-line max-w-[520px]">
                            {panel.caption}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Panel ID */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm tracking-widest">
                      {panel.id}
                    </div>

                    <div className="absolute top-0 bottom-0 right-0 w-px bg-white/15" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ===================== IMPACT STATS ===================== */}
        <div
          ref={impactRef}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-10 items-end"
        >
          {stats.map((stat, idx) => (
            <ImpactStat
              key={stat.label}
              stat={stat}
              showDivider={idx !== 3}
              visible={impactVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
