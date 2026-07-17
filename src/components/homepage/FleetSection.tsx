import React, { memo } from "react";

/* ===================== TYPES ===================== */
// interface FleetVehicle {
//   title: string;
//   image: string;
//   description: string;
//   registrationNo: string;
//   assetNo: string;
//   engineNo: string;
//   chassisNo: string;
//   quantity: string;
// }

interface InfraItem {
  title: string;
  image: string;
  description: string;
  quantity: string;
  importFrom: string;
  techSpecs: string;
}

/* ===================== FLEET DATA (UNCHANGED) ===================== */
// const fleetData: FleetVehicle[] = [
//   {
//     title: "Volvo 460 Dumper",
//     image: "/fleet/volvo-460-tipper.avif",
//     description: "A heavy-duty articulated dumper with a 46-ton capacity, designed for rugged terrains and efficient material transport.",
//     registrationNo: "VOL-460-1234",
//     assetNo: "A-001",
//     engineNo: "ENG-460-7890",
//     chassisNo: "CHS-460-5678",
//     quantity: "3",
//   },
//   {
//     title: "Volvo Excavator",
//     image: "/fleet/volvo-excavator.jpg",
//     description: "A versatile EC480 excavator with advanced hydraulics, delivering precision and power for large-scale digging operations.",
//     registrationNo: "VOL-EXC-5678",
//     assetNo: "A-002",
//     engineNo: "ENG-480-2345",
//     chassisNo: "CHS-480-9012",
//     quantity: "3",
//   },
//   {
//     title: "Ace Hydra Crane",
//     image: "/fleet/ace-hydra.webp",
//     description: "A mobile hydraulic crane with a 14-ton lifting capacity, ideal for construction and industrial lifting tasks.",
//     registrationNo: "ACE-HYD-9012",
//     assetNo: "A-003",
//     engineNo: "ENG-014-6789",
//     chassisNo: "CHS-014-3456",
//     quantity: "2",
//   },
//   {
//     title: "Caterpillar Loader",
//     image: "/fleet/caterpillar-loader.avif",
//     description: "A robust 950M wheel loader with superior digging and loading capabilities for heavy-duty applications.",
//     registrationNo: "CAT-LOD-3456",
//     assetNo: "A-004",
//     engineNo: "ENG-950-1234",
//     chassisNo: "CHS-950-7890",
//     quantity: "4",
//   },
//   {
//     title: "Caterpillar Haulpack",
//     image: "/fleet/cat-haulpack.avif",
//     description: "A high-capacity 777G haul truck built for mining, offering durability and efficiency in material hauling.",
//     registrationNo: "CAT-HPK-7890",
//     assetNo: "A-005",
//     engineNo: "ENG-777-5678",
//     chassisNo: "CHS-777-2345",
//     quantity: "Coming soon",
//   },
//   {
//     title: "Propel Electric Tipper",
//     image: "/fleet/propel-ev-tipper.jpeg",
//     description: "An electric tipper truck designed for sustainable mining operations, combining efficiency with zero emissions.",
//     registrationNo: "PRO-EV-2345",
//     assetNo: "A-006",
//     engineNo: "ENG-EV-9012",
//     chassisNo: "CHS-EV-6789",
//     quantity: "3",
//   },
//   {
//     title: "Ace TC 6040 Tower Crane",
//     image: "/fleet/ace-crane.jpg",
//     description: "A high-performance tower crane with a 60-meter jib and 40-ton lifting capacity, ideal for heavy construction sites.",
//     registrationNo: "ACE-TC-6040",
//     assetNo: "A-007",
//     engineNo: "ENG-TC-6040-5678",
//     chassisNo: "CHS-TC-6040-1234",
//     quantity: "1",
//   },
//   {
//     title: "Toyota Core IC Pneumatic Forklift",
//     image: "/fleet/forklift.jpeg",
//     description: "A mid-size IC pneumatic forklift designed for outdoor heavy lifting tasks, delivering excellent durability and performance.",
//     registrationNo: "TOY-IC-4321",
//     assetNo: "A-008",
//     engineNo: "ENG-IC-6789",
//     chassisNo: "CHS-IC-4321",
//     quantity: "4",
//   },
//   {
//     title: "Komatsu Bulldozer",
//     image: "/fleet/bulldozer.jpg",
//     description: "A powerful bulldozer for earthmoving and grading, equipped with advanced blade control for precision work.",
//     registrationNo: "KOM-6789",
//     assetNo: "A-009",
//     engineNo: "ENG-BML-3456",
//     chassisNo: "CHS-BML-1234",
//     quantity: "2",
//   },
//   {
//     title: "Tata Prima 2830K",
//     image: "/fleet/prima.jpg",
//     description: "A robust 28-ton tipper truck built for construction and mining applications, offering high durability and performance.",
//     registrationNo: "TATA-PRIMA-2830K",
//     assetNo: "A-010",
//     engineNo: "ENG-PRIMA-2830",
//     chassisNo: "CHS-PRIMA-2830",
//     quantity: "5",
//   },
// ];

/* ===================== FUTURISTIC DATA ===================== */
const infraData: InfraItem[] = [
  {
    title: "Advanced Operator Training Simulators",
    image:
      "/homepage/fleet/mining_sim.png",
    description:
      "High-fidelity mining and industrial machinery simulators.",
    quantity: "2 Units",
    importFrom: "Japan",
    techSpecs: "Haptic Controls, 8K Display, CNC Integration",
  },
  {
    title: "Large Scale Shipping Simulator",
    image:
    "/homepage/fleet/shipping_sim.png",
    description:
      "AR-powered maritime and port logistics simulator.",
    quantity: "4 Units",
    importFrom: "South Korea",
    techSpecs: "AR Cockpit, Weather Engine, DNV Certified",
  },
  {
    title: "Infrastructure Equipment Simulator",
    image:
    "/homepage/fleet/crane_sim.jpg",
    description:
      "Crane, dozer and excavator simulation platform.",
    quantity: "Coming Soon",
    importFrom: "USA",
    techSpecs: "Motion Platform, 3D Terrain Engine",
  },
];

/* ===================== FLEET CARD ===================== */
// const FleetCard = ({ v }: { v: FleetVehicle }) => {
//   const comingSoon = v.quantity.toLowerCase() === "coming soon";

//   return (
//     <div className="w-[360px] shrink-0 bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition">
//       <div className="bg-purple-500/10 text-center py-3">
//         <h3 className="text-white font-semibold">{v.title}</h3>
//         <p className="text-purple-400 text-sm">Qty: {v.quantity}</p>
//       </div>

//       <div className="relative h-52">
//         <img src={v.image} className="h-full w-full object-cover" loading="lazy" decoding="async" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70" />
//       </div>

//       <div className="p-5 text-sm text-zinc-300">
//         {comingSoon ? (
//           <p className="text-center text-purple-400 font-semibold">
//             Coming Soon
//           </p>
//         ) : (
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <p className="text-purple-400">Registration</p>
//               <p>{v.registrationNo}</p>
//             </div>
//             <div>
//               <p className="text-purple-400">Asset No</p>
//               <p>{v.assetNo}</p>
//             </div>
//             <div>
//               <p className="text-purple-400">Engine No</p>
//               <p>{v.engineNo}</p>
//             </div>
//             <div>
//               <p className="text-purple-400">Chassis No</p>
//               <p>{v.chassisNo}</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

/* ===================== INFRA CARD ===================== */
const InfraCard = ({ i }: { i: InfraItem }) => {
  const comingSoon = i.quantity.toLowerCase().includes("coming");

  return (
    <div className="w-[380px] shrink-0 bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition">
      <div className="bg-purple-500/10 text-center py-3">
        <h3 className="text-white font-semibold">{i.title}</h3>
        <p className="text-purple-400 text-sm">{i.quantity}</p>
      </div>

      <div className="relative h-56">
        <img loading="lazy" decoding="async" src={i.image} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70" />
      </div>

      <div className="p-5 text-sm text-zinc-300 space-y-3">
        <p className="text-zinc-400">{i.description}</p>

        {comingSoon ? (
          <p className="text-center text-purple-400 font-semibold">
            Coming Soon
          </p>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-purple-400">Imported From</p>
                <p>{i.importFrom}</p>
              </div>
              <div>
                <p className="text-purple-400">Availability</p>
                <p>{i.quantity}</p>
              </div>
            </div>
            <p className="text-xs text-zinc-400">
              {i.techSpecs}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

/* ===================== MARQUEE ===================== */
const Marquee = ({ children }: { children: React.ReactNode }) => (
  <div className="relative overflow-hidden">
    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />
    <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
      {children}
    </div>
  </div>
);

/* ===================== MAIN ===================== */
const FleetSection: React.FC = () => {
  return (
    <section className="bg-black py-4 space-y-12">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 46s linear infinite;
        }
      `}</style>

      {/* FLEET */}
      {/* <div className="text-center">
        <h2 className="text-5xl font-bold text-white">
          Elite <span className="text-purple-400">Training Fleet</span>
        </h2>
      </div>

      <Marquee>
        {[...fleetData, ...fleetData].map((v, i) => (
          <FleetCard key={i} v={v} />
        ))}
      </Marquee> */}

      {/* DIVIDER */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent max-w-5xl mx-auto" />

      {/* FUTURISTIC */}
      <div className="text-center">
        <h2 className="text-5xl font-bold text-white">
          Futuristic <span className="text-purple-400">Infrastructure</span>
        </h2>
      </div>

      <Marquee>
        {[...infraData, ...infraData].map((i, idx) => (
          <InfraCard key={idx} i={i} />
        ))}
      </Marquee>

      {/* CTA */}
      <div className="text-center">
        <button className="px-10 py-4 rounded-full bg-purple-600 hover:bg-purple-700 transition text-white font-semibold shadow-lg shadow-purple-500/20">
          Explore Infrastructure & Fleet
        </button>
      </div>
    </section>
  );
};

export default memo(FleetSection);
