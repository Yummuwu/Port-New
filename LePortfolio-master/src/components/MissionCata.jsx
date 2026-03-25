import logoVr from '../assets/logoVr.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import { Link } from 'react-router-dom';

// ─── UI Components ───────────────────────────────────────────────────────────

const Section = ({ title, children }) => (
  <section className="mb-10">
    <div className="inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20">
      <span className="text-white/90 text-base md:text-lg font-medium">
        {title}
      </span>
    </div>
    <div className="mt-4">{children}</div>
  </section>
);

const Card = ({ children }) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition duration-300">
    {children}
  </div>
);

const NumberedList = ({ items }) => (
  <ul className="space-y-3">
    {items.map((item, i) => (
      <li key={i} className="flex gap-3 text-white/75">
        <span className="w-6 h-6 flex items-center justify-center rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-bold">
          {i + 1}
        </span>
        {item}
      </li>
    ))}
  </ul>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const Project1 = () => {

  const demarche = [
    "Création de la table jeu",
    "Réutilisation de codes existants",
    "Création barre de recherche dynamique",
    "Ajout colonne image",
    "Migration vers Laravel",
    "Création architecture MVC",
    "Ajout requêtes SQL filtres",
    "Ajout bouton réservation",
    "Transmission du jeu sélectionné",
    "Ajout page détail jeu",
  ];

  const steps = [
    {
      title: "Récupération des codes",
      content: "Base issue de projets précédents pour accélérer le développement.",
    },
    {
      title: "Recherche dynamique",
      content: "Recherche en temps réel par titre/type via requêtes dynamiques.",
    },
    {
      title: "Migration Laravel",
      content: "Adaptation MVC avec controllers, services, repository.",
    },
    {
      title: "Filtres",
      content: "Ajout filtres via requêtes SQL côté serveur.",
    },
    {
      title: "Navigation & réservation",
      content: "Boutons + pré-remplissage + page détail.",
    },
  ];

  return (
    <div className="pt-50 min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 px-4 py-16 text-white">


      <div className="max-w-6xl mx-auto relative">

        {/* HEADER */}
        <header className="flex flex-col lg:flex-row gap-6 border-b border-white/20 pb-6 mb-10">

          <div className="flex flex-col items-center lg:items-start lg:w-1/3">
            <img src={logoVr} className="w-24 h-24 rounded-xl" />
            <p className="text-sm text-white/60 mt-2">VRTueux</p>

            <Link to="/Stage1" className="text-teal-400 text-sm underline">
              Voir l'entreprise →
            </Link>
            <Link to="/MissionReser" className="text-teal-400 text-sm underline">
              Voir mission page réservation →
            </Link>
          </div>

          <div className="lg:w-2/3">
            <h1 className="text-3xl font-bold">
              Catalogue de jeux — Recherche & Filtres
            </h1>
            <p className="text-sm text-white/50 mt-2">
              01 février 2026
            </p>
          </div>

        </header>

        {/* INTERVENANTS */}
        <Section title="Intervenants">
          <p className="text-white/80 text-lg">Maître de stage</p>
        </Section>

        {/* DESCRIPTION */}
        <Section title="Description">
          <p className="text-white/80 text-lg leading-relaxed">
            Développement d’un catalogue interactif avec recherche dynamique
            et filtres permettant aux utilisateurs de naviguer et réserver
            facilement une session VR.
          </p>
        </Section>

        {/* OBJECTIF */}
        <Section title="Objectif">
          <p className="text-white/80 text-lg leading-relaxed">
            Créer un système de recherche et filtrage performant intégré
            dans une architecture Laravel propre.
          </p>
        </Section>

        {/* CONTRAINTES */}
        <Section title="Contraintes">
          <Card>
            <p className="text-white/75">
              Mise en place de filtres SQL + migration vers Laravel (MVC,
              repository, services).
            </p>
          </Card>
        </Section>

        {/* OUTILS */}
        <Section title="Outils">
          <p className="text-white/60 text-sm mb-4">
            Laravel · PHP · MySQL · Blade · SQL
          </p>

          <div className="flex gap-4 flex-wrap">
            {[html, css, js].map((img, i) => (
              <div key={i} className="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center hover:scale-105 transition">
                <img src={img} className="p-2" />
              </div>
            ))}
          </div>
        </Section>

        {/* ÉTAPES */}
        <Section title="Étapes">
          <div className="space-y-4">
            {steps.map((step, i) => (
              <Card key={i}>
                <h3 className="text-teal-400 font-semibold mb-2">
                  {i + 1}. {step.title}
                </h3>
                <p className="text-white/75">{step.content}</p>
              </Card>
            ))}
          </div>
        </Section>

        {/* DÉMARCHE */}
        <Section title="Démarche">
          <NumberedList items={demarche} />
        </Section>

        {/* BILAN */}
        <Section title="Bilan">
          <Card>
            <p className="mb-4 text-white/80">
              Catalogue fonctionnel mais pages détail restantes à finaliser.
            </p>

            <p className="font-semibold mb-2">Difficulté :</p>
            <p className="text-white/70 mb-4">
              Mise en place de la recherche dynamique complexe.
            </p>

            <p className="font-semibold mb-2">Apports :</p>
            <p className="text-white/70">
              Meilleure maîtrise Laravel + filtres SQL côté serveur.
            </p>
          </Card>
        </Section>

        {/* FOOTER */}
        <footer className="text-center text-xs text-white/30 mt-12 border-t border-white/10 pt-4">
          Portfolio 2025
        </footer>

      </div>
    </div>
  );
};

export default Project1;