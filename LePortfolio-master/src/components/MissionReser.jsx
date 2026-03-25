import logoVr from '../assets/logoVr.png';
import { Link } from 'react-router-dom';

// ─── Data ────────────────────────────────────────────────────────────────────

const difficulties = [
  "Base de données en constante évolution...",
  "Adaptation de plusieurs pages développées en PHP pur vers Laravel.",
  "Difficulté avec Eloquent malgré SQL maîtrisé.",
  "Conception complexe de la table reservations.",
  "Manque d'encadrement technique.",
  "Utilisation d’IA pour corriger certaines erreurs.",
  "Bouton dynamique pour casques.",
  "Problème de retour arrière après réservation.",
  "Gestion des routes Laravel.",
  "Organisation Controller / Model.",
  "Transmission des variables entre pages.",
  "Incohérence du nombre de joueurs.",
];

const contraintes = [
  "Développement sans encadrement technique",
  "Construction du site de A à Z",
  "Apprentissage de Laravel",
  "Système de réservation complexe",
  "Sécurité avec Breeze",
];

const bilanPerso = [
  "Meilleure compréhension de Laravel",
  "Amélioration BDD",
  "Gestion des routes",
  "Autonomie renforcée",
];

const steps = [
  {
    title: "Réunion / maquette",
    content: "Analyse du besoin + création d’une maquette Canva.",
  },
  {
    title: "Réservation",
    content: "Formulaire avec sélection jeux, créneaux et infos client.",
  },
  {
    title: "Base de données",
    content: "Création SQL + connexion PDO.",
  },
  {
    title: "Continuation",
    content: "Ajout catalogue + JS pour interactions.",
  },
  {
    title: "Migration Laravel",
    content: "Passage en MVC + Breeze.",
  },
  {
    title: "Synchronisation",
    content: "Connexion design + fonctionnalités.",
  },
];

// ─── Reusable Components ─────────────────────────────────────────────────────

const Section = ({ title, children }) => (
  <section className="space-y-4">
    <h2 className="text-xl font-mono uppercase tracking-widest text-cyan-400">
      {title}
    </h2>
    {children}
  </section>
);

const GlassCard = ({ children }) => (
  <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 backdrop-blur-sm">
    {children}
  </div>
);

const List = ({ items }) => (
  <div className="space-y-2">
    {items.map((item, i) => (
      <div key={i} className="flex gap-2 text-zinc-400">
        <span className="w-1.5 h-1.5 mt-2 bg-cyan-400 rounded-full" />
        {item}
      </div>
    ))}
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const MissionReserv = () => {
  return (
    <div className="pt-50 min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-zinc-200 px-6 py-12">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* HEADER */}
        <header className="border-b border-white/[0.08] pb-6 flex gap-6 items-center">
          <img src={logoVr} className="w-16 h-16 rounded-xl" />

          <div>
            <p className="font-mono text-cyan-400 uppercase">
              Mission de stage · VRTueux
            </p>
            <p className="text-sm text-zinc-500">Janvier – Février 2026</p>

            <Link to="/Stage1" className="text-cyan-400 text-sm underline">
              Voir l'entreprise →
            </Link>
            <br></br>
            <Link to="/Catalogue" className="text-cyan-400 text-sm underline">
              Voir mission page catalogue →
            </Link>
          </div>
        </header>

        {/* DESCRIPTION */}
        <Section title="Description">
          <p className="text-zinc-400">
            Création d’un site de réservation VR avec catalogue, compte utilisateur et système de réservation.
          </p>
        </Section>

        {/* OBJECTIF */}
        <Section title="Objectif">
          <p className="text-zinc-400">
            Permettre aux clients de réserver une session VR avec sélection complète.
          </p>
        </Section>

        {/* CONTRAINTES */}
        <Section title="Contraintes">
          <GlassCard>
            <List items={contraintes} />
          </GlassCard>
        </Section>

        {/* DIFFICULTÉS */}
        <Section title="Difficultés">
          <GlassCard>
            <List items={difficulties} />
          </GlassCard>
        </Section>

        {/* STEPS */}
        <Section title="Étapes">
          <div className="space-y-4">
            {steps.map((step, i) => (
              <GlassCard key={i}>
                <h3 className="text-cyan-400 font-mono mb-2">
                  {i + 1}. {step.title}
                </h3>
                <p className="text-zinc-400">{step.content}</p>
              </GlassCard>
            ))}
          </div>
        </Section>

        {/* BILAN */}
        <Section title="Bilan">
          <div className="grid md:grid-cols-2 gap-4">
            <GlassCard>
              <p className="text-zinc-400">
                Projet fonctionnel mais améliorable (sécurité, UX, filtres).
              </p>
            </GlassCard>

            <GlassCard>
              <List items={bilanPerso} />
            </GlassCard>
          </div>
        </Section>

        {/* FOOTER */}
        <footer className="text-center text-xs text-zinc-600 pt-6 border-t border-white/[0.06]">
          Portfolio 2025
        </footer>

      </div>
    </div>
  );
};

export default MissionReserv;