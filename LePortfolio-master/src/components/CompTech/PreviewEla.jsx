import { useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { value: "~30", label: "collaborateurs" },
  { value: "4", label: "pôles métiers" },
  { value: "~10 ans", label: "d'existence" },
];

const tags = ["Développement", "Infrastructure", "Support", "Gestion de projet", "PME"];

const deliverables = [
  {
    title: "Documentation",
    desc: "Fiche descriptive du projet interne et spécifications techniques",
  },
  {
    title: "Application web sur mesure",
    desc: "Suivi des outils et pratiques DevOps utilisés en interne",
  },
  {
    title: "Configuration de l'infrastructure",
    desc: "Mise en place et paramétrage des serveurs et environnements d'hébergement",
  },
  {
    title: "Support de premier niveau",
    desc: "Assistance technique et accompagnement des collaborateurs internes",
  },
];

const gestionProjets = [
  {
    title: "Jira / Trello / Monday",
    desc: "Organisation visuelle des tâches et suivi de l'avancement en mode agile",
  },
  {
    title: "Figma / Adobe XD",
    desc: "Conception des maquettes et prototypage UX/UI",
  },
  {
    title: "NextCloud / Slack",
    desc: "Communication interne et partage de fichiers entre les équipes",
  },
  {
    title: "GitHub (Git)",
    desc: "Gestion et versioning du code source des projets",
  },
  {
    title: "Daily Stand-up",
    desc: "Point quotidien de 15 minutes pour suivre l'avancement des sprints",
  },
  {
    title: "Sprint Review",
    desc: "Démonstration du produit fini au client ou à la direction en fin de sprint",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
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

function ImagePlaceholder({ src, alt }) {
  const [hasImage, setHasImage] = useState(!!src);

  return (
    <div className="mt-6">
      <SectionLabel>Photo / Illustration</SectionLabel>
      <GlassCard className="overflow-hidden">
        {hasImage ? (
          <img
            src={src}
            alt={alt || "Illustration"}
            className="w-full h-64 object-cover rounded-xl"
            onError={() => setHasImage(false)}
          />
        ) : (
          <div className="relative h-64 flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-white/10 hover:border-cyan-400/30 transition-colors duration-300 group cursor-pointer">
            <div
              className="absolute inset-0 rounded-xl opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(103,232,249,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(103,232,249,0.5) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="w-14 h-14 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center group-hover:bg-cyan-400/15 transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-cyan-400/60"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 20.25h18a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H3a.75.75 0 00-.75.75v13.5c0 .414.336.75.75.75zM16.5 8.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>
            <p className="text-zinc-500 text-sm font-mono tracking-wider uppercase">
              logo?
            </p>
          </div>
        )}
      </GlassCard>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ElaborateCard() {
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
        .d6 { animation-delay: 0.55s; }
      `}</style>

      <div className="vrtueux-root min-h-screen flex flex-wrap text-zinc-200 relative overflow-hidden">

        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-500/[0.07] blur-[120px]" />
          <div className="absolute top-1/2 -right-40 w-[400px] h-[400px] rounded-full bg-pink-600/[0.05] blur-[100px]" />
          <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full bg-blue-600/[0.04] blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-4xl px-6 py-16 space-y-20">

          <header className="fade-up d1">
            <div className="inline-flex items-center gap-2 text-xl font-mono tracking-widest text-purple-300 uppercase border border-purple-400/20 bg-purple-400/5 rounded-full px-4 py-1.5 mb-6">
              ESN · ~10 ans
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div>
                <h1 className="text-white font-bold text-3xl tracking-tight leading-tight">Ell@Borate</h1>
                <span className="text-purple-300/80 text-xl font-mono tracking-widest uppercase">Entreprise de Services du Numérique</span>
              </div>
              <div className="ml-auto shrink-0">
                <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/25 text-emerald-300 text-xl font-semibold">
                  📍 Lyon
                </span>
              </div>
            </div>

            <p className="text-zinc-400 text-xl max-w-2xl leading-relaxed mb-6">
              Spécialisée dans le{" "}
              <span className="text-purple-300 font-medium">développement de solutions logicielles sur mesure</span>{" "}
              et la mise en place d'infrastructures informatiques destinées à héberger les applications de ses clients PME.
            </p>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-purple-500/15 border border-purple-400/20 text-purple-200 text-xl font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* ── Stats ── */}
          <section className="fade-up d2">
            <SectionLabel>Chiffres clés</SectionLabel>
            <div className="grid grid-cols-3 gap-4">
              {stats.map(({ value, label }) => (
                <GlassCard key={label} className="px-4 py-5 text-center">
                  <div className="text-white font-bold text-2xl leading-none mb-2">{value}</div>
                  <div className="text-zinc-500 text-xs font-mono uppercase tracking-wider">{label}</div>
                </GlassCard>
              ))}
            </div>
          </section>

          {/* ── DSI / Deliverables ── */}
          <section className="fade-up d3">
            <SectionLabel>DSI — Missions</SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {deliverables.map((d) => (
                <GlassCard key={d.title} className="p-5 flex gap-4 items-start relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-400 to-pink-500 rounded-l-xl" />
                  <div className="pl-3">
                    <p className="font-semibold text-zinc-100 mb-1">{d.title}</p>
                    <p className="text-xl text-zinc-400 leading-relaxed">{d.desc}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </section>
        </div>

        <div className="flex-1 pt-35">

          {/* ── Gestion de projet ── */}
          <section className="fade-up d4">
            <SectionLabel>Gestion de projet</SectionLabel>
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

            {/* ── Image placeholder ── */}
            <ImagePlaceholder src={null} alt="Ell@Borate" />
          </section>

        </div>
      </div>
    </>
  );
}