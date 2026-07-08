import React from "react";
import Slider from "react-slick";
import type { CustomArrowProps } from "react-slick";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaHandshake, FaFileSignature } from "react-icons/fa";

const mouPartners = [
  {
    name: "UGC",
    logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734950000/ugc.png",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
    type: "Regulatory Board"
  },
  {
    name: "NSDC",
    logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734950000/nsdc.png",
    image: "https://images.unsplash.com/photo-1521790360285-69b7e5d5a37f?auto=format&fit=crop&w=800&q=80",
    type: "National Council"
  },
  {
    name: "Skill India",
    logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734950000/skillindia.png",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    type: "Government Initiative"
  },
  {
    name: "AICTE",
    logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734950000/aicte.png",
    image: "https://images.unsplash.com/photo-1524169358666-79f22534bc6e?auto=format&fit=crop&w=800&q=80",
    type: "Technical Council"
  },
  {
    name: "NASSCOM",
    logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734950000/nasscom.png",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    type: "Industry Body"
  },
];

const NextArrow = ({ onClick }: CustomArrowProps) => (
  <button
    onClick={onClick}
    className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300"
  >
    <FaChevronRight />
  </button>
);

const PrevArrow = ({ onClick }: CustomArrowProps) => (
  <button
    onClick={onClick}
    className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300"
  >
    <FaChevronLeft />
  </button>
);

const MouSection: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 text-purple-400 font-black uppercase tracking-[0.4em] text-xs mb-6 px-6 py-2 rounded-full bg-white/5 border border-white/10"
          >
            <FaHandshake className="animate-pulse" />
            Institutional Alliances
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none italic mb-8">
            Strategic <span className="text-purple-600">MoU</span> Partners
          </h2>
          <div className="h-1.5 w-32 bg-purple-600 rounded-full mx-auto" />
        </div>

        {/* Carousel Container */}
        <div className="relative px-4 md:px-0">
          <Slider {...settings} className="mou-slider overflow-visible">
            {mouPartners.map((partner, i) => (
              <div key={i} className="px-4 py-12">
                <div className="group relative h-full rounded-[2.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-3xl overflow-hidden transition-all duration-500 hover:border-purple-500/30">
                  
                  {/* Partner Image with Overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <img loading="lazy" decoding="async"                       src={partner.image}
                      alt={partner.name}
                      className="w-full h-full object-cover opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
                    
                    {/* Logo Overlay */}
                    <div className="absolute top-6 left-6 p-3 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md transition-transform group-hover:scale-105">
                      <img loading="lazy" decoding="async"                         src={partner.logo}
                        alt={partner.name + " logo"}
                        className="h-8 w-auto object-contain grayscale invert opacity-80 group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-100 transition-all"
                      />
                    </div>

                    <div className="absolute bottom-6 left-8 flex items-center gap-2 text-purple-400 text-[10px] font-black uppercase tracking-widest">
                       <FaFileSignature />
                       Verified Partnership
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-8">
                    <h3 className="text-xl font-black text-white uppercase tracking-tighter italic mb-4 transition-colors group-hover:text-purple-400">
                      {partner.name}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed font-medium uppercase tracking-widest mb-6">
                      {partner.type} • Innovation & Knowledge Exchange
                    </p>
                    
                    {/* Decorative Corner Element */}
                    <div className="flex items-center gap-1 opacity-10 group-hover:opacity-100 transition-opacity">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-1 h-3 bg-purple-500/50 rounded-full" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      
      <style>{`
        .mou-slider .slick-dots li button:before {
          color: #7c3aed;
        }
        .mou-slider .slick-dots li.slick-active button:before {
          color: #7c3aed;
        }
      `}</style>
    </section>
  );
};

export default MouSection;
