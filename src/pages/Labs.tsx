import React from "react";
import LabsHero from "../components/Labs/LabsHero";
import LabsWhyItMatters from "../components/Labs/LabsWhyItMatters";
import LabsGrid from "../components/Labs/LabsGrid";
import LabDetailSection from "../components/Labs/LabDetailSection";
import TechStack from "../components/Labs/TechStack";
import LabsImpact from "../components/Labs/LabsImpact";
import LabsCTA from "../components/Labs/LabsCTA";
import FuturisticLabsShowcaseSection from "../components/Labs/FuturisticLabsShowcaseSection";

const Labs: React.FC = () => {
  return (
    <main className="bg-black text-white">
      <LabsHero />
      <LabsWhyItMatters />
      <LabsGrid />
      <FuturisticLabsShowcaseSection />
      <TechStack />
      <LabsImpact />
      <LabsCTA />
    </main>
  );
};

export default Labs;
