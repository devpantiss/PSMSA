// import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

type Props = {
  beforeImage: string;
  afterImage: string;
};

export default function SkillUniverseBeforeAfterSection({
  beforeImage,
  afterImage,
}: Props) {
  return (
    <section className="relative w-full bg-gradient-to-b from-black via-[#07040E] to-black text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#07040E]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(147,51,234,0.22),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,rgba(59,130,246,0.18),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          {/* ===================== LEFT CONTENT ===================== */}
          <div className="lg:col-span-5">
            <p className="text-xs tracking-[0.3em] text-white/50 mb-4">
              SKILL UNIVERSE
            </p>

            <h2 className="text-[46px] leading-[1.05] font-light tracking-tight">
              Before vs After
              <br />
              <span className="text-white/90 font-normal">
                Training Transformation
              </span>
            </h2>

            <p className="mt-6 text-sm leading-relaxed text-white/65 max-w-md">
              Compare conventional classroom-based training with Pantiss Skill
              Universe’s immersive, simulator-led, industry-grade learning
              environments.
            </p>

            <p className="mt-6 text-sm text-white/55 max-w-md">
              Click and drag the divider to explore the transformation.
            </p>
          </div>

          {/* ===================== RIGHT SLIDER (PORTRAIT) ===================== */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-sm">
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_30px_80px_rgba(0,0,0,0.55)] p-4">
                {/* Labels */}
                <div className="absolute top-4 left-4 z-10 bg-black/70 px-3 py-1 text-[11px] tracking-widest text-white/70">
                  BEFORE
                </div>
                <div className="absolute top-4 right-4 z-10 bg-black/70 px-3 py-1 text-[11px] tracking-widest text-white/70">
                  AFTER
                </div>

                {/* ===================== COMPARE SLIDER ===================== */}
                <div className="relative h-[520px] overflow-hidden rounded-xl">
                  <ReactCompareSlider
                    position={50} // starts EXACTLY in the middle
                    onlyHandleDraggable // prevents accidental drag
                    itemOne={
                      <ReactCompareSliderImage
                        src={beforeImage}
                        alt="Before training environment"
                        style={{ objectFit: "cover" }}
                      />
                    }
                    itemTwo={
                      <ReactCompareSliderImage
                        src={afterImage}
                        alt="After training environment"
                        style={{ objectFit: "cover" }}
                      />
                    }
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: "12px",
                    }}
                    handle={
                      <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#111"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M8 3L3 8l5 5" />
                          <path d="M16 3l5 5-5 5" />
                        </svg>
                      </div>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
