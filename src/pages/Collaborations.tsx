import React from 'react'
import HeroSection from '../components/Collaboration/Hero'
import PartnersLogos from '../components/Collaboration/PartnersLogos'
import CollabImpact from '../components/Collaboration/CollabImpact'
import MouSection from '../components/Collaboration/MouSection'
import PlacementPipeline from '../components/Collaboration/PlacementPipeline'
import PlacementSuccessStories from '../components/Collaboration/TestimonialSection'

const Collaborations: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <CollabImpact />
      <PlacementPipeline />
      <PartnersLogos />
      <PlacementSuccessStories />
      <MouSection />
    </div>
  )
}

export default Collaborations