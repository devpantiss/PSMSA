import React from "react";

const stats = [
  { label: "Learners Trained", value: "25,000+" },
  { label: "Industry Partners", value: "120+" },
  { label: "Job Roles Enabled", value: "80+" },
  { label: "Placement Readiness", value: "90%" },
];

const LabsImpact: React.FC = () => (
  <section className="py-20 bg-black">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6">
      {stats.map((s) => (
        <div
          key={s.label}
          className="text-center bg-white/5 border border-purple-600/30 rounded-xl p-6"
        >
          <p className="text-4xl font-bold text-green-500">{s.value}</p>
          <p className="text-gray-300 mt-2">{s.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default LabsImpact;