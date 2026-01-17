import React, { useEffect, useMemo, useRef, useState } from "react";

interface Partner {
  name: string;
  logo: string;
  category: "government" | "industry" | "education" | "technology";
}

interface CategoryTheme {
  chip: string;
  border: string;
  glow: string;
  accent: string;
  gradient: string;
}

interface FloatingOrbProps {
  size: string;
  color: string;
  position: React.CSSProperties;
  delay?: number;
}

interface PartnerCardProps {
  partner: Partner;
  index: number;
}

const ACCENT = "#4eeac8";
const PURPLE = "#7c3aed"; // purple-600 vibe

const partners: Partner[] = [
  {
    name: "UGC",
    logo: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/logos/UGC.webp",
    category: "government",
  },
  {
    name: "NSDC",
    logo: "https://www.msu.edu.in/frontend_assets/images/Government-partners/govt-2.png",
    category: "government",
  },
  {
    name: "Sikkim",
    logo: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/logos/govt-of-sikkim.jpg",
    category: "government",
  },
  {
    name: "NAPS",
    logo: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/logos/NAPS.webp",
    category: "government",
  },
  {
    name: "NATS",
    logo: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/logos/NATS.webp",
    category: "government",
  },
  {
    name: "DGT",
    logo: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/logos/DGT.webp",
    category: "government",
  },
  {
    name: "Skill India",
    logo: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/logos/Skill-India-min.webp",
    category: "government",
  },
  {
    name: "TTAADC",
    logo: "https://www.msu.edu.in/frontend_assets/images/Government-partners/govt-5.png",
    category: "government",
  },
  {
    name: "Film School",
    logo: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/logos/image-filem-school.jpg",
    category: "education",
  },
  {
    name: "iAce",
    logo: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/logos/iAce.png",
    category: "technology",
  },
  {
    name: "Crowne Plaza",
    logo: "https://www.msu.edu.in/frontend_assets/images/industry-partners/Crowne_Plaza_logo_logotype.png",
    category: "industry",
  },
  {
    name: "Holiday Inn",
    logo: "https://www.msu.edu.in/frontend_assets/images/industry-partners/HOLIDAY_INN_EXPRESS.png",
    category: "industry",
  },
  {
    name: "D23",
    logo: "https://www.msu.edu.in/frontend_assets/images/industry-partners/d23-min.jpg",
    category: "industry",
  },
  {
    name: "Skilling-9",
    logo: "https://www.msu.edu.in/frontend_assets/images/industry-partners/skilling-9.png",
    category: "industry",
  },
  {
    name: "LCBS",
    logo: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/logos/LCBS.png",
    category: "education",
  },
  {
    name: "Don Bosco",
    logo: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/logos/Don+Bosco+Image.webp",
    category: "education",
  },
  {
    name: "Emversity",
    logo: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/website-images/emversity.jpg",
    category: "technology",
  },
  {
    name: "Logic Knots",
    logo: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/logos/Logic-Knots.png",
    category: "technology",
  },
  {
    name: "Tech Partner 5",
    logo: "https://www.msu.edu.in/frontend_assets/images/technology-partners/tech-5.png",
    category: "technology",
  },
  {
    name: "Tech Partner 3",
    logo: "https://www.msu.edu.in/frontend_assets/images/technology-partners/tech-3.png",
    category: "technology",
  },
];

const categoryThemes: Record<Partner["category"], CategoryTheme> = {
  government: {
    chip: "text-white/80",
    border: "border-white/10",
    glow: "shadow-[0_0_40px_rgba(124,58,237,0.18)]",
    accent: PURPLE,
    gradient: "from-white/8 via-white/5 to-white/8",
  },
  industry: {
    chip: "text-white/80",
    border: "border-white/10",
    glow: "shadow-[0_0_40px_rgba(78,234,200,0.16)]",
    accent: ACCENT,
    gradient: "from-white/8 via-white/5 to-white/8",
  },
  education: {
    chip: "text-white/80",
    border: "border-white/10",
    glow: "shadow-[0_0_40px_rgba(124,58,237,0.14)]",
    accent: PURPLE,
    gradient: "from-white/8 via-white/5 to-white/8",
  },
  technology: {
    chip: "text-white/80",
    border: "border-white/10",
    glow: "shadow-[0_0_40px_rgba(78,234,200,0.14)]",
    accent: ACCENT,
    gradient: "from-white/8 via-white/5 to-white/8",
  },
};

/* -----------------------------
   Intersection Observer Hook
----------------------------- */
const useIntersectionObserver = (
  options: IntersectionObserverInit = {}
): [React.RefObject<HTMLDivElement>, boolean] => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.12, ...options }
    );

    if (ref.current) obs.observe(ref.current);

    return () => {
      if (ref.current) obs.unobserve(ref.current);
    };
  }, [options]);

  return [ref, isVisible];
};

/* -----------------------------
   Floating Orb
----------------------------- */
const FloatingOrb: React.FC<FloatingOrbProps> = ({
  size,
  color,
  position,
  delay = 0,
}) => (
  <div
    className={`absolute ${size} ${color} rounded-full blur-[120px] opacity-20`}
    style={{
      ...position,
      animationDelay: `${delay}s`,
      animation: `orbPulse ${5 + Math.random() * 4}s ease-in-out infinite`,
    }}
  />
);

/* -----------------------------
   Partner Card (Equal Height)
----------------------------- */
const PartnerCard: React.FC<PartnerCardProps> = ({ partner, index }) => {
  const [cardRef, visible] = useIntersectionObserver();
  const theme = categoryThemes[partner.category];

  return (
    <div
      ref={cardRef}
      className={`
        transform transition-all duration-700 ease-out
        ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
      `}
      style={{ transitionDelay: `${index * 45}ms` }}
    >
      <div
        className={`
          group relative h-[140px] w-full
          overflow-hidden rounded-3xl
          border ${theme.border}
          bg-gradient-to-br ${theme.gradient}
          backdrop-blur-xl
          transition-all duration-500
          hover:scale-[1.02] hover:${theme.glow}
        `}
      >
        {/* corner accent */}
        <div
          className="absolute right-0 top-0 h-10 w-10 rounded-bl-3xl opacity-35 transition duration-500 group-hover:opacity-60"
          style={{
            background: `linear-gradient(135deg, ${theme.accent}, transparent)`,
          }}
        />

        {/* shine sweep */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
          <div
            className="absolute -left-24 top-0 h-full w-44 rotate-12 blur-2xl"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.14), transparent)",
            }}
          />
        </div>

        {/* inner glass */}
        <div className="absolute inset-[1px] rounded-[22px] bg-black/35" />

        {/* content */}
        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <img
            src={partner.logo}
            alt={partner.name}
            className="
              max-h-14 w-auto object-contain
              opacity-90 grayscale
              transition duration-500
              group-hover:opacity-100 group-hover:grayscale-0
              group-hover:scale-[1.06]
              drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]
            "
            loading="lazy"
            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              const next = target.nextSibling as HTMLElement;
              if (next) next.style.display = "flex";
            }}
          />

          {/* fallback */}
          <div className="hidden h-14 w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-center text-xs font-semibold text-white/80">
            {partner.name}
          </div>
        </div>

        {/* tooltip */}
        <div className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 rounded-2xl border border-white/10 bg-black/80 px-4 py-2 text-xs font-semibold text-white/85 opacity-0 transition duration-300 group-hover:opacity-100">
          {partner.name}
        </div>

        {/* micro bottom bar */}
        <div
          className="absolute bottom-0 left-0 h-[2px] w-full opacity-60"
          style={{
            backgroundImage: `linear-gradient(90deg, transparent, ${theme.accent}, transparent)`,
          }}
        />
      </div>
    </div>
  );
};

const PartnersLogos: React.FC = () => {
  const [sectionRef, visible] = useIntersectionObserver();
  const [activeFilter, setActiveFilter] = useState<
    "all" | Partner["category"]
  >("all");

  const categories = useMemo(
    () => ["all", "government", "industry", "education", "technology"] as const,
    []
  );

  const filteredPartners =
    activeFilter === "all"
      ? partners
      : partners.filter((p) => p.category === activeFilter);

  const counts = useMemo(() => {
    return partners.reduce(
      (acc, p) => {
        acc[p.category] += 1;
        return acc;
      },
      { government: 0, industry: 0, education: 0, technology: 0 }
    );
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-black py-24">
      {/* Premium sci-fi background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <FloatingOrb
          size="h-[520px] w-[520px]"
          color="bg-purple-600"
          position={{ top: "-12%", left: "-8%" }}
          delay={0}
        />
        <FloatingOrb
          size="h-[520px] w-[520px]"
          color="bg-[#4eeac8]"
          position={{ top: "10%", right: "-10%" }}
          delay={1.2}
        />
        <FloatingOrb
          size="h-[520px] w-[520px]"
          color="bg-purple-600"
          position={{ bottom: "-18%", left: "18%" }}
          delay={2.2}
        />

        {/* HUD grid */}
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />

        {/* scanlines */}
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:100%_8px]" />

        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_42%,rgba(0,0,0,0.92)_100%)]" />
      </div>

      <div
        ref={sectionRef}
        className="relative z-10 mx-auto max-w-7xl px-6"
      >
        {/* Header */}
        <div
          className={`
            text-center transition-all duration-1000 ease-out
            ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
          `}
        >
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur-xl">
            <span
              className="h-2 w-2 rounded-full animate-pulse"
              style={{ backgroundColor: ACCENT }}
            />
            Ecosystem of Collaboration
          </p>

          <h2 className="mt-5 text-5xl font-extrabold tracking-tight text-white md:text-6xl">
            Our{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${ACCENT}, ${PURPLE})`,
              }}
            >
              Partners
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base text-white/70 md:text-lg">
            Government, Industry, Education & Technology partners powering skill
            excellence.
          </p>

          <div
            className="mx-auto mt-8 h-[3px] w-28 rounded-full"
            style={{
              backgroundImage: `linear-gradient(90deg, ${PURPLE}, transparent)`,
            }}
          />
        </div>

        {/* Filters */}
        <div
          className={`
            mt-14 flex flex-wrap justify-center gap-3
            transition-all duration-1000 ease-out
            ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
          `}
          style={{ transitionDelay: "120ms" }}
        >
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            const label = cat.charAt(0).toUpperCase() + cat.slice(1);

            const count =
              cat === "all"
                ? partners.length
                : counts[cat as Exclude<typeof cat, "all">];

            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`
                  relative overflow-hidden rounded-2xl px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em]
                  transition duration-300
                  ${
                    isActive
                      ? "border border-white/15 bg-white/10 text-white shadow-[0_0_40px_rgba(78,234,200,0.14)]"
                      : "border border-white/10 bg-white/5 text-white/70 hover:text-white hover:bg-white/10"
                  }
                `}
              >
                <span className="relative z-10">
                  {label}
                  <span className="ml-2 text-[10px] opacity-60">({count})</span>
                </span>

                {/* subtle shine */}
                <span className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 hover:opacity-100">
                  <span className="absolute -left-24 top-0 h-full w-44 rotate-12 bg-white/10 blur-2xl" />
                </span>
              </button>
            );
          })}
        </div>

        {/* Stats */}
        <div
          className={`
            mt-14 grid grid-cols-2 gap-5 md:grid-cols-4
            transition-all duration-1000 ease-out
            ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
          `}
          style={{ transitionDelay: "220ms" }}
        >
          {(
            [
              ["government", counts.government],
              ["industry", counts.industry],
              ["education", counts.education],
              ["technology", counts.technology],
            ] as const
          ).map(([cat, count]) => {
            const theme = categoryThemes[cat];
            return (
              <div
                key={cat}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl"
              >
                <p className="text-4xl font-extrabold text-white tabular-nums">
                  {count}
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-white/60">
                  {cat}
                </p>
                <div
                  className="mx-auto mt-4 h-[2px] w-14 rounded-full opacity-80"
                  style={{
                    backgroundImage: `linear-gradient(90deg, transparent, ${theme.accent}, transparent)`,
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Grid */}
        <div
          className={`
            mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6
            transition-all duration-1000 ease-out
            ${visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}
          `}
          style={{ transitionDelay: "320ms" }}
        >
          {filteredPartners.map((p, idx) => (
            <PartnerCard key={`${p.name}-${activeFilter}-${idx}`} partner={p} index={idx} />
          ))}
        </div>

        {/* Footer ornament */}
        <div className="mt-20 flex items-center justify-center">
          <div className="flex items-center gap-4 opacity-70">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/30" />
            <div
              className="h-2.5 w-2.5 rounded-full"
              style={{
                backgroundColor: ACCENT,
                boxShadow: `0 0 20px ${ACCENT}66`,
              }}
            />
            <div className="h-px w-28 bg-gradient-to-r from-white/30 to-white/10" />
            <div
              className="h-2 w-2 rounded-full"
              style={{
                backgroundColor: PURPLE,
                boxShadow: `0 0 20px ${PURPLE}66`,
              }}
            />
            <div className="h-px w-16 bg-gradient-to-r from-white/10 to-transparent" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes orbPulse {
          0%, 100% { transform: scale(1); opacity: 0.18; }
          50% { transform: scale(1.12); opacity: 0.28; }
        }
      `}</style>
    </section>
  );
};

export default PartnersLogos;