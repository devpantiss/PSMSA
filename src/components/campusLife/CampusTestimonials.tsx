import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

// slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Vikram S.",
    role: "Certified Operator Candidate",
    story: "The transition from VR simulation to the live 100-acre track was flawless. I felt like I had already been operating heavy machinery for years before I even stepped into the real cab.",
    location: "Zone Alpha Training"
  },
  {
    name: "Rahul M.",
    role: "Industrial Logistics Trainee",
    story: "Living in the executive hostels and eating performance-focused meals completely changed my mindset. It's not a school; it's a high-performance training camp.",
    location: "Residential Campus"
  },
  {
    name: "Priya D.",
    role: "Safety Protocol Lead",
    story: "The hazard modules are incredibly immersive. Experiencing emergency shut-downs in a safe, controlled environment builds a reflexes that books simply cannot teach.",
    location: "VR Hazard Safety Labs"
  }
];

const NextArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-all duration-300"
  >
    <FaChevronRight />
  </button>
);

const PrevArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-all duration-300"
  >
    <FaChevronLeft />
  </button>
);

const CampusTestimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="relative py-32 overflow-hidden bg-[#050505]">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* Apple-style minimalist header */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6"
          >
            Real Experience.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-400 font-light"
          >
            Insights from candidates within the ecosystem.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative px-4 md:px-12">
          <Slider {...settings} className="campus-slider overflow-visible">
            {testimonials.map((t, i) => (
              <div key={i} className="px-4 py-8">
                <div className="group relative h-full flex flex-col p-10 rounded-[2rem] bg-zinc-900 border border-white/5 backdrop-blur-3xl transition-all duration-500 hover:border-zinc-500/30">
                  
                  {/* Quote Icon */}
                  <div className="mb-8 text-zinc-700 text-4xl">
                    <FaQuoteLeft />
                  </div>

                  {/* Story */}
                  <div className="mb-10 flex-1">
                    <p className="text-zinc-300 text-lg md:text-xl leading-relaxed font-light tracking-wide">
                      "{t.story}"
                    </p>
                  </div>

                  {/* Sign-off */}
                  <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 border border-zinc-600" />
                    <div>
                      <h4 className="text-lg font-bold text-white tracking-tight">
                        {t.name}
                      </h4>
                      <p className="text-xs text-teal-400 uppercase tracking-widest font-semibold mt-1">
                        {t.role} • {t.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      
      <style>{`
        .campus-slider .slick-dots li button:before {
          color: #fff;
          opacity: 0.2;
        }
        .campus-slider .slick-dots li.slick-active button:before {
          color: #fff;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default CampusTestimonials;
