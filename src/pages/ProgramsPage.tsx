import React from 'react'
import SkillShapeScaleSection from '../components/programs2/SkillShapeScaleSection'
import OurExpertiseStackSection from '../components/programs2/OurExpertiseStackSection'
import LearningPartnerSection from '../components/programs2/LearningPartnerSection'
import IndustriesWeEmpower from '../components/programs2/IndustriesWeEmpower'

const ProgramsPage: React.FC = () => {
  return (
    <div>
        <SkillShapeScaleSection />
        <OurExpertiseStackSection />
        <LearningPartnerSection />
        <IndustriesWeEmpower />
    </div>
  )
}

export default ProgramsPage