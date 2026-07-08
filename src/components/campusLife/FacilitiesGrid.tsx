import React, { useRef } from "react";
import { motion } from "framer-motion";

const PremiumVideoCard = ({ 
  children, 
  className = "",
  onHoverStart,
  onHoverEnd
}: { 
  children: React.ReactNode; 
  className?: string;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}) => {
  const handleMouseLeave = () => {
    onHoverEnd();
  };

  return (
    <div
      onMouseEnter={onHoverStart}
      onMouseLeave={handleMouseLeave}
      className={`relative h-full w-full cursor-pointer transition-transform duration-300 hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  );
};

const facilities = [
  {
    title: "Equipment Simulation Labs",
    desc: "Dive into 200+ hours of virtual reality hazard mapping and machine operations.",
    poster: "https://images.unsplash.com/photo-1579294247262-4217116e16f7?auto=format&fit=crop&w=1200&q=80",
    video: "https://cdn.coverr.co/videos/coverr-vr-headset-user-4654/1080p.mp4",
    color: "from-[#050505] to-purple-900/40",
    span: "col-span-1 md:col-span-2 row-span-2"
  },
  {
    title: "Mining Training Yard",
    desc: "100 acres of live diagnostic and extraction practice.",
    poster: "https://images.unsplash.com/photo-1518341680650-70f9b60e6ce6?auto=format&fit=crop&w=800&q=80",
    video: "https://cdn.coverr.co/videos/coverr-heavy-machinery-moving-dirt-9345/1080p.mp4",
    color: "from-purple-900/40 to-black/80",
    span: "col-span-1"
  },
  {
    title: "VR Hazard Safety",
    desc: "Immersive hazard identification and emergency response training.",
    poster: "https://images.unsplash.com/photo-1622979135240-caea415b3992?auto=format&fit=crop&w=800&q=80",
    video: "https://cdn.coverr.co/videos/coverr-vr-headset-user-4654/1080p.mp4",
    color: "from-teal-900/40 to-black/80",
    span: "col-span-1"
  },
  {
    title: "Excavator/Crane Zones",
    desc: "Live field environments for heavy earthmoving.",
    poster: "https://images.unsplash.com/photo-1541829070764-84a7d30dee63?auto=format&fit=crop&w=1200&q=80",
    video: "https://cdn.coverr.co/videos/coverr-mining-excavator-working-1875/1080p.mp4",
    color: "from-black to-zinc-900/60",
    span: "col-span-1 md:col-span-2"
  }
];

const HoverVideoContainer = ({ fac }: { fac: typeof facilities[0] }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleHoverStart = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleHoverEnd = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <PremiumVideoCard onHoverStart={handleHoverStart} onHoverEnd={handleHoverEnd}>
      <div className="group relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">
        
        {/* Poster Image */}
        <img loading="lazy" decoding="async" 
          src={fac.poster} 
          alt={fac.title}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0"
        />

        {/* Cinematic Background Video (Hidden until hover) */}
        <video
          ref={videoRef}
          src={fac.video}
          poster={fac.poster}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-100 group-hover:scale-105"
        />
        
        {/* Gradient Overlays for Text Legibility */}
        <div className={`absolute inset-0 bg-gradient-to-t ${fac.color} mix-blend-multiply opacity-80`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
        
        {/* Content Container */}
        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end transform-gpu transition-all duration-500 z-10 pointer-events-none">
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3 group-hover:text-teal-400 transition-colors">
              {fac.title}
            </h3>
            <p className="text-sm md:text-base text-zinc-300 font-light max-w-md opacity-80 group-hover:opacity-100 transition-opacity">
              {fac.desc}
            </p>
            
            {/* Play Indicator */}
            <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
               <div className="w-0 h-0 border-t-4 border-b-4 border-l-6 border-transparent border-l-white ml-1" />
            </div>
        </div>
      </div>
    </PremiumVideoCard>
  )
}

const FacilitiesGrid: React.FC = () => {
  return (
    <section className="relative py-32 px-6 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Cinematic Header */}
        <div className="mb-20 flex flex-col lg:flex-row justify-between items-end gap-10">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-6 leading-none"
            >
              Core Training <br/> <span className="text-zinc-500">Experience.</span>
            </motion.h2>
          </div>
          <div className="max-w-md">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-lg text-zinc-400 font-light leading-relaxed"
            >
              Hover over modules to preview active sessions. Experience high-fidelity industrial operation before you even step foot in the cabin.
            </motion.p>
          </div>
        </div>

        {/* Premium Cinematic Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[350px] md:auto-rows-[450px]">
          {facilities.map((fac) => (
            <div key={fac.title} className={fac.span}>
               <HoverVideoContainer fac={fac} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesGrid;
