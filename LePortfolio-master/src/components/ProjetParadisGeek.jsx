import logoVr from '../assets/logoVr.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import { Link } from 'react-router-dom';

// ─── UI Components ───────────────────────────────────────────
const SectionBadge = ({ children }) => (
  <div className="inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full px-6 py-2 border border-white/[0.08]">
    <span className="text-zinc-200 text-base md:text-lg font-medium">{children}</span>
  </div>
);

const Card = ({ children }) => (
  <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm hover:border-cyan-400/20 transition-colors duration-300 p-6">
    {children}
  </div>
);

const NumberedList = ({ items }) => (
  <ul className="space-y-3">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3 text-zinc-400 text-base">
        <span className="mt-0.5 w-6 h-6 flex-shrink-0 rounded-full bg-cyan-400/20 border border-cyan-400/30 text-cyan-400 flex items-center justify-center font-bold text-xs">
          {i + 1}
        </span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

// ─── Main Component ───────────────────────────────────────────
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
    <div className="pt-50 min-h-screen relative bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-zinc-200 px-4 sm:px-8 py-16 overflow-auto">

      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-12">

        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-6 border-b border-white/[0.08] pb-6 mb-10">
          <div className="flex flex-col items-center lg:items-start lg:w-1/3 gap-2">
            <div className="bg-cyan-200 w-24 h-24 flex items-center justify-center rounded-xl overflow-hidden">
              <img src={logoVr} alt="Logo Elixir Création" />
            </div>
            <p className="text-zinc-400 text-sm">Elixir Création</p>
            <Link to="/Stage2" className="text-cyan-400 text-sm underline">
              Entreprise
            </Link>
            <Link to="/Bridge" className="text-cyan-400 text-sm underline">
              Mission conception du site web Bridge Hotel
            </Link>
          </div>
          <div className="lg:w-2/3">
            <h1 className="text-3xl font-bold text-zinc-200 mb-2">
              Refonte d'un site web sous WordPress avec Divi
            </h1>
            <p className="text-zinc-500 text-sm">
              AAA AAA
              <br />
              09 février 2026
            </p>
          </div>
        </div>

        {/* Intervenants */}
        <section>
          <SectionBadge>Intervenants</SectionBadge>
          <p className="mt-4 text-zinc-400 text-lg">Maître de stage</p>
        </section>

        {/* Objectif */}
        <section>
          <SectionBadge>Objectif du projet</SectionBadge>
          <p className="mt-4 text-zinc-400 text-lg leading-relaxed">
            Refonte complète d'un site web existant sous WordPress en utilisant l'extension Divi. L'objectif était de livrer un site WordPress finalisé tout en prenant en main les fonctionnalités de Divi, en conservant les éléments pertinents de l'ancien site et en améliorant le design global.
          </p>
        </section>

        {/* Livrables */}
        <section>
          <SectionBadge>Livrables</SectionBadge>
          <p className="mt-4 text-zinc-400 text-lg leading-relaxed">
            Site web WordPress finalisé (en attente de contenu)
          </p>
        </section>

        {/* Contraintes */}
        <section>
          <SectionBadge>Contraintes</SectionBadge>
          <p className="mt-4 text-zinc-400 text-lg leading-relaxed">
            Deux contraintes principales ont encadré ce projet : de nombreux allers-retours entre les pages et le menu de WordPress, ainsi que l'absence de dossier images fourni par le client, rendant l'intégration visuelle dépendante des ressources disponibles sur l'ancien site.
          </p>
        </section>

        {/* Outils */}
        <section>
          <SectionBadge>Outils utilisés</SectionBadge>
          <p className="mt-4 text-zinc-500 text-sm mb-3">WordPress · Divi · Divi Elegant</p>
          <div className="flex flex-wrap gap-4">
            {[html, css, js].map((img, i) => (
              <div
                key={i}
                className="w-24 h-24 bg-white/5 border border-white/[0.08] rounded-xl flex items-center justify-center overflow-hidden hover:scale-105 transition-transform p-2"
              >
                <img src={img} alt="" className="max-w-full max-h-full object-contain" />
              </div>
            ))}
          </div>
        </section>

        {/* Étapes */}
        <section>
          <SectionBadge>Étapes du projet</SectionBadge>
          <div className="mt-4 space-y-4">
            {steps.map((step, i) => (
              <Card key={i}>
                <h3 className="text-cyan-400 font-semibold text-xl mb-3 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-cyan-400/20 border border-cyan-400/40 flex items-center justify-center text-sm font-bold text-cyan-400">
                    {i + 1}
                  </span>
                  {step.title}
                </h3>
                <p className="text-zinc-400 text-base leading-relaxed">{step.content}</p>
                <div className="mt-4 w-full h-48 bg-white/5 border border-white/[0.08] rounded-xl flex items-center justify-center text-zinc-600 text-sm">
                  Image ici
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Démarche */}
        <section>
          <SectionBadge>Démarche de réalisation</SectionBadge>
          <NumberedList items={demarche} />
        </section>

        {/* Bilan */}
        <section>
          <SectionBadge>Bilan de la mission</SectionBadge>
          <Card>
            <p className="mb-4 text-zinc-400">
              Le site est en attente d'images ainsi que de précisions sur certaines modifications attendues par le client.
            </p>
            <p className="font-semibold mb-2">Bilan personnel :</p>
            <p className="text-zinc-400">
              Montée en compétences sur WordPress et Divi. La principale difficulté rencontrée est liée à l'absence de contenus (images) fournis par le client, ce qui a ralenti l'intégration visuelle des pages.
            </p>
          </Card>
        </section>

        {/* Footer */}
        <footer className="text-center text-xs text-zinc-500 mt-12 border-t border-white/[0.08] pt-4">
          AAA – Portfolio 2025
        </footer>
      </div>
    </div>
  );
};

export default Project1;