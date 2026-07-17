import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface Scenario {
  id: string;
  label: string;
  title: string;
  desc: string;
  skills: string[];
  safetyPractices: string[];
  tools: string[];
  assessment: string;
  industryRelevance: string;
  videoSrc: string;
  posterSrc: string;
  accent: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "mine-safety",
    label: "Mine-Site Safety",
    title: "Mine-Site Safety Simulation",
    desc: "Trainees navigate a virtual mine site, identifying hazards, applying PPE protocols and responding to simulated emergencies.",
    skills: ["Hazard Identification", "PPE Application", "Emergency Response", "Radio Communication"],
    safetyPractices: ["DGMS safety codes", "Pre-shift inspection", "Blast zone clearance"],
    tools: ["VR Headset", "Simulated Site Map", "Hazard Markers"],
    assessment: "Scored scenario completion with hazard identification rate",
    industryRelevance: "Coal and metal mining, open-cast operations",
    videoSrc: "/lab/operator.mp4",
    posterSrc: "/fleet2/mines.jpg",
    accent: "#f97316",
  },
  {
    id: "steel-yard",
    label: "Steel Yard",
    title: "Steel Plant Material Movement",
    desc: "Students practise safe signalling, load movement, stockyard discipline and hot-zone awareness in a steel plant workflow.",
    skills: ["Crane Signalling", "Material Stacking", "Zone Communication", "Safety Boundary Control"],
    safetyPractices: ["Load limit verification", "Exclusion zone protocol", "Heat-zone precautions"],
    tools: ["Crane Simulator", "Signal Flags", "Material Movement Checklist"],
    assessment: "Accuracy and safety compliance during simulated material movement",
    industryRelevance: "Steel plants, rolling mills, raw material yards",
    videoSrc: "/lab/operator.mp4",
    posterSrc: "/homepage/steel.jpg",
    accent: "#38bdf8",
  },
  {
    id: "aluminium-casting",
    label: "Aluminium Casting",
    title: "Aluminium Casting and Handling",
    desc: "A controlled simulation covering PPE checks, molten-metal awareness, ingot movement and safe work communication.",
    skills: ["Heat-Zone Awareness", "Material Handling", "PPE Inspection", "Shift Communication"],
    safetyPractices: ["Face shield and gloves", "Hot material marking", "Clear movement routes"],
    tools: ["PPE Station", "Handling Checklist", "Material Tags", "Lifting Tools"],
    assessment: "Procedure accuracy and safety checklist completion",
    industryRelevance: "Aluminium smelters, casting shops, fabrication areas",
    videoSrc: "/lab/welder.mp4",
    posterSrc: "/fleet/bulldozer.jpg",
    accent: "#4eeac8",
  },
  {
    id: "plant-electrical",
    label: "Plant Electrical",
    title: "Plant Electrical Fault Diagnostics",
    desc: "Trainees identify faults in motors, control panels, sensors and electrical circuits used in mines and metal plants.",
    skills: ["Panel Checks", "Motor Diagnostics", "Multimeter Use", "Fault Code Interpretation"],
    safetyPractices: ["Electrical isolation", "Insulated tool use", "Arc flash prevention"],
    tools: ["Multimeter", "Training Panel", "Insulated Gloves", "Motor Trainer"],
    assessment: "Fault identification time, accuracy and isolation sequence",
    industryRelevance: "Mining, steel and aluminium plant maintenance",
    videoSrc: "/lab/electrical.mp4",
    posterSrc: "/images/hemm_2.JPG",
    accent: "#a78bfa",
  },
  {
    id: "machine-maintenance",
    label: "Machine Maintenance",
    title: "Industrial Machine Maintenance",
    desc: "Preventive and corrective maintenance simulation for industrial machinery including hydraulic systems, conveyor belts and pumps.",
    skills: ["Preventive Maintenance", "Hydraulics", "Lubrication", "Fault Isolation"],
    safetyPractices: ["Lockout-Tagout", "Hydraulic pressure relief", "PPE before entry"],
    tools: ["Hydraulic Test Kit", "Vibration Analyser", "Torque Wrenches"],
    assessment: "Maintenance checklist completion and fault resolution",
    industryRelevance: "Mining, steel and aluminium plant operations",
    videoSrc: "/lab/welder.mp4",
    posterSrc: "/images/hemm_1.jpg",
    accent: "#fbbf24",
  },
  {
    id: "fire-response",
    label: "Fire & Emergency",
    title: "Fire & Emergency Response",
    desc: "Structured fire response training including evacuation, extinguisher use, first aid and emergency communication.",
    skills: ["Extinguisher Operation", "Evacuation Coordination", "Emergency Communication", "First Aid"],
    safetyPractices: ["Assembly point protocols", "PASS technique", "Do not re-enter rule"],
    tools: ["Fire Extinguisher Simulator", "Emergency Whistle", "First Aid Kit"],
    assessment: "Response time and correct procedure execution",
    industryRelevance: "All industrial sites",
    videoSrc: "/lab/operator.mp4",
    posterSrc: "/images/hemm_3.JPG",
    accent: "#ef4444",
  },
  {
    id: "loto",
    label: "Lockout-Tagout",
    title: "Lockout-Tagout Procedures",
    desc: "Training on isolating energy sources before equipment maintenance — a critical workplace safety skill across all industries.",
    skills: ["Energy Isolation", "Lock Application", "Tag Verification", "Group LOTO"],
    safetyPractices: ["Six-step LOTO procedure", "Multi-point isolation", "Verification test"],
    tools: ["Lockout Stations", "Hasp Locks", "Safety Tags", "Lockout Kit"],
    assessment: "Procedure accuracy and sequence adherence",
    industryRelevance: "Mining, steel and aluminium maintenance",
    videoSrc: "/lab/electrical.mp4",
    posterSrc: "/images/hemm_4.jpg",
    accent: "#f97316",
  },
  {
    id: "ppe-check",
    label: "PPE Inspection",
    title: "Personal Protective Equipment Checks",
    desc: "Daily PPE inspection routines — identification of correct PPE for each zone, donning procedure and rejection of damaged equipment.",
    skills: ["PPE Identification", "Donning & Doffing", "Condition Assessment", "Zone Compliance"],
    safetyPractices: ["Pre-use inspection", "Rejection of damaged PPE", "Zone-specific requirements"],
    tools: ["Full PPE Kit", "Inspection Checklist", "PPE Display Board"],
    assessment: "Correct identification, donning time and defect spotting",
    industryRelevance: "Mining, steel and aluminium work zones",
    videoSrc: "/lab/operator.mp4",
    posterSrc: "/images/hemm_5.jpg",
    accent: "#4eeac8",
  },
];

const SimulationZone: React.FC = () => {
  const [selected, setSelected] = useState(SCENARIOS[0]);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleSelect = (scenario: Scenario) => {
    setSelected(scenario);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <section className="relative bg-[#020202] py-24 md:py-32 overflow-hidden">
      {/* Background texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(78,234,200,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(78,234,200,0.12)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(78,234,200,0.05)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14 md:mb-20 text-center max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-3 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#4eeac8]"
          >
            Industry Simulation Zone
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white"
          >
            Train for the Real World{" "}
            <span className="text-zinc-500">Before Entering It</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-base text-zinc-400"
          >
            Select a scenario below to explore how trainees practise real industrial situations in a safe, controlled environment.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[360px,1fr] gap-8">
          {/* Left: Scenario selector */}
          <div className="flex flex-col gap-2">
            {SCENARIOS.map((scenario) => (
              <button
                key={scenario.id}
                onClick={() => handleSelect(scenario)}
                className={`flex items-center justify-between rounded-[14px] border px-5 py-3.5 text-left transition-all duration-200 ${
                  selected.id === scenario.id
                    ? "border-[#4eeac8]/50 bg-[#4eeac8]/10 text-white"
                    : "border-white/8 bg-white/[0.02] text-white/50 hover:border-white/15 hover:text-white/75"
                }`}
              >
                <span className="text-sm font-medium">{scenario.label}</span>
                <ChevronRight
                  className={`h-4 w-4 transition-transform duration-200 ${
                    selected.id === scenario.id ? "translate-x-0.5 text-[#4eeac8]" : ""
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Right: Detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col gap-5"
            >
              {/* Video */}
              <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-zinc-900 aspect-video">
                <video
                  ref={videoRef}
                  key={selected.id}
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={selected.posterSrc}
                  className="w-full h-full object-cover"
                  aria-label={selected.title}
                >
                  <source src={selected.videoSrc} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span
                    className="rounded-full px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.22em] border"
                    style={{ color: selected.accent, borderColor: `${selected.accent}50`, background: `${selected.accent}15` }}
                  >
                    {selected.label}
                  </span>
                </div>
                <div className="absolute bottom-5 left-5">
                  <h3 className="text-xl font-bold text-white">{selected.title}</h3>
                  <p className="mt-1 text-sm text-white/60 max-w-md">{selected.desc}</p>
                </div>
              </div>

              {/* Detail cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                {[
                  { label: "Skills Practised", items: selected.skills, accent: selected.accent },
                  { label: "Safety Practices", items: selected.safetyPractices, accent: "#f97316" },
                  { label: "Tools Used", items: selected.tools, accent: "#38bdf8" },
                  { label: "Assessment", items: [selected.assessment, `Industry: ${selected.industryRelevance}`], accent: "#4eeac8" },
                ].map(({ label, items, accent }) => (
                  <div
                    key={label}
                    className="rounded-[18px] border border-white/8 bg-white/[0.02] p-5"
                  >
                    <p
                      className="mb-3 text-[9px] font-semibold uppercase tracking-[0.26em]"
                      style={{ color: accent }}
                    >
                      {label}
                    </p>
                    <ul className="space-y-1.5">
                      {items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-zinc-400">
                          <span
                            className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                            style={{ backgroundColor: accent }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SimulationZone;
