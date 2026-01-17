import React from "react";
import { motion } from "framer-motion";

const ProgrammesHero: React.FC = () => {
  return (
    <section className="relative h-[100vh] overflow-hidden">
      {/* FIXED PARALLAX VIDEO LAYER */}
      <div className="fixed inset-0 -z-10">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source
            src="https://res.cloudinary.com/dxzhnns58/video/upload/v1763201687/6618336-uhd_3840_2160_24fps_yb7cwg.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark overlay (premium cinematic) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/55 to-black/95" />

        {/* Soft futuristic glow */}
        <div className="absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[180px]" />
        <div className="absolute bottom-[-250px] right-[-200px] h-[700px] w-[700px] rounded-full bg-green-500/10 blur-[200px]" />
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            Explore Our <span className="text-purple-500">Programmes</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300">
            Empowering students with industry-ready skills, hands-on training,
            and a future-focused curriculum to lead in tomorrow’s workforce.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-6 py-3 rounded-full shadow-lg transition">
              View All Programmes
            </button>

            <button className="bg-green-500 hover:bg-green-600 text-white text-lg px-6 py-3 rounded-full shadow-lg transition">
              Admission Enquiry
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgrammesHero;