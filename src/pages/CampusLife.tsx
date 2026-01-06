import React from 'react'
import HeroSection from '../components/campusLife/HeroSection'
import StatsStrip from '../components/campusLife/StatStrip'
import LifePillars from '../components/campusLife/LifePillars'
import FacilitiesGrid from '../components/campusLife/FacilitiesGrid'
import IndustryExposure from '../components/campusLife/IndustryExposure'
import StudentLifeGallery from '../components/campusLife/StudentLifeGallery'
import CTASection from '../components/campusLife/CTASection'

const CampusLife: React.FC = () => {
  return (
    <div>
        <HeroSection />
        <StatsStrip />
        <LifePillars />
        <FacilitiesGrid />
        <IndustryExposure />
        <StudentLifeGallery />
        <CTASection />
    </div>
  )
}

export default CampusLife