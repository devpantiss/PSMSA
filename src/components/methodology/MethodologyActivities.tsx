import React from "react";
import {
  BookOpen,
  FileQuestion,
  Languages,
  Users,
  Laptop,
  Video,
  Target,
  Megaphone,
  Printer,
} from "lucide-react";

type Activity = {
  text: string;
  icon: React.ReactNode;
  tags: string[];
};

const activities: Activity[] = [
  {
    text:
      "Development of industry-aligned instructional material mapped to occupational standards",
    icon: <BookOpen className="h-5 w-5" />,
    tags: ["NSQF Aligned", "Mining", "Steel"],
  },
  {
    text:
      "Creation of competency-based question banks for formative and summative assessments",
    icon: <FileQuestion className="h-5 w-5" />,
    tags: ["Assessment", "Outcome Based"],
  },
  {
    text:
      "Translation and localization of instructional material into Hindi and regional languages",
    icon: <Languages className="h-5 w-5" />,
    tags: ["Inclusivity", "Regional Reach"],
  },
  {
    text:
      "Awareness and structured training programs for instructors and master trainers",
    icon: <Users className="h-5 w-5" />,
    tags: ["Trainer Enablement", "Capacity Building"],
  },
  {
    text:
      "Digitization of content and development of blended eLearning modules",
    icon: <Laptop className="h-5 w-5" />,
    tags: ["Digital Learning", "Blended Training"],
  },
  {
    text:
      "Video-based instructional programs and simulator-supported learning assets",
    icon: <Video className="h-5 w-5" />,
    tags: ["Visual Learning", "Simulation"],
  },
  {
    text:
      "Definition and validation of terminal competencies for certification and employability",
    icon: <Target className="h-5 w-5" />,
    tags: ["Employability", "Certification"],
  },
  {
    text:
      "Media development training and institutional capacity strengthening",
    icon: <Megaphone className="h-5 w-5" />,
    tags: ["Training Quality", "Delivery Excellence"],
  },
  {
    text:
      "Printing, publishing, and outreach support for standardized training products",
    icon: <Printer className="h-5 w-5" />,
    tags: ["Standardization", "Scale"],
  },
];

export default function PantissTrainingMethodologyPromo() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-24">
      {/* ===== Premium Purple → Gold Ambient Background ===== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-260px] top-[-220px] h-[560px] w-[560px] rounded-full bg-purple-600/25 blur-[220px]" />
        <div className="absolute right-[-260px] bottom-[-220px] h-[560px] w-[560px] rounded-full bg-yellow-500/20 blur-[240px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.92)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* ===== Header ===== */}
        <div className="mb-16 max-w-4xl">
          <p className="mb-3 inline-block bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-xs uppercase tracking-widest text-transparent">
            Pantiss Skill Universe
          </p>

          <h2 className="text-4xl font-semibold text-white md:text-5xl">
            A Future-Ready Training Methodology
          </h2>

          <p className="mt-4 text-base leading-relaxed text-white/70">
            Pantiss Skill Universe delivers structured, industry-aligned and
            outcome-driven training solutions — designed to build workforce
            readiness, instructor capability, and scalable skill ecosystems
            across Mines, Steel & Aluminium sectors.
          </p>
        </div>

        {/* ===== Two Column Grid ===== */}
        <div className="grid gap-6 md:grid-cols-2">
          {activities.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-purple-500/40"
            >
              {/* subtle glow */}
              <div className="pointer-events-none absolute -left-24 -top-24 h-48 w-48 rounded-full opacity-0 blur-[80px] transition group-hover:opacity-100 bg-gradient-to-br from-purple-500/30 to-yellow-400/20" />

              <div className="relative flex items-start gap-4">
                {/* Icon */}
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-black/50 text-purple-400 transition group-hover:text-yellow-400">
                  {item.icon}
                </div>

                {/* Content */}
                <div>
                  <p className="text-sm leading-relaxed text-white/85">
                    {item.text}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===== Bottom CTA Note ===== */}
        <div className="mt-16 max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <p className="text-sm text-white/75">
            <span className="font-semibold text-white">
              Designed for scale:
            </span>{" "}
            This methodology seamlessly integrates with physical labs, digital
            platforms, simulators, and AR/VR environments — enabling blended,
            future-ready skill development programs.
          </p>
        </div>
      </div>
    </section>
  );
}
