import React from "react";
import AboutHero from "../components/About/AboutHero";
import AboutSection from "../components/About/AboutSection";
import VisionMissionGoal from "../components/About/VisionMissionGoal";
import FoundersSection from "../components/About/HeroInfooSection";
import { ThreeDMarquee } from "../components/About/ThreeDMarquee";
import Milestones from "../components/About/Milestones";
import OurFaculty from "../components/About/OurFaculty";
import Awards from "../components/About/Awards";
import Certifications from "../components/About/Certifications";

const AboutPage: React.FC = () => {
  const images = [
    "https://res.cloudinary.com/dxzhnns58/image/upload/v1762166427/WhatsApp_Image_2025-04-30_at_5.49.15_PM_xnmamh_2_ma665l.jpg",
    "https://res.cloudinary.com/dxzhnns58/image/upload/v1762167481/Gemini_Generated_Image_dm4793dm4793dm47_obiynh.png",
    "https://res.cloudinary.com/dxzhnns58/image/upload/v1762160341/WhatsApp_Image_2025-11-03_at_2.21.32_PM_cepy4c.jpg",
    "https://res.cloudinary.com/dxzhnns58/image/upload/v1762157793/welder_wtwqhs.webp",
    "https://res.cloudinary.com/dxzhnns58/image/upload/v1761819881/WhatsApp_Image_2025-10-30_at_3.38.18_PM_avyast.jpg",
    "https://res.cloudinary.com/dxzhnns58/image/upload/v1761819875/WhatsApp_Image_2025-10-30_at_3.34.59_PM_tiduhn.jpg",
    "https://res.cloudinary.com/dxzhnns58/image/upload/v1761819867/WhatsApp_Image_2025-10-30_at_3.30.36_PM_viv2to.jpg",
    "https://res.cloudinary.com/dxzhnns58/image/upload/v1761819859/WhatsApp_Image_2025-10-30_at_3.30.06_PM_mhnoko.jpg",
    "https://res.cloudinary.com/dxzhnns58/image/upload/v1761815148/GMC10092024_162547_jhwc3q.jpg",
    "https://res.cloudinary.com/dxzhnns58/image/upload/v1761813985/WhatsApp_Image_2025-09-03_at_7.27.27_PM_hnzywi.jpg",
    "https://res.cloudinary.com/dxzhnns58/image/upload/v1761813875/GMC06072025_170825_qsx9f7.jpg",
    "https://res.cloudinary.com/dxzhnns58/image/upload/v1761769356/Theoryofchange_deta48.jpg",
    "https://res.cloudinary.com/dxzhnns58/image/upload/v1761745317/vocational_x4fu5b.jpg",
    "https://res.cloudinary.com/dxzhnns58/image/upload/v1761740136/blogs_oulxwa.jpg",
  ];

  const AdvisoryBoard = [
    {
      image: "/teams/jalandhar.png",
      title: "Mr. Jalandhar Mohanty",
      subtitle: "Lead, CoE, Mining",
      handle: "@alexrivera",
      borderColor: "#10B981", // emerald accent
      gradient: "linear-gradient(145deg, #1F2937, #111827)", // subtle gray blend
      url: "https://github.com/",
    },
    {
      image: "/teams/sudarshan.png",
      title: "Mr. Sudarshan Barik",
      subtitle: "Lead, CoE, Steel & Aluminium",
      handle: "@jordanchen",
      borderColor: "#10B981",
      gradient: "linear-gradient(145deg, #1F2937, #111827)",
      url: "https://linkedin.com/in/",
    },
    {
      image: "/teams/bikram.png",
      title: "Mr. Bikram K. Gouda",
      subtitle: "Lead, CoE, Shipping & Logistics",
      handle: "@morganblake",
      borderColor: "#10B981",
      gradient: "linear-gradient(145deg, #1F2937, #111827)",
      url: "https://dribbble.com/",
    },
    {
      image: "/teams/yagnesh.png",
      title: "Mr. Yagnesh K. Nanda",
      subtitle: "Lead, CoE, Power & Green Energy",
      handle: "@morganblake",
      borderColor: "#10B981",
      gradient: "linear-gradient(145deg, #1F2937, #111827)",
      url: "https://dribbble.com/",
    },
    {
      image: "/teams/mukessh.png",
      title: "Mr. Mukesh Singh",
      subtitle: "Lead, CoE, Construction & Infrastructure Equipment",
      handle: "@morganblake",
      borderColor: "#10B981",
      gradient: "linear-gradient(145deg, #1F2937, #111827)",
      url: "https://dribbble.com/",
    },
    // {
    //   image:
    //     "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760618334/basanta_2_adg0rh.jpg",
    //   title: "Mr. Basant K. Sahoo",
    //   subtitle: "Lead, CoE, Water & Waste Water Treatment",
    //   handle: "@morganblake",
    //   borderColor: "#10B981",
    //   gradient: "linear-gradient(145deg, #1F2937, #111827)",
    //   url: "https://dribbble.com/",
    // },
  ];

  return (
    <div>
      <AboutHero />
      <VisionMissionGoal />
      <AboutSection />
      <div id="founders">
        <FoundersSection />
      </div>
      <div className="w-full h-[700px] bg-black p-2 ring-1 ring-neutral-700/10 dark:bg-gradient-to-b dark:from-black dark:via-green-600 dark:to-black">
        <ThreeDMarquee images={images} />
      </div>
      <Milestones />

      <div id="faculty" className="h-full relative">
        <OurFaculty
          heading="Our Advisory Board"
          items={AdvisoryBoard}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
      </div>

      <Awards />
      <Certifications />
    </div>
  );
};

export default AboutPage;
