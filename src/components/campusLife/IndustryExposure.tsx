import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ExposureCard {
  id: string;
  type: string;
  title: string;
  location: string;
  industry: string;
  desc: string;
  takeaway: string;
  image: string;
  accent: string;
}

const CARDS: ExposureCard[] = [
  {
    id: "mine-visit",
    type: "Industry Visit",
    title: "Open-Cast Mine Site Exposure",
    location: "Mining region placeholder",
    industry: "Mining",
    desc: "Supervised visits to active open-cast coal and metal mines where trainees observe live operations including drilling, blasting, excavation and haulage.",
    takeaway: "Students gain direct exposure to scale of operations, equipment handling in real terrain and site safety protocols.",
    image: "/homepage/mine.jpg",
    accent: "#f97316",
  },
  {
    id: "steel-plant",
    type: "Factory Tour",
    title: "Steel Plant Operations Tour",
    location: "Steel plant placeholder",
    industry: "Steel",
    desc: "Guided exposure to raw material handling, coke oven or sinter areas where applicable, rolling mill workflows, maintenance routines and plant safety systems.",
    takeaway: "Students observe shift discipline, heat-zone precautions, equipment isolation and quality-focused production flow.",
    image: "/homepage/steel.jpg",
    accent: "#38bdf8",
  },
  {
    id: "aluminium-plant",
    type: "Factory Tour",
    title: "Aluminium Smelter & Casting Plant",
    location: "Aluminium plant placeholder",
    industry: "Aluminium",
    desc: "Guided tours through aluminium manufacturing processes including bauxite processing, smelting, casting and quality control.",
    takeaway: "Understanding of continuous process industries, temperature hazard management and shift-based operations.",
    image: "/homepage/aluminium.jpg",
    accent: "#a78bfa",
  },
  {
    id: "mine-workshop",
    type: "Live Project",
    title: "Mine Workshop Maintenance Week",
    location: "Campus / partner site placeholder",
    industry: "Mining",
    desc: "Supervised work on maintenance checklists, lubrication routines, inspection records and component handling for heavy equipment.",
    takeaway: "Hands-on understanding of preventive maintenance, tool discipline and breakdown reporting.",
    image: "/fleet/bulldozer.jpg",
    accent: "#4eeac8",
  },
  {
    id: "steel-maintenance",
    type: "Expert Session",
    title: "Steel Maintenance Masterclass",
    location: "Pantiss Campus",
    industry: "Steel",
    desc: "Plant engineers and instructors explain conveyor maintenance, motor checks, bearing failures, lubrication and lockout-tagout procedures.",
    takeaway: "Direct insight into maintenance behaviour, downtime prevention and safe handover practices.",
    image: "/fleet/ace-crane.jpg",
    accent: "#fbbf24",
  },
  {
    id: "aluminium-safety",
    type: "Safety Drill",
    title: "Aluminium Plant Safety Drill",
    location: "Campus simulation zone",
    industry: "Aluminium",
    desc: "Scenario-based drills covering heat exposure, PPE checks, material movement, emergency response and workplace communication.",
    takeaway: "Students practise the disciplined safety habits expected in smelters, casting areas and fabrication zones.",
    image: "/homepage/aluminium.jpg",
    accent: "#34d399",
  },
  {
    id: "mock-interview",
    type: "Employer Session",
    title: "On-Campus Employer Interaction",
    location: "Pantiss Campus",
    industry: "Mining / Steel / Aluminium",
    desc: "Industry HR professionals, site managers and safety officers conduct on-campus sessions including mock interviews, trade tests and briefings.",
    takeaway: "Direct insights into employer expectations, interview formats and pre-joining documentation requirements.",
    image: "/images/hemm_1.jpg",
    accent: "#4eeac8",
  },
  {
    id: "apprenticeship",
    type: "Apprenticeship",
    title: "Short-Term Apprenticeship Programme",
    location: "Partner Industry Sites",
    industry: "Mining / Steel / Aluminium",
    desc: "Structured short-term apprenticeship placements in partner companies providing real work exposure under supervision.",
    takeaway: "Professional work experience, employer reference, exposure to shift-based work culture and performance evaluation.",
    image: "/images/hemm_2.JPG",
    accent: "#f97316",
  },
];

const IndustryExposure: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 380;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="industry" className="relative bg-[#050505] py-24 md:py-32 overflow-hidden">
      {/* Background gradient accent */}
      <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.03] blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-3 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#4eeac8]"
            >
              Beyond the Campus
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]"
            >
              Industry Exposure{" "}
              <span className="text-zinc-500">Programme</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-sm text-zinc-400 max-w-2xl"
            >
              Trainees are connected to mining, steel and aluminium environments through structured visits, factory tours, live projects and employer interactions throughout the programme.
            </motion.p>
          </div>

          {/* Arrow controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white/50 hover:border-white/30 hover:text-white transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white/50 hover:border-white/30 hover:text-white transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Horizontal scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="group relative flex-shrink-0 w-[340px] overflow-hidden rounded-[24px] border border-white/8 bg-zinc-900/60 hover:border-white/18 transition-all duration-300 cursor-pointer"
              style={{ scrollSnapAlign: "start" }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                {/* Type pill */}
                <div className="absolute top-4 left-4">
                  <span
                    className="rounded-full px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.22em] border"
                    style={{ color: card.accent, borderColor: `${card.accent}40`, background: `${card.accent}14` }}
                  >
                    {card.type}
                  </span>
                </div>

                {/* Industry pill */}
                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full bg-black/60 border border-white/15 px-3 py-1 text-[9px] font-medium uppercase tracking-[0.18em] text-white/65">
                    {card.industry}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.24em] text-white/35">
                  {card.location}
                </p>
                <h3 className="mb-3 text-base font-semibold text-white group-hover:text-[#4eeac8] transition-colors duration-200 leading-snug">
                  {card.title}
                </h3>
                <p className="mb-4 text-xs text-zinc-500 leading-relaxed">{card.desc}</p>

                <div className="border-t border-white/8 pt-4">
                  <p
                    className="mb-1.5 text-[9px] font-semibold uppercase tracking-[0.22em]"
                    style={{ color: card.accent }}
                  >
                    Key Takeaway
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed">{card.takeaway}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryExposure;
