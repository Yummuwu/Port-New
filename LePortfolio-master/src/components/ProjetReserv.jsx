import logoVr from '../assets/logoVr.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import { Link } from 'react-router-dom';

const Project1 = () => {
  return (
    <div id="back" className="h-screen overflow-auto">
      <div className="bg-white opacity-80 mt-40 rounded-lg shadow-lg relative p-6 mx-auto w-full p-30">

        {/* Header */}
        <div className="flex flex-col lg:flex-row border-b pb-4 mb-6">
          <div className="flex flex-col items-center lg:items-start lg:w-1/3 mb-4 lg:mb-0">
            <div className="bg-teal-200 text-center w-24 h-24 flex items-center justify-center font-bold text-xs">
              <img src={logoVr} alt="Logo VR" />
            </div>
            <p className="text-sm mt-2 text-center lg:text-left">
              Lycée Ella Fitzgerald
            </p>
            <Link to="/CompanyElixir" className="underline text-blue-600 hover:text-blue-800">
              Structure d'accueil
            </Link>
          </div>

          <div className="lg:w-2/3 pl-0 lg:pl-6">
            <h1 className="text-3xl font-bold text-teal-800 mb-2">
              Création d’un système de réservation VR sous Laravel
            </h1>
            <p className="text-sm text-gray-600">
              Développement web – Stage
              <br />
              2026
            </p>
          </div>
        </div>

        {/* Intervenants */}
        <section className="mb-6">
          <h2 className="bg-purple-200 text-lg font-semibold p-2 rounded mb-4">Intervenants</h2>
          <div className="mt-4 p-4 bg-white rounded-xl shadow-md text-sm text-gray-700">
            <p>Maître de stage</p>
            <p>Développement en autonomie (sans encadrement technique)</p>
          </div>
        </section>

        {/* Objectifs */}
        <section className="mb-6">
          <h2 className="bg-purple-200 text-lg font-semibold p-2 rounded">Objectif du projet</h2>
          <p className="mt-2 text-gray-700 text-sm">
            Concevoir et développer un site web complet intégrant :
            <br />• Un catalogue de jeux VR
            <br />• Un système d’inscription / connexion sécurisé
            <br />• Un système de réservation complexe relié à une base de données
            <br /><br />
            Le système devait gérer les créneaux, le nombre de joueurs (1 à 6),
            le choix de casques spécifiques, la vérification des disponibilités
            et l’ajout d’options supplémentaires (tapis VR).
          </p>
        </section>

        {/* Livrables */}
        <section className="mb-6">
          <h2 className="bg-purple-200 text-lg font-semibold p-2 rounded">Livrables</h2>
          <p className="mt-2 text-gray-700 text-sm">
            • Site web fonctionnel sous Laravel  
            • Base de données relationnelle  
            • Système de réservation connecté à la BDD  
            • Page de confirmation dynamique  
            • Documentation technique et schémas de logique
          </p>
        </section>

        {/* Contraintes */}
        <section className="mb-6">
          <h2 className="bg-purple-200 text-lg font-semibold p-2 rounded">Contraintes</h2>
          <p className="mt-2 text-sm text-gray-700">
            • Développement sans encadrement technique  
            • Construction du site de A à Z  
            • Apprentissage du framework Laravel durant le stage  
            • Système de réservation complexe avec nombreuses relations BDD  
            • Respect des règles de sécurité (connexion obligatoire via Breeze)
          </p>
        </section>

        {/* Outils */}
        <section className="mb-6">
          <h2 className="bg-purple-200 text-lg font-semibold p-2 rounded">Outils utilisés</h2>
          <div className="mt-4 p-4 bg-white rounded-xl shadow-md">
            <p className="text-sm text-gray-600 mb-3">
              Laravel · Breeze · Blade · MySQL · VS Code
            </p>
            <div className="flex flex-wrap gap-4 justify-left">
              <div className="w-32 h-32 bg-gray-100 rounded-lg shadow-sm flex items-center justify-center">
                <img src={html} alt="HTML" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="w-32 h-32 bg-gray-100 rounded-lg shadow-sm flex items-center justify-center">
                <img src={css} alt="CSS" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="w-32 h-32 bg-gray-100 rounded-lg shadow-sm flex items-center justify-center">
                <img src={js} alt="JavaScript" className="max-w-full max-h-full object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* Démarche */}
        <section className="mb-6">
          <h2 className="bg-purple-200 text-lg font-semibold p-2 rounded mb-4">
            Démarche de réalisation
          </h2>
          <div className="mt-4 p-4 bg-white rounded-xl shadow-md text-sm text-gray-700">
            <ul className="space-y-2">
              {[
                "Conception d’une maquette complète du site (dont la page de réservation) sur Canvas",
                "Création d’un premier formulaire de réservation sous VS Code à partir des bases vues en cours",
                "Création des fonctions de connexion à la base de données",
                "Réalisation de nombreux brouillons et schémas pour structurer la logique des fonctions et de la base de données",
                "Création de la base de données permettant l’insertion des réservations",
                "Développement des traitements du formulaire : récupération, vérification, validation, transformation et insertion des données en BDD",
                "Restructurations fréquentes de la base de données pour relier correctement tous les besoins fonctionnels",
                "Introduction au framework Laravel durant le stage",
                "Migration des fonctions principales du site vers Laravel (notamment la connexion BDD)",
                "Migration complète du système de réservation vers Laravel (formulaire, créneaux, jeux)",
                "Adaptation et refactorisation des fonctions de réservation sous Laravel",
                "Nouvelles modifications et restructurations de la base de données",
                "Mise en place d’un système de connexion obligatoire avant réservation via Laravel Breeze (sécurisation et prévention des fausses identités)",
                "Liaison du système Breeze à la page de confirmation (récupération automatique du nom, prénom, email)",
                "Révision du formulaire pour récupérer dynamiquement depuis la BDD : créneaux, jeux et casques VR",
                "Organisation et répartition des fonctions dans les fichiers appropriés (Controllers, Models, etc.)",
                "Avancement sur la gestion des routes Laravel et utilisation du moteur Blade",
                "Modification de la base de données avec l’ajout d’une table 'reservation_ressources'",
                "Récupération des casques via leur ID et leur nom (au lieu du nom seul) pour un traitement plus fiable",
                "Ajout des casques sélectionnés par le client dans la page de confirmation avant insertion finale"
              ].map((step, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-0.5 w-5 h-5 flex-shrink-0 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-bold text-xs">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>


        {/* Bilan */}
        <section className="mb-6">
          <h2 className="bg-purple-200 text-lg font-semibold p-2 rounded mb-4">
            Bilan de la mission
          </h2>
          <div className="mt-4 p-4 bg-white rounded-xl shadow-md text-sm text-gray-700">
            <p className="mb-3">
              Le système de réservation est connecté à la base de données et
              partiellement finalisé. Des améliorations restent à apporter :
              filtres supplémentaires, messages d’erreurs détaillés,
              renforcement de la sécurité et conformité RGPD.
            </p>

            <p className="font-semibold mt-4 mb-1">Bilan personnel :</p>
            <p>
              • Meilleure compréhension de Laravel et Blade  
              • Amélioration de la logique base de données   
              • Gestion des routes et export des variables  
              • Projet très formateur réalisé en autonomie
            </p>
          </div>
        </section>

        <p className="font-semibold mt-4 mb-2">Difficultés rencontrées :</p>

        <ul className="space-y-2 text-sm text-gray-700">
          {[
            "Base de données en constante évolution : restructurations fréquentes liées à la complexité des relations entre tables (filtres, contraintes, dépendances).",
            "Adaptation de plusieurs pages développées en PHP pur vers l’architecture Laravel.",
            "Difficulté à maîtriser les requêtes SQL via Laravel (Eloquent / Query Builder), malgré une bonne compréhension en SQL natif.",
            "Conception complexe de la table 'reservations' et gestion des relations multiples (jeux, créneaux, casques, utilisateurs).",
            "Manque d’encadrement technique durant le stage, rendant la validation des choix techniques plus difficile.",
            "Recherche intensive et utilisation d’outils d’intelligence artificielle pour résoudre certaines erreurs techniques.",
            "Mise en place d’un bouton dynamique permettant de sélectionner les casques disponibles depuis la base de données.",
            "Problème de retour en arrière non souhaité après la confirmation de réservation.",
            "Compréhension et gestion des routes sous Laravel.",
            "Organisation des méthodes : difficulté à déterminer dans quels fichiers (Controller, Model, etc.) placer certaines fonctions.",
            "Gestion et transmission des variables entre les pages (formulaire → confirmation → insertion BDD).",
            "Incohérence du nombre de joueurs due à une colonne vide dans la base de données."
          ].map((difficulty, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="mt-0.5 w-5 h-5 flex-shrink-0 bg-red-100 text-red-700 rounded-full flex items-center justify-center font-bold text-xs">
                {index + 1}
              </span>
              <span>{difficulty}</span>
            </li>
          ))}
        </ul>

        <footer className="text-center text-xs text-gray-400 mt-8">
          Portfolio 2026
        </footer>
      </div>
    </div>
  );
};

export default Project1;