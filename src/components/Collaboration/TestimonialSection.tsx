import React from "react";
import Slider from "react-slick";
import type { CustomArrowProps } from "react-slick";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaMoneyBillWave, FaChartLine } from "react-icons/fa";

// slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Rohit Kumar",
    role: "Electrical Automation Engineer",
    company: "Larsen & Toubro",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    story: "Pantiss provided the exact bridging I needed between my degree and heavy-industry requirements. The hands-on automation labs were identical to the control rooms I now manage at L&T.",
    package: "6.2 LPA",
    outcome: "Promoted to Team Lead",
    tenure: "Placed in 2024"
  },
  {
    name: "Sunita Sahu",
    role: "Senior HEMM Operator",
    company: "Tata Steel",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    story: "Operating simulators for 200+ hours at the university gave me the confidence to handle real mining equipment. I was the only woman in my batch to secure an international-standard certification.",
    package: "5.8 LPA",
    outcome: "Certified Global Operator",
    tenure: "Placed in 2023"
  },
  {
    name: "Aman Verma",
    role: "Industrial Maintenance Specialist",
    company: "Adani Group",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    story: "The apprenticeship model is the real game-changer here. I spent 6 months inside an Adani plant while finishing my course, which led directly to a high-package full-time offer.",
    package: "6.5 LPA",
    outcome: "Apprentice to FT Conversion",
    tenure: "Placed in 2024"
  },
  {
    name: "Deepak Mishra",
    role: "Site Safety Supervisor",
    company: "Vedanta Resources",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    story: "The deep focus on statutory compliance and safety at Pantiss made me stand out during the interview process. I'm now supervising safety protocols for a team of 150+ workers.",
    package: "7.0 LPA",
    outcome: "Fast-track Career Growth",
    tenure: "Placed in 2023"
  },
];

const NextArrow = ({ onClick }: CustomArrowProps) => (
  <button
    onClick={onClick}
    className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300"
  >
    <FaChevronRight />
  </button>
);

const PrevArrow = ({ onClick }: CustomArrowProps) => (
  <button
    onClick={onClick}
    className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300"
  >
    <FaChevronLeft />
  </button>
);

const PlacementSuccessStories: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 text-purple-500 font-black uppercase tracking-[0.4em] text-xs mb-6"
          >
            Verified Career Outcomes
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none italic mb-8 text-pretty">
            Alumni <span className="text-purple-600">Spotlight</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg font-light leading-relaxed">
            Real success stories of students who transitioned from skill-based learning to high-value industrial careers.
          </p>
          <div className="h-1.5 w-32 bg-purple-600 rounded-full mx-auto mt-8" />
        </div>

        {/* Carousel Container */}
        <div className="relative px-4 md:px-0">
          <Slider {...settings} className="testimonial-slider overflow-visible">
            {testimonials.map((t, i) => (
              <div key={i} className="px-4 py-16">
                <div className="group relative h-full flex flex-col p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-3xl transition-all duration-500 hover:border-purple-500/30 min-h-[480px]">
                  
                  {/* Student Image */}
                  <div className="absolute -top-12 left-8">
                    <div className="relative">
                      <img loading="lazy" decoding="async"                         src={t.image}
                        alt={t.name}
                        className="w-24 h-24 rounded-3xl object-cover border-2 border-white/10 shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:border-purple-500/50"
                      />
                      <div className="absolute inset-0 rounded-3xl bg-purple-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  {/* Top Badges */}
                  <div className="flex flex-col items-end gap-2 mt-2 ml-auto">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-black uppercase tracking-widest">
                       <FaMoneyBillWave />
                       {t.package}
                    </span>
                    <span className="text-[10px] text-gray-600 font-bold uppercase tracking-wider">{t.tenure}</span>
                  </div>

                  {/* Quote Icon */}
                  <div className="absolute bottom-32 right-8 text-purple-500/10 text-6xl pointer-events-none">
                    <FaQuoteLeft />
                  </div>

                  {/* Story */}
                  <div className="mt-10 mb-8 flex-1">
                    <p className="text-gray-400 text-[13px] md:text-sm leading-relaxed italic font-light">
                      "{t.story}"
                    </p>
                  </div>

                  {/* Outcome Detail */}
                  <div className="mb-6 flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                     <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-xs">
                        <FaChartLine />
                     </div>
                     <span className="text-[11px] font-black uppercase tracking-widest text-white/80">{t.outcome}</span>
                  </div>

                  {/* Sign-off */}
                  <div className="pt-6 border-t border-white/5">
                    <h4 className="text-lg font-black text-white uppercase tracking-tighter italic">
                      {t.name}
                    </h4>
                    <p className="text-[10px] text-purple-500 uppercase tracking-[0.2em] font-bold mt-1">
                      {t.role} @ {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      
      <style>{`
        .testimonial-slider .slick-dots li button:before {
          color: #7c3aed;
        }
        .testimonial-slider .slick-dots li.slick-active button:before {
          color: #7c3aed;
        }
      `}</style>
    </section>
  );
};

export default PlacementSuccessStories;
