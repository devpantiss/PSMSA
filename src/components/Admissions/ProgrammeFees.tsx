import React from "react";

interface Props {
  fees: {
    overview: string;
    breakdown: { label: string; amount: string }[];
  };
}

const ProgrammeFees: React.FC<Props> = ({ fees }) => {
  return (
    <section>
      <h3 className="text-xl font-semibold text-purple-600 mb-2">
        Fee Structure
      </h3>
      <p className="text-gray-300 mb-3">{fees.overview}</p>

      <div className="grid sm:grid-cols-2 gap-3">
        {fees.breakdown.map((f, i) => (
          <div
            key={i}
            className="bg-neutral-900/40 border border-purple-600 rounded-lg p-4 flex justify-between"
          >
            <span className="text-sm">{f.label}</span>
            <span className="text-green-500 font-semibold">
              {f.amount}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgrammeFees;
