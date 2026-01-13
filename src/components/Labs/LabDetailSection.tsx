import React from "react";

interface LabCard {
  id: number;
  title: string;
  image: string;
  neon: string; // RGB values for neon glow
}

const labs: LabCard[] = [
  {
    id: 0,
    title: "Electrical Lab",
    image:
      "https://images.unsplash.com/photo-1581091870627-3f9c8a9d9c3c",
    neon: "78,234,200",
  },
  {
    id: 1,
    title: "HEMM Mechanic Lab",
    image:
      "https://images.unsplash.com/photo-1605106702842-01a887a31122",
    neon: "142,202,252",
  },
  {
    id: 2,
    title: "Welder Lab",
    image:
      "https://images.unsplash.com/photo-1590247813693-554ad99a0b1f",
    neon: "255,119,181",
  },
  {
    id: 3,
    title: "AR/VR Simulator Lab",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
    neon: "0,212,162",
  },
  {
    id: 4,
    title: "Operator Simulator",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    neon: "108,99,255",
  },
];

const Rotating3DLabsCarousel: React.FC = () => {
  return (
    <section className="relative w-full h-[520px] bg-black overflow-hidden flex items-center justify-center">
      <div
        className="relative"
        style={
          {
            "--quantity": labs.length,
          } as React.CSSProperties
        }
      >
        <div className="inner-3d">
          {labs.map((lab, index) => (
            <div
              key={lab.id}
              className="card-3d group"
              style={
                {
                  "--index": index,
                  "--neon": lab.neon,
                } as React.CSSProperties
              }
            >
              {/* Image */}
              <img
                src={lab.image}
                alt={lab.title}
                className="img-3d"
                loading="lazy"
              />

              {/* Overlay title */}
              <div className="absolute bottom-0 w-full bg-black/60 backdrop-blur-md p-3 text-center">
                <h3 className="text-sm font-semibold text-white tracking-wide">
                  {lab.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scoped 3D + neon styles */}
      <style>{`
        .inner-3d {
          --w: 130px;
          --h: 180px;
          --translateZ: calc(var(--w) + var(--h));
          --rotateX: -15deg;
          --perspective: 1000px;

          width: var(--w);
          height: var(--h);
          position: relative;
          transform-style: preserve-3d;
          transform: perspective(var(--perspective));
          animation: spin 22s linear infinite;
        }

        @keyframes spin {
          from {
            transform: perspective(var(--perspective))
              rotateX(var(--rotateX))
              rotateY(0deg);
          }
          to {
            transform: perspective(var(--perspective))
              rotateX(var(--rotateX))
              rotateY(360deg);
          }
        }

        .card-3d {
          position: absolute;
          inset: 0;
          border-radius: 16px;
          overflow: hidden;
          transform:
            rotateY(calc((360deg / var(--quantity)) * var(--index)))
            translateZ(var(--translateZ));

          border: 2px solid rgba(var(--neon), 0.9);
          box-shadow:
            0 0 20px rgba(var(--neon), 0.6),
            0 0 40px rgba(var(--neon), 0.3);
          transition: box-shadow 0.4s ease, transform 0.4s ease;
        }

        .card-3d:hover {
          box-shadow:
            0 0 30px rgba(var(--neon), 0.9),
            0 0 60px rgba(var(--neon), 0.6),
            0 0 100px rgba(var(--neon), 0.4);
        }

        .img-3d {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 640px) {
          .inner-3d {
            --w: 100px;
            --h: 140px;
          }
        }
      `}</style>
    </section>
  );
};

export default Rotating3DLabsCarousel;