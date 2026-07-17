import React from "react";
import Slider from "react-slick";
import type { CustomArrowProps } from "react-slick";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

// slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Student Name Placeholder",
    role: "Course or Trade Placeholder",
    story: "CMS quote placeholder: add the student's real training experience, workshop moment, instructor support or placement preparation story here.",
    location: "Home district / state placeholder",
    image: "/About/carousel/Gallery_6.JPG",
    company: "Placement company placeholder",
    job: "Job role placeholder",
  },
  {
    name: "Student Name Placeholder",
    role: "Course or Trade Placeholder",
    story: "CMS quote placeholder: describe how practical training, safety discipline and peer learning helped this student prepare for work.",
    location: "Home district / state placeholder",
    image: "/About/carousel/Gallery_10.JPG",
    company: "Placement company placeholder",
    job: "Job role placeholder",
  },
  {
    name: "Student Name Placeholder",
    role: "Course or Trade Placeholder",
    story: "CMS quote placeholder: add a real video testimonial transcript or short written story from the student.",
    location: "Home district / state placeholder",
    image: "/About/carousel/Gallery_11.jpg",
    company: "Placement company placeholder",
    job: "Job role placeholder",
  }
];

const NextArrow = ({ onClick }: CustomArrowProps) => (
  <button
    onClick={onClick}
    className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-all duration-300"
  >
    <FaChevronRight />
  </button>
);

const PrevArrow = ({ onClick }: CustomArrowProps) => (
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
    <section id="stories" className="relative py-32 overflow-hidden bg-[#050505]">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* Apple-style minimalist header */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6"
          >
            From Training Floor to Career
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-400 font-light"
          >
            Video testimonials and written stories can be managed from the CMS without inventing placement data.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative px-4 md:px-12">
          <Slider {...settings} className="campus-slider overflow-visible">
            {testimonials.map((t, i) => (
              <div key={i} className="px-4 py-8">
                <div className="group relative h-full flex flex-col p-10 rounded-[2rem] bg-zinc-900 border border-white/5 backdrop-blur-3xl transition-all duration-500 hover:border-zinc-500/30">
                  
                  {/* Quote Icon */}
                  <div className="mb-7 flex items-center gap-4">
                    <img
                      src={t.image}
                      alt={`${t.name} portrait placeholder`}
                      loading="lazy"
                      className="h-16 w-16 rounded-2xl object-cover"
                    />
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-400">
                        Video / Story Placeholder
                      </p>
                      <p className="mt-1 text-sm text-zinc-500">{t.location}</p>
                    </div>
                  </div>

                  {/* Story */}
                  <div className="mb-10 flex-1">
                    <FaQuoteLeft className="mb-5 text-3xl text-zinc-700" />
                    <p className="text-zinc-300 text-lg md:text-xl leading-relaxed font-light tracking-wide">
                      "{t.story}"
                    </p>
                  </div>

                  {/* Sign-off */}
                  <div className="pt-6 border-t border-white/5">
                    <div>
                      <h4 className="text-lg font-bold text-white tracking-tight">
                        {t.name}
                      </h4>
                      <p className="text-xs text-teal-400 uppercase tracking-widest font-semibold mt-1">
                        {t.role}
                      </p>
                      <div className="mt-4 grid gap-2 text-xs text-zinc-500 sm:grid-cols-2">
                        <span>{t.company}</span>
                        <span>{t.job}</span>
                      </div>
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
