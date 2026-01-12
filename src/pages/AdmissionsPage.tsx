import React, { useState } from "react";
import { programmes } from "../components/Admissions/programmesData";
import ProgrammeNav from "../components/Admissions/ProgrammeNav";
import ProgrammeContent from "../components/Admissions/ProgrammeContent";
import FinancialSupport from "../components/Admissions/FinancialSupport";
import AdmissionsHero from "../components/Admissions/AdmissionHero";
import FinancePartners from "../components/Admissions/FinancePartners";
import ScrollDrivenAdmissionTimeline from "../components/Admissions/ProgrammeAdmissionTimeline";
import AdmissionsParallaxBanner from "../components/Admissions/AdmissionsParallaxBanner";

const AdmissionsSplitView: React.FC = () => {
  const [selected, setSelected] = useState(programmes[0].key);
  const current = programmes.find((p) => p.key === selected)!;

  return (
    <div className="bg-black text-white">
      {/* HERO */}
      <AdmissionsHero />

      {/* PROGRAMMES */}
      <section id="programmes" className="min-h-screen mt-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 px-4 py-16">
          <ProgrammeNav
            programmes={programmes}
            selected={selected}
            onSelect={setSelected}
          />

          <main className="md:col-span-8">
            <ProgrammeContent programme={current} />
          </main>
        </div>
      </section>

      <ScrollDrivenAdmissionTimeline programmeKey={current.key} />

      <AdmissionsParallaxBanner />
      {/* FINANCIAL SUPPORT */}
      <FinancialSupport />
      <FinancePartners />
    </div>
  );
};

export default AdmissionsSplitView;
