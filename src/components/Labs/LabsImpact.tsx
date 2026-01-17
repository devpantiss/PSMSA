import React, { useEffect, useMemo, useRef, useState } from "react";
import { TrendingUp, Users, Factory, BadgeCheck } from "lucide-react";

const ACCENT = "#4eeac8";

/* ---------------- DATA ---------------- */

const stats = [
  {
    label: "Learners Trained",
    value: "25,000+",
    icon: <Users className="h-5 w-5" />,
  },
  {
    label: "Industry Partners",
    value: "120+",
    icon: <Factory className="h-5 w-5" />,
  },
  {
    label: "Job Roles Enabled",
    value: "80+",
    icon: <TrendingUp className="h-5 w-5" />,
  },
  {
    label: "Placement Readiness",
    value: "90%",
    icon: <BadgeCheck className="h-5 w-5" />,
  },
];

/* ---------------- HELPERS ---------------- */

function parseStatValue(input: string) {
  // Supports: "25,000+", "120+", "80+", "90%"
  const isPercent = input.includes("%");
  const hasPlus = input.includes("+");
  const numeric = Number(input.replace(/[^0-9]/g, "")) || 0;

  return { numeric, isPercent, hasPlus };
}

function formatStatValue(n: number, original: string) {
  const { isPercent, hasPlus } = parseStatValue(original);

  const formatted = n.toLocaleString("en-IN");
  if (isPercent) return `${formatted}%`;
  if (hasPlus) return `${formatted}+`;
  return formatted;
}

/* Count-up hook (smooth + lightweight) */
function useCountUp(target: number, enabled: boolean, duration = 1100) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const animate = (t: number) => {
      if (startRef.current === null) startRef.current = t;
      const elapsed = t - startRef.current;

      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);

      const current = Math.round(target * eased);
      setValue(current);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      startRef.current = null;
    };
  }, [enabled, target, duration]);

  return value;
}

/* Intersection observer hook */
function useInView<T extends HTMLElement>(threshold = 0.25) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );

    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/* ---------------- COMPONENT ---------------- */

const LabsImpact: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>(0.22);

  const parsed = useMemo(
    () => stats.map((s) => ({ ...s, parsed: parseStatValue(s.value) })),
    []
  );

  return (
    <section className="relative overflow-hidden bg-transparent py-20">
      {/* Local subtle sci-fi layer (transparent, blends with page) */}
      <div className="pointer-events-none absolute inset-0">
        {/* neon haze */}
        <div
          className="absolute left-[-180px] top-[-160px] h-[520px] w-[520px] rounded-full blur-[200px] opacity-25"
          style={{ backgroundColor: `${ACCENT}18` }}
        />
        <div
          className="absolute bottom-[-200px] right-[-200px] h-[560px] w-[560px] rounded-full blur-[220px] opacity-20"
          style={{ backgroundColor: `${ACCENT}14` }}
        />

        {/* faint HUD grid */}
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(78,234,200,0.20)_1px,transparent_1px),linear-gradient(90deg,rgba(78,234,200,0.20)_1px,transparent_1px)] [background-size:80px_80px]" />

        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.72)_100%)]" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur-xl">
            <span
              className="h-2 w-2 rounded-full animate-pulse"
              style={{ backgroundColor: ACCENT }}
            />
            Impact Metrics • Labs at Scale
          </p>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Real{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${ACCENT}, rgba(78,234,200,0.45))`,
              }}
            >
              Outcomes
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/70 md:text-base">
            Numbers that reflect job-readiness, industry partnerships, and scalable training
            delivery — powered by next-gen labs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-4">
          {parsed.map((s, idx) => {
            const count = useCountUp(s.parsed.numeric, inView, 1150 + idx * 120);

            return (
              <div
                key={s.label}
                className="
                  group relative overflow-hidden rounded-3xl
                  border border-white/10 bg-white/5 backdrop-blur-xl
                  p-6 text-center
                  transition-all duration-500
                  hover:-translate-y-1 hover:border-white/20
                "
                style={{
                  boxShadow: `0 0 0 1px rgba(255,255,255,0.04), 0 0 70px rgba(78,234,200,0.08)`,
                }}
              >
                {/* Hover sweep (sound-like visual micro interaction) */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(120deg, transparent 20%, rgba(78,234,200,0.16), transparent 80%)",
                      transform: "translateX(-60%)",
                      animation: "impactSweep 1.1s ease forwards",
                    }}
                  />
                </div>

                {/* Data pulse (subtle internal movement) */}
                <div className="pointer-events-none absolute inset-0">
                  <div
                    className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[60px] opacity-0 transition duration-500 group-hover:opacity-100"
                    style={{
                      backgroundColor: `${ACCENT}18`,
                      animation: inView ? "impactPulse 2.4s ease-in-out infinite" : "none",
                    }}
                  />
                </div>

                {/* Ripple blip (like a soft "ping") */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100">
                  <div
                    className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                      backgroundColor: ACCENT,
                      animation: "impactPing 0.9s ease-out forwards",
                      boxShadow: `0 0 26px ${ACCENT}55`,
                    }}
                  />
                </div>

                {/* Icon */}
                <div
                  className="mx-auto grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-black/40"
                  style={{
                    color: ACCENT,
                    boxShadow: `0 0 40px rgba(78,234,200,0.16)`,
                  }}
                >
                  {s.icon}
                </div>

                {/* Value (count-up) */}
                <p className="mt-5 text-4xl font-extrabold tracking-tight text-white tabular-nums">
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${ACCENT}, rgba(255,255,255,0.85))`,
                    }}
                  >
                    {formatStatValue(count, s.value)}
                  </span>
                </p>

                {/* Label */}
                <p className="mt-2 text-sm text-white/70">{s.label}</p>

                {/* Bottom neon line */}
                <div
                  className="mx-auto mt-5 h-[2px] w-16 rounded-full opacity-80"
                  style={{
                    backgroundImage: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Scoped animations */}
      <style>{`
        @keyframes impactPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(0.96); opacity: 0.10; }
          50% { transform: translate(-50%, -50%) scale(1.04); opacity: 0.22; }
        }

        @keyframes impactPing {
          0% { transform: translate(-50%, -50%) scale(0.9); opacity: 0.85; }
          100% { transform: translate(-50%, -50%) scale(18); opacity: 0; }
        }

        @keyframes impactSweep {
          0% { transform: translateX(-70%); opacity: 0.0; }
          15% { opacity: 1; }
          100% { transform: translateX(70%); opacity: 0.0; }
        }
      `}</style>
    </section>
  );
};

export default LabsImpact;