import { useState } from "react";
import python_botest from '../../assets/python_botest.png';
import utilisation from '../../assets/utilisation.png';
import testbotty from '../../assets/testbotty.png';

// ─── Data ────────────────────────────────────────────────────────────────────

const techStack = [
  { label: "Python", color: "text-orange-400 border-orange-400/40 bg-orange-400/5" },
  { label: "Invité de commande", color: "text-cyan-400 border-cyan-400/40 bg-cyan-400/5" },
  { label: "NBTExplorer", color: "text-yellow-400 border-yellow-400/40 bg-yellow-400/5" },
  { label: "Bot discord", color: "text-purple-400 border-purple-400/40 bg-purple-400/5" },
];

const deliverables = [
{
  title: "Script Python",
  desc: "Récupère des données joueurs et les affiche sur un channel Discord",
},
{
  title: "Documentation",
  desc: "Explique le fonctionnement du script, les données récupérées et son utilisation",
},
];

const screenshots = [
  { src: python_botest, label: "Bot_test discord" },
  { src: utilisation, label: "Documentation d'utilisation" },
  { src: testbotty, label: "Script" },
];

const gestionProjets = [
{
  title: "Discord - Communication",
  desc: "Échanges rapides avec le gérant du serveur Discord et Minecraft",
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

export default function CardScrabb() {
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
              Projet Script Python
            </span>
          </div>

          <p className="text-zinc-400 text-xl leading-relaxed max-w-2xl mb-5">
            Développement d'un script python permettant la récupération de données des joueurs d'un serveur minecraft pour les afficher dans un channel discord grace à un robot
          </p>
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
                - Tests seulement sur 1 fichier <br /> - recherche des bon imports.
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


