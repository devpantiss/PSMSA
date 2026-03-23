import React, { useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  FaShieldAlt, 
  FaFireExtinguisher, 
  FaUserMd, 
  FaFileDownload,
  FaHardHat,
  FaMountain,
  FaGavel,
  FaUserShield,
  FaCloudShowersHeavy,
  FaTools,
  FaExclamationTriangle,
  FaArrowRight
} from "react-icons/fa";
import { ShieldCheck, Zap, MousePointer2 } from "lucide-react";

const FuturisticBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#050505]">
      {/* Dynamic Mesh Gradients */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-purple-900/10 blur-[120px] rounded-full"
      />
      <motion.div 
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -40, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[20%] -right-[10%] w-[80%] h-[80%] bg-indigo-900/10 blur-[150px] rounded-full"
      />
      
      {/* Animated Scanlines */}
      <div className="absolute inset-0 opacity-[0.03] z-10"
           style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 3px, transparent 4px)", backgroundSize: "100% 4px" }} />
           
      {/* Industrial Grid with Perspective */}
      <div className="absolute inset-0 opacity-[0.08] z-0" 
           style={{ 
             backgroundImage: "linear-gradient(#8b5cf6 1px, transparent 1px), linear-gradient(90deg, #8b5cf6 1px, transparent 1px)", 
             backgroundSize: "80px 80px",
             perspective: "1000px",
             transform: "rotateX(60deg) translateY(-20%) translateZ(-200px)"
           }} />

      {/* Floating Particles/Nodes */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0.5],
              x: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
              y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
            }}
            transition={{ 
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-1 h-1 bg-purple-500 rounded-full"
          />
        ))}
      </div>
    </div>
  );
};

const BentoCard: React.FC<{ 
  approval: any; 
  className?: string; 
  delay?: number 
}> = ({ approval, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      className={`group relative overflow-hidden rounded-[2rem] border border-white/5 bg-zinc-900/20 p-8 backdrop-blur-3xl transition-all duration-500 hover:border-purple-500/30 hover:bg-zinc-900/40 ${className}`}
    >
      {/* Glowing Trail Effect on Hover */}
      <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-purple-500/20 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-auto">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:text-white transition-all duration-500 border border-purple-500/10">
            {approval.icon}
          </div>
          <div className="flex flex-col items-end">
             <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-2">
                {approval.status}
              </span>
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="text-3xl font-black mb-3 tracking-tighter group-hover:text-purple-400 transition-colors uppercase italic italic-font">
            {approval.name}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed font-light line-clamp-3">
            {approval.desc}
          </p>
        </div>

        <motion.div 
          className="mt-8 flex items-center gap-2 text-xs font-bold text-purple-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 cursor-pointer"
        >
          <span>Learn Compliance</span>
          <FaArrowRight />
        </motion.div>
      </div>
    </motion.div>
  );
};

const TiltCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientY - top) / height;
    const y = (e.clientX - left) / width;
    setRotate({ x: (x - 0.5) * 20, y: (y - 0.5) * -20 });
  };

  const onMouseLeave = () => setRotate({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{ transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const StatutorySafetyCompliance: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const statutoryApprovals = [
    { 
      name: "DGMS", 
      desc: "Directorate General of Mines Safety - Regulatory body for safety in mines.", 
      icon: <FaUserShield className="w-8 h-8" />,
      status: "Verified",
      span: "md:col-span-2 md:row-span-1"
    },
    { 
      name: "IBM", 
      desc: "Indian Bureau of Mines - Promoting systematic and scientific development of mineral resources.", 
      icon: <FaGavel className="w-8 h-8" />,
      status: "Verified",
      span: "md:col-span-1 md:row-span-1"
    },
    { 
      name: "MOEFCC", 
      desc: "Ministry of Environment, Forest and Climate Change - Environmental clearances for mining.", 
      icon: <FaMountain className="w-8 h-8" />,
      status: "Verified",
      span: "md:col-span-1 md:row-span-1"
    },
    { 
      name: "OSPCB", 
      desc: "Odisha State Pollution Control Board - Compliance with environmental standards.", 
      icon: <FaCloudShowersHeavy className="w-8 h-8" />,
      status: "Verified",
      span: "md:col-span-2 md:row-span-1"
    },
  ];

  const miningCertifications = [
    { 
      title: "First Aid for Mines", 
      subtitle: "St. John Ambulance Association", 
      icon: <FaUserMd className="w-10 h-10" />,
      gradient: "from-blue-500/20 to-cyan-500/20",
      accent: "text-blue-400"
    },
    { 
      title: "VOC Training", 
      subtitle: "Vocational Training (VT) Rules 1966", 
      icon: <FaTools className="w-10 h-10" />,
      gradient: "from-purple-500/20 to-pink-500/20",
      accent: "text-purple-400"
    },
    { 
      title: "Gas Testing Certificate", 
      subtitle: "Mandatory for Underground Mines", 
      icon: <Zap className="w-10 h-10" />,
      gradient: "from-orange-500/20 to-yellow-500/20",
      accent: "text-orange-400"
    },
    { 
      title: "Statutory Competency", 
      subtitle: "Overman / Mining Mate / Foreman", 
      icon: <ShieldCheck className="w-10 h-10" />,
      gradient: "from-green-500/20 to-emerald-500/20",
      accent: "text-green-400"
    },
  ];

  const miningEmergencyProtocols = [
    {
      title: "Mine Inundation",
      icon: <FaCloudShowersHeavy className="w-10 h-10" />,
      steps: ["Activate primary pump systems", "Evacuate up-dip sections", "Isolate electrical power", "Report to surface control"],
      color: "blue"
    },
    {
      title: "Strata/Roof Collapse",
      icon: <FaMountain className="w-10 h-10" />,
      steps: ["Stop all operations", "Withdraw to safe support zone", "Assess damage beyond fall", "Follow rescue plan"],
      color: "orange"
    },
    {
      title: "Fire / Gas Leak",
      icon: <FaFireExtinguisher className="w-10 h-10" />,
      steps: ["Don Self-Rescuers (FSR)", "Travel towards intake airway", "Seal off fire zone if possible", "Check CO/CH4 detectors"],
      color: "red"
    },
    {
      title: "Slope Failure (OC)",
      icon: <FaExclamationTriangle className="w-10 h-10" />,
      steps: ["Immediate withdrawal of HEMM", "Cordon off the slide area", "Monitor tension cracks", "Wait for geo-tech clearance"],
      color: "yellow"
    },
  ];

  // const titleRef = useRef(null);

  return (
    <div className="min-h-screen bg-[#050505] text-gray-100 font-sans selection:bg-purple-500/30 selection:text-purple-400 pb-20 overflow-x-hidden">
      <FuturisticBackground />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-600 z-[100] origin-left"
        style={{ scaleX }}
      />

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 lg:px-8">
        
        {/* Hero Section */}
        <section className="relative my-32 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-purple-400 text-xs font-bold uppercase tracking-[0.3em] mb-12 backdrop-blur-md"
          >
            <FaShieldAlt className="animate-pulse" />
            <span>Industrial Compliance Protocol v2.4</span>
          </motion.div>

          <div className="relative">
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] bg-gradient-to-b from-white via-white to-white/20 bg-clip-text text-transparent uppercase italic"
            >
              Statutory & <br/> Safety <span className="text-purple-500">Compliance</span>
            </motion.h1>
            
            {/* Decorative Scanning Line */}
            <motion.div 
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-[2px] bg-purple-500/50 blur-sm pointer-events-none"
            />
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-2xl mx-auto text-xl text-gray-400 leading-relaxed font-light"
          >
            Pantiss Skill University operates at the nexus of <span className="text-purple-400 font-bold tracking-wider">DGMS & VT Safety Standards</span>, engineering a zero-incident future for India's underground & opencast mining sectors.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12"
          >
            <div className="flex flex-col items-center gap-4">
               <div className="w-px h-16 bg-gradient-to-b from-purple-500 to-transparent" />
               <MousePointer2 className="text-purple-500 animate-bounce" />
            </div>
          </motion.div>
        </section>

        {/* Statutory Approvals - Bento Box */}
        <section className="mb-40">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 italic italic-font">
                Statutory <span className="text-purple-500">Framework</span>
              </h2>
              <div className="h-1 w-24 bg-purple-600" />
            </div>
            <p className="max-w-md text-gray-500 text-sm font-medium uppercase tracking-widest">
              Global accreditation and regulatory alignment for mining excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {statutoryApprovals.map((approval, idx) => (
              <BentoCard 
                key={approval.name} 
                approval={approval} 
                className={approval.span}
                delay={idx * 0.1}
              />
            ))}
          </div>
        </section>

        {/* Mining Safety Certifications - 3D Tilt */}
        <section className="mb-40">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <p className="max-w-md text-gray-500 text-sm font-medium uppercase tracking-widest order-2 md:order-1">
              Mandatory certifications for sub-surface and hazardous operations.
            </p>
            <div className="text-right order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 italic tracking-tighter">
                Strategic <span className="text-purple-500">Certifications</span>
              </h2>
              <div className="h-1 w-24 bg-purple-600 ml-auto" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {miningCertifications.map((cert, idx) => (
              <TiltCard key={cert.title} className="h-full">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative h-full p-8 rounded-[2.5rem] bg-zinc-950 border border-white/5 overflow-hidden flex flex-col items-center text-center shadow-2xl"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                  
                  {/* Glass Inner Card */}
                  <div className="relative z-10 w-full h-full flex flex-col items-center">
                    <div className={`mb-8 p-6 rounded-3xl bg-white/5 border border-white/10 ${cert.accent} group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500`}>
                      {cert.icon}
                    </div>
                    <h3 className="text-xl font-black mb-4 group-hover:text-white transition-colors uppercase tracking-tighter italic tracking-tighter">{cert.title}</h3>
                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold leading-relaxed">{cert.subtitle}</p>
                    
                    <div className="mt-auto pt-8 flex items-center gap-1 opacity-20 group-hover:opacity-100 transition-opacity">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-1 h-3 bg-current rounded-full" />
                      ))}
                    </div>
                  </div>

                  {/* Tech Details Overlay */}
                  <div className="absolute top-4 right-6 text-[8px] font-mono text-white/20 uppercase tracking-[0.5em] rotate-90 origin-right">
                    Reg-ID: {Math.random().toString(36).substring(7).toUpperCase()}
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </section>

        {/* Mining HSE Policy Section */}
        <section className="mb-40">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[3rem] overflow-hidden bg-zinc-950 border border-white/5 shadow-[0_0_100px_rgba(139,92,246,0.05)] flex flex-col lg:flex-row relative"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            <div className="lg:w-2/5 p-12 md:p-20 bg-gradient-to-br from-purple-700 via-purple-900 to-black flex flex-col justify-center text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full -mr-48 -mt-48 animate-pulse" />
              <FaHardHat className="text-8xl mb-12 opacity-20" />
              <h2 className="text-5xl md:text-6xl font-black mb-8 leading-[0.9] tracking-tighter uppercase italic tracking-tighter">Mines <br/>Safety <br/>Manifesto</h2>
              <p className="text-lg opacity-70 mb-12 leading-relaxed font-light">
                Engineering a "Vision Zero" ecosystem through the strict adoption of the <span className="font-bold border-b border-white/20">Mines Act 1952</span> and real-world hazard mitigation.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-4 px-12 py-6 bg-white text-black rounded-full font-black uppercase tracking-widest text-sm hover:bg-purple-500 hover:text-white transition-all shadow-2xl group"
              >
                <FaFileDownload className="group-hover:translate-y-1 transition-transform text-xl" />
                Download HSE Manual
              </motion.button>
            </div>

            <div className="lg:w-3/5 p-12 md:p-20 bg-black/50 backdrop-blur-3xl text-gray-200">
              <div className="prose prose-invert max-w-none">
                <div className="flex items-center gap-4 mb-12">
                   <div className="w-12 h-px bg-purple-500" />
                   <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-purple-500">Document Review 2024</h3>
                </div>
                
                <div className="space-y-10">
                  <p className="text-3xl font-light italic leading-tight text-white/90">
                    "Safe Mining is not a metric, it is a <span className="text-purple-500 font-bold">Moral Imperative</span>. We compromise nothing for production."
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                    {[
                      "Mandatory VOC machine operator vetting",
                      "Real-time Dust & Ventilation monitoring",
                      "Full-spectrum PPE Compliance",
                      "Bi-weekly Strata failure simulations"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                        <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#8b5cf6]" />
                        <span className="text-gray-400 font-medium uppercase tracking-wider text-xs">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                      <p className="text-2xl font-black text-white uppercase italic tracking-tighter">Jagdev Pradhan</p>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-purple-500 font-bold">Founding Director</p>
                    </div>
                    <div className="text-center md:text-right px-8 py-4 rounded-2xl bg-purple-500/5 border border-purple-500/10">
                      <p className="text-4xl font-serif text-purple-500/40 italic">Jagdev</p>
                      <p className="text-[8px] tracking-[0.5em] uppercase text-white/30">Digitally Authenticated</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Emergency Response Dashboard */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 italic tracking-tighter">
                Emergency <span className="text-red-500 animate-pulse">Protocols</span>
              </h2>
              <div className="h-1 w-24 bg-red-600" />
            </div>
            <p className="max-w-md text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em]">
              High-priority response sequences for underground & surface anomalies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {miningEmergencyProtocols.map((protocol, idx) => (
              <motion.div 
                key={protocol.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative h-full flex flex-col"
              >
                <div className={`p-8 rounded-[2rem] bg-zinc-950 border border-white/5 group-hover:border-${protocol.color}-500/30 transition-all flex flex-col h-full bg-gradient-to-b from-transparent to-white/5`}>
                  <div className={`mb-8 w-20 h-20 rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-all duration-500 text-${protocol.color}-500`}>
                    {protocol.icon}
                  </div>
                  <h3 className="text-xl font-black mb-8 text-white uppercase tracking-tighter italic tracking-tighter">{protocol.title}</h3>
                  <ul className="space-y-4 flex-grow">
                    {protocol.steps.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-300 transition-colors">
                        <span className={`w-1.5 h-1.5 rounded-full bg-${protocol.color}-500 mt-1 flex-shrink-0 animate-pulse`} />
                        {step}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                     <span className={`text-[8px] font-black uppercase tracking-[0.3em] text-${protocol.color}-500`}>Priority Alpha</span>
                     <div className={`w-2 h-2 rounded-full bg-${protocol.color}-500 animate-ping shadow-[0_0_10px_current]`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </main>

      {/* Futuristic CRT/Scanline Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[200] opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
    </div>
  );
};

export default StatutorySafetyCompliance;
