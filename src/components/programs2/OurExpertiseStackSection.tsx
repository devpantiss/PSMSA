import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

/* ===================== TYPES ===================== */

type JobRole = {
  title: string;
  image: string;
};

type Programme = {
  title: string;
  description: string;
  image: string;
  duration: string;
  mode: string;
  certification: string;
  idealFor: string;
  jobRoles: JobRole[];
  path: string;
};

/* ===================== DATA ===================== */

const PROGRAMMES: Programme[] = [
  {
    title: "Diploma / Polytechnic",
    description:
      "Comprehensive technical education preparing students for supervisory and technician roles across core industries.",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762421119/diploma_diqahi.avif",
    duration: "2–3 Years",
    mode: "Full-Time / Hybrid",
    certification: "State & Industry Recognised",
    idealFor: "12th Pass / Working Technicians",
    jobRoles: [
      {
        title: "Junior Engineer",
        image:
          "https://images.unsplash.com/photo-1581091215367-59ab6c1c9b66",
      },
      {
        title: "Maintenance Supervisor",
        image:
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      },
      {
        title: "Site Technician",
        image:
          "https://images.unsplash.com/photo-1581093458791-9f3c3900df47",
      },
      {
        title: "Production Executive",
        image:
          "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0",
      },
      {
        title: "Quality Inspector",
        image:
          "https://images.unsplash.com/photo-1581092588429-62f09c6b4b5f",
      },
    ],
    path: "/our-programmes/diploma-programs",
  },

  {
    title: "Industrial Training Institute (ITI)",
    description:
      "Hands-on trade training focused on job-ready skills for high-demand blue-collar sectors.",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762421038/iti_pld6fw.avif",
    duration: "6–24 Months",
    mode: "Full-Time",
    certification: "NCVT / SCVT",
    idealFor: "10th / 12th Pass",
    jobRoles: [
      {
        title: "Electrician",
        image:
          "https://images.unsplash.com/photo-1581092160607-ee22621dd758",
      },
      {
        title: "Fitter",
        image:
          "https://images.unsplash.com/photo-1581091870627-3a9c2c1a79f7",
      },
      {
        title: "Welder",
        image:
          "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60",
      },
      {
        title: "Turner",
        image:
          "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
      },
      {
        title: "Mechanic",
        image:
          "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
      },
    ],
    path: "/our-programmes/iti-program",
  },

  {
    title: "Upskilling & Reskilling",
    description:
      "Short-duration programs designed to upgrade existing workforce skills for new technologies and roles.",
    image: "/homepage/Programs/workmen.jpg",
    duration: "1–6 Months",
    mode: "Blended",
    certification: "Industry Aligned",
    idealFor: "Working Professionals",
    jobRoles: [
      {
        title: "Maintenance Technician",
        image:
          "https://images.unsplash.com/photo-1581093458791-9f3c3900df47",
      },
      {
        title: "Shift Supervisor",
        image:
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      },
      {
        title: "Operations Executive",
        image:
          "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0",
      },
      {
        title: "Multi-Skilled Worker",
        image:
          "https://images.unsplash.com/photo-1581091215367-59ab6c1c9b66",
      },
    ],
    path: "/our-programmes/upskilling-and-reskilling-program",
  },

  {
    title: "Women in Mining",
    description:
      "Empowering women with certified, safety-first pathways into mining and heavy industry roles.",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762167481/Gemini_Generated_Image_dm4793dm4793dm47_obiynh.png",
    duration: "8–12 Weeks",
    mode: "Residential / Hybrid",
    certification: "Industry Certified",
    idealFor: "Women Candidates",
    jobRoles: [
      {
        title: "Mining Operator",
        image:
          "https://images.unsplash.com/photo-1542339147-17b88b5f7a9f",
      },
      {
        title: "Safety Assistant",
        image:
          "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
      },
      {
        title: "Plant Technician",
        image:
          "https://images.unsplash.com/photo-1581093458791-9f3c3900df47",
      },
      {
        title: "Equipment Handler",
        image:
          "https://images.unsplash.com/photo-1581091215367-59ab6c1c9b66",
      },
    ],
    path: "/our-programmes/women-in-mining",
  },

  {
    title: "Operator Licensing & Certification",
    description:
      "Formal licensing programs to enhance safety compliance and employability of equipment operators.",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761745242/IMG_9085_tkrncl_1_1_cc29gu.jpg",
    duration: "8–12 Weeks",
    mode: "On-Ground",
    certification: "Govt / OEM Certified",
    idealFor: "Machine Operators",
    jobRoles: [
      {
        title: "HEMM Operator",
        image:
          "https://images.unsplash.com/photo-1542339147-17b88b5f7a9f",
      },
      {
        title: "Crane Operator",
        image:
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      },
      {
        title: "Forklift Operator",
        image:
          "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
      },
      {
        title: "Excavator Operator",
        image:
          "https://images.unsplash.com/photo-1581091215367-59ab6c1c9b66",
      },
    ],
    path: "/our-programmes/operator-licensing",
  },

  {
    title: "International Mobility Program",
    description:
      "Global-standard training aligned with overseas employment and international job readiness.",
    image: "/solutions_banner.webp",
    duration: "18–24 Weeks",
    mode: "Hybrid",
    certification: "Global Standards",
    idealFor: "International Aspirants",
    jobRoles: [
      {
        title: "Overseas Technician",
        image:
          "https://images.unsplash.com/photo-1581093458791-9f3c3900df47",
      },
      {
        title: "Plant Operator",
        image:
          "https://images.unsplash.com/photo-1542339147-17b88b5f7a9f",
      },
      {
        title: "Logistics Associate",
        image:
          "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0",
      },
      {
        title: "Maintenance Specialist",
        image:
          "https://images.unsplash.com/photo-1581091215367-59ab6c1c9b66",
      },
    ],
    path: "/our-programmes/international-mobility",
  },
];


/* ===================== MAIN COMPONENT ===================== */

export default function OurProgrammesScrollStack() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLDivElement>(".program-slide");

      cards.forEach((card, i) => {
        gsap.set(card, {
          opacity: i === 0 ? 1 : 0,
          y: i === 0 ? 0 : 120,
          filter: i === 0 ? "blur(0px)" : "blur(8px)",
          pointerEvents: i === 0 ? "auto" : "none",
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${(PROGRAMMES.length - 1) * 650}`,
          pin: true,
          scrub: 1,
          onUpdate: (self) => {
            const idx = Math.round(
              self.progress * (PROGRAMMES.length - 1)
            );
            setActiveIndex(idx);
          },
        },
      });

      for (let i = 0; i < cards.length - 1; i++) {
        tl.to(cards[i], {
          opacity: 0,
          y: -80,
          filter: "blur(8px)",
          pointerEvents: "none",
        }).to(cards[i + 1], {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          pointerEvents: "auto",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#07040E] text-white pt-40"
    >
      <div className="px-6 py-20 flex gap-12">
        {/* LEFT MENU */}
        <aside className="w-1/4">
          <div className="sticky top-20">
            <h2 className="text-5xl font-light leading-tight">
              /OUR <br /> PROGRAMMES
            </h2>

            <div className="mt-10 space-y-4">
              {PROGRAMMES.map((p, i) => (
                <div
                  key={p.title}
                  className={`py-4 border-b border-white/15 ${
                    i === activeIndex ? "text-white" : "text-white/40"
                  }`}
                >
                  {p.title}
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* RIGHT STACK */}
        <div className="w-3/4 relative h-[560px]">
          {PROGRAMMES.map((p) => (
            <div key={p.title} className="program-slide absolute inset-0">
              <ProgrammeCard programme={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== CARD ===================== */

function ProgrammeCard({ programme }: { programme: Programme }) {
  const rolesRef = useRef<HTMLDivElement | null>(null);

  const scrollRoles = (dir: "prev" | "next") => {
    rolesRef.current?.scrollBy({
      left: dir === "next" ? 280 : -280,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative h-full w-full rounded-2xl overflow-hidden grid grid-cols-12 text-white shadow-[0_30px_90px_rgba(0,0,0,0.7)]">

      {/* ENTERPRISE BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(168,85,247,0.35),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,rgba(59,130,246,0.25),transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b0716] via-[#120a2a] to-[#07040E]" />
      </div>

      {/* IMAGE */}
      <div className="col-span-4 p-6">
        <div className="relative h-full rounded-xl overflow-hidden">
          <img
            src={programme.image}
            alt={programme.title}
            className="absolute inset-0 w-full h-full object-cover scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-4 w-full text-center">
            <Link
              to={programme.path}
              className="inline-flex items-center gap-2 text-xs tracking-widest text-white"
            >
              VIEW PROGRAMME <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="col-span-8 p-10">
        <h3 className="text-5xl font-light">{programme.title}</h3>

        <div className="mt-6 grid grid-cols-4 gap-6 text-xs tracking-widest text-white/70">
          <Meta label="DURATION" value={programme.duration} />
          <Meta label="MODE" value={programme.mode} />
          <Meta label="CERTIFICATION" value={programme.certification} />
          <Meta label="IDEAL FOR" value={programme.idealFor} />
        </div>

        <p className="mt-6 text-sm text-white/70 max-w-2xl">
          {programme.description}
        </p>

        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* JOB ROLES */}
        <div className="mt-6">
          <div className="flex justify-between items-center">
            <p className="text-[11px] tracking-widest text-white/60">
              /POTENTIAL JOB ROLES
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => scrollRoles("prev")}
                className="p-2 border border-white/20 rounded-full"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollRoles("next")}
                className="p-2 border border-white/20 rounded-full"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div
            ref={rolesRef}
            className="mt-4 flex gap-4 overflow-x-auto scroll-smooth"
            style={{ scrollbarWidth: "none" }}
          >
            {programme.jobRoles.map((role) => (
              <div
                key={role.title}
                className="relative min-w-[270px] h-[160px] rounded-xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={role.image}
                  alt={role.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                  <div className="absolute inset-0 shadow-[0_0_40px_rgba(168,85,247,0.35)]" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-medium tracking-wide">
                    {role.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-white/40">{label}</p>
      <p className="mt-1 font-medium text-white">{value}</p>
    </div>
  );
}
