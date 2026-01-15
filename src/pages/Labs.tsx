import React from "react";
import LabsHero from "../components/Labs/LabsHero";
import LabsWhyItMatters from "../components/Labs/LabsWhyItMatters";
import LabsGrid from "../components/Labs/LabsGrid";
import TechStack from "../components/Labs/TechStack";
import LabsImpact from "../components/Labs/LabsImpact";
import LabsCTA from "../components/Labs/LabsCTA";
import FuturisticLabsShowcaseSection from "../components/Labs/FuturisticLabsShowcaseSection";
import HEMMMechanicsShowcase from "../components/Labs/HEMMMechanicsShowcase";
import ElectricalLabViewer from "../components/Labs/ElectricalLabViewer";

// const ACCENT = "#4eeac8";

const Labs: React.FC = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* ===== Sci-Fi HUD Background Layer ===== */}
      <div className="pointer-events-none fixed inset-0 z-[1]">
        {/* Base black */}
        <div className="absolute inset-0 bg-black" />

        {/* Aurora glow */}
        <div className="absolute inset-0 opacity-70 mix-blend-screen">
          <div className="aurora aurora-a" />
          <div className="aurora aurora-b" />
        </div>

        {/* Reactor ring */}
        <div className="energy-ring" />
        <div className="energy-ring energy-ring-2" />

        {/* Starfield */}
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        {/* HUD Grid */}
        <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(78,234,200,0.20)_1px,transparent_1px),linear-gradient(90deg,rgba(78,234,200,0.20)_1px,transparent_1px)] [background-size:84px_84px]" />

        {/* Micro Grid */}
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(78,234,200,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(78,234,200,0.14)_1px,transparent_1px)] [background-size:18px_18px]" />

        {/* Scanlines */}
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.20)_1px,transparent_1px)] [background-size:100%_10px]" />

        {/* Scanning beam */}
        <div className="scanner-beam" />

        {/* HUD corner brackets */}
        <div className="hud-corners" />

        {/* Noise */}
        <div className="absolute inset-0 opacity-[0.035] mix-blend-soft-light [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22 opacity=%220.25%22/%3E%3C/svg%3E')]" />

        {/* Cinematic vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_42%,rgba(0,0,0,0.93)_100%)]" />
      </div>

      {/* ===== Content ===== */}
      <div className="relative z-10">
        <LabsHero />
        <LabsWhyItMatters />
        <LabsGrid />
        <FuturisticLabsShowcaseSection />
        <HEMMMechanicsShowcase />
        <ElectricalLabViewer />
        <TechStack />
        <LabsImpact />
        <LabsCTA />
      </div>

      {/* ===== Background CSS ===== */}
      <style>{`
        /* Aurora blobs */
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
          left: -22%;
          top: -45%;
          background: radial-gradient(circle, rgba(78,234,200,0.55), transparent 60%);
        }

        .aurora-b {
          right: -25%;
          top: 18%;
          background: radial-gradient(circle, rgba(78,234,200,0.35), transparent 62%);
          animation-delay: -8s;
        }

        @keyframes auroraFloat {
          0% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(90px, 60px, 0) scale(1.1); }
          100% { transform: translate3d(0, 0, 0) scale(1); }
        }

        /* Reactor rings */
        .energy-ring {
          position: absolute;
          left: 50%;
          top: -260px;
          width: 1100px;
          height: 1100px;
          transform: translateX(-50%);
          border-radius: 9999px;
          opacity: 0.35;
          background: conic-gradient(
            from 180deg,
            transparent,
            rgba(78,234,200,0.50),
            transparent 65%
          );
          filter: blur(1px);
          mask-image: radial-gradient(circle, rgba(0,0,0,1) 52%, transparent 74%);
          -webkit-mask-image: radial-gradient(circle, rgba(0,0,0,1) 52%, transparent 74%);
          animation: ringSpin 14s linear infinite;
        }

        .energy-ring-2 {
          top: auto;
          bottom: -520px;
          width: 1300px;
          height: 1300px;
          opacity: 0.18;
          animation-duration: 22s;
          background: conic-gradient(
            from 0deg,
            transparent,
            rgba(78,234,200,0.35),
            transparent 70%
          );
        }

        @keyframes ringSpin {
          from { transform: translateX(-50%) rotate(0deg); }
          to { transform: translateX(-50%) rotate(360deg); }
        }

        /* Scanning beam */
        .scanner-beam {
          position: absolute;
          top: 0;
          left: -40%;
          width: 40%;
          height: 100%;
          opacity: 0.18;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(78,234,200,0.22),
            transparent
          );
          filter: blur(2px);
          animation: scanMove 7s ease-in-out infinite;
          mix-blend-mode: screen;
        }

        @keyframes scanMove {
          0% { transform: translateX(0); }
          50% { transform: translateX(220%); }
          100% { transform: translateX(0); }
        }

        /* HUD corners */
        .hud-corners {
          position: absolute;
          inset: 26px;
          border-radius: 22px;
          pointer-events: none;
          opacity: 0.35;
          box-shadow:
            inset 0 0 0 1px rgba(78,234,200,0.14),
            0 0 60px rgba(78,234,200,0.06);
          mask-image: linear-gradient(black, black);
        }

        .hud-corners::before,
        .hud-corners::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 22px;
          background:
            linear-gradient(to right, rgba(78,234,200,0.6), transparent 25%) top left / 120px 2px no-repeat,
            linear-gradient(to bottom, rgba(78,234,200,0.6), transparent 25%) top left / 2px 120px no-repeat,

            linear-gradient(to left, rgba(78,234,200,0.6), transparent 25%) top right / 120px 2px no-repeat,
            linear-gradient(to bottom, rgba(78,234,200,0.6), transparent 25%) top right / 2px 120px no-repeat,

            linear-gradient(to right, rgba(78,234,200,0.6), transparent 25%) bottom left / 120px 2px no-repeat,
            linear-gradient(to top, rgba(78,234,200,0.6), transparent 25%) bottom left / 2px 120px no-repeat,

            linear-gradient(to left, rgba(78,234,200,0.6), transparent 25%) bottom right / 120px 2px no-repeat,
            linear-gradient(to top, rgba(78,234,200,0.6), transparent 25%) bottom right / 2px 120px no-repeat;
          opacity: 0.35;
          filter: drop-shadow(0 0 10px rgba(78,234,200,0.22));
        }
      `}</style>
    </main>
  );
};

export default Labs;