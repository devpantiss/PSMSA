import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Wrench,
  Factory,
  Glasses,
  HardHat,
  Award,
} from "lucide-react";

const steps = [
  {
    title: "Orientation & Safety Induction",
    desc: "Mandatory safety training covering PPE usage, emergency response, and industrial discipline.",
    icon: <ShieldCheck size={26} />,
  },
  {
    title: "Skill Foundation",
    desc: "Introduction to tools, materials, measurements, and SOPs.",
    icon: <Wrench size={26} />,
  },
  {
    title: "Practical Training Modules",
    desc: "Supervised hands-on execution of real industrial tasks.",
    icon: <Factory size={26} />,
  },
  {
    title: "AR / VR Simulated Learning",
    desc: "Immersive training for high-risk operations.",
    icon: <Glasses size={26} />,
  },
  {
    title: "Field Immersion / Apprenticeship",
    desc: "On-site exposure with partner industries bridging training and employment.",
    icon: <HardHat size={26} />,
  },
  {
    title: "Assessment & Certification",
    desc: "Final evaluation and award of industry-recognized certification.",
    icon: <Award size={26} />,
  },
];

const CARD_WIDTH = 320;
const GAP = 96;
const MAX_X = -((steps.length - 1) * (CARD_WIDTH + GAP));

const ScrollLockedTrainingProcess: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const activeRef = useRef(false);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const inView =
        rect.top <= 0 && rect.bottom >= window.innerHeight;

      if (!inView) return;

      // Activate lock
      activeRef.current = true;
      document.body.style.overflow = "hidden";

      const nextX = xRef.current - e.deltaY;

      if (nextX <= 0 && nextX >= MAX_X) {
        e.preventDefault();
        xRef.current = nextX;
        sectionRef.current.style.setProperty(
          "--tx",
          `${xRef.current}px`
        );
      } else {
        // Release lock
        activeRef.current = false;
        document.body.style.overflow = "";
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[101vh] bg-black overflow-hidden"
      style={{ ["--tx" as any]: "0px" }}
    >
      <div className="h-screen flex items-center">
        <div className="w-full relative">
          <h2 className="text-4xl font-bold text-green-500 text-center mb-16">
            Our Training Process
          </h2>

          {/* Track */}
          <div className="absolute top-[55%] left-0 right-0 h-[2px] bg-green-500/40" />

          {/* Cards */}
          <motion.div
            style={{ x: "var(--tx)" }}
            className="relative z-10 flex gap-24 mt-[50px] px-28"
          >
            {steps.map((step, index) => (
              <div
                key={index}
                className="min-w-[320px] bg-white/5 backdrop-blur-md border border-green-500/40 rounded-2xl p-8 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-black flex items-center justify-center">
                  {step.icon}
                </div>

                <h4 className="text-lg font-semibold text-purple-400 mb-3">
                  {step.title}
                </h4>

                <p className="text-sm text-gray-300">
                  {step.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScrollLockedTrainingProcess;
