import { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import {
  Cpu,
  ShieldCheck,
  Zap,
  X,
  RotateCcw,
  Sparkles,
  ScanEye,
} from "lucide-react";

const MODEL_URL = "/model/ElectricLab_2.glb";
const ACCENT = "#4eeac8";

function ElectricalLabModel() {
  const { scene } = useGLTF(MODEL_URL);
  return <primitive object={scene} scale={1.05} position={[0, -0.6, 0]} />;
}

export default function ElectricalLabImmersive() {
  const [isOpen, setIsOpen] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const controlsRef = useRef<any>(null);

  const resetView = () => controlsRef.current?.reset?.();

  return (
    <section className="relative w-full overflow-hidden bg-transparent py-16">
      {/* Background cinematic grid + glow */}
      {/* <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full blur-[190px]"
          style={{ backgroundColor: `${ACCENT}18` }}
        />
        <div
          className="absolute bottom-[-320px] right-[-240px] h-[720px] w-[720px] rounded-full blur-[220px]"
          style={{ backgroundColor: `${ACCENT}14` }}
        />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:54px_54px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.07),transparent_60%)]" />
      </div> */}

      <div className="relative mx-auto max-w-7xl px-5">
        {/* IMMERSIVE PORTAL UI */}
        {!isOpen && (
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            {/* HUD overlay */}
            <div className="pointer-events-none absolute inset-0">
              {/* scanlines */}
              <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:100%_7px]" />
              {/* vignette */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,rgba(0,0,0,0.75)_100%)]" />
            </div>

            <div className="relative grid gap-10 lg:grid-cols-[1fr_420px] lg:items-center">
              {/* Left content */}
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/70">
                  <ShieldCheck className="h-4 w-4" style={{ color: ACCENT }} />
                  Pantiss • Electrical Training Lab
                </p>

                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                  Enter{" "}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${ACCENT}, rgba(78,234,200,0.55))`,
                    }}
                  >
                    {" "}
                    ELECTRICAL LAB
                  </span>
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">
                  Launch an immersive walkthrough of a futuristic electrical
                  training environment — designed for industrial readiness,
                  diagnostics and safety.
                </p>

                {/* Feature pills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    {
                      icon: <Cpu className="h-4 w-4" />,
                      text: "Interactive 3D",
                    },
                    {
                      icon: <ScanEye className="h-4 w-4" />,
                      text: "Cinematic HUD",
                    },
                    {
                      icon: <Sparkles className="h-4 w-4" />,
                      text: "Immersive Mode",
                    },
                  ].map((f) => (
                    <span
                      key={f.text}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-white/75"
                    >
                      <span style={{ color: ACCENT }}>{f.icon}</span>
                      {f.text}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    onClick={() => setIsOpen(true)}
                    className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold text-black transition hover:opacity-95"
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${ACCENT}, rgba(78,234,200,0.7))`,
                      boxShadow: `0 18px 55px rgba(78,234,200,0.18)`,
                    }}
                  >
                    <Zap className="h-4 w-4" />
                    ENTER 3D LAB
                  </button>

                  <button className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/85 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/10">
                    <RotateCcw className="h-4 w-4" style={{ color: ACCENT }} />
                    Preview Controls
                  </button>
                </div>
              </div>

              {/* Right: Simulation Core Circle (Enhanced) */}
              <div className="relative mx-auto flex w-full max-w-[420px] items-center justify-center">
                <div className="relative aspect-square w-full">
                  {/* Super glow aura */}
                  <div
                    className="absolute inset-0 rounded-full blur-3xl opacity-80"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(78,234,200,0.28), transparent 62%)",
                    }}
                  />

                  {/* Outer ring glow */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      boxShadow: "0 0 90px rgba(78,234,200,0.20)",
                    }}
                  />

                  {/* Pulsing outer ring */}
                  <div
                    className="absolute inset-0 rounded-full border animate-[pulse_2.2s_ease-in-out_infinite]"
                    style={{
                      borderColor: "rgba(78,234,200,0.55)",
                      boxShadow: "0 0 45px rgba(78,234,200,0.22)",
                    }}
                  />

                  {/* Rotating dashed ring */}
                  <div
                    className="absolute inset-[9%] rounded-full border border-dashed opacity-70 animate-[spin_12s_linear_infinite]"
                    style={{ borderColor: "rgba(78,234,200,0.40)" }}
                  />

                  {/* Rotating arc ring (conic gradient) */}
                  <div
                    className="absolute inset-[14%] rounded-full opacity-70 animate-[spin_6s_linear_infinite]"
                    style={{
                      background:
                        "conic-gradient(from 180deg, transparent 0deg, rgba(78,234,200,0.35) 70deg, transparent 140deg, rgba(78,234,200,0.22) 220deg, transparent 360deg)",
                      maskImage:
                        "radial-gradient(circle, transparent 58%, black 62%)",
                      WebkitMaskImage:
                        "radial-gradient(circle, transparent 58%, black 62%)",
                    }}
                  />

                  {/* Inner ring */}
                  <div
                    className="absolute inset-[20%] rounded-full border"
                    style={{ borderColor: "rgba(78,234,200,0.25)" }}
                  />

                  {/* Core shell */}
                  <div className="absolute inset-[24%] rounded-full bg-black/70 backdrop-blur-xl" />

                  {/* Core glow */}
                  <div
                    className="absolute inset-[28%] rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(78,234,200,0.22), rgba(255,255,255,0.06), transparent 72%)",
                      boxShadow: "inset 0 0 55px rgba(78,234,200,0.18)",
                    }}
                  />

                  {/* Energy sweep */}
                  <div
                    className="pointer-events-none absolute inset-[26%] rounded-full opacity-70 animate-[spin_9s_linear_infinite]"
                    style={{
                      background:
                        "conic-gradient(from 0deg, transparent, rgba(78,234,200,0.28), transparent)",
                      maskImage:
                        "radial-gradient(circle, rgba(0,0,0,1) 60%, transparent 74%)",
                      WebkitMaskImage:
                        "radial-gradient(circle, rgba(0,0,0,1) 60%, transparent 74%)",
                    }}
                  />

                  {/* Orbiting dots */}
                  <div className="absolute inset-0 animate-[spin_7s_linear_infinite]">
                    <div
                      className="absolute left-1/2 top-[6%] h-2.5 w-2.5 -translate-x-1/2 rounded-full"
                      style={{
                        backgroundColor: ACCENT,
                        boxShadow: "0 0 20px rgba(78,234,200,0.55)",
                      }}
                    />
                  </div>

                  <div className="absolute inset-0 animate-[spin_11s_linear_infinite]">
                    <div
                      className="absolute left-1/2 bottom-[7%] h-2 w-2 -translate-x-1/2 rounded-full opacity-80"
                      style={{
                        backgroundColor: "rgba(78,234,200,0.9)",
                        boxShadow: "0 0 18px rgba(78,234,200,0.40)",
                      }}
                    />
                  </div>

                  {/* Subtle noise overlay for realism */}
                  <div
                    className="pointer-events-none absolute inset-[24%] rounded-full opacity-[0.10]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, rgba(255,255,255,0.10) 1px, transparent 1px)",
                      backgroundSize: "10px 10px",
                    }}
                  />

                  {/* Center label */}
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="text-center">
                      <p className="text-xs uppercase tracking-widest text-white/50">
                        Simulation Core
                      </p>
                      <p className="mt-1 text-lg font-semibold text-white">
                        Electrical Lab
                      </p>

                      <div className="mt-2 flex items-center justify-center gap-2">
                        <span
                          className="h-2 w-2 rounded-full animate-pulse"
                          style={{
                            backgroundColor: ACCENT,
                            boxShadow: "0 0 16px rgba(78,234,200,0.45)",
                          }}
                        />
                        <p
                          className="text-xs font-medium"
                          style={{ color: ACCENT }}
                        >
                          READY TO LAUNCH
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End circle */}
            </div>
          </div>
        )}

        {/* IMMERSIVE 3D MODE */}
        {isOpen && (
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black">
            {/* HUD corners */}
            <div className="pointer-events-none absolute inset-0 z-10">
              <div
                className="absolute left-5 top-5 h-12 w-12 border-l-2 border-t-2 opacity-70"
                style={{ borderColor: ACCENT }}
              />
              <div
                className="absolute right-5 top-5 h-12 w-12 border-r-2 border-t-2 opacity-70"
                style={{ borderColor: ACCENT }}
              />
              <div
                className="absolute left-5 bottom-5 h-12 w-12 border-b-2 border-l-2 opacity-70"
                style={{ borderColor: ACCENT }}
              />
              <div
                className="absolute right-5 bottom-5 h-12 w-12 border-b-2 border-r-2 opacity-70"
                style={{ borderColor: ACCENT }}
              />

              {/* scanlines */}
              <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:100%_7px]" />
              {/* vignette */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,rgba(0,0,0,0.85)_100%)]" />
            </div>

            {/* Top bar */}
            <div className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between border-b border-white/10 bg-black/60 px-5 py-4 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{
                    backgroundColor: ACCENT,
                    boxShadow: `0 0 18px rgba(78,234,200,0.35)`,
                  }}
                />
                <p className="text-sm font-semibold text-white/90">
                  Electrical Lab • Immersive Mode
                </p>
                <p className="hidden text-xs text-white/60 md:block">
                  Drag • Zoom • Reset • Auto Rotate
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={resetView}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:border-white/20 hover:bg-white/10"
                >
                  <RotateCcw className="h-4 w-4" style={{ color: ACCENT }} />
                  Reset
                </button>

                <button
                  onClick={() => setAutoRotate((p) => !p)}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:border-white/20 hover:bg-white/10"
                >
                  <Cpu className="h-4 w-4" style={{ color: ACCENT }} />
                  Auto: {autoRotate ? "ON" : "OFF"}
                </button>

                <button
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-black transition hover:opacity-95"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${ACCENT}, rgba(78,234,200,0.7))`,
                    boxShadow: `0 14px 45px rgba(78,234,200,0.16)`,
                  }}
                >
                  <X className="h-4 w-4" />
                  Exit
                </button>
              </div>
            </div>

            {/* Canvas */}
            <div className="relative h-[70vh] min-h-[520px] w-full">
              <Canvas camera={{ position: [0, 1.2, 3.8], fov: 45 }}>
                <ambientLight intensity={0.9} />
                <directionalLight position={[4, 5, 4]} intensity={1.3} />

                <Suspense fallback={null}>
                  <ElectricalLabModel />
                  <Environment preset="city" />
                </Suspense>

                <OrbitControls
                  ref={controlsRef}
                  enablePan={false}
                  enableZoom
                  minDistance={2.2}
                  maxDistance={7}
                  autoRotate={autoRotate}
                  autoRotateSpeed={0.8}
                />
              </Canvas>
            </div>

            {/* Bottom status */}
            <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-black/60 px-5 py-4 backdrop-blur-xl">
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <p className="text-sm text-white/80">
                  Systems: <span style={{ color: ACCENT }}>Stable</span> •
                  Render: <span style={{ color: ACCENT }}>Active</span>
                </p>
                <p className="text-xs text-white/60">
                  Training Modules • Wiring • Motor Control • Safety SOPs •
                  Diagnostics
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

useGLTF.preload(MODEL_URL);
