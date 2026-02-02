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
      "Comprehensive diploma programmes designed to build strong technical foundations with extensive lab, workshop, and on-field exposure aligned to core industries and PSU requirements.",
    duration: "2–3 Years",
    modules: [
      "Core engineering fundamentals",
      "Workshop & laboratory-based training",
      "Industrial safety & statutory compliance",
      "AR/VR & simulator-based practical exposure",
      "Industry projects & skill assessments",
    ],
    outcomes: [
      "Strong technical and practical foundation",
      "Industry-ready diploma engineers",
      "Eligibility for PSU and private sector roles",
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
      "NCVT/SCVT-aligned trade programmes focused on hands-on skill development for high-demand industrial and technical roles.",
    duration: "1–2 Years",
    modules: [
      "Trade-specific theory and practicals",
      "Hands-on workshop training",
      "Industrial tools & equipment handling",
      "Safety, quality and productivity practices",
    ],
    outcomes: [
      "Trade-level job readiness",
      "Eligibility for apprenticeships",
      "Industry-recognised technical competence",
    ],
    certification: "NCVT / SCVT Trade Certificate",
    pdfUrl: "/pdfs/ITI-Curriculum.pdf",
    image:
      "https://images.unsplash.com/photo-1581091870627-3a9c2c1a79f7?auto=format&fit=crop&w=1600&q=80",
  },

  {
    id: "upskilling_reskilling",
    name: "Workmen Upskilling & Reskilling Programs",
    description:
      "Short-duration programs designed to upgrade existing workforce skills and enable transition to new technologies, machinery, and operational roles.",
    duration: "1–6 Months",
    modules: [
      "Skill gap assessment & role mapping",
      "Advanced machinery and tools training",
      "Modern industrial processes",
      "Productivity, safety & quality enhancement",
    ],
    outcomes: [
      "Improved workforce productivity",
      "Multi-skilling capability",
      "Career transition readiness",
    ],
    certification: "Industry Aligned Skill Upgrade Certificate",
    pdfUrl: "/pdfs/Upskilling-Reskilling.pdf",
    image:
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df47?auto=format&fit=crop&w=1600&q=80",
  },

  {
    id: "women_in_mining",
    name: "Women in Mining Program",
    description:
      "Targeted skilling initiatives designed to enable women’s participation in mining and heavy industry roles through safety-first, certified training pathways.",
    duration: "8–12 Weeks",
    modules: [
      "Mining operations fundamentals",
      "Safety systems & statutory compliance",
      "Equipment handling & plant operations",
      "Workplace readiness & confidence building",
    ],
    outcomes: [
      "Certified entry into mining roles",
      "Improved gender diversity in workforce",
      "Safe and compliant deployment readiness",
    ],
    certification: "Industry Certified Mining Program",
    pdfUrl: "/pdfs/Women-in-Mining-Curriculum.pdf",
    image:
      "https://images.unsplash.com/photo-1542339147-17b88b5f7a9f?auto=format&fit=crop&w=1600&q=80",
  },

  {
    id: "operator_licensing",
    name: "Operator Licensing Program",
    description:
      "Formal licensing and certification programs designed to enhance safety compliance and employability of heavy equipment and plant operators.",
    duration: "6–12 Weeks",
    modules: [
      "Equipment-specific operational training",
      "Simulator & on-ground practicals",
      "Safety standards & statutory norms",
      "Operator assessment & certification",
    ],
    outcomes: [
      "Licensed and certified operators",
      "Improved operational safety",
      "Higher employability across sites",
    ],
    certification: "Government / OEM Certified Operator License",
    pdfUrl: "/pdfs/Operator-Licensing-Curriculum.pdf",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
  },

  {
    id: "international_mobility",
    name: "International Mobility Program",
    description:
      "Global workforce programs preparing candidates for overseas employment in mining, energy, infrastructure and allied sectors.",
    duration: "3–9 Months",
    modules: [
      "International skill standards",
      "Language & cultural orientation",
      "Global safety & compliance norms",
      "Trade testing & overseas deployment prep",
    ],
    outcomes: [
      "International job readiness",
      "Global certification alignment",
      "Overseas placement opportunities",
    ],
    certification: "International Skill Certification",
    pdfUrl: "/pdfs/International-Mobility.pdf",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80",
  },
];

/* ===================== COMPONENT ===================== */

export default function ProgrammeSyllabusExplorer() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeProgram = PROGRAMS.find((p) => p.id === activeId);

  const handleToggle = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative w-full bg-black text-white overflow-hidden">
      {/* ===== Ambient Background ===== */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_15%,rgba(168,85,247,0.22),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_85%,rgba(147,51,234,0.16),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* ===================== LEFT ===================== */}
          <div className="lg:col-span-5">
            <h2 className="text-[48px] leading-[1.05] font-light tracking-tight">
              PROGRAMMES
              <br />& CURRICULUM
            </h2>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
              Explore structured skilling programmes designed for industrial
              deployment, compliance and long-term career progression.
            </p>

            {/* Image */}
            <div className="relative mt-12 h-[340px] overflow-hidden rounded-sm">
              {activeProgram ? (
                <img
                  key={activeProgram.id}
                  src={activeProgram.image}
                  alt={activeProgram.name}
                  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0" />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
            </div>
          </div>

          {/* ===================== RIGHT ===================== */}
          <div className="lg:col-span-7">
            <div className="border-t border-white/15">
              {PROGRAMS.map((program) => {
                const isActive = program.id === activeId;

                return (
                  <div key={program.id} className="border-b border-white/15">
                    {/* Header */}
                    <button
                      onClick={() => handleToggle(program.id)}
                      className={[
                        "w-full flex items-center justify-between px-6 py-7 text-left",
                        "transition-colors duration-300",
                        isActive ? "bg-purple-500/10" : "hover:bg-white/5",
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
                      <div className="overflow-hidden px-6 pb-8">
                        <p className="text-sm text-white/65 leading-relaxed max-w-xl">
                          {program.description}
                        </p>

                        {/* Meta */}
                        <div className="mt-5 grid grid-cols-2 gap-8 text-xs tracking-widest text-white/70">
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
                        <div className="mt-7">
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
                        <div className="mt-7">
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
                          className="inline-flex items-center gap-3 mt-7 border border-white/20 px-6 py-3 text-xs tracking-widest text-white/85 hover:bg-white/5 transition"
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
