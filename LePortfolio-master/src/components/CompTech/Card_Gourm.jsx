import { useState } from "react";
import trello from '../../assets/trello.png';
import phone from '../../assets/phone.png';
import api from '../../assets/api_routes.png';
import formumu from '../../assets/formumu.png';
import param from '../../assets/param.png';
import peri from '../../assets/peri.png';
import diag from '../../assets/diag.png'; 

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
    title: "1. Modélisations diagrammes UML",
    desc: "Stocke participants, notes, résultats et les paramètres concours.",
  },
  {
    title: "2. Conception périmètre fonctionnel",
    desc: "Définition des fonctionnalités requises.",
  },
  {
    title: "3. API RESTful",
    desc: "Relis la base de données MySQL avec l'application web et mobile via une API RESTful sécurisée.",
  },
    {
    title: "4. Application mobile",
    desc: "Les juges notent les participants via codes uniques et envoient les notes via API.",
  },
  {
    title: "5. Application web",
    desc: "Inscription au concours, consultation et publication des résultats (admins).",
  },


];

const screenshots = [
  { src: formumu, label: "Formulaire site web" },
  { src: param, label: "Paramètres concours" },
  { src: trello, label: "Gestion du projet" },
  { src: phone, label: "Application mobile" },
  { src: api, label: "API RESTful" },
  { src: peri, label: "Périmètre fonctionnel" },
  { src: diag, label: "Diagramme de classes" },
];

const gestionProjets = [
  {
    title: "Discord - Communication",
    desc: "Communication rapide et partage d'informations/images.",
  },
  {
    title: "Trello",
    desc: "Gestion des tâches et suivi du projet.",
  },
  {
    title: "Canvas - Documentation",
    desc: "Documentation des spécifications.",
  },
    {
    title: "Figma - Maquette",
    desc: "Création des maquettes.",
  },
  {
    title: "Méthode - Agile",
    desc: "Organisation en sprints",
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full rounded-2xl border border-white/10 bg-zinc-900 overflow-hidden shadow-2xl"
        style={{ maxWidth: '90vw', maxHeight: '92vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button — top-right corner */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 text-zinc-400 hover:text-white transition-colors bg-zinc-900/80 backdrop-blur px-3 py-1 rounded-lg border border-white/10 hover:border-white/30 font-mono text-sm"
        >
          ✕ Fermer
        </button>

        {/* Full-size image */}
        <img
          src={img.src}
          alt={img.label}
          className="w-full object-contain"
          style={{ maxHeight: '85vh', display: 'block' }}
        />

        {/* Label bar */}
        <div className="px-5 py-3 border-t border-white/[0.08]">
          <span className="text-sm text-zinc-400 font-mono">{img.label}</span>
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

        .portfolio-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          align-items: start;
        }

        @media (min-width: 1024px) {
          .portfolio-grid {
            grid-template-columns: 1fr 1fr;
          }

          .left-col {
            display: flex;
            flex-direction: column;
            gap: 24px;
          }

          .right-col {
            position: sticky;
            top: 20px;
          }
        }
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

        {/* ── A VOIR ── 
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
          */}
        </header>

        {/* ── Grid ── */}
        <div className="fade-up d2 portfolio-grid">

          {/* LEFT COLUMN */}
          <div className="left-col">

            <section>
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

            <section>
              <SectionLabel>Missions</SectionLabel>
              <div className="grid grid-cols-2 gap-3">
                {deliverables.map((d) => (
                  <GlassCard key={d.title} className="p-4">
                    <p className="font-semibold text-xl text-zinc-100 mb-0.5">{d.title}</p>
                    <p className="text-xl text-zinc-400 leading-relaxed">{d.desc}</p>
                  </GlassCard>
                ))}
              </div>
            </section>
            <a 
            href="https://canva.link/9oa6darpn8chuqh" 
            className="text-xl text-white mt-2"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Documentation Gourmetise
          </a>

            <section>
              <SectionLabel>Difficultés</SectionLabel>
              <GlassCard className="p-4">
                <p className="text-zinc-300 text-xl leading-relaxed">
                  - Beaucoup de routes possibles pour la structure de l'API RESTful, la base de données et les applications web/mobile. <br /> - Le token JWT bloquait certaines routes de l'API.
                </p>
              </GlassCard>
            </section>

          </div>

          {/* RIGHT COLUMN */}
          <div className="right-col">
            <SectionLabel>Gestion du projet</SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {gestionProjets.map((d) => (
                <GlassCard key={d.title} className="p-5 flex gap-4 items-start relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 to-blue-600 rounded-l-xl" />
                  <div className="pl-3">
                    <p className="font-semibold text-zinc-100 mb-1">{d.title}</p>
                    <p className="text-xl text-zinc-400 leading-relaxed">{d.desc}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
            <div className="pt-8"></div>
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
          </div>

        </div>
      </div>

      <Lightbox img={activeImg} onClose={() => setActiveImg(null)} />
    </>
  );
}