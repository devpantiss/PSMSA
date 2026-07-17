import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface Facility {
  id: string;
  name: string;
  category: string;
  desc: string;
  skills: string[];
  equipment: string[];
  industries: string[];
  image: string;
  accent: string;
}

const CATEGORIES = [
  "All", "Workshops", "Simulation", "Electrical", "Safety", "Digital", "Metallurgy"
];

const FACILITIES: Facility[] = [
  {
    id: "welding",
    name: "Welding & Fabrication Lab",
    category: "Workshops",
    desc: "Welding bays for fabrication, plate work and repair tasks used across mines, steel plants and aluminium facilities.",
    skills: ["MIG Welding", "Arc Welding", "Gas Cutting", "Plate Fabrication"],
    equipment: ["MIG Welders", "TIG Machines", "Grinding Tools", "PPE Stations"],
    industries: ["Mining", "Steel", "Aluminium"],
    image: "/images/weld.jpg",
    accent: "#f97316",
  },
  {
    id: "hemm-ops",
    name: "HEMM Operations Lab",
    category: "Simulation",
    desc: "Heavy earth-moving machinery simulators for excavator, dozer, loader and dumper training in mine-like operating conditions.",
    skills: ["Excavator Operation", "Loading Cycles", "Haulage Planning", "Grade Control"],
    equipment: ["Simulator Cabins", "Motion Platforms", "360° Displays"],
    industries: ["Mining", "Steel Raw Material Handling", "Aluminium Mines"],
    image: "/images/hemm_1.jpg",
    accent: "#4eeac8",
  },
  {
    id: "arvr",
    name: "AR / VR Simulation Room",
    category: "Simulation",
    desc: "Immersive virtual reality training for mine hazards, plant safety, emergency response and equipment orientation.",
    skills: ["Hazard Recognition", "Emergency Response", "Equipment Familiarisation"],
    equipment: ["VR Headsets", "Motion Controllers", "Haptic Gloves"],
    industries: ["Mining", "Steel", "Aluminium"],
    image: "/fleet2/mines.jpg",
    accent: "#a78bfa",
  },
  {
    id: "electrical",
    name: "Electrical & Electronics Lab",
    category: "Electrical",
    desc: "Hands-on electrical systems training for motors, panels, sensors and plant diagnostics.",
    skills: ["Panel Wiring", "PLC Programming", "Fault Diagnostics", "Cable Management"],
    equipment: ["Training Panels", "PLCs", "Multimeters", "Oscilloscopes"],
    industries: ["Mining", "Steel", "Aluminium"],
    image: "/images/hemm_2.JPG",
    accent: "#38bdf8",
  },
  {
    id: "safety-zone",
    name: "Safety Training Zone",
    category: "Safety",
    desc: "Dedicated zone for PPE training, fire response, first aid, lockout-tagout and emergency drill practice.",
    skills: ["PPE Compliance", "Fire Response", "First Aid", "Lockout-Tagout"],
    equipment: ["Fire Extinguishers", "First Aid Kits", "PPE Stations", "Emergency Boards"],
    industries: ["Mining", "Steel", "Aluminium"],
    image: "/images/hemm_3.JPG",
    accent: "#f97316",
  },
  {
    id: "material-handling",
    name: "Material Handling Yard",
    category: "Workshops",
    desc: "Practice zone for safe movement of ore, coal, finished steel, aluminium ingots and industrial consumables.",
    skills: ["Forklift Operation", "Load Securing", "Stockyard Movement", "Dispatch Readiness"],
    equipment: ["Forklifts", "Racking Systems", "Lifting Tackles", "Material Tags"],
    industries: ["Mining", "Steel", "Aluminium"],
    image: "/fleet/forklift.jpeg",
    accent: "#fbbf24",
  },
  {
    id: "smart-classroom",
    name: "Smart Classrooms",
    category: "Digital",
    desc: "Digitally equipped theory spaces with interactive boards, AI-assisted content and industry case studies.",
    skills: ["Technical Fundamentals", "Industrial Standards", "Regulatory Knowledge"],
    equipment: ["Interactive Boards", "Tablets", "Digital LMS", "Projection Systems"],
    industries: ["Mining", "Steel", "Aluminium"],
    image: "/images/hemm_4.jpg",
    accent: "#34d399",
  },
  {
    id: "plant-maintenance",
    name: "Plant Maintenance Lab",
    category: "Workshops",
    desc: "Maintenance practice for pumps, motors, hydraulics, conveyors and plant equipment used in mining, steel and aluminium operations.",
    skills: ["Preventive Maintenance", "Hydraulics", "Motor Checks", "Conveyor Inspection"],
    equipment: ["Hydraulic Kits", "Motor Trainers", "Bearing Tools", "Alignment Tools"],
    industries: ["Mining", "Steel", "Aluminium"],
    image: "/fleet/bulldozer.jpg",
    accent: "#4eeac8",
  },
  {
    id: "crane-sim",
    name: "Crane & Lifting Simulator",
    category: "Simulation",
    desc: "Realistic lifting simulation covering load calculations, rigging and safe movement in mines and metal plants.",
    skills: ["Crane Operation", "Rigging", "Load Calculation", "Signal Communication"],
    equipment: ["Crane Simulators", "Rigging Gear", "Load Cells"],
    industries: ["Mining", "Steel", "Aluminium"],
    image: "/fleet/ace-crane.jpg",
    accent: "#f97316",
  },
  {
    id: "computer-lab",
    name: "Computer & Digital Learning Lab",
    category: "Digital",
    desc: "Computer-based assessments, digital credentials, learning management system and performance tracking.",
    skills: ["Digital Literacy", "Online Assessment", "Portfolio Building"],
    equipment: ["Desktops", "LMS Software", "Digital Assessment Platforms"],
    industries: ["Mining", "Steel", "Aluminium"],
    image: "/images/hemm_5.jpg",
    accent: "#38bdf8",
  },
];

const FacilityCard: React.FC<{ facility: Facility; delay: number }> = ({ facility, delay }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden rounded-[22px] border border-white/8 bg-zinc-900/50 cursor-pointer transition-all duration-300 hover:border-white/18"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={facility.image}
          alt={facility.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Category pill */}
        <div className="absolute top-4 left-4">
          <span
            className="rounded-full px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.22em] border"
            style={{ color: facility.accent, borderColor: `${facility.accent}40`, background: `${facility.accent}14` }}
          >
            {facility.category}
          </span>
        </div>
      </div>

      {/* Base content */}
      <div className="p-5">
        <h3 className="mb-2 text-base font-semibold text-white leading-snug group-hover:text-[#4eeac8] transition-colors duration-200">
          {facility.name}
        </h3>
        <p className="text-sm text-zinc-500 leading-relaxed line-clamp-2">{facility.desc}</p>
      </div>

      {/* Hover overlay detail panel */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 flex flex-col justify-end p-5 bg-black/90 backdrop-blur-sm rounded-[22px]"
          >
            <p
              className="mb-3 text-[9px] font-semibold uppercase tracking-[0.28em]"
              style={{ color: facility.accent }}
            >
              {facility.name}
            </p>

            <div className="mb-3">
              <p className="mb-1.5 text-[9px] uppercase tracking-[0.2em] text-white/40">Skills Taught</p>
              <div className="flex flex-wrap gap-1.5">
                {facility.skills.map((s) => (
                  <span key={s} className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[9px] text-white/65">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-3">
              <p className="mb-1.5 text-[9px] uppercase tracking-[0.2em] text-white/40">Equipment</p>
              <div className="flex flex-wrap gap-1.5">
                {facility.equipment.map((e) => (
                  <span key={e} className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[9px] text-white/65">
                    {e}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <p className="mb-1.5 text-[9px] uppercase tracking-[0.2em] text-white/40">Industries</p>
              <div className="flex flex-wrap gap-1.5">
                {facility.industries.map((ind) => (
                  <span key={ind} className="rounded-full px-2.5 py-0.5 text-[9px] font-medium border"
                    style={{ color: facility.accent, borderColor: `${facility.accent}40` }}>
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            <button
              className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors"
              style={{ color: facility.accent }}
            >
              View Details <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const LearningSpaces: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? FACILITIES
    : FACILITIES.filter((f) => f.category === activeCategory);

  return (
    <section id="facilities" className="relative bg-[#050505] py-24 md:py-32 overflow-hidden">
      {/* Top gradient transition */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#050505] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-3 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#4eeac8]"
          >
            Training Infrastructure
          </motion.p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-white"
            >
              Learning Spaces Built for{" "}
              <span className="text-zinc-500">Real Work</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm text-zinc-400 max-w-sm"
            >
              Hover over any facility card to see skills, equipment and industry relevance.
            </motion.p>
          </div>
        </div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-wrap gap-2.5"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#4eeac8] text-black border-[#4eeac8]"
                  : "border-white/12 text-white/50 hover:border-white/25 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((facility, i) => (
              <FacilityCard key={facility.id} facility={facility} delay={i * 0.05} />
            ))}
          </div>
        </AnimatePresence>

        {/* 360 virtual tour CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex items-center justify-center gap-6 rounded-[24px] border border-white/10 bg-zinc-900/40 p-8 backdrop-blur-sm"
        >
          <div>
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#4eeac8]">360° Virtual Tour</p>
            <h3 className="text-xl font-bold text-white">Explore our labs virtually</h3>
            <p className="mt-1 text-sm text-zinc-500">Schedule a live campus tour or view our virtual walkthrough.</p>
          </div>
          <a
            href="/contact-us"
            className="flex-shrink-0 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wider text-black transition-all hover:scale-105"
            style={{ background: "linear-gradient(90deg,#4eeac8,#38bdf8)" }}
          >
            Book Visit
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default LearningSpaces;
