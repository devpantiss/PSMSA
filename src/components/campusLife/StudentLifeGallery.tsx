import React, { useRef } from "react";
import { motion } from "framer-motion";

const lifestyleFeatures = [
  {
    title: "Premium Accommodation",
    desc: "Executive hostels designed for deep recovery.",
    mediaType: "video",
    src: "https://cdn.coverr.co/videos/coverr-modern-minimalist-living-room-6178/1080p.mp4"
  },
  {
    title: "Nutritional Dining",
    desc: "High-performance meal plans crafted by dietary experts.",
    mediaType: "image",
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Fitness & Recreation",
    desc: "State-of-the-art gyms and sports courts for physical conditioning.",
    mediaType: "video",
    src: "https://cdn.coverr.co/videos/coverr-man-working-out-in-a-gym-5154/1080p.mp4"
  },
  {
    title: "Community Learning",
    desc: "Collaborative peer spaces for late-night study and planning.",
    mediaType: "image",
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
  }
];

const MediaContainer = ({ feat }: { feat: typeof lifestyleFeatures[0] }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (feat.mediaType === 'video' && videoRef.current) {
       videoRef.current.play().catch(_e => console.log('Autoplay blocked'));
    }
  }

  const handleMouseLeave = () => {
    if (feat.mediaType === 'video' && videoRef.current) {
       videoRef.current.pause();
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 bg-black cursor-pointer shadow-2xl"
    >
      {feat.mediaType === 'video' ? (
        <video 
          ref={videoRef}
          src={feat.src}
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-40"
        />
      ) : (
        <img 
          src={feat.src} 
          alt={feat.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-40"
        />
      )}
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        {feat.mediaType === 'video' && (
           <div className="w-8 h-8 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm flex items-center justify-center mb-6 opacity-80 group-hover:opacity-100">
             <div className="w-0 h-0 border-t-[3px] border-b-[3px] border-l-[5px] border-transparent border-l-white ml-0.5" />
           </div>
        )}
        <h3 className="text-xl font-bold text-white leading-tight mb-2 tracking-tight group-hover:text-purple-400 transition-colors">
          {feat.title}
        </h3>
        <p className="text-sm text-zinc-400 font-light">
          {feat.desc}
        </p>
      </div>
    </motion.div>
  )
}

const StudentLifeGallery: React.FC = () => {
  return (
    <section className="relative py-32 px-6 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
             <motion.h2 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-4"
             >
               Resort Lifestyle.
             </motion.h2>
             <motion.p
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-lg text-zinc-400 font-light max-w-xl"
             >
               World-class training demands world-class recovery. Hover to experience life on the Pantiss campus.
             </motion.p>
          </div>
        </div>

        {/* Video/Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {lifestyleFeatures.map((feat, _i) => (
             <MediaContainer key={feat.title} feat={feat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentLifeGallery;