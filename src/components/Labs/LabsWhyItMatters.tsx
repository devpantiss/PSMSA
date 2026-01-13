import React from "react";
import { ShieldCheck, Cpu, Factory, TrendingUp } from "lucide-react";

const points = [
  { icon: <ShieldCheck />, title: "Zero-Risk Training", desc: "Simulated environments eliminate safety risks" },
  { icon: <Cpu />, title: "Industry 4.0 Ready", desc: "AR/VR, simulators & digital twins" },
  { icon: <Factory />, title: "Real-World Exposure", desc: "Replicates actual site conditions" },
  { icon: <TrendingUp />, title: "Faster Employability", desc: "Reduced onboarding time for employers" },
];

const LabsWhyItMatters: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {points.map((p) => (
          <div
            key={p.title}
            className="bg-white/5 border border-[#4eeac8] rounded-xl p-6 text-center"
          >
            <div className="w-12 h-12 mx-auto mb-4 text-green-500">{p.icon}</div>
            <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
            <p className="text-gray-400 text-sm">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LabsWhyItMatters;
