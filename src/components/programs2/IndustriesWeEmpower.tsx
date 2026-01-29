import { useState } from "react";

type Industry = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const INDUSTRIES: Industry[] = [
  {
    id: "bfsi",
    title: "BFSI",
    description:
      "Driving digital and behavioural transformation for leading banks and financial institutions.\nDuring an intervention with a leading bank, 85% of participants reported improved decision-making capabilities.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "healthcare",
    title: "HEALTHCARE",
    description:
      "Equipping frontline and management teams with skills for a rapidly evolving healthcare ecosystem.\nStrategically planned innovations reduced onboarding time by 40% for a leading hospital chain.",
    image:
      "https://images.unsplash.com/photo-1640984756059-7303641db7cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBob2xlfGVufDB8MHwwfHx8Mg%3D%3D",
  },
  {
    id: "technology",
    title: "TECHNOLOGY",
    description:
      "Building future-ready talent in IT and GCCs with AI-powered platforms and skilling models.\nEnabled 15,000+ professionals to upskill on cloud and AI technologies.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neXxlbnwwfDB8MHx8fDI%3D",
  },
  {
    id: "manufacturing",
    title: "MANUFACTURING",
    description:
      "Upskilling workforce for operational excellence and leadership in an Industry 4.0 world.\nImproved production efficiency by 30% in a leading auto manufacturing company.",
    image:
      "https://images.unsplash.com/photo-1598302936625-6075fbd98dd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFudWZhY3R1cmluZ3xlbnwwfDB8MHx8fDI%3D",
  },
  {
    id: "retail",
    title: "RETAIL",
    description:
      "Transforming customer-facing teams and leadership for the digital-first retail landscape.\nTrained 10,000+ retail associates across 200+ locations for a leading retail chain.",
    image:
      "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJldGFpbHxlbnwwfDB8MHx8fDI%3D",
  },
];

export default function IndustriesWeEmpower() {
  const [active, setActive] = useState("bfsi");

  // const activeIndustry = INDUSTRIES.find((i) => i.id === active)!;

  return (
    <section className="relative w-full bg-black text-white overflow-hidden">
      {/* Purple ambient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(168,85,247,0.25),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_85%,rgba(147,51,234,0.18),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* LEFT */}
          <div className="lg:col-span-6">
            <h2 className="text-[54px] leading-[1] font-light tracking-tight">
              INDUSTRIES
              <br />
              WE EMPOWER
            </h2>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
              We bring tailored learning solutions to industries that are shaping
              the future. With deep domain expertise and contextual
              interventions, we help organizations unlock the full potential of
              their workforce.
            </p>

            {/* Image container */}
            <div className="relative mt-10 h-[360px] overflow-hidden bg-black">
              {INDUSTRIES.map((industry) => {
                const isActive = industry.id === active;

                return (
                  <img
                    key={industry.id}
                    src={industry.image}
                    alt={industry.title}
                    className={[
                        "absolute inset-0 h-full w-full object-cover",
                        "brightness-105 contrast-110 saturate-110",
                        "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                        isActive
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-[1.03]",
                      ].join(" ")}                      
                  />
                );
              })}
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-6">
            <div className="border-t border-white/20">
              {INDUSTRIES.map((industry) => {
                const isActive = industry.id === active;

                return (
                  <div
                    key={industry.id}
                    className="border-b border-white/20"
                  >
                    {/* Header */}
                    <button
                      onClick={() => setActive(industry.id)}
                      className={[
                        "w-full flex items-center justify-between px-6 py-6 text-left",
                        "transition-colors duration-300",
                        isActive
                          ? "bg-purple-500/10"
                          : "hover:bg-white/5",
                      ].join(" ")}
                    >
                      <span className="tracking-wide text-base">
                        {industry.title}
                      </span>
                      <span className="text-2xl font-light">
                        {isActive ? "−" : "+"}
                      </span>
                    </button>

                    {/* Smooth accordion body */}
                    <div
                      className={[
                        "grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                        isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      ].join(" ")}
                    >
                      <div className="overflow-hidden">
                        <p
                          className={[
                            "px-6 pb-6 text-sm leading-relaxed text-white/60 whitespace-pre-line",
                            "transition-opacity duration-300",
                            isActive ? "opacity-100" : "opacity-0",
                          ].join(" ")}
                        >
                          {industry.description}
                        </p>
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