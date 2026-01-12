import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProgrammeSections from "./ProgrammeSections";
import ProgrammeFees from "./ProgrammeFees";
// import ProgrammeAdmissionTimeline from "./ProgrammeAdmissionTimeline";

const contentVariants = {
  hidden: { opacity: 0, x: 20 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

interface Props {
  programme: any;
}

const ProgrammeContent: React.FC<Props> = ({ programme }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={programme.key}
        variants={contentVariants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ duration: 0.35 }}
        className="space-y-8"
      >
        {/* HEADER */}
        <div className="bg-neutral-900/60 border border-purple-600 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-purple-600">
            {programme.title}
          </h2>
          <p className="text-gray-300">{programme.subtitle}</p>
        </div>

        {/* ✅ ADMISSION TIMELINE */}
        {/* <ProgrammeAdmissionTimeline
          programmeKey={programme.key}
        /> */}

        {/* DETAILS */}
        <ProgrammeSections
          title="Eligibility"
          items={programme.eligibility}
        />

        <ProgrammeSections
          title="Selection Process"
          items={programme.selectionProcess}
        />

        <ProgrammeSections
          title="Scholarships & Financial Aid"
          items={programme.scholarship}
        />

        <ProgrammeFees fees={programme.fees} />
      </motion.div>
    </AnimatePresence>
  );
};

export default ProgrammeContent;