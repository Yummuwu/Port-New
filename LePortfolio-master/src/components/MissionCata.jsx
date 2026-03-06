import logoVr from '../assets/logoVr.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import { Link } from 'react-router-dom';

const SectionBadge = ({ children }) => (
  <div className="inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20">
    <span className="text-white/90 text-base md:text-lg font-medium">{children}</span>
  </div>
);

const Project1 = () => {
  const demarche = [
    "Création de la table jeu (dans le cadre d'un autre projet)",
    "Récupération de certains codes utiles réalisés en cours pour la création de la page",
    "Utilisation des codes pour créer une barre de recherche permettant de rechercher dynamiquement un jeu par son titre ou type",
    "Modification de la table (ajout d'une colonne pour afficher l'image du jeu sur le site web)",
    "Migration et adaptation du code sur Laravel",
    "Création du contrôleur, model, repository, ressource, service et routes de la page catalogue",
    "Ajout des différentes requêtes SQL liées aux filtres de recherche dans le repository",
    "Ajout d'un bouton « Réserver une session » à chaque jeu renvoyant à la page de réservation",
    "Passage du titre du jeu directement dans le champ attribué sur la page de réservation lors du clic",
    "Ajout d'une URL sur chaque titre de jeu renvoyant vers une description complète du jeu sélectionné",
  ];

  const steps = [
    {
      title: "Récupération et réutilisation des codes existants",
      content:
        "Le projet a débuté par la récupération de codes réalisés en cours, servant de base pour la construction de la page catalogue. Ces ressources ont permis de disposer d'une structure initiale solide pour la barre de recherche et les filtres.",
    },
    {
      title: "Création de la barre de recherche dynamique",
      content:
        "Une barre de recherche a été mise en place pour permettre aux utilisateurs de rechercher un jeu en temps réel par son titre ou son type. Cette fonctionnalité repose sur des requêtes dynamiques déclenchées à chaque saisie de l'utilisateur.",
    },
    {
      title: "Modification de la table & adaptation sur Laravel",
      content:
        "La table « jeu » a été modifiée pour inclure une colonne dédiée à l'image du jeu, afin de l'afficher dans le catalogue. L'ensemble du code a ensuite été migré et adapté sur Laravel, avec la création des éléments MVC nécessaires : contrôleur, model, repository, ressource, service et routes.",
    },
    {
      title: "Implémentation des filtres de recherche",
      content:
        "Des filtres ont été ajoutés au catalogue pour permettre à l'utilisateur de sélectionner des jeux selon des critères spécifiques (type de jeu, etc.). Ces filtres s'appuient sur des requêtes SQL définies dans le repository, permettant un filtrage précis côté serveur.",
    },
    {
      title: "Fonctionnalités de réservation & navigation",
      content:
        "Un bouton « Réserver une session » a été intégré sur chaque carte de jeu, redirigeant vers la page de réservation avec le titre du jeu pré-rempli dans le champ correspondant. De plus, chaque titre de jeu est cliquable et renvoie vers une page dédiée offrant une description complète du jeu sélectionné.",
    },
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
                <p className="text-sm mt-2 text-white/70 text-center lg:text-left">Vrtueux</p>
                <Link to="/CompanyVr" className="underline text-teal-400 hover:text-teal-300 text-sm mt-1">
                  Entreprise
                </Link>
              </div>
              <div className="lg:w-2/3 pl-0 lg:pl-6">
                <h1 className="text-3xl font-bold text-white mb-2">
                  Projet Catalogue de jeux — Barre de recherche & Filtres
                </h1>
                <p className="text-sm text-white/60">
                  AAA AAA
                  <br />
                  01 février 2026
                </p>
              </div>
            </div>

            {/* Intervenants */}
            <section className="mb-8">
              <SectionBadge>Intervenants</SectionBadge>
              <p className="mt-4 text-white/80 text-lg">Maître de stage</p>
            </section>

            {/* Description */}
            <section className="mb-8">
              <SectionBadge>Description du projet</SectionBadge>
              <p className="mt-4 text-white/80 text-lg leading-relaxed">
                Dans le cadre de mon stage, j'ai développé un catalogue de jeux interactif intégrant une barre de recherche dynamique et un système de filtres. Ce catalogue permet aux utilisateurs de parcourir les jeux disponibles, d'en effectuer une recherche par titre ou type, et d'accéder rapidement à la réservation d'une session depuis chaque fiche jeu.
              </p>
            </section>

            {/* Objectif */}
            <section className="mb-8">
              <SectionBadge>Objectif du projet</SectionBadge>
              <p className="mt-4 text-white/80 text-lg leading-relaxed">
                L'objectif principal était de mettre en place un catalogue de jeux fonctionnel avec une barre de recherche permettant de filtrer les jeux dynamiquement par titre ou type, ainsi qu'un système de filtres spécifiques pour affiner la recherche. Le tout devait être intégré proprement dans une architecture Laravel.
              </p>
            </section>

            {/* Contraintes */}
            <section className="mb-8">
              <SectionBadge>Contraintes</SectionBadge>
              <p className="mt-4 text-white/80 text-lg leading-relaxed">
                La principale contrainte technique était la création d'un système de filtres permettant de sélectionner des jeux par type ou catégorie spécifique, en s'appuyant sur des requêtes SQL adaptées. La migration du code existant vers Laravel a également nécessité une adaptation rigoureuse de l'architecture (MVC, repository, service).
              </p>
            </section>

            {/* Outils */}
            <section className="mb-8">
              <SectionBadge>Outils utilisés</SectionBadge>
              <p className="mt-4 text-white/60 text-sm mb-3">Laravel · PHP · MySQL · Blade · SQL</p>
              <div className="flex flex-wrap gap-4">
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

            {/* Démarche */}
            <section className="mb-8">
              <SectionBadge>Démarche de réalisation</SectionBadge>
              <ul className="mt-4 space-y-3">
                {demarche.map((d, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/75 text-base">
                    <span className="mt-0.5 w-6 h-6 flex-shrink-0 bg-teal-500/20 border border-teal-400/30 text-teal-300 rounded-full flex items-center justify-center font-bold text-xs">
                      {i + 1}
                    </span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Bilan */}
            <section className="mb-8">
              <SectionBadge>Bilan de la mission</SectionBadge>
              <div className="mt-4 bg-white/5 border border-white/10 rounded-2xl p-6 text-white/80 text-lg leading-relaxed">
                <p>
                  Le catalogue est principalement terminé. Il manque encore la création des pages dédiées à chaque jeu, afin d'afficher des informations complètes telles que la description, le type de jeu et les appareils sur lesquels il peut être joué.
                </p>
                <p className="font-semibold text-white mt-5 mb-2">Difficultés rencontrées :</p>
                <p className="text-white/75">
                  La principale difficulté a été la mise en place de la barre de recherche dynamique, dont la recréation s'est avérée complexe malgré l'aide des codes fournis en cours.
                </p>
                <p className="font-semibold text-white mt-5 mb-2">Apports personnels :</p>
                <p className="text-white/75">
                  Ce projet m'a permis d'acquérir des compétences concrètes dans la création de filtres de recherche côté serveur avec Laravel, et de mieux comprendre l'articulation entre les requêtes SQL et l'interface utilisateur.
                </p>
              </div>
            </section>

            {/* Footer */}
            <footer className="text-center text-xs text-white/30 mt-8 pt-4 border-t border-white/10">
              AAA – Portfolio 2025
            </footer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project1;