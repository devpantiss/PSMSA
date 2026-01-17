import React, { memo } from "react";
import { Link } from "react-router-dom";

const PlacementsHero: React.FC = memo(() => {
  return (
    <section className="relative h-[100vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/placement.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Where <span className="text-green-500">Skills</span> Turn Into
          <br />
          <span className="text-white">Careers</span>
        </h1>

        <p className="text-xl text-gray-300">
          Pantiss Skill Universe enables industry-ready talent through outcome-driven
          training, live industry exposure, and structured placement pathways.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <Link
            to="/placements/recruit"
            className="px-8 py-4 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-500 transition-all duration-300 shadow-lg"
          >
            Recruit from Pantiss
          </Link>

          <Link
            to="/apply"
            className="px-8 py-4 rounded-xl border border-purple-600 text-purple-400 font-semibold hover:bg-purple-600/20 transition-all duration-300 shadow-lg"
          >
            Get Placed
          </Link>
        </div>
      </div>
    </section>
  );
});

export default PlacementsHero;
