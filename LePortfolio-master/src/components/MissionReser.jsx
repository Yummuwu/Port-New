import logoVr from '../assets/logoVr.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import { Link } from 'react-router-dom';

const MissionReserv = () => {
  const difficulties = [
    "Base de données en constante évolution : restructurations fréquentes liées à la complexité des relations entre tables (filtres, contraintes, dépendances).",
    "Adaptation de plusieurs pages développées en PHP pur vers l'architecture Laravel.",
    "Difficulté à maîtriser les requêtes SQL via Laravel (Eloquent / Query Builder), malgré une bonne compréhension en SQL natif.",
    "Conception complexe de la table 'reservations' et gestion des relations multiples (jeux, créneaux, casques, utilisateurs).",
    "Manque d'encadrement technique durant le stage, rendant la validation des choix techniques plus difficile.",
    "Recherche intensive et utilisation d'outils d'intelligence artificielle pour résoudre certaines erreurs techniques.",
    "Mise en place d'un bouton dynamique permettant de sélectionner les casques disponibles depuis la base de données.",
    "Problème de retour en arrière non souhaité après la confirmation de réservation.",
    "Compréhension et gestion des routes sous Laravel.",
    "Organisation des méthodes : difficulté à déterminer dans quels fichiers (Controller, Model, etc.) placer certaines fonctions.",
    "Gestion et transmission des variables entre les pages (formulaire → confirmation → insertion BDD).",
    "Incohérence du nombre de joueurs due à une colonne vide dans la base de données."
  ];

  const steps = [
    {
      title: "Réunion / maquette",
      content: "Pour commencer, nous avons eu une réunion avec le maître de stage pour comprendre ses attentes, les technologies que l'on va utiliser ainsi que la structuration du site. Suite à cela, j'ai réalisé une maquette du site sur Canva pour valider la structure et le design avant de commencer le développement. Le site comprenait une page d'accueil, de catalogue des jeux, de réservation en ligne, de snacks, de compte utilisateur et de contact. J'ai également repris des méthodes faites en cours pour ensuite les adapter au projet."
    },
    {
      title: "Fonctionnalité réservation",
      content: "Par la suite, j'ai commencé le développement de la fonctionnalité de réservation en ligne en PHP et HTML. Cela comprenait la création d'un formulaire pour la sélection des jeux, des créneaux horaires, et des informations du client (nom, prénom, email, téléphone). Beaucoup de brouillons et schémas ont été réalisés pendant cette étape."
    },
    {
      title: "Base de données",
      content: "Une fois la base de la fonctionnalité mise en place, j'ai créé la base de données SQL avec plusieurs tables indispensables pour stocker les réservations et les informations des utilisateurs de manière sécurisée. J'ai ensuite intégré cette base de données avec le site web pour permettre la gestion des réservations grâce au PDO."
    },
    {
      title: "Continuation",
      content: "J'ai continué à peaufiner la fonctionnalité de réservation puis commencé le développement du catalogue des jeux proposés par VRTueux. Plusieurs modifications ont eu lieu sur la base de données pour améliorer la gestion des jeux et des réservations. Du JavaScript a ensuite été ajouté pour améliorer le transfert des données de réservation entre les pages."
    },
    {
      title: "Migration du projet",
      content: "Enfin, une fois les fonctionnalités principales fonctionnelles mais toujours en cours de production, j'ai migré le projet vers le framework Laravel pour améliorer la structure et la maintenabilité du code. Cela a impliqué la réécriture de certaines parties du code notamment du catalogue et de réservation pour s'adapter à l'architecture MVC de Laravel, ainsi que l'utilisation de ses fonctionnalités intégrées pour la gestion des bases de données, des routes, et de la sécurité. J'ai ensuite intégré une fonctionnalité Breeze pour la gestion des utilisateurs et de l'authentification sécurisé fourni par Laravel."
    },
    {
      title: "Synchronisation",
      content: "Pour finaliser le projet, j'ai relié toutes mes fonctionnalités (réservation, catalogue, gestion des utilisateurs) avec la partie design faite par mon collègue de stage. Des modifications ont été apportées pour assurer que la partie design et la partie fonctionnelle du site soient bien intégrées et offrent une expérience utilisateur fluide et cohérente. Des filtres JavaScript ont dû être ajoutés pour améliorer le système de réservation et le rendre plus réactif en temps réel. Le projet a été partiellement fini, mais certains filtres de réservation n'ont pas pu être terminés faute de temps."
    }
  ];

  return (
    <div className="min-h-screen overflow-auto bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative">

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <section className="relative pb-20 pt-24 px-4 sm:px-6">
        <div className="max-w-[90rem] mx-auto">
          <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-[2rem] shadow-2xl relative p-8 md:p-12 border border-white/20">

            {/* Decorative orbs */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full blur-2xl opacity-20 pointer-events-none"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-2xl opacity-20 pointer-events-none"></div>

            {/* Header */}
            <div className="flex flex-col lg:flex-row border-b border-white/20 pb-6 mb-8">
              <div className="flex flex-col items-center lg:items-start lg:w-1/3 mb-4 lg:mb-0">
                <div className="bg-teal-200 text-center w-24 h-24 flex items-center justify-center font-bold text-xs rounded-xl overflow-hidden">
                  <img src={logoVr} alt="Logo VRTueux" />
                </div>
                <p className="text-sm mt-2 text-white/70 text-center lg:text-left">VRTueux</p>
                <Link to="/CompanyElixir" className="underline text-teal-400 hover:text-teal-300 text-sm mt-1">
                  Entreprise
                </Link>
              </div>
              <div className="lg:w-2/3 pl-0 lg:pl-6">
                <h1 className="text-3xl font-bold text-white mb-2">Mission de stage VRTueux</h1>
                <p className="text-sm text-white/60">
                  5 janvier – 13 février 2026
                </p>
              </div>
            </div>

            {/* Section badge helper */}
            {/* Description */}
            <section className="mb-8">
              <SectionBadge>Description du projet</SectionBadge>
              <p className="mt-4 text-white/80 text-lg leading-relaxed">
                En stage de première année de BTS SIO, j'ai réalisé un site internet pour une entreprise de réalité virtuelle nommée VRTueux. Ce projet m'a permis de mettre en pratique mes compétences en développement web tout en répondant aux besoins spécifiques de l'entreprise. Le site web avait pour objectifs de pouvoir visualiser les jeux proposés par l'entreprise ainsi que les snacks/boissons, de permettre aux utilisateurs de réserver des sessions de réalité virtuelle en ligne, et de fournir des informations sur les services offerts.
              </p>
            </section>

            {/* Livrables */}
            <section className="mb-8">
              <SectionBadge>Livrables</SectionBadge>
              <p className="mt-4 text-white/80 text-lg">???</p>
            </section>

            {/* Objectif */}
            <section className="mb-8">
              <SectionBadge>Objectif du projet</SectionBadge>
              <p className="mt-4 text-white/80 text-lg leading-relaxed">
                L'objectif principal de cette mission était de créer un système de réservation en ligne pour les sessions de réalité virtuelle proposées par VRTueux. Ce système devait permettre aux clients de sélectionner un jeu, choisir un créneau horaire, et fournir leurs informations personnelles pour finaliser la réservation ainsi que l'appareil à utiliser.
              </p>
            </section>

            {/* Langages */}
            <section className="mb-8">
              <SectionBadge>Langages</SectionBadge>
              <div className="mt-4 flex flex-wrap gap-4">
                {[
                  { src: html, alt: "HTML" },
                  { src: css, alt: "CSS" },
                  { src: js, alt: "JavaScript" },
                ].map(({ src, alt }) => (
                  <div
                    key={alt}
                    className="w-24 h-24 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center overflow-hidden
                      transform transition duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-lg backdrop-blur-sm"
                  >
                    <img src={src} alt={`Logo ${alt}`} className="max-w-full max-h-full object-contain p-2" />
                  </div>
                ))}
              </div>
            </section>

            {/* Contraintes */}
            <section className="mb-8">
              <SectionBadge>Contraintes</SectionBadge>
              <ul className="mt-4 space-y-2 text-white/80 text-lg list-disc list-inside">
                <li>Développement sans encadrement technique</li>
                <li>Construction du site de A à Z</li>
                <li>Apprentissage du framework Laravel durant le stage</li>
                <li>Système de réservation complexe avec nombreuses relations BDD</li>
                <li>Respect des règles de sécurité (connexion obligatoire via Breeze)</li>
              </ul>
            </section>

            {/* Étapes */}
            <div className="mb-8">
              <SectionBadge>Étapes du projet</SectionBadge>
              <div className="mt-4 space-y-4">
                {steps.map((step, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition duration-300">
                    <h3 className="text-teal-400 font-semibold text-xl mb-3 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-sm font-bold text-teal-300">
                        {i + 1}
                      </span>
                      {step.title}
                    </h3>
                    <p className="text-white/75 text-base leading-relaxed">{step.content}</p>
                    <div className="mt-4 w-full h-48 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white/30 text-sm">
                      Image ici
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bilan */}
            <section className="mb-8">
              <SectionBadge>Bilan de la mission</SectionBadge>
              <div className="mt-4 bg-white/5 border border-white/10 rounded-2xl p-6 text-white/80 text-lg leading-relaxed">
                <p>
                  Le système de réservation est connecté à la base de données et partiellement finalisé. Des améliorations restent à apporter : filtres supplémentaires, messages d'erreurs détaillés, renforcement de la sécurité et conformité RGPD.
                </p>
                <p className="font-semibold text-white mt-5 mb-2">Bilan personnel :</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Meilleure compréhension de Laravel et Blade</li>
                  <li>Amélioration de la logique base de données</li>
                  <li>Gestion des routes et export des variables</li>
                  <li>Projet très formateur réalisé en autonomie</li>
                </ul>
              </div>
            </section>

            {/* Difficultés */}
            <section className="mb-8">
              <SectionBadge>Difficultés rencontrées</SectionBadge>
              <ul className="mt-4 space-y-3">
                {difficulties.map((d, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/75 text-base">
                    <span className="mt-0.5 w-6 h-6 flex-shrink-0 bg-red-500/20 border border-red-400/30 text-red-300 rounded-full flex items-center justify-center font-bold text-xs">
                      {i + 1}
                    </span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Footer */}
            <footer className="text-center text-xs text-white/30 mt-8 pt-4 border-t border-white/10">
              aaaaa – Portfolio 2025
            </footer>
          </div>
        </div>
      </section>
    </div>
  );
};

const SectionBadge = ({ children }) => (
  <div className="inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20">
    <span className="text-white/90 text-base md:text-lg font-medium">{children}</span>
  </div>
);

export default MissionReserv;