import React, { Suspense } from "react";
import HeroSection from "../components/homepage/Hero";

const SectorsAccordion = React.lazy(() => import("../components/homepage/SectorsAccordion"));
const FleetSection = React.lazy(() => import("../components/homepage/FleetSection"));
const PlacementsSection = React.lazy(() => import("../components/homepage/PlacementsSection"));
const CampusExperienceSection = React.lazy(() => import("../components/homepage/CampusExperienceSection"));
const Why = React.lazy(() => import("../components/homepage/Why"));
const ProgramPreview = React.lazy(() => import("../components/homepage/ProgramPreview"));
const Notices = React.lazy(() => import("../components/homepage/Notices"));
const Fleet = React.lazy(() => import("../components/homepage/Fleet"));

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      
      <Suspense fallback={<div className="min-h-[200px]" />}>
        <SectorsAccordion />
        <Why />
        <ProgramPreview />
        <PlacementsSection />
        <Fleet />
        <FleetSection />
        <Notices />
        <CampusExperienceSection />
      </Suspense>
    </div>
  );
};

export default HomePage;
