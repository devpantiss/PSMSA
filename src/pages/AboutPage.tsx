import React from "react";
import AboutHero from "../components/About/AboutHero";
import AboutSection from "../components/About/AboutSection";
import VisionMissionGoal from "../components/About/VisionMissionGoal";
import FoundersSection from "../components/About/HeroInfooSection";
import { ThreeDMarquee } from "../components/About/ThreeDMarquee";
import Milestones from "../components/About/Milestones";
// import OurFaculty from "../components/About/OurFaculty";
import Awards from "../components/About/Awards";
import Certifications from "../components/About/Certifications";

const AboutPage: React.FC = () => {
  const images = [
    "/About/carousel/Gallery_.JPG",
    "/About/carousel/Gallery_1.JPG",
    "/About/carousel/Gallery_2.jpg",
    "/About/carousel/Gallery_3.JPG",
    "/About/carousel/Gallery_4.JPG",
    "/About/carousel/Gallery_5.JPG",
    "/About/carousel/Gallery_6.JPG",
    "/About/carousel/Gallery_7.JPG",
    "/About/carousel/Gallery_8.JPG",
    "/About/carousel/Gallery_9.JPG",
    "/About/carousel/Gallery_10.JPG",
    "/About/carousel/Gallery_11.jpg",
    "/About/carousel/Gallery_12.JPG",
    "/About/carousel/Gallery_13.jpg",
    "/About/carousel/Gallery_14.jpg",
    "/About/carousel/Gallery_15.jpeg",
    "/About/carousel/Gallery_16.jpeg",
    "/About/carousel/Gallery_17.jpg",
    "/About/carousel/Gallery_18.jpg",
    "/About/carousel/Gallery_19.webp",
    "/About/carousel/Gallery_22.JPG",
  ];

  // const AdvisoryBoard = [
  //   {
  //     image: "/teams/jalandhar.png",
  //     title: "Mr. Jalandhar Mohanty",
  //     subtitle: "Lead, CoE, Mining",
  //     handle: "@alexrivera",
  //     borderColor: "#10B981", // emerald accent
  //     gradient: "linear-gradient(145deg, #1F2937, #111827)", // subtle gray blend
  //     url: "https://github.com/",
  //   },
  //   {
  //     image: "/teams/sudarshan.png",
  //     title: "Mr. Sudarshan Barik",
  //     subtitle: "Lead, CoE, Steel & Aluminium",
  //     handle: "@jordanchen",
  //     borderColor: "#10B981",
  //     gradient: "linear-gradient(145deg, #1F2937, #111827)",
  //     url: "https://linkedin.com/in/",
  //   },
  //   {
  //     image: "/teams/bikram.png",
  //     title: "Mr. Bikram K. Gouda",
  //     subtitle: "Lead, CoE, Shipping & Logistics",
  //     handle: "@morganblake",
  //     borderColor: "#10B981",
  //     gradient: "linear-gradient(145deg, #1F2937, #111827)",
  //     url: "https://dribbble.com/",
  //   },
  //   {
  //     image: "/teams/yagnesh.png",
  //     title: "Mr. Yagnesh K. Nanda",
  //     subtitle: "Lead, CoE, Power & Green Energy",
  //     handle: "@morganblake",
  //     borderColor: "#10B981",
  //     gradient: "linear-gradient(145deg, #1F2937, #111827)",
  //     url: "https://dribbble.com/",
  //   },
  //   {
  //     image: "/teams/mukessh.png",
  //     title: "Mr. Mukesh Singh",
  //     subtitle: "Lead, CoE, Construction & Infrastructure Equipment",
  //     handle: "@morganblake",
  //     borderColor: "#10B981",
  //     gradient: "linear-gradient(145deg, #1F2937, #111827)",
  //     url: "https://dribbble.com/",
  //   },
  //   // {
  //   //   image:
  //   //     "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760618334/basanta_2_adg0rh.jpg",
  //   //   title: "Mr. Basant K. Sahoo",
  //   //   subtitle: "Lead, CoE, Water & Waste Water Treatment",
  //   //   handle: "@morganblake",
  //   //   borderColor: "#10B981",
  //   //   gradient: "linear-gradient(145deg, #1F2937, #111827)",
  //   //   url: "https://dribbble.com/",
  //   // },
  // ];

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

      {/* <div id="faculty" className="h-full relative">
        <OurFaculty
          heading="Our Advisory Board"
          items={AdvisoryBoard}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
      </div> */}

      <Awards />
      <Certifications />
    </div>
  );
};

export default AboutPage;
