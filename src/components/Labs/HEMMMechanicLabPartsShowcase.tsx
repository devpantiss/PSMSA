import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wrench,
  Truck,
  Cog,
  Layers,
  ScanEye,
  ExternalLink,
  ShieldCheck,
  Gauge,
} from "lucide-react";

const ACCENT = "#4eeac8";

type Part = {
  id: string;
  title: string;
  tag: string;
  desc: string;
  learn: string[];
  icon: React.ReactNode;
  embedUrl: string;
  sketchfabUrl: string;
  authorName: string;
  authorUrl: string;
};

const PARTS: Part[] = [
  {
    id: "gearbox",
    title: "Gear Box / Transmission",
    tag: "Powertrain",
    desc: "Understand torque transfer, gear ratios, and drivetrain behavior under load.",
    learn: [
      "Gear shifting flow & torque path",
      "Transmission casing + components",
      "Fault symptoms & inspection points",
      "Maintenance workflow basics",
    ],
    icon: <Cog className="h-4 w-4" />,
    embedUrl:
      "https://sketchfab.com/models/c2045f89ed81494b99ba54c5d36cf45e/embed?autostart=1&preload=1&transparent=1&ui_theme=dark&ui_infos=0&ui_watermark=0&ui_hint=0",
    sketchfabUrl:
      "https://sketchfab.com/3d-models/engine-transmission-c2045f89ed81494b99ba54c5d36cf45e",
    authorName: "Europac3d",
    authorUrl: "https://sketchfab.com/europac3d",
  },
  {
    id: "suspension",
    title: "Suspension System (Chassis)",
    tag: "Ride & Stability",
    desc: "Explore chassis structure and suspension points that handle shocks & terrain stress.",
    learn: [
      "Suspension layout overview",
      "Chassis mounting & stress zones",
      "Alignment + inspection routine",
      "Failure signs in real sites",
    ],
    icon: <Truck className="h-4 w-4" />,
    embedUrl:
      "https://sketchfab.com/models/00dcf51b90364321919d2988dba8ace8/embed?autostart=1&preload=1&transparent=1&ui_theme=dark&ui_infos=0&ui_watermark=0&ui_hint=0",
    sketchfabUrl:
      "https://sketchfab.com/3d-models/pickup-truck-chassis-00dcf51b90364321919d2988dba8ace8",
    authorName: "✮𝖀𝖓𝖋𝖔𝖗𝖌𝖊𝖙𝖙𝖆𝖇𝖑𝖊 𝕹𝖆𝖒𝖊✮",
    authorUrl: "https://sketchfab.com/UnforgettableName",
  },
  {
    id: "differential",
    title: "Differential + Driveshaft",
    tag: "Drivetrain",
    desc: "Learn how power splits across wheels and how axle systems behave under torque.",
    learn: [
      "Differential function & torque split",
      "Driveshaft + axle assembly",
      "Wear zones & lubrication points",
      "Inspection steps for heavy duty use",
    ],
    icon: <Layers className="h-4 w-4" />,
    embedUrl:
      "https://sketchfab.com/models/8b3d9809f43f4f0ea40fddb7f1ecb5ef/embed?autostart=1&preload=1&transparent=1&ui_theme=dark&ui_infos=0&ui_watermark=0&ui_hint=0",
    sketchfabUrl:
      "https://sketchfab.com/3d-models/heavy-duty-axle-and-driveshaft-8b3d9809f43f4f0ea40fddb7f1ecb5ef",
    authorName: "NN 3D",
    authorUrl: "https://sketchfab.com/nn3d",
  },
  {
    id: "engine",
    title: "Truck Engine",
    tag: "Core Power Unit",
    desc: "Study engine layout, components, and real-world troubleshooting workflow.",
    learn: [
      "Major engine components overview",
      "Air intake & exhaust basics",
      "Inspection checkpoints",
      "Common faults & diagnosis approach",
    ],
    icon: <Gauge className="h-4 w-4" />,
    embedUrl:
      "https://sketchfab.com/models/0044f6b6dfa74cf2bd7a872841bb9f40/embed?autostart=1&preload=1&transparent=1&ui_theme=dark&ui_infos=0&ui_watermark=0&ui_hint=0",
    sketchfabUrl:
      "https://sketchfab.com/3d-models/truck-engine-0044f6b6dfa74cf2bd7a872841bb9f40",
    authorName: "supersquad",
    authorUrl: "https://sketchfab.com/supersquad",
  },
  {
    id: "radiator",
    title: "Radiator (Cooling System)",
    tag: "Thermal Control",
    desc: "Understand cooling systems and how heat management affects machine performance.",
    learn: [
      "Radiator function & flow",
      "Heat dissipation & airflow zones",
      "Maintenance: cleaning + leak checks",
      "Overheating symptoms & prevention",
    ],
    icon: <ShieldCheck className="h-4 w-4" />,
    embedUrl:
      "https://sketchfab.com/models/ae38c10a5fa545b28ee0aa5b6781817d/embed?autostart=1&preload=1&transparent=1&ui_theme=dark&ui_infos=0&ui_watermark=0&ui_hint=0",
    sketchfabUrl:
      "https://sketchfab.com/3d-models/radiador-de-camion-minero-ae38c10a5fa545b28ee0aa5b6781817d",
    authorName: "Skaneando",
    authorUrl: "https://sketchfab.com/skaneando",
  },
  {
    id: "axle",
    title: "Heavy Duty Axle",
    tag: "Load Bearing",
    desc: "Explore axle construction and load transfer behavior in heavy-duty vehicles.",
    learn: [
      "Axle structure & mounting",
      "Load transfer points",
      "Inspection & servicing basics",
      "Wear + damage indicators",
    ],
    icon: <Wrench className="h-4 w-4" />,
    embedUrl:
      "https://sketchfab.com/models/d263294d91bb42829dac60fae87de01d/embed?autostart=1&preload=1&transparent=1&ui_theme=dark&ui_infos=0&ui_watermark=0&ui_hint=0",
    sketchfabUrl:
      "https://sketchfab.com/3d-models/15-ton-federal-axle-from-grave-digger-12-d263294d91bb42829dac60fae87de01d",
    authorName: "Jorma Rysky",
    authorUrl: "https://sketchfab.com/Rysky",
  },
];

export default function HEMMMechanicLabPartsShowcase() {
  const [activeId, setActiveId] = useState(PARTS[0].id);

  const active = useMemo(
    () => PARTS.find((p) => p.id === activeId) ?? PARTS[0],
    [activeId]
  );

  return (
    <section className="relative w-full overflow-hidden bg-transparent py-16">
      {/* Sci-fi background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-[-280px] top-[-260px] h-[760px] w-[760px] rounded-full blur-[240px]"
          style={{ backgroundColor: `${ACCENT}14` }}
        />
        <div
          className="absolute right-[-280px] bottom-[-340px] h-[820px] w-[820px] rounded-full blur-[260px]"
          style={{ backgroundColor: `${ACCENT}10` }}
        />

        {/* dual grid */}
        <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(78,234,200,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(78,234,200,0.18)_1px,transparent_1px)] [background-size:78px_78px]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(78,234,200,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(78,234,200,0.12)_1px,transparent_1px)] [background-size:18px_18px]" />

        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.92)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-xl">
              <span
                className="h-2 w-2 rounded-full animate-pulse"
                style={{ backgroundColor: ACCENT }}
              />
              HEMM Mechanic Training Lab
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              HEMM Mechanic{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${ACCENT}, rgba(78,234,200,0.55))`,
                }}
              >
                Parts
              </span>
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
              A premium 3D learning bay where trainees explore real machine parts and
              understand inspection, maintenance, and troubleshooting workflows.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-xl">
            <ScanEye className="h-4 w-4" style={{ color: ACCENT }} />
            Auto Start • Transparent • Drag to Explore
          </div>
        </div>

        {/* Main Layout */}
        <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-stretch">
          {/* LEFT: Modules (scrollable) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            <div className="relative h-[520px] overflow-hidden rounded-[34px] border border-white/10 bg-white/5 backdrop-blur-xl">
              {/* header */}
              <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-black/40 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div
                    className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-black/50"
                    style={{ boxShadow: `0 0 40px ${ACCENT}18` }}
                  >
                    <Wrench className="h-5 w-5" style={{ color: ACCENT }} />
                  </div>
                  <div>
                    <p className="text-xs text-white/50">Training Modules</p>
                    <p className="text-sm font-semibold text-white">
                      Parts + Systems Learning
                    </p>
                  </div>
                </div>

                <div className="text-xs text-white/55">
                  {PARTS.length} Parts
                </div>
              </div>

              {/* Scroll area */}
              <div className="relative h-[calc(520px-64px)]">
                {/* sticky fades */}
                <div className="pointer-events-none absolute top-0 left-0 right-0 z-20 h-10 bg-gradient-to-b from-black/70 to-transparent" />
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-10 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="h-full overflow-y-auto px-6 py-5 [scrollbar-width:thin] [scrollbar-color:rgba(78,234,200,0.35)_transparent]">
                  <div className="space-y-3">
                    {PARTS.map((p) => {
                      const isActive = p.id === activeId;
                      return (
                        <button
                          key={p.id}
                          onClick={() => setActiveId(p.id)}
                          className={[
                            "w-full text-left rounded-2xl border p-4 transition",
                            "bg-black/45 backdrop-blur-xl",
                            isActive
                              ? "border-white/20"
                              : "border-white/10 hover:border-white/20",
                          ].join(" ")}
                          style={
                            isActive
                              ? {
                                  boxShadow: `0 0 0 1px rgba(255,255,255,0.12), 0 0 55px ${ACCENT}14`,
                                  backgroundImage: `linear-gradient(90deg, ${ACCENT}12, transparent)`,
                                }
                              : undefined
                          }
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="min-w-0">
                              <p className="text-[11px] text-white/45">{p.tag}</p>
                              <p className="mt-1 text-sm font-semibold text-white">
                                {p.title}
                              </p>
                              <p className="mt-2 text-xs leading-relaxed text-white/60">
                                {p.desc}
                              </p>
                            </div>

                            <div
                              className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5"
                              style={{
                                color: ACCENT,
                                boxShadow: "inset 0 0 18px rgba(78,234,200,0.10)",
                              }}
                            >
                              {p.icon}
                            </div>
                          </div>

                          <div className="mt-3 grid gap-2 sm:grid-cols-2">
                            {p.learn.slice(0, 4).map((x) => (
                              <div
                                key={x}
                                className="rounded-xl border border-white/10 bg-black/35 px-3 py-2 text-[11px] text-white/65"
                              >
                                {x}
                              </div>
                            ))}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: 3D Viewer */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="lg:col-span-6"
          >
            <div className="relative h-[520px] overflow-hidden rounded-[34px] border border-white/10 bg-white/5 backdrop-blur-xl">
              {/* top HUD */}
              <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-black/40 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div
                    className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-black/50"
                    style={{ boxShadow: `0 0 40px ${ACCENT}18` }}
                  >
                    <ScanEye className="h-5 w-5" style={{ color: ACCENT }} />
                  </div>
                  <div>
                    <p className="text-xs text-white/50">3D Interactive Model</p>
                    <p className="text-sm font-semibold text-white">{active.title}</p>
                  </div>
                </div>

                <a
                  href={active.sketchfabUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/50 px-3 py-2 text-xs font-semibold text-white/75 transition hover:text-white"
                >
                  Open <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* embed */}
              <div className="relative h-[calc(520px-64px)] bg-black/55">
                <AnimatePresence mode="wait">
                  <motion.iframe
                    key={active.id}
                    title={active.title}
                    src={active.embedUrl}
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 h-full w-full"
                    initial={{ opacity: 0, scale: 0.985 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.99 }}
                    transition={{ duration: 0.35 }}
                  />
                </AnimatePresence>

                {/* neon frame */}
                <div className="pointer-events-none absolute inset-0">
                  <div
                    className="absolute inset-0"
                    style={{
                      boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.07), 0 0 120px ${ACCENT}14`,
                    }}
                  />
                  <div
                    className="absolute left-0 top-0 h-full w-[38%] opacity-25"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(78,234,200,0.22), transparent)",
                    }}
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 h-24 opacity-80"
                    style={{
                      background: "linear-gradient(to top, rgba(0,0,0,0.75), transparent)",
                    }}
                  />
                </div>

                {/* footer strip */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-xs text-white/70 backdrop-blur-xl">
                    <span className="font-semibold text-white">Tip:</span> Drag to rotate •
                    Scroll to zoom • Explore components closely
                    <span className="ml-2 opacity-60">
                      • by{" "}
                      <a
                        href={active.authorUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-white/80 hover:text-white"
                      >
                        {active.authorName}
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}