import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const CardBdd = () => {
  return (
    <div className="group max-w-xl mx-auto 
      bg-white/10 backdrop-blur-lg 
      border border-white/20 rounded-2xl 
      p-6 shadow-lg hover:shadow-purple-500/20 
      transition-all duration-300 hover:scale-[1.02]">

      {/* Titre */}
      <h2 className="text-2xl font-bold text-white mb-2">
        Système de réservation VR
      </h2>
      <p className="text-white/70 text-sm mb-4">
        Développement d’un système de réservation en ligne 
        pour VRtueux – Stage 2025.
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {["Laravel", "PHP", "MySQL", "JavaScript"].map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs rounded-full 
            bg-purple-500/20 text-purple-200 border border-purple-400/20"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Fonctionnalités */}
      <ul className="text-white/80 text-sm list-disc list-inside mb-4 space-y-1">
        <li>Gestion des réservations</li>
        <li>Page de confirmation</li>
        <li>Insertions des données dans la base de données</li>
      </ul>

      {/* Lien */}
      <Link
        to="/MissionReser"
        className="inline-flex items-center gap-1 text-purple-300 text-sm hover:gap-2 transition-all"
      >
        Voir le projet
        <ChevronRight size={16} />
      </Link>
    </div>
  );
};

export default CardBdd;