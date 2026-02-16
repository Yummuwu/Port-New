
import logoVr from '../assets/logoVr.png';
import MissionReserv from './MissionReser';
import { Link } from 'react-router-dom';

const VRtueux = () => {
  return (
<div id="back" className="h-screen overflow-auto">
    <div className="bg-white opacity-80 mt-40 rounded-lg shadow-lg relative p-6 mx-auto w-full p-30">
            {/* Header */}
            <div className="flex flex-col lg:flex-row border-b pb-4 mb-6">
                <div className="flex flex-col items-center lg:items-start lg:w-1/3 mb-4 lg:mb-0">
                  <div className="bg-teal-200 text-center w-24 h-24 flex items-center justify-center font-bold text-xs">
                      <img src={logoVr} alt="Description of the image" />
                  </div>
                </div>

                {/* Title and Date */}
                <div className="lg:w-2/3 pl-0 lg:pl-6">
                <h1 className="text-3xl font-bold text-teal-800 mb-2">VRtueux</h1>
                <p className="text-sm text-gray-600">
                    Cappello Alicia
                    <br />
                    18 mai - 27 juin 2025
                </p>
                </div>
            </div>

        {/* Présentation de l'entreprise */}
        <section className="mb-6">
          <h2 className="bg-purple-200 text-lg font-semibold p-2 rounded">
            Présentation de l’entreprise
          </h2>
          <p className="mt-2 text-gray-700 text-sm">
            L’entreprise étudiée est une Entreprise de Services du Numérique (ESN), agissant en tant que
            prestataire dans le domaine du développement web.
            <br /><br />
            <strong>Raison sociale :</strong> Elixir SARL  
            <br />
            <strong>Activité :</strong> Conception et développement de sites web sous WordPress
          </p>
        </section>

        {/* Activités et prestations */}
        <section className="mb-6">
          <h2 className="bg-purple-200 text-lg font-semibold p-2 rounded">
            Activités et prestations
          </h2>
          <ul className="mt-2 text-gray-700 text-sm list-disc list-inside">
            <li>Création de sites vitrines</li>
            <li>Création de sites e-commerce</li>
            <li>Hébergement de sites web</li>
          </ul>
        </section>

        {/* Technologies */}
        <section className="mb-6">
          <h2 className="bg-purple-200 text-lg font-semibold p-2 rounded">
            Technologies utilisées
          </h2>
          <ul className="mt-2 text-gray-700 text-sm list-disc list-inside">
            <li>WordPress (Divi, Oxygen Builder)</li>
            <li>o2switch (hébergement)</li>
            <li>HTML, CSS, JavaScript</li>
          </ul>
        </section>

        {/* Taille et organisation */}
        <section className="mb-6">
          <h2 className="bg-purple-200 text-lg font-semibold p-2 rounded">
            Taille et organisation
          </h2>
          <p className="mt-2 text-gray-700 text-sm">
            <strong>Chiffre d’affaires :</strong> ~80 000 €  
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
          <h2 className="bg-teal-100 text-lg font-semibold p-2 rounded mb-4">
            Collaborateurs informaticiens
          </h2>
          <p className="text-gray-700 text-sm">
            L’entreprise dispose de collaborateurs informaticiens, dont :
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
          <h2 className="bg-teal-100 text-lg font-semibold p-2 rounded mb-4">
            Système d’information et infrastructure
          </h2>
          <p className="text-gray-700 text-sm">
            <strong>Architecture matérielle :</strong>
          </p>
          <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
            <li>Serveurs dédiés physiques</li>
            <li>Architecture Intel Xeon</li>
            <li>Matériel loué avec renouvellement annuel</li>
          </ul>
          <p className="text-gray-700 text-sm">
            <strong>Architecture logicielle :</strong>
          </p>
          <ul className="list-disc list-inside text-gray-700 text-sm">
            <li>WordPress (solution open source)</li>
            <li>Licences Divi et Oxygen Builder</li>
          </ul>
        </section>

        {/* Gestion de projet */}
        <section className="mb-6">
          <h2 className="bg-teal-100 text-lg font-semibold p-2 rounded mb-4">
            Gestion de projet
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-sm">
            Analyse des besoins:
            <li>Collecte des attentes client et audit</li>
            <br></br>
            Cahier des charges:
            <li>Définition fonctionnelle et technique</li>
            <br></br>
            Conception:
            <li>wireframes et maquettes (Figma)</li>
            <br></br>
            Développement :
            <li>WordPress et thèmes enfants</li>
            <li>Tests de compatibilité et performance</li>
            <li>Formation du client au back-office</li>
            <li>Déploiement et hébergement sur o2switch</li>
            <li>Maintenance, mises à jour et sauvegardes</li>
          </ul>
        </section>

        {/* Méthodes et outils */}
        <section className="mb-6">
          <h2 className="bg-teal-100 text-lg font-semibold p-2 rounded mb-4">
            Méthodes et outils
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-sm">
            <li>Approche agile avec feedbacks réguliers</li>
            <li>Outils : Trello, Discord</li>
            <li>Réunions : kick-off, revues, rétrospectives</li>
          </ul>
        </section>

        {/* Spécialité SLAM */}
        <section className="mb-6">
          <h2 className="bg-teal-100 text-lg font-semibold p-2 rounded mb-4">
            Spécialité SLAM
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-sm">
            <li>Environnement : WordPress</li>
            <li>Langages : HTML, CSS, JavaScript</li>
            <li>Tests manuels</li>
            <li>Maintenance corrective manuelle</li>
            <li>Sécurité : respect du RGPD</li>
            <li>Documentation : Word, diaporama</li>
            <li>Formation utilisateurs WordPress / Divi</li>
          </ul>
        </section>

          <section className="mb-6">
          <h2 className="bg-teal-100 text-lg font-semibold p-2 rounded mb-4">
            Projets
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-sm">
            <li><Link to="/MissionReser" className="text-blue-600 hover:underline">Projet 1 : Réservation</Link></li>
            <li><Link to="/Bridge" className="text-blue-600 hover:underline">Projet 2 : Bridge</Link></li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="text-center text-xs text-gray-400 mt-8">
            Cappello Alicia - Portfolio 2025
        </footer>
        </div>
    </div>

    /* containers pour les 2 projets */
  );
  
};

export default VRtueux;