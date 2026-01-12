import React from "react";
import {
  FaCoins,
  FaHandshake,
  FaUniversity,
  FaArrowRight,
} from "react-icons/fa";

const FinancialSupport: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 pb-24">
      <div className="bg-neutral-900/60 border border-purple-600 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-purple-600 text-center mb-10">
          Financial Support & Course Overview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <FaCoins />,
              title: "Skill Loan Assistance",
              text:
                "Education loans with deferred repayment options and institutional support.",
            },
            {
              icon: <FaHandshake />,
              title: "Study Grants & Scholarships",
              text:
                "CSR, DMF and government-backed grants for women and tribal youth.",
            },
            {
              icon: <FaUniversity />,
              title: "Course Overview",
              text:
                "Short-term certifications to full-degree programmes with industry exposure.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-black/40 border border-purple-600 rounded-xl p-6"
            >
              <div className="text-3xl text-green-500 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/apply"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-black rounded-lg font-semibold hover:bg-green-600 transition"
          >
            Explore Financial Options <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinancialSupport;
