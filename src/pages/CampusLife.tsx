import React from 'react'
import { motion, useScroll, useSpring } from "framer-motion";
import HeroSection from '../components/campusLife/HeroSection'
import CampusIntro from '../components/campusLife/LifePillars' // Kept filename for ease, but component is renamed
import FacilitiesGrid from '../components/campusLife/FacilitiesGrid'
import InteractiveEcosystem from '../components/campusLife/PracticeTrack' // Kept filename
import StudentLifeGallery from '../components/campusLife/StudentLifeGallery'
import PromotionalBanner from '../components/campusLife/IndustryExposure' // Kept filename
import CampusTestimonials from '../components/campusLife/CampusTestimonials'
import CTASection from '../components/campusLife/CTASection'

const CampusLife: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-teal-500/30 selection:text-teal-200 overflow-x-hidden">
      
      {/* Sleek Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-teal-400 z-[100] origin-left shadow-[0_0_15px_rgba(45,212,191,0.5)]"
        style={{ scaleX }}
      />

      <div className="relative z-10">
        <HeroSection />
        <CampusIntro />
        <FacilitiesGrid />
        <InteractiveEcosystem />
        <StudentLifeGallery />
        <PromotionalBanner />
        <CampusTestimonials />
        <CTASection />
      </div>
    </div>
  )
}

export default CampusLife