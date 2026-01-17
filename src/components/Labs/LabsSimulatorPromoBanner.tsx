import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const ACCENT = "#4eeac8";

type LabsSimulatorPromoBannerProps = {
  backgroundImage?: string;
  badgeText?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
};

const LabsSimulatorPromoBanner: React.FC<LabsSimulatorPromoBannerProps> = ({
  backgroundImage = "/Lab_banner.jpg",
  badgeText = "Featured Lab Experience",
  title = "Simulator Training Lab",
  subtitle = "A high-impact learning environment built to replicate real job-site conditions with precision and safety.",
  ctaText = "Explore Simulator Modules",
  ctaHref = "/labs",
}) => {
  return (
    <section className="relative w-full overflow-hidden py-14 md:py-20">
      {/* ===== Fixed Parallax Background ===== */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />

      {/* ===== Dark overlay (keeps it blackish) ===== */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/85" />

      {/* ===== Subtle futuristic accent (simple) ===== */}
      <div className="pointer-events-none absolute inset-0">
        {/* glow */}
        <div
          className="absolute -top-40 left-[-180px] h-[520px] w-[520px] rounded-full blur-[180px]"
          style={{ backgroundColor: `${ACCENT}18` }}
        />
        <div
          className="absolute bottom-[-260px] right-[-220px] h-[640px] w-[640px] rounded-full blur-[220px]"
          style={{ backgroundColor: `${ACCENT}14` }}
        />

        {/* thin grid */}
        <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:72px_72px]" />

        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.92)_100%)]" />
      </div>

      {/* ===== Content ===== */}
      <div className="relative mx-auto max-w-7xl px-6">
        <div
          className="
            grid items-center gap-10
            rounded-[28px] border border-white/10
            bg-black/40 backdrop-blur-2xl
            p-8 md:p-12
            shadow-[0_0_70px_rgba(78,234,200,0.10)]
            md:grid-cols-2
          "
        >
          {/* LEFT: Text */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span
                className="h-2 w-2 rounded-full animate-pulse"
                style={{ backgroundColor: ACCENT }}
              />
              {badgeText}
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              {title}{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${ACCENT}, rgba(78,234,200,0.55))`,
                }}
              >
                Showcase
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
              {subtitle}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={ctaHref}
                className="
                  inline-flex items-center gap-2
                  rounded-2xl px-6 py-3
                  text-sm font-semibold text-black
                  transition hover:scale-[1.03]
                "
                style={{
                  backgroundImage: `linear-gradient(90deg, ${ACCENT}, rgba(78,234,200,0.65))`,
                  boxShadow: `0 0 45px rgba(78,234,200,0.18)`,
                }}
              >
                {ctaText}
                <ArrowRight className="h-4 w-4" />
              </a>

              <div className="inline-flex items-center gap-2 text-xs text-white/55">
                <Sparkles className="h-4 w-4" style={{ color: ACCENT }} />
                Built for Industry-grade readiness
              </div>
            </div>
          </div>

          {/* RIGHT: Minimal “glass preview” block */}
          <div className="relative">
            <div
              className="
                relative overflow-hidden rounded-[24px]
                border border-white/10 bg-black/35
                backdrop-blur-xl
                aspect-[16/10]
              "
            >
              {/* image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${backgroundImage}')`,
                  filter: "brightness(0.9) contrast(1.1) saturate(1.05)",
                  transform: "scale(1.06)",
                }}
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

              {/* corner accent */}
              <div
                className="absolute left-5 top-5 h-2 w-2 rounded-full"
                style={{ backgroundColor: ACCENT }}
              />
              <div
                className="absolute left-8 top-5 h-2 w-2 rounded-full opacity-60"
                style={{ backgroundColor: ACCENT }}
              />

              {/* bottom label */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="rounded-2xl border border-white/10 bg-black/55 px-4 py-3 text-sm text-white/80 backdrop-blur-xl">
                  <span className="font-semibold text-white">Simulator:</span>{" "}
                  Live training scenarios • Safe practice • Repeatable outcomes
                </div>
              </div>

              {/* subtle neon edge */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.08), 0 0 80px ${ACCENT}10`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabsSimulatorPromoBanner;