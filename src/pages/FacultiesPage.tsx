import { motion } from "framer-motion";

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
/*                          Utility: Group by Department                       */
/* -------------------------------------------------------------------------- */

const groupByDepartment = (data: typeof faculties) => {
  return data.reduce<Record<string, typeof faculties>>((acc, curr) => {
    if (!acc[curr.department]) acc[curr.department] = [];
    acc[curr.department].push(curr);
    return acc;
  }, {});
};

/* -------------------------------------------------------------------------- */
/*                                Faculty Card                                 */
/* -------------------------------------------------------------------------- */

const FacultyCard = ({ faculty, index }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08 }}
    className="
      bg-zinc-950 border border-zinc-800 rounded-2xl
      shadow-md hover:shadow-purple-500/25
      transition-all duration-300
      overflow-hidden flex flex-col
      h-[520px]
    "
  >
    {/* Image */}
    <div className="h-[400px] w-full overflow-hidden">
      <img
        src={faculty.image}
        alt={faculty.name}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
      />
    </div>

    {/* Details */}
    <div className="flex-1 p-5 text-center flex flex-col justify-center">
      <h3 className="text-lg font-semibold text-purple-500">
        {faculty.name}
      </h3>
      <p className="text-sm text-white">{faculty.designation}</p>
      <p className="text-sm font-medium text-green-500 mt-1">
        {faculty.department}
      </p>
    </div>
  </motion.div>
);

/* -------------------------------------------------------------------------- */
/*                                Main Page                                    */
/* -------------------------------------------------------------------------- */

const FacultiesPage = () => {
  const facultyByDept = groupByDepartment(faculties);

  return (
    <div className="min-h-screen bg-black py-20 px-6 lg:px-20 mt-32">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          text-4xl md:text-5xl font-extrabold text-center mb-20
          bg-gradient-to-r from-purple-500 to-green-500
          bg-clip-text text-transparent
        "
      >
        Our Faculty Members
      </motion.h1>

      {/* Department Sections */}
      <div className="space-y-24">
        {Object.entries(facultyByDept).map(([department, members]) => (
          <section key={department}>
            {/* Department Heading */}
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold text-green-500 mb-12"
            >
              {department}
            </motion.h2>

            {/* Faculty Grid */}
            <div
              className="
                grid gap-10
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-4
              "
            >
              {members.slice(0, 4).map((faculty, index) => (
                <FacultyCard
                  key={faculty.name}
                  faculty={faculty}
                  index={index}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default FacultiesPage;
