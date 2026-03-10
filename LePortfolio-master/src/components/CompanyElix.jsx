import logoVr from '../assets/logoVr.png';
import { Link } from 'react-router-dom';


const Elixir = () => {
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
                  <img src={logoVr} alt="Description of the image" />
                </div>
              </div>

              {/* Title and Date */}
              <div className="lg:w-2/3 pl-0 lg:pl-6">
                <h1 className="text-3xl font-bold text-teal-800 mb-2">Elixir Création</h1>
                <p className="text-sm text-white/90">
                  Cappello Alicia
                  <br />
                  5 janvier - 13 février 2026
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
                L'entreprise étudiée est une Entreprise de Services du Numérique (ESN), agissant en tant que
                prestataire dans le domaine du développement web.
                <br /><br />
                <strong>Raison sociale :</strong> Elixir SARL
                <br />
                <strong>Activité :</strong> Conception et développement de sites web sous WordPress
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
                <li>Création de sites vitrines</li>
                <li>Création de sites e-commerce</li>
                <li>Hébergement de sites web</li>
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
                  "WordPress (Divi, Oxygen Builder)",
                  "o2switch (hébergement)",
                  "HTML / CSS / JavaScript",
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
                <strong>Chiffre d'affaires :</strong> ~80 000 €
                <br />
                <strong>Nombre de clients :</strong> ~90
                <br />
                <strong>Effectif :</strong> 2 personnes
                <br />
                <strong>Implantation géographique :</strong> Nationale
                <br />
                <strong>Forme juridique :</strong> SARL
                <br />
                <strong>Type de clients :</strong> Tous types de clients
              </p>
            </section>

            {/* Collaborateurs */}
            <section className="mb-6">
              <div className="mt-5 inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/20">
                <div className="text-white/90 text-base md:text-xl font-medium">
                  Collaborateurs informaticiens
                </div>
              </div>
              <p className="mt-2 text-white/90 text-2xl">
                L'entreprise dispose de collaborateurs informaticiens, dont :
                <br /><br />
                <strong>Statut :</strong> Gérant
                <br />
                <strong>Niveau de formation :</strong> Bac +5
                <br />
                <strong>Veille technologique :</strong> Suivi des évolutions WordPress, Divi et des technologies web.
              </p>
            </section>

            {/* Système d'information */}
            <section className="mb-6">
              <div className="mt-5 inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/20">
                <div className="text-white/90 text-base md:text-xl font-medium">
                  Système d'information et infrastructure
                </div>
              </div>
              <p className="text-white/90 text-2xl">
                <strong>Architecture matérielle :</strong>
              </p>
              <ul className="list-disc list-inside text-white/90 text-2xl mb-4">
                <li>Serveurs dédiés physiques</li>
                <li>Architecture Intel Xeon</li>
                <li>Matériel loué avec renouvellement annuel</li>
              </ul>
              <p className="text-white/90 text-2xl">
                <strong>Architecture logicielle :</strong>
              </p>
              <ul className="list-disc list-inside text-white/90 text-2xl">
                <li>WordPress (solution open source)</li>
                <li>Licences Divi et Oxygen Builder</li>
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
                <li>Collecte des attentes client et audit</li>
                <li>Définition fonctionnelle et technique (cahier des charges)</li>
                <li>Wireframes et maquettes (Figma)</li>
                <li>Développement WordPress et thèmes enfants</li>
                <li>Tests de compatibilité et performance</li>
                <li>Formation du client au back-office</li>
                <li>Déploiement et hébergement sur o2switch</li>
                <li>Maintenance, mises à jour et sauvegardes</li>
              </ul>
            </section>

            {/* Méthodes et outils */}
            <section className="mb-6">
              <div className="mt-5 inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/20">
                <div className="text-white/90 text-base md:text-xl font-medium">
                  Méthodes et outils
                </div>
              </div>
              <ul className="list-disc list-inside text-white/90 text-2xl">
                <li>Approche agile avec feedbacks réguliers</li>
                <li>Outils : Trello, Discord</li>
                <li>Réunions : kick-off, revues, rétrospectives</li>
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
                <li>Environnement : WordPress</li>
                <li>Langages : HTML, CSS, JavaScript</li>
                <li>Tests manuels</li>
                <li>Maintenance corrective manuelle</li>
                <li>Sécurité : respect du RGPD</li>
                <li>Documentation : Word, diaporama</li>
                <li>Formation utilisateurs WordPress / Divi</li>
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
                <li><Link to="/ParadisDuGeek" className="text-blue-400 hover:underline">Projet 1 : Paradis du Geek</Link></li>
                <li><Link to="/Bridge" className="text-blue-400 hover:underline">Projet 2 : Bridge</Link></li>
              </ul>
            </section>

            {/* Footer */}
            <footer className="text-center text-xs text-gray-400 mt-8">
              Cappello Alicia - Portfolio 2025
            </footer>

          </div>{/* fin bg-gradient backdrop-blur-xl (carte principale) */}
        </div>{/* fin max-w-[120rem] */}
      </section>{/* fin #profile-section */}

    </div> /* fin h-screen bg-gradient-to-br */
  );
};

export default Elixir;