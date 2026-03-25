import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Partner {
  name: string;
  logo: string;
  category: "government" | "industry" | "education" | "technology";
}

// const ACCENT_TEAL = "#4eeac8";
// const ACCENT_PURPLE = "#7c3aed";

const partners: Partner[] = [
  { name: "UGC", logo: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/logos/UGC.webp", category: "government" },
  { name: "NSDC", logo: "https://www.msu.edu.in/frontend_assets/images/Government-partners/govt-2.png", category: "government" },
  { name: "Sikkim", logo: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/logos/govt-of-sikkim.jpg", category: "government" },
  { name: "NAPS", logo: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/logos/NAPS.webp", category: "government" },
  { name: "NATS", logo: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/logos/NATS.webp", category: "government" },
  { name: "DGT", logo: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/logos/DGT.webp", category: "government" },
  { name: "Skill India", logo: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/logos/Skill-India-min.webp", category: "government" },
  { name: "TTAADC", logo: "https://www.msu.edu.in/frontend_assets/images/Government-partners/govt-5.png", category: "government" },
  { name: "Film School", logo: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/logos/image-filem-school.jpg", category: "education" },
  { name: "iAce", logo: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/logos/iAce.png", category: "technology" },
  { name: "Crowne Plaza", logo: "https://www.msu.edu.in/frontend_assets/images/industry-partners/Crowne_Plaza_logo_logotype.png", category: "industry" },
  { name: "Holiday Inn", logo: "https://www.msu.edu.in/frontend_assets/images/industry-partners/HOLIDAY_INN_EXPRESS.png", category: "industry" },
  { name: "D23", logo: "https://www.msu.edu.in/frontend_assets/images/industry-partners/d23-min.jpg", category: "industry" },
  { name: "Skilling-9", logo: "https://www.msu.edu.in/frontend_assets/images/industry-partners/skilling-9.png", category: "industry" },
  { name: "LCBS", logo: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/logos/LCBS.png", category: "education" },
  { name: "Don Bosco", logo: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/logos/Don+Bosco+Image.webp", category: "education" },
  { name: "Emversity", logo: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/website-images/emversity.jpg", category: "technology" },
  { name: "Logic Knots", logo: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/logos/Logic-Knots.png", category: "technology" },
];

const PartnersLogos: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | Partner["category"]>("all");

  const categories = ["all", "government", "industry", "education", "technology"] as const;

  const filteredPartners = activeFilter === "all" 
    ? partners 
    : partners.filter((p) => p.category === activeFilter);

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-purple-400 text-xs font-bold uppercase tracking-[0.3em] mb-8 backdrop-blur-md"
          >
            Network of Excellence
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none italic mb-8 text-pretty">
            Strategic <span className="text-purple-600">Collaborators</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            Uniting with Global Industry Leaders & Government Bodies to redefine the skilling landscape.
          </p>
          <div className="h-1.5 w-40 bg-purple-600 rounded-full mx-auto mt-10" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`
                px-8 py-3 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all duration-300
                ${activeFilter === cat 
                  ? "bg-purple-600 text-white shadow-[0_0_30px_rgba(124,58,237,0.3)]" 
                  : "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20"}
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Partners Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredPartners.map((partner) => (
              <motion.div
                key={partner.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="group relative"
              >
                <div className="aspect-[4/3] rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-xl flex items-center justify-center p-8 transition-all duration-500 hover:border-purple-500/30 hover:bg-zinc-900/60 overflow-hidden">
                  {/* Hover Sweep */}
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <img loading="lazy" decoding="async"                     src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  />
                  
                  {/* Tooltip Overlay */}
                  <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
                    <span className="text-[10px] uppercase font-black tracking-widest text-purple-400 text-center">
                      {partner.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersLogos;