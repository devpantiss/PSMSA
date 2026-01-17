import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  FileText,
  BookOpen,
  Newspaper,
  ExternalLink,
  Download,
  Sparkles,
  Calendar,
  Tag,
  Layers,
  ArrowRight,
  ArrowLeft,
  User,
} from "lucide-react";

type KnowledgeType = "Report" | "Paper" | "Article" | "Case Study" | "Policy Brief";
type Sector = "Mining" | "Steel" | "Aluminium" | "Power" | "Hydrocarbons";
type Theme = "ESG" | "CSR" | "Safety" | "Skilling" | "Decarbonization";

type KnowledgeSection = {
  heading: string;
  content: string[];
};

type KnowledgeItem = {
  id: string;
  title: string;
  description: string;
  type: KnowledgeType;
  sector: Sector[];
  theme: Theme[];
  year: number;
  author: string;
  pages?: number;
  readingTime?: string;
  pdfUrl?: string;
  externalUrl?: string;
  coverImage?: string;
  featured?: boolean;

  // ✅ Details page content (dummy)
  reportIntro?: string;
  keyFindings?: string[];
  recommendations?: string[];
  sections?: KnowledgeSection[];
};

const ACCENT = "#9333ea"; // purple-600

const HERO_BG = "/Report_Hero_BG.jpg";

/* -------------------------------------------------------
   DATA (Dummy images + placeholder links + dummy details)
------------------------------------------------------- */
const KNOWLEDGE_ITEMS: KnowledgeItem[] = [
    {
      id: "k1",
      title: "ESG Readiness Framework for Mining Workforce Ecosystems",
      description:
        "A practical framework for implementing ESG-aligned skilling, safety systems, and workforce governance in mining regions.",
      type: "Report",
      sector: ["Mining"],
      theme: ["ESG", "Safety", "Skilling"],
      year: 2026,
      author: "Pantiss Research Unit",
      pages: 48,
      featured: true,
      coverImage:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80",
      pdfUrl: "#",
  
      reportIntro:
        "This report introduces an ESG readiness framework designed specifically for mining workforce ecosystems. It translates ESG principles into implementable actions for training institutions, CSR teams, contractors, and employers — focusing on safety culture, job readiness, compliance maturity, and long-term employability outcomes. The framework is built for real-world adoption across mining belts, with practical KPIs, implementation phases, and partner governance models.",
  
      keyFindings: [
        "Workforce ESG maturity improves significantly when training outcomes are tracked beyond certification (placement + retention + safety performance).",
        "Simulator-led modules reduce exposure to risk during early training phases while improving confidence and procedural discipline.",
        "Contractor-driven workforce ecosystems require stronger governance models and standardized training quality benchmarks.",
        "Skill programs become more sustainable when they align directly with local industry demand, mobility pathways, and apprenticeship conversion pipelines.",
      ],
  
      recommendations: [
        "Adopt blended training design: simulator drills + SOP assessments + real equipment exposure + supervised site induction.",
        "Create a unified workforce ESG dashboard to track training, placement conversion, safety compliance, and retention.",
        "Build structured apprenticeship bridges with employers to reduce drop-off between training and hiring.",
        "Strengthen community-level talent pipelines with inclusion goals (women participation, local youth mobility, equitable access).",
      ],
  
      sections: [
        {
          heading: "Executive Summary",
          content: [
            "Mining regions face a dual challenge: improving workforce readiness while meeting evolving ESG and safety compliance expectations.",
            "This report provides a step-by-step readiness framework to help institutions and employers build measurable training-to-employment systems.",
            "The approach emphasizes outcome-based skilling, operational safety culture, governance alignment, and long-term workforce mobility pathways.",
          ],
        },
        {
          heading: "Why ESG Readiness Matters in Mining Workforce Systems",
          content: [
            "ESG readiness is no longer limited to reporting — it directly impacts workforce productivity, safety incidents, contractor performance, and compliance risk.",
            "Training institutions play a critical role in creating job-ready talent with safety-first behavior, SOP discipline, and modern equipment familiarity.",
            "ESG-aligned training ensures that the workforce ecosystem supports responsible operations and sustainable community outcomes.",
          ],
        },
        {
          heading: "Framework Pillars (What to Build)",
          content: [
            "Pillar 1: Safety Culture & Compliance — SOP adherence, hazard identification, PPE discipline, emergency readiness drills.",
            "Pillar 2: Skills & Productivity — competency mapping, job-role aligned training modules, equipment handling readiness.",
            "Pillar 3: Inclusion & Community Impact — equitable participation, local hiring pipelines, social outcomes and mobility.",
            "Pillar 4: Governance, Data & Accountability — dashboards, audits, employer feedback loops, continuous improvement cycles.",
          ],
        },
        {
          heading: "Implementation Roadmap (How to Deploy)",
          content: [
            "Phase 1: Baseline maturity assessment and curriculum alignment with job roles + safety compliance.",
            "Phase 2: Lab strengthening through simulator integration, trainer upskilling, and SOP evaluation systems.",
            "Phase 3: Industry activation through apprenticeship pathways, employer matching, and onboarding support.",
            "Phase 4: Continuous monitoring with outcome tracking, audits, and performance reporting to stakeholders.",
          ],
        },
        {
          heading: "KPIs & Measurement (What to Track)",
          content: [
            "Placement conversion rate (training → interview → onboarding).",
            "Retention and progression rate (3-month, 6-month, 12-month).",
            "Safety compliance readiness (SOP score, hazard recognition, incident prevention awareness).",
            "Employer satisfaction index and role readiness scoring.",
          ],
        },
      ],
    },
  
    {
      id: "k2",
      title: "Decarbonization Pathways for Steel & Aluminium Skill Systems",
      description:
        "Insights on how training infrastructure can support low-carbon operations and new job roles across industrial value chains.",
      type: "Paper",
      sector: ["Steel", "Aluminium"],
      theme: ["Decarbonization", "ESG"],
      year: 2025,
      author: "Pantiss Knowledge Hub",
      readingTime: "9 min read",
      coverImage:
        "https://images.unsplash.com/photo-1581092160607-ee67d4f3d3f9?auto=format&fit=crop&w=1600&q=80",
      externalUrl: "#",
  
      reportIntro:
        "This paper explores how decarbonization is reshaping workforce requirements across steel and aluminium operations. It highlights the new skill clusters emerging in low-carbon production environments — including energy efficiency, process optimization, automation, instrumentation, and maintenance digitization. The paper also proposes how skill labs can modernize curriculum delivery to support future industrial transitions.",
  
      keyFindings: [
        "Decarbonization creates role shifts: operators increasingly require monitoring + analytics mindset alongside mechanical discipline.",
        "New job roles emerge around energy optimization, instrumentation, predictive maintenance, and process control systems.",
        "Skill labs need Industry 4.0 modules (sensors, dashboards, digital workflows) to align with plant reality.",
        "Training effectiveness improves when plants co-design curriculum and contribute live case-based problem scenarios.",
      ],
  
      recommendations: [
        "Introduce micro-credentials on energy efficiency, process monitoring, and instrumentation fundamentals.",
        "Add digital maintenance workflows (fault diagnosis, predictive maintenance basics, digital SOP execution).",
        "Implement plant immersion and mentorship programs to align training with real operational expectations.",
        "Map green role pathways to ensure trainees can transition into evolving industrial job families.",
      ],
  
      sections: [
        {
          heading: "Abstract",
          content: [
            "Industrial decarbonization is not only a technology transformation — it is a workforce capability transformation.",
            "This paper outlines how skill ecosystems can enable low-carbon operations through targeted curriculum modernization and role mapping.",
          ],
        },
        {
          heading: "Role Evolution in Steel & Aluminium",
          content: [
            "Maintenance teams now require familiarity with sensor-based monitoring, data-driven inspection, and digital reporting workflows.",
            "Operators increasingly work alongside automation systems, requiring improved process control understanding and safety decision-making.",
          ],
        },
        {
          heading: "Skill Lab Modernization Blueprint",
          content: [
            "Integrate digital dashboards and simulated process monitoring modules into training.",
            "Use real plant fault cases as training scenarios to improve problem-solving readiness.",
            "Build cross-functional training modules combining mechanical + electrical + safety competency blocks.",
          ],
        },
      ],
    },
  
    {
      id: "k3",
      title: "Safety-first Training Models: Simulators + Blended Labs",
      description:
        "How simulator-led training reduces risk exposure and improves job readiness for hazardous industrial roles.",
      type: "Article",
      sector: ["Mining", "Power"],
      theme: ["Safety", "Skilling"],
      year: 2025,
      author: "Pantiss Editorial Desk",
      readingTime: "6 min read",
      coverImage:
        "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1600&q=80",
      externalUrl: "#",
  
      reportIntro:
        "This article breaks down why simulator-first training is becoming the standard for hazardous industries. It explains how blended labs (simulators + physical equipment + SOP drills) create safer learning environments while improving real-world readiness. It also highlights how scenario-based training builds muscle memory, risk awareness, and decision-making discipline — before trainees enter active industrial sites.",
  
      keyFindings: [
        "Simulators enable repeatable practice without real-world exposure, reducing early-stage safety risks.",
        "Scenario-based drills improve emergency response behavior and SOP adherence under pressure.",
        "Blended learning increases confidence with tools, lockout-tagout, and hazard identification workflows.",
        "Training becomes more measurable when simulators track errors, response time, and decision quality.",
      ],
  
      recommendations: [
        "Begin with simulator-based SOP training before physical equipment exposure.",
        "Use structured checklists for safety behavior evaluation across batches.",
        "Introduce progressive difficulty: normal operations → minor faults → emergency scenarios.",
        "Track trainee performance trends to improve trainer coaching quality and outcomes.",
      ],
  
      sections: [
        {
          heading: "Why Simulators Matter in Safety Training",
          content: [
            "Simulators replicate hazardous conditions safely while allowing repetition and error correction.",
            "They standardize training quality and enable consistent evaluation for large batches of trainees.",
          ],
        },
        {
          heading: "Blended Lab Advantage",
          content: [
            "Physical labs build hands-on tool confidence and muscle memory.",
            "Simulators add scenario repetition, fault conditions, and emergency response drills — improving readiness dramatically.",
          ],
        },
        {
          heading: "What Premium Safety Training Looks Like",
          content: [
            "Clear SOP workflows, guided fault diagnosis, and role-based evaluation scoring.",
            "Progress tracking dashboards for both learners and trainers.",
          ],
        },
      ],
    },
  
    {
      id: "k4",
      title: "CSR & Employability: Building Sustainable Local Talent Pipelines",
      description:
        "A case-based approach to designing CSR-aligned skilling programs that convert into measurable placement outcomes.",
      type: "Case Study",
      sector: ["Mining", "Steel"],
      theme: ["CSR", "ESG", "Skilling"],
      year: 2024,
      author: "Pantiss Impact Cell",
      pages: 22,
      coverImage:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80",
      pdfUrl: "#",
  
      reportIntro:
        "This case study documents how a CSR-funded skilling program evolved into a sustainable employability pipeline. It highlights the operating model, curriculum structure, employer engagement strategy, and placement conversion process — showing how training can be designed to produce measurable hiring outcomes instead of only certification numbers.",
  
      keyFindings: [
        "Placement conversion improves when employer engagement begins during curriculum design (not after training ends).",
        "Local community alignment increases retention, attendance, and motivation for long-duration programs.",
        "Apprenticeship pathways reduce friction between training and employment conversion.",
        "Soft skills + workplace discipline training improves onboarding success in heavy industry roles.",
      ],
  
      recommendations: [
        "Co-design curriculum with employers and map it to job-role competency requirements.",
        "Introduce apprenticeships as a default bridge from training to employment.",
        "Track placement readiness using mock interviews, SOP scoring, and behavior assessments.",
        "Use outcome dashboards to report CSR impact transparently (jobs, retention, progression).",
      ],
  
      sections: [
        {
          heading: "Case Background",
          content: [
            "A CSR-led training initiative was launched to enable local employability in industrial belts.",
            "The program was redesigned from a certification-first approach into a placement-first model with measurable conversion outcomes.",
          ],
        },
        {
          heading: "What Changed (From Training to Employability)",
          content: [
            "Industry-aligned role mapping replaced generic curriculum design.",
            "Placement preparation was embedded from day one through discipline, SOP, and workplace readiness modules.",
            "Employer touchpoints were introduced early to build trust and faster hiring conversion.",
          ],
        },
        {
          heading: "Outcome Summary",
          content: [
            "Improved placement conversion, reduced drop-off, and increased employer satisfaction.",
            "Stronger community participation due to clear job pathway visibility.",
          ],
        },
      ],
    },
  
    {
      id: "k5",
      title: "Policy Brief: Just Transition & Industrial Workforce Mobility",
      description:
        "A brief on how institutions can enable future-proof mobility pathways for workers across industrial sectors.",
      type: "Policy Brief",
      sector: ["Mining", "Steel", "Aluminium"],
      theme: ["ESG", "CSR"],
      year: 2024,
      author: "Pantiss Policy Lab",
      pages: 12,
      coverImage:
        "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=1600&q=80",
      pdfUrl: "#",
  
      reportIntro:
        "This policy brief outlines a practical approach to enabling a just transition for industrial workforces. It focuses on mobility pathways, stackable credentials, and cross-sector role mapping — ensuring workers can move into emerging job roles as industrial operations evolve. It also highlights how training institutions can function as mobility hubs for reskilling, job matching, and transition support.",
  
      keyFindings: [
        "Workforce mobility pathways reduce unemployment risk during industrial transitions and technology upgrades.",
        "Stackable credentials enable faster job switching without requiring full re-training cycles.",
        "Cross-sector role mapping supports mining-to-manufacturing and steel-to-energy workforce mobility.",
        "Public-private placement pipelines improve stability for vulnerable workforce groups during transition phases.",
      ],
  
      recommendations: [
        "Introduce stackable credential systems for cross-sector mobility (mechanical, electrical, safety, digital basics).",
        "Build transition-ready placement pathways with employers across sectors.",
        "Strengthen recognition-of-prior-learning (RPL) systems to validate existing experience.",
        "Establish mobility hubs inside institutions to provide guidance, reskilling plans, and job matching support.",
      ],
  
      sections: [
        {
          heading: "Context",
          content: [
            "Industrial transitions require proactive workforce planning to avoid displacement and skill mismatch.",
            "Institutions can play a central role in stabilizing communities through structured mobility pathways.",
          ],
        },
        {
          heading: "Mobility Framework (How it Works)",
          content: [
            "Step 1: Skill assessment + RPL mapping",
            "Step 2: Micro-credential upskilling pathway",
            "Step 3: Employer matching + apprenticeship bridge",
            "Step 4: Placement + retention tracking",
          ],
        },
      ],
    },
  
    {
      id: "k6",
      title: "Digital Twin Adoption for Skill Labs: A Practical Guide",
      description:
        "A structured guide to implementing digital twin workflows for industrial training environments and performance tracking.",
      type: "Report",
      sector: ["Mining", "Steel"],
      theme: ["ESG", "Skilling"],
      year: 2026,
      author: "Pantiss Innovation Cell",
      pages: 36,
      coverImage:
        "https://images.unsplash.com/photo-1581091870622-3d1d7c02a6f5?auto=format&fit=crop&w=1600&q=80",
      pdfUrl: "#",
  
      reportIntro:
        "This guide explains how digital twin workflows can modernize skill labs by enabling simulation, performance monitoring, repeatable assessments, and training analytics. It provides a step-by-step adoption roadmap — from pilot deployment to full-scale integration — along with recommended dashboards, evaluation systems, and trainer enablement models.",
  
      keyFindings: [
        "Digital twins improve repeatability and standardization of skill evaluation across batches.",
        "Performance tracking becomes measurable through data capture (errors, response time, process adherence).",
        "Trainer coaching quality improves with analytics-based feedback loops.",
        "Pilot-first implementation reduces cost and improves adoption success.",
      ],
  
      recommendations: [
        "Start with a single lab pilot (mechanical/electrical/simulator) before scaling across departments.",
        "Define KPI dashboards for learner readiness and trainer performance.",
        "Use simulation-driven evaluation to reduce bias and improve consistency.",
        "Integrate industry feedback loops for continuous curriculum improvement.",
      ],
  
      sections: [
        {
          heading: "What is a Digital Twin in Training?",
          content: [
            "A digital twin is a virtual representation of a physical system that can simulate, monitor, and evaluate real workflows.",
            "In skill labs, digital twins can support guided training, scenario practice, and performance benchmarking.",
          ],
        },
        {
          heading: "Implementation Roadmap",
          content: [
            "Pilot → Validate → Scale → Optimize",
            "Build dashboards for attendance, skill scoring, readiness progression, and placement conversion alignment.",
          ],
        },
      ],
    },
  
    {
      id: "k7",
      title: "Women in Trades: Enabling Inclusion in Heavy Industry Roles",
      description:
        "A research-backed approach to designing inclusive skilling ecosystems for mining and manufacturing job roles.",
      type: "Paper",
      sector: ["Mining", "Aluminium"],
      theme: ["CSR", "ESG"],
      year: 2025,
      author: "Pantiss Social Impact Research",
      readingTime: "10 min read",
      coverImage:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80",
      externalUrl: "#",
  
      reportIntro:
        "This paper presents a research-backed inclusion model for enabling women in heavy industry roles. It highlights key ecosystem enablers such as infrastructure readiness, safe learning environments, mentorship pathways, employer alignment, and workplace integration support. The paper also outlines measurable inclusion outcomes for institutions and CSR programs.",
  
      keyFindings: [
        "Inclusion increases workforce stability and improves community outcomes over long-term training cycles.",
        "Participation improves when labs are designed for safety, confidence, and supportive mentoring systems.",
        "Employer buy-in is essential for sustainable inclusion outcomes beyond training completion.",
        "Visibility of career pathways significantly improves enrollment and retention.",
      ],
  
      recommendations: [
        "Design inclusive lab infrastructure (safe spaces, equipment access, mentorship support).",
        "Build women-led mentorship pathways and role-model visibility programs.",
        "Strengthen employer commitments for inclusive hiring and onboarding support.",
        "Track inclusion KPIs: enrollment, completion, placement conversion, retention, progression.",
      ],
  
      sections: [
        {
          heading: "Inclusion in Workforce Systems",
          content: [
            "Inclusive skilling requires more than enrollment — it needs infrastructure, mentoring, and employer support.",
            "Workplace readiness must include safety confidence, operational discipline, and real-world exposure planning.",
          ],
        },
        {
          heading: "Measuring Inclusion Outcomes",
          content: [
            "Enrollment → Completion → Placement → Retention → Progression",
            "Institutions should track inclusion outcomes with dashboards and partner reporting.",
          ],
        },
      ],
    },
  
    {
      id: "k8",
      title: "Industrial Safety SOPs for Entry-Level Workforce Readiness",
      description:
        "A simplified SOP reference designed for trainees entering hazardous work environments with PPE and safety protocols.",
      type: "Article",
      sector: ["Mining", "Hydrocarbons"],
      theme: ["Safety"],
      year: 2024,
      author: "Pantiss Safety Desk",
      readingTime: "5 min read",
      coverImage:
        "https://images.unsplash.com/photo-1581092919535-7146fbd64c5f?auto=format&fit=crop&w=1600&q=80",
      externalUrl: "#",
  
      reportIntro:
        "This article provides a simplified SOP-based readiness guide for trainees entering hazardous work environments. It focuses on the most common safety mistakes at entry level and provides clear behavior checklists for PPE, lockout-tagout, hazard identification, reporting discipline, and safe work distance protocols.",
  
      keyFindings: [
        "SOP adherence reduces incidents and improves team reliability in high-risk environments.",
        "PPE training is essential but must be reinforced through behavior drills, not only classroom instruction.",
        "Near-miss reporting culture improves safety maturity faster than punishment-based systems.",
        "Checklist-based training improves consistency across large trainee batches.",
      ],
  
      recommendations: [
        "Run SOP drills in simulated conditions before real equipment exposure.",
        "Use checklist-based evaluation for consistent scoring and feedback.",
        "Train trainees to report hazards and near-misses proactively.",
        "Introduce scenario-based safety quizzes and fault-identification practice.",
      ],
  
      sections: [
        {
          heading: "Core SOP Checklist",
          content: [
            "Wear PPE correctly and verify condition before entering work zones.",
            "Follow lockout-tagout and hazard identification protocols before maintenance work.",
            "Maintain safe work distance, communicate clearly, and avoid blind spots in heavy equipment areas.",
            "Report near-misses, unsafe conditions, and tool defects immediately.",
          ],
        },
        {
          heading: "Common Entry-Level Safety Mistakes",
          content: [
            "Skipping PPE checks, ignoring signage, and entering restricted zones.",
            "Not understanding stored energy hazards and lockout-tagout discipline.",
            "Poor communication near moving machinery and vehicles.",
          ],
        },
      ],
    },
  ];
  

const TYPES: (KnowledgeType | "All")[] = [
  "All",
  "Report",
  "Paper",
  "Article",
  "Case Study",
  "Policy Brief",
];

const SECTORS: (Sector | "All")[] = ["All", "Mining", "Steel", "Aluminium", "Power", "Hydrocarbons"];

const THEMES: (Theme | "All")[] = ["All", "ESG", "CSR", "Safety", "Skilling", "Decarbonization"];

function typeIcon(t: KnowledgeType) {
  switch (t) {
    case "Report":
      return <FileText className="h-4 w-4" />;
    case "Paper":
      return <BookOpen className="h-4 w-4" />;
    case "Article":
      return <Newspaper className="h-4 w-4" />;
    case "Case Study":
      return <Layers className="h-4 w-4" />;
    case "Policy Brief":
      return <Tag className="h-4 w-4" />;
    default:
      return <FileText className="h-4 w-4" />;
  }
}

export default function ResearchESGKnowledgeHub() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<KnowledgeType | "All">("All");
  const [sector, setSector] = useState<Sector | "All">("All");
  const [theme, setTheme] = useState<Theme | "All">("All");
  const [year, setYear] = useState<number | "All">("All");

  // ✅ NEW: details view state
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeItem = useMemo(
    () => KNOWLEDGE_ITEMS.find((x) => x.id === activeId) || null,
    [activeId]
  );

  const years = useMemo(() => {
    const ys = Array.from(new Set(KNOWLEDGE_ITEMS.map((x) => x.year))).sort((a, b) => b - a);
    return ["All", ...ys] as const;
  }, []);

  const featured = useMemo(
    () => KNOWLEDGE_ITEMS.find((x) => x.featured) ?? KNOWLEDGE_ITEMS[0],
    []
  );

  const filtered = useMemo(() => {
    return KNOWLEDGE_ITEMS.filter((item) => {
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.author.toLowerCase().includes(q);

      const matchesType = type === "All" ? true : item.type === type;
      const matchesSector = sector === "All" ? true : item.sector.includes(sector);
      const matchesTheme = theme === "All" ? true : item.theme.includes(theme);
      const matchesYear = year === "All" ? true : item.year === year;

      return matchesQuery && matchesType && matchesSector && matchesTheme && matchesYear;
    });
  }, [query, type, sector, theme, year]);

  /* =========================================================
     DETAILS VIEW (Hero hidden here)
  ========================================================= */
  if (activeItem) {
    const link = activeItem.externalUrl || activeItem.pdfUrl || "#";

    return (
      <section className="relative w-full overflow-hidden bg-black text-white mt-28">
        {/* Background (no hero) */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute -top-56 left-1/2 h-[820px] w-[820px] -translate-x-1/2 rounded-full blur-[220px]"
            style={{ backgroundColor: `${ACCENT}18` }}
          />
          <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(147,51,234,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.22)_1px,transparent_1px)] [background-size:72px_72px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.95)_100%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-14">
          {/* Top actions */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <button
              onClick={() => setActiveId(null)}
              className="inline-flex w-fit items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-xl transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Knowledge Hub
            </button>

            <div className="flex flex-wrap gap-3">
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-[1.02]"
              >
                Open <ExternalLink className="h-4 w-4" />
              </a>

              {activeItem.pdfUrl && (
                <a
                  href={activeItem.pdfUrl}
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/80 backdrop-blur-xl transition hover:text-white"
                >
                  Download <Download className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="mt-8 grid gap-6 lg:grid-cols-12">
            {/* LEFT */}
            <div className="lg:col-span-7 space-y-6">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/75">
                    <span style={{ color: ACCENT }}>{typeIcon(activeItem.type)}</span>
                    {activeItem.type}
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/65">
                    <Calendar className="h-4 w-4" style={{ color: ACCENT }} />
                    {activeItem.year}
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/65">
                    <User className="h-4 w-4" style={{ color: ACCENT }} />
                    {activeItem.author}
                  </span>
                </div>

                <h1 className="mt-4 text-2xl font-extrabold leading-tight md:text-4xl">
                  {activeItem.title}
                </h1>

                <p className="mt-4 text-white/70 leading-relaxed">
                  {activeItem.reportIntro || activeItem.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {activeItem.theme.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {activeItem.sector.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs text-white/70"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sections */}
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h2 className="text-lg font-semibold text-white">Detailed Report</h2>

                <div className="mt-6 space-y-10">
                  {(activeItem.sections || []).map((sec, idx) => (
                    <div key={idx}>
                      <h3 className="text-base font-semibold text-white">{sec.heading}</h3>
                      <div className="mt-3 space-y-3 text-sm text-white/70 leading-relaxed">
                        {sec.content.map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-5 space-y-6">
              {/* Cover */}
              <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="relative h-[220px] bg-black/50">
                  {activeItem.coverImage && (
                    <img
                      src={activeItem.coverImage}
                      alt={activeItem.title}
                      className="h-full w-full object-cover opacity-90"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-sm font-semibold text-white/90">Quick Snapshot</h3>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                      <p className="text-xs text-white/55">Length</p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        {activeItem.pages ? `${activeItem.pages} pages` : activeItem.readingTime || "—"}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                      <p className="text-xs text-white/55">Format</p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        {activeItem.pdfUrl ? "PDF / Download" : "Web / External"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Findings */}
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-sm font-semibold text-white/90">Key Findings</h3>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  {(activeItem.keyFindings || []).map((k, i) => (
                    <li key={i} className="flex gap-2">
                      <span
                        className="mt-2 h-2 w-2 rounded-full"
                        style={{ backgroundColor: ACCENT }}
                      />
                      <span>{k}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommendations */}
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-sm font-semibold text-white/90">
                  Recommended Actions
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  {(activeItem.recommendations || []).map((k, i) => (
                    <li key={i} className="flex gap-2">
                      <span
                        className="mt-2 h-2 w-2 rounded-full"
                        style={{ backgroundColor: ACCENT }}
                      />
                      <span>{k}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Glow frame */}
              <div className="pointer-events-none">
                <div
                  className="rounded-[28px]"
                  style={{
                    boxShadow: `0 0 0 1px rgba(255,255,255,0.06), 0 0 120px ${ACCENT}14`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* =========================================================
     MAIN HUB VIEW (your exact layout intact)
  ========================================================= */
  return (
    <section className="relative w-full overflow-hidden bg-black text-white">
      {/* ===== HERO (Fixed Parallax Background) ===== */}
      <div className="relative overflow-hidden mt-28">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: `url('${HERO_BG}')` }}
        />

        {/* overlay system */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/15" />

        {/* purple sci-fi glow */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute -top-56 left-1/2 h-[820px] w-[820px] -translate-x-1/2 rounded-full blur-[220px]"
            style={{ backgroundColor: `${ACCENT}22` }}
          />
          <div
            className="absolute -bottom-72 right-[-220px] h-[760px] w-[760px] rounded-full blur-[240px]"
            style={{ backgroundColor: `${ACCENT}18` }}
          />

          {/* futuristic grid */}
          <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(147,51,234,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.25)_1px,transparent_1px)] [background-size:72px_72px]" />
          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:18px_18px]" />

          {/* vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.95)_100%)]" />
        </div>

        {/* hero content */}
        <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left hero */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7"
            >
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75 backdrop-blur-xl">
                <span
                  className="h-2 w-2 rounded-full animate-pulse"
                  style={{ backgroundColor: ACCENT }}
                />
                Research • ESG • Knowledge Hub
              </p>

              <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                Research that drives{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${ACCENT}, rgba(147,51,234,0.55))`,
                  }}
                >
                  measurable impact
                </span>
                .
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
                Discover reports, papers, policy briefs, and articles across Mines, Steel &
                Aluminium — aligned with ESG, safety, skilling, and future-ready workforce
                transformation.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["ESG", "CSR", "Safety", "Skilling", "Decarbonization"].map((x) => (
                  <span
                    key={x}
                    className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs text-white/70 backdrop-blur-xl"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right featured */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="lg:col-span-5"
            >
              <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="relative h-[240px] w-full bg-black/40">
                  {featured?.coverImage && (
                    <img
                      src={featured.coverImage}
                      alt={featured.title}
                      className="h-full w-full object-cover opacity-90"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs text-white/75 backdrop-blur-xl">
                    <Sparkles className="h-4 w-4" style={{ color: ACCENT }} />
                    Featured
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-xs text-white/55">{featured.type}</p>
                      <h3 className="mt-1 line-clamp-2 text-lg font-semibold text-white">
                        {featured.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm text-white/65">
                        {featured.description}
                      </p>
                    </div>

                    <div
                      className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-black/40"
                      style={{ boxShadow: `0 0 40px ${ACCENT}22` }}
                    >
                      {typeIcon(featured.type)}
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-white/55">
                    <span className="inline-flex items-center gap-2">
                      <Calendar className="h-4 w-4" style={{ color: ACCENT }} />
                      {featured.year}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Tag className="h-4 w-4" style={{ color: ACCENT }} />
                      {featured.theme.join(" • ")}
                    </span>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {featured.pdfUrl && (
                      <a
                        href={featured.pdfUrl}
                        className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
                      >
                        Download <Download className="h-4 w-4" />
                      </a>
                    )}

                    {(featured.externalUrl || featured.pdfUrl) && (
                      <a
                        href={featured.externalUrl || featured.pdfUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/80 backdrop-blur-xl transition hover:text-white"
                      >
                        Open <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0">
                  <div
                    className="absolute inset-0"
                    style={{
                      boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.08), 0 0 120px ${ACCENT}16`,
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ===== FILTER BAR ===== */}
      <div className="relative mx-auto max-w-7xl px-6 -mt-10 pb-10">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-4 py-3">
              <Search className="h-4 w-4 text-white/60" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search reports, papers, authors..."
                className="w-full bg-transparent text-sm text-white placeholder:text-white/45 outline-none"
              />
            </div>

            <div className="grid w-full gap-3 md:grid-cols-2 lg:grid-cols-4">
              <select
                value={type}
                onChange={(e) => setType(e.target.value as any)}
                className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white/80 outline-none"
              >
                {TYPES.map((t) => (
                  <option key={t} value={t} className="bg-black">
                    {t}
                  </option>
                ))}
              </select>

              <select
                value={sector}
                onChange={(e) => setSector(e.target.value as any)}
                className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white/80 outline-none"
              >
                {SECTORS.map((s) => (
                  <option key={s} value={s} className="bg-black">
                    {s}
                  </option>
                ))}
              </select>

              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value as any)}
                className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white/80 outline-none"
              >
                {THEMES.map((t) => (
                  <option key={t} value={t} className="bg-black">
                    {t}
                  </option>
                ))}
              </select>

              <select
                value={year}
                onChange={(e) =>
                  setYear(e.target.value === "All" ? "All" : Number(e.target.value))
                }
                className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white/80 outline-none"
              >
                {years.map((y) => (
                  <option key={String(y)} value={String(y)} className="bg-black">
                    {y}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-white/55">
            <div className="inline-flex items-center gap-2">
              <Filter className="h-4 w-4" style={{ color: ACCENT }} />
              Showing{" "}
              <span className="font-semibold text-white">{filtered.length}</span> results
            </div>

            <button
              onClick={() => {
                setQuery("");
                setType("All");
                setSector("All");
                setTheme("All");
                setYear("All");
              }}
              className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs text-white/70 transition hover:text-white"
            >
              Reset filters
            </button>
          </div>
        </div>
      </div>

      {/* ===== GRID ===== */}
      <div className="relative mx-auto max-w-7xl px-6 pb-20">
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-[28px] border border-white/10 bg-white/5 p-8 text-center text-white/70 backdrop-blur-xl"
            >
              No results found. Try adjusting filters.
            </motion.div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filtered.map((item, idx) => {
                return (
                  <motion.article
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.45, delay: idx * 0.03 }}
                    className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl"
                  >
                    <div className="relative h-[170px] w-full bg-black/50">
                      {item.coverImage && (
                        <img
                          src={item.coverImage}
                          alt={item.title}
                          className="h-full w-full object-cover opacity-90"
                          loading="lazy"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                      <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs text-white/75 backdrop-blur-xl">
                        <span style={{ color: ACCENT }}>{typeIcon(item.type)}</span>
                        {item.type}
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="text-base font-semibold text-white line-clamp-2">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm text-white/65 line-clamp-3">
                        {item.description}
                      </p>

                      <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-white/55">
                        <span className="inline-flex items-center gap-2">
                          <Calendar className="h-4 w-4" style={{ color: ACCENT }} />
                          {item.year}
                        </span>
                        <span className="inline-flex items-center gap-2">
                          <Tag className="h-4 w-4" style={{ color: ACCENT }} />
                          {item.theme.slice(0, 2).join(" • ")}
                          {item.theme.length > 2 ? " +" : ""}
                        </span>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.sector.slice(0, 3).map((s) => (
                          <span
                            key={s}
                            className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] text-white/70"
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                      <div className="mt-5 flex items-center justify-between gap-3">
                        <p className="text-xs text-white/45">
                          {item.pages ? `${item.pages} pages` : item.readingTime || "—"}
                        </p>

                        {/* ✅ UPDATED: View opens Details View */}
                        <button
                          onClick={() => {
                            setActiveId(item.id);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                          className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-black/40 px-4 py-2 text-xs font-semibold text-white/80 transition hover:text-white"
                        >
                          View <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    {/* premium hover sweep */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                      <div
                        className="absolute -left-24 -top-24 h-56 w-56 rounded-full blur-[90px]"
                        style={{ backgroundColor: `${ACCENT}18` }}
                      />
                      <div
                        className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full blur-[100px]"
                        style={{ backgroundColor: `${ACCENT}14` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/6 to-white/0 opacity-20" />
                    </div>

                    <div className="pointer-events-none absolute inset-0">
                      <div
                        className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                        style={{
                          boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.10), 0 0 80px ${ACCENT}14`,
                        }}
                      />
                    </div>
                  </motion.article>
                );
              })}
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}