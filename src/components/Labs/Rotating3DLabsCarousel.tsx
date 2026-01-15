import React, { useMemo, useRef, useState } from "react";
import { X, ZoomIn } from "lucide-react";

/* -------------------------------------------------------
   LAB IMAGES (replace URLs anytime)
------------------------------------------------------- */
const cards = [
  {
    id: 0,
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762158602/WhatsApp_Image_2025-03-03_at_10.47.37_PM_ex1zpe.jpg",
  },
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762160341/WhatsApp_Image_2025-11-03_at_2.21.32_PM_cepy4c.jpg",
  },
  {
    id: 2,
    image:
      "https://www.ferris.edu/CET/design-mfg/welding/laboratory-facilities/images/labs-classrooms-home.jpg",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762158602/WhatsApp_Image_2025-02-28_at_5.00.19_PM_frl41v.jpg",
  },
  {
    id: 4,
    image:
      "https://cdn.prod.website-files.com/67139b4944f3d6b890cda082/6720a95f025dc22684bab942_64f07126f5659751e457ca5a_workforce-management-system-mining-industry.jpeg",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762157793/welding_pjajxn.webp",
  },
  {
    id: 6,
    image: "/images/hemm_4.jpg",
  },
  {
    id: 7,
    image: "/images/hemm_3.JPG",
  },
  {
    id: 8,
    image: "/images/hemm_2.JPG",
  },
  {
    id: 9,
    image: "/images/hemm_1.jpg",
  },
  {
    id: 10,
    image: "/images/weld.jpg",
  },
];

const ACCENT = "#4eeac8";

const Rotating3DLabsCarousel: React.FC = () => {
  const wrapRef = useRef<HTMLDivElement | null>(null);

  // tilt values
  const [tilt, setTilt] = useState({ rx: -10, ry: 0 });

  // pause rotation
  const [paused, setPaused] = useState(false);

  // modal preview
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Safe unique key generation (fix duplicate id issues)
  const safeCards = useMemo(
    () => cards.map((c, idx) => ({ ...c, _key: `${c.id}-${idx}` })),
    []
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!wrapRef.current) return;

    const rect = wrapRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1

    // map to degrees
    const ry = (px - 0.5) * 22; // left-right
    const rx = -(py - 0.5) * 12 - 10; // up-down with base tilt

    setTilt({ rx, ry });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: -10, ry: 0 });
  };

  return (
    <>
      <section
        ref={wrapRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => setPaused(true)}
        onMouseOut={() => setPaused(false)}
        className="relative w-full h-[520px] flex items-center justify-center overflow-hidden bg-transparent select-none"
      >
        {/* ===== IMMERSIVE PLATFORM / SPOTLIGHT ===== */}
        <div className="pointer-events-none absolute inset-0">
          {/* soft neon ambient */}
          <div
            className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px]"
            style={{ backgroundColor: `${ACCENT}14` }}
          />

          {/* spotlight beam */}
          <div
            className="absolute left-1/2 top-0 h-full w-[320px] -translate-x-1/2 opacity-40 blur-[2px]"
            style={{
              background:
                "linear-gradient(to bottom, rgba(78,234,200,0.22), transparent 70%)",
            }}
          />

          {/* platform rings */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div
              className="h-[220px] w-[250px] rounded-full border opacity-70"
              style={{
                borderColor: "rgba(78,234,200,0.35)",
                boxShadow: "0 0 60px rgba(78,234,200,0.12)",
              }}
            />
            <div
              className="absolute inset-[-16px] rounded-full border border-dashed opacity-40 animate-[spin_14s_linear_infinite]"
              style={{ borderColor: "rgba(78,234,200,0.28)" }}
            />
            <div
              className="absolute inset-[28px] rounded-full border opacity-50"
              style={{ borderColor: "rgba(78,234,200,0.22)" }}
            />
          </div>

          {/* floor shadow */}
          <div className="absolute bottom-12 left-1/2 h-[120px] w-[420px] -translate-x-1/2 rounded-full bg-black/60 blur-2xl" />
        </div>

        {/* ===== 3D CAROUSEL WRAPPER ===== */}
        <div className="relative w-full h-full flex items-center justify-center">
          <div
            style={{ "--quantity": safeCards.length } as React.CSSProperties}
            className="relative"
          >
            <div
              className="inner-3d"
              style={
                {
                  "--rx": `${tilt.rx}deg`,
                  "--ry": `${tilt.ry}deg`,
                  "--play": paused ? "paused" : "running",
                } as React.CSSProperties
              }
            >
              {safeCards.map((card, index) => (
                <button
                  key={card._key}
                  type="button"
                  className="card-3d group"
                  style={{ "--index": index } as React.CSSProperties}
                  onClick={() => setActiveImage(card.image)}
                  aria-label="Open lab preview"
                >
                  <img
                    src={card.image}
                    alt="Lab Preview"
                    className="img-3d"
                    loading="lazy"
                  />

                  {/* hover HUD */}
                  <div className="hud pointer-events-none">
                    <div className="hud-chip">
                      <ZoomIn className="h-3.5 w-3.5" />
                      Preview
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ===== Hint text ===== */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs text-white/70 backdrop-blur-xl">
          Hover to pause • Move mouse to tilt • Click a card to preview
        </div>

        {/* Scoped 3D styles */}
        <style>{`
          .inner-3d {
            --w: 160px;
            --h: 190px;
            --translateZ: calc(var(--w) + var(--h) + 40px);
            --rotateX: -14deg;
            --perspective: 1200px;

            position: relative;
            width: var(--w);
            height: var(--h);

            transform-style: preserve-3d;

            /* Immersive tilt */
            transform:
              perspective(var(--perspective))
              rotateX(var(--rx, var(--rotateX)))
              rotateY(var(--ry, 0deg));

            animation: rotate-3d 20s linear infinite;
            animation-play-state: var(--play, running);
            transition: transform 0.25s ease;
          }

          @keyframes rotate-3d {
            from {
              transform:
                perspective(var(--perspective))
                rotateX(var(--rx, var(--rotateX)))
                rotateY(var(--ry, 0deg))
                rotateY(0deg);
            }
            to {
              transform:
                perspective(var(--perspective))
                rotateX(var(--rx, var(--rotateX)))
                rotateY(var(--ry, 0deg))
                rotateY(360deg);
            }
          }

          .card-3d {
            position: absolute;
            inset: 0;
            border-radius: 18px;
            overflow: hidden;
            cursor: pointer;

            border: 1px solid rgba(78,234,200,0.35);
            box-shadow:
              0 0 20px rgba(78, 234, 200, 0.35),
              inset 0 0 18px rgba(78, 234, 200, 0.12);

            transform:
              rotateY(calc((360deg / var(--quantity)) * var(--index)))
              translateZ(var(--translateZ));

            background: rgba(0, 0, 0, 0.55);

            transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
          }

          .card-3d:hover {
            border-color: rgba(78,234,200,0.7);
            box-shadow:
              0 0 34px rgba(78, 234, 200, 0.45),
              inset 0 0 18px rgba(78, 234, 200, 0.18);
          }

          .img-3d {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: brightness(0.82) contrast(1.15) saturate(1.1);
            transition: transform 0.55s ease, filter 0.55s ease;
          }

          .card-3d:hover .img-3d {
            transform: scale(1.08);
            filter: brightness(1) contrast(1.15) saturate(1.2);
          }

          .hud {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            padding: 10px;
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .card-3d:hover .hud {
            opacity: 1;
          }

          .hud-chip {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 11px;
            color: rgba(255,255,255,0.85);
            padding: 8px 10px;
            border-radius: 999px;
            background: rgba(0,0,0,0.55);
            border: 1px solid rgba(255,255,255,0.10);
            backdrop-filter: blur(14px);
            box-shadow: 0 0 26px rgba(78,234,200,0.18);
          }

          @media (max-width: 640px) {
            .inner-3d {
              --w: 110px;
              --h: 150px;
            }
          }
        `}</style>
      </section>

      {/* ===== Fullscreen Preview Modal ===== */}
      {activeImage && (
        <div className="fixed inset-0 z-[999] grid place-items-center bg-black/80 backdrop-blur-xl">
          <div className="relative w-[92vw] max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-black/70">
            {/* top bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <p className="text-sm font-semibold text-white/90">
                Lab Preview
                <span className="ml-2 text-xs font-normal text-white/50">
                  (click outside or close)
                </span>
              </p>

              <button
                onClick={() => setActiveImage(null)}
                className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/80 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* image */}
            <div className="relative aspect-[16/9] w-full bg-black">
              <img
                src={activeImage}
                alt="Lab Full Preview"
                className="h-full w-full object-cover"
              />

              {/* neon overlay */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.08), 0 0 90px ${ACCENT}18`,
                }}
              />
            </div>
          </div>

          {/* click outside close */}
          <button
            className="absolute inset-0"
            onClick={() => setActiveImage(null)}
            aria-label="Close modal"
          />
        </div>
      )}
    </>
  );
};

export default Rotating3DLabsCarousel;
