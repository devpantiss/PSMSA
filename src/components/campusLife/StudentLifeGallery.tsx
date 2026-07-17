import React from "react";
import { motion } from "framer-motion";

const lifestyleFeatures = [
  {
    title: "Team-Building Activities",
    desc: "Structured activities help trainees build confidence, cooperation and shop-floor communication.",
    type: "Student Community",
    src: "/About/carousel/Gallery_5.JPG"
  },
  {
    title: "Sports and Fitness",
    desc: "Daily movement, games and fitness routines support the stamina needed for industrial careers.",
    type: "Wellbeing",
    src: "/InfraPage/playground.jpg"
  },
  {
    title: "Skill Demonstrations",
    desc: "Trainees present workshop tasks, tool handling and safety-led practical learning to peers and visitors.",
    type: "Technical Culture",
    src: "/images/weld.jpg"
  },
  {
    title: "Celebrations and Graduation",
    desc: "Milestones are recognised through certificates, campus events, family moments and placement readiness.",
    type: "Campus Events",
    src: "/About/carousel/Gallery_15.jpeg"
  },
  {
    title: "Peer Learning Sessions",
    desc: "Senior trainees, instructors and batchmates work together to strengthen fundamentals and discipline.",
    type: "Mentoring",
    src: "/About/carousel/Gallery_4.JPG"
  },
  {
    title: "Community Engagement",
    desc: "Projects and outreach activities help students connect technical learning with real social impact.",
    type: "Leadership",
    src: "/About/carousel/Gallery_7.JPG"
  }
];

const MediaContainer = ({ feat }: { feat: typeof lifestyleFeatures[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative aspect-[4/5] overflow-hidden rounded-[24px] border border-white/10 bg-black shadow-2xl"
    >
      <img
        loading="lazy"
        decoding="async"
        src={feat.src}
        alt={feat.title}
        className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-1000 group-hover:scale-105 group-hover:opacity-55"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.24em] text-[#4eeac8]">
          {feat.type}
        </p>
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
    <section id="community" className="relative py-32 px-6 bg-[#050505] overflow-hidden">
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
               Student Community.
             </motion.h2>
             <motion.p
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-lg text-zinc-400 font-light max-w-xl"
             >
               Campus life extends beyond workshops through sports, clubs, skill demonstrations, celebrations, peer learning and community engagement.
             </motion.p>
          </div>
        </div>

        {/* Video/Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lifestyleFeatures.map((feat) => (
             <MediaContainer key={feat.title} feat={feat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentLifeGallery;
