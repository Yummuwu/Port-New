

const VRtueuxPreview = () => {
  const stats = [
    { value: "~3 000 prévisionnel", label: "clients/mois" },
    { value: "1", label: "personne" },
    { value: "2025", label: "lancement" },
  ];

  const deliverables = [
  {
    title: "Gestion du site web",
    desc: "Interface utilisateur intuitive et responsive",
  },
  {
    title: "Veille technologique",
    desc: "Inscription, connexion et sessions sécurisées",
  },
  {
    title: "Paramétrage des équipements VR",
    desc: "Navigation interactive dans la bibliothèque VR",
  },
  {
    title: "Configuration des logiciels",
    desc: "Réservation synchronisée avec MySQL, sans conflits",
  },
    {
    title: "Support de premier niveau",
    desc: "Réservation synchronisée avec MySQL, sans conflits",
  },
];

  const gestionProjets = [
  {
    title: "Méthode Kanban - To do list",
    desc: "Interface utilisateur intuitive et responsive",
  },
  {
    title: "Daily meeting avec le maître de stage",
    desc: "Inscription, connexion et sessions sécurisées",
  },
  {
    title: "Découpage du travail par pages",
    desc: "Navigation interactive dans la bibliothèque VR",
  },
  {
    title: "Stockage du serveur sur machine virtuelle",
    desc: "Réservation synchronisée avec MySQL, sans conflits",
  },
    {
    title: "Outil Trello pour le suivi de projet",
    desc: "Réservation synchronisée avec MySQL, sans conflits",
  },
      {
    title: "Versioning avec GitHub",
    desc: "Réservation synchronisée avec MySQL, sans conflits",
  },
];

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

  const tags = ["VR", "Particuliers", "Entreprises", "Formations", "Team-building"];

  return (
    <div className="relative group max-w-xl w-full">
      {/* Glow border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500" />

      <div className="relative bg-gradient-to-br from-slate-900/95 via-purple-950/80 to-slate-900/95 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">

        {/* Top accent bar */}
        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-purple-400 to-transparent" />

        <div className="p-6">
          {/* Header */}
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-2xl bg-teal-200/10 border border-teal-300/20 flex items-center justify-center overflow-hidden shrink-0">
            </div>
            <div>
              <h2 className="text-white font-bold text-xl tracking-tight leading-tight">VRtueux</h2>
              <span className="text-purple-300/80 text-xs font-mono tracking-widest uppercase">Micro-entreprise</span>
            </div>
            <div className="ml-auto shrink-0">
              <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/25 text-emerald-300 text-xs font-semibold">
                📍 Vienne, Isère
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-white/70 text-sm leading-relaxed mb-5">
            Spécialisée dans le <span className="text-purple-300 font-medium">Divertissement en réalité virtuelle</span>, VRtueux propose des expériences immersives à destination des particuliers et des entreprises.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-5">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="rounded-2xl bg-white/5 border border-white/8 px-3 py-3 text-center"
              >
                <div className="text-white font-bold text-lg leading-none mb-1">{value}</div>
                <div className="text-white/40 text-xs">{label}</div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-purple-500/15 border border-purple-400/20 text-purple-200 text-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer info row */}
          <div className="flex items-center justify-between pt-4 border-t border-white/8">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white/40 text-xs">Entreprise Individuelle (EI) · Privée</span>
            </div>
            <span className="text-white/25 text-xs font-mono">Stage 2025</span>
          </div>
        </div>

        {/* ── Deliverables ── */}
          <section className="fade-up d3">
            <SectionLabel>DSI</SectionLabel>
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

        {/* Bottom accent bar */}
        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-pink-400/50 to-transparent" />
      </div>
    </div>
  );
};

export default VRtueuxPreview;