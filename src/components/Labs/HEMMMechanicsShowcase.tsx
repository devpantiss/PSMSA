import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Pickaxe,
  Truck,
  Construction,
  //   Wrench,
  Sparkles,
  ScanEye,
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

const ACCENT = "#4eeac8";

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
  //   {
  //     id: "volvo-fmx",
  //     title: "Volvo FMX (Stylized)",
  //     category: "Truck",
  //     iframeSrc:
  //       "https://sketchfab.com/models/8e4c0bbbefa745f7882d04d9331a5245/embed?ui_theme=dark&ui_infos=0&ui_controls=1",
  //     sketchfabUrl:
  //       "https://sketchfab.com/3d-models/volvo-fmx-stylized-8e4c0bbbefa745f7882d04d9331a5245",
  //     authorName: "Ahmed Ragab",
  //     authorUrl: "https://sketchfab.com/Ahmed_Ragab90",
  //     icon: <Wrench className="h-4 w-4" />,
  //   },
];

const categories: ModelCategory[] = ["All", "Loader", "Dumper", "Excavator"];

export default function HEMMMechanicsShowcase() {
  const [activeCategory, setActiveCategory] = useState<ModelCategory>("All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") return models;
    return models.filter((m) => m.category === activeCategory);
  }, [activeCategory]);

  const [activeIndex, setActiveIndex] = useState(0);

  const activeModel = filtered[activeIndex] ?? filtered[0];

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % filtered.length);
  };

  return (
    <section className="relative w-full overflow-hidden bg-transparent py-16">
      {/* Futuristic Background */}
      {/* <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-52 left-1/2 h-[760px] w-[760px] -translate-x-1/2 rounded-full blur-[220px]"
          style={{ backgroundColor: `${ACCENT}18` }}
        />
        <div
          className="absolute bottom-[-360px] right-[-220px] h-[820px] w-[820px] rounded-full blur-[240px]"
          style={{ backgroundColor: `${ACCENT}12` }}
        />
        <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:56px_56px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.07),transparent_60%)]" />
      </div> */}

      <div className="relative mx-auto max-w-7xl px-5">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-xl">
              <span
                className="h-2 w-2 rounded-full animate-pulse"
                style={{ backgroundColor: ACCENT }}
              />
              Immersive Interactive 3D Equipment Bay
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Practical Training{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${ACCENT}, rgba(78,234,200,0.55))`,
                }}
              >
                Fleet
              </span>
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
              Select a machine and explore it in a futuristic simulator-style
              interface.
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
                    "rounded-full px-4 py-2 text-sm transition backdrop-blur-xl",
                    "border border-white/10 bg-white/5 text-white/70 hover:text-white",
                    isActive
                      ? "text-white shadow-[0_0_0_1px_rgba(255,255,255,0.14)]"
                      : "",
                  ].join(" ")}
                  style={
                    isActive
                      ? {
                          backgroundImage: `linear-gradient(90deg, ${ACCENT}22, ${ACCENT}10)`,
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

        {/* Main Simulator Layout */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_360px]">
          {/* LEFT: Hero Viewer */}
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl">
            {/* HUD overlay */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:100%_7px]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,rgba(0,0,0,0.78)_100%)]" />
            </div>

            {/* Top HUD Bar */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 bg-black/30 px-5 py-4">
              <div className="flex items-center gap-3">
                <div
                  className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-black/40"
                  style={{ boxShadow: `0 0 35px ${ACCENT}22` }}
                >
                  <span style={{ color: ACCENT }}>{activeModel?.icon}</span>
                </div>
                <div>
                  <p className="text-xs text-white/50">
                    {activeModel?.category}
                  </p>
                  <p className="text-sm font-semibold text-white">
                    {activeModel?.title}
                  </p>
                </div>
              </div>

              <a
                href={activeModel?.sketchfabUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-xs font-semibold text-white/75 transition hover:text-white"
              >
                Open <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            {/* Hero iframe with transition */}
            <div className="relative w-full">
              <div className="relative w-full overflow-hidden bg-black/40 pt-[56.25%]">
                <AnimatePresence mode="wait">
                  <motion.iframe
                    key={activeModel?.id}
                    title={activeModel?.title}
                    src={activeModel?.iframeSrc}
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                    loading="lazy"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.985 }}
                    transition={{ duration: 0.35 }}
                  />
                </AnimatePresence>

                {/* Neon frame glow */}
                <div className="pointer-events-none absolute inset-0">
                  <div
                    className="absolute inset-0 opacity-70"
                    style={{
                      boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.08), 0 0 45px ${ACCENT}18`,
                    }}
                  />
                </div>
              </div>

              {/* Floating controls */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between">
                <button
                  onClick={goPrev}
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-black/60 px-4 py-2 text-sm text-white/80 backdrop-blur-xl transition hover:bg-black/75"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Prev
                </button>

                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs text-white/70 backdrop-blur-xl">
                  <ScanEye className="h-4 w-4" style={{ color: ACCENT }} />
                  Drag • Zoom • Explore
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
          </div>

          {/* RIGHT: Preview Stack */}
          <div className="space-y-4">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/50">
                    Equipment Bay
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    Select Model
                  </p>
                  <p className="mt-1 text-sm text-white/70">
                    Click a card to load it in the simulator.
                  </p>
                </div>

                <div
                  className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-black/40"
                  style={{ boxShadow: `0 0 35px ${ACCENT}22` }}
                >
                  <Sparkles className="h-5 w-5" style={{ color: ACCENT }} />
                </div>
              </div>

              <div className="mt-4 space-y-2">
                {filtered.map((m, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={m.id}
                      onClick={() => setActiveIndex(idx)}
                      className={[
                        "w-full rounded-2xl border px-4 py-3 text-left transition",
                        "bg-black/30 backdrop-blur-xl",
                        isActive
                          ? "border-white/20"
                          : "border-white/10 hover:border-white/20",
                      ].join(" ")}
                      style={
                        isActive
                          ? {
                              boxShadow: `0 0 0 1px rgba(255,255,255,0.12), 0 0 45px ${ACCENT}12`,
                              backgroundImage: `linear-gradient(90deg, ${ACCENT}12, transparent)`,
                            }
                          : undefined
                      }
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div
                            className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5"
                            style={{
                              color: ACCENT,
                            }}
                          >
                            {m.icon}
                          </div>
                          <div>
                            <p className="text-xs text-white/50">
                              {m.category}
                            </p>
                            <p className="text-sm font-semibold text-white">
                              {m.title}
                            </p>
                          </div>
                        </div>

                        <span className="text-xs text-white/40">
                          {isActive ? "ACTIVE" : "LOAD"}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Micro note */}
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 text-sm text-white/70 backdrop-blur-xl">
              <span className="font-semibold text-white">Tip:</span> Keep only 1
              active model loaded for best performance. This simulator UI does
              exactly that.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
