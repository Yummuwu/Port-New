import { useState } from "react";
import Reserv_vr from '../../assets/Reserv_vr.png';
import responsive from '../../assets/responsive.png';
import para from '../../assets/para.png';
import formu from '../../assets/formu.png';

const images = [
  {
    id: 1,
    src: Reserv_vr,
    alt: "Mountain landscape",
  },
  {
    id: 2,
    src: responsive,
    alt: "Forest path",
  },
  {
    id: 3,
    src: para,
    alt: "Ocean beach",
  },

    {
    id: 4,
    src: formu,
    alt: "Mountain landscape",
  },
  {
    id: 5,
    src: formu,
    alt: "Forest path",
  },
  {
    id: 6,
    src: formu,
    alt: "Ocean beach",
  },
];


export default function StackedImages() {
  const [active, setActive] = useState(1);

  const getCardStyle = (id) => {
    if (id === active) {
      return {
        zIndex: 10,
        transform: "translateX(0px) scale(1) rotate(0deg)",
        opacity: 1,
        filter: "brightness(1)",
        pointerEvents: "auto",
        cursor: "default",
      };
    }

    // Determine which slot (left or right) each background card occupies
    // There are always exactly 2 background cards; assign them symmetrically
    const others = images.map((img) => img.id).filter((i) => i !== active);
    const isLeft = id === others[0];

    return {
      zIndex: 3,
      transform: isLeft
        ? "translateX(-130px) scale(0.88)"
        : "translateX(130px) scale(0.88)",
      opacity: 0.65,
      filter: "brightness(0.6)",
      pointerEvents: "none",
      cursor: "default",
    };
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Georgia', serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(120,80,255,0.12) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />




      {/* Stack */}
      <div
        style={{
          position: "relative",
          width: "300px",
          height: "380px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {images.map((img) => {
          const cardStyle = getCardStyle(img.id);
          return (
            <div
              key={img.id}
              onClick={img.id !== active ? undefined : undefined}
              style={{
                position: "absolute",
                width: "260px",
                height: "340px",
                borderRadius: "20px",
                overflow: "hidden",
                transition:
                  "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease, filter 0.4s ease",
                boxShadow:
                  img.id === active
                    ? "0 30px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.08)"
                    : "0 15px 40px rgba(0,0,0,0.5)",
                ...cardStyle,
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.6s ease",
                }}
                onMouseEnter={(e) => {
                  if (img.id === active) e.target.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                }}
              />

              {/* Gradient overlay on active */}
              {img.id === active && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)",
                    pointerEvents: "none",
                  }}
                />
              )}

              {/* Label on active */}
              {img.id === active && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    color: "white",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontSize: "22px",
                      fontWeight: "600",
                      letterSpacing: "0.04em",
                      textShadow: "0 2px 8px rgba(0,0,0,0.5)",
                    }}
                  >
                    {img.label}
                  </p>

                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}