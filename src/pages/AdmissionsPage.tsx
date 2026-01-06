import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCoins,
  FaHandshake,
  FaUniversity,
  FaArrowRight,
} from "react-icons/fa";

/* ---------- Programme Data ---------- */
const programmes = [
  {
    key: "ug-mining",
    title: "Bachelor’s in Mining Engineering (UG)",
    subtitle:
      "Four-year undergraduate programme preparing mining engineers for statutory, operational and managerial roles.",
    eligibility: [
      "10+2 with Physics, Chemistry & Mathematics from a recognized board.",
      "Minimum age: 17 years at the time of admission.",
      "Medical fitness as per mining industry standards.",
    ],
    selectionProcess: [
      "Application through institutional or state admission process.",
      "Entrance examination or merit-based shortlisting.",
      "Counselling, document verification and seat allotment.",
    ],
    fees: {
      overview:
        "Annual academic fee covering classroom instruction, laboratories, mine visits and internships.",
      breakdown: [
        { label: "Tuition Fee", amount: "₹90,000 – ₹1,40,000 / year" },
        { label: "Laboratory & Field Training", amount: "Included" },
        { label: "Safety Gear & PPE", amount: "₹3,000 – ₹6,000 (one-time)" },
      ],
    },
    scholarship: [
      "Merit-based scholarships for high academic performers.",
      "DMF / CSR support for students from mining-affected areas.",
      "Fee concessions for women and tribal students as per policy.",
    ],
  },
  {
    key: "diploma",
    title: "Diploma / Polytechnic Programmes",
    subtitle:
      "Three-year diploma programmes in Mining, Mechanical, Electrical and Civil disciplines.",
    eligibility: [
      "10th pass with Mathematics and Science.",
      "Minimum age: 15 years.",
    ],
    selectionProcess: [
      "Application through state polytechnic admission portal.",
      "Merit-based allotment or entrance test.",
      "Institutional counselling and enrolment.",
    ],
    fees: {
      overview:
        "Affordable technical education with strong workshop and site exposure.",
      breakdown: [
        { label: "Tuition & Laboratory Fee", amount: "₹45,000 – ₹75,000 / year" },
        { label: "Workshop Tools & Materials", amount: "₹3,000 – ₹6,000" },
      ],
    },
    scholarship: [
      "State government polytechnic scholarships.",
      "CSR-supported fee waivers for eligible candidates.",
      "Hostel and transport assistance where applicable.",
    ],
  },
  {
    key: "iti",
    title: "ITI Trades",
    subtitle:
      "One- and two-year Industrial Training Institute programmes for skilled technicians.",
    eligibility: [
      "8th or 10th pass depending on the trade.",
      "Age: 14 years and above.",
    ],
    selectionProcess: [
      "Online registration and trade preference selection.",
      "Merit-based admission through counselling.",
      "Institutional induction and safety orientation.",
    ],
    fees: {
      overview:
        "Low-cost vocational training with high employment potential.",
      breakdown: [
        { label: "Training Fee", amount: "₹8,000 – ₹25,000 / year" },
        { label: "Tools, Uniform & PPE", amount: "₹2,000 – ₹4,000" },
      ],
    },
    scholarship: [
      "Central and state ITI scholarship schemes.",
      "Stipend during on-the-job training/apprenticeship.",
      "CSR-sponsored free training seats.",
    ],
  },
  {
    key: "certification",
    title: "Industry-Aligned Skill Certification",
    subtitle:
      "Short-term certification courses aligned with NSQF and industry standards.",
    eligibility: [
      "Minimum 8th / 10th pass or relevant work experience.",
    ],
    selectionProcess: [
      "Registration and baseline skill assessment.",
      "Short-duration classroom and practical training.",
      "Final assessment and certification.",
    ],
    fees: {
      overview:
        "Short-duration, outcome-focused courses for quick employability.",
      breakdown: [
        { label: "Course & Assessment Fee", amount: "₹3,000 – ₹12,000" },
      ],
    },
    scholarship: [
      "Industry-sponsored certification programmes.",
      "CSR vouchers for youth from mining regions.",
    ],
  },
  {
    key: "upskilling",
    title: "Workmen Skilling & Upskilling",
    subtitle:
      "Skill enhancement programmes for existing mine workers, supervisors and contractors.",
    eligibility: [
      "Working professionals or experienced workmen.",
    ],
    selectionProcess: [
      "Skill-gap assessment at site or training centre.",
      "Modular training aligned with job role.",
      "Competency evaluation and certification.",
    ],
    fees: {
      overview:
        "Primarily sponsored by employers, DMF or CSR initiatives.",
      breakdown: [
        { label: "Training Fee", amount: "Employer / CSR Sponsored" },
      ],
    },
    scholarship: [
      "Company-sponsored workforce training.",
      "DMF-funded skilling initiatives.",
    ],
  },
  {
    key: "women",
    title: "Women in Mining",
    subtitle:
      "Focused programmes promoting women’s participation in mining and allied sectors.",
    eligibility: [
      "Women candidates meeting trade-specific eligibility criteria.",
    ],
    selectionProcess: [
      "Application and counselling.",
      "Safety, compliance and role orientation.",
      "Training and placement support.",
    ],
    fees: {
      overview:
        "Highly subsidized programmes to encourage gender inclusion.",
      breakdown: [
        { label: "Training Fee", amount: "Fully / Partially Waived" },
      ],
    },
    scholarship: [
      "Full scholarships under CSR and government schemes.",
      "Support for travel, hostel and childcare facilities.",
    ],
  },
  {
    key: "operator",
    title: "Operator Licensing & Certification",
    subtitle:
      "Statutory certification for HEMM, excavator, dumper and crane operators.",
    eligibility: [
      "Minimum age as per DGMS and statutory norms.",
      "Medical fitness certificate.",
      "Prior operating experience (preferred).",
    ],
    selectionProcess: [
      "Theory and simulator-based assessment.",
      "Practical machine operation test.",
      "Issuance of operator license/certificate.",
    ],
    fees: {
      overview:
        "Mandatory licensing programme as per statutory requirements.",
      breakdown: [
        { label: "Assessment & License Fee", amount: "₹4,000 – ₹18,000" },
      ],
    },
    scholarship: [
      "Employer-sponsored licensing.",
      "CSR-supported certification drives.",
    ],
  },
  {
    key: "international",
    title: "International Mobility Program",
    subtitle:
      "Skill and certification pathways for overseas employment in mining and infrastructure.",
    eligibility: [
      "Relevant qualification or trade experience.",
      "Valid passport and medical clearance.",
      "Language proficiency as per destination country.",
    ],
    selectionProcess: [
      "Skill and language screening.",
      "International certification alignment.",
      "Employer interview and overseas deployment.",
    ],
    fees: {
      overview:
        "Programme cost varies by country, certification and visa requirements.",
      breakdown: [
        { label: "Training & Certification", amount: "Country-specific" },
      ],
    },
    scholarship: [
      "Employer-sponsored international placements.",
      "Partial CSR support for high-potential candidates.",
    ],
  },
];

/* ---------- Motion ---------- */
const contentVariants = {
  hidden: { opacity: 0, x: 20 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

/* ---------- Component ---------- */
const AdmissionsSplitView: React.FC = () => {
  const [selected, setSelected] = useState(programmes[0].key);
  const current = programmes.find((p) => p.key === selected)!;

  return (
    <div className="min-h-screen bg-black mt-32 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 px-4 py-16">
        {/* LEFT NAV */}
        <aside className="md:col-span-4 md:sticky md:top-24 h-fit">
          <div className="bg-neutral-900/70 border border-purple-600 rounded-xl p-4">
            <h3 className="text-xl font-bold text-purple-600 mb-4">
              Programmes
            </h3>
            <ul className="space-y-2">
              {programmes.map((p) => {
                const active = p.key === selected;
                return (
                  <li key={p.key}>
                    <button
                      onClick={() => setSelected(p.key)}
                      className={`w-full p-3 rounded-lg text-left transition ${
                        active
                          ? "bg-gradient-to-r from-purple-600 to-green-500 text-black"
                          : "hover:bg-neutral-800"
                      }`}
                    >
                      <div className="font-semibold">{p.title}</div>
                      <div className="text-xs opacity-80">{p.subtitle}</div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <main className="md:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.key}
              variants={contentVariants}
              initial="hidden"
              animate="enter"
              exit="exit"
              transition={{ duration: 0.35 }}
              className="space-y-8"
            >
              <div className="bg-neutral-900/60 border border-purple-600 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-purple-600">
                  {current.title}
                </h2>
                <p className="text-gray-300">{current.subtitle}</p>
              </div>

              {/* Sections */}
              {[
                ["Eligibility", current.eligibility],
                ["Selection Process", current.selectionProcess],
                ["Scholarships & Financial Aid", current.scholarship],
              ].map(([title, items], idx) => (
                <section key={idx}>
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">
                    {title}
                  </h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {(items as string[]).map((i, k) => (
                      <li key={k}>{i}</li>
                    ))}
                  </ul>
                </section>
              ))}

              {/* Fees */}
              <section>
                <h3 className="text-xl font-semibold text-purple-600 mb-2">
                  Fee Structure
                </h3>
                <p className="text-gray-300 mb-3">{current.fees.overview}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {current.fees.breakdown.map((f, i) => (
                    <div
                      key={i}
                      className="bg-neutral-900/40 border border-purple-600 rounded-lg p-4 flex justify-between"
                    >
                      <span className="text-sm">{f.label}</span>
                      <span className="text-green-500 font-semibold">
                        {f.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* FINANCIALS */}
      <section className="max-w-7xl mx-auto px-4 pb-24">
        <div className="bg-neutral-900/60 border border-purple-600 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-purple-600 text-center mb-10">
            Financial Support & Course Overview
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/40 border border-purple-600 rounded-xl p-6">
              <FaCoins className="text-3xl text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Skill Loan Assistance
              </h3>
              <p className="text-gray-300 text-sm">
                Education loans with deferred repayment options and institutional
                support for documentation and processing.
              </p>
            </div>

            <div className="bg-black/40 border border-purple-600 rounded-xl p-6">
              <FaHandshake className="text-3xl text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Study Grants & Scholarships
              </h3>
              <p className="text-gray-300 text-sm">
                CSR, DMF and government-backed grants for women, tribal youth and
                candidates from mining-affected regions.
              </p>
            </div>

            <div className="bg-black/40 border border-purple-600 rounded-xl p-6">
              <FaUniversity className="text-3xl text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Course Overview
              </h3>
              <p className="text-gray-300 text-sm">
                Programmes ranging from short-term certifications to full-degree
                courses with classroom, lab, field and industry exposure.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href="/apply"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-black rounded-lg font-semibold hover:bg-green-600 transition"
            >
              Explore Financial Options <FaArrowRight />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionsSplitView;
