import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    Truck,
    Wrench,
    // Cpu,
    Sparkles,
} from "lucide-react";

/* === Imported Lab Components === */
import HEMMMechanicsShowcase from "./HEMMMechanicsShowcase";
import HEMMMechanicLabPartsShowcase from "./HEMMMechanicLabPartsShowcase";
// import ElectricalLabImmersive from "./ElectricalLabViewer";
import ARVRLabShowcase from "./ARVRLabShowcase";

type LabKey = "fleet" | "parts" | "electrical" | "arvr";

const TABS: {
    key: LabKey;
    label: string;
    icon: React.ReactNode;
    description: string;
}[] = [
        {
            key: "fleet",
            label: "Training Fleet",
            icon: <Truck className="h-4 w-4" />,
            description: "3D heavy equipment simulators",
        },
        {
            key: "parts",
            label: "HEMM Lab Parts",
            icon: <Wrench className="h-4 w-4" />,
            description: "Mechanic systems & components",
        },
        // {
        //     key: "electrical",
        //     label: "Electrical Lab",
        //     icon: <Cpu className="h-4 w-4" />,
        //     description: "Immersive electrical diagnostics",
        // },
        {
            key: "arvr",
            label: "AR / VR Lab",
            icon: <Sparkles className="h-4 w-4" />,
            description: "Virtual skill simulations",
        },
    ];

export default function TrainingLabsSection() {
    const [activeTab, setActiveTab] = useState<LabKey>("fleet");

    return (
        <section className="relative w-full bg-transparent py-4 text-white">
            <div className="mx-auto max-w-7xl px-5">
                {/* ================= HEADER ================= */}
                <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-white/70">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-[#4eeac8]" />
                            Integrated Training Infrastructure
                        </p>

                        <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                            Advanced Training Labs
                        </h2>

                        <p className="mt-2 max-w-2xl text-sm text-white/65 md:text-base">
                            Explore our technology-enabled training ecosystem — from heavy
                            equipment simulators to immersive AR/VR labs.
                        </p>
                    </div>
                </div>

                {/* ================= TABS ================= */}
                <div className="mb-6 flex flex-wrap gap-2">
                    {TABS.map((tab) => {
                        const isActive = tab.key === activeTab;

                        return (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={[
                                    "group flex items-center gap-3 rounded-2xl border px-5 py-3 text-sm transition",
                                    "backdrop-blur-xl",
                                    isActive
                                        ? "border-white/20 bg-white/10"
                                        : "border-white/10 bg-white/5 hover:border-white/20",
                                ].join(" ")}
                            >
                                <span
                                    className={[
                                        "grid h-9 w-9 place-items-center rounded-xl border",
                                        isActive
                                            ? "border-white/20 bg-black/50 text-[#4eeac8]"
                                            : "border-white/10 bg-black/40 text-white/70",
                                    ].join(" ")}
                                >
                                    {tab.icon}
                                </span>

                                <div className="text-left">
                                    <p className="font-semibold">{tab.label}</p>
                                    <p className="text-xs text-white/50">{tab.description}</p>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* ===== Separator Line ===== */}
                <div className="relative mb-10">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>

                {/* ================= CONTENT ================= */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            {activeTab === "fleet" && <HEMMMechanicsShowcase />}
                            {activeTab === "parts" && <HEMMMechanicLabPartsShowcase />}
                            {/* {activeTab === "electrical" && <ElectricalLabImmersive />} */}
                            {activeTab === "arvr" && <ARVRLabShowcase />}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}