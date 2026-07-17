import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "daily-life", label: "Daily Life" },
  { id: "facilities", label: "Facilities" },
  { id: "safety", label: "Safety" },
  { id: "industry", label: "Industry" },
  { id: "community", label: "Community" },
  { id: "stories", label: "Stories" },
  { id: "gallery", label: "Gallery" },
];

const SectionNav: React.FC = () => {
  const [active, setActive] = useState("overview");
  const [visible, setVisible] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after hero
      setVisible(window.scrollY > window.innerHeight * 0.6);

      // Find active section
      let current = "overview";
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) current = item.id;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Keep active tab visible in mobile scroll
  useEffect(() => {
    if (scrollRef.current) {
      const activeBtn = scrollRef.current.querySelector(`[data-id="${active}"]`) as HTMLElement;
      if (activeBtn) {
        activeBtn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  }, [active]);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={visible ? { y: 0, opacity: 1 } : { y: -60, opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-[90] flex items-center justify-center"
      aria-label="Campus Life sections navigation"
    >
      <div className="mx-auto mt-3 flex items-center gap-1 rounded-full border border-white/10 bg-black/70 px-2 py-1.5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              data-id={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.22em] transition-all duration-200 ${
                active === item.id
                  ? "text-black"
                  : "text-white/55 hover:text-white"
              }`}
            >
              {active === item.id && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-[#4eeac8]"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Mobile: horizontally scrollable */}
        <div
          ref={scrollRef}
          className="flex md:hidden items-center gap-1 overflow-x-auto scrollbar-hide max-w-[92vw] px-1"
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              data-id={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative flex-shrink-0 px-3.5 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-[0.2em] transition-all duration-200 whitespace-nowrap ${
                active === item.id
                  ? "bg-[#4eeac8] text-black"
                  : "text-white/55 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default SectionNav;
