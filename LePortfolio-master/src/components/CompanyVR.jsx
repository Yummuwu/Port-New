import logoVr from '../assets/logoVr.png';
import MissionReserv from './MissionReser';
import { Link } from 'react-router-dom';

const VRtueux = () => {
  return (
    <div className="h-screen overflow-auto bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative">

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section with Profile */}
      <section id="profile-section" className="relative pb-20 pt-70 px-4 sm:px-6">
        <div className="max-w-[120rem] mx-auto">

          <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-[2rem] shadow-2xl relative p-8 md:p-12 border border-white/20 transition-all duration-500">
            {/* Decorative gradient orbs */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full blur-2xl opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-2xl opacity-20"></div>

                {/* Header */}
                <div className="flex flex-col lg:flex-row border-b pb-4 mb-6">
                  <div className="flex flex-col items-center lg:items-start lg:w-1/3 mb-4 lg:mb-0">
                    <div className="bg-teal-200 text-center w-24 h-24 flex items-center justify-center font-bold text-xs">
                      <img src={logoVr} alt="Logo VRtueux" />
                    </div>
                  </div>

                  {/* Title and Date */}
                  <div className="lg:w-2/3 pl-0 lg:pl-6">
                    <h1 className="text-3xl font-bold text-teal-800 mb-2">VRtueux (VRT)</h1>
                    <p className="text-sm text-white/90">
                      aaaaa
                      <br />
                      Stage 2025
                    </p>
                  </div>
                </div>

                {/* Présentation de l'entreprise */}
                <section className="mb-6">
                  <div className="mt-5 inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/20">
                    <div className="text-white/90 text-base md:text-xl font-medium">
                      Présentation de l'entreprise
                    </div>
                  </div>
                  <p className="mt-2 text-white/90 text-2xl">
                    VRtueux (VRT) est une micro-entreprise spécialisée dans le divertissement en réalité virtuelle.
                    Elle propose des expériences immersives à destination des particuliers et des entreprises.
                    <br /><br />
                    <strong>Raison sociale :</strong> VRtueux - VRT
                    <br />
                    <strong>Secteur d'activité :</strong> Divertissement et Réalité Virtuelle
                    <br />
                    <strong>Type de clients :</strong> Particuliers (gamers, passionnés de VR) et entreprises
                    (formations immersives, team-building, simulations professionnelles)
                  </p>
                </section>

                {/* Activités et prestations */}
                <section className="mb-6">
                  <div className="mt-5 inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/20">
                    <div className="text-white/90 text-base md:text-xl font-medium">
                      Activités et prestations
                    </div>
                  </div>
                  <ul className="mt-2 text-white/90 text-2xl list-disc list-inside">
                    <li>Expériences de réalité virtuelle pour particuliers</li>
                    <li>Simulations professionnelles immersives</li>
                    <li>Formations en environnement VR</li>
                    <li>Sessions de team-building en réalité virtuelle</li>
                    <li>Système de réservation en ligne</li>
                  </ul>
                </section>

                {/* Technologies */}
                <section className="mb-6">
                  <div className="mt-5 inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/20">
                    <div className="text-white/90 text-base md:text-xl font-medium">
                      Technologies utilisées
                    </div>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-3">
                    {[
                      "HTML / CSS / JavaScript",
                      "PHP",
                      "Framework Laravel (Blade, Breeze)",
                      "SQL (Base de données relationnelle)",
                      "Laragon (environnement local)",
                      "Machine virtuelle (serveur)",
                      "VS Code",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-xl backdrop-blur-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </section>

                {/* Taille et organisation */}
                <section className="mb-6">
                  <div className="mt-5 inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/20">
                    <div className="text-white/90 text-base md:text-xl font-medium">
                      Taille et organisation
                    </div>
                  </div>
                  <p className="mt-2 text-white/90 text-2xl">
                    <strong>Chiffre d'affaires :</strong> Début d'activité en septembre 2025
                    <br />
                    <strong>Nombre de clients :</strong> ~3 000 par mois (prévisionnel)
                    <br />
                    <strong>Effectif :</strong> 1 personne (CEO)
                    <br />
                    <strong>Implantation géographique :</strong> Vienne (Isère, France)
                    <br />
                    <strong>Forme juridique :</strong> Entreprise Individuelle (EI)
                    <br />
                    <strong>Type d'organisation :</strong> Privée
                  </p>
                </section>

                {/* DSI */}
                <section className="mb-6">
                  <div className="mt-5 inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/20">
                    <div className="text-white/90 text-base md:text-xl font-medium">
                      DSI - Service Informatique
                    </div>
                  </div>
                  <p className="text-white/90 text-2xl">
                    <strong>Effectif :</strong> 1 personne
                    <br /><br />
                    <strong>Fonctions assurées :</strong>
                  </p>
                  <ul className="list-disc list-inside text-white/90 text-2xl mb-4">
                    <li>Gestion du site web</li>
                    <li>Veille technologique</li>
                    <li>Paramétrage des équipements VR</li>
                    <li>Configuration des logiciels</li>
                    <li>Support de premier niveau</li>
                  </ul>
                  <p className="text-gray-700 text-2xl">
                    <strong>Fonctions externalisées :</strong>
                  </p>
                  <ul className="list-disc list-inside text-white/90 text-2xl">
                    <li>Maintenance technique spécialisée (équipements VR)</li>
                    <li>Cybersécurité</li>
                    <li>Hébergement web et gestion des noms de domaine</li>
                  </ul>
                </section>

                {/* Gestion de projet */}
                <section className="mb-6">
                  <div className="mt-5 inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/20">
                    <div className="text-white/90 text-base md:text-xl font-medium">
                      Gestion de projet
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-white/90 text-2xl">
                    <li>Méthode Kanban (To-do list)</li>
                    <li>Daily meetings avec le maître de stage</li>
                    <li>Découpage du travail par pages</li>
                    <li>Relecture croisée du code</li>
                    <li>Stockage sur serveur (Machine Virtuelle)</li>
                    <li>Outil Trello</li>
                  </ul>
                </section>

                {/* Spécialité SLAM */}
                <section className="mb-6">
                  <div className="mt-5 inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/20">
                    <div className="text-white/90 text-base md:text-xl font-medium">
                      Spécialité SLAM
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-white/90 text-2xl">
                    <li>Développement full-stack avec Laravel</li>
                    <li>Création et restructuration de base de données SQL</li>
                    <li>Migration vers framework Laravel</li>
                    <li>Authentification avec Breeze</li>
                    <li>Tests d'intégration entre services et BDD</li>
                    <li>Modélisation UML (réalisée tardivement)</li>
                    <li>Sécurité applicative via Laravel</li>
                    <li>Gestion des sauvegardes (USB + VM)</li>
                    <li>Utilisation future de GitHub</li>
                  </ul>
                </section>

                {/* Projets */}
                <section className="mb-6">
                  <div className="mt-5 inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/20">
                    <div className="text-white/90 text-base md:text-xl font-medium">
                      Projets réalisés
                    </div>
                  </div>
                  <ul className="text-white/90 list-disc list-inside text-2xl">
                    <li><Link to="/MissionReser" className="text-blue-600 hover:underline">Mission : Système de réservation VR</Link></li>
                    <li><Link to="/Catalogue" className="text-blue-600 hover:underline">Mission  : Catalogue de contenus VR</Link></li>
                  </ul>
                </section>

                {/* Footer */}
                <footer className="text-center text-xs text-gray-400 mt-8">
                  aaaaa - Portfolio 2025
                </footer>
          </div>{/* fin bg-gradient backdrop-blur-xl (carte principale) */}
        </div>{/* fin max-w-[120rem] */}
      </section>{/* fin #profile-section */}

    </div> /* fin h-screen bg-gradient-to-br */
  );
};

export default VRtueux;