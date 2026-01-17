import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Truck,
  Construction,
  Pickaxe,
} from "lucide-react";

type ModelCategory = "All" | "Loader" | "Dumper" | "Excavator";

type SketchfabModel = {
  id: string;
  title: string;
  category: Exclude<ModelCategory, "All">;
  iframeSrc: string;
  sketchfabUrl: string;
  authorName: string;
  authorUrl: string;
  icon: React.ReactNode;
};

const ACCENT = "#9333ea"; // purple-600

const models: SketchfabModel[] = [
  {
    id: "volvo-l220h",
    title: "Volvo L220H",
    category: "Loader",
    iframeSrc:
      "https://sketchfab.com/models/ae722dd38bf5491590cb5df4df800871/embed?ui_theme=dark&transparent=1&autospin=1&autostart=1&preload=1&ui_infos=0&ui_controls=1",
    sketchfabUrl:
      "https://sketchfab.com/3d-models/volvo-l220h-ae722dd38bf5491590cb5df4df800871",
    authorName: "Ricardo",
    authorUrl: "https://sketchfab.com/ricardoalb",
    icon: <Pickaxe className="h-4 w-4" />,
  },
  {
    id: "volvo-a40g",
    title: "Volvo A40G",
    category: "Dumper",
    iframeSrc:
      "https://sketchfab.com/models/323ace20856d478e89acface2a762809/embed?ui_theme=dark&transparent=1&autospin=1&autostart=1&preload=1&ui_infos=0&ui_controls=1",
    sketchfabUrl:
      "https://sketchfab.com/3d-models/volvo-a40g-323ace20856d478e89acface2a762809",
    authorName: "Ricardo",
    authorUrl: "https://sketchfab.com/ricardoalb",
    icon: <Truck className="h-4 w-4" />,
  },
  {
    id: "volvo-ec380el",
    title: "Volvo EC380EL",
    category: "Excavator",
    iframeSrc:
      "https://sketchfab.com/models/670325cfb1534d4aa19d5b2c38d1034e/embed?ui_theme=dark&transparent=1&autospin=1&autostart=1&preload=1&ui_infos=0&ui_controls=1",
    sketchfabUrl:
      "https://sketchfab.com/3d-models/volvo-ec380el-670325cfb1534d4aa19d5b2c38d1034e",
    authorName: "Ricardo",
    authorUrl: "https://sketchfab.com/ricardoalb",
    icon: <Construction className="h-4 w-4" />,
  },
];

const categories: ModelCategory[] = ["All", "Loader", "Dumper", "Excavator"];

export default function WomenSchoolsCourses() {
  const [activeCategory, setActiveCategory] = useState<ModelCategory>("All");
  const [activeIndex, setActiveIndex] = useState(0);

  const filtered = useMemo(() => {
    const list = activeCategory === "All"
      ? models
      : models.filter((m) => m.category === activeCategory);

    return list;
  }, [activeCategory]);

  const activeModel = filtered[activeIndex] ?? filtered[0];

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % filtered.length);
  };

  return (
    <section className="relative w-full bg-black py-16">
      <div className="mx-auto max-w-7xl px-5">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: ACCENT }}
              />
              Women in Mining • Operator Training Fleet
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Vehicles You Will{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${ACCENT}, rgba(147,51,234,0.55))`,
                }}
              >
                Learn to Operate
              </span>
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
              Explore the equipment in 3D. Drag to rotate, zoom in, and get familiar
              with key machines used in mining operations.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = cat === activeCategory;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setActiveIndex(0);
                  }}
                  className={[
                    "rounded-full px-4 py-2 text-sm transition backdrop-blur",
                    "border border-white/10 bg-white/5 text-white/70 hover:text-white",
                    isActive ? "text-white" : "",
                  ].join(" ")}
                  style={
                    isActive
                      ? {
                          borderColor: `${ACCENT}55`,
                          backgroundImage: `linear-gradient(90deg, ${ACCENT}22, transparent)`,
                        }
                      : undefined
                  }
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Layout */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_360px]">
          {/* Viewer */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
            {/* Top Bar */}
            <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-black/20 px-5 py-4">
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-black/30"
                  style={{ color: ACCENT }}
                >
                  {activeModel?.icon}
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-white/50">{activeModel?.category}</p>
                  <p className="text-sm font-semibold text-white truncate">
                    {activeModel?.title}
                  </p>
                </div>
              </div>

              <a
                href={activeModel?.sketchfabUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-xs font-semibold text-white/75 transition hover:text-white"
              >
                View <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            {/* Iframe */}
            <div className="relative w-full bg-black/40 pt-[56.25%]">
              <AnimatePresence mode="wait">
                <motion.iframe
                  key={activeModel?.id}
                  title={activeModel?.title}
                  src={activeModel?.iframeSrc}
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                />
              </AnimatePresence>

              {/* soft purple glow */}
              <div className="pointer-events-none absolute inset-0">
                <div
                  className="absolute inset-0"
                  style={{
                    boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.06), 0 0 40px ${ACCENT}18`,
                  }}
                />
              </div>

              {/* Controls */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <button
                  onClick={goPrev}
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-black/50 px-4 py-2 text-sm text-white/80 backdrop-blur transition hover:bg-black/65"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Prev
                </button>

                <button
                  onClick={goNext}
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-black/50 px-4 py-2 text-sm text-white/80 backdrop-blur transition hover:bg-black/65"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right list */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <p className="text-sm font-semibold text-white">Select a Vehicle</p>
            <p className="mt-1 text-sm text-white/60">
              Choose from the training fleet below.
            </p>

            <div className="mt-4 space-y-2">
              {filtered.map((m, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={m.id}
                    onClick={() => setActiveIndex(idx)}
                    className={[
                      "w-full rounded-2xl border px-4 py-3 text-left transition",
                      "bg-black/20",
                      isActive
                        ? "border-white/20"
                        : "border-white/10 hover:border-white/20",
                    ].join(" ")}
                    style={
                      isActive
                        ? {
                            borderColor: `${ACCENT}55`,
                            backgroundImage: `linear-gradient(90deg, ${ACCENT}14, transparent)`,
                          }
                        : undefined
                    }
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5"
                          style={{ color: ACCENT }}
                        >
                          {m.icon}
                        </div>

                        <div>
                          <p className="text-xs text-white/50">{m.category}</p>
                          <p className="text-sm font-semibold text-white">
                            {m.title}
                          </p>
                        </div>
                      </div>

                      <span className="text-[11px] text-white/40">
                        {isActive ? "ACTIVE" : "VIEW"}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4 text-xs text-white/60">
              Tip: Drag to rotate • Scroll to zoom • Use fullscreen for best view.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
