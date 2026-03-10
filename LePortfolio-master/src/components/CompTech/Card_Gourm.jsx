import { useState } from "react";
import trello from '../../assets/trello.png';
import formualireb from '../../assets/formualireb.png';

// ─── Data ────────────────────────────────────────────────────────────────────

const techStack = [
  { label: "HTML / CSS", color: "text-orange-400 border-orange-400/40 bg-orange-400/5" },
  { label: "PHP", color: "text-indigo-400 border-indigo-400/40 bg-indigo-400/5" },
  { label: "Vue.js", color: "text-red-400 border-red-400/40 bg-red-400/5" },
  { label: "MySQL", color: "text-cyan-400 border-cyan-400/40 bg-cyan-400/5" },
  { label: "JavaScript", color: "text-purple-400 border-purple-400/40 bg-purple-400/5" },
  { label: "Kotlin", color: "text-yellow-400 border-yellow-400/40 bg-yellow-400/5" },
];

const deliverables = [
  {
    title: "API RESTful",
    desc: "Relis la base de données MySQL avec l'application web et mobile via une API RESTful sécurisée.",
  },
  {
    title: "Application web",
    desc: "L'application web permet aux utilisateurs de s'inscrire à un concours de boulangerie et de consulter les résultats du concours. Elle permet aussi aux admins de générer et publier les résultats du concours.",
  },
  {
    title: "Application mobile",
    desc: "L'application mobile permet aux juges de noter les participants au concours de boulangerie grace à des codes uniques et de soumettre leurs notes via l'API RESTful.",
  },
  {
    title: "Base de données MySQL",
    desc: "Base de données relationnelle pour stocker les informations sur les participants, les notes, les résultats du concours ainsi que les paramètres du concours.",
  },
];

const screenshots = [
  { src: formualireb, label: "Formulaire site web" },
  { src: trello, label: "Gestion du projet" },
  { src: "screenshot3.png", label: "Application mobile" },
  { src: "screenshot4.png", label: "API RESTful" },
];

const gestionProjets = [
  {
    title: "Discord - Communication",
    desc: "Discord pour les échanges rapides et la coordination ainsi que le partage d'informations/images.",
  },
  {
    title: "Trello - Gestion de projet",
    desc: "Utilisation de Trello pour organiser les tâches, suivre l'avancement du projet et collaborer avec l'équipe.",
  },
  {
    title: "Canvas - Documentation",
    desc: "Utilisation de Canvas pour créer une documentation pour les spécifications fonctionnelles.",
  },
    {
    title: "Figma - Maquette",
    desc: "Utilisation de Figma pour créer plusieurs maquettes pour l'application mobile/web.",
  },
  {
    title: "Méthode - Agile",
    desc: "Avancement du projet avec des planifications de sprints ",
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

export default function CardGourm() {
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
              Projet Gourmetise
            </span>
          </div>

          <p className="text-zinc-400 text-xl leading-relaxed max-w-2xl mb-5">
            Conception et développement d'une application web complète pour un concours de boulangerie fictif, avec une API RESTful en PHP, une base de données MySQL, une interface web pour les utilisateurs et une application mobile pour les juges.
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

        {/* ── Grid ── */}
        <div className="fade-up d2 aligned-grid">

          {/* ROW 1 LEFT: Technologies */}
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

          {/* ROW 1 RIGHT: Difficultés */}
          <section className="cell-top-right">
            <SectionLabel>Difficultés</SectionLabel>
            <GlassCard className="p-4">
              <p className="text-zinc-300 text-xl leading-relaxed">
                - Beaucoup de routes possibles pour la structure de l'API RESTful, la base de données et les applications web/mobile. <br /> - Le token JWT bloquait certaines routes de l'API.
              </p>
            </GlassCard>
          </section>

          {/* ROW 2 LEFT: Livrables */}
          <section className="cell-mid-left">
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
          <div className=" flex flex-wrap">
            <section className="cell-bottom-left">
              <SectionLabel>Gestion du projet</SectionLabel>
              <div className="grid grid-cols-3 gap-3">
                {gestionProjets.map((d) => (
                  <GlassCard key={d.title} className="p-4">
                    <p className="font-semibold text-xl text-zinc-100 mb-0.5">{d.title}</p>
                    <p className="text-xl text-zinc-400 leading-relaxed">{d.desc}</p>
                  </GlassCard>
                ))}
              </div>
            </section>
          </div>

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


