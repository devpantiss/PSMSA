import { HardHat, Factory, Users, Shield } from "lucide-react";

const pillars = [
  {
    icon: HardHat,
    title: "Hands-on Training",
    desc: "Real equipment, live simulations, and practical exposure.",
  },
  {
    icon: Factory,
    title: "Industrial Discipline",
    desc: "Shift-based routines aligned with plant operations.",
  },
  {
    icon: Shield,
    title: "Safety-First Culture",
    desc: "Global safety protocols embedded in daily life.",
  },
  {
    icon: Users,
    title: "Cohort Learning",
    desc: "Team-based training mirroring shop-floor dynamics.",
  },
];

const LifePillars = () => (
  <section className="py-20 px-6">
    <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {pillars.map(({ icon: Icon, title, desc }) => (
        <div
          key={title}
          className="border border-zinc-800 rounded-xl p-6 bg-zinc-900/40"
        >
          <Icon className="w-8 h-8 text-purple-500 mb-4" />
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-neutral-400 mt-2">{desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default LifePillars;