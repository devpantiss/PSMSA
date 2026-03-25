import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows, Html } from "@react-three/drei";
import * as THREE from "three";

// --------------------------------------------------------------------------------
// STYLIZED PROCEDURAL PROCEDURAL VEHICLES (ZERO LATENCY, HIGH PERFORMANCE)
// --------------------------------------------------------------------------------
const CONSTRUCTION_YELLOW = "#facc15";
const DARK_METAL = "#27272a";

// 1. DUMP TRUCK (Follows Elliptical Haul Route)
const DumpTruck = () => {
  const truckRef = useRef<THREE.Group>(null);
  const bedRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!truckRef.current) return;
    const t = state.clock.elapsedTime * 0.6; // Speed
    
    // Elliptical Path
    const x = Math.sin(t) * 12;
    const z = Math.cos(t) * 6;
    truckRef.current.position.set(x, 0, z);
    
    // Auto-Rotate to face tangent of ellipse
    const dx = Math.cos(t) * 12;
    const dz = -Math.sin(t) * 6;
    truckRef.current.rotation.y = Math.atan2(dx, dz);

    // Simulate bed lifting occasionally
    if (bedRef.current) {
       const liftCycle = Math.sin(t * 0.5);
       bedRef.current.rotation.z = liftCycle > 0.8 ? (liftCycle - 0.8) * 2 : 0;
    }
  });

  return (
    <group ref={truckRef}>
      {/* Cab */}
      <mesh position={[1, 0.75, 0]} castShadow>
        <boxGeometry args={[1.5, 1.5, 2]} />
        <meshStandardMaterial color={CONSTRUCTION_YELLOW} roughness={0.3} metalness={0.7} />
      </mesh>
      {/* Chassis */}
      <mesh position={[-1.5, 0.5, 0]} castShadow>
        <boxGeometry args={[4, 0.5, 1.8]} />
        <meshStandardMaterial color={DARK_METAL} roughness={0.8} />
      </mesh>
      {/* Dump Bed (Hinged at the back) */}
      <group ref={bedRef} position={[-3.5, 0.8, 0]}>
        <mesh position={[1.5, 0.5, 0]} castShadow>
          <boxGeometry args={[3.8, 1, 2.2]} />
          <meshStandardMaterial color={CONSTRUCTION_YELLOW} roughness={0.4} />
        </mesh>
      </group>
      {/* Wheels */}
      {[-2.5, 0.5].map((x, i) => (
        [-1, 1].map((z, j) => (
          <mesh key={`${i}-${j}`} position={[x, 0.4, z]} rotation={[Math.PI/2, 0, 0]}>
            <cylinderGeometry args={[0.5, 0.5, 0.4, 16]} />
            <meshStandardMaterial color="#111" />
          </mesh>
        ))
      ))}
      <Html position={[0, 2.5, 0]} center className="pointer-events-none opacity-80 whitespace-nowrap">
        <div className="px-3 py-1 rounded bg-black/60 border border-white/10 backdrop-blur-sm text-[10px] text-white uppercase tracking-widest font-mono shadow-2xl">
          Volvo Dump Truck
        </div>
      </Html>
    </group>
  );
};

// 2. EXCAVATOR (Scoop and Dump Animation)
const Excavator = ({ position }: { position: [number, number, number] }) => {
  const cabRef = useRef<THREE.Group>(null);
  const boomRef = useRef<THREE.Group>(null);
  const armRef = useRef<THREE.Group>(null);
  const bucketRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime * 1.2;
    if (cabRef.current) cabRef.current.rotation.y = Math.sin(t * 0.5) * 0.5;
    if (boomRef.current) boomRef.current.rotation.z = Math.sin(t) * 0.4 + 0.4;
    if (armRef.current) armRef.current.rotation.z = Math.cos(t) * 0.6 - 0.8;
    if (bucketRef.current) bucketRef.current.rotation.z = Math.sin(t) * 1.2 - 0.5;
  });

  return (
    <group position={position}>
      {/* Base/Tracks */}
      <mesh position={[0, 0.4, 0]} castShadow>
        <boxGeometry args={[3, 0.8, 2]} />
        <meshStandardMaterial color={DARK_METAL} roughness={0.9} />
      </mesh>
      {/* Cab (Rotates) */}
      <group ref={cabRef} position={[0, 0.8, 0]}>
        <mesh position={[0, 0.8, 0]} castShadow>
          <boxGeometry args={[2, 1.5, 1.8]} />
          <meshStandardMaterial color={CONSTRUCTION_YELLOW} roughness={0.3} metalness={0.6} />
        </mesh>
        {/* Boom Hinge */}
        <group ref={boomRef} position={[1, 0.5, 0]}>
          <mesh position={[1.5, 0, 0]} castShadow>
            <boxGeometry args={[3.5, 0.4, 0.4]} />
            <meshStandardMaterial color={CONSTRUCTION_YELLOW} />
          </mesh>
          {/* Arm Hinge */}
          <group ref={armRef} position={[3.2, 0, 0]}>
            <mesh position={[1, 0, 0]} castShadow>
              <boxGeometry args={[2.5, 0.3, 0.3]} />
              <meshStandardMaterial color={CONSTRUCTION_YELLOW} />
            </mesh>
            {/* Bucket Hinge */}
            <group ref={bucketRef} position={[2.2, 0, 0]}>
              <mesh position={[0.4, -0.2, 0]} castShadow>
                <boxGeometry args={[0.8, 0.8, 0.8]} />
                <meshStandardMaterial color={DARK_METAL} />
              </mesh>
            </group>
          </group>
        </group>
      </group>
      <Html position={[0, 4, 0]} center className="pointer-events-none opacity-80 whitespace-nowrap">
        <div className="px-3 py-1 rounded bg-black/60 border border-white/10 backdrop-blur-sm text-[10px] text-white uppercase tracking-widest font-mono shadow-2xl">
          Liebherr Excavator Zone
        </div>
      </Html>
    </group>
  );
};

// 3. LOADER (Drive forwards, scoop, reverse)
const LoaderVehicle = ({ initialPosition }: { initialPosition: [number, number, number] }) => {
  const loaderRef = useRef<THREE.Group>(null);
  const armRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const moveZ = Math.sin(t) * 3;
    
    if (loaderRef.current) {
      loaderRef.current.position.z = initialPosition[2] + moveZ;
    }
    
    if (armRef.current) {
      // Lift arm when moving forward (negative Z for facing direction)
      armRef.current.rotation.x = moveZ < 0 ? Math.abs(moveZ) * 0.2 : 0;
    }
  });

  return (
    <group ref={loaderRef} position={initialPosition} rotation={[0, Math.PI, 0]}>
      {/* Chassis */}
      <mesh position={[0, 0.8, 0]} castShadow>
        <boxGeometry args={[1.8, 1.2, 3]} />
        <meshStandardMaterial color={CONSTRUCTION_YELLOW} roughness={0.4} />
      </mesh>
      {/* Arms */}
      <group ref={armRef} position={[0, 1, 1.5]}>
        <mesh position={[0, 0, 1]} castShadow>
          <boxGeometry args={[2, 0.2, 2]} />
          <meshStandardMaterial color={DARK_METAL} />
        </mesh>
      </group>
      {/* Wheels */}
      {[-0.9, 0.9].map((x, i) => (
        [-1, 1].map((z, j) => (
          <mesh key={`ldr-${i}-${j}`} position={[x, 0.5, z]} rotation={[0, 0, Math.PI/2]}>
            <cylinderGeometry args={[0.6, 0.6, 0.4, 16]} />
            <meshStandardMaterial color="#111" />
          </mesh>
        ))
      ))}
      <Html position={[0, 3, 0]} center className="pointer-events-none opacity-80 whitespace-nowrap">
        <div className="px-3 py-1 rounded bg-black/60 border border-white/10 backdrop-blur-sm text-[10px] text-white uppercase tracking-widest font-mono shadow-2xl">
          CAT Loader Ops
        </div>
      </Html>
    </group>
  );
};

// --------------------------------------------------------------------------------
// SCENE / DIORAMA ENVIRONMENT
// --------------------------------------------------------------------------------
const MiningSimulationScene = () => {
  return (
    <group>
      {/* Terrain Floor */}
      <mesh position={[0, -0.1, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial color="#1c1917" roughness={1} metalness={0} />
      </mesh>
      
      {/* Stylized Material Mound (Dirt/Ore) */}
      <mesh position={[-4, 0, -5]} receiveShadow castShadow>
        <coneGeometry args={[3, 2, 8]} />
        <meshStandardMaterial color="#292524" roughness={1} />
      </mesh>

      {/* Vehicles in connected workflow simulation */}
      <Excavator position={[-5, 0, -3]} />
      <DumpTruck />
      <LoaderVehicle initialPosition={[5, 0, 5]} />
    </group>
  );
};

// --------------------------------------------------------------------------------
// MAIN EXPORT SECTION (HTML + R3F Canvas)
// --------------------------------------------------------------------------------
const PracticeTrack: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  
  // Cinematic fade and scale
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.95, 1]);

  return (
    <section ref={containerRef} className="relative py-40 px-6 bg-[#050505] overflow-hidden min-h-[140vh]">
      
      {/* Background Cinematic Grid Lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-white">
           <line x1="0" y1="20" x2="100" y2="20" stroke="currentColor" strokeWidth="0.1" />
           <line x1="0" y1="40" x2="100" y2="40" stroke="currentColor" strokeWidth="0.1" />
           <line x1="0" y1="60" x2="100" y2="60" stroke="currentColor" strokeWidth="0.1" />
           <line x1="0" y1="80" x2="100" y2="80" stroke="currentColor" strokeWidth="0.1" />
        </svg>
      </div>

      <div className="max-w-[90rem] mx-auto relative z-10 flex flex-col items-center">
        
        {/* Animated Typography Intro */}
        <motion.div style={{ opacity }} className="text-center mb-16 max-w-4xl z-20 pointer-events-none">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-teal-400 text-[10px] font-black uppercase tracking-[0.4em] mb-8 backdrop-blur-md">
             <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
             Live R3F Simulation Engine
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.05] text-white mb-8">
            Interactive <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">Mining Ecosystem.</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto">
            Drag, rotate, and explore our interconnected 100-acre track. Watch as standard heavy operations—Excavation, Loading, and Haulage—are simulated in real-time WebGL.
          </p>
        </motion.div>

        {/* 3D CANVAS COMPONENT */}
        <motion.div 
           style={{ opacity, scale }}
           className="w-full h-[700px] md:h-[900px] rounded-[3rem] overflow-hidden bg-gradient-to-tr from-zinc-950 to-[#0A0A0A] border border-white/5 relative shadow-[0_40px_100px_rgba(45,212,191,0.05)] cursor-grab active:cursor-grabbing"
        >
           {/* Decorative Vignette Overlay */}
           <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.95)] z-10" />

           <Canvas shadows camera={{ position: [15, 10, 15], fov: 40 }} gl={{ antialias: true, alpha: false }}>
             <ambientLight intensity={0.4} />
             <directionalLight 
               position={[20, 30, 10]} 
               intensity={1.5} 
               castShadow 
               shadow-mapSize-width={2048} 
               shadow-mapSize-height={2048} 
               shadow-camera-far={50}
               shadow-camera-left={-20}
               shadow-camera-right={20}
               shadow-camera-top={20}
               shadow-camera-bottom={-20}
             />
             {/* Studio Rim Lights */}
             <spotLight position={[-20, 10, -10]} intensity={1} color="#7c3aed" />
             <spotLight position={[0, 10, -20]} intensity={1} color="#4eeac8" />

             {/* Environment for Realistic Metal Reflections */}
             <Environment preset="city" />

             {/* Main Simulation Hub */}
             <MiningSimulationScene />

             {/* Soft baked ground shadows */}
             <ContactShadows 
               position={[0, 0, 0]} 
               opacity={0.6} 
               scale={40} 
               blur={1.5} 
               far={4} 
               color="#000000" 
             />

             {/* Camera Interaction */}
             <OrbitControls 
               autoRotate 
               autoRotateSpeed={0.5} 
               enablePan={false} 
               enableZoom={false}
               minPolarAngle={Math.PI / 6} // Prevent top-down extreme
               maxPolarAngle={Math.PI / 2.1} // Prevent looking completely under the floor
             />
           </Canvas>
        </motion.div>
        
      </div>
    </section>
  );
};

export default PracticeTrack;
