import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  BookOpen,
  Home,
  Utensils,
  Dumbbell,
  FlaskConical,
  Truck,
  Cpu,
} from "lucide-react";
import FleetSection from "../components/homepage/FleetSection";

/* -------------------------------------------------------------------------- */
/*                               Reusable Section                              */
/* -------------------------------------------------------------------------- */

interface CampusSectionProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  reverse?: boolean;
}

const CampusSection: React.FC<CampusSectionProps> = ({
  title,
  subtitle,
  description,
  image,
  icon,
  reverse = false,
}) => {
  return (
    <section className="relative w-full overflow-hidden">
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 min-h-[520px] ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* IMAGE — FULL BLEED */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 80 : -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className={`relative w-full h-full ${
            reverse ? "lg:order-2" : ""
          }`}
        >
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/85 via-black/40 to-transparent" /> */}
        </motion.div>

        {/* CONTENT — PADDED */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -80 : 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className={`relative z-10 flex items-center ${
            reverse ? "lg:order-1" : ""
          }`}
        >
          <div className="px-8 md:px-14 lg:px-20 py-16 max-w-xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-purple-900/40 border border-purple-500/30 backdrop-blur-md text-purple-300 mb-6">
              {icon}
              <span className="text-xs uppercase tracking-widest font-semibold">
                {subtitle}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              {title}
            </h2>

            <p className="text-gray-300 text-base leading-relaxed">
              {description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*                             Page Component                                  */
/* -------------------------------------------------------------------------- */

const CampusExperiencePage: React.FC = () => {
  return (
    <main className="bg-black text-white overflow-hidden">
      {/* ============================ HERO ============================ */}
      <section className="relative py-36 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 via-black to-black" />
        <div className="relative max-w-4xl mx-auto px-6 mt-28">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold"
          >
            Campus Infrastructure & Facilities
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-6 text-gray-300 text-lg"
          >
            A future-ready campus designed to simulate real industrial
            environments, residential comfort, and next-gen skilling ecosystems.
          </motion.p>
        </div>
      </section>

      {/* ============================ SECTIONS ============================ */}

      <CampusSection
        title="Core Academic Building"
        subtitle="Academic Infrastructure"
        description="The heart of the campus housing academic administration, smart classrooms, faculty offices, and student support services."
        image="/InfraPage/academic-building.png"
        icon={<Building2 className="w-5 h-5" />}
      />

      <CampusSection
        title="Smart Classrooms"
        subtitle="Learning Spaces"
        description="Digitally enabled classrooms with AV systems, interactive displays, and hybrid teaching tools."
        image="/InfraPage/smartclass.jpeg"
        icon={<BookOpen className="w-5 h-5" />}
        reverse
      />

      <CampusSection
        title="Hostel & Residential Facilities"
        subtitle="Student Living"
        description="Safe, hygienic hostels with 24×7 security, recreation zones, and essential amenities."
        image="/InfraPage/hostel.jpeg"
        icon={<Home className="w-5 h-5" />}
      />

      <CampusSection
        title="Canteen & Mess"
        subtitle="Nutrition & Dining"
        description="Nutritious, hygienic meal services supporting intensive hands-on training programs."
        image="/InfraPage/center-canteen.jpg"
        icon={<Utensils className="w-5 h-5" />}
        reverse
      />

      <CampusSection
        title="Sports & Recreation Facilities"
        subtitle="Well-being"
        description="Indoor and outdoor sports facilities promoting fitness, discipline, and teamwork."
        image="/InfraPage/playground.jpg"
        icon={<Dumbbell className="w-5 h-5" />}
      />

      <CampusSection
        title="Futuristic Labs"
        subtitle="Hands-on Learning"
        description="Advanced labs for mechanical, electrical, fabrication, and mining practices."
        image="/InfraPage/electrical-lab.jpg"
        icon={<FlaskConical className="w-5 h-5" />}
        reverse
      />

      <FleetSection />

      <CampusSection
        title="Training Track & Live Fleet"
        subtitle="On-Ground Exposure"
        description="Dedicated tracks and live fleets of dumpers, loaders, excavators, and industrial vehicles."
        image="/InfraPage/track.jpeg"
        icon={<Truck className="w-5 h-5" />}
      />

      <CampusSection
        title="AR / VR & Simulator Labs"
        subtitle="Immersive Technology"
        description="High-fidelity simulators and AR/VR labs enabling risk-free skill mastery."
        image="/InfraPage/AR.jpg"
        icon={<Cpu className="w-5 h-5" />}
        reverse
      />

      {/* ============================ FOOTER ============================ */}
      <section className="py-24 border-t border-white/10 text-center px-6">
        <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
          Every element of our campus is purpose-built so students don’t just
          learn — they experience industry before entering it.
        </p>
      </section>
    </main>
  );
};

export default CampusExperiencePage;
