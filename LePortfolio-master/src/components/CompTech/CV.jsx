import { useState, useEffect } from "react";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const timelineData = [
  {
    year: "2025",
    label: "Stage (6 semaines)",
    color: "#a855f7",
    icon: <CodeIcon fontSize="small" />,
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
    year: "2024",
    label: "BTS SIO SLAM",
    color: "#818cf8",
    icon: <SchoolIcon fontSize="small" />,
    title: "Lycée Ella Fitzgerald — Saint-Romain-En-Gal (69)",
    items: [],
  },
  {
    year: "2019",
    label: "Stage (1 mois)",
    color: "#c084fc",
    icon: <WorkIcon fontSize="small" />,
    title: "GS THERMIC",
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
    icon: <BusinessCenterIcon fontSize="small" />,
    title: "AFIPH",
    items: [
      "Gestion des emplois du temps",
      "Mise à jour des menus",
      "Gestion des appels téléphoniques",
      "Comptabilité",
    ],
  },
  {
    year: "",
    label: "BAC PRO",
    color: "#6d28d9",
    icon: <AssignmentIcon fontSize="small" />,
    title: "Gestion Administration — Lycée Ella Fitzgerald (69)",
    items: ["Mention bien"],
  },
];

export default function TechTimeline() {
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    timelineData.forEach((_, i) => {
      setTimeout(() => {
        setVisible((prev) => [...prev, i]);
      }, i * 150);
    });
  }, []);

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <div style={styles.centralLine} />

        {timelineData.map((item, i) => {
          const isLeft = i % 2 === 0;
          const isVis = visible.includes(i);

          return (
            <div
              key={i}
              style={{
                ...styles.row,
                flexDirection: isLeft ? "row" : "row-reverse",
                opacity: isVis ? 1 : 0,
                transform: isVis
                  ? "translateY(0)"
                  : isLeft
                  ? "translateX(-20px)"
                  : "translateX(20px)",
                transition: "opacity 0.4s ease, transform 0.4s ease",
              }}
            >
              <div style={{ ...styles.cardWrap, alignItems: isLeft ? "flex-end" : "flex-start" }}>
                <div
                  style={{
                    ...styles.card,
                    borderColor: item.color,
                  }}
                >
                  <div style={styles.yearBadge}>
                    <span style={{ ...styles.yearText, color: item.color }}>
                      {item.year ? `${item.year} • ` : ""}
                      {item.label}
                    </span>
                  </div>

                  <div style={styles.cardTitle}>{item.title}</div>

                  {item.items.length > 0 && (
                    <ul style={styles.list}>
                      {item.items.map((bullet, j) => (
                        <li key={j} style={styles.listItem}>
                          <span style={{ ...styles.bullet, color: item.color }}>•</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div style={styles.dotWrap}>
                <div style={{ ...styles.dotOuter, borderColor: item.color }}>
                  <div style={{ ...styles.dotInner, background: item.color }}>
                    <span style={styles.dotIcon}>{item.icon}</span>
                  </div>
                </div>
              </div>

              <div style={styles.cardWrap} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    position: "relative",
    minHeight: "100vh",
    padding: "60px 20px",
  },
  container: {
    position: "relative",
    maxWidth: 900,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
  },
  centralLine: {
    position: "absolute",
    left: "50%",
    top: 0,
    bottom: 0,
    width: 2,
    transform: "translateX(-50%)",
    background: "#2e1065",
  },
  row: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    marginBottom: 50,
  },
  cardWrap: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: "0 30px",
  },
  card: {
    background: "rgba(20, 10, 40, 0.9)",
    border: "1px solid",
    borderRadius: 8,
    padding: "18px 22px",
    maxWidth: 360,
    boxShadow: "0 8px 20px rgba(0,0,0,0.35)",
    transition: "transform 0.25s ease",
  },
  yearBadge: {
    marginBottom: 6,
  },
  yearText: {
    fontWeight: "bold",
    fontSize: "1rem",
    letterSpacing: "0.05em",
  },
  cardTitle: {
    color: "#e2d9f3",
    fontWeight: "bold",
    fontSize: "0.95rem",
    marginBottom: 8,
  },
  list: {
    margin: 0,
    padding: 0,
    listStyle: "none",
  },
  listItem: {
    color: "rgba(210,195,240,0.85)",
    fontSize: "0.85rem",
    display: "flex",
    alignItems: "flex-start",
    gap: 8,
    marginBottom: 4,
    lineHeight: 1.5,
  },
  bullet: {
    marginTop: 1,
    flexShrink: 0,
    fontSize: "0.75rem",
  },
  dotWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  dotOuter: {
    width: 46,
    height: 46,
    borderRadius: "50%",
    border: "2px solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#140a28",
    boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
  },
  dotInner: {
    width: 30,
    height: 30,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  dotIcon: {
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};