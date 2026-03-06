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
    "Analyse de l'ancien site du client",
    "Recherche et sélection d'un template via Divi Elegant",
    "Répartition des pages au sein de l'équipe",
    "Création des sections « hero » sur l'ensemble des pages",
    "Recherche et intégration de sections de design",
    "Réutilisation des images disponibles sur l'ancien site",
    "Adaptation du responsive (page d'accueil)",
    "Insertion d'ancres sur les boutons",
    "Création du footer",
    "Ajustements et ajouts de contenus sur les pages Services et Tarifs",
    "Ajout des pages Mentions légales et Politique de confidentialité",
    "Modification des polices d'écriture",
    "Corrections suite au PDF de retours client",
  ];

  const steps = [
    {
      title: "Analyse de l'ancien site & sélection du template",
      content:
        "La réalisation du projet a débuté par l'analyse de l'ancien site du client afin de récupérer les éléments à conserver et à améliorer. Un template adapté a ensuite été recherché et sélectionné via Divi Elegant pour servir de base à la refonte.",
    },
    {
      title: "Répartition & construction des pages",
      content:
        "Les différentes pages ont été réparties au sein de l'équipe. Chaque page a été construite avec la création des sections « hero », l'intégration de sections de design et la réutilisation des images disponibles sur l'ancien site.",
    },
    {
      title: "Responsive, navigation & footer",
      content:
        "Le travail s'est poursuivi par l'adaptation du responsive, principalement sur la page d'accueil, l'insertion d'ancres sur les boutons, la création du footer et l'ajout des pages légales (Mentions légales et Politique de confidentialité).",
    },
    {
      title: "Ajustements contenus & typographies",
      content:
        "Des ajustements ont été réalisés sur les pages Services et Tarifs, ainsi que des modifications de typographies pour harmoniser l'ensemble du site et correspondre au style souhaité par le client.",
    },
    {
      title: "Corrections suite aux retours client",
      content:
        "Des corrections ont été apportées en fonction des retours du client transmis via un PDF. Le site est actuellement en attente des images et de précisions sur certaines modifications demandées par le client.",
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
                  <img src={logoVr} alt="Logo Elixir Création" />
                </div>
                <p className="text-sm mt-2 text-white/70 text-center lg:text-left">Elixir Création</p>
                <Link to="/CompanyElixir" className="underline text-teal-400 hover:text-teal-300 text-sm mt-1">
                  Entreprise
                </Link>
              </div>
              <div className="lg:w-2/3 pl-0 lg:pl-6">
                <h1 className="text-3xl font-bold text-white mb-2">
                  Refonte d'un site web sous WordPress avec Divi
                </h1>
                <p className="text-sm text-white/60">
                  AAA AAA
                  <br />
                  09 février 2026
                </p>
              </div>
            </div>

            {/* Intervenants */}
            <section className="mb-8">
              <SectionBadge>Intervenants</SectionBadge>
              <p className="mt-4 text-white/80 text-lg">Maître de stage</p>
            </section>

            {/* Objectif */}
            <section className="mb-8">
              <SectionBadge>Objectif du projet</SectionBadge>
              <p className="mt-4 text-white/80 text-lg leading-relaxed">
                Refonte complète d'un site web existant sous WordPress en utilisant l'extension Divi. L'objectif était de livrer un site WordPress finalisé tout en prenant en main les fonctionnalités de Divi, en conservant les éléments pertinents de l'ancien site et en améliorant le design global.
              </p>
            </section>

            {/* Livrables */}
            <section className="mb-8">
              <SectionBadge>Livrables</SectionBadge>
              <p className="mt-4 text-white/80 text-lg leading-relaxed">
                Site web WordPress finalisé (en attente de contenu)
              </p>
            </section>

            {/* Contraintes */}
            <section className="mb-8">
              <SectionBadge>Contraintes</SectionBadge>
              <p className="mt-4 text-white/80 text-lg leading-relaxed">
                Deux contraintes principales ont encadré ce projet : de nombreux allers-retours entre les pages et le menu de WordPress, ainsi que l'absence de dossier images fourni par le client, rendant l'intégration visuelle dépendante des ressources disponibles sur l'ancien site.
              </p>
            </section>

            {/* Outils */}
            <section className="mb-8">
              <SectionBadge>Outils utilisés</SectionBadge>
              <p className="mt-4 text-white/60 text-sm mb-3">WordPress · Divi · Divi Elegant</p>
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
                  Le site est en attente d'images ainsi que de précisions sur certaines modifications attendues par le client.
                </p>
                <p className="font-semibold text-white mt-5 mb-2">Bilan personnel :</p>
                <p className="text-white/75">
                  Montée en compétences sur WordPress et Divi. La principale difficulté rencontrée est liée à l'absence de contenus (images) fournis par le client, ce qui a ralenti l'intégration visuelle des pages.
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