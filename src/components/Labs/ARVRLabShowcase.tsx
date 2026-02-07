import { motion } from "framer-motion";
import {
  Cpu,
  ShieldCheck,
  Sparkles,
  HardHat,
  Zap,
  Wrench,
  Flame,
  Truck,
  ScanEye,
  ExternalLink,
  Layers,
  Gauge,
} from "lucide-react";

const ACCENT = "#4eeac8";

/* ===================== MODULE DATA ===================== */

const MODULES = [
  {
    title: "Electrician (AR/VR)",
    desc: "Wiring, panels, fault diagnosis & safety simulation.",
    icon: <Zap className="h-4 w-4" />,
    tag: "Electrical",
  },
  {
    title: "Welder (AR/VR)",
    desc: "Welding practice, angles, safety posture & quality checks.",
    icon: <Flame className="h-4 w-4" />,
    tag: "Fabrication",
  },
  {
    title: "HEMM Mechanic (AR/VR)",
    desc: "Heavy equipment inspection & maintenance workflow.",
    icon: <Truck className="h-4 w-4" />,
    tag: "Mining",
  },
  {
    title: "Industrial Safety",
    desc: "PPE, hazard identification & emergency response drills.",
    icon: <ShieldCheck className="h-4 w-4" />,
    tag: "Safety",
  },
  {
    title: "Hands-on Maintenance",
    desc: "Tool handling, SOP-based training modules.",
    icon: <Wrench className="h-4 w-4" />,
    tag: "Maintenance",
  },
  {
    title: "Smart Skill Analytics",
    desc: "Track accuracy, time & training progression.",
    icon: <Cpu className="h-4 w-4" />,
    tag: "Industry 4.0",
  },
];

/* ===================== SKETCHFAB ===================== */

const SKETCHFAB_EMBED =
  "https://sketchfab.com/models/a529e8131b8743c3a40ca201f130c447/embed?autospin=1&autostart=1&preload=1&transparent=1&ui_infos=0&ui_theme=dark&ui_watermark=0&ui_hint=0";

const SKETCHFAB_PAGE =
  "https://sketchfab.com/3d-models/oculus-quest-2-vr-headset-with-controllers-a529e8131b8743c3a40ca201f130c447";

/* ===================== COMPONENT ===================== */

export default function ARVRLabShowcase() {
  return (
    <section className="relative w-full overflow-hidden bg-transparent py-6">
      <div className="relative mx-auto max-w-7xl px-5">

        {/* ===================== HEADER ===================== */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-xl">
              <span
                className="h-2 w-2 rounded-full animate-pulse"
                style={{ backgroundColor: ACCENT }}
              />
              Immersive AR/VR Training Lab
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              AR/VR Lab{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${ACCENT}, rgba(78,234,200,0.55))`,
                }}
              >
                Meta Quest 2
              </span>
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
              A futuristic training ecosystem where learners practice critical trade
              skills in safe, repeatable simulations.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-xl">
            <ScanEye className="h-4 w-4" style={{ color: ACCENT }} />
            Auto Start • Auto Spin • 3D Preview
          </div>
        </div>

        {/* ===================== MAIN GRID ===================== */}
        <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-stretch">

          {/* ===================== LEFT PANEL ===================== */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            <div className="relative flex h-full flex-col overflow-hidden rounded-[34px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/50">
                    Training Console
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    Modules + Outcomes
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    Designed for Mines, Steel & Aluminium workforce readiness.
                  </p>
                </div>

                <div
                  className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-black/50"
                  style={{ boxShadow: `0 0 40px ${ACCENT}18` }}
                >
                  <HardHat className="h-5 w-5" style={{ color: ACCENT }} />
                </div>
              </div>

              {/* Stats */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/45 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-white/55">Mode</p>
                    <Gauge className="h-4 w-4" style={{ color: ACCENT }} />
                  </div>
                  <p className="mt-2 text-sm font-semibold text-white">
                    Repeatable Simulations
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/45 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-white/55">Benefit</p>
                    <Cpu className="h-4 w-4" style={{ color: ACCENT }} />
                  </div>
                  <p className="mt-2 text-sm font-semibold text-white">
                    Faster Employability
                  </p>
                </div>
              </div>

              {/* Modules */}
              <div className="mt-6 flex flex-1 flex-col">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-white">
                    Available AR/VR Modules
                  </p>
                  <div className="flex items-center gap-2 text-xs text-white/55">
                    <Layers className="h-4 w-4" style={{ color: ACCENT }} />
                    {MODULES.length} Modules
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2 overflow-y-auto pr-2">
                  {MODULES.map((m) => (
                    <div
                      key={m.title}
                      className="rounded-2xl border border-white/10 bg-black/45 p-4 transition hover:border-white/20"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-[11px] text-white/45">{m.tag}</p>
                          <p className="mt-1 text-sm font-semibold text-white">
                            {m.title}
                          </p>
                        </div>

                        <div
                          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5"
                          style={{ color: ACCENT }}
                        >
                          {m.icon}
                        </div>
                      </div>

                      <p className="mt-2 text-xs text-white/60">{m.desc}</p>

                      <div
                        className="mt-3 h-[2px] w-10 rounded-full"
                        style={{ backgroundColor: ACCENT }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ===================== RIGHT PANEL (VIDEO + 3D) ===================== */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="lg:col-span-6"
          >
            <div className="relative flex h-full flex-col overflow-hidden rounded-[34px] border border-white/10 bg-white/5 backdrop-blur-xl">

              {/* Top HUD */}
              <div className="flex items-center justify-between border-b border-white/10 bg-black/40 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div
                    className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-black/50"
                    style={{ boxShadow: `0 0 40px ${ACCENT}18` }}
                  >
                    <Sparkles className="h-5 w-5" style={{ color: ACCENT }} />
                  </div>

                  <div>
                    <p className="text-xs text-white/50">3D Device Preview</p>
                    <p className="text-sm font-semibold text-white">
                      Meta Oculus Quest 2
                    </p>
                  </div>
                </div>

                <a
                  href={SKETCHFAB_PAGE}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/50 px-3 py-2 text-xs text-white/75 hover:text-white"
                >
                  Open <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* VIDEO + ZOOMED-OUT IFRAME */}
              <div className="relative flex-1 bg-black/10">

                {/* Background video */}
                <video
                  src="/lab/arvr.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40 blur-[1.5px]"
                />

                {/* Centered, zoomed-out Sketchfab */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <iframe
                    title="Oculus Quest 2 VR Headset"
                    src={SKETCHFAB_EMBED}
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    allowFullScreen
                    loading="lazy"
                    className="relative z-50 h-full w-full scale-[0.9] origin-center"
                  />
                </div>

                {/* HUD frame */}
                <div className="pointer-events-none absolute inset-0">
                  <div
                    className="absolute inset-0"
                    style={{
                      boxShadow:
                        "inset 0 0 0 1px rgba(255,255,255,0.07), 0 0 120px rgba(78,234,200,0.14)",
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-white/10 bg-black/40 px-6 py-4">
                <p className="text-xs text-white/55">
                  Autospin enabled • Drag inside to explore
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
