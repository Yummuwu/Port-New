import { useState } from "react";

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
    title: "Site web fonctionnel",
    desc: "Interface utilisateur intuitive et responsive",
  },
  {
    title: "Système de compte",
    desc: "Inscription, connexion et sessions sécurisées",
  },
  {
    title: "Catalogue de jeux",
    desc: "Navigation interactive dans la bibliothèque VR",
  },
  {
    title: "Système de réservation",
    desc: "Réservation synchronisée avec MySQL, sans conflits",
  },
];

const companyCards = [
  { label: "Secteur", value: "Divertissement VR" },
  { label: "Localisation", value: "France" },
  { label: "Activité", value: "Location & expériences de réalité virtuelle" },
  { label: "Public cible", value: "Particuliers & professionnels" },
];

const screenshots = [
  { src: "screenshot1.png", label: "Catalogue" },
  { src: "screenshot2.png", label: "Catalogue (détail)" },
  { src: "screenshot3.png", label: "Réservation" },
  { src: "screenshot4.png", label: "Base de données" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionLabel({ children }) {
  return (
    <div className="flex items-start gap-3 mb-6">
      <span className="text-xl font-mono uppercase tracking-[0.2em] text-cyan-400">
        {children}
      </span>
      <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/30 to-transparent" />
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
      className="fixed inset-0 z-50 flex items-start justify-center  backdrop-blur-md p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full rounded-2xl border border-white/10 bg-zinc-900 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={img.src} alt={img.label} className="w-full object-contain max-h-[70vh]" />
        <div className="flex items-start justify-between px-5 py-3 border-t border-white/[0.08]">
          <span className="text-sm text-zinc-400 font-mono">{img.label}</span>
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

export default function CardGeek() {
  const [activeImg, setActiveImg] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@400;500&display=swap');

        .vrtueux-root * {
          font-family: 'Syne', sans-serif;
        }
        .vrtueux-root .font-mono {
          font-family: 'DM Mono', monospace !important;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.55s ease both; }
        .d1 { animation-delay: 0.05s; }
        .d2 { animation-delay: 0.15s; }
        .d3 { animation-delay: 0.25s; }
        .d4 { animation-delay: 0.35s; }
        .d5 { animation-delay: 0.45s; }

        .gallery-thumb {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .gallery-thumb:hover {
          transform: scale(1.04);
          box-shadow: 0 0 28px rgba(34, 211, 238, 0.18);
        }
      `}</style>

      <div className="vrtueux-root min-h-screen text-zinc-200 relative overflow-hidden">

        {/* Ambient blobs */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-500/[0.06] blur-[120px]" />
          <div className="absolute top-1/2 -right-40 w-[400px] h-[400px] rounded-full bg-blue-600/[0.05] blur-[100px]" />
          <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full bg-violet-600/[0.04] blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-4xl px-6 py-16 space-y-20">

          {/* ── Hero ── */}
          <header className="fade-up d1">
            <div className="inline-flex items-start gap-2 text-xl font-mono tracking-widest text-cyan-400 uppercase border border-cyan-400/20 bg-cyan-400/5 rounded-full px-4 py-1.5 mb-6">
              Projet Web · Full Stack
            </div>

            <p className="text-zinc-400 text-xl max-w-2xl leading-relaxed mb-8">
              Conception et développement d'un site web dynamique avec système de compte,
              catalogue de jeux VR et réservation en ligne, relié à une base de données MySQL.
            </p>

            <a
              href="dfdfg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cyan-400 mt-10 text-black text-xl font-semibold px-6 py-3 rounded-lg hover:bg-cyan-300 transition-colors duration-200"
            >
              Voir le projet
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </header>

          {/* ── Company Info ── */}
          <section className="fade-up d2">
            <SectionLabel>L'entreprise VRtueux</SectionLabel>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {companyCards.map((card) => (
                <GlassCard key={card.label} className="p-4 flex flex-col gap-2">
                  <span className="text-2xl">{card.icon}</span>
                  <span className="text-[18px] font-mono uppercase tracking-widest text-zinc-500">
                    {card.label}
                  </span>
                  <span className="text-xl text-zinc-200 font-semibold leading-snug">
                    {card.value}
                  </span>
                </GlassCard>
              ))}
            </div>
          </section>

          {/* ── Tech Stack ── */}
          <section className="fade-up d3">
            <SectionLabel>Technologies utilisées</SectionLabel>
            <div className="flex flex-wrap gap-3">
              {techStack.map((t) => (
                <span
                  key={t.label}
                  className={`text-xl font-mono border rounded-lg px-4 py-2 ${t.color}`}
                >
                  {t.label}
                </span>
              ))}
            </div>
          </section>

          {/* ── Deliverables ── */}
          <section className="fade-up d3">
            <SectionLabel>Livrables</SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {deliverables.map((d) => (
                <GlassCard key={d.title} className="p-5 flex gap-4 items-start">
                  <span className="text-xl mt-0.5 shrink-0">{d.icon}</span>
                  <div>
                    <p className="font-semibold text-zinc-100 mb-1">{d.title}</p>
                    <p className="text-xl text-zinc-400 leading-relaxed">{d.desc}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </section>

          {/* ── Challenge ── */}
          <section className="fade-up d4">
            <SectionLabel>Difficultés</SectionLabel>
            <GlassCard className="p-6 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-cyan-400 to-blue-600 rounded-l-xl" />
              <p className="text-zinc-300 text-xl leading-relaxed pl-3">
                Peu d'encadrement, construire u nsite web en 6 semaines avec front et back{" "}
              </p>
            </GlassCard>
          </section>

          {/* ── Gallery ── */}
          <section className="fade-up d5">
            <SectionLabel>Galerie</SectionLabel>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {screenshots.map((s) => (
                <button
                  key={s.src}
                  onClick={() => setActiveImg(s)}
                  className="group relative rounded-xl overflow-hidden border border-white/[0.08] gallery-thumb cursor-pointer bg-zinc-900 text-left"
                >
                  <img
                    src={s.src}
                    alt={s.label}
                    className="w-full aspect-video object-cover opacity-75 group-hover:opacity-100 transition-opacity duration-200"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent px-3 py-2">
                    <span className="text-[11px] font-mono text-zinc-300">{s.label}</span>
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