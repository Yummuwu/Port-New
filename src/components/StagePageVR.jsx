
import logoVr from '../assets/logoVr.png';
import VS from '../assets/VS.png';
import php from '../assets/php.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import sql from '../assets/sql.png';
import laravel from '../assets/laravel.png';
import { Link } from 'react-router-dom';

const Project1 = () => {
  return (
<div id="back" className="h-screen overflow-auto">
    <div className="bg-white opacity-80 mt-40 rounded-lg shadow-lg relative p-6 mx-auto w-full p-30">
            {/* Header */}
            <div className="flex flex-col lg:flex-row border-b pb-4 mb-6">
                <div className="flex flex-col items-center lg:items-start lg:w-1/3 mb-4 lg:mb-0">
                <div className="bg-teal-200 text-center w-24 h-24 flex items-center justify-center font-bold text-xs">
                    <img src={logoVr} alt="Description of the image" />
                </div>
                <p className="text-sm mt-2 text-center lg:text-left">
                    VRTueux
                </p>
                    <Link to="/CompanyVrTueux" className="underline text-blue-600 hover:text-blue-800">
                        Entreprise
                    </Link>
                </div>

                {/* Title and Date */}
                <div className="lg:w-2/3 pl-0 lg:pl-6">
                <h1 className="text-3xl font-bold text-teal-800 mb-2">Projet Création de site internet</h1>
                <p className="text-sm text-gray-600">
                    Cappello Alicia
                    <br />
                    18 mai - 27 juin 2025
                </p>
                </div>
            </div>

            {/* Project Description */}
            <section className="mb-6">
                <h2 className="bg-purple-200 text-lg font-semibold p-2 rounded"> Déscription du projet</h2>
                <p className="mt-2 text-gray-700 text-sm">
                    En stage de première annéee de BTS SIO, j'ai réalisé un site internet pour une entreprise de réalité virtuelle nommée VRTueux. Ce projet m'a permis de mettre en pratique mes compétences en développement web tout en répondant aux besoins spécifiques de l'entreprise.
                    Le site web avait pour objectifs de pouvoir visualiser les jeux proposé par l'entreprise ainsi que les snacks/boissons, de permettre aux utilisateurs de réserver des sessions jeux de réalité virtuelle en ligne, et de fournir des informations sur les services offerts par VRTueux.
                </p>
            </section>

            {/* Project Objectives */}
            <section className="mb-6">
                <h2 className="bg-purple-200 text-lg font-semibold p-2 rounded"> Objectif du projet</h2>
                <div className="mt-2 space-y-4 text-sm text-gray-700">
                <div>
                    <p>
                        L'objectif principal de ce projet était de créer une plateforme en ligne conviviale et fonctionnelle qui permettrait aux clients de VRTueux de découvrir les offres de l'entreprise, de réserver des sessions de réalité virtuelle, et d'obtenir des informations pertinentes sur les services proposés.
                    </p>
                </div>
                </div>
            </section>

            {/*Languages*/}
            <section className="mb-6">
            <h2 className="bg-purple-200 text-lg font-semibold p-2 rounded"> Languages</h2>

            <div className="mt-4 p-4 bg-white rounded-xl shadow-md">
                <div className="flex flex-wrap gap-4 justify-left">
                <div className="w-32 h-32 bg-gray-100 rounded-lg shadow-sm flex items-center justify-center text-gray-400 
                    transform transition duration-300 hover:scale-105 hover:shadow-lg">
                    <a href="https://www.php.net/" target="_blank" rel="noopener noreferrer">
                        <img src={php} alt="Logo PHP"/>
                    </a>
                </div>
                <div className="w-32 h-32 bg-gray-100 rounded-lg shadow-sm flex items-center justify-center text-gray-400 
                    transform transition duration-300 hover:scale-105 hover:shadow-lg overflow-hidden">
                        <img 
                            src={html} 
                            alt="Logo HTML" 
                            className="max-w-full max-h-full object-contain"
                        />
                </div>
                <div className="w-32 h-32 bg-gray-100 rounded-lg shadow-sm flex items-center justify-center text-gray-400 
                    transform transition duration-300 hover:scale-105 hover:shadow-lg overflow-hidden">
                        <img 
                            src={css} 
                            alt="Logo CSS" 
                            className="max-w-full max-h-full object-contain"
                        />
                </div>
                <div className="w-32 h-32 bg-gray-100 rounded-lg shadow-sm flex items-center justify-center text-gray-400 
                    transform transition duration-300 hover:scale-105 hover:shadow-lg overflow-hidden">
                        <img 
                            src={js} 
                            alt="Logo JS" 
                            className="max-w-full max-h-full object-contain"
                        />
                </div>
                <div className="w-32 h-32 bg-gray-100 rounded-lg shadow-sm flex items-center justify-center text-gray-400 
                    transform transition duration-300 hover:scale-105 hover:shadow-lg overflow-hidden">
                        <img 
                            src={sql} 
                            alt="Logo SQL" 
                            className="max-w-full max-h-full object-contain"
                        />
                </div>
                <div className="w-32 h-32 bg-gray-100 rounded-lg shadow-sm flex items-center justify-center text-gray-400 
                    transform transition duration-300 hover:scale-105 hover:shadow-lg overflow-hidden">
                        <img 
                            src={VS} 
                            alt="VS code" 
                            className="max-w-full max-h-full object-contain"
                        />
                </div>
                </div>
                <div className="w-32 h-32 bg-gray-100 rounded-lg shadow-sm flex items-center justify-center text-gray-400 
                    transform transition duration-300 hover:scale-105 hover:shadow-lg overflow-hidden">
                    <img 
                        src={laravel} 
                        alt="Laravel" 
                        className="max-w-full max-h-full object-contain"
                    />
                </div>
            </div>
            </section>

            {/* Etape 1*/}
            <section className="mb-6">
            <h2 className="bg-teal-100 text-lg font-semibold p-2 rounded mb-4"> Réunion / maquette </h2>

            <div className="mt-4 p-4 bg-white rounded-xl shadow-md">
                <div className="mb-4">
                    Pour commencer, nous avons eu une réunion avec le maître de stage pour comprendre ses attentes, les technologies que l'on va utliser ainsi que la structuration du site.
                    Suite a cela, j'ai réalisé une maquette du site sur Canva pour valider la structure et le design avant de commencer le développement. Le site comprennais une page d'accueil, de catalogue des jeux, de réservation en ligne, de snacks, de compte utlisateur et de contact.
                    <br></br>
                    J'ai également repris des méthodes faites en cours pour ensuite les adapter au projet. (formulaire, PDO, fonctionnalité de recherche et de traitement de données)
                </div>

                {/* Zone pour l'image */}
                <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                Image ici
                </div>
            </div>
            </section>

            {/* Etape 2*/}
            <section className="mb-6">
            <h2 className="bg-teal-100 text-lg font-semibold p-2 rounded mb-4"> Fonctionnalité réservation</h2>

            <div className="mt-4 p-4 bg-white rounded-xl shadow-md">
                {/* Zone pour le titre ou contenu au-dessus de l'image */}
                <div className="mb-4">
                    Par la suite, j'ai donc commencer le développement de la fonctionnalité de réservation en ligne en PHP et HTML, utilisant donc les codes récupérer et ensuite les adatper.
                    Cela comprenait la création d'un formulaire pour la sélection des jeux, des créneaux horaires, et des informations du client (nom, prénom, email, téléphone).
                    Beaucoup de brouillons et schèmas ont été réalisés pendant cette étape.
                </div>

                {/* Zone pour l'image */}
                <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                Image ici
                </div>
            </div>
            </section>

            {/* Etape 3*/}
            <section className="mb-6">
            <h2 className="bg-teal-100 text-lg font-semibold p-2 rounded mb-4"> Base de donnée</h2>

            <div className="mt-4 p-4 bg-white rounded-xl shadow-md">
                {/* Zone pour le titre ou contenu au-dessus de l'image */}
                <div className="mb-4">
                    Une fois la base de la fonctionnalité mise en place, j'ai créée la base de données SQL avec plusieurs tables indispensable pour stocker les réservations et les informations des utilisateurs de manière sécurisée.                    
                    J'ai ensuite intégré cette base de données avec le site web pour permettre la gestion des réservations grace au PDO.
                </div>

                {/* Zone pour l'image */}
                <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                Image ici
                </div>
            </div>
            </section>

            {/* Etape 4*/}
            <section className="mb-6">
            <h2 className="bg-teal-100 text-lg font-semibold p-2 rounded mb-4"> Continution</h2>

            <div className="mt-4 p-4 bg-white rounded-xl shadow-md">
                {/* Zone pour le titre ou contenu au-dessus de l'image */}
                <div className="mb-4">
                    J'ai continuer à pofiner la fonctionnalité de réservation puis commencer le développement du catalogue des jeux proposés par VRTueux.
                    Plusieurs modifications on eu lieu sur la base de données pour améliorer la gestions des jeux et des réservations.
                    Du javascript a ensuite été ajouté pour améliorer le transfer des données de reservation entre les pages.
                </div>

                {/* Zone pour l'image */}
                <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                Image ici
                </div>
            </div>
            </section>

            {/* Etape 5*/}
            <section className="mb-6">
            <h2 className="bg-teal-100 text-lg font-semibold p-2 rounded mb-4"> Migration du projet</h2>

            <div className="mt-4 p-4 bg-white rounded-xl shadow-md">
                {/* Zone pour le titre ou contenu au-dessus de l'image */}
                <div className="mb-4">
                    Enfin, une fois les fonctionnalités principales fonctionnelle mais toujours en cours de production, j'ai migré le projet vers le framework Laravel pour améliorer la structure et la maintenabilité du code.
                    Cela a impliqué la réécriture de certaines parties du code notament du catalogue et de réservation pour s'adapter à l'architecture MVC de Laravel, ainsi que l'utilisation de ses fonctionnalités intégrées pour la gestion des bases de données, des routes, et de la sécurité.
                    J'ai ensuite intégré une fonctionnalité Breeze pour la gestion des utilisateurs et de l'authentification sécurisé fourni par Laravel.
                    <br></br>
                    La base de données a également été modifié pour integrer les nouvelles tables nécessaires pour la gestion des utilisateurs proposé par Breeze.
                    Un outil de migration reversé [] a été utilisé pour faciliter le transfert des données existantes vers Laravel et assurer la continuité du service sans avoir à reécrire les nombreuses tables dans laravel.
                </div>

                {/* Zone pour l'image */}
                <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                Image ici
                </div>
            </div>
            </section>

            {/* Etape 6*/}
            <section className="mb-6">
            <h2 className="bg-teal-100 text-lg font-semibold p-2 rounded mb-4"> Synchronisation</h2>

            <div className="mt-4 p-4 bg-white rounded-xl shadow-md">
                {/* Zone pour le titre ou contenu au-dessus de l'image */}
                <div className="mb-4">
                    Pour finaliser le projet, j'ai relié toutes mes fonctionalités (réservation, catalogue, gestion des utilisateurs) avec la partie design faite pas mon collègue de stage.
                    Des modifications on été apportées pour assurer que la partie design et la partie fonctionnelle du site soient bien intégrées et offrent une expérience utilisateur fluide et cohérente.
                    Après avoir pris le temps de synchroniser les deux parties, du rangement de code a été effectué pour améliorer la lisibilité et la maintenabilité du projet.
                    <br></br>
                    Des filtres javascript on du être ajouté pour améliorer le système de réservation et le rendre plus réactif en temps réel.
                    Le projet à été partiellement fini, mais certains filtres de réservation ( supression des créneaux déjà réservés) n'ont pas pu être terminé faute de temps.
                </div>

                {/* Zone pour l'image */}
                <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                Image ici
                </div>
            </div>
            </section>

            {/* Footer */}
            <footer className="text-center text-xs text-gray-400 mt-8">
                Cappello Alicia - Portfolio 2025
            </footer>
            </div>
        </div>
  );
  
};

export default Project1;