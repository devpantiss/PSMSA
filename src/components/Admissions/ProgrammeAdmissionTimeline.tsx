import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaWpforms,
  FaClipboardCheck,
  FaUserTie,
  FaFileAlt,
  FaMoneyBillWave,
  FaUniversity,
  FaTools,
  FaHeartbeat,
  FaGlobe,
  FaPlaneDeparture,
  FaChalkboardTeacher,
  FaCertificate,
} from "react-icons/fa";

/* ---------------- PROGRAMME-SPECIFIC DATA ---------------- */
const admissionSteps: Record<
  string,
  {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[]
> = {
  "ug-mining": [
    {
      title: "Online Application",
      description:
        "Applicants submit academic details, preferences, and required information through the admission portal.",
      icon: <FaWpforms />,
    },
    {
      title: "Entrance / Merit Screening",
      description:
        "Candidates are shortlisted based on entrance examination scores or academic merit criteria.",
      icon: <FaClipboardCheck />,
    },
    {
      title: "Counselling & Seat Allocation",
      description:
        "Eligible candidates participate in counselling for programme guidance and seat allotment.",
      icon: <FaUserTie />,
    },
    {
      title: "Document Verification",
      description:
        "Academic records, eligibility documents, and certificates are verified by the institution.",
      icon: <FaFileAlt />,
    },
    {
      title: "Fee Confirmation",
      description:
        "Admission is confirmed upon payment of the prescribed academic and institutional fees.",
      icon: <FaMoneyBillWave />,
    },
    {
      title: "Academic Onboarding",
      description:
        "Students complete orientation and formally commence their academic journey.",
      icon: <FaUniversity />,
    },
  ],

  diploma: [
    {
      title: "Application Registration",
      description:
        "Candidates apply through the state or institutional diploma admission process.",
      icon: <FaWpforms />,
    },
    {
      title: "Merit-Based Shortlisting",
      description:
        "Applicants are shortlisted based on qualifying examination performance.",
      icon: <FaClipboardCheck />,
    },
    {
      title: "Counselling & Trade Allotment",
      description:
        "Programme and trade allotment is completed through centralized counselling.",
      icon: <FaUserTie />,
    },
    {
      title: "Document Verification",
      description:
        "Verification of academic and personal documents is conducted.",
      icon: <FaFileAlt />,
    },
    {
      title: "Fee Submission",
      description:
        "Candidates confirm admission by completing fee payment formalities.",
      icon: <FaMoneyBillWave />,
    },
    {
      title: "Programme Commencement",
      description:
        "Classroom instruction and laboratory training begin as per academic calendar.",
      icon: <FaChalkboardTeacher />,
    },
  ],

  iti: [
    {
      title: "Online Registration",
      description:
        "Applicants register for ITI trades through the designated admission portal.",
      icon: <FaWpforms />,
    },
    {
      title: "Merit Counselling",
      description:
        "Trade selection and seat allotment are conducted through counselling.",
      icon: <FaUserTie />,
    },
    {
      title: "Trade Allotment",
      description:
        "Candidates are assigned to their selected ITI trade based on merit.",
      icon: <FaTools />,
    },
    {
      title: "Fee & Enrollment",
      description: "Training fee payment and formal enrollment are completed.",
      icon: <FaMoneyBillWave />,
    },
    {
      title: "Safety Induction",
      description:
        "Mandatory safety orientation and compliance training is provided.",
      icon: <FaHeartbeat />,
    },
    {
      title: "Skill Training Commencement",
      description: "Workshop-based and hands-on training sessions begin.",
      icon: <FaChalkboardTeacher />,
    },
  ],

  operator: [
    {
      title: "Application Submission",
      description:
        "Candidates submit applications for statutory operator certification.",
      icon: <FaWpforms />,
    },
    {
      title: "Medical Fitness Clearance",
      description:
        "Applicants undergo medical examinations as per statutory norms.",
      icon: <FaHeartbeat />,
    },
    {
      title: "Theory & Simulator Training",
      description:
        "Candidates complete classroom instruction and simulator-based assessments.",
      icon: <FaTools />,
    },
    {
      title: "Practical Competency Test",
      description:
        "On-equipment practical evaluation is conducted by certified assessors.",
      icon: <FaClipboardCheck />,
    },
    {
      title: "License Issuance",
      description:
        "Successful candidates receive statutory operator certification.",
      icon: <FaCertificate />,
    },
  ],

  international: [
    {
      title: "Candidate Registration",
      description:
        "Applicants register for international mobility and overseas opportunities.",
      icon: <FaWpforms />,
    },
    {
      title: "Skill & Language Screening",
      description:
        "Technical competencies and language proficiency are assessed.",
      icon: <FaGlobe />,
    },
    {
      title: "International Certification",
      description:
        "Candidates undergo certification aligned with destination country standards.",
      icon: <FaCertificate />,
    },
    {
      title: "Employer Interview",
      description:
        "Shortlisted candidates attend interviews with international employers.",
      icon: <FaUserTie />,
    },
    {
      title: "Visa & Documentation",
      description:
        "Visa processing and international documentation support is provided.",
      icon: <FaFileAlt />,
    },
    {
      title: "Overseas Deployment",
      description:
        "Candidates are deployed overseas for employment opportunities.",
      icon: <FaPlaneDeparture />,
    },
  ],
};

/* ---------------- COMPONENT ---------------- */
interface Props {
  programmeKey: keyof typeof admissionSteps;
}

const ScrollDrivenAdmissionTimeline: React.FC<Props> = ({ programmeKey }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const steps = admissionSteps[programmeKey];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(steps.length - 1) * 340}px`]
  );

  return (
    <section ref={containerRef} className="relative h-[260vh] bg-black">
      {/* Sticky Horizontal Section */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="w-full relative">
          <h2 className="text-4xl font-bold text-purple-600 text-center mb-20">
            Admission Journey
          </h2>

          {/* Timeline Track */}
          <div className="absolute top-[55%] left-0 right-0 h-[2px] bg-gradient-to-r from-purple-600/20 via-purple-600/50 to-purple-600/20 z-0" />

          {/* Timeline Cards */}
          <motion.div style={{ x }} className="relative z-10 flex gap-24 px-28">
            {steps.map((step, index) => (
              <div
                key={index}
                className="min-w-[300px] backdrop-blur-md bg-white/5 border border-purple-600/40 rounded-2xl shadow-xl p-8 text-center transition hover:border-purple-600"
              >
                {/* Icon */}
                <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-black flex items-center justify-center text-2xl shadow-lg">
                  {step.icon}
                </div>

                <h4 className="text-lg font-semibold text-gray-100 mb-2">
                  {step.title}
                </h4>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScrollDrivenAdmissionTimeline;
