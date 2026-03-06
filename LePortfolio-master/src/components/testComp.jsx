import { useState, useEffect } from "react";

const WorkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 6h-2.18c.07-.44.18-.88.18-1.36C18 2.51 16.49 1 14.64 1h-5.28C7.51 1 6 2.51 6 4.64c0 .48.11.92.18 1.36H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5.36-3c.74 0 1.36.62 1.36 1.36 0 .48-.4 1.64-1.36 1.64H9.36C8.4 6 8 4.84 8 4.36 8 3.62 8.62 3 9.36 3h5.28zM20 19H4V8h16v11z"/>
  </svg>
);
const CodeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
  </svg>
);
const SchoolIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
  </svg>
);
const AssignmentIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
  </svg>
);
const BusinessIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
  </svg>
);

const timelineSchool = [
  {
    year: "2024 - 2026",
    label: "BTS SIO SLAM",
    color: "#818cf8",
    icon: <SchoolIcon />,
    title: "Lycée Ella Fitzgerald — Saint-Romain-En-Gal (69)",
    items: [],
  },
  {
    year: "2021",
    label: "BAC PRO",
    color: "#6d28d9",
    icon: <AssignmentIcon />,
    title: "Gestion Administration — Lycée Ella Fitzgerald (69)",
    items: ["Mention bien"],
  },
];

const timelineData = [
    {
    year: "2026",
    label: "Stage (6 semaines)",
    color: "#b798d4ff",
    icon: <CodeIcon />,
    title: "Elixir Création — Développeur web Wordpress",
    items: [
      "Conception de sites web Wordpress (Divi)",
      "Refonte de site web Wordpress (Divi)",
      "Conception de site web avec maquette (Elementor)",
      "Adaptation responsive",
    ],
  },
  {
    year: "2025",
    label: "Stage (6 semaines)",
    color: "#a855f7",
    icon: <CodeIcon />,
    title: "VRtueux — Développeur web backend",
    items: [
      "Conception et gestion d'une base SQL",
      "Développement d'une page de réservation",
      "Création d'une page catalogue",
      "Modélisation UML",
      "Animations front-end (anime.js)",
    ],
  },
  {
    year: "2019",
    label: "Stage (1 mois)",
    color: "#c084fc",
    icon: <WorkIcon />,
    title: "GS THERMIC - Secrétaire",
    items: [
      "Gestion de notes de frais",
      "Enregistrement de factures",
      "Gestion des devis",
      "Tri et classement de documents",
    ],
  },
  {
    year: "2018",
    label: "Stage (1 mois)",
    color: "#7c3aed",
    icon: <BusinessIcon />,
    title: "AFIPH - Secrétaire",
    items: [
      "Gestion des emplois du temps",
      "Mise à jour des menus",
      "Gestion des appels téléphoniques",
      "Comptabilité",
    ],
  },
];

export default function ParcoursCombined() {
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    timelineData.forEach((_, i) => {
      setTimeout(() => {
        setVisible((prev) => [...prev, i]);
      }, i * 150);
    });
  }, []);

  return (
    <div style={{ minHeight: "100vh", padding: "60px 20px", fontFamily: "sans-serif" }}>
      {/* Section title */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 40 }}>
        <div style={{ height: 1, width: 48, background: "linear-gradient(to right, transparent, #a855f7)" }} />
        <div style={{
          fontSize: "2rem",
          fontWeight: "bold",
          background: "#ffffffff",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "-0.02em",
        }}>
          Mon Parcours
        </div>
        <div style={{ height: 1, width: 48, background: "linear-gradient(to left, transparent, #f472b6)" }} />
      </div>

      {/* Two-column layout */}
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "flex",
        gap: 40,
        alignItems: "flex-start",
        flexWrap: "wrap",
      }}>

        {/* LEFT: Text block */}
        <div style={{ flex: "1 1 320px", minWidth: 280 }}>
          <div style={{
            background: "linear-gradient(135deg, rgba(88,28,135,0.3), rgba(131,24,67,0.3))",
            backdropFilter: "blur(12px)",
            borderRadius: 16,
            padding: "32px",
            border: "1px solid rgba(168,85,247,0.2)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            color: "rgba(255,255,255,0.9)",
            fontSize: "1.05rem",
            lineHeight: 1.8,
            fontWeight: 300,
            textAlign: "center",
          }}>
            Avant d'intégrer le BTS SIO, j'ai commencé par un{" "}
            <span style={{ color: "#d8b4fe", fontWeight: 500 }}>Bac Pro Gestion Administration</span>.
            Après avoir obtenu mon diplôme, j'ai poursuivi mes études en{" "}
            <span style={{ color: "#f9a8d4", fontWeight: 500 }}>langues anglais/japonais</span>{" "}
            à l'université pendant un an. Je me suis ensuite reconvertie dans le développement avec un{" "}
            <span style={{ color: "#93c5fd", fontWeight: 500 }}>BTS SIO option SLAM</span>.

            <div style={{ margin: "28px 0 0", paddingTop: 24, borderTop: "1px solid rgba(168,85,247,0.2)" }}>
              <span style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                background: "linear-gradient(to right, #d8b4fe, #f9a8d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Mon objectif : atteindre le niveau Master pour devenir UX/UI Designer
              </span>
            </div>
          </div>
                  {/* RIGHT: Timeline */}
        <div className="pt-12"></div>
        <div style={{ flex: "1 1 360px", minWidth: 300, position: "relative" }}>
          <div style={{ position: "relative" }}>
            {/* Central line */}
            <div style={{
              position: "absolute",
              left: 22,
              top: 0,
              bottom: 0,
              width: 2,
              background: "linear-gradient(to bottom, #a855f7, #4c1d95)",
            }} />

            {timelineSchool.map((item, i) => {
              const isVis = visible.includes(i);
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 16,
                    marginBottom: 28,
                    opacity: isVis ? 1 : 0,
                    transform: isVis ? "translateX(0)" : "translateX(-16px)",
                    transition: "opacity 0.4s ease, transform 0.4s ease",
                  }}
                >
                  {/* Dot */}
                  <div style={{ flexShrink: 0, position: "relative", zIndex: 1 }}>
                    <div style={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      border: `2px solid ${item.color}`,
                      background: "#140a28",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: `0 0 12px ${item.color}55`,
                    }}>
                      <div style={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        background: item.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                      }}>
                        {item.icon}
                      </div>
                    </div>
                  </div>

                  {/* Card */}
                  <div style={{
                    background: "rgba(20, 10, 40, 0.9)",
                    border: `1px solid ${item.color}55`,
                    borderRadius: 8,
                    padding: "14px 18px",
                    flex: 1,
                    boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                  }}>
                    <div style={{
                      color: item.color,
                      fontWeight: "bold",
                      fontSize: "0.9rem",
                      marginBottom: 4,
                      letterSpacing: "0.03em",
                    }}>
                      {item.year ? `${item.year} • ` : ""}{item.label}
                    </div>
                    <div style={{
                      color: "#e2d9f3",
                      fontWeight: "bold",
                      fontSize: "0.88rem",
                      marginBottom: item.items.length ? 8 : 0,
                    }}>
                      {item.title}
                    </div>
                    {item.items.length > 0 && (
                      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                        {item.items.map((bullet, j) => (
                          <li key={j} style={{
                            color: "rgba(210,195,240,0.8)",
                            fontSize: "0.82rem",
                            display: "flex",
                            gap: 6,
                            marginBottom: 3,
                            lineHeight: 1.5,
                          }}>
                            <span style={{ color: item.color, flexShrink: 0, marginTop: 1 }}>•</span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        </div>



        {/* RIGHT: Timeline */}
        <div style={{ flex: "1 1 360px", minWidth: 300, position: "relative" }}>
          <div style={{ position: "relative" }}>
            {/* Central line */}
            <div style={{
              position: "absolute",
              left: 22,
              top: 0,
              bottom: 0,
              width: 2,
              background: "linear-gradient(to bottom, #a855f7, #4c1d95)",
            }} />

            {timelineData.map((item, i) => {
              const isVis = visible.includes(i);
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 16,
                    marginBottom: 28,
                    opacity: isVis ? 1 : 0,
                    transform: isVis ? "translateX(0)" : "translateX(-16px)",
                    transition: "opacity 0.4s ease, transform 0.4s ease",
                  }}
                >
                  {/* Dot */}
                  <div style={{ flexShrink: 0, position: "relative", zIndex: 1 }}>
                    <div style={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      border: `2px solid ${item.color}`,
                      background: "#140a28",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: `0 0 12px ${item.color}55`,
                    }}>
                      <div style={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        background: item.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                      }}>
                        {item.icon}
                      </div>
                    </div>
                  </div>

                  {/* Card */}
                  <div style={{
                    background: "rgba(20, 10, 40, 0.9)",
                    border: `1px solid ${item.color}55`,
                    borderRadius: 8,
                    padding: "14px 18px",
                    flex: 1,
                    boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                  }}>
                    <div style={{
                      color: item.color,
                      fontWeight: "bold",
                      fontSize: "0.9rem",
                      marginBottom: 4,
                      letterSpacing: "0.03em",
                    }}>
                      {item.year ? `${item.year} • ` : ""}{item.label}
                    </div>
                    <div style={{
                      color: "#e2d9f3",
                      fontWeight: "bold",
                      fontSize: "0.88rem",
                      marginBottom: item.items.length ? 8 : 0,
                    }}>
                      {item.title}
                    </div>
                    {item.items.length > 0 && (
                      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                        {item.items.map((bullet, j) => (
                          <li key={j} style={{
                            color: "rgba(210,195,240,0.8)",
                            fontSize: "0.82rem",
                            display: "flex",
                            gap: 6,
                            marginBottom: 3,
                            lineHeight: 1.5,
                          }}>
                            <span style={{ color: item.color, flexShrink: 0, marginTop: 1 }}>•</span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}