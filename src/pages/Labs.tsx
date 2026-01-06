import React from "react";
import {
  GraduationCap,
  Zap,
  Drill,
  Truck,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

// Images
// import simulatorImg from "@assets/generated_images/futuristic_mining_simulator_training_center.png";
// import arVrImg from "@assets/generated_images/ar_vr_mechanical_training_lab.png";
// import electricImg from "@assets/generated_images/high_tech_electrical_engineering_lab.png";
// import hemmImg from "@assets/generated_images/advanced_heavy_machinery_workshop.png";

/* -------------------- CUSTOM UI -------------------- */

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

const Badge: React.FC<BadgeProps> = ({ children, className = "" }) => (
  <span
    className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${className}`}
  >
    {children}
  </span>
);

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
}) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 ${className}`}
  >
    {children}
  </button>
);

/* -------------------- TYPES -------------------- */

type Lab = {
  id: string;
  title: string;
  description: string;
  type: string;
  icon: React.ReactNode;
  image: string;
  tags: string[];
  color: string;
  border: string;
};

/* -------------------- DATA -------------------- */

const LABS: Lab[] = [
  {
    id: "futuristic",
    title: "Quantum Mining Hub",
    description:
      "Experience the next frontier of mining operations using motion-base simulators and real-time geological holograms.",
    type: "Futuristic Simulator",
    icon: <Cpu className="w-6 h-6" />,
    image: "simulatorImg",
    tags: ["Motion Simulators", "Holographic Data", "AI Guidance"],
    color: "from-blue-600/20 to-cyan-400/20",
    border: "border-cyan-500/30",
  },
  {
    id: "ar-vr",
    title: "Meta-Mechanical Lab",
    description:
      "Mechanics and welders train in zero-risk environments using AR overlays and VR haptic feedback systems.",
    type: "AR / VR Integration",
    icon: <Zap className="w-6 h-6" />,
    image: "arVrImg",
    tags: ["Haptic Gloves", "AR Overlays", "Digital Twins"],
    color: "from-purple-600/20 to-pink-400/20",
    border: "border-purple-500/30",
  },
  {
    id: "hemm",
    title: "HEMM Smart Workshop",
    description:
      "Advanced Heavy Earth Moving Machinery workshop with smart diagnostics and robotic-assisted repairs.",
    type: "Advanced Workshop",
    icon: <Truck className="w-6 h-6" />,
    image: "hemmImg",
    tags: ["Smart Diagnostics", "Robotic Repair", "Heavy Duty"],
    color: "from-amber-600/20 to-orange-400/20",
    border: "border-amber-500/30",
  },
  {
    id: "electrician",
    title: "Voltage Pulse Lab",
    description:
      "High-precision electrical lab for smart grids, industrial automation, and renewable integration.",
    type: "Specialized Lab",
    icon: <Drill className="w-6 h-6" />,
    image: "electricImg",
    tags: ["Smart Grid", "Renewables", "Circuit Design"],
    color: "from-emerald-600/20 to-teal-400/20",
    border: "border-emerald-500/30",
  },
];

/* -------------------- COMPONENT -------------------- */

const Labs: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-100 selection:bg-cyan-500/30">
      {/* NAV */}
      {/* <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/40 backdrop-blur-xl">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-cyan-500 text-black p-1.5 rounded-lg shadow-[0_0_20px_rgba(6,182,212,0.5)]">
              <GraduationCap className="h-6 w-6" />
            </div>
            <span className="font-serif text-xl font-bold text-white">
              SkillUni <span className="text-cyan-400">Labs</span>
            </span>
          </div>

          <Button className="bg-cyan-600 hover:bg-cyan-500 text-white shadow-[0_0_15px_rgba(8,145,178,0.35)]">
            Book a Visit
          </Button>
        </div>
      </nav> */}

      {/* HERO */}
      <section className="relative pt-32 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6"
        >
          <Badge className="mb-4 border-cyan-500/30 text-cyan-400 bg-cyan-500/5">
            Future-Ready Training
          </Badge>

          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
            Immersive Learning <br />
            <span className="italic">Environments</span>
          </h1>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            State-of-the-art laboratories where blue-collar skill training meets
            simulation, AR, and industrial-grade technology.
          </p>
        </motion.div>
      </section>

      {/* LABS */}
      <section className="container mx-auto px-6 pb-32 space-y-24">
        {LABS.map((lab, index) => (
          <motion.div
            key={lab.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`flex flex-col ${
              index % 2 ? "md:flex-row-reverse" : "md:flex-row"
            } gap-12 items-center`}
          >
            <div className="md:w-1/2">
              <div
                className={`relative rounded-3xl overflow-hidden border ${lab.border} bg-slate-900 shadow-2xl`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${lab.color} opacity-40`}
                />
                <img
                  src={lab.image}
                  alt={lab.title}
                  className="w-full aspect-[16/10] object-cover mix-blend-overlay hover:scale-110 transition-transform duration-1000"
                />
              </div>
            </div>

            <div className="md:w-1/2 space-y-6">
              <div className="flex items-center gap-3 text-cyan-400">
                <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                  {lab.icon}
                </div>
                <span className="text-xs tracking-widest uppercase font-bold">
                  {lab.type}
                </span>
              </div>

              <h2 className="text-4xl font-serif font-bold">
                {lab.title}
              </h2>

              <p className="text-slate-400 text-lg">
                {lab.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {lab.tags.map((tag) => (
                  <Badge
                    key={tag}
                    className="bg-white/5 border-white/10 text-slate-300"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <Button className="text-cyan-400 hover:text-cyan-300 px-0">
                Learn about the tech
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* FOOTER */}
      {/* <footer className="py-20 bg-[#050507] border-t border-white/5 text-center text-slate-500 text-sm">
        <p>© 2026 SkillUniversity. Built for the future of vocational training.</p>
      </footer> */}
    </div>
  );
};

export default Labs;
