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

const SKETCHFAB_EMBED =
  "https://sketchfab.com/models/a529e8131b8743c3a40ca201f130c447/embed?autospin=1&autostart=1&preload=1&transparent=1&ui_infos=0&ui_theme=dark&ui_watermark=0&ui_hint=0";

const SKETCHFAB_PAGE =
  "https://sketchfab.com/3d-models/oculus-quest-2-vr-headset-with-controllers-a529e8131b8743c3a40ca201f130c447";

export default function ARVRLabShowcase() {
  return (
    <section className="relative w-full overflow-hidden bg-transparent py-16">
      {/* Ambient sci-fi background */}
      {/* <div className="pointer-events-none absolute inset-0"> */}
        {/* <div
          className="absolute left-[-260px] top-[-240px] h-[700px] w-[700px] rounded-full blur-[220px]"
          style={{ backgroundColor: `${ACCENT}14` }}
        />
        <div
          className="absolute right-[-260px] bottom-[-320px] h-[760px] w-[760px] rounded-full blur-[240px]"
          style={{ backgroundColor: `${ACCENT}10` }}
        /> */}

        {/* HUD grid */}
        {/* <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(78,234,200,0.20)_1px,transparent_1px),linear-gradient(90deg,rgba(78,234,200,0.20)_1px,transparent_1px)] [background-size:76px_76px]" /> */}
        {/* <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(78,234,200,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(78,234,200,0.14)_1px,transparent_1px)] [background-size:18px_18px]" /> */}

        {/* vignette */}
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.92)_100%)]" /> */}
      {/* </div> */}

      <div className="relative mx-auto max-w-7xl px-5">
        {/* Header */}
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

        {/* MAIN LAYOUT */}
        <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-stretch">
          {/* LEFT: Text + Modules (Command Panel) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            <div className="relative flex h-full min-h-0 flex-col overflow-hidden rounded-[34px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              {/* top mini header */}
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

              {/* quick stats */}
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

              {/* ===== Scrollable modules area ===== */}
              <div className="mt-6 flex min-h-0 flex-1 flex-col">
                {/* title row */}
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-white">
                    Available AR/VR Modules
                  </p>
                  <div className="flex items-center gap-2 text-xs text-white/55">
                    <Layers className="h-4 w-4" style={{ color: ACCENT }} />
                    {MODULES.length} Modules
                  </div>
                </div>

                {/* SCROLL WRAP (relative for sticky fades) */}
                <div className="relative mt-4 min-h-0 flex-1">
                  {/* TOP FADE (sticky overlay) */}
                  <div className="pointer-events-none absolute left-0 right-0 top-0 z-20 h-10">
                    <div
                      className="h-full w-full"
                      style={{
                        background:
                          "linear-gradient(to bottom, rgba(0,0,0,0.95), rgba(0,0,0,0))",
                      }}
                    />
                  </div>

                  {/* BOTTOM FADE (sticky overlay) */}
                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-12">
                    <div
                      className="h-full w-full"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0))",
                      }}
                    />
                  </div>

                  {/* Scroll container */}
                  <div className="h-full overflow-y-auto pr-2 pb-3 pt-2">
                    <div className="grid gap-3 sm:grid-cols-2">
                      {MODULES.map((m) => (
                        <div
                          key={m.title}
                          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/45 p-4 transition hover:border-white/20"
                        >
                          {/* glow */}
                          <div
                            className="pointer-events-none absolute -left-24 -top-24 h-44 w-44 rounded-full opacity-0 blur-[70px] transition duration-300 group-hover:opacity-100"
                            style={{ backgroundColor: `${ACCENT}18` }}
                          />

                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <p className="text-[11px] text-white/45">{m.tag}</p>
                              <p className="mt-1 text-sm font-semibold text-white">
                                {m.title}
                              </p>
                            </div>

                            <div
                              className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5"
                              style={{
                                color: ACCENT,
                                boxShadow: "inset 0 0 18px rgba(78,234,200,0.10)",
                              }}
                            >
                              {m.icon}
                            </div>
                          </div>

                          <p className="mt-2 text-xs leading-relaxed text-white/60">
                            {m.desc}
                          </p>

                          <div
                            className="mt-3 h-[2px] w-10 rounded-full opacity-80"
                            style={{ backgroundColor: ACCENT }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* note */}
                <div className="mt-4 rounded-2xl border border-white/10 bg-black/45 p-4 text-xs text-white/65">
                  <span className="font-semibold text-white">Note:</span> AR/VR modules
                  can be paired with physical labs (Electrical, Welding, HEMM) for blended
                  learning.
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: 3D Embed */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="lg:col-span-6"
          >
            <div className="relative flex h-full flex-col overflow-hidden rounded-[34px] border border-white/10 bg-white/5 backdrop-blur-xl">
              {/* top HUD */}
              <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-black/40 px-6 py-4">
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
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/50 px-3 py-2 text-xs font-semibold text-white/75 transition hover:text-white"
                >
                  Open <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* embed */}
              <div className="relative flex min-h-0 flex-1 flex-col bg-black/55">
                <div className="relative min-h-0 flex-1">
                  <iframe
                    title="Oculus Quest 2 VR Headset with Controllers"
                    src={SKETCHFAB_EMBED}
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 h-full w-full"
                  />
                </div>

                {/* futuristic overlay frame */}
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
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.75), transparent)",
                    }}
                  />
                </div>
              </div>

              {/* footer */}
              <div className="border-t border-white/10 bg-black/40 px-6 py-4">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm font-semibold text-white/90">
                    Simulation Hardware View
                  </p>
                  <p className="text-xs text-white/55">
                    Autospin enabled • Drag inside to explore
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scrollbar styling (optional but premium) */}
      <style>{`
        * {
          scrollbar-width: thin;
          scrollbar-color: rgba(78,234,200,0.45) rgba(255,255,255,0.06);
        }

        *::-webkit-scrollbar {
          width: 10px;
        }
        *::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.06);
          border-radius: 999px;
        }
        *::-webkit-scrollbar-thumb {
          background: rgba(78,234,200,0.35);
          border-radius: 999px;
          border: 2px solid rgba(0,0,0,0.65);
        }
        *::-webkit-scrollbar-thumb:hover {
          background: rgba(78,234,200,0.55);
        }
      `}</style>
    </section>
  );
}