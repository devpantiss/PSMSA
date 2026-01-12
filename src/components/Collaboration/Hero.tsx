import React, { memo } from "react";
import { Link } from "react-router-dom";

const PlacementsHero: React.FC = memo(() => {
  return (
    <section className="relative mt-28 min-h-[90vh] text-white overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/placement.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Where <span className="text-green-500">Skills</span> Turn Into
          <br />
          <span className="text-purple-600">Careers</span>
        </h1>

        <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
          Pantiss Skill Universe enables industry-ready talent through
          outcome-driven training, live industry exposure, and structured
          placement pathways.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <Link
            to="/placements/recruit"
            className="px-8 py-4 rounded-xl bg-green-600 text-black font-semibold hover:bg-green-500 transition-all duration-300 shadow-lg"
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