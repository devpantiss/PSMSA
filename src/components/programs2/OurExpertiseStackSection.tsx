import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type ExpertiseId = "01" | "02" | "03" | "04" | "05";

type ProductCard = {
  tag: string;
  title: string;
  typeLabel?: string;
  typeValue?: string;
  durationLabel?: string;
  durationValue?: string;
  bg?: string;
  border?: string;
};

type ExpertiseItem = {
  id: ExpertiseId;
  menuTitle: string;
  heading: string;
  description: string;
  stats: { value: string; label: string }[];
  heroImage: string;
  heroBg: string;
  productsLabel: string;
  products: ProductCard[];
};

const DATA: ExpertiseItem[] = [
  {
    id: "01",
    menuTitle: "Leadership & Diversity",
    heading: "LEADERSHIP\n& DIVERSITY",
    description:
      "Our expertise is built on the understanding that companies are essentially groups of people who need to grow and excel, as individuals and teams.",
    stats: [
      { value: "84,000", label: "LEARNERS" },
      { value: "300+", label: "ENTERPRISES" },
      { value: "4.5", label: "AVERAGE FEEDBACK\nRATING" },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
    heroBg:
      "linear-gradient(180deg, rgba(163,230,53,0.95), rgba(250,204,21,0.9))",
    productsLabel: "/FLAGSHIP PRODUCTS",
    products: [
      {
        tag: "PROGRAM",
        title: "Women's Leadership\nProgram",
        typeLabel: "TYPE",
        typeValue: "COHORT BASED, BLENDED",
        durationLabel: "DURATION",
        durationValue: "8 WEEKS / 8 HOURS",
        bg: "#F3E4C4",
      },
      {
        tag: "PROGRAM",
        title: "First Time\nManager",
        typeLabel: "TYPE",
        typeValue: "COHORT BASED, BLENDED",
        durationLabel: "DURATION",
        durationValue: "10 WEEKS / 23 HOURS",
        bg: "#F3E4C4",
      },
      {
        tag: "PROGRAM",
        title: "Women\nAccelerator",
        typeLabel: "TYPE",
        typeValue: "COHORT BASED, BLENDED",
        durationLabel: "DURATION",
        durationValue: "10 WEEKS / 20 HOURS",
        bg: "#F3E4C4",
      },
      {
        tag: "PROGRAM",
        title: "Inclusive\nLeadership",
        typeLabel: "TYPE",
        typeValue: "COHORT BASED, BLENDED",
        durationLabel: "DURATION",
        durationValue: "6 WEEKS / 12 HOURS",
        bg: "#F3E4C4",
      },
    ],
  },
  {
    id: "02",
    menuTitle: "Sales & Service",
    heading: "SALES\n& SERVICE",
    description:
      "Our expertise is built on the understanding that customer-facing mandates are the building blocks of business and need continuous, deliberate sharpening.",
    stats: [
      { value: "1.1M+", label: "LEARNERS" },
      { value: "500+", label: "ENTERPRISES" },
      { value: "18+", label: "YEARS OF EXPERIENCE" },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    heroBg:
      "linear-gradient(180deg, rgba(34,211,238,0.95), rgba(59,130,246,0.9))",
    productsLabel: "/FLAGSHIP PRODUCTS",
    products: [
      {
        tag: "BOOTCAMP",
        title: "Leading With\nEmotional\nIntelligence",
        typeLabel: "TYPE",
        typeValue: "ONLINE / CLASSROOM",
        durationLabel: "DURATION",
        durationValue: "1 DAY / 8 HOURS",
        bg: "#DCEAD7",
      },
      {
        tag: "BOOTCAMP",
        title: "Accountability &\nOwnership",
        typeLabel: "TYPE",
        typeValue: "ONLINE / CLASSROOM",
        durationLabel: "DURATION",
        durationValue: "1 DAY / 8 HOURS",
        bg: "#DCEAD7",
      },
      {
        tag: "BOOTCAMP",
        title: "Growth Mindset",
        typeLabel: "TYPE",
        typeValue: "ONLINE / CLASSROOM",
        durationLabel: "DURATION",
        durationValue: "1 DAY / 8 HOURS",
        bg: "#DCEAD7",
      },
      {
        tag: "BOOTCAMP",
        title: "Customer\nExcellence",
        typeLabel: "TYPE",
        typeValue: "ONLINE / CLASSROOM",
        durationLabel: "DURATION",
        durationValue: "2 DAYS / 16 HOURS",
        bg: "#DCEAD7",
      },
    ],
  },
  {
    id: "03",
    menuTitle: "Tech & Data",
    heading: "TECH\n& DATA",
    description:
      "Our expertise is built on the understanding that all companies are essentially technology companies and need continuous effort to stay current.",
    stats: [
      { value: "16.60%", label: "PREDICTED CAGR" },
      { value: "$480B", label: "MARKET SIZE" },
      { value: "$3.1T", label: "LOST ANNUALLY DUE TO\nPOOR DATA QUALITY" },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=80",
    heroBg:
      "linear-gradient(180deg, rgba(168,85,247,0.95), rgba(59,130,246,0.9))",
    productsLabel: "/CORE TRACKS",
    products: [
      { tag: "TRACK", title: "Generative AI for Business", bg: "#DEE5E8" },
      { tag: "TRACK", title: "Data, Analytics &\nIntelligence", bg: "#DEE5E8" },
      {
        tag: "TRACK",
        title: "Digital Products &\nTransformation",
        bg: "#DEE5E8",
      },
      { tag: "TRACK", title: "Cloud &\nDevOps", bg: "#DEE5E8" },
    ],
  },
  {
    id: "04",
    menuTitle: "Talent Fulfillment",
    heading: "TALENT\nFULFILLMENT",
    description:
      "Our expertise is built on the understanding that all companies are at their core talent tribes and need access to the best of the best to grow.",
    stats: [
      { value: "32,000+", label: "PLACEMENTS" },
      { value: "220+", label: "ENTERPRISES" },
      { value: "80+", label: "GCCS ENGAGED" },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?auto=format&fit=crop&w=900&q=80",
    heroBg:
      "linear-gradient(180deg, rgba(148,163,184,0.85), rgba(0,0,0,0.05))",
    productsLabel: "/FLAGSHIP PRODUCTS",
    products: [
      {
        tag: "TALENT FULFILLMENT",
        title: "Studio for\nContingent\nWorkforce",
        typeLabel: "PROFESSIONALS PLACED",
        typeValue: "20,000+",
        durationLabel: "ENTERPRISES SCALED",
        durationValue: "220+",
        bg: "#E7E1D8",
      },
      {
        tag: "TALENT FULFILLMENT",
        title: "Studio for\nFull-Time\nPlacement",
        typeLabel: "NUMBER OF PEOPLE PLACED",
        typeValue: "12,000+",
        durationLabel: "EXPERIENCE",
        durationValue: "10+ YEARS",
        bg: "#E7E1D8",
      },
      {
        tag: "",
        title: "and more…",
        bg: "#EFE6D7",
        border: "1px solid rgba(0,0,0,0.6)",
      },
    ],
  },
  {
    id: "05",
    menuTitle: "Thriversity",
    heading: "THRIVERSITY",
    description:
      "Our expertise is built on the understanding that truly great companies strive for a tipping point on values, traits and competencies to raise the bar for everyone.",
    stats: [
      { value: "300+", label: "HOURS" },
      { value: "200+", label: "COURSES" },
      { value: "90%", label: "COMPLETION RATE" },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1524503033411-f7a2fe8c7f0f?auto=format&fit=crop&w=900&q=80",
    heroBg:
      "linear-gradient(180deg, rgba(249,115,22,0.85), rgba(0,0,0,0.05))",
    productsLabel: "/FLAGSHIP PRODUCTS",
    products: [
      {
        tag: "PATHWAY",
        title: "Early\nManagers",
        typeLabel: "ENGAGEMENT",
        typeValue: "9 THRIVE COURSES",
        durationLabel: "MASTERS",
        durationValue: "5 THRIVE MASTERS",
        bg: "#F3CFC5",
      },
      {
        tag: "PATHWAY",
        title: "Curiosity",
        typeLabel: "ENGAGEMENT",
        typeValue: "15 THRIVE COURSES",
        durationLabel: "MASTERS",
        durationValue: "3 THRIVE MASTERS",
        bg: "#FF3B00",
      },
      {
        tag: "",
        title: "and more…",
        bg: "#EFE6D7",
        border: "1px solid rgba(0,0,0,0.6)",
      },
    ],
  },
];

export default function OurExpertiseScrollStack() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = useMemo(() => DATA[activeIndex], [activeIndex]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLDivElement>(".oe-slide-card");

      // INITIAL: only first visible
      cards.forEach((card, i) => {
        gsap.set(card, {
          opacity: i === 0 ? 1 : 0,
          y: i === 0 ? 0 : 140,
          filter: i === 0 ? "blur(0px)" : "blur(8px)",
          pointerEvents: i === 0 ? "auto" : "none",
        });
      });

      const tl = gsap.timeline({
        defaults: { ease: "power3.inOut" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${(DATA.length - 1) * 650}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const idx = Math.round(self.progress * (DATA.length - 1));
            setActiveIndex(Math.max(0, Math.min(DATA.length - 1, idx)));
          },
        },
      });

      for (let i = 0; i < cards.length - 1; i++) {
        const current = cards[i];
        const next = cards[i + 1];

        tl.to(
          current,
          {
            opacity: 0,
            y: -80,
            filter: "blur(8px)",
            duration: 1,
            onStart: () => {
              current.style.pointerEvents = "none";
            },
          },
          i
        );

        tl.to(
          next,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            onStart: () => {
              next.style.pointerEvents = "auto";
            },
          },
          i
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden text-white pt-28"
    >
      {/* Purple background */}
      <div className="absolute inset-0 -z-10 bg-[#07040E]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(147,51,234,0.35),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.28),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.14),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
      </div>

      <div className="px-6 py-20">
        <div className="flex gap-10">
          {/* LEFT MENU (1/3) */}
          <aside className="w-1/4">
            <div className="sticky top-12">
              <h2 className="text-5xl leading-[0.95] tracking-tight font-light">
                /OUR
                <br />
                EXPERTISE
              </h2>

              <div className="mt-10">
                {DATA.map((item, idx) => {
                  const isActive = idx === activeIndex;

                  return (
                    <div
                      key={item.id}
                      className={[
                        "flex items-center justify-between py-5 border-b border-white/15 transition-all duration-300",
                        isActive
                          ? "text-white"
                          : "text-white/45 hover:text-white/75",
                      ].join(" ")}
                    >
                      <span className="text-sm md:text-base">
                        {item.menuTitle}
                      </span>

                      <span
                        className={[
                          "text-sm tracking-widest",
                          isActive ? "text-white/90" : "text-white/35",
                        ].join(" ")}
                      >
                        /{item.id}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* RIGHT CARDS (2/3) */}
          <div className="w-3/4">
            <div className="relative h-[560px] w-full">
              {DATA.map((item) => (
                <div
                  key={item.id}
                  className="oe-slide-card absolute inset-0"
                  style={{ willChange: "transform, opacity, filter" }}
                >
                  <ExpertiseCard item={item} />
                </div>
              ))}
            </div>

            <div className="mt-6 text-xs text-white/40 tracking-widest">
              SCROLL TO EXPLORE
            </div>
          </div>
        </div>

        {/* Debug */}
        <div className="mt-14 text-xs text-white/20">
          Active: {activeItem.menuTitle} /{activeItem.id}
        </div>
      </div>
    </section>
  );
}

function ExpertiseCard({ item }: { item: ExpertiseItem }) {
  return (
    <div className="h-full w-full rounded-2xl bg-[#efe6d7] text-black shadow-[0_18px_60px_rgba(0,0,0,0.45)] overflow-hidden">
      <div className="grid grid-cols-12 h-full overflow-hidden">
        {/* LEFT IMAGE */}
        <div className="col-span-4 p-6">
          <div className="relative h-full w-full overflow-hidden rounded-xl">
            <div className="absolute inset-0" style={{ background: item.heroBg }} />
            <img
              src={item.heroImage}
              alt={item.menuTitle}
              className="absolute inset-0 h-full w-full object-cover grayscale"
            />

            <div className="absolute bottom-5 left-0 right-0 flex justify-center">
              <button className="text-white/90 text-xs tracking-widest uppercase inline-flex items-center gap-2">
                LEARN MORE <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="col-span-8 p-8 pr-8">
          {/* Top row */}
          <div className="flex items-start justify-between gap-10">
            <div className="max-w-[440px]">
              <h3 className="text-5xl leading-[0.95] font-light tracking-tight whitespace-pre-line">
                {item.heading}
              </h3>
              <p className="mt-4 text-[13px] leading-relaxed text-black/65">
                {item.description}
              </p>
            </div>

            <div className="w-[250px] space-y-4">
              {item.stats.map((s, i) => (
                <div key={i} className="flex items-start justify-between gap-4">
                  <div className="text-base font-medium">{s.value}</div>
                  <div className="text-[10px] tracking-widest text-black/45 text-right whitespace-pre-line">
                    {s.label}
                  </div>
                </div>
              ))}
              <div className="h-px w-full bg-black/15" />
            </div>
          </div>

          <div className="mt-6 h-px w-full bg-black/15" />

          {/* Slider */}
          <div className="mt-6">
            <ProductsSlider products={item.products} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* -----------------------------
   PRODUCTION SLIDER (scrollLeft based)
----------------------------- */

function ProductsSlider({ products }: { products: ProductCard[] }) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollByOneCard = (dir: "prev" | "next") => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLDivElement>("[data-slide-card='true']");
    if (!card) return;

    const cardWidth = card.getBoundingClientRect().width;
    const GAP = 24; // gap-6

    track.scrollBy({
      left: dir === "next" ? cardWidth + GAP : -(cardWidth + GAP),
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full">
      {/* Header controls */}
      <div className="flex items-center justify-between">
        <p className="text-[11px] tracking-widest text-black/60">
          /FLAGSHIP PRODUCTS
        </p>

        <div className="flex items-center gap-3 text-black/60">
          <button
            onClick={() => scrollByOneCard("prev")}
            className="p-2 rounded-full border border-black/15 hover:border-black/30 hover:text-black transition"
            aria-label="Previous"
            type="button"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <button
            onClick={() => scrollByOneCard("next")}
            className="p-2 rounded-full border border-black/15 hover:border-black/30 hover:text-black transition"
            aria-label="Next"
            type="button"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Slider track */}
      <div
        ref={trackRef}
        className="mt-5 flex gap-6 overflow-x-auto scroll-smooth pb-2"
        style={{ scrollbarWidth: "none" }}
      >
        <style>{`
          .oe-hide-scrollbar::-webkit-scrollbar { display: none; }
        `}</style>

        {products.map((p, idx) => {
          const isMoreCard = p.title.toLowerCase().includes("and more");
          const customBorder = p.border ?? "1px solid rgba(0,0,0,0.10)";

          return (
            <div
              key={idx}
              data-slide-card="true"
              className="shrink-0 w-[calc((100%-48px)/3)]"
            >
              <div
                className="min-h-[220px] p-6 rounded-xl"
                style={{
                  background: p.bg ?? "#efe6d7",
                  border: customBorder,
                }}
              >
                {p.tag ? (
                  <span className="inline-block bg-black text-white text-[10px] tracking-widest px-4 py-2 rounded-full">
                    {p.tag}
                  </span>
                ) : (
                  <span className="inline-block h-[28px]" />
                )}

                <h4 className="mt-4 text-base font-medium whitespace-pre-line leading-snug">
                  {p.title}
                </h4>

                {!isMoreCard && (
                  <div className="mt-5 h-px w-full bg-black/15" />
                )}

                {(p.typeLabel || p.durationLabel) && (
                  <div className="mt-4 space-y-3 text-[10px] tracking-widest text-black/60">
                    {p.typeLabel && (
                      <div>
                        <div className="text-black/35">{p.typeLabel}</div>
                        <div className="mt-1 text-black/75">{p.typeValue}</div>
                      </div>
                    )}
                    {p.durationLabel && (
                      <div>
                        <div className="text-black/35">{p.durationLabel}</div>
                        <div className="mt-1 text-black/75">
                          {p.durationValue}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {isMoreCard && (
                  <div className="mt-10 border border-black/60 p-6 rounded-xl">
                    <p className="text-sm font-medium">and more…</p>
                    <div className="mt-10 text-base tracking-widest uppercase">
                      SEE ALL PRODUCTS
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-2 text-[10px] tracking-widest text-black/40">
        SCROLL / SWIPE TO VIEW MORE
      </div>
    </div>
  );
}
