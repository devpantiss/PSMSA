import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  ClipboardCheck,
  Clock,
  HeartPulse,
  LockKeyhole,
  ShieldCheck,
  Siren,
  UserCheck,
} from "lucide-react";

const STATS = [
  { value: "[PLACEHOLDER]", label: "Safety Training Hours", suffix: "" },
  { value: "[PLACEHOLDER]", label: "Emergency Drills Conducted", suffix: "" },
  { value: "[PLACEHOLDER]", label: "Students Trained in Workplace Safety", suffix: "" },
  { value: "[PLACEHOLDER]", label: "Certified Safety Instructors", suffix: "" },
];

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Daily Safety Briefings",
    desc: "Every training day begins with a structured safety briefing covering the day's tasks, equipment status and site hazards.",
  },
  {
    icon: UserCheck,
    title: "PPE Discipline",
    desc: "Personal protective equipment is mandatory in all workshop and field zones. Compliance is checked before every session begins.",
  },
  {
    icon: ClipboardCheck,
    title: "Workshop Protocols",
    desc: "Every workshop has clearly defined entry procedures, equipment handling rules and emergency response protocols.",
  },
  {
    icon: Siren,
    title: "Emergency Drills",
    desc: "Regular scheduled drills prepare trainees for fire, chemical spill, injury and evacuation scenarios.",
  },
  {
    icon: LockKeyhole,
    title: "Equipment Handling",
    desc: "Lockout-tagout, pre-operation inspection and correct operating procedures are practised for every machine before use.",
  },
  {
    icon: Activity,
    title: "Workplace Behaviour",
    desc: "Punctuality, attendance, respectful conduct and professional communication standards are enforced throughout the programme.",
  },
  {
    icon: HeartPulse,
    title: "Health & Wellbeing Support",
    desc: "Healthcare facilities, counselling, mental health awareness and peer support systems are available to all trainees.",
  },
  {
    icon: Clock,
    title: "Attendance & Punctuality",
    desc: "Industrial employers demand reliability. Strict attendance standards are maintained and tracked throughout the course.",
  },
];

const SafetySection: React.FC = () => {
  const [countersStarted, setCountersStarted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setCountersStarted(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="safety" ref={sectionRef} className="relative bg-[#060404] py-24 md:py-32 overflow-hidden">
      {/* Orange accent background elements */}
      <div className="pointer-events-none absolute -top-60 -right-60 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-orange-600/5 blur-[120px]" />

      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(249,115,22,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.12)_1px,transparent_1px)] [background-size:56px_56px]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-3 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#f97316]"
          >
            Safety Culture
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]"
          >
            Safety Is a{" "}
            <span className="text-[#f97316]">Way of Life</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-base text-zinc-400 max-w-xl"
          >
            In every industry we train for, safety is not a rule to follow — it is a professional discipline. Pantiss campus embeds safety into every activity, every day.
          </motion.p>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={countersStarted ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-[20px] border border-orange-500/20 bg-orange-500/5 p-6"
            >
              <div className="mb-2 text-2xl md:text-3xl font-bold text-[#f97316]">
                {stat.value}
              </div>
              <div className="text-xs text-zinc-500 uppercase tracking-[0.18em] leading-relaxed">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PILLARS.map((pillar, i) => (
            (() => {
              const Icon = pillar.icon;
              return (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="group rounded-[20px] border border-white/8 bg-white/[0.02] p-6 hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-300"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-orange-500/25 bg-orange-500/10 text-[#f97316]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mb-2 text-sm font-semibold text-white group-hover:text-[#f97316] transition-colors duration-200">
                {pillar.title}
              </h3>
              <p className="text-xs text-zinc-500 leading-relaxed">{pillar.desc}</p>
            </motion.div>
              );
            })()
          ))}
        </div>

        {/* Safety commitment banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 rounded-[24px] border border-orange-500/25 bg-orange-500/8 px-8 py-7 backdrop-blur-sm"
        >
          <div className="text-center md:text-left">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#f97316] mb-1">
              Our Commitment
            </p>
            <h3 className="text-xl font-bold text-white">
              Every graduate leaves campus with a professional safety mindset.
            </h3>
          </div>
          <div className="flex-shrink-0 rounded-full border border-orange-500/40 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[#f97316]">
            Zero Compromise on Safety
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SafetySection;
