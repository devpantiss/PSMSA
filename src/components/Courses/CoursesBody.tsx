import { useState } from "react";
import {
  Star,
  Clock,
  BookOpen,
  X,
  HardHat,
  ShieldCheck,
  Factory,
} from "lucide-react";

/* -------------------- TYPES -------------------- */

type Level = "Beginner" | "Intermediate" | "Advanced";

type Course = {
  id: number;
  title: string;
  sector: "Mining" | "Steel" | "Aluminium";
  level: Level;
  duration: string;
  modules: string;
  certification: string;
  eligibility: string;
  jobRoles: string[];
  rating: number;
  reviews: number;
  image: string;
};

/* -------------------- DATA -------------------- */

const COURSES: Course[] = [
  {
    id: 1,
    title: "Mining Technician (Surface & Underground)",
    sector: "Mining",
    level: "Beginner",
    duration: "6 Months",
    modules: "18 Modules",
    certification: "NSDC / SSC Certified",
    eligibility: "10th Pass | Medically Fit",
    jobRoles: ["Mining Helper", "Mine Technician", "Production Assistant"],
    rating: 4.8,
    reviews: 1240,
    image: "/homepage/mine.jpg",
  },
  {
    id: 2,
    title: "HEMM Operator (Dumper, Excavator, Dozer)",
    sector: "Mining",
    level: "Intermediate",
    duration: "3 Months",
    modules: "12 Modules",
    certification: "OEM + SSC Certification",
    eligibility: "8th Pass | Valid LMV",
    jobRoles: ["Dumper Operator", "Excavator Operator", "HEMM Operator"],
    rating: 4.7,
    reviews: 980,
    image: "/homepage/sectors/HEMM.jpg",
  },
  {
    id: 3,
    title: "Steel Plant Operations Technician",
    sector: "Steel",
    level: "Intermediate",
    duration: "6 Months",
    modules: "20 Modules",
    certification: "Industry Aligned Certification",
    eligibility: "ITI / 12th (Science)",
    jobRoles: ["Furnace Operator", "Rolling Mill Assistant"],
    rating: 4.6,
    reviews: 860,
    image: "/homepage/sectors/foundry.jpg",
  },
  {
    id: 4,
    title: "Aluminium Smelting & Casting Technician",
    sector: "Aluminium",
    level: "Advanced",
    duration: "6 Months",
    modules: "16 Modules",
    certification: "OEM + Industry Certification",
    eligibility: "ITI / Diploma",
    jobRoles: ["Smelter Operator", "Casting Technician", "Pot Room Assistant"],
    rating: 4.9,
    reviews: 740,
    image: "/homepage/aluminium.jpg",
  },
];

const SECTORS = ["Mining", "Steel", "Aluminium"] as const;
const LEVELS: Level[] = ["Beginner", "Intermediate", "Advanced"];

/* -------------------- COMPONENT -------------------- */

const CoursesBody = (): JSX.Element => {
  const [selectedSectors, setSelectedSectors] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<Level[]>([]);
  const [activeCourse, setActiveCourse] = useState<Course | null>(null);

  const toggle = <T,>(
    value: T,
    list: T[],
    setList: React.Dispatch<React.SetStateAction<T[]>>
  ) =>
    setList(
      list.includes(value)
        ? list.filter((v) => v !== value)
        : [...list, value]
    );

  const filteredCourses = COURSES.filter(
    (c) =>
      (selectedSectors.length === 0 ||
        selectedSectors.includes(c.sector)) &&
      (selectedLevels.length === 0 ||
        selectedLevels.includes(c.level))
  );

  /* -------------------- CARD -------------------- */

  const CourseCard = ({ course }: { course: Course }) => (
    <div
      onClick={() => setActiveCourse(course)}
      className="group relative bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-2xl overflow-hidden cursor-pointer
                 hover:border-purple-600/40 hover:hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.45)]
                 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover opacity-80 group-hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <span className="absolute top-3 left-3 bg-black/60 backdrop-blur px-3 py-1 text-xs rounded-full border border-white/10">
          {course.sector}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div className="flex justify-between text-xs text-slate-400">
          <span className="border border-white/10 px-3 py-0.5 rounded-full">
            {course.level}
          </span>
          <div className="flex items-center gap-1 text-purple-600 font-medium">
            <Star className="h-4 w-4 fill-purple-600" />
            {course.rating}
            <span className="text-slate-500">
              ({course.reviews})
            </span>
          </div>
        </div>

        <h3 className="font-semibold text-lg leading-snug text-white">
          {course.title}
        </h3>

        <div className="flex gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {course.duration}
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            {course.modules}
          </div>
        </div>
      </div>
    </div>
  );

  /* -------------------- MODAL -------------------- */

  const CourseModal = ({ course }: { course: Course }) => (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="relative max-w-2xl w-full bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-2xl p-6">
        <button
          onClick={() => setActiveCourse(null)}
          className="absolute top-4 right-4 text-slate-400 hover:text-white"
        >
          <X />
        </button>

        <h2 className="text-2xl font-semibold text-white mb-2">
          {course.title}
        </h2>

        <p className="text-sm text-slate-400 mb-6">
          {course.sector} • {course.level}
        </p>

        <div className="grid grid-cols-2 gap-4 text-sm text-slate-300 mb-6">
          <div className="flex gap-2 items-center">
            <Clock className="h-4 w-4 text-purple-600" />
            {course.duration}
          </div>
          <div className="flex gap-2 items-center">
            <BookOpen className="h-4 w-4 text-purple-600" />
            {course.modules}
          </div>
          <div className="flex gap-2 items-center">
            <ShieldCheck className="h-4 w-4 text-purple-600" />
            {course.certification}
          </div>
          <div className="flex gap-2 items-center">
            <HardHat className="h-4 w-4 text-purple-600" />
            {course.eligibility}
          </div>
        </div>

        <div>
          <h4 className="flex items-center gap-2 font-medium text-white mb-3">
            <Factory className="h-4 w-4 text-purple-600" />
            Job Roles After Training
          </h4>
          <ul className="grid grid-cols-2 gap-2 text-sm text-slate-400">
            {course.jobRoles.map((role) => (
              <li key={role}>• {role}</li>
            ))}
          </ul>
        </div>

        <button className="mt-8 w-full bg-purple-900 hover:bg-purple-600 text-slate-900 font-bold py-3 rounded-xl transition">
          Enquire / Apply Now
        </button>
      </div>
    </div>
  );

  /* -------------------- LAYOUT -------------------- */

  return (
    <section className="bg-black text-white">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row gap-12">
        {/* Filters */}
        <aside className="w-full md:w-64 space-y-8">
          <div>
            <h3 className="text-xs uppercase tracking-widest text-slate-500 mb-4">
              Sector
            </h3>
            {SECTORS.map((s) => (
              <label key={s} className="flex gap-2 text-sm mb-3 text-slate-300">
                <input
                  type="checkbox"
                  checked={selectedSectors.includes(s)}
                  onChange={() =>
                    toggle(s, selectedSectors, setSelectedSectors)
                  }
                  className="accent-purple-900"
                />
                {s}
              </label>
            ))}
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-slate-500 mb-4">
              Skill Level
            </h3>
            {LEVELS.map((l) => (
              <label key={l} className="flex gap-2 text-sm mb-3 text-slate-300">
                <input
                  type="checkbox"
                  checked={selectedLevels.includes(l)}
                  onChange={() =>
                    toggle(l, selectedLevels, setSelectedLevels)
                  }
                  className="accent-amber-500"
                />
                {l}
              </label>
            ))}
          </div>
        </aside>

        {/* Courses */}
        <main className="flex-1">
          <p className="text-sm text-slate-400 mb-8">
            Showing{" "}
            <span className="text-white font-medium">
              {filteredCourses.length}
            </span>{" "}
            programs
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </main>
      </div>

      {activeCourse && <CourseModal course={activeCourse} />}
    </section>
  );
};

export default CoursesBody;
