import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Zap,
  Flame,
  Truck,
} from "lucide-react";

/* ============================
   Types
============================ */

type ModelCategory = "All" | "Electrical" | "Fabrication" | "Mining";

type Spec = {
  label: string;
  value: string;
  relevance: string;
};

type ARVRModel = {
  id: string;
  title: string;
  category: Exclude<ModelCategory, "All">;
  iframeSrc: string;
  sketchfabUrl: string;
  icon: React.ReactNode;
  specs: Spec[];
};

const ACCENT = "#4eeac8";

/* ============================
   Data
============================ */

const models: ARVRModel[] = [
  {
    id: "arvr-electrician",
    title: "Electrician Simulator",
    category: "Electrical",
    iframeSrc:
      "https://sketchfab.com/models/a529e8131b8743c3a40ca201f130c447/embed?ui_theme=dark&transparent=1&autospin=1&autostart=1&preload=1&ui_infos=0&ui_controls=1",
    sketchfabUrl:
      "https://sketchfab.com/3d-models/oculus-quest-2-vr-headset-with-controllers-a529e8131b8743c3a40ca201f130c447",
    icon: <Zap className="h-4 w-4" />,
    specs: [
      {
        label: "Hardware",
        value: "Meta Quest 2",
        relevance: "6DoF tracking",
      },
      {
        label: "Environment",
        value: "Virtual Substation",
        relevance: "High-voltage sim",
      },
      {
        label: "Key Skills",
        value: "Wiring & Panels",
        relevance: "Fault diagnosis",
      },
      {
        label: "Safety Rating",
        value: "100%",
        relevance: "Zero-risk env",
      },
      {
        label: "Analytics",
        value: "Real-time Tracking",
        relevance: "Performance monitor",
      },
    ],
  },
  {
    id: "arvr-welder",
    title: "Welding VR Lab",
    category: "Fabrication",
    iframeSrc:
      "https://sketchfab.com/models/a529e8131b8743c3a40ca201f130c447/embed?ui_theme=dark&transparent=1&autospin=1&autostart=1&preload=1&ui_infos=0&ui_controls=1",
    sketchfabUrl:
      "https://sketchfab.com/3d-models/oculus-quest-2-vr-headset-with-controllers-a529e8131b8743c3a40ca201f130c447",
    icon: <Flame className="h-4 w-4" />,
    specs: [
      {
        label: "Hardware",
        value: "Meta Quest 2",
        relevance: "Haptic feedback",
      },
      {
        label: "Technique",
        value: "MIG / TIG Welding",
        relevance: "Muscle memory",
      },
      {
        label: "Assessment",
        value: "Angle & Speed",
        relevance: "Quality checks",
      },
      {
        label: "Material Waste",
        value: "Zero",
        relevance: "Cost-effective",
      },
      {
        label: "Environment",
        value: "Virtual Workshop",
        relevance: "Industrial intro",
      },
    ],
  },
  {
    id: "arvr-hemm",
    title: "HEMM Mechanic AR",
    category: "Mining",
    iframeSrc:
      "https://sketchfab.com/models/a529e8131b8743c3a40ca201f130c447/embed?ui_theme=dark&transparent=1&autospin=1&autostart=1&preload=1&ui_infos=0&ui_controls=1",
    sketchfabUrl:
      "https://sketchfab.com/3d-models/oculus-quest-2-vr-headset-with-controllers-a529e8131b8743c3a40ca201f130c447",
    icon: <Truck className="h-4 w-4" />,
    specs: [
      {
        label: "Hardware",
        value: "Meta Quest 2",
        relevance: "Passthrough AR",
      },
      {
        label: "Focus",
        value: "Component Inspect",
        relevance: "Preventive care",
      },
      {
        label: "Scale",
        value: "1:1 Realistic",
        relevance: "Spatial awareness",
      },
      {
        label: "Interactive",
        value: "Tool Handling",
        relevance: "SOP adherence",
      },
      {
        label: "Tracking",
        value: "Eye & Hand Track",
        relevance: "Precision metrics",
      },
    ],
  },
];

const categories: ModelCategory[] = ["All", "Electrical", "Fabrication", "Mining"];

/* ============================
   Component
============================ */

export default function ARVRLabShowcase() {
  const [activeCategory, setActiveCategory] = useState<ModelCategory>("All");
  const [activeIndex, setActiveIndex] = useState(0);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return models;
    return models.filter((m) => m.category === activeCategory);
  }, [activeCategory]);

  const activeModel = filtered[activeIndex] ?? filtered[0];

  const goPrev = () =>
    setActiveIndex((p) => (p - 1 + filtered.length) % filtered.length);
  const goNext = () =>
    setActiveIndex((p) => (p + 1) % filtered.length);

  return (
    <section className="relative w-full overflow-hidden bg-transparent py-4">
      <div className="mx-auto max-w-7xl px-5">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span
                className="h-2 w-2 rounded-full animate-pulse"
                style={{ backgroundColor: ACCENT }}
              />
              Immersive Virtual Training Bay
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              AR/VR Virtual{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${ACCENT}, rgba(78,234,200,0.55))`,
                }}
              >
                Simulation
              </span>
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setActiveIndex(0);
                }}
                className={`rounded-full px-4 py-2 text-sm border border-white/10 bg-white/5 ${
                  cat === activeCategory
                    ? "text-white"
                    : "text-white/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Layout */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_420px]">
          {/* LEFT – Simulator */}
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
            <div className="border-b border-white/10 bg-black/40 px-5 py-4 flex justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-black/50"
                  style={{ color: ACCENT }}
                >
                  {activeModel.icon}
                </div>
                <div>
                  <p className="text-xs text-white/50">
                    {activeModel.category}
                  </p>
                  <p className="text-sm font-semibold text-white">
                    {activeModel.title}
                  </p>
                </div>
              </div>

              <a
                href={activeModel.sketchfabUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-white/70 flex items-center gap-2"
              >
                Open <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="relative pt-[56.25%] bg-black/50">
              <AnimatePresence mode="wait">
                <motion.iframe
                  key={activeModel.id}
                  src={activeModel.iframeSrc}
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  className="absolute inset-0 h-full w-full"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                />
              </AnimatePresence>

              <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                <button onClick={goPrev} className="text-sm text-white/80">
                  <ChevronLeft /> Prev
                </button>
                <button onClick={goNext} className="text-sm text-white/80">
                  Next <ChevronRight />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT – Specifications */}
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-widest text-white/50">
              Module Details
            </p>

            <h3 className="mt-2 text-xl font-semibold text-white">
              {activeModel.title}
            </h3>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeModel.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="mt-6 space-y-4"
              >
                {activeModel.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="rounded-xl border border-white/10 bg-black/40 px-4 py-3"
                  >
                    <div className="flex justify-between gap-4">
                      <div>
                        <p className="text-xs text-white/50 uppercase">
                          {spec.label}
                        </p>
                        <p className="text-sm font-semibold text-white">
                          {spec.value}
                        </p>
                      </div>

                      <span
                        className="rounded-full px-3 py-1 text-[10px]"
                        style={{
                          backgroundColor: `${ACCENT}18`,
                          color: ACCENT,
                          border: `1px solid ${ACCENT}40`,
                        }}
                      >
                        {spec.relevance}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            <p className="mt-6 text-xs text-white/60">
              Simulations map directly to real-world industrial 
              scenarios, offering deep interactive practice loops 
              before field deployment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
