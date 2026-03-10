import { useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { value: "~90", label: "clients/ans" },
  { value: "2", label: "personne" },
  { value: "~80k", label: "chiffres d'affaire" },
];

const tags = ["Wordpress", "Particuliers", "Entreprises", "Hébergement"];

const deliverables = [
  {
    title: "Gestion/ Hébergement du site web en continu sous contrat",
    desc: "Maintenance et mise à jour régulière du site web",
  },
  {
    title: "Veille technologique",
    desc: "Suivi des innovations concernant les mises à jour Divi",
  },
  {
    title: "Conception de site web vitrine ou dynamique",
    desc: "Création de maquettes et prototypes, intégration des contenus",
  },
  {
    title: "Refonte de sites web existants",
    desc: "Modernisation et optimisation des sites web existants",
  },
  {
    title: "Support de premier niveau Wordpress",
    desc: "Formation Wordpress et accompagnement des clients",
  },
];

const gestionProjets = [
  {
    title: "Trello",
    desc: "Organisation visuelle des tâches et suivi de l'avancement",
  },
  {
    title: "Discord",
    desc: "Communication en temps réel et partage d'informations avec l'équipe",
  },
  {
    title: "Découpage du travail par pages",
    desc: "Livraison itérative, page par page",
  },
  {
    title: "Approche agile",
    desc: "Feedback régulier et entretiens avec les clients",
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

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ElixirCard() {
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
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-purple-300 uppercase border border-purple-400/20 bg-purple-400/5 rounded-full px-4 py-1.5 mb-6">
              SARL · Stage 2026
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div>
                <h1 className="text-white font-bold text-3xl tracking-tight leading-tight">Elixir Création</h1>
                <span className="text-purple-300/80 text-xs font-mono tracking-widest uppercase">SARL · Privée</span>
              </div>
              <div className="ml-auto shrink-0">
                <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/25 text-emerald-300 text-xs font-semibold">
                  📍 Vienne, Isère
                </span>
              </div>
            </div>

            <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed mb-6">
              Spécialisée dans la{" "}
              <span className="text-purple-300 font-medium">Conception, développement et hébergement de sites Wordpress.</span>
            </p>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-purple-500/15 border border-purple-400/20 text-purple-200 text-xs font-mono"
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
                    <p className="text-sm text-zinc-400 leading-relaxed">{d.desc}</p>
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
          </section>

        </div>
      </div>
    </>
  );
}