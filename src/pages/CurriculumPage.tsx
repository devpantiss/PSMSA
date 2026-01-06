import React from "react";
import { motion } from "framer-motion";
import { Clock, Award, Download } from "lucide-react";

// -------------------------- Types -------------------------
type Program = {
  id: string;
  name: string;
  description: string;
  duration: string;
  modules: string[];
  outcomes: string[];
  certification: string;
  pdfUrl: string;
};

// -------------------------- Reusable Components -------------------------
interface SectionTitleProps {
  title: string;
  subtitle?: string;
}
const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => (
  <div className="mb-10 text-center md:text-left">
    <h2 className="text-3xl md:text-4xl font-extrabold bg-green-500 bg-clip-text text-transparent">
      {title}
    </h2>
    {subtitle && <p className="text-gray-300 mt-2 text-lg">{subtitle}</p>}
  </div>
);

interface ProgramCardProps {
  program: Program;
}
const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = program.pdfUrl;
    link.download = `${program.name}-Curriculum.pdf`;
    link.click();
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 250 }}
      className="relative p-[1px] rounded-2xl bg-gradient-to-br from-purple-600/40 to-green-400/40 hover:from-purple-500 hover:to-green-300 transition-all duration-300"
    >
      <div className="bg-black/80 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-between h-full shadow-lg hover:shadow-2xl transition-all">
        {/* Header */}
        <div>
          <h3 className="text-2xl font-semibold text-green-400 mb-2">
            {program.name}
          </h3>
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            {program.description}
          </p>

          {/* Duration */}
          <div className="flex items-center gap-2 text-purple-400 font-medium mb-3">
            <Clock size={16} />
            <span className="text-sm">{program.duration}</span>
          </div>

          {/* Modules */}
          <div className="mb-4">
            <h4 className="text-white font-semibold text-sm mb-1 uppercase tracking-wide">
              Modules
            </h4>
            <ul className="text-gray-300 text-sm list-disc list-inside space-y-1 pl-2">
              {program.modules.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>

          {/* Outcomes */}
          <div className="mb-4">
            <h4 className="text-white font-semibold text-sm mb-1 uppercase tracking-wide">
              Learning Outcomes
            </h4>
            <ul className="text-gray-300 text-sm list-disc list-inside space-y-1 pl-2">
              {program.outcomes.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto">
          <div className="flex items-center gap-2 text-sm text-purple-400 mb-4">
            <Award size={16} />
            <span className="font-medium">{program.certification}</span>
          </div>

          <button
            onClick={handleDownload}
            className="w-full flex items-center justify-center text-white gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-900 to-green-600 hover:from-purple-500 hover:to-green-300 font-semibold transition-all shadow-md"
          >
            <Download size={18} /> Download Curriculum
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// -------------------------- Page Sections -------------------------
const HeroSection: React.FC = () => (
  <section className="relative bg-black h-[80vh] text-white py-24 mt-28">
    {/* Background Image */}
    <img
      src="https://res.cloudinary.com/djtzx6wo7/image/upload/v1761228314/artyom-korshunov-NWByxwVN-J0-unsplash_1_qznmdv.jpg"
      alt="Industrial Training"
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />

    {/* Content */}
    <div className="relative max-w-6xl mx-auto px-6 md:px-12 text-center">
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-block px-4 py-1 bg-purple-600/20 text-purple-400 text-sm font-medium rounded-full"
      >
        Curriculum
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-5 text-4xl md:text-6xl font-extrabold leading-tight"
      >
        Comprehensive Industrial Training Programmes
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-6 text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
      >
        Hands-on, industry-aligned training across Mining, Fabrication,
        Electrical, Mechanical, HEMM, and Foundry — featuring fleet practice,
        AR/VR simulations, and employability-driven skill development.
      </motion.p>
    </div>
  </section>
);

const ProgramsSection: React.FC = () => {
  const programs: Program[] = [
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
    },
    {
      id: "apprenticeship",
      name: "Apprenticeship & Dual Training Program",
      description:
        "Earn-while-you-learn programs combining institutional learning with real on-the-job industry training.",
      duration: "6–24 Months",
      modules: [
        "On-the-job industrial training",
        "Departmental rotations",
        "Skill assessment & mentoring",
        "Compliance with Apprenticeship Act",
      ],
      outcomes: [
        "Real industry experience",
        "Monthly stipend support",
        "High probability of full-time employment",
      ],
      certification: "Apprenticeship Certificate",
      pdfUrl: "/pdfs/Apprenticeship-Dual-Training.pdf",
    },
    {
      id: "upskilling",
      name: "Upskilling & Reskilling Program",
      description:
        "Focused programs for working professionals and displaced workers to upgrade or transition skills.",
      duration: "2–6 Months",
      modules: [
        "Skill gap assessment",
        "Advanced machinery & tools",
        "New-age technologies & processes",
      ],
      outcomes: [
        "Improved productivity",
        "Career transition readiness",
        "Adaptation to modern industry needs",
      ],
      certification: "Skill Upgrade Certificate",
      pdfUrl: "/pdfs/Upskilling-Reskilling.pdf",
    },
    {
      id: "witp",
      name: "Work Integrated Training Program (WITP)",
      description:
        "Programs that integrate academic learning with continuous industry exposure throughout the course.",
      duration: "12–36 Months",
      modules: [
        "Classroom + industry rotation model",
        "Live project execution",
        "Mentorship by industry professionals",
      ],
      outcomes: [
        "Zero learning-to-job gap",
        "Industry-ready graduates",
        "Higher placement conversion rates",
      ],
      certification: "Work Integrated Program Certificate",
      pdfUrl: "/pdfs/WITP-Curriculum.pdf",
    },
    {
      id: "bootcamps",
      name: "Skill Development Bootcamps",
      description:
        "Intensive, fast-track bootcamps designed to quickly prepare candidates for urgent industry requirements.",
      duration: "4–12 Weeks",
      modules: [
        "Role-specific rapid training",
        "Practical skill drills",
        "Mock assessments & interviews",
      ],
      outcomes: [
        "Quick job readiness",
        "High employability in short time",
        "Targeted role placement",
      ],
      certification: "Bootcamp Completion Certificate",
      pdfUrl: "/pdfs/Skill-Bootcamp.pdf",
    },
    {
      id: "international",
      name: "International Mobility Programs",
      description:
        "Global workforce programs preparing candidates for overseas employment in mining, energy, and infrastructure.",
      duration: "3–9 Months",
      modules: [
        "International skill standards",
        "Language & cultural orientation",
        "Global safety & compliance norms",
      ],
      outcomes: [
        "International job readiness",
        "Global certifications",
        "Overseas placement opportunities",
      ],
      certification: "International Skill Certification",
      pdfUrl: "/pdfs/International-Mobility.pdf",
    },
  ];

  return (
    <section id="programs" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle
          title="Programmes & Curriculum Details"
          subtitle="Elaborate breakdown of each programme"
        />
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {programs.map((program) => (
            <ProgramCard program={program} key={program.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

// -------------------------- Main Page -------------------------
const CurriculumPage: React.FC = () => (
  <div className="bg-black text-white min-h-screen font-sans">
    <HeroSection />
    <main>
      <ProgramsSection />
    </main>
  </div>
);

export default CurriculumPage;
