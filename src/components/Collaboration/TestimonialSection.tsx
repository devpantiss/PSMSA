import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// ⚠️ REQUIRED slick styles (import ONCE globally if not already)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* ---------------- DATA ---------------- */

const testimonials = [
  {
    name: "Rohit Kumar",
    role: "Electrical Technician",
    company: "Larsen & Toubro",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    story:
      "Pantiss transformed my skills into real employability through hands-on labs and live industry exposure.",
    outcome: "Placed within 45 days",
  },
  {
    name: "Sunita Sahu",
    role: "HEMM Operator",
    company: "Tata Steel",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    story:
      "From simulators to real mining equipment, Pantiss prepared me beyond expectations.",
    outcome: "International certification",
  },
  {
    name: "Aman Verma",
    role: "Industrial Fitter",
    company: "Adani Group",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    story:
      "The apprenticeship pathway bridged my training directly into full-time employment.",
    outcome: "Converted from apprentice",
  },
  {
    name: "Deepak Mishra",
    role: "Mining Supervisor",
    company: "Vedanta",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    story:
      "Pantiss gave me leadership exposure and operational confidence inside active mines.",
    outcome: "Promoted within 1 year",
  },
  {
    name: "Puja Naik",
    role: "Safety Officer",
    company: "JSPL",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    story:
      "The safety-focused curriculum helped me transition into a compliance leadership role.",
    outcome: "Certified Safety Professional",
  },
  {
    name: "Kunal Singh",
    role: "Mechanical Technician",
    company: "L&T Construction",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
    story:
      "Pantiss made me job-ready with real equipment, not just theory.",
    outcome: "Placed in core industry",
  },
  {
    name: "Anita Rao",
    role: "Plant Operations Executive",
    company: "JSW Steel",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    story:
      "Industry immersion and mentoring helped me secure a high-responsibility role.",
    outcome: "Campus placement",
  },
];

/* ---------------- ARROWS ---------------- */

const NextArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute -right-6 top-1/2 -translate-y-1/2 z-20
               bg-purple-600 hover:bg-purple-700 text-white
               p-3 rounded-full shadow-xl"
  >
    <FaChevronRight />
  </button>
);

const PrevArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute -left-6 top-1/2 -translate-y-1/2 z-20
               bg-purple-600 hover:bg-purple-700 text-white
               p-3 rounded-full shadow-xl"
  >
    <FaChevronLeft />
  </button>
);

/* ---------------- COMPONENT ---------------- */

const PlacementSuccessStories: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
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
    <section className="relative py-12 overflow-hidden">
      {/* Mining Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black/95" />

      {/* Ambient Glow */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-green-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            <span className="text-green-500">Mining</span>{" "}
            <span className="text-purple-600">Success Stories</span>
          </h2>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto text-lg">
            Real careers forged inside active mines and industrial plants.
          </p>
        </div>

        {/* Carousel */}
        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} className="px-4 pt-14">
              {/* CARD */}
              <div
                className="relative bg-black/60 backdrop-blur-xl
                           border border-green-500/30 rounded-2xl
                           p-8 pt-24
                           transition-all duration-500
                           shadow-lg hover:border-purple-600/60"
              >
                {/* Avatar (FULLY VISIBLE FIX) */}
                <div className="absolute -top-14 left-1/2 -translate-x-1/2">
                  <div className="relative">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-32 h-32 rounded-full object-cover
                                 border-4 border-purple-600/60
                                 shadow-2xl"
                    />
                    <div className="absolute inset-0 rounded-full bg-purple-600/30 blur-xl -z-10" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    “{t.story}”
                  </p>

                  <span
                    className="inline-block mb-6 px-4 py-1 rounded-full text-xs font-semibold
                               bg-gradient-to-r from-green-500 to-green-600 text-black shadow-md"
                  >
                    {t.outcome}
                  </span>

                  <h4 className="text-white font-semibold text-lg">
                    {t.name}
                  </h4>
                  <p className="text-sm text-purple-400 mt-1">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* CTA */}
        <div className="text-center mt-24">
          <a
            href="/placements"
            className="inline-block px-10 py-4 rounded-xl font-semibold
                       bg-gradient-to-r from-green-500 to-purple-600 text-black
                       hover:scale-105 transition-transform shadow-xl"
          >
            Explore Placement Outcomes
          </a>
        </div>
      </div>
    </section>
  );
};

export default PlacementSuccessStories;