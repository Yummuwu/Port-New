import logoVr from '../assets/logoVr.png';
import { Link } from 'react-router-dom';
import Reserv_vr from '../assets/Reserv_vr.png';
import catalogue from '../assets/catalogue.png';
import bdd from '../assets/bdd.png';
import reservC from '../assets/ReservC.png';
import confirm from '../assets/confirm.png';
import trelloStage from '../assets/trelloStage.png';
import missions from '../assets/missions.png';
import mail from '../assets/mail.png';
import { useState } from 'react';
import profil from '../assets/profil.png';
import breeze from '../assets/breeze.png';


// ─── Data ────────────────────────────────────────────────────────────────────


const difficulties = [
  "Adaptation de PHP vers Laravel.",
  "Difficultés avec le MVC.",
  "Conception de la table reservations.",
  "Manque d'encadrement technique.",
  "Base de données en constante évolution.",
  "Transmission des variables entre pages.",
];
 
const contraintes = [
  "Développement sans encadrement technique",
  "Construction du site de A à Z",
  "Apprentissage de Laravel",
  "Système de réservation complexe",
];
 
const bilanPerso = [
  "Meilleure compréhension de Laravel",
  "Amélioration BDD",
  "Gestion des routes",
  "Autonomie renforcée",
  "nouvelles technologies acquises",
  "Priorités des tâches en contexte professionnel",
];
 
const steps = [
  {
    title: "Cadrage du projet",
    content: "Réunion avec le maître de stage pour définir les technologies et la structure. Création d'une maquette sur Canva et recherche de ressources existantes.",
    images: [missions, mail,trelloStage],
  },
  {
    title: "Phase de conception",
    content: "Brouillons, schémas des fonctions et modélisation de la logique applicative.",
    images: [],
  },
  {
    title: "Développement initial",
    content: "Intégration du design (Baptiste), création des tables BDD (Alicia). Mise en place de la connexion BDD, du catalogue produits et du système de réservation. Plusieurs restructurations de la BDD en cours de route.",
    images: [bdd, reservC, confirm],
  },
  {
    title: "Migration vers Laravel",
    content: "Découverte du framework, portage des fonctionnalités existantes. Intégration de Breeze/Blade pour l'inscription. Adaptation du catalogue et des réservations, avec nouvelles modifications BDD.",
    images: [catalogue, Reserv_vr, breeze ,profil],
  },
  {
    title: "Finalisation",
    content: "Synchronisation front/back, réorganisation du code, maîtrise des routes et de Blade. Ajout de filtres sur le système de réservation.",
    images: [],
  },
];
 
// ─── Sub-components ───────────────────────────────────────────────────────────
 
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
 
function ImageCarousel({ images, onOpen }) {
  const [index, setIndex] = useState(0);
  if (!images || images.length === 0) return null;
 
  const prev = (e) => {
    e.stopPropagation();
    setIndex((i) => (i - 1 + images.length) % images.length);
  };
  const next = (e) => {
    e.stopPropagation();
    setIndex((i) => (i + 1) % images.length);
  };
 
  return (
    <div className="relative flex-shrink-0 w-48 select-none">
      {/* Image */}
      <img
        src={images[index]}
        alt={`slide-${index}`}
        onClick={() => onOpen(images[index])}
        className="w-48 h-32 object-cover rounded-lg border border-white/[0.08] cursor-zoom-in hover:border-cyan-400/40 hover:scale-105 transition-all duration-200"
      />
 
      {/* Arrows — only shown if more than 1 image */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-1 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black/60 hover:bg-cyan-400/80 text-white text-xs flex items-center justify-center transition-colors"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-1 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black/60 hover:bg-cyan-400/80 text-white text-xs flex items-center justify-center transition-colors"
          >
            ›
          </button>
 
          {/* Dots */}
          <div className="absolute -bottom-4 left-0 right-0 flex justify-center gap-1">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setIndex(i); }}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === index ? 'bg-cyan-400' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
 
// ─── Main Component ───────────────────────────────────────────────────────────
 
const ProjVR = () => {
  const [lightboxImg, setLightboxImg] = useState(null);
 
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
        .d1 { animation-delay: 0.05s; }
        .d2 { animation-delay: 0.12s; }
        .d3 { animation-delay: 0.20s; }
        .d4 { animation-delay: 0.28s; }
      `}</style>
 
      <div className="projvr-root min-h-screen flex flex-col bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-zinc-200 px-6 py-12 pt-50 relative">

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
              <header className="fade-up d1 border-b border-white/[0.08] pb-6 flex gap-6 items-center">
                <img src={logoVr} className="w-16 h-16 rounded-xl" alt="Logo VR" />
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-lg font-mono tracking-widest text-cyan-400 uppercase border border-cyan-400/20 bg-cyan-400/5 rounded-full px-3 py-1">
                      Mission de stage · VRTueux
                    </span>
                  </div>
                  <p className="text-base text-zinc-500 mb-2">Mai – Juin 2025</p>
                  <div className="flex flex-col gap-1">
                    <Link to="/Projets" className="text-cyan-400 text-base underline hover:text-cyan-300 transition-colors">
                      Revenir dans les projets de stage →
                    </Link>
                    <Link to="/Catalogue" className="text-cyan-400 text-base underline hover:text-cyan-300 transition-colors">
                      Voir mission page catalogue →
                    </Link>
                    <Link to="/MissionReser" className="text-cyan-400 text-base underline hover:text-cyan-300 transition-colors">
                      Voir mission système de réservation →
                    </Link>
                  </div>
                </div>
              </header>

              {/* DESCRIPTION */}
              <section className="fade-up d2 space-y-4">
                <SectionLabel>Description</SectionLabel>
                <p className="text-white text-xl leading-relaxed max-w-xl">
                  Création d'un site de réservation VR avec catalogue, compte utilisateur et système de réservation.
                </p>
              </section>

              {/* OBJECTIF */}
              <section className="fade-up d3 space-y-4">
                <SectionLabel>Objectif</SectionLabel>
                <p className="text-white text-xl leading-relaxed max-w-xl">
                  Permettre aux clients de réserver une session VR avec sélection complète.
                </p>
              </section>

              {/* CONTRAINTES */}
              <section className="fade-up d4 space-y-4">
                <SectionLabel>Contraintes</SectionLabel>
                <GlassCard className="p-6">
                  <div className="grid grid-cols-2 gap-3">
                    {contraintes.map((item, i) => (
                      <GlassCard key={i} className="p-4">
                        <p className="text-xl text-white leading-relaxed">{item}</p>
                      </GlassCard>
                    ))}
                  </div>
                </GlassCard>
              </section>

              {/* DIFFICULTÉS */}
              <section className="space-y-4">
                <SectionLabel>Difficultés</SectionLabel>
                <GlassCard className="p-6">
                  <p className="text-zinc-300 text-xl leading-relaxed">
                    {difficulties.map((d, i) => (
                      <span key={i}>- {d}<br /></span>
                    ))}
                  </p>
                </GlassCard>
              </section>

              {/* ÉTAPES */}
              <section className="space-y-4">
                <SectionLabel>Étapes</SectionLabel>

                {/* Lightbox */}
                {lightboxImg && (
                  <div
                    className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
                    onClick={() => setLightboxImg(null)}
                  >
                    <img
                      src={lightboxImg}
                      alt="Aperçu"
                      className="max-w-full max-h-[90vh] rounded-xl border border-white/10 shadow-2xl"
                    />
                    <button
                      className="absolute top-4 right-4 text-zinc-400 hover:text-white text-3xl font-mono"
                      onClick={() => setLightboxImg(null)}
                    >
                      ✕
                    </button>
                  </div>
                )}

                <div className="relative pl-10">
                  <div className="absolute left-2.5 top-1.5 bottom-1.5 w-px bg-gradient-to-b from-cyan-400/70 to-cyan-400/10" />
                  <div className="space-y-5">
                    {steps.map((step, i) => (
                      <div key={i} className="relative group">
                        <div className="absolute -left-[34px] top-3.5 w-2.5 h-2.5 rounded-full bg-cyan-400 ring-[3px] ring-cyan-400/15 group-hover:ring-cyan-400/30 transition-all" />
                        <GlassCard className="p-4 group-hover:border-cyan-400/18 group-hover:bg-cyan-400/[0.04] transition-colors">
                          <div className="flex gap-4 items-start">
                            <div className="flex-1">
                              <p className="font-semibold text-zinc-200 mb-1 text-xl">{step.title}</p>
                              <p className="text-zinc-400 leading-relaxed text-xl">{step.content}</p>
                            </div>
                            {step.images?.length > 0 && (
                              <div className="pb-4">
                                <ImageCarousel images={step.images} onOpen={setLightboxImg} />
                              </div>
                            )}
                          </div>
                        </GlassCard>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* BILAN */}
              <section className="space-y-4">
                <SectionLabel>Bilan</SectionLabel>
                <div className="grid md:grid-cols-2 gap-4">
                  <GlassCard className="p-6">
                    <div className="grid grid-cols-2 gap-3">
                      {bilanPerso.map((item, i) => (
                        <GlassCard key={i} className="p-3">
                          <p className="text-xl text-white leading-relaxed">{item}</p>
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
 
export default ProjVR;