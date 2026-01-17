import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ArrowUpRight, Clock } from "lucide-react";

const programmes = [
  {
    title: "Diploma/Polytechnic",
    description:
      "Comprehensive training in technical and applied sciences, preparing students for supervisory and technician roles.",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762421119/diploma_diqahi.avif",
    duration: "2-3 years",
    highlights: ["Technical Proficiency", "Career-Ready Skills", "Lab-Based Learning"],
    path: "/our-programmes/diploma-programs",
  },
  {
    title: "Industrial Training Institute (ITI)",
    description:
      "Hands-on skill development programs designed to create industry-ready technicians for blue-collar sectors.",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762421038/iti_pld6fw.avif",
    duration: "6-24 months",
    highlights: ["Hands-On Workshops", "Industry Tools", "Placement Assistance"],
    path: "/our-programmes/iti-program",
  },
  {
    title: "Workmen Upskilling & Reskilling Program",
    description:
      "Upgrades existing workers to new technologies and skills, ensuring long-term career growth in dynamic industries.",
    image: "/homepage/Programs/workmen.jpg",
    duration: "1-6 months",
    highlights: ["Technology Upgrade", "Role Transition Support", "Industry-Aligned Skills"],
    path: "/our-programmes/upskilling-and-reskilling-program",
  },
  {
    title: "Women in Mining",
    description:
      "Empowering women with industry-ready skills, certifications, and safe pathways into mining and heavy industry roles.",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762167481/Gemini_Generated_Image_dm4793dm4793dm47_obiynh.png",
    duration: "8-12 weeks",
    highlights: ["Inclusive Training", "Certification Ready", "Workplace Safety Focus"],
    path: "/our-programmes/women-in-mining",
  },
  {
    title: "Operator Licencing & Certification",
    description:
      "Structured certification pathways for operators to gain formal licensing, improve safety compliance, and boost employability.",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761745242/IMG_9085_tkrncl_1_1_cc29gu.jpg",
    duration: "8-12 weeks",
    highlights: ["License Readiness", "Safety Compliance", "Practical Evaluation"],
    path: "/our-programmes/operator-licensing",
  },
  {
    title: "International Mobility Program",
    description:
      "Global-standard training designed for overseas opportunities, skill validation, and international job readiness.",
    image: "/solutions_banner.webp",
    duration: "18-24 weeks",
    highlights: ["Global Standards", "Overseas Pathways", "International Readiness"],
    path: "/our-programmes/international-mobility",
  },
];

const ACCENT = "#9333ea"; // purple-600
const SECONDARY = "#22c55e"; // green-500

const ProgrammeCategories: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-black py-20"
      role="region"
      aria-label="Programme Categories"
    >
      {/* Futuristic background system */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-40 left-[-120px] h-[520px] w-[520px] rounded-full blur-[160px] opacity-40"
          style={{ backgroundColor: `${ACCENT}55` }}
        />
        <div
          className="absolute bottom-[-220px] right-[-120px] h-[620px] w-[620px] rounded-full blur-[190px] opacity-30"
          style={{ backgroundColor: `${SECONDARY}44` }}
        />

        <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(147,51,234,0.30)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.30)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:18px_18px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.95)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur-xl">
            <span
              className="h-2 w-2 rounded-full animate-pulse"
              style={{ backgroundColor: ACCENT }}
            />
            Programmes • Industry Readiness • Career Outcomes
          </p>

          <h2 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Programme{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${ACCENT}, rgba(147,51,234,0.55))`,
              }}
            >
              Categories
            </span>
          </h2>

          <p className="mt-4 text-base md:text-lg text-white/65 leading-relaxed">
            Choose the pathway that fits your goals — from foundational technical education
            to certification, upskilling, and international mobility.
          </p>

          <div className="mt-6 mx-auto h-[3px] w-28 rounded-full bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        </motion.div>

        {/* Grid (cards same height) */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {programmes.map((programme, index) => (
            <Link to={programme.path} key={index} className="group h-full">
              <motion.article
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="
                  relative h-full overflow-hidden rounded-[28px]
                  border border-white/10 bg-white/5
                  backdrop-blur-xl
                  shadow-[0_0_0_1px_rgba(255,255,255,0.04)]
                  transition-all duration-500
                  hover:border-white/20 hover:shadow-[0_0_60px_rgba(147,51,234,0.18)]
                "
              >
                {/* Image */}
                <div className="relative h-[210px] w-full bg-black/40">
                  <img
                    src={programme.image}
                    alt={programme.title}
                    className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-[1.06]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent" />

                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs text-white/75 backdrop-blur-xl">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: SECONDARY }}
                    />
                    Active Programme
                  </div>

                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs text-white/75 backdrop-blur-xl">
                    <Clock className="h-4 w-4" style={{ color: ACCENT }} />
                    {programme.duration}
                  </div>

                  <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs text-white/70 backdrop-blur-xl opacity-0 translate-y-1 transition duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    View <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                {/* Content (forces same height layout) */}
                <div className="p-6 flex flex-col min-h-[290px]">
                  <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {programme.title}
                  </h3>

                  <p className="mt-2 text-sm text-white/65 leading-relaxed line-clamp-3">
                    {programme.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {programme.highlights?.slice(0, 3).map((point, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-white/80"
                      >
                        <FaCheckCircle className="h-4 w-4 text-green-400 shrink-0" />
                        <span className="line-clamp-1">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Footer pinned to bottom */}
                  <div className="mt-auto pt-6 flex items-center justify-between">
                    <div className="text-xs text-white/45">
                      View curriculum • outcomes • eligibility
                    </div>

                    <div
                      className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-xs font-semibold
                      border border-white/10 bg-black/40 text-white/80
                      transition group-hover:text-white group-hover:border-white/20"
                    >
                      View Details <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                {/* Premium hover sweep */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                  <div
                    className="absolute -left-24 -top-24 h-60 w-60 rounded-full blur-[90px]"
                    style={{ backgroundColor: `${ACCENT}18` }}
                  />
                  <div
                    className="absolute -bottom-24 -right-24 h-60 w-60 rounded-full blur-[100px]"
                    style={{ backgroundColor: `${SECONDARY}14` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-20" />
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgrammeCategories;