import React from "react";

const LabsHero: React.FC = () => {
  return (
    <section className="relative h-[100vh] flex items-center justify-center text-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/labs_hero.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 max-w-4xl px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
          Next-Generation <span className="text-green-500">Skill Labs</span>
        </h1>
        <p className="text-xl text-gray-300">
          Where Industry 4.0 infrastructure transforms learners into job-ready professionals
        </p>
      </div>
    </section>
  );
};

export default LabsHero;
