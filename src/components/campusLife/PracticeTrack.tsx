import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const fleetStats = [
  { label: "Haulage Routes", value: "100 acre" },
  { label: "Operator Drills", value: "HEMM" },
  { label: "Fleet Modules", value: "Loader / Truck / Excavator" },
];

const FLEET_VIDEO_URL =
  "https://cdn.coverr.co/videos/coverr-mining-excavator-working-1875/1080p.mp4";
const FLEET_POSTER_URL =
  "https://images.unsplash.com/photo-1541829070764-84a7d30dee63?auto=format&fit=crop&w=1600&q=80";

const PracticeTrack: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.35 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVisible) {
      video.play().catch(() => {});
      return;
    }

    video.pause();
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#050505] px-6 py-28">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#050505] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050505] to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="max-w-xl"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.32em] text-teal-300">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
            Mining Fleet Yard
          </div>

          <h2 className="text-4xl font-bold leading-none tracking-tight text-white md:text-6xl">
            Live Fleet Training,
            <span className="block text-zinc-500">built around real operations.</span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-zinc-400 md:text-lg">
            A direct look at mining equipment operations across haulage,
            excavation, and loading zones where candidates build field confidence
            before moving into active industrial environments.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {fleetStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
              >
                <div className="text-lg font-semibold text-white">{stat.value}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-zinc-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 shadow-[0_40px_100px_rgba(0,0,0,0.45)]"
        >
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="metadata"
            poster={FLEET_POSTER_URL}
            className="aspect-[16/10] w-full object-cover"
          >
            <source src={FLEET_VIDEO_URL} type="video/mp4" />
          </video>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex flex-wrap items-end justify-between gap-4 p-6 md:p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-300">
                Field Exposure
              </p>
              <p className="mt-2 max-w-lg text-sm text-zinc-300">
                Real equipment context across supervised routes, loading cycles,
                and safety-led operating routines.
              </p>
            </div>
            <div className="rounded-full border border-white/15 bg-black/40 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/80 backdrop-blur">
              Fleet Practice
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PracticeTrack;
