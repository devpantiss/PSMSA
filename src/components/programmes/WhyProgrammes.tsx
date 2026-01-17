import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ACCENT = "#9333ea"; // purple-600

const WhyProgrammesBanner: React.FC = () => {
  const reasons = [
    {
      title: "Industry-Aligned Training",
      text: "Our courses are co-created with leading companies to match real-world job requirements.",
      image:
        "https://images.unsplash.com/photo-1581090700227-4c4f50a1c2a9?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Hands-On Learning",
      text: "Practical workshops and live projects help you gain real experience.",
      image:
        "https://images.unsplash.com/photo-1581091215367-59ab6c9a5f3b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Career Support",
      text: "From resume building to placement drives, we support you every step of the way.",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Future-Ready Skills",
      text: "Stay ahead with training in emerging fields like Green Jobs, AI, and Smart Infrastructure.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Expert Faculty",
      text: "Learn from industry professionals and domain experts with years of experience.",
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "State-of-the-Art Facilities",
      text: "Modern labs and smart classrooms ensure you learn with the latest tools and technologies.",
      image:
        "https://images.unsplash.com/photo-1581093448799-1c2c0e6e04f6?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Affordable & Accessible",
      text: "We make quality training affordable and accessible to all, bridging the skills gap.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Global Opportunities",
      text: "Gain skills that open doors to jobs in both domestic and international markets.",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 650,
    autoplaySpeed: 4200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    adaptiveHeight: false,
  };

  return (
    <section className="relative py-16 w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1920&q=80')",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/95" />

      {/* Futuristic background effects */}
      <div className="pointer-events-none absolute inset-0">
        {/* purple glow blobs */}
        <div
          className="absolute -top-48 left-[-160px] w-[520px] h-[520px] rounded-full blur-[200px] opacity-40"
          style={{ backgroundColor: `${ACCENT}26` }}
        />
        <div
          className="absolute bottom-[-240px] right-[-200px] w-[600px] h-[600px] rounded-full blur-[220px] opacity-35"
          style={{ backgroundColor: `${ACCENT}22` }}
        />

        {/* sci-fi grid */}
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(147,51,234,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.22)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:18px_18px]" />

        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.95)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 w-11/12 max-w-7xl mx-auto text-white">
        {/* Left Section */}
        <div className="flex flex-col justify-center">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/75 backdrop-blur-xl">
            <span
              className="h-2 w-2 rounded-full animate-pulse"
              style={{ backgroundColor: ACCENT }}
            />
            Career-first • Industry-ready • Future-proof
          </p>

          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
            Why Our{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${ACCENT}, rgba(147,51,234,0.55))`,
              }}
            >
              Programmes
            </span>
            ?
          </h1>

          <p className="mt-5 text-base md:text-lg text-white/70 leading-relaxed max-w-xl">
            Because we don’t just train for jobs — we build futures. Our
            programmes focus on{" "}
            <span className="text-white font-semibold">industry-aligned skills</span>,{" "}
            <span className="text-white font-semibold">hands-on experience</span>, and
            holistic growth, preparing you to thrive in a rapidly changing world.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {["Hands-on Labs", "Industry Mentors", "Placement Pathways"].map((x) => (
              <span
                key={x}
                className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs text-white/70 backdrop-blur-xl"
              >
                {x}
              </span>
            ))}
          </div>
        </div>

        {/* Right Section (Carousel) */}
        <div className="w-full">
          <div className="relative rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
            <Slider {...sliderSettings}>
              {reasons.map((reason, index) => (
                <div key={index} className="px-2">
                  <div
                    className="relative rounded-2xl h-[320px] md:h-[360px] overflow-hidden shadow-xl border border-white/10"
                    style={{
                      backgroundImage: `url(${reason.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20" />

                    {/* premium top badge */}
                    <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs text-white/80 backdrop-blur-xl">
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ backgroundColor: ACCENT }}
                      />
                      Reason {index + 1}
                    </div>

                    {/* content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl p-5">
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                          {reason.title}
                        </h3>
                        <p className="mt-2 text-sm md:text-base text-white/70 leading-relaxed">
                          {reason.text}
                        </p>

                        {/* micro glow underline */}
                        <div className="mt-4 h-[2px] w-20 rounded-full"
                          style={{
                            background: `linear-gradient(to right, ${ACCENT}, transparent)`,
                          }}
                        />
                      </div>
                    </div>

                    {/* hover glow */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition duration-500">
                      <div
                        className="absolute -bottom-28 -right-28 w-72 h-72 rounded-full blur-[120px]"
                        style={{ backgroundColor: `${ACCENT}22` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            {/* Custom slick dots styling */}
            <style>
              {`
                .slick-dots li button:before {
                  font-size: 10px;
                  color: rgba(255,255,255,0.35);
                  opacity: 1;
                }
                .slick-dots li.slick-active button:before {
                  color: ${ACCENT};
                  opacity: 1;
                }
              `}
            </style>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 w-full h-[2px]"
        style={{
          background: `linear-gradient(to right, transparent, ${ACCENT}, transparent)`,
          opacity: 0.95,
        }}
      />
    </section>
  );
};

export default WhyProgrammesBanner;
