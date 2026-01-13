import React from "react";

const tech = [
  "AR / VR Training",
  "Heavy Equipment Simulators",
  "Digital Twins",
  "AI Skill Analytics",
  "Industry 4.0 Labs",
  "LMS Integration",
];

const TechStack:React.FC = () => (
  <section className="py-20 bg-gradient-to-b from-purple-950 to-black">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-green-500 mb-10">
        Technology Stack
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tech.map((t) => (
          <div key={t} className="bg-black/60 border border-green-500/30 p-6 rounded-xl">
            <p className="text-white font-semibold">{t}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;