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
    "Analyse de la maquette client",
    "Répartition des pages au sein de l'équipe",
    "Création des pages selon la maquette",
    "Mise en place des menus + implémentation au header et footer",
    "Création des « héro » sur toutes les pages",
    "Insertion des images + textes",
    "Ajustement des marges par rapport à la maquette",
    "Correction des polices d'écriture + taille",
    "Relectures et ajustements avec le maître de stage",
    "Optimisation des marges avec une méthode plus efficace (containers des 2 côtés)",
    "Aide d'une designer sur certaines sections + implémentations sur toutes les autres pages",
    "Ajout de fonctionnalités (bouton flottant WhatsApp + extension d'un formulaire de contact)",
    "Intégration du code de réservation fourni par le client",
    "Intégration des ancres sur les pages",
    "Ajout des modifications de design sur les autres pages",
    "Dernière révision avec le maître de stage",
    "Envoi du site à la web designer pour certaines retouches finales",
    "Finalisation du site : insertions et modifications des pages en anglais",
  ];

  const steps = [
    {
      title: "Analyse de la maquette & répartition des tâches",
      content:
        "Le projet a débuté par l'analyse approfondie de la maquette PDF fournie par le client afin de comprendre le design et la structure attendus du site. Les pages ont ensuite été réparties au sein de l'équipe de stagiaires pour optimiser la progression du projet.",
    },
    {
      title: "Création des pages & structure",
      content:
        "Les pages ont été créées selon la maquette, avec l'intégration des menus, du header et du footer, ainsi que des sections héro sur toutes les pages. Les contenus (textes et images) ont été ajoutés, puis les marges, polices et tailles de texte ont été ajustées pour correspondre précisément à la maquette client.",
    },
    {
      title: "Relectures & optimisations",
      content:
        "Des relectures régulières ont été effectuées avec le maître de stage pour s'assurer de la conformité du rendu. L'optimisation des marges a été réalisée grâce à une méthode plus efficace (containers des deux côtés). Une web designer est également intervenue pour améliorer certaines sections, et ses modifications ont ensuite été appliquées sur l'ensemble des autres pages du site.",
    },
    {
      title: "Ajout des fonctionnalités",
      content:
        "Plusieurs fonctionnalités ont été intégrées au site : un bouton WhatsApp flottant, un formulaire de contact via l'extension Contact Form 7, le code de réservation fourni directement par le client, ainsi que des ancres sur les différentes pages pour améliorer la navigation.",
    },
    {
      title: "Finalisation & version anglaise",
      content:
        "Une dernière révision complète a été effectuée avec le maître de stage. Le site a ensuite été envoyé à la web designer pour certaines retouches finales. La phase de finalisation a également inclus l'insertion et la modification des pages en anglais pour proposer une version bilingue du site. Le site web finalisé a ensuite été transféré à la web designer.",
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
                <p className="text-sm mt-2 text-white/70 text-center lg:text-left">Elixir Création</p>
                <Link to="/CompanyElixir" className="underline text-teal-400 hover:text-teal-300 text-sm mt-1">
                  Entreprise
                </Link>
              </div>
              <div className="lg:w-2/3 pl-0 lg:pl-6">
                <h1 className="text-3xl font-bold text-white mb-2">
                  Projet Création d'un site web avec WordPress & Elementor
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
              <p className="mt-4 text-white/80 text-lg">Web designer · Maître de stage</p>
            </section>

            {/* Description */}
            <section className="mb-8">
              <SectionBadge>Description du projet</SectionBadge>
              <p className="mt-4 text-white/80 text-lg leading-relaxed">
                En stage chez Elixir Création, j'ai participé à la création d'un site web sous WordPress à partir d'une maquette PDF fournie par le client, en utilisant l'extension Elementor et le thème Blocksy. Ce projet m'a permis de monter en compétences sur WordPress et Elementor, tout en répondant aux exigences précises d'un client professionnel.
              </p>
            </section>

            {/* Objectif */}
            <section className="mb-8">
              <SectionBadge>Objectif du projet</SectionBadge>
              <p className="mt-4 text-white/80 text-lg leading-relaxed">
                L'objectif principal était de créer un site web WordPress finalisé à partir d'une maquette PDF client, en assurant une intégration correcte des images (dimensions, flexbox), une prise en main efficace de WordPress et d'Elementor, et le respect fidèle du design fourni.
              </p>
            </section>

            {/* Contraintes */}
            <section className="mb-8">
              <SectionBadge>Contraintes</SectionBadge>
              <p className="mt-4 text-white/80 text-lg leading-relaxed">
                Plusieurs contraintes techniques et organisationnelles ont encadré ce projet : la recherche de tutoriels pour des designs spécifiques, la mise en place précise des marges, et de nombreux allers-retours entre les pages et le menu de WordPress.
              </p>
            </section>

            {/* Outils */}
            <section className="mb-8">
              <SectionBadge>Outils utilisés</SectionBadge>
              <p className="mt-4 text-white/60 text-sm mb-3">WordPress · Elementor · Blocksy · Contact Form 7</p>
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
                  Le site web a été terminé et transféré à la web designer pour les retouches finales. Ce projet a permis une réelle montée en compétences sur WordPress et Elementor, notamment sur la gestion des mises en page complexes et le respect d'une maquette client précise.
                </p>
                <p className="font-semibold text-white mt-5 mb-2">Difficultés rencontrées :</p>
                <p className="text-white/75">
                  Les principales difficultés ont été le respect précis de la maquette et la réalisation de mises en page spécifiques demandant des recherches de tutoriels et beaucoup d'ajustements.
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