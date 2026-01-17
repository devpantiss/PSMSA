import React, { useState, useEffect, useMemo } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Award,
  Wrench,
  BookOpen,
  Zap,
  CheckCircle,
  GraduationCap,
  Target,
  TrendingUp,
  UserCheck,
  Globe,
} from "lucide-react";

interface TimelineEvent {
  id: number;
  title: string;
  description: string;
  date: string;
  duration: string;
  location: string;
  participants: string;
  category: "theory" | "practical" | "assessment" | "certification";
}

interface Program {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  timeline: TimelineEvent[];
}

/* ============================================================
   UPDATED PROGRAM DATA (Aligned with ProgrammeCategories)
   + Realistic timeline phases and hours
============================================================ */
const programs: Program[] = [
  {
    id: "diploma-polytechnic",
    name: "Diploma / Polytechnic",
    icon: <GraduationCap className="w-5 h-5" />,
    color: "from-green-500 to-green-500",
    description:
      "3-year AICTE-aligned diploma programmes with strong lab exposure, industrial training, and placement support for technician/supervisory roles.",
    timeline: [
      {
        id: 1,
        title: "Year 1: Engineering Fundamentals + Workshop Practice",
        description:
          "Build core technical foundations with applied mathematics, basic electrical/mechanical concepts, engineering drawing, and hands-on workshop skills (fitting, welding basics, wiring practice).",
        date: "Sem 1–2 (0–12 months)",
        duration: "900 hours",
        location: "Academic Block + Workshop",
        participants: "35–45 per batch",
        category: "theory",
      },
      {
        id: 2,
        title: "Year 2: Trade-Specific Labs + Mini Projects",
        description:
          "Specialization begins with domain labs (Electrical, Mechanical, Civil, Mining-related modules), instrumentation basics, safety practices, and mini projects to build real job readiness.",
        date: "Sem 3–4 (13–24 months)",
        duration: "1050 hours",
        location: "Department Labs",
        participants: "35–45 per batch",
        category: "practical",
      },
      {
        id: 3,
        title: "Industry Training / Internship (Mandatory)",
        description:
          "Structured on-site exposure with industry partners: maintenance practices, shift discipline, SOP adherence, safety compliance, and task logs under mentor supervision.",
        date: "8–12 weeks",
        duration: "320 hours",
        location: "Industry Partner Site",
        participants: "35–45 per batch",
        category: "practical",
      },
      {
        id: 4,
        title: "Final Year: Major Project + Viva + Internal Assessments",
        description:
          "Capstone project, practical exams, internal assessments, and viva voce aligned with state technical education board evaluation. Includes documentation and presentation skills.",
        date: "Sem 5–6 (25–36 months)",
        duration: "720 hours",
        location: "Project Lab + Evaluation Room",
        participants: "35–45 per batch",
        category: "assessment",
      },
      {
        id: 5,
        title: "Diploma Award + Placement Support",
        description:
          "Diploma issuance, career guidance, mock interviews, resume support, and campus placement drives for technician and junior engineer roles.",
        date: "Placement Season",
        duration: "60 hours",
        location: "Placement Cell",
        participants: "35–45 per batch",
        category: "certification",
      },
    ],
  },

  {
    id: "iti",
    name: "Industrial Training Institute (ITI)",
    icon: <CheckCircle className="w-5 h-5" />,
    color: "from-green-500 to-green-500",
    description:
      "NCVT/SCVT aligned ITI trade programmes with heavy practical training, employability modules, and certification through trade tests.",
    timeline: [
      {
        id: 1,
        title: "Safety Induction + Trade Orientation",
        description:
          "Mandatory safety induction (PPE, hazard reporting, emergency response), basic tool handling, workshop discipline, and introduction to the selected trade.",
        date: "Week 1–2",
        duration: "80 hours",
        location: "ITI Workshop + Safety Lab",
        participants: "25–30 per batch",
        category: "theory",
      },
      {
        id: 2,
        title: "Core Practical Training (Workshop Intensive)",
        description:
          "Hands-on training with industry-standard tools: wiring & panel practice, machine operations, fitting, alignment, measuring instruments, and trade-specific procedures.",
        date: "Month 1–8",
        duration: "900 hours",
        location: "Workshop Block",
        participants: "25–30 per batch",
        category: "practical",
      },
      {
        id: 3,
        title: "Employability Skills + Digital Literacy",
        description:
          "Communication, basic English, workplace ethics, productivity, teamwork, basic computer literacy, and job-readiness modules aligned with Skill India.",
        date: "Month 9–10",
        duration: "120 hours",
        location: "Smart Classroom",
        participants: "25–30 per batch",
        category: "theory",
      },
      {
        id: 4,
        title: "Trade Test + Internal Practical Evaluation",
        description:
          "Periodic trade tests, internal practical evaluation, job simulation tasks, and corrective training to ensure pass readiness.",
        date: "Month 11",
        duration: "80 hours",
        location: "Assessment Workshop",
        participants: "25–30 per batch",
        category: "assessment",
      },
      {
        id: 5,
        title: "Final Exam + National Trade Certificate (NTC)",
        description:
          "All India Trade Test (AITT) conducted under NCVT/SCVT guidelines. Successful candidates receive NTC and placement linkage support.",
        date: "Month 12",
        duration: "40 hours",
        location: "Exam Center",
        participants: "25–30 per batch",
        category: "certification",
      },
    ],
  },

  {
    id: "workmen-upskilling",
    name: "Workmen Upskilling & Reskilling Program",
    icon: <TrendingUp className="w-5 h-5" />,
    color: "from-green-500 to-green-500",
    description:
      "Short-term upskilling for existing workers to adapt to new equipment, SOPs, safety systems, and productivity improvements in core industries.",
    timeline: [
      {
        id: 1,
        title: "Baseline Skill Mapping + Safety Compliance Check",
        description:
          "Skill assessment against role standards (NSQF/industry SOP). Includes safety compliance review, medical fitness check (if required), and training plan finalization.",
        date: "Day 1–3",
        duration: "18 hours",
        location: "Skill Assessment Center",
        participants: "20–30 workers",
        category: "assessment",
      },
      {
        id: 2,
        title: "Technology & SOP Orientation",
        description:
          "Orientation on updated SOPs, preventive maintenance routines, quality checks, digital reporting tools, and productivity practices used on site.",
        date: "Week 1–2",
        duration: "36 hours",
        location: "Smart Classroom + Demo Area",
        participants: "20–30 workers",
        category: "theory",
      },
      {
        id: 3,
        title: "Hands-On Practical Training (On Equipment)",
        description:
          "Practical sessions on tools/machines used in real operations: inspection, troubleshooting basics, safe operating procedures, and supervised practice.",
        date: "Week 3–5",
        duration: "60 hours",
        location: "Workshop / Plant Simulation Lab",
        participants: "20–30 workers",
        category: "practical",
      },
      {
        id: 4,
        title: "Competency Evaluation + Skill Demonstration",
        description:
          "Practical demonstration + observation checklist evaluation. Candidates must meet safety, quality, and output benchmarks.",
        date: "Week 6",
        duration: "12 hours",
        location: "Assessment Bay",
        participants: "20–30 workers",
        category: "assessment",
      },
      {
        id: 5,
        title: "Certification + Deployment Recommendation",
        description:
          "Training completion certificate, skill gap closure report, and recommendation for deployment / role upgrade based on performance.",
        date: "Week 6",
        duration: "6 hours",
        location: "Training Office",
        participants: "20–30 workers",
        category: "certification",
      },
    ],
  },

  {
    id: "women-in-mining",
    name: "Women in Mining",
    icon: <Award className="w-5 h-5" />,
    color: "from-green-500 to-green-500",
    description:
      "Industry-ready training programme to support women participation in mining operations, safety, compliance, and technical job roles.",
    timeline: [
      {
        id: 1,
        title: "Program Induction + Workplace Readiness",
        description:
          "Orientation on mining workplace culture, discipline, shift systems, safety practices, PPE usage, and basic role expectations.",
        date: "Week 1",
        duration: "24 hours",
        location: "Training Center",
        participants: "20–25 trainees",
        category: "theory",
      },
      {
        id: 2,
        title: "Mining Safety + Compliance Training",
        description:
          "Hazard identification, risk assessment basics, emergency response, safe walkways, SOP adherence, and compliance awareness.",
        date: "Week 2–3",
        duration: "40 hours",
        location: "Safety Lab + Demo Zone",
        participants: "20–25 trainees",
        category: "theory",
      },
      {
        id: 3,
        title: "Practical Exposure (Simulators / Workshop)",
        description:
          "Hands-on sessions on industrial tools, basic equipment familiarization, role-based tasks (helpers/operations support), and supervised practice.",
        date: "Week 4–6",
        duration: "60 hours",
        location: "Simulator Lab + Workshop",
        participants: "20–25 trainees",
        category: "practical",
      },
      {
        id: 4,
        title: "Final Assessment + Job Readiness Evaluation",
        description:
          "Skill demonstration + safety compliance checklist + soft skills evaluation to ensure site readiness.",
        date: "Week 7",
        duration: "12 hours",
        location: "Assessment Center",
        participants: "20–25 trainees",
        category: "assessment",
      },
      {
        id: 5,
        title: "Certification + Placement Linkage",
        description:
          "Completion certification and placement linkage support with partner companies for suitable entry-level roles.",
        date: "Week 8",
        duration: "6 hours",
        location: "Placement Cell",
        participants: "20–25 trainees",
        category: "certification",
      },
    ],
  },

  {
    id: "operator-licensing",
    name: "Operator Licensing & Certification",
    icon: <Target className="w-5 h-5" />,
    color: "from-green-500 to-green-500",
    description:
      "Certification programme for equipment operators with simulator training, safe operations, practical evaluation, and compliance-based certification.",
    timeline: [
      {
        id: 1,
        title: "Eligibility Check + Medical + Documentation",
        description:
          "Verification of age/experience, document screening, basic medical fitness (as applicable), and orientation on training outcomes and evaluation criteria.",
        date: "Day 1–2",
        duration: "10 hours",
        location: "Admin + Medical Desk",
        participants: "15–20 operators",
        category: "assessment",
      },
      {
        id: 2,
        title: "Theory: Equipment Systems + Safety SOP",
        description:
          "Equipment fundamentals, control systems overview, safe operating procedures, load limits, hazard zones, and emergency shutdown protocols.",
        date: "Week 1",
        duration: "24 hours",
        location: "Smart Classroom",
        participants: "15–20 operators",
        category: "theory",
      },
      {
        id: 3,
        title: "Simulator Training + Practical Handling",
        description:
          "Simulator-based handling practice + supervised field-style exercises: maneuvering, load handling, safe reversing, slope handling, and standard task cycles.",
        date: "Week 2–4",
        duration: "72 hours",
        location: "Simulator Lab + Practice Yard",
        participants: "15–20 operators",
        category: "practical",
      },
      {
        id: 4,
        title: "Practical Trade Test + Compliance Evaluation",
        description:
          "Practical evaluation with checklist scoring: safety, accuracy, cycle discipline, hazard awareness, and equipment handling competence.",
        date: "Week 5",
        duration: "12 hours",
        location: "Assessment Yard",
        participants: "15–20 operators",
        category: "assessment",
      },
      {
        id: 5,
        title: "Certification Issuance + Licensing Support",
        description:
          "Issuance of operator certificate and support for employer onboarding / compliance documentation where applicable.",
        date: "Week 5",
        duration: "6 hours",
        location: "Certification Desk",
        participants: "15–20 operators",
        category: "certification",
      },
    ],
  },

  {
    id: "international-mobility",
    name: "International Mobility Program",
    icon: <Globe className="w-5 h-5" />,
    color: "from-green-500 to-green-500",
    description:
      "Global employability programme with technical upskilling, language training, cultural orientation, and international certification readiness.",
    timeline: [
      {
        id: 1,
        title: "Screening + Career Mapping + Document Readiness",
        description:
          "Candidate screening, role mapping (trade-wise), passport/document readiness guidance, and training pathway finalization for target countries.",
        date: "Week 1",
        duration: "18 hours",
        location: "International Desk",
        participants: "20–25 candidates",
        category: "assessment",
      },
      {
        id: 2,
        title: "Technical Training (Destination Role-Based)",
        description:
          "Skill training aligned to destination job roles: safety compliance, tools, procedures, quality standards, and productivity practices used internationally.",
        date: "Week 2–10",
        duration: "140 hours",
        location: "International Skill Lab",
        participants: "20–25 candidates",
        category: "practical",
      },
      {
        id: 3,
        title: "Language + Soft Skills + Workplace Etiquette",
        description:
          "English communication + basic destination language support (where required), workplace etiquette, team behavior, and interview readiness.",
        date: "Week 4–12 (parallel)",
        duration: "90 hours",
        location: "Language Lab",
        participants: "20–25 candidates",
        category: "theory",
      },
      {
        id: 4,
        title: "International Standard Assessment + Mock Interviews",
        description:
          "Competency test aligned to global standards + mock interviews + documentation review to prepare for employer selection.",
        date: "Week 13–14",
        duration: "20 hours",
        location: "Assessment Hub",
        participants: "20–25 candidates",
        category: "assessment",
      },
      {
        id: 5,
        title: "Certification + Placement / Mobilization Support",
        description:
          "Certification issuance, employer linkage support, and mobilization guidance including pre-departure orientation.",
        date: "Week 15–16",
        duration: "12 hours",
        location: "Placement + Mobilization Desk",
        participants: "20–25 candidates",
        category: "certification",
      },
    ],
  },
];

const categoryConfig = {
  theory: {
    icon: <BookOpen className="w-4 h-4" />,
    label: "Theory",
  },
  practical: {
    icon: <Wrench className="w-4 h-4" />,
    label: "Practical",
  },
  assessment: {
    icon: <UserCheck className="w-4 h-4" />,
    label: "Assessment",
  },
  certification: {
    icon: <Award className="w-4 h-4" />,
    label: "Certification",
  },
};

const useIntersectionObserver = (options = {}) => {
  const [visibleElements, setVisibleElements] = useState(new Set<string>());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-id");
          if (entry.isIntersecting && id) {
            setVisibleElements((prev) => new Set([...prev, id]));
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "80px",
        ...options,
      }
    );

    const elements = document.querySelectorAll('[data-animate="true"]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return visibleElements;
};

export default function ProgramTimeline() {
  const [activeTab, setActiveTab] = useState(programs[0].id);
  const visibleElements = useIntersectionObserver();

  const activeProgram = useMemo(
    () => programs.find((p) => p.id === activeTab),
    [activeTab]
  );

  const programStats = useMemo(() => {
    if (!activeProgram) return null;

    const totalHours = activeProgram.timeline.reduce((acc, event) => {
      const hours = parseInt(event.duration);
      return acc + (isNaN(hours) ? 0 : hours);
    }, 0);

    return { totalHours, phases: activeProgram.timeline.length };
  }, [activeProgram]);

  const handleTabChange = (programId: string) => setActiveTab(programId);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Premium Futuristic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-56 left-1/2 h-[820px] w-[820px] -translate-x-1/2 rounded-full blur-[220px] bg-purple-600/20" />
        <div className="absolute -bottom-72 right-[-220px] h-[760px] w-[760px] rounded-full blur-[240px] bg-green-500/14" />
        <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.95)_100%)]" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="px-6 pt-24 pb-14 text-center">
          <div className="max-w-5xl mx-auto">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/75 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              Program Structure • Phases • Certification
            </p>

            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
              Our <span className="text-green-500">Training</span>{" "}
              <span className="text-white">Timeline</span>
            </h1>

            <p className="mt-4 text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
              Realistic training journeys designed around industry SOPs, hands-on practice,
              assessments, and certification pathways.
            </p>
          </div>
        </header>

        {/* Program Selector */}
        <section className="px-6 mb-14">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {programs.map((program) => {
                const isActive = activeTab === program.id;

                return (
                  <button
                    key={program.id}
                    onClick={() => handleTabChange(program.id)}
                    className={[
                      "group relative flex items-start gap-4 rounded-2xl p-5 text-left transition-all duration-300",
                      "border backdrop-blur-xl",
                      isActive
                        ? "border-white/20 bg-gradient-to-r from-green-500/20 via-white/5 to-purple-600/20 shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_60px_rgba(34,197,94,0.12)]"
                        : "border-white/10 bg-white/5 hover:bg-white/8 hover:border-white/20",
                    ].join(" ")}
                  >
                    <div
                      className={[
                        "grid h-12 w-12 place-items-center rounded-2xl border border-white/10",
                        isActive ? "bg-black/40" : "bg-black/30",
                      ].join(" ")}
                    >
                      <span className={isActive ? "text-green-400" : "text-white/70"}>
                        {program.icon}
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="font-bold text-sm md:text-base text-white line-clamp-2">
                        {program.name}
                      </div>
                      <div className="text-xs md:text-sm mt-1 text-white/60 line-clamp-2">
                        {program.description}
                      </div>

                      {isActive && (
                        <div className="mt-3 h-[2px] w-20 rounded-full bg-gradient-to-r from-green-500 via-purple-600 to-transparent" />
                      )}
                    </div>

                    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-20" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Program Stats */}
        {programStats && (
          <section className="px-6 mb-16">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center">
                <div className="text-3xl font-black text-green-400">
                  {programStats.totalHours}
                </div>
                <div className="mt-1 text-white/70 text-sm">Total Training Hours</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center">
                <div className="text-3xl font-black text-purple-400">
                  {programStats.phases}
                </div>
                <div className="mt-1 text-white/70 text-sm">Program Phases</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center">
                <div className="text-3xl font-black text-green-400">
                  {activeProgram?.timeline?.[0]?.date || "—"}
                </div>
                <div className="mt-1 text-white/70 text-sm">Starts From</div>
              </div>
            </div>
          </section>
        )}

        {/* Timeline */}
        <section className="px-6 pb-20">
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-[3px] rounded-full bg-gradient-to-b from-purple-600 via-green-500 to-purple-600 opacity-80" />
              <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-[12px] blur-xl bg-gradient-to-b from-purple-600/40 via-green-500/30 to-purple-600/40 opacity-70" />

              <div className="space-y-16">
                {activeProgram?.timeline.map((event, index) => {
                  const isEven = index % 2 === 0;
                  const isVisible = visibleElements.has(event.id.toString());
                  const categoryInfo = categoryConfig[event.category];

                  const isPurple = index % 2 === 0;
                  const badgeBg = isPurple ? "bg-purple-600/90" : "bg-green-500/90";
                  const glow = isPurple
                    ? "shadow-[0_0_60px_rgba(147,51,234,0.20)]"
                    : "shadow-[0_0_60px_rgba(34,197,94,0.18)]";

                  return (
                    <div
                      key={event.id}
                      data-animate="true"
                      data-id={event.id}
                      className={`relative flex ${
                        isEven ? "justify-start" : "justify-end"
                      } items-center`}
                    >
                      <div
                        className={[
                          "relative w-full max-w-lg transition-all duration-700",
                          isVisible
                            ? "translate-x-0 opacity-100"
                            : isEven
                            ? "-translate-x-16 opacity-0"
                            : "translate-x-16 opacity-0",
                        ].join(" ")}
                      >
                        <div
                          className={[
                            "group relative overflow-hidden rounded-3xl border border-white/12",
                            "bg-white/5 backdrop-blur-xl p-8",
                            "transition-all duration-300 hover:scale-[1.02]",
                            glow,
                          ].join(" ")}
                        >
                          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-25" />
                          </div>

                          <div
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 ${badgeBg} text-white border border-white/15`}
                          >
                            {categoryInfo.icon}
                            {categoryInfo.label}
                          </div>

                          <h3 className="text-2xl font-bold text-white mb-3">
                            {event.title}
                          </h3>

                          <p className="text-white/70 leading-relaxed mb-6">
                            {event.description}
                          </p>

                          <div className="grid grid-cols-2 gap-4">
                            {[
                              {
                                label: "Timeline",
                                value: event.date,
                                icon: <Calendar className="w-4 h-4" />,
                              },
                              {
                                label: "Training Hours",
                                value: event.duration,
                                icon: <Clock className="w-4 h-4" />,
                              },
                              {
                                label: "Venue",
                                value: event.location,
                                icon: <MapPin className="w-4 h-4" />,
                              },
                              {
                                label: "Batch Size",
                                value: event.participants,
                                icon: <Users className="w-4 h-4" />,
                              },
                            ].map((x, i) => (
                              <div key={i} className="flex items-center gap-3">
                                <div
                                  className={[
                                    "p-2 rounded-xl border border-white/10 bg-black/30",
                                    isPurple
                                      ? "shadow-[0_0_30px_rgba(147,51,234,0.18)]"
                                      : "shadow-[0_0_30px_rgba(34,197,94,0.14)]",
                                  ].join(" ")}
                                >
                                  <span
                                    className={
                                      isPurple ? "text-purple-300" : "text-green-300"
                                    }
                                  >
                                    {x.icon}
                                  </span>
                                </div>
                                <div>
                                  <div className="text-xs text-white/50">{x.label}</div>
                                  <div className="text-sm font-semibold text-white">
                                    {x.value}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div
                          className={`absolute top-1/2 -translate-y-1/2 ${
                            isEven ? "-right-6" : "-left-6"
                          } w-12 h-12 rounded-full flex items-center justify-center z-20 border-4 border-black ${
                            isPurple ? "bg-purple-600" : "bg-green-500"
                          } shadow-xl`}
                        >
                          <span className="text-white">{categoryInfo.icon}</span>
                        </div>

                        <div
                          className={`absolute top-1/2 -translate-y-1/2 ${
                            isEven ? "-right-3" : "-left-3"
                          } w-6 h-[2px] ${isPurple ? "bg-purple-500" : "bg-green-400"}`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-center mt-20">
                <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 text-center shadow-[0_0_80px_rgba(34,197,94,0.12)]">
                  <div className="text-5xl mb-4">🎓</div>
                  <h3 className="text-2xl font-bold text-white">Program Complete</h3>
                  <p className="mt-2 text-white/65">
                    Ready for industry deployment, certification, and career growth.
                  </p>
                  <div className="mt-6 h-[2px] w-28 mx-auto rounded-full bg-gradient-to-r from-purple-600 via-green-500 to-transparent opacity-90" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-black to-purple-600" />
    </div>
  );
}
