import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from "@mui/lab";

import { Typography, Box } from "@mui/material";

import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

export default function OutlinedTimeline() {
  return (
    <Timeline position="alternate">

      {/* ---- 2025 Stage ---- */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <CodeIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "primary.main" }} />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" fontWeight="bold" color="primary.main">
            2025 • Stage (6 semaines)
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold">
            VRtueux — Développeur web backend
          </Typography>
          <Box mt={1}>
            <ul style={{ margin: 0, paddingLeft: "20px" }}>
              <li>Conception et gestion d’une base SQL</li>
              <li>Développement d’une page de réservation</li>
              <li>Création d’une page catalogue</li>
              <li>Modélisation UML</li>
              <li>Animations front-end (anime.js)</li>
            </ul>
          </Box>
        </TimelineContent>
      </TimelineItem>

      {/* ---- 2024 BTS SIO ---- */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" fontWeight="bold" color="secondary.main">
            2024 • BTS SIO SLAM
          </Typography>
          <Typography>
            Lycée Ella Fitzgerald — Saint-Romain-En-Gal (69)
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* ---- 2019 Stage ---- */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: "#ff9800", color: "#fff" }}>
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "#ff9800" }} />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" fontWeight="bold" sx={{ color: "#ff5757ff" }}>
            2019 • Stage (1 mois)
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold">
            GS THERMIC
          </Typography>
          <Box mt={1}>
            <ul style={{ margin: 0, paddingLeft: "20px" }}>
              <li>Gestion de notes de frais</li>
              <li>Enregistrement de factures</li>
              <li>Gestion des devis</li>
              <li>Tri et classement de documents</li>
            </ul>
          </Box>
        </TimelineContent>
      </TimelineItem>

      {/* ---- 2018 Stage ---- */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: "#80aac2ff", color: "#fff" }}>
            <BusinessCenterIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "#80aac2ff" }} />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" fontWeight="bold" sx={{ color: "#ff61bdff" }}>
            2018 • Stage (1 mois)
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold">
            AFIPH
          </Typography>
          <Box mt={1}>
            <ul style={{ margin: 0, paddingLeft: "20px" }}>
              <li>Gestion des emplois du temps</li>
              <li>Mise à jour des menus</li>
              <li>Gestion des appels téléphoniques</li>
              <li>Comptabilité</li>
            </ul>
          </Box>
        </TimelineContent>
      </TimelineItem>

      {/* ---- BAC PRO ---- */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: "#9c27b0", color: "#fff" }}>
            <AssignmentIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" fontWeight="bold" sx={{ color: "#9c27b0" }}>
            BAC PRO • Gestion Administration
          </Typography>
          <Typography>
            Lycée Ella Fitzgerald — Saint-Romain-En-Gal (69)
            <br /> Mention bien
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

