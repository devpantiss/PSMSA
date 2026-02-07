import { useState, Suspense } from "react";
import { Download } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  useGLTF,
  Bounds,
} from "@react-three/drei";

/* ===================== TYPES ===================== */

type Program = {
  id: string;
  name: string;
  description: string;
  duration: string;
  certification: string;
  pdfUrl: string;
  image: string;
};

/* ===================== DATA ===================== */

const PROGRAMS: Program[] = [
  {
    id: "diploma_polytechnic",
    name: "Diploma / Polytechnic Programs",
    description:
      "Comprehensive diploma programmes designed to build strong technical foundations with extensive lab, workshop, and on-field exposure aligned to core industries and PSU requirements.",
    duration: "2–3 Years",
    certification: "State / AICTE Approved Diploma Certificate",
    pdfUrl: "/pdfs/Diploma-Polytechnic-Curriculum.pdf",
    image:
      "https://images.unsplash.com/photo-1581092588429-62f09c6b4b5f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "iti",
    name: "Industrial Training Institute (ITI)",
    description:
      "NCVT/SCVT-aligned trade programmes focused on hands-on skill development for high-demand industrial and technical roles.",
    duration: "1–2 Years",
    certification: "NCVT / SCVT Trade Certificate",
    pdfUrl: "/pdfs/ITI-Curriculum.pdf",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "upskilling_reskilling",
    name: "Workmen Upskilling & Reskilling Programs",
    description:
      "Short-duration programs designed to upgrade workforce skills and enable transition to modern technologies and machinery.",
    duration: "1–6 Months",
    certification: "Industry Aligned Skill Upgrade Certificate",
    pdfUrl: "/pdfs/Upskilling-Reskilling.pdf",
    image:
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df47?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "women_in_mining",
    name: "Women in Mining Program",
    description:
      "Safety-first skilling initiatives enabling women’s participation in mining and heavy industry roles.",
    duration: "8–12 Weeks",
    certification: "Industry Certified Mining Program",
    pdfUrl: "/pdfs/Women-in-Mining-Curriculum.pdf",
    image:
      "https://images.unsplash.com/photo-1542339147-17b88b5f7a9f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "operator_licensing",
    name: "Operator Licensing Program",
    description:
      "Formal licensing programs enhancing safety compliance and employability of heavy equipment operators.",
    duration: "6–12 Weeks",
    certification: "Government / OEM Certified Operator License",
    pdfUrl: "/pdfs/Operator-Licensing-Curriculum.pdf",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "international_mobility",
    name: "International Mobility Program",
    description:
      "Global workforce programs preparing candidates for overseas employment in mining, energy and infrastructure.",
    duration: "3–9 Months",
    certification: "International Skill Certification",
    pdfUrl: "/pdfs/International-Mobility.pdf",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80",
  },
];

/* ===================== 3D MODEL ===================== */

function SkillUniverseModel() {
  const { scene } = useGLTF("/model/worker.glb");
  return <primitive object={scene} />;
}

/* ===================== COMPONENT ===================== */

export default function ProgrammeSyllabusExplorer() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeProgram = PROGRAMS.find((p) => p.id === activeId);

  const toggle = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative w-full bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_15%,rgba(168,85,247,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_85%,rgba(147,51,234,0.14),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* ===================== LEFT ===================== */}
          <div className="lg:col-span-5">
            <h2 className="text-[48px] leading-[1.05] font-light tracking-tight">
              PROGRAMMES
              <br />& CURRICULUM
            </h2>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
              Structured skilling pathways designed for industrial deployment,
              statutory compliance and long-term workforce readiness.
            </p>

            {/* IMAGE OR 3D MODEL */}
            <div className="relative mt-12 h-[360px] overflow-hidden rounded-lg border border-white/10 bg-black">
              {activeProgram ? (
                <img
                  key={activeProgram.id}
                  src={activeProgram.image}
                  alt={activeProgram.name}
                  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
                />
              ) : (
                <Canvas
                  camera={{ fov: 42 }}
                  dpr={[1, 1.5]}
                >
                  <ambientLight intensity={0.7} />
                  <directionalLight
                    position={[6, 10, 6]}
                    intensity={1}
                  />

                  <Suspense fallback={null}>
                    {/* AUTO-FIT + CENTER */}
                    <Bounds fit clip observe margin={1.25}>
                      <SkillUniverseModel />
                    </Bounds>
                    <Environment preset="city" />
                  </Suspense>

                  <OrbitControls
                    autoRotate
                    autoRotateSpeed={0.45}
                    enableZoom={false}
                    enablePan={false}
                    minPolarAngle={Math.PI / 2.3}
                    maxPolarAngle={Math.PI / 2.3}
                  />
                </Canvas>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* ===================== RIGHT ===================== */}
          <div className="lg:col-span-7">
            <div className="border-t border-white/30">
              {PROGRAMS.map((program) => {
                const isActive = program.id === activeId;

                return (
                  <div key={program.id} className="border-b border-white/30">
                    {/* HEADER */}
                    <button
                      onClick={() => toggle(program.id)}
                      className="w-full flex items-center justify-between py-6 text-left"
                    >
                      <span className="text-lg tracking-wide">
                        {program.name}
                      </span>

                      {/* + → × */}
                      <span
                        className={`text-5xl font-light transition-transform duration-300 ${
                          isActive ? "rotate-45" : "rotate-0"
                        }`}
                      >
                        +
                      </span>
                    </button>

                    {/* BODY */}
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-500 ${
                        isActive
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden pb-4">
                        <p className="text-sm text-white/65 max-w-3xl">
                          {program.description}
                        </p>

                        <div className="mt-6 grid grid-cols-2 gap-10 text-xs tracking-widest text-white/60">
                          <div>
                            <p className="text-white/40">DURATION</p>
                            <p className="mt-1">{program.duration}</p>
                          </div>
                          <div>
                            <p className="text-white/40">CERTIFICATION</p>
                            <p className="mt-1">{program.certification}</p>
                          </div>
                        </div>

                        <div className="mt-6">
                          <a
                            href={program.pdfUrl}
                            download
                            className="inline-flex items-center gap-3 border border-white/20 px-6 py-3 text-xs tracking-widest text-white/80 hover:bg-white/5 transition"
                          >
                            DOWNLOAD SYLLABUS
                            <Download className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== PRELOAD ===================== */
useGLTF.preload("/model/worker.glb");
