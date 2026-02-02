import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";

/* -------------------------------------------------------------------------- */
/*                                Faculty Data                                */
/* -------------------------------------------------------------------------- */

const faculties = [
  {
    name: "Mr. Ashish Kumar Mishra",
    designation: "Master Trainer",
    department: "HEMM Operations",
    image: "/faculty/ashish.png",
  },
  {
    name: "Mr. Alok Das",
    designation: "Main Trainer",
    department: "HEMM Operations",
    image: "/faculty/alok.png",
  },
  {
    name: "Mr. Bikram Keshari Gauda",
    designation: "Assistant Trainer",
    department: "HEMM Operations",
    image: "/faculty/bikram.png",
  },
  {
    name: "Mr. Rituraj Tarei",
    designation: "Master Trainer",
    department: "Electricals",
    image: "/faculty/rituraj.png",
  },
  {
    name: "Ms. Padmini Kumari Bisoyi",
    designation: "Senior Trainer",
    department: "Electricals",
    image: "/faculty/Padmini.png",
  },
  {
    name: "Mr. Trupti Ranjan Samal",
    designation: "Associate Trainer",
    department: "Electricals",
    image: "/faculty/trupti.png",
  },
  {
    name: "Mr. Yagnesh Kumar Nanda",
    designation: "Senior Trainer",
    department: "Fabrication & Welding",
    image: "/faculty/yajnesh.png",
  },
  {
    name: "Mr. Rahul Nayak",
    designation: "Senior Trainer",
    department: "Fabrication & Welding",
    image: "/faculty/rahul.png",
  },
  {
    name: "Mr. Sudarshan Barik",
    designation: "Assistant Trainer",
    department: "Fabrication & Welding",
    image: "/faculty/sudarshan.png",
  },
  {
    name: "Mr. Jalandhar Pradhan",
    designation: "Master Trainer",
    department: "Mechanical Maintenance",
    image: "/faculty/jalandhar.png",
  },
  {
    name: "Mr. Mukesh Singh",
    designation: "Senior Trainer",
    department: "Mechanical Maintenance",
    image: "/faculty/mukesh.png",
  },
  {
    name: "Mr. Gangadhar Bej",
    designation: "Master Trainer",
    department: "Mining Operations",
    image: "/faculty/gangadhar.png",
  },
  {
    name: "Mr. Tushar Ranjan Ojha",
    designation: "Associate Trainer",
    department: "Mining Operations",
    image: "/faculty/tushar.png",
  },
];

/* -------------------------------------------------------------------------- */
/*                              Faculty Card                                  */
/* -------------------------------------------------------------------------- */

const FacultyCard = ({ faculty }: { faculty: any }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.35 }}
    className="
      group bg-zinc-950 border border-zinc-800 rounded-2xl
      overflow-hidden shadow-lg hover:shadow-emerald-500/20
      transition-all duration-300
    "
  >
    {/* Image */}
    <div className="relative h-[360px] overflow-hidden">
      <img
        src={faculty.image}
        alt={faculty.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
    </div>

    {/* Info */}
    <div className="p-6 text-center space-y-2">
      <h3 className="text-lg font-semibold text-white">
        {faculty.name}
      </h3>

      <span className="inline-block text-xs font-medium px-3 py-1 rounded-full
        bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
        {faculty.designation}
      </span>

      <p className="text-sm text-zinc-400">
        {faculty.department}
      </p>
    </div>
  </motion.div>
);

/* -------------------------------------------------------------------------- */
/*                                Main Page                                    */
/* -------------------------------------------------------------------------- */

const FacultiesPage = () => {
  const departments = useMemo(
    () => Array.from(new Set(faculties.map(f => f.department))),
    []
  );

  const [activeDept, setActiveDept] = useState(departments[0]);

  const filteredFaculty = faculties.filter(
    (f) => f.department === activeDept
  );

  return (
    <div className="min-h-screen bg-black py-48 px-6 lg:px-20">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          text-4xl md:text-5xl font-extrabold text-center mb-14
          bg-gradient-to-r from-emerald-400 to-purple-500
          bg-clip-text text-transparent
        "
      >
        Our Faculty Members
      </motion.h1>

      {/* Department Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {departments.map((dept) => {
          const active = dept === activeDept;
          return (
            <button
              key={dept}
              onClick={() => setActiveDept(dept)}
              className={`
                relative px-5 py-2 rounded-full text-sm font-medium
                transition-all duration-300
                ${
                  active
                    ? "text-white bg-emerald-500/15 border border-emerald-500/30"
                    : "text-zinc-400 hover:text-white border border-zinc-800"
                }
              `}
            >
              {dept}

              {active && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute inset-0 rounded-full bg-emerald-500/10"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Faculty Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeDept}
          layout
          className="
            grid gap-10
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {filteredFaculty.map((faculty) => (
            <FacultyCard key={faculty.name} faculty={faculty} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FacultiesPage;