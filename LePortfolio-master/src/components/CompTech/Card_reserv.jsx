import { useState } from "react";
import Reserv_vr from '../../assets/Reserv_vr.png';
import catalogue from '../../assets/catalogue.png';
import bdd from '../../assets/bdd.png';
import reservC from '../../assets/ReservC.png';

// ─── Data ────────────────────────────────────────────────────────────────────

const techStack = [
  { label: "HTML / CSS", color: "text-orange-400 border-orange-400/40 bg-orange-400/5" },
  { label: "PHP", color: "text-indigo-400 border-indigo-400/40 bg-indigo-400/5" },
  { label: "Laravel", color: "text-red-400 border-red-400/40 bg-red-400/5" },
  { label: "MySQL", color: "text-cyan-400 border-cyan-400/40 bg-cyan-400/5" },
  { label: "JavaScript", color: "text-purple-400 border-purple-400/40 bg-purple-400/5" },
];

const deliverables = [
  {
    title: "Site web",
    desc: "Interface utilisateur regroupant les fonctionnalités de réservation, catalogue de jeux et gestion de compte ainsi que d'autres informations comme le contact ou la carte des snacks.",
  },
  {
    title: "Système de compte",
    desc: "Inscription, connexion et sessions sécurisées grace à Breeze intégré directement dans Laravel",
  },
  {
    title: "Catalogue de jeux",
    desc: "Navigation interactive dans la bibliothèque VR avec filtres intégrés relié à une base de données MySQL",
  },
  {
    title: "Système de réservation",
    desc: "Les utilisateur inscrit et connecté peuvent réserver des craineaux horaires pour faire l'éxpérience des jeux VR seul ou à plusieurs . Réservation synchronisée avec MySQL",
  },
];

const companyCards = [
  { label: "Secteur", value: "Divertissement VR" },
  { label: "Localisation", value: "France" },
  { label: "Activité", value: "Expériences de réalité virtuelle" },
  { label: "Public cible", value: "Particuliers & professionnels" },
];

const screenshots = [
  { src: catalogue, label: "Catalogue" },
  { src: reservC, label: "Codes" },
  { src: Reserv_vr, label: "Réservation" },
  { src: bdd, label: "Base de données" },
];
// ─── Data ────────────────────────────────────────────────────────────────────

const gestionProjets = [
  {
    title: "Discord - Communication avec le maître de stage",
    desc: "Discord pour les échanges rapides et la coordination avec le maître de stage ainsi que le partage d'informations/images.",
  },
  {
    title: "Daily meeting avec le maître de stage",
    desc: "Daily meeting avec le maître de stage pour faire le point sur l'avancement du projet, discuter des difficultés rencontrées et planifier les prochaines étapes.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-xl font-mono uppercase tracking-[0.2em] text-cyan-400">
        {children}
      </span>
    </div>
  );
}

function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm hover:border-cyan-400/20 transition-colors duration-300 ${className}`}
    >
      {children}
    </div>
  );
}

function Lightbox({ img, onClose }) {
  if (!img) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center backdrop-blur-md p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full rounded-2xl border border-white/10 bg-zinc-900 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={img.src} alt={img.label} className="w-full object-contain max-h-[70vh]" />
        <div className="flex items-start justify-between px-5 py-3 border-t border-white/[0.08]">
          <span className="text-xl text-zinc-400 font-mono">{img.label}</span>
          <button
            onClick={onClose}
            className="text-xl text-zinc-500 hover:text-white transition-colors px-3 py-1 rounded-md border border-white/10 hover:border-white/30"
          >
            ✕ Fermer
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function CardVr() {
  const [activeImg, setActiveImg] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@400;500&display=swap');

        .vrtueux-root * { font-family: 'Syne', sans-serif; }
        .vrtueux-root .font-mono { font-family: 'DM Mono', monospace !important; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.45s ease both; }
        .d1 { animation-delay: 0.05s; }
        .d2 { animation-delay: 0.12s; }
        .d3 { animation-delay: 0.20s; }
        .d4 { animation-delay: 0.28s; }

        .gallery-thumb { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .gallery-thumb:hover { transform: scale(1.04); box-shadow: 0 0 20px rgba(34,211,238,0.15); }

        /*
          Layout:
          Col 1 (left)    | Col 2 (right)
          ────────────────────────────────
          Technologies    | Difficultés    ← row 1
          Livrables       | Galerie        ← row 2 (galerie spans rows 2+3)
          Gestion projet  |                ← row 3
        */
        .aligned-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto auto;
          gap: 24px;
        }
        .cell-top-left    { grid-column: 1; grid-row: 1; }
        .cell-top-right   { grid-column: 2; grid-row: 1; }
        .cell-mid-left    { grid-column: 1; grid-row: 2; }
        .cell-bottom-left { grid-column: 1; grid-row: 3; }
        .cell-right-tall  { grid-column: 2; grid-row: 2 / 4; }
      `}</style>

      <div className="vrtueux-root w-full text-zinc-200">

        {/* ── Hero ── */}
        <header className="fade-up d1 mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="text-[1.45rem] font-mono tracking-widest text-cyan-400 uppercase border border-cyan-400/20 bg-cyan-400/5 rounded-full px-3 py-1">
              Projet Web · Full Stack
            </span>
          </div>

          <p className="text-zinc-400 text-xl leading-relaxed max-w-2xl mb-5">
            Conception et développement d'un site vitrine comprenant un système de réservation permettant aux utilisateurs de réserver des créneaux pour faire l'expérience de jeux VR.
          </p>

          <a
            href="dfdfg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cyan-400 text-black text-xl font-semibold px-4 py-2 rounded-lg hover:bg-cyan-300 transition-colors duration-200"
          >
            Voir le projet
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </header>

        <div className="fade-up d2 aligned-grid">

          <section className="cell-top-left">
            <SectionLabel>Technologies utilisées</SectionLabel>
            <div className="flex flex-wrap gap-2">
              {techStack.map((t) => (
                <span
                  key={t.label}
                  className={`text-xl font-mono border rounded-lg px-3 py-1.5 ${t.color}`}
                >
                  {t.label}
                </span>
              ))}
            </div>
          </section>

          <section className="cell-top-right">
            <SectionLabel>Difficultés</SectionLabel>
            <GlassCard className="p-4">
              <p className="text-zinc-300 text-xl leading-relaxed">
                - Projet complexe à réaliser en 6 semaines.<br />
                - Apprentissage rapide de Laravel et intégration de plusieurs fonctionnalités.<br />
                - Manque d’encadrement ayant ralenti l’avancement.<br />
                - Modélisation de la base de données et gestion des relations complexes.
              </p>
            </GlassCard>
          </section>

          <section className="mb-10 cell-mid-left">
            <SectionLabel>Livrables</SectionLabel>
            <div className="grid grid-cols-2 gap-3">
              {deliverables.map((d) => (
                <GlassCard key={d.title} className="p-4">
                  <p className="font-semibold text-xl text-zinc-100 mb-0.5">{d.title}</p>
                  <p className="text-xl text-zinc-400 leading-relaxed">{d.desc}</p>
                </GlassCard>
              ))}
            </div>
          </section>

          {/* ROW 3 LEFT: Gestion du projet */}
          <section className="cell-bottom-left">
            <SectionLabel>Gestion du projet</SectionLabel>
            <div className="grid grid-cols-1 gap-3">
              {gestionProjets.map((d) => (
                <GlassCard key={d.title} className="p-4">
                  <p className="font-semibold text-xl text-zinc-100 mb-0.5">{d.title}</p>
                  <p className="text-xl text-zinc-400 leading-relaxed">{d.desc}</p>
                </GlassCard>
              ))}
            </div>
          </section>

          {/* ROWS 2-3 RIGHT: Galerie — spans rows 2 and 3 */}
          <section className="cell-right-tall">
            <SectionLabel>Galerie</SectionLabel>
            <div className="grid grid-cols-2 gap-2">
              {screenshots.map((s) => (
                <button
                  key={s.src}
                  onClick={() => setActiveImg(s)}
                  className="group relative rounded-lg overflow-hidden border border-white/[0.08] gallery-thumb cursor-pointer bg-zinc-900 text-left"
                >
                  <img
                    src={s.src}
                    alt={s.label}
                    className="w-full aspect-video object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent px-2 py-1">
                    <span className="text-[9px] font-mono text-zinc-300">{s.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </section>

        </div>
      </div>

      <Lightbox img={activeImg} onClose={() => setActiveImg(null)} />
    </>
  );
}