import React from "react";
import Rotating3DLabsCarousel from "./Rotating3DLabsCarousel";

const FuturisticLabsShowcaseSection: React.FC = () => {
  return (
    <section className="relative bg-black py-10 overflow-hidden">
      {/* Ambient gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[420px] h-[420px] bg-green-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-[380px] h-[380px] bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* SPLIT LAYOUT */}
        <div className="flex flex-col lg:flex-row items-center gap-14">
          {/* LEFT — 3D Carousel (2/3) */}
          <div className="w-full lg:w-2/3 flex justify-center">
            <Rotating3DLabsCarousel />
          </div>

          {/* RIGHT — Content (1/3) */}
          <div className="w-full lg:w-1/3 text-white">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              <span className="text-green-400">Futuristic</span> Advanced Labs
              <br />
              <span className="text-purple-500">Built for Industry 4.0</span>
            </h2>

            {/* <p className="mt-6 text-gray-300 text-lg leading-relaxed">
              Pantiss Skill Universe is redefining workforce training through
              <span className="text-green-400 font-medium">
                {" "}
                next-generation laboratories
              </span>{" "}
              that merge physical infrastructure with immersive digital
              technology. Our advanced labs simulate real industrial
              environments — allowing learners to practice, fail, learn, and
              master skills safely.
            </p> */}

            {/* Key highlights */}
            <ul className="grid grid-cols-2 gap-4 mt-8 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                Real Industry Simulations
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full" />
                AR / VR & Digital Twins
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                Safety-first Training
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full" />
                CSR & ESG Ready
              </li>
            </ul>

            {/* CTA */}
            <div className="pt-10">
              <a
                href="/futuristic-labs"
                className="
                  inline-flex items-center gap-3 px-7 py-4 rounded-xl
                  bg-gradient-to-r from-green-400 to-purple-500
                  text-black font-semibold shadow-lg
                  hover:scale-[1.04] transition-transform
                "
              >
                Explore Our Labs
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuturisticLabsShowcaseSection;
