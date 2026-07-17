import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import ElectricalLabImmersive from "./ElectricalLabViewer";

const ACCENT = "#4eeac8";
const PARALLAX_BG = "/Lab_banner.jpg"; // 👈 same bg image style as promo banner

/* ===================== TAB CONFIG ===================== */

const LAB_TABS = [
  { key: "electrical", label: "Electrical Lab", component: <ElectricalLabImmersive /> },
  { key: "welder", label: "Welder Lab", component: <ElectricalLabImmersive /> },
  { key: "hemm", label: "HEMM Lab", component: <ElectricalLabImmersive /> },
  { key: "arvr", label: "AR / VR Lab", component: <ElectricalLabImmersive /> },
  { key: "simulator", label: "Simulator Lab", component: <ElectricalLabImmersive /> },
];

/* ===================== COMPONENT ===================== */

const VirtualLabsTourSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(LAB_TABS[0]);

  return (
    <section className="relative w-full overflow-hidden bg-black py-16 md:py-20">

      {/* ===================== FIXED PARALLAX IMAGE ===================== */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('${PARALLAX_BG}')` }}
      />

      {/* ===================== DARK OVERLAY ===================== */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/85" />

      {/* ===================== ORIGINAL FUTURISTIC EFFECTS ===================== */}
      <div className="pointer-events-none absolute inset-0">
        {/* glow orbs */}
        <div
          className="absolute -top-40 left-[-180px] h-[520px] w-[520px] rounded-full blur-[180px]"
          style={{ backgroundColor: `${ACCENT}18` }}
        />
        <div
          className="absolute bottom-[-260px] right-[-220px] h-[640px] w-[640px] rounded-full blur-[220px]"
          style={{ backgroundColor: `${ACCENT}14` }}
        />

        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.10]
          [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),
          linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)]
          [background-size:72px_72px]"
        />

        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.92)_100%)]" />
      </div>

      {/* ===================== CONTENT ===================== */}
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="rounded-[28px] border border-white/10 bg-black/40 backdrop-blur-2xl p-8 md:p-12">

          {/* HEADER */}
          <div className="mb-10">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span
                className="h-2 w-2 rounded-full animate-pulse"
                style={{ backgroundColor: ACCENT }}
              />
              Technician Pathway • Innovation Bay
            </p>

            <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-white">
              Technician Innovation Bay
            </h2>

            <p className="mt-4 max-w-3xl text-sm md:text-base text-white/70">
              Technical labs focused on diagnostics, systems understanding, workshop practice, and maintenance readiness.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-black/35 px-4 py-1.5 text-xs uppercase tracking-[0.15em] text-white/55">
                Electrical and systems diagnostics
              </span>
              <span className="rounded-full border border-white/10 bg-black/35 px-4 py-1.5 text-xs uppercase tracking-[0.15em] text-white/55">
                Workshop-oriented practice
              </span>
              <span className="rounded-full border border-white/10 bg-black/35 px-4 py-1.5 text-xs uppercase tracking-[0.15em] text-white/55">
                Maintenance pathway training
              </span>
            </div>
          </div>

          {/* TABS */}
          <div className="flex flex-wrap gap-3 mb-10">
            {LAB_TABS.map((tab) => {
              const isActive = tab.key === activeTab.key;

              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    rounded-2xl px-5 py-2 text-sm font-semibold transition
                    border backdrop-blur-xl
                    ${
                      isActive
                        ? "bg-white text-black border-transparent"
                        : "bg-white/5 text-white/70 border-white/10 hover:border-white/20"
                    }
                  `}
                  style={
                    isActive
                      ? {
                          backgroundImage: `linear-gradient(90deg, ${ACCENT}, rgba(78,234,200,0.65))`,
                          boxShadow: `0 0 40px rgba(78,234,200,0.25)`,
                        }
                      : {}
                  }
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* TAB CONTENT */}
          <div className="relative rounded-[22px] border border-white/10 bg-black/50 p-6 md:p-8 backdrop-blur-xl">
            <div className="flex items-center gap-2 mb-4 text-xs text-white/55">
              <Sparkles className="h-4 w-4" style={{ color: ACCENT }} />
              Virtual walkthrough content
            </div>

            {activeTab.component}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualLabsTourSection;