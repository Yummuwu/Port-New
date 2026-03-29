import logoVr from '../assets/logoVr.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import { Link } from 'react-router-dom';

// ─── UI STYLE ────────────────────────────────────────────────────────────────

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-2xl font-mono uppercase tracking-[0.2em] text-cyan-400">
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

// ─── MAIN ────────────────────────────────────────────────────────────────────

const Project1 = () => {

  const steps = [
    {
      title: "Création de la table jeu",
      content:
        "Création de la table jeu dans la base de données, reprise d'un autre projet.",
    },
    {
      title: "Récupération des codes",
      content:
        "Récupération de codes utiles réalisés en cours pour la construction de la page catalogue.",
    },
    {
      title: "Barre de recherche dynamique",
      content:
        "Développement d'une barre de recherche dynamique permettant de rechercher un jeu par son titre ou son type.",
    },
    {
      title: "Modification de la table jeu",
      content:
        "Ajout d'une colonne pour stocker et afficher l'image de chaque jeu sur le site.",
    },
    {
      title: "Migration Laravel",
      content:
        "Migration et adaptation du code sous Laravel avec architecture MVC complète.",
    },
    {
      title: "Bouton de réservation",
      content:
        "Ajout d'un bouton permettant de réserver avec le jeu pré-rempli.",
    },
    {
      title: "Page de description",
      content:
        "Création d'une page détaillée pour chaque jeu.",
    },
  ];

  const bilanPerso = [
    "Récupérations des données dans une base de données",
    "Création d'une barre de recherche dynamique"
  ];

  const difficulties = [
    "recherche dynamique complexe.",
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@400;500&display=swap');

        .projvr-root * { font-family: 'Syne', sans-serif; }
        .projvr-root .font-mono { font-family: 'DM Mono', monospace !important; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.45s ease both; }
      `}</style>

      <div className="pt-50 projvr-root min-h-screen flex flex-col bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-zinc-200 px-6 py-12 relative">

        {/* Animated background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="w-full pr-50 pl-50 flex-1 relative">

          {/* Glass card wrapper */}
          <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-[2rem] shadow-2xl relative p-8 md:p-12 border border-white/20">

            {/* Decorative corner orbs */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full blur-2xl opacity-20 pointer-events-none"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-2xl opacity-20 pointer-events-none"></div>

            <div className="space-y-12">

              {/* HEADER */}
              <header className="fade-up border-b border-white/[0.08] pb-6 flex gap-6 items-center">
                <img src={logoVr} className="w-16 h-16 rounded-xl" />

                <div>
                  <span className="text-lg font-mono tracking-widest text-cyan-400 uppercase border border-cyan-400/20 bg-cyan-400/5 rounded-full px-3 py-1">
                    Mission de stage · VRTueux
                  </span>

                  <p className="text-base text-zinc-500 mt-2 mb-2">
                    Mai – Juin 2025
                  </p>

                  <div className="flex flex-col gap-1">
                    <Link to="/Projets" className="text-cyan-400 underline hover:text-cyan-300 transition-colors">
                      Revenir dans les projets de stage →
                    </Link>
                    <Link to="/MissionReser" className="text-cyan-400 underline hover:text-cyan-300 transition-colors">
                      Voir mission réservation →
                    </Link>
                    <Link to="/ProjetVR" className="text-cyan-400 underline hover:text-cyan-300 transition-colors">
                      Voir le projet →
                    </Link>
                  </div>
                </div>
              </header>

              {/* DESCRIPTION */}
              <section className="fade-up">
                <SectionLabel>Description</SectionLabel>
                <p className="text-white text-xl max-w-2xl">
                  Développement d'un catalogue interactif avec recherche dynamique et filtres.
                </p>
              </section>

              {/* OBJECTIF */}
              <section>
                <SectionLabel>Objectif</SectionLabel>
                <p className="text-white text-xl max-w-2xl">
                  Créer un système de recherche performant intégré dans Laravel.
                </p>
              </section>

              {/* CONTRAINTES */}
              <section>
                <SectionLabel>Contraintes</SectionLabel>
                <GlassCard className="p-6">
                  <p className="text-white text-xl">
                    Mise en place de filtres SQL + architecture MVC.
                  </p>
                </GlassCard>
              </section>

              {/* DIFFICULTÉS */}
              <section>
                <SectionLabel>Difficultés</SectionLabel>
                <GlassCard className="p-6">
                  <p className="text-zinc-300 text-xl">
                    {difficulties.map((d, i) => (
                      <span key={i}>- {d}<br /></span>
                    ))}
                  </p>
                </GlassCard>
              </section>

              {/* TIMELINE */}
              <section>
                <SectionLabel>Étapes</SectionLabel>

                <div className="relative pl-10">
                  <div className="absolute left-2.5 top-1.5 bottom-1.5 w-px bg-gradient-to-b from-cyan-400/70 to-cyan-400/10" />

                  <div className="space-y-5">
                    {steps.map((step, i) => (
                      <div key={i} className="relative group">
                        <div className="absolute -left-[34px] top-3.5 w-2.5 h-2.5 rounded-full bg-cyan-400 ring-[3px] ring-cyan-400/15 group-hover:ring-cyan-400/30 transition-all" />

                        <GlassCard className="p-4 group-hover:border-cyan-400/18 group-hover:bg-cyan-400/[0.04] transition-colors">
                          <p className="text-xl font-semibold">
                            {step.title}
                          </p>
                          <p className="text-zinc-400 text-xl">
                            {step.content}
                          </p>
                        </GlassCard>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* BILAN */}
              <section>
                <SectionLabel>Bilan</SectionLabel>
                <div className="grid md:grid-cols-2 gap-4">
                  <GlassCard className="p-6">
                    <div className="grid grid-cols-2 gap-3">
                      {bilanPerso.map((item, i) => (
                        <GlassCard key={i} className="p-3">
                          <p className="text-white text-xl">{item}</p>
                        </GlassCard>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </section>

              {/* FOOTER */}
              <footer className="text-center text-sm text-zinc-600 pt-6 border-t border-white/[0.06] font-mono">
                Portfolio 2025
              </footer>

            </div>
          </div>{/* end glass card */}
        </div>
      </div>
    </>
  );
};

export default Project1;