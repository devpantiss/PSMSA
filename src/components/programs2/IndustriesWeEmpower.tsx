import { useState } from "react";
import { Download } from "lucide-react";

/* ===================== TYPES ===================== */

type Program = {
  id: string;
  name: string;
  description: string;
  duration: string;
  modules: string[];
  outcomes: string[];
  certification: string;
  pdfUrl: string;
  image: string;
};

/* ===================== DATA ===================== */

const PROGRAMS: Program[] = [
  {
    id: "diploma_polytechnic",
    name: "Diploma / Polytechnic Programs",
    description:
      "Structured diploma programmes designed to build strong technical foundations with extensive lab, workshop, and on-field exposure aligned to PSU and core industries.",
    duration: "2–3 Years",
    modules: [
      "Core engineering fundamentals",
      "Lab & workshop-based skill training",
      "Industrial safety & compliance",
      "AR/VR & simulator-based practice",
      "Industry projects & assessments",
    ],
    outcomes: [
      "Strong technical and practical foundation",
      "Job-ready diploma engineers",
      "Eligibility for PSU & private sector roles",
    ],
    certification: "State / AICTE Approved Diploma Certificate",
    pdfUrl: "/pdfs/Diploma-Polytechnic-Curriculum.pdf",
    image:
      "https://images.unsplash.com/photo-1581091215367-59ab6c1c9b66?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "iti",
    name: "Industrial Training Institute (ITI)",
    description:
      "NCVT/SCVT aligned trade programs focused on hands-on skill development for core industrial roles.",
    duration: "1–2 Years",
    modules: [
      "Trade-specific theory & practicals",
      "Hands-on workshop training",
      "Industrial tools & equipment handling",
      "Safety, quality & productivity practices",
    ],
    outcomes: [
      "Trade-level job readiness",
      "Eligibility for apprenticeships",
      "Industry-recognized trade competence",
    ],
    certification: "NCVT / SCVT Trade Certificate",
    pdfUrl: "/pdfs/ITI-Curriculum.pdf",
    image:
      "https://images.unsplash.com/photo-1581091870627-3a9c2c1a79f7?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "advanced_diploma",
    name: "Advanced Diploma Program",
    description:
      "High-skill advanced programs for supervisory, specialist, and high-responsibility technical roles.",
    duration: "12–18 Months",
    modules: [
      "Advanced domain specialization",
      "Supervisory & leadership skills",
      "Industrial process optimization",
      "Live industry projects",
    ],
    outcomes: [
      "Advanced technical expertise",
      "Readiness for supervisory roles",
      "Higher employability & salary potential",
    ],
    certification: "Advanced Diploma Certificate",
    pdfUrl: "/pdfs/Advanced-Diploma-Curriculum.pdf",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "industry_cert",
    name: "Industry Aligned Certification Programs",
    description:
      "Short-term certification programs co-designed with industry partners to meet immediate skill demand.",
    duration: "1–3 Months",
    modules: [
      "High-demand job role skills",
      "Hands-on industry practices",
      "Assessment & certification",
    ],
    outcomes: [
      "Rapid employability",
      "Industry-validated skills",
      "Direct hiring pipeline access",
    ],
    certification: "Industry Recognized Certificate",
    pdfUrl: "/pdfs/Industry-Aligned-Certification.pdf",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80",
  },
];

/* ===================== COMPONENT ===================== */

export default function ProgrammeSyllabusExplorer() {
  const [active, setActive] = useState(PROGRAMS[0].id);
  const activeProgram = PROGRAMS.find((p) => p.id === active)!;

  return (
    <section className="relative w-full bg-black text-white overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(168,85,247,0.25),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_85%,rgba(147,51,234,0.18),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* LEFT */}
          <div className="lg:col-span-6">
            <h2 className="text-[52px] leading-[1] font-light tracking-tight">
              PROGRAMMES
              <br />
              & CURRICULUM
            </h2>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
              Explore structured skilling programmes designed for industrial
              deployment, compliance and long-term career progression.
            </p>

            {/* Image */}
            <div className="relative mt-10 h-[380px] overflow-hidden">
              <img
                key={activeProgram.id}
                src={activeProgram.image}
                alt={activeProgram.name}
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-6">
            <div className="border-t border-white/20">
              {PROGRAMS.map((program) => {
                const isActive = program.id === active;

                return (
                  <div key={program.id} className="border-b border-white/20">
                    {/* Header */}
                    <button
                      onClick={() => setActive(program.id)}
                      className={[
                        "w-full flex items-center justify-between px-6 py-6 text-left",
                        "transition-colors duration-300",
                        isActive
                          ? "bg-purple-500/10"
                          : "hover:bg-white/5",
                      ].join(" ")}
                    >
                      <span className="text-base tracking-wide">
                        {program.name}
                      </span>
                      <span className="text-xl font-light">
                        {isActive ? "−" : "+"}
                      </span>
                    </button>

                    {/* Accordion Body */}
                    <div
                      className={[
                        "grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                        isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      ].join(" ")}
                    >
                      <div className="overflow-hidden px-6 pb-6">
                        <p className="text-sm text-white/65 leading-relaxed">
                          {program.description}
                        </p>

                        {/* Meta */}
                        <div className="mt-4 grid grid-cols-2 gap-6 text-xs tracking-widest text-white/70">
                          <div>
                            <p className="text-white/40">DURATION</p>
                            <p className="mt-1">{program.duration}</p>
                          </div>
                          <div>
                            <p className="text-white/40">CERTIFICATION</p>
                            <p className="mt-1">{program.certification}</p>
                          </div>
                        </div>

                        {/* Modules */}
                        <div className="mt-6">
                          <p className="text-xs tracking-widest text-white/50">
                            KEY MODULES
                          </p>
                          <ul className="mt-3 space-y-2 text-sm text-white/70">
                            {program.modules.map((m) => (
                              <li key={m}>• {m}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Outcomes */}
                        <div className="mt-6">
                          <p className="text-xs tracking-widest text-white/50">
                            LEARNING OUTCOMES
                          </p>
                          <ul className="mt-3 space-y-2 text-sm text-white/70">
                            {program.outcomes.map((o) => (
                              <li key={o}>• {o}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Download */}
                        <a
                          href={program.pdfUrl}
                          download
                          className="inline-flex items-center gap-3 mt-6 border border-white/20 px-6 py-3 text-xs tracking-widest text-white/85 hover:bg-white/5 transition"
                        >
                          DOWNLOAD SYLLABUS
                          <Download className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
