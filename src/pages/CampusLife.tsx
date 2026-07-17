import React, { Suspense, useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from "framer-motion";
import HeroSection from '../components/campusLife/HeroSection'
import SectionNav from '../components/campusLife/SectionNav'

const CampusIntro = React.lazy(() => import('../components/campusLife/LifePillars'))
const CampusDayTimeline = React.lazy(() => import('../components/campusLife/CampusDayTimeline'))
const LearningSpaces = React.lazy(() => import('../components/campusLife/LearningSpaces'))
const SimulationZone = React.lazy(() => import('../components/campusLife/SimulationZone'))
const SafetySection = React.lazy(() => import('../components/campusLife/SafetySection'))
const StudentLifeGallery = React.lazy(() => import('../components/campusLife/StudentLifeGallery'))
const PromotionalBanner = React.lazy(() => import('../components/campusLife/IndustryExposure'))
const CampusTestimonials = React.lazy(() => import('../components/campusLife/CampusTestimonials'))
const CTASection = React.lazy(() => import('../components/campusLife/CTASection'))

const techItems = [
  {
    title: "AR / VR simulation",
    copy: "Controlled practice for hazard recognition, equipment orientation and emergency response.",
    meta: "Simulation rooms",
  },
  {
    title: "Digital assessments",
    copy: "Trade tests, attendance, practical scores and instructor feedback can be tracked digitally.",
    meta: "CMS placeholder",
  },
  {
    title: "Smart classrooms",
    copy: "Interactive technical theory sessions connect fundamentals to real workshop tasks.",
    meta: "Learning support",
  },
  {
    title: "Digital credentials",
    copy: "Certification records and readiness documents can be prepared for employer review.",
    meta: "Placement ready",
  },
];

const careerSteps = [
  "Enrolment",
  "Training",
  "Assessment",
  "Certification",
  "Interview",
  "Placement",
  "Career Growth",
];

const events = [
  { type: "Workshops", title: "Skill demonstration day", image: "/images/weld.jpg" },
  { type: "Industry Events", title: "Employer interaction session", image: "/images/hemm_1.jpg" },
  { type: "Student Activities", title: "Technical club showcase", image: "/About/carousel/Gallery_5.JPG" },
  { type: "Recent", title: "Safety week drill", image: "/images/hemm_3.JPG" },
  { type: "Placement", title: "Recruitment readiness drive", image: "/placement.jpg" },
  { type: "Graduation", title: "Certification ceremony", image: "/About/carousel/Gallery_15.jpeg" },
];

function TechnologyLearning() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(78,234,200,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(78,234,200,0.16)_1px,transparent_1px)] [background-size:52px_52px]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#4eeac8]">
            Technology Enabled Learning
          </p>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            Practical technology, built around employability.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400">
            The technology layer supports hands-on training instead of replacing it:
            simulation before workshop practice, digital records before employer
            assessment, and smart classrooms before live trade application.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {techItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-[22px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur"
            >
              <div className="mb-8 h-24 rounded-2xl border border-[#4eeac8]/20 bg-black/35 p-4">
                <div className="h-2 w-20 rounded-full bg-[#4eeac8]/70" />
                <div className="mt-4 h-2 w-full rounded-full bg-white/10" />
                <div className="mt-3 h-2 w-2/3 rounded-full bg-white/10" />
                <div className="mt-5 grid grid-cols-3 gap-2">
                  <span className="h-8 rounded-lg bg-white/[0.06]" />
                  <span className="h-8 rounded-lg bg-[#38bdf8]/15" />
                  <span className="h-8 rounded-lg bg-orange-500/15" />
                </div>
              </div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#4eeac8]">
                {item.meta}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">{item.copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CareerDirection() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#070707] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#4eeac8]">
            Placement Preparation
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Campus Life with a Career Direction
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-400">
            Interview practice, resume development, communication, workplace
            etiquette, trade tests, document readiness and placement counselling
            are treated as part of campus life.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-x-auto pb-3">
            <div className="flex min-w-[760px] items-center">
              {careerSteps.map((step, index) => (
                <React.Fragment key={step}>
                  <button
                    onClick={() => setActive(index)}
                    className={`h-24 w-32 rounded-2xl border px-4 text-left transition ${
                      active === index
                        ? "border-[#4eeac8] bg-[#4eeac8] text-black"
                        : "border-white/10 bg-white/[0.03] text-white/60 hover:text-white"
                    }`}
                  >
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.2em]">
                      0{index + 1}
                    </span>
                    <span className="mt-2 block text-sm font-semibold leading-tight">
                      {step}
                    </span>
                  </button>
                  {index < careerSteps.length - 1 && (
                    <div className="h-px w-10 bg-gradient-to-r from-white/20 to-[#4eeac8]/50" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[26px] border border-white/10 bg-zinc-900/50 p-7"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#4eeac8]">
              Career Journey Stage
            </p>
            <h3 className="mt-3 text-2xl font-bold text-white">{careerSteps[active]}</h3>
            <p className="mt-4 text-sm leading-7 text-zinc-400">
              CMS-editable detail placeholder for {careerSteps[active].toLowerCase()}:
              show activities, documents, assessment checkpoints, employer
              expectations and parent/student support notes for this stage.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Interview readiness", "Trade test practice", "Document support", "Counselling"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/8 bg-black/25 px-4 py-3 text-sm text-white/65">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function EventsAndGallery() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Workshops", "Industry Events", "Student Activities", "Recent", "Placement", "Graduation"];
  const visible = filter === "All" ? events : events.filter((event) => event.type === filter);

  return (
    <section id="gallery" className="relative overflow-hidden bg-[#050505] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#4eeac8]">
              Events and Campus Gallery
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Highlights from the training floor.
            </h2>
          </div>
          <div className="flex max-w-full gap-2 overflow-x-auto pb-2">
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`shrink-0 rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] ${
                  filter === item
                    ? "border-[#4eeac8] bg-[#4eeac8] text-black"
                    : "border-white/12 text-white/55 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((event, index) => (
            <motion.article
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group overflow-hidden rounded-[24px] border border-white/10 bg-zinc-900/45"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/70">
                  {event.type}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{event.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  CMS placeholder for date, location, media caption and short description.
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

const CampusLife: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.title = "Campus Life | Pantiss Skill University";
    const description = "Explore practical, technology-enabled and industry-connected campus life for vocational careers in mining, steel and aluminium.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);

    let og = document.querySelector('meta[property="og:image"]');
    if (!og) {
      og = document.createElement("meta");
      og.setAttribute("property", "og:image");
      document.head.appendChild(og);
    }
    og.setAttribute("content", "/labs_hero.jpg");
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-teal-500/30 selection:text-teal-200 overflow-x-hidden">
      <SectionNav />
      
      {/* Sleek Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-teal-400 z-[100] origin-left shadow-[0_0_15px_rgba(45,212,191,0.5)]"
        style={{ scaleX }}
      />

      <div className="relative z-10">
        <HeroSection />
        
        <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center"><div className="w-8 h-8 rounded-full border-t-2 border-teal-500 animate-spin" /></div>}>
          <CampusIntro />
          <CampusDayTimeline />
          <LearningSpaces />
          <SimulationZone />
          <SafetySection />
          <TechnologyLearning />
          <StudentLifeGallery />
          <PromotionalBanner />
          <CareerDirection />
          <CampusTestimonials />
          <EventsAndGallery />
          <CTASection />
        </Suspense>
      </div>
    </div>
  )
}

export default CampusLife
