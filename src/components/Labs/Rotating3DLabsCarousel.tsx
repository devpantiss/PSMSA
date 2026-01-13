import React from "react";

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
    image:
      "https://images.unsplash.com/photo-1581091215367-59ab6b96d2f0",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1581092334391-efb77c19e8a7",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1581093458791-9b5c2aa5c0c2",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1581093458791-9b5c2aa5c0c2",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1581093458791-9b5c2aa5c0c2",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1581093458791-9b5c2aa5c0c2",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1581093458791-9b5c2aa5c0c2",
  },
];

const Rotating3DLabsCarousel: React.FC = () => {
  return (
    <section className="relative w-full h-[520px] flex items-center justify-center overflow-hidden bg-transparent">
      <div className="relative w-full h-full flex items-center justify-center">
        <div
          style={{ "--quantity": cards.length } as React.CSSProperties}
        >
          <div className="inner-3d">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className="card-3d"
                style={{ "--index": index } as React.CSSProperties}
              >
                <img
                  src={card.image}
                  alt="Futuristic Lab"
                  className="img-3d"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scoped 3D styles */}
      <style>{`
        .inner-3d {
          --w: 130px;
          --h: 180px;
          --translateZ: calc(var(--w) + var(--h) + 30px);
          --rotateX: -14deg;
          --perspective: 1200px;

          position: relative;
          width: var(--w);
          height: var(--h);

          transform-style: preserve-3d;
          transform: perspective(var(--perspective));
          animation: rotate-3d 22s linear infinite;
        }

        @keyframes rotate-3d {
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

          border: 2px solid #4eeac8;
          box-shadow:
            0 0 18px rgba(78, 234, 200, 0.55),
            inset 0 0 12px rgba(78, 234, 200, 0.25);

          transform:
            rotateY(calc((360deg / var(--quantity)) * var(--index)))
            translateZ(var(--translateZ));

          background: rgba(0, 0, 0, 0.4);
        }

        .img-3d {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.85) contrast(1.1);
          transition: transform 0.6s ease, filter 0.6s ease;
        }

        .card-3d:hover .img-3d {
          transform: scale(1.08);
          filter: brightness(1);
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