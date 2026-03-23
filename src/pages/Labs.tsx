import React, { Suspense, lazy, startTransition, useState } from "react";
import LabsHero from "../components/Labs/LabsHero";
import LabsWhyItMatters from "../components/Labs/LabsWhyItMatters";
import LabsGrid from "../components/Labs/LabsGrid";
import LabsImpact from "../components/Labs/LabsImpact";
import FuturisticLabsShowcaseSection from "../components/Labs/FuturisticLabsShowcaseSection";

const TrainingLabsSection = lazy(
  () => import("../components/Labs/TrainingLabsSection")
);
const LabsSimulatorPromoBanner = lazy(
  () => import("../components/Labs/LabsSimulatorPromoBanner")
);

const ACCENT = "#4eeac8";

type RoleKey = "operator" | "technician";

const highlights = [
  { value: "02", label: "Role-specific training zones" },
  { value: "05+", label: "Technology-enabled lab systems" },
  { value: "Industry", label: "Job-focused infrastructure" },
];

const overviewPoints = [
  "Simulation-first learning environments",
  "Hands-on technical practice zones",
  "Industry-aligned training workflows",
];

// const overviewBands = [
//   {
//     title: "Operator Track",
//     meta: "Simulators, control systems, safety drills",
//   },
//   {
//     title: "Technician Track",
//     meta: "Diagnostics, maintenance practice, workshop exposure",
//   },
// ];

const roles: {
  key: RoleKey;
  title: string;
  eyebrow: string;
  description: string;
  details: string[];
}[] = [
  {
    key: "operator",
    title: "Operator Command Center",
    eyebrow: "Operator Roles",
    description:
      "Simulator-led environments built for machine handling, operational discipline, and field-readiness.",
    details: [
      "Heavy equipment simulation",
      "Machine familiarization",
      "Operational safety drills",
    ],
  },
  {
    key: "technician",
    title: "Technician Innovation Bay",
    eyebrow: "Technician Roles",
    description:
      "Technical labs focused on diagnostics, systems understanding, workshop practice, and maintenance readiness.",
    details: [
      "Electrical and systems diagnostics",
      "Workshop-oriented practice",
      "Maintenance pathway training",
    ],
  },
];

function LabsLoader() {
  return (
    <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-black/45 px-6 py-16 backdrop-blur-2xl md:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(78,234,200,0.20)_1px,transparent_1px),linear-gradient(90deg,rgba(78,234,200,0.20)_1px,transparent_1px)] [background-size:42px_42px]" />
        <div className="loader-scan absolute inset-0" />
      </div>

      <div className="relative mx-auto flex max-w-xl flex-col items-center text-center">
        <div className="loader-core relative mb-6 h-20 w-20 rounded-full border border-white/10 bg-black/60">
          <div className="loader-ring loader-ring-a" />
          <div className="loader-ring loader-ring-b" />
          <div
            className="absolute inset-[22px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(78,234,200,0.95), rgba(78,234,200,0.15) 65%, transparent 70%)",
            }}
          />
        </div>

        <p
          className="text-xs font-semibold uppercase tracking-[0.34em]"
          style={{ color: ACCENT }}
        >
          Initializing Lab Systems
        </p>
        <h3 className="mt-4 text-2xl font-semibold text-white">
          Loading immersive training environment
        </h3>
        <p className="mt-3 max-w-md text-sm leading-7 text-white/60">
          Preparing interactive lab resources and simulation modules for the
          selected training pathway.
        </p>
      </div>
    </div>
  );
}

const Labs: React.FC = () => {
  const [activeRole, setActiveRole] = useState<RoleKey | null>(null);

  const handleRoleChange = (role: RoleKey | null) => {
    startTransition(() => {
      setActiveRole(role);
    });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none fixed inset-0 z-[1]">
        <div className="absolute inset-0 bg-black" />

        <div className="absolute inset-0 opacity-70 mix-blend-screen">
          <div className="aurora aurora-a" />
          <div className="aurora aurora-b" />
        </div>

        <div className="energy-ring" />
        <div className="energy-ring energy-ring-2" />

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)",
            backgroundSize: "46px 46px",
          }}
        />

        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(78,234,200,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(78,234,200,0.16)_1px,transparent_1px)] [background-size:88px_88px]" />
        <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(78,234,200,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(78,234,200,0.08)_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:100%_10px]" />

        <div className="scanner-beam" />
        <div className="hud-corners" />

        <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22 opacity=%220.25%22/%3E%3C/svg%3E')]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_42%,rgba(0,0,0,0.94)_100%)]" />
      </div>

      <div className="relative z-10">
        <LabsHero />

        <section className="relative -mt-14 pb-10 md:-mt-20 md:pb-14">
          <div className="mx-auto max-w-7xl px-6">
            <div className="overflow-hidden rounded-[38px] border border-white/10 bg-black/55 shadow-[0_28px_90px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
              <div className="grid gap-0 lg:grid-cols-[1.05fr,0.95fr]">
                <div className="relative border-b border-white/10 p-6 md:p-8 lg:border-b-0 lg:border-r lg:p-10">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(78,234,200,0.14),transparent_38%)]" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent lg:hidden" />

                  <div className="relative">
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-white/65">
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: ACCENT }}
                        />
                        Lab Activities Overview
                      </p>
                      <div className="rounded-full border border-white/10 bg-black/35 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/50">
                        Skill University Infrastructure
                      </div>
                    </div>

                    <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                      Training that moves from guided immersion to job-ready execution
                    </h2>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-white/64 md:text-base">
                      The lab ecosystem is designed as a progression model. Learners
                      first understand systems in controlled environments, then
                      move into role-based practice aligned with actual industrial
                      workflows.
                    </p>

                    {/* <div className="mt-8 space-y-3">
                      {overviewBands.map((band) => (
                        <div
                          key={band.title}
                          className="flex items-center justify-between gap-4 rounded-[22px] border border-white/10 bg-white/[0.03] px-5 py-4"
                        >
                          <div>
                            <p className="text-base font-semibold text-white">
                              {band.title}
                            </p>
                            <p className="mt-1 text-sm text-white/55">
                              {band.meta}
                            </p>
                          </div>
                          <div
                            className="h-10 w-10 rounded-full border border-white/10 bg-black/35"
                            style={{
                              boxShadow: "0 0 24px rgba(78,234,200,0.12)",
                            }}
                          >
                            <div
                              className="mx-auto mt-[15px] h-[10px] w-[10px] rounded-full"
                              style={{ backgroundColor: ACCENT }}
                            />
                          </div>
                        </div>
                      ))}
                    </div> */}
                  </div>
                </div>

                <div className="grid gap-0 md:grid-cols-[0.95fr,1.05fr]">
                  <div className="border-b border-white/10 p-6 md:border-b-0 md:border-r md:p-8 lg:p-10">
                    <p
                      className="text-xs font-semibold uppercase tracking-[0.34em]"
                      style={{ color: ACCENT }}
                    >
                      Learning Sequence
                    </p>
                    <div className="mt-6 space-y-4">
                      {overviewPoints.map((point, index) => (
                        <div key={point} className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div
                              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-black/35 text-sm font-semibold"
                              style={{ color: ACCENT }}
                            >
                              0{index + 1}
                            </div>
                            {index < overviewPoints.length - 1 ? (
                              <div className="mt-2 h-10 w-px bg-gradient-to-b from-[#4eeac8] to-transparent" />
                            ) : null}
                          </div>
                          <div className="pt-2">
                            <p className="text-sm leading-6 text-white/68">
                              {point}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 md:p-8 lg:p-10">
                    <p
                      className="text-xs font-semibold uppercase tracking-[0.34em]"
                      style={{ color: ACCENT }}
                    >
                      Quick Stats
                    </p>
                    <div className="mt-6 grid gap-4">
                      {highlights.map((item) => (
                        <div
                          key={item.label}
                          className="rounded-[24px] border border-white/10 bg-black/30 p-5 backdrop-blur-xl"
                        >
                          <p
                            className="text-2xl font-semibold uppercase tracking-[0.16em]"
                            style={{ color: ACCENT }}
                          >
                            {item.value}
                          </p>
                          <p className="mt-2 text-sm leading-6 text-white/60">
                            {item.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <LabsWhyItMatters />
        <LabsGrid />

        <section className="relative py-10 md:py-14">
          <div className="mx-auto max-w-7xl px-6">
            {activeRole ? (
              <Suspense fallback={<LabsLoader />}>
                <div className="space-y-5">
                  <div className="flex items-center justify-between rounded-[24px] border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-xl">
                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-[0.34em]"
                        style={{ color: ACCENT }}
                      >
                        {activeRole === "operator"
                          ? "Operator Roles"
                          : "Technician Roles"}
                      </p>
                      <p className="mt-1 text-sm text-white/55">
                        {activeRole === "operator"
                          ? "Operator-focused simulation and machine training"
                          : "Technician-focused diagnostics and workshop training"}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleRoleChange(null)}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/70 transition hover:border-white/20 hover:text-white"
                    >
                      Back
                    </button>
                  </div>

                  {activeRole === "operator" ? (
                    <TrainingLabsSection />
                  ) : (
                    <LabsSimulatorPromoBanner />
                  )}
                </div>
              </Suspense>
            ) : (
              <>
                <div className="mb-8 max-w-3xl">
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.34em]"
                    style={{ color: ACCENT }}
                  >
                    Select Training Pathway
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                    Two role-based gateways into the lab ecosystem
                  </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {roles.map((role) => (
                    <button
                      key={role.key}
                      type="button"
                      onClick={() => handleRoleChange(role.key)}
                      className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-black/35 p-7 text-left transition duration-300 backdrop-blur-2xl hover:border-white/20 hover:bg-white/[0.05]"
                    >
                      <div className="pointer-events-none absolute inset-0">
                        <div
                          className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                          style={{
                            background:
                              "radial-gradient(circle at top right, rgba(78,234,200,0.18), transparent 45%)",
                          }}
                        />
                        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(78,234,200,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(78,234,200,0.28)_1px,transparent_1px)] [background-size:30px_30px]" />
                      </div>

                      <div className="relative">
                        <div className="flex items-center justify-between">
                          <p
                            className="text-xs font-semibold uppercase tracking-[0.34em]"
                            style={{ color: ACCENT }}
                          >
                            {role.eyebrow}
                          </p>
                          <div className="h-3 w-3 rounded-full border border-white/25 bg-transparent transition group-hover:border-transparent group-hover:bg-[#4eeac8]" />
                        </div>

                        <h3 className="mt-5 text-2xl font-semibold text-white md:text-3xl">
                          {role.title}
                        </h3>
                        <p className="mt-4 max-w-xl text-sm leading-7 text-white/62 md:text-base">
                          {role.description}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                          {role.details.map((detail) => (
                            <span
                              key={detail}
                              className="rounded-full border border-white/10 bg-black/35 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/55"
                            >
                              {detail}
                            </span>
                          ))}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        <section className="relative py-6 md:py-8">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-[32px] border border-white/10 bg-black/40 p-2 shadow-[0_24px_70px_rgba(0,0,0,0.32)] backdrop-blur-xl md:p-3">
              <div className="mb-3 flex items-center justify-between rounded-[24px] border border-white/10 bg-white/[0.02] px-4 py-3">
                <p className="text-xs uppercase tracking-[0.34em] text-white/45">
                  Advanced Facilities
                </p>
                <div
                  className="h-[2px] w-20 rounded-full"
                  style={{
                    backgroundImage: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)`,
                  }}
                />
              </div>
              <FuturisticLabsShowcaseSection />
            </div>
          </div>
        </section>

        <LabsImpact />
      </div>

      <style>{`
        .aurora {
          position: absolute;
          width: 980px;
          height: 980px;
          border-radius: 9999px;
          filter: blur(240px);
          opacity: 0.35;
          animation: auroraFloat 18s ease-in-out infinite;
        }

        .aurora-a {
          left: -18%;
          top: -40%;
          background: radial-gradient(circle, rgba(78,234,200,0.34), transparent 60%);
        }

        .aurora-b {
          right: -20%;
          top: 10%;
          background: radial-gradient(circle, rgba(78,234,200,0.2), transparent 62%);
          animation-delay: -8s;
        }

        @keyframes auroraFloat {
          0% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(90px, 60px, 0) scale(1.08); }
          100% { transform: translate3d(0, 0, 0) scale(1); }
        }

        .energy-ring {
          position: absolute;
          left: 50%;
          top: -260px;
          width: 1180px;
          height: 1180px;
          transform: translateX(-50%);
          border-radius: 9999px;
          opacity: 0.22;
          background: conic-gradient(
            from 180deg,
            transparent,
            rgba(78,234,200,0.42),
            transparent 65%
          );
          filter: blur(1px);
          mask-image: radial-gradient(circle, rgba(0,0,0,1) 52%, transparent 74%);
          -webkit-mask-image: radial-gradient(circle, rgba(0,0,0,1) 52%, transparent 74%);
          animation: ringSpin 15s linear infinite;
        }

        .energy-ring-2 {
          top: auto;
          bottom: -520px;
          width: 1320px;
          height: 1320px;
          opacity: 0.12;
          animation-duration: 24s;
          background: conic-gradient(
            from 0deg,
            transparent,
            rgba(78,234,200,0.24),
            transparent 70%
          );
        }

        @keyframes ringSpin {
          from { transform: translateX(-50%) rotate(0deg); }
          to { transform: translateX(-50%) rotate(360deg); }
        }

        .scanner-beam {
          position: absolute;
          top: 0;
          left: -40%;
          width: 40%;
          height: 100%;
          opacity: 0.12;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(78,234,200,0.18),
            transparent
          );
          filter: blur(2px);
          animation: scanMove 8s ease-in-out infinite;
          mix-blend-mode: screen;
        }

        @keyframes scanMove {
          0% { transform: translateX(0); }
          50% { transform: translateX(220%); }
          100% { transform: translateX(0); }
        }

        .hud-corners {
          position: absolute;
          inset: 26px;
          border-radius: 22px;
          pointer-events: none;
          opacity: 0.3;
          box-shadow:
            inset 0 0 0 1px rgba(78,234,200,0.1),
            0 0 60px rgba(78,234,200,0.04);
          mask-image: linear-gradient(black, black);
        }

        .hud-corners::before,
        .hud-corners::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 22px;
          background:
            linear-gradient(to right, rgba(78,234,200,0.55), transparent 25%) top left / 120px 2px no-repeat,
            linear-gradient(to bottom, rgba(78,234,200,0.55), transparent 25%) top left / 2px 120px no-repeat,
            linear-gradient(to left, rgba(78,234,200,0.55), transparent 25%) top right / 120px 2px no-repeat,
            linear-gradient(to bottom, rgba(78,234,200,0.55), transparent 25%) top right / 2px 120px no-repeat,
            linear-gradient(to right, rgba(78,234,200,0.55), transparent 25%) bottom left / 120px 2px no-repeat,
            linear-gradient(to top, rgba(78,234,200,0.55), transparent 25%) bottom left / 2px 120px no-repeat,
            linear-gradient(to left, rgba(78,234,200,0.55), transparent 25%) bottom right / 120px 2px no-repeat,
            linear-gradient(to top, rgba(78,234,200,0.55), transparent 25%) bottom right / 2px 120px no-repeat;
          opacity: 0.3;
          filter: drop-shadow(0 0 10px rgba(78,234,200,0.16));
        }

        .loader-core {
          box-shadow:
            inset 0 0 0 1px rgba(255,255,255,0.06),
            0 0 40px rgba(78,234,200,0.12);
        }

        .loader-ring {
          position: absolute;
          inset: 6px;
          border-radius: 9999px;
          border: 1px solid transparent;
        }

        .loader-ring-a {
          border-top-color: rgba(78,234,200,0.95);
          border-right-color: rgba(78,234,200,0.3);
          animation: loaderSpin 1.3s linear infinite;
        }

        .loader-ring-b {
          inset: 14px;
          border-bottom-color: rgba(78,234,200,0.85);
          border-left-color: rgba(78,234,200,0.24);
          animation: loaderSpinReverse 1.8s linear infinite;
        }

        .loader-scan {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(78,234,200,0.08),
            transparent
          );
          animation: loaderSweep 2.2s ease-in-out infinite;
        }

        @keyframes loaderSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes loaderSpinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes loaderSweep {
          0% { transform: translateX(-100%); opacity: 0; }
          20% { opacity: 1; }
          50% { transform: translateX(0%); opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
      `}</style>
    </main>
  );
};

export default Labs;
