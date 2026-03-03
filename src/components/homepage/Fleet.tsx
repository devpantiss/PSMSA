import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ================= VEHICLE DATA =================
const vehicles = [
  {
    id: 1,
    name: "Volvo 460 Dumper",
    carImage: "/fleet2/volvo_360.png",
    bg: "/fleet2/mines.jpg",
    stats: [
      { label: "Payload", value: "41T" },
      { label: "Training", value: "Advanced" },
      { label: "Application", value: "Mining" },
      { label: "Registration", value: "OD-02-AB-1234" },
      { label: "Asset No", value: "AST-460-01" },
      { label: "Engine", value: "ENV460P55421" },
    ],
  },
  {
    id: 2,
    name: "Volvo Excavator",
    carImage: "/fleet2/volvo_exca.png",
    bg: "/fleet2/mines.jpg",
    stats: [
      { label: "Bucket", value: "2.1m³" },
      { label: "Training", value: "Operator" },
      { label: "Application", value: "Earthwork" },
      { label: "Registration", value: "OD-02-EX-2221" },
      { label: "Asset No", value: "AST-EX-02" },
      { label: "Engine", value: "ENEXC33219" },
    ],
  },
  {
    id: 3,
    name: "Tata Prima 2830K",
    carImage: "/fleet2/tata_prima.png",
    bg: "/fleet2/mines.jpg",
    stats: [
      { label: "GVW", value: "28T" },
      { label: "Training", value: "Driver" },
      { label: "Application", value: "Transport" },
      { label: "Registration", value: "OD-02-TP-7781" },
      { label: "Asset No", value: "AST-TP-03" },
      { label: "Engine", value: "ENTP55219" },
    ],
  },
  {
    id: 4,
    name: "Komatsu Bulldozer",
    carImage: "/fleet2/komatshu.png",
    bg: "/fleet2/mines.jpg",
    stats: [
      { label: "Power", value: "215HP" },
      { label: "Training", value: "Operator" },
      { label: "Application", value: "Land Prep" },
      { label: "Registration", value: "OD-02-KB-4455" },
      { label: "Asset No", value: "AST-KB-04" },
      { label: "Engine", value: "ENKOM66211" },
    ],
  },
  {
    id: 5,
    name: "Toyota Pneumatic Forklift",
    carImage: "/fleet2/toyo_forklift.png",
    bg: "/fleet2/mines.jpg",
    stats: [
      { label: "Capacity", value: "5T" },
      { label: "Training", value: "Operator" },
      { label: "Application", value: "Logistics" },
      { label: "Registration", value: "OD-02-TF-8891" },
      { label: "Asset No", value: "AST-TF-05" },
      { label: "Engine", value: "ENTOY44122" },
    ],
  },
  {
    id: 6,
    name: "Propel Electric Tipper",
    carImage: "/fleet2/propel.png",
    bg: "/fleet2/mines.jpg",
    stats: [
      { label: "Drive", value: "Electric" },
      { label: "Training", value: "Driver" },
      { label: "Application", value: "Mining" },
      { label: "Registration", value: "OD-02-PE-9901" },
      { label: "Asset No", value: "AST-PE-06" },
      { label: "Engine", value: "ENPRO88311" },
    ],
  },
  {
    id: 7,
    name: "Caterpillar Haulpack",
    carImage: "/fleet2/haul_pack.png",
    bg: "/fleet2/mines.jpg",
    stats: [
      { label: "Payload", value: "90T+" },
      { label: "Training", value: "Expert" },
      { label: "Application", value: "Open Cast" },
      { label: "Registration", value: "OD-02-CH-6721" },
      { label: "Asset No", value: "AST-CH-07" },
      { label: "Engine", value: "ENCAT99211" },
    ],
  },
  {
    id: 8,
    name: "Caterpillar Loader",
    carImage: "/fleet2/Loader.png",
    bg: "/fleet2/mines.jpg",
    stats: [
      { label: "Bucket", value: "5m³" },
      { label: "Training", value: "Operator" },
      { label: "Application", value: "Loading" },
      { label: "Registration", value: "OD-02-CL-5512" },
      { label: "Asset No", value: "AST-CL-08" },
      { label: "Engine", value: "ENLOD33211" },
    ],
  },
  {
    id: 9,
    name: "Ace Hydra Crane",
    carImage: "/fleet2/hydra.png",
    bg: "/fleet2/mines.jpg",
    stats: [
      { label: "Lift", value: "15T" },
      { label: "Training", value: "Operator" },
      { label: "Application", value: "Rigging" },
      { label: "Registration", value: "OD-02-AH-7789" },
      { label: "Asset No", value: "AST-AH-09" },
      { label: "Engine", value: "ENHYD99111" },
    ],
  },
];

// ================= ANIMATION =================
const carVariants = {
  initial: { x: -900, opacity: 0, scale: 0.96 },
  animate: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.9 } },
  exit: { x: 900, opacity: 0, scale: 0.96, transition: { duration: 0.6 } },
};

export default function Fleet() {
  const [index, setIndex] = useState<number>(0);
  const vehicle = vehicles[index];

  // AUTO SLIDE INTERVAL
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % vehicles.length);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % vehicles.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + vehicles.length) % vehicles.length);

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <div className="relative w-full h-[720px] rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)] border border-white/10">
        {/* BACKGROUND */}
        <img
          src={vehicle.bg}
          alt="mine"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* HEADER */}
<div className="absolute top-0 left-0 right-0 z-30 px-12 pt-10">
  <div className="flex items-start justify-between w-full">
    
    {/* LEFT — Title */}
    <div className="flex flex-col">
      <h2 className="text-4xl font-semibold text-white tracking-wide leading-tight">
        Our Fleet
      </h2>
      <div className="w-20 h-[2px] bg-violet-400 mt-3 rounded-full" />
    </div>

    {/* RIGHT — Specs */}
    <div className="flex-1 flex justify-end">
      <div className="grid grid-cols-6 gap-x-10 gap-y-2 items-start">
        {vehicle.stats.map((stat, i) => (
          <div key={i} className="text-right min-w-[90px]">
            <p className="text-[10px] uppercase tracking-[0.25em] text-gray-300 mb-1">
              {stat.label}
            </p>
            <p className="text-lg font-semibold text-white leading-none">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </div>

  </div>
</div>

        {/* LEFT THUMBNAILS — FIXED POSITION (NO SCROLL SHAKE) */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4">
          {vehicles.map((v, i) => (
            <button
              key={v.id}
              onClick={() => setIndex(i)}
              className={`w-16 h-12 rounded-lg overflow-hidden border transition-all duration-300 backdrop-blur ${
                i === index
                  ? "border-violet-400 bg-white/10 scale-110"
                  : "border-white/20 bg-black/30 opacity-70"
              }`}
            >
              <img
                src={v.carImage}
                alt={v.name}
                className="w-full h-full object-contain"
              />
            </button>
          ))}
        </div>

        {/* CENTER VEHICLE */}
        <div className="relative z-10 w-full h-full flex items-end justify-center pb-10">
          {/* Name + Number */}
          <div className="absolute top-32 left-1/2 -translate-x-1/2 text-center pointer-events-none">
            <h1 className="text-[110px] font-bold text-white/20 leading-none">
              {String(index + 1).padStart(2, "0")}
            </h1>
            <h2 className="text-5xl font-semibold text-white/80 -mt-6">
              {vehicle.name}
            </h2>
          </div>

          {/* Dust */}
          <div className="absolute bottom-6 w-[520px] h-24 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute bottom-0 w-4 h-4 bg-white/30 rounded-full blur-md"
                animate={{
                  x: (Math.random() - 0.5) * 160,
                  y: -Math.random() * 60,
                  opacity: [0, 0.8, 0],
                }}
                transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.2 }}
                style={{ left: `${15 + i * 12}%` }}
              />
            ))}
          </div>

          {/* Vehicle */}
          <AnimatePresence mode="wait">
            <motion.img
              key={vehicle.carImage}
              variants={carVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              src={vehicle.carImage}
              alt={vehicle.name}
              className="absolute -bottom-16 w-[640px] object-contain drop-shadow-[0_60px_160px_rgba(0,0,0,0.9)]"
            />
          </AnimatePresence>
        </div>

        {/* CONTROLS */}
        <div className="absolute bottom-6 right-6 flex gap-3 z-30">
          <button
            onClick={prev}
            className="p-3 rounded-full bg-black/50 border border-white/20 text-white hover:scale-110 transition"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="p-3 rounded-full bg-black/50 border border-white/20 text-white hover:scale-110 transition"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
