import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ChevronDown, Pause, Play } from "lucide-react";

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const parallaxY = useSpring(scrollYProgress, { stiffness: 80, damping: 30 });

  const togglePause = () => {
    const v = videoRef.current;
    if (!v) return;
    if (isPaused) {
      v.play().catch(() => {});
      setIsPaused(false);
    } else {
      v.pause();
      setIsPaused(true);
    }
  };

  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.play().catch(() => {});
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="overview"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-[#050505]"
      aria-labelledby="hero-headline"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0"
          style={{ y: parallaxY }}
        >
          {!videoLoaded && (
            <img
              src="/homepage/mine.jpg"
              alt="Campus training environment"
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            controls={showControls || isPaused}
            playsInline
            className={`w-full h-full object-cover scale-105 transition-opacity duration-1000 ${videoLoaded ? "opacity-100" : "opacity-0"}`}
            onLoadedData={() => setVideoLoaded(true)}
            aria-label="Campus training montage video"
            poster="/homepage/mine.jpg"
          >
            <source src="/lab/lab_hero.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/55 to-[#050505]/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center pt-32 pb-24">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/5 px-5 py-2 backdrop-blur-md"
        >
          <span className="h-2 w-2 rounded-full bg-[#4eeac8] animate-pulse" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/65">
            Pantiss Skill University · Campus Life
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          id="hero-headline"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.05] text-white mb-7"
        >
          Campus Life That{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg, #4eeac8, #38bdf8)" }}
          >
            Builds Careers
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl text-lg md:text-xl text-white/60 leading-relaxed font-light mb-12"
        >
          Experience an industry-connected learning environment where practical training, modern technology, discipline and teamwork prepare you for real careers.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={() => {
              document.getElementById("overview")?.nextElementSibling?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-widest text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_32px_rgba(78,234,200,0.35)]"
            style={{ background: "linear-gradient(90deg,#4eeac8,#38bdf8)" }}
          >
            Explore Campus Life
          </button>
          <button
            onClick={(event) => {
              event.preventDefault();
              const v = videoRef.current;
              if (!v) return;
              setShowControls(true);
              v.play().catch(() => {});
              setIsPaused(false);
              v.focus();
            }}
            className="px-8 py-4 rounded-full border border-white/20 font-semibold text-sm uppercase tracking-widest text-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/40"
          >
            Watch Campus Film
          </button>
        </motion.div>
      </div>

      {/* Video pause/play control */}
      <button
        onClick={togglePause}
        aria-label={isPaused ? "Play background video" : "Pause background video"}
        className="absolute bottom-8 right-8 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-sm text-white/70 hover:text-white hover:border-white/40 transition-all"
      >
        {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
      </button>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-white/35">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-white/35" />
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050505] to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
