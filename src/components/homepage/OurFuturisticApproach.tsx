import React, { memo, useMemo, useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";

/* ===================== TYPES ===================== */
interface Vehicle {
  title: string;
  image: string;
  description: string;
  quantity: string;
  importFrom: string;
  techSpecs: string;
}

/* ===================== DATA ===================== */
const fleetData: Vehicle[] = [
  {
    title: "Advanced Operator Training Simulators",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762158602/WhatsApp_Image_2025-03-03_at_10.47.37_PM_ex1zpe.jpg",
    description:
      "Realistic simulators replicating heavy mining and industrial machinery to train operators safely before real-world deployment.",
    quantity: "2 Units",
    importFrom: "Japan",
    techSpecs:
      "Hydraulic Joystick Interface, Haptic Feedback, 8K Display, CNC Integration",
  },
  {
    title: "Large Scale Shipping Simulator",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762158602/WhatsApp_Image_2025-02-28_at_5.00.19_PM_frl41v.jpg",
    description:
      "Maritime-grade simulation platform for logistics, port operations, and vessel handling using AR-based environments.",
    quantity: "4 Units",
    importFrom: "South Korea",
    techSpecs:
      "Marine AR Cockpit, Multi-user Networking, Dynamic Weather Engine, DNV Certified",
  },
  {
    title: "Infrastructure Equipment Simulator",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762159262/crane_empyz0.png",
    description:
      "Construction-grade simulator covering cranes, bulldozers, graders and excavation equipment for real terrain practice.",
    quantity: "Coming Soon",
    importFrom: "USA",
    techSpecs:
      "Heavy-Duty Motion Platform, 3D Real Terrain Engine, Remote Diagnostics",
  },
  {
    title: "High-End Welding Machineries",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762157793/welding_pjajxn.webp",
    description:
      "Precision welding systems integrated with simulation feedback for real-time correction and skill enhancement.",
    quantity: "3 Units",
    importFrom: "Italy",
    techSpecs:
      "Robotic Weld Arm, Real-Time Feedback Sensors, Laser Guidance",
  },
  {
    title: "Electrician Training AR/VR Lab",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762160341/WhatsApp_Image_2025-11-03_at_2.21.32_PM_cepy4c.jpg",
    description:
      "Immersive AR/VR learning modules for wiring, circuit testing, fault diagnosis and safety simulations.",
    quantity: "1 Unit",
    importFrom: "Singapore",
    techSpecs:
      "Live Wiring Boards, AR Instruction Display, Safety Monitoring Panels",
  },
];

/* ===================== CARD ===================== */
interface VehicleCardProps {
  vehicle: Vehicle;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  index: number;
}

const VehicleCard = memo(
  ({ vehicle, onMouseEnter, onMouseLeave, index }: VehicleCardProps) => {
    return (
      <div
        className="
          relative w-[420px] h-full group cursor-pointer
          bg-gradient-to-b from-black to-purple-900
          rounded-xl overflow-hidden shadow-2xl
          border border-green-600 flex flex-col
        "
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        tabIndex={0}
        aria-label={`Equipment card for ${vehicle.title}`}
        aria-describedby={`vehicle-details-${index}`}
      >
        {/* Header */}
        <div className="bg-purple-600/30 text-white text-center py-3 px-4">
          <h3 className="text-lg font-bold">{vehicle.title}</h3>
          <p className="text-sm text-green-400 mt-1">
            Units Available: {vehicle.quantity}
          </p>
        </div>

        {/* Image */}
        <img
          src={vehicle.image}
          alt={vehicle.title}
          className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />

        {/* Content */}
        <div className="bg-black/70 text-white p-4 flex-1 flex flex-col gap-4">
          <p
            id={`vehicle-details-${index}`}
            className="text-sm text-gray-300 leading-relaxed line-clamp-3"
          >
            {vehicle.description}
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-green-500 font-semibold">Imported From</p>
              <p className="text-gray-200">{vehicle.importFrom}</p>
            </div>

            <div>
              <p className="text-green-500 font-semibold">Availability</p>
              <p className="text-gray-200">{vehicle.quantity}</p>
            </div>
          </div>

          <div>
            <p className="text-green-500 font-semibold mb-1">
              Technical Capabilities
            </p>
            <p className="text-xs text-gray-300 leading-relaxed">
              {vehicle.techSpecs}
            </p>
          </div>
        </div>
      </div>
    );
  }
);

VehicleCard.displayName = "VehicleCard";

/* ===================== MAIN COMPONENT ===================== */
const OurFuturisticApproach: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef(0);

  const fleetList = useMemo(() => [...fleetData, ...fleetData], []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollSpeed = 0.5;
    let animationFrameId: number;

    const scroll = () => {
      if (!isPaused) {
        scrollPositionRef.current += scrollSpeed;
        container.scrollLeft = scrollPositionRef.current;

        const resetPoint = fleetData.length * 440;
        if (scrollPositionRef.current >= resetPoint) {
          scrollPositionRef.current = 0;
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => {
    const container = scrollContainerRef.current;
    if (container) scrollPositionRef.current = container.scrollLeft;
    setIsPaused(false);
  };

  return (
    <section className="pb-8 bg-gradient-to-b from-transparent to-purple-900 overflow-hidden">
      {/* Intro */}
      <div className="text-center mb-14">
        <p className="text-lg text-white max-w-3xl mx-auto">
          A glimpse into our next-generation training infrastructure — powered by
          simulators, AR/VR labs and real-world industrial equipment.
        </p>
      </div>

      {/* Auto Scroll */}
      <div className="relative max-w-[1440px] mx-auto">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-hidden px-4 pb-6"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          aria-label="Scrolling futuristic equipment cards"
        >
          {fleetList.map((vehicle, index) => (
            <div
              key={`${vehicle.title}-${index}`}
              className="flex-shrink-0"
            >
              <VehicleCard
                vehicle={vehicle}
                index={index}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      {/* <div className="text-center mt-12">
        <Link
          to="/dashboard"
          className="
            px-8 py-4 bg-green-500 text-black font-semibold rounded-lg
            ring-2 ring-green-600 hover:bg-green-600
            hover:ring-green-400/70 transition-all duration-300
          "
        >
          Explore Skill & Jobs Dashboard
        </Link>
      </div> */}
    </section>
  );
};

export default memo(OurFuturisticApproach);
