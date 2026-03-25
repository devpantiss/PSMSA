import React, { Suspense } from 'react'
import { motion, useScroll, useSpring } from "framer-motion";
import HeroSection from '../components/campusLife/HeroSection'

const CampusIntro = React.lazy(() => import('../components/campusLife/LifePillars'))
const FacilitiesGrid = React.lazy(() => import('../components/campusLife/FacilitiesGrid'))
const InteractiveEcosystem = React.lazy(() => import('../components/campusLife/PracticeTrack'))
const StudentLifeGallery = React.lazy(() => import('../components/campusLife/StudentLifeGallery'))
const PromotionalBanner = React.lazy(() => import('../components/campusLife/IndustryExposure'))
const CampusTestimonials = React.lazy(() => import('../components/campusLife/CampusTestimonials'))
const CTASection = React.lazy(() => import('../components/campusLife/CTASection'))

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
        
        <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center"><div className="w-8 h-8 rounded-full border-t-2 border-teal-500 animate-spin" /></div>}>
          <CampusIntro />
          <FacilitiesGrid />
          <InteractiveEcosystem />
          <StudentLifeGallery />
          <PromotionalBanner />
          <CampusTestimonials />
          <CTASection />
        </Suspense>
      </div>
    </div>
  )
}

export default CampusLife