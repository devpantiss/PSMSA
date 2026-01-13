export interface Lab {
    id: string;
    title: string;
    shortTitle: string;
    description: string;
    purpose: string;
    skills: string[];
    technologies: string[];
    outcomes: string[];
    heroImage: string;
    gallery: string[];
    accent: "green" | "purple";
  }
  
  export const labsData: Lab[] = [
    {
      id: "electrical-lab",
      title: "Electrical Training Lab",
      shortTitle: "Electrical Lab",
      description:
        "Industry-grade electrical lab replicating real-world power, wiring, motor control, and safety systems.",
      purpose:
        "To produce job-ready electricians trained for mines, steel plants, power stations, and infrastructure projects.",
      skills: [
        "Industrial Wiring",
        "Motor Control Panels",
        "Star-Delta & VFD Systems",
        "Electrical Safety & Fault Detection",
      ],
      technologies: [
        "Live Wiring Boards",
        "Motor Control Panels",
        "AR-assisted Safety Training",
      ],
      outcomes: [
        "Zero safety incidents",
        "Faster site deployment",
        "High apprenticeship conversion",
      ],
      heroImage:
        "https://images.unsplash.com/photo-1581092160607-ee67f55b8b44",
      gallery: [
        "https://images.unsplash.com/photo-1581091012184-7f37b8f2b6c9",
        "https://images.unsplash.com/photo-1598257006458-087169a1f08c",
      ],
      accent: "green",
    },
    {
      id: "hemm-mechanic-lab",
      title: "HEMM Mechanic Training Lab",
      shortTitle: "HEMM Lab",
      description:
        "Specialized lab for Heavy Earth Moving Machinery diagnostics, maintenance, and repair.",
      purpose:
        "To train technicians for dumpers, excavators, loaders, and mining equipment used in large-scale operations.",
      skills: [
        "Hydraulics & Pneumatics",
        "Engine Diagnostics",
        "Preventive Maintenance",
        "Breakdown Analysis",
      ],
      technologies: [
        "Hydraulic Cut-Section Models",
        "Diagnostic Toolkits",
        "Simulation-assisted Training",
      ],
      outcomes: [
        "Reduced equipment downtime",
        "Mine-ready technicians",
        "Higher productivity",
      ],
      heroImage:
        "https://images.unsplash.com/photo-1603553329474-99c9f54f94e4",
      gallery: [
        "https://images.unsplash.com/photo-1590650153855-d9e808231d41",
        "https://images.unsplash.com/photo-1542362567-b07e54358753",
      ],
      accent: "purple",
    },
    {
      id: "welder-lab",
      title: "Advanced Welding & Fabrication Lab",
      shortTitle: "Welder Lab",
      description:
        "Hands-on welding and fabrication lab aligned with heavy industry and infrastructure standards.",
      purpose:
        "To develop certified welders for steel plants, fabrication yards, and mining operations.",
      skills: [
        "Arc & MIG Welding",
        "Fabrication Techniques",
        "Blueprint Reading",
        "Weld Inspection",
      ],
      technologies: [
        "Industrial Welding Machines",
        "Simulation-based Welding",
        "Safety Monitoring Systems",
      ],
      outcomes: [
        "High weld quality",
        "Industry certification",
        "Global employability",
      ],
      heroImage:
        "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
      gallery: [
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
        "https://images.unsplash.com/photo-1603092353864-4f57c9c4d08c",
      ],
      accent: "green",
    },
    {
      id: "futuristic-lab",
      title: "Futuristic Lab (Simulator & AR/VR)",
      shortTitle: "Futuristic Lab",
      description:
        "Next-generation simulator and AR/VR lab replicating real industrial environments without risk.",
      purpose:
        "To enable zero-risk training for high-value, high-risk industrial operations.",
      skills: [
        "Heavy Equipment Operation",
        "Decision Making",
        "Emergency Handling",
        "Process Optimization",
      ],
      technologies: [
        "Full-motion Simulators",
        "AR/VR Modules",
        "Digital Twins",
        "AI Skill Analytics",
      ],
      outcomes: [
        "Zero training accidents",
        "Shorter onboarding cycles",
        "Higher productivity from day one",
      ],
      heroImage:
        "https://images.unsplash.com/photo-1614851099511-773084f6911c",
      gallery: [
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620",
        "https://images.unsplash.com/photo-1581092160607-ee67f55b8b44",
      ],
      accent: "purple",
    },
  ];  