import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Wrench,
  Factory,
  Glasses,
  HardHat,
  Award,
  ChevronDown,
} from "lucide-react";

type Step = {
  title: string;
  desc: string;
  details: string;
  outcomes: string[];
  tags: string[];
  image: string;
  icon: React.ReactNode;
};

const steps: Step[] = [
  {
    title: "Orientation & Safety Induction",
    desc:
      "Structured onboarding focused on industrial safety culture and discipline.",
    details:
      "Trainees are introduced to industrial work ethics, statutory safety norms, emergency response protocols, and personal protective equipment (PPE) compliance before entering any lab or site environment.",
    outcomes: [
      "Safety-compliant workforce",
      "Reduced incident risk",
      "Industry-ready mindset",
    ],
    tags: ["NSQF Aligned", "Safety SOP", "Mandatory"],
    image:
      "https://images.unsplash.com/photo-1581092160607-ee67e7e0ec0f?auto=format&fit=crop&w=1400&q=80",
    icon: <ShieldCheck size={20} />,
  },
  {
    title: "Skill Foundation",
    desc:
      "Builds core technical understanding before advanced execution.",
    details:
      "Learners gain hands-on familiarity with tools, materials, measurements, drawings, and SOPs that form the base for all industrial operations.",
    outcomes: [
      "Strong fundamentals",
      "Reduced rework errors",
      "Faster skill absorption",
    ],
    tags: ["Foundation", "Hands-on", "NSQF"],
    image:
      "https://images.unsplash.com/photo-1581091870627-3b6c28b1f7f8?auto=format&fit=crop&w=1400&q=80",
    icon: <Wrench size={20} />,
  },
  {
    title: "Practical Training Modules",
    desc:
      "Supervised execution of real industrial tasks.",
    details:
      "Trainees perform actual shop-floor tasks under trainer supervision, following industry workflows, quality benchmarks, and productivity standards.",
    outcomes: [
      "Job-task confidence",
      "Process familiarity",
      "Quality awareness",
    ],
    tags: ["Industrial Tasks", "Skill Labs"],
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1400&q=80",
    icon: <Factory size={20} />,
  },
  {
    title: "AR / VR Simulated Learning",
    desc:
      "Safe practice of high-risk and complex operations.",
    details:
      "Immersive AR/VR simulations allow trainees to repeatedly practice hazardous or costly operations without real-world risk.",
    outcomes: [
      "Zero-risk learning",
      "Faster mastery",
      "Performance analytics",
    ],
    tags: ["AR/VR", "Immersive", "Advanced"],
    image:
      "https://images.unsplash.com/photo-1600267165730-3b47a06b4b06?auto=format&fit=crop&w=1400&q=80",
    icon: <Glasses size={20} />,
  },
  {
    title: "Field Immersion / Apprenticeship",
    desc:
      "Live exposure inside partner industries.",
    details:
      "Trainees are placed in real industrial environments where they shadow experienced professionals and adapt to workplace dynamics.",
    outcomes: [
      "Workplace readiness",
      "Industry exposure",
      "Employability boost",
    ],
    tags: ["Apprenticeship", "Industry Linked"],
    image:
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1400&q=80",
    icon: <HardHat size={20} />,
  },
  {
    title: "Assessment & Certification",
    desc:
      "Formal evaluation and certification.",
    details:
      "Candidates undergo theory and practical assessments mapped to NSQF and industry standards, followed by certification.",
    outcomes: [
      "Recognized certification",
      "Placement readiness",
      "Career mobility",
    ],
    tags: ["Certification", "NSQF", "Industry"],
    image:
      "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?auto=format&fit=crop&w=1400&q=80",
    icon: <Award size={20} />,
  },
];

const CARD_WIDTH = 380;
const GAP = 100;
const MAX_X = -((steps.length - 1) * (CARD_WIDTH + GAP));

const ScrollLockedTrainingProcess: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const inView = rect.top <= 0 && rect.bottom >= window.innerHeight;
      if (!inView) return;

      document.body.style.overflow = "hidden";

      const nextX = xRef.current - e.deltaY;
      if (nextX <= 0 && nextX >= MAX_X) {
        e.preventDefault();
        xRef.current = nextX;
        sectionRef.current.style.setProperty("--tx", `${xRef.current}px`);
        setActiveIndex(Math.round(Math.abs(nextX) / (CARD_WIDTH + GAP)));
      } else {
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
      className="relative h-[130vh] overflow-hidden bg-black"
      style={{ ["--tx" as any]: "0px" }}
    >
      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-260px] top-[-220px] h-[540px] w-[540px] rounded-full bg-purple-600/20 blur-[220px]" />
        <div className="absolute right-[-260px] bottom-[-220px] h-[540px] w-[540px] rounded-full bg-amber-400/15 blur-[240px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.9)_100%)]" />
      </div>

      <div className="relative flex h-screen flex-col justify-center">
        {/* Header */}
        <div className="mb-20 text-center">
          <p className="mb-2 text-xs uppercase tracking-widest text-purple-400">
            Pantiss Skill Universe
          </p>
          <h2 className="text-4xl font-semibold text-white md:text-5xl">
            Training Methodology
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-white/65">
            A structured, industry-aligned pathway that converts learners into
            certified, job-ready professionals.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8 flex justify-center gap-2">
          {steps.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-8 rounded-full transition ${
                i === activeIndex
                  ? "bg-gradient-to-r from-purple-500 to-amber-400"
                  : "bg-white/20"
              }`}
            />
          ))}
        </div>

        {/* Cards */}
        <motion.div
          style={{ x: "var(--tx)" }}
          className="relative z-10 flex gap-[100px] px-32"
        >
          {steps.map((step, i) => {
            const isActive = i === activeIndex;

            return (
              <div
                key={i}
                className={`min-w-[380px] rounded-3xl border bg-white/5 backdrop-blur transition ${
                  isActive
                    ? "border-purple-500/40 scale-[1.02]"
                    : "border-white/10"
                }`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden rounded-t-3xl">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-7">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-amber-400 text-black">
                    {step.icon}
                  </div>

                  <h4 className="mb-2 text-lg font-semibold text-white">
                    {step.title}
                  </h4>

                  <p className="text-sm text-white/70">{step.desc}</p>

                  {/* Expand */}
                  <button
                    onClick={() =>
                      setExpanded(expanded === i ? null : i)
                    }
                    className="mt-4 flex items-center gap-2 text-xs text-purple-400"
                  >
                    Learn more <ChevronDown size={14} />
                  </button>

                  {expanded === i && (
                    <div className="mt-4 space-y-3 text-sm text-white/65">
                      <p>{step.details}</p>
                      <ul className="space-y-1">
                        {step.outcomes.map((o) => (
                          <li key={o}>• {o}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs text-purple-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollLockedTrainingProcess;