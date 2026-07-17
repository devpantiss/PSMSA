import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun, BookOpen, Wrench, Cpu, Coffee, MessageSquare,
  ClipboardList, Dumbbell, Target
} from "lucide-react";

interface TimelineStage {
  id: string;
  time: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  detail: string;
  image: string;
  accent: string;
}

const STAGES: TimelineStage[] = [
  {
    id: "assembly",
    time: "06:00 AM",
    icon: <Sun className="h-5 w-5" />,
    title: "Morning Assembly & Safety Briefing",
    desc: "Every day begins with a structured assembly: attendance, daily safety briefing, PPE inspection and motivational address by the instructor.",
    detail: "Trainees gather in formation. Safety officers review daily hazards, equipment status and emergency protocols. PPE is checked. Attendance is marked. The day's objectives are announced.",
    image: "/homepage/mine.jpg",
    accent: "#f97316",
  },
  {
    id: "theory",
    time: "07:30 AM",
    icon: <BookOpen className="h-5 w-5" />,
    title: "Theory & Technical Fundamentals",
    desc: "Smart classroom sessions covering the science, engineering and operational fundamentals relevant to the day's workshop practice.",
    detail: "Instructors use digital boards, interactive content and real case studies from Indian mine sites, steel plants and aluminium facilities. Topics include machine systems, electrical fundamentals, material movement, safety regulations and trade-specific knowledge.",
    image: "/images/hemm_1.jpg",
    accent: "#38bdf8",
  },
  {
    id: "workshop",
    time: "09:30 AM",
    icon: <Wrench className="h-5 w-5" />,
    title: "Workshop Practice",
    desc: "Hands-on technical practice sessions in dedicated workshops — welding, fabrication, electrical systems, plant maintenance or heavy-equipment zones.",
    detail: "Under certified instructor supervision, trainees practise the skills taught in theory using actual tools, machinery and components. Work is assessed against industry standards. Safety protocols are enforced throughout.",
    image: "/images/weld.jpg",
    accent: "#4eeac8",
  },
  {
    id: "simulator",
    time: "11:30 AM",
    icon: <Cpu className="h-5 w-5" />,
    title: "Simulator or AR/VR Training",
    desc: "High-fidelity equipment simulation — from HEMM operation to plant electrical faults, material handling and emergency response scenarios.",
    detail: "Trainees use simulators for excavator, loader, crane, forklift and other equipment operations. AR/VR modules replicate mine sites, steel yards and aluminium plant zones. Performance data is logged automatically for assessment.",
    image: "/fleet2/mines.jpg",
    accent: "#a78bfa",
  },
  {
    id: "lunch",
    time: "01:00 PM",
    icon: <Coffee className="h-5 w-5" />,
    title: "Lunch & Peer Interaction",
    desc: "A structured break period designed for rest, nutrition and peer exchange — an important part of community building.",
    detail: "Dining facilities serve balanced meals. Trainees from different trades interact, share experiences and build networks. Informal mentoring from senior trainees often happens here. Recreational spaces support mental recharge.",
    image: "/homepage/aluminium.jpg",
    accent: "#fbbf24",
  },
  {
    id: "softskills",
    time: "02:00 PM",
    icon: <MessageSquare className="h-5 w-5" />,
    title: "Soft Skills & Communication",
    desc: "Communication, workplace etiquette, teamwork, Hindi and English language skills, and professional behaviour — essential for employment.",
    detail: "Sessions cover verbal and written communication, interview etiquette, workplace relationships, digital literacy and public speaking. Role-playing exercises and group activities build confidence for real work environments.",
    image: "/images/hemm_2.JPG",
    accent: "#34d399",
  },
  {
    id: "project",
    time: "03:30 PM",
    icon: <ClipboardList className="h-5 w-5" />,
    title: "Industry Project or Assessment",
    desc: "Applied assignments, live projects, trade tests and employer assessments that mirror real industrial requirements.",
    detail: "Trainees work on assigned industry problems, complete practical assessments or participate in employer-simulated evaluations. Projects are reviewed by instructors and industry partners. Feedback is immediate and documented.",
    image: "/images/hemm_3.JPG",
    accent: "#f97316",
  },
  {
    id: "recreation",
    time: "05:30 PM",
    icon: <Dumbbell className="h-5 w-5" />,
    title: "Sports, Clubs & Recreation",
    desc: "Physical fitness, team sports, student clubs, cultural programmes and peer activities that build wellbeing and team spirit.",
    detail: "Facilities include sports courts, fitness zones, indoor games and multipurpose halls. Student clubs for technical competitions, cultural events and community service operate in this time. Participation is encouraged and tracked.",
    image: "/homepage/mine.jpg",
    accent: "#4eeac8",
  },
  {
    id: "placement",
    time: "07:00 PM",
    icon: <Target className="h-5 w-5" />,
    title: "Career Guidance & Placement Prep",
    desc: "Evening sessions focused on employment readiness: resume building, interview practice, document preparation and employer briefings.",
    detail: "Placement counsellors and industry experts guide trainees through job application processes, resume writing, mock interviews, trade test preparation and pre-departure briefings for outstation placements.",
    image: "/images/hemm_4.jpg",
    accent: "#38bdf8",
  },
];

const CampusDayTimeline: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stickyImageRef = useRef<HTMLDivElement>(null);

  // Desktop: update active on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.getAttribute("data-idx") || "0");
            setActiveIdx(idx);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const active = STAGES[activeIdx];

  return (
    <section id="daily-life" className="relative bg-[#050505] py-24 md:py-32 overflow-hidden">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 md:mb-20 max-w-3xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-3 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#4eeac8]"
          >
            Daily Campus Schedule
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]"
          >
            A Day in the Life of a Trainee
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-base text-zinc-400 max-w-2xl"
          >
            Every day on campus is structured for maximum skill development — from morning assembly to evening placement preparation.
          </motion.p>
        </div>

        {/* Desktop: sticky image panel + scrolling timeline */}
        <div className="hidden md:grid grid-cols-[1fr,420px] gap-16 relative">
          {/* Left: Timeline */}
          <div className="space-y-0">
            {STAGES.map((stage, i) => (
              <div
                key={stage.id}
                ref={(el) => { itemRefs.current[i] = el; }}
                data-idx={i}
                className={`relative flex gap-6 py-10 transition-all duration-300 cursor-pointer border-l-2 pl-8 ${
                  activeIdx === i ? "border-l-[#4eeac8]" : "border-l-white/10"
                }`}
                onClick={() => setActiveIdx(i)}
              >
                {/* Icon dot */}
                <div
                  className={`absolute -left-[11px] top-11 h-5 w-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    activeIdx === i
                      ? "border-[#4eeac8] bg-[#050505]"
                      : "border-white/20 bg-[#050505]"
                  }`}
                >
                  <div
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      activeIdx === i ? "bg-[#4eeac8]" : "bg-white/20"
                    }`}
                  />
                </div>

                <div className="flex-1">
                  {/* Time */}
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/35">
                    {stage.time}
                  </p>

                  {/* Icon + Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-white/10"
                      style={{ color: activeIdx === i ? stage.accent : "rgba(255,255,255,0.3)" }}
                    >
                      {stage.icon}
                    </div>
                    <h3
                      className={`text-lg font-semibold leading-tight transition-colors duration-200 ${
                        activeIdx === i ? "text-white" : "text-white/50"
                      }`}
                    >
                      {stage.title}
                    </h3>
                  </div>

                  <p
                    className={`text-sm leading-relaxed transition-all duration-300 ${
                      activeIdx === i ? "text-zinc-300 max-h-40" : "text-zinc-600 max-h-0 overflow-hidden"
                    }`}
                  >
                    {activeIdx === i ? stage.detail : ""}
                  </p>

                  {activeIdx !== i && (
                    <p className="text-sm text-zinc-600 line-clamp-2">{stage.desc}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Sticky visual */}
          <div ref={stickyImageRef} className="sticky top-28 h-fit">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.45 }}
                className="relative overflow-hidden rounded-[28px] border border-white/10 bg-zinc-900 shadow-[0_32px_80px_rgba(0,0,0,0.5)]"
              >
                <img
                  src={active.image}
                  alt={active.title}
                  className="w-full h-72 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="flex h-7 w-7 items-center justify-center rounded-md"
                      style={{ color: active.accent }}
                    >
                      {active.icon}
                    </div>
                    <p
                      className="text-[9px] font-semibold uppercase tracking-[0.28em]"
                      style={{ color: active.accent }}
                    >
                      {active.time}
                    </p>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">{active.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{active.desc}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress dots */}
            <div className="mt-4 flex justify-center gap-1.5">
              {STAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIdx === i ? "w-6 bg-[#4eeac8]" : "w-1.5 bg-white/20"
                  }`}
                  aria-label={`Go to stage ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: stacked cards */}
        <div className="md:hidden space-y-4">
          {STAGES.map((stage, i) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.04 }}
              className="overflow-hidden rounded-[20px] border border-white/10 bg-zinc-900/50"
            >
              <img src={stage.image} alt={stage.title} className="w-full h-44 object-cover" loading="lazy" />
              <div className="p-5">
                <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.28em] text-white/40">{stage.time}</p>
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-white/10"
                    style={{ color: stage.accent }}
                  >
                    {stage.icon}
                  </div>
                  <h3 className="text-base font-semibold text-white">{stage.title}</h3>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">{stage.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusDayTimeline;
