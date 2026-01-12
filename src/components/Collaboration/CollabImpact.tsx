import React from "react";

const stats = [
  { label: "Placement Rate", value: "92%" },
  { label: "Hiring Partners", value: "300+" },
  { label: "Highest Package", value: "₹6.5 LPA" },
  { label: "International Placements", value: "20+" },
];

const PlacementStats: React.FC = () => {
  return (
    <section className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-gray-900/60 backdrop-blur-xl border border-green-500/30 rounded-2xl p-8 text-center hover:scale-[1.03] transition"
          >
            <p className="text-4xl font-extrabold text-green-500">
              {stat.value}
            </p>
            <p className="mt-2 text-gray-300 uppercase tracking-widest text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlacementStats;
