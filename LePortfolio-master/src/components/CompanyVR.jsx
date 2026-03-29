import logoVr from '../assets/logoVr.png';
import { Link } from 'react-router-dom';

const VRtueux = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@400;500&display=swap');

        html, body, #root {
          margin: 0;
          padding: 0;
          min-height: 100%;
          width: 100%;
        }

        .vrtueux-root * { font-family: 'Syne', sans-serif; }
        .vrtueux-root .font-mono { font-family: 'DM Mono', monospace !important; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.45s ease both; }
        .d1 { animation-delay: 0.05s; }
        .d2 { animation-delay: 0.15s; }

        .vrtueux-link {
          text-decoration: none;
          transition: border-color 0.5s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .vrtueux-link:hover {
          border-color: rgba(96, 165, 250, 0.3) !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(139, 92, 246, 0.12);
        }
        .vrtueux-link:hover .vrtueux-title {
          color: #d8b4fe;
        }
      `}</style>

      <div className="pt-50 vrtueux-root min-h-screen w-full text-zinc-200">
        <div className="px-8 sm:px-16 py-20 w-full">

          {/* Wrapper — même style que la section Projets */}
          <div className="bg-gradient-to-br from-[#2B2B2B] to-[#1F1F1F] backdrop-blur-xl rounded-[2rem] shadow-xl p-8 md:p-12 border-2 border-purple-500/20 hover:border-blue-500/30 transition-all duration-500 fade-up d1">

            {/* Section label */}
            <div className="flex items-center gap-4 mb-10">
              <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              <span className="font-mono uppercase tracking-[0.2em] text-white/80 text-xl">
                Stage · VRtueux
              </span>
            </div>

            {/* Cards */}
            <div className="flex flex-col sm:flex-row gap-6 fade-up d2">

              <Link
                to="/MissionReser"
                className="vrtueux-link flex-1 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 flex items-center gap-5 relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <span className="text-4xl relative z-10">🥽</span>
                <div className="relative z-10">
                  <p className="vrtueux-title font-semibold text-white/80 text-xl transition-colors duration-300">
                    Mission : Système de réservation VR
                  </p>
                  <p className="text-sm font-mono text-zinc-500 mt-1">Voir le projet →</p>
                </div>
              </Link>

              <Link
                to="/Catalogue"
                className="vrtueux-link flex-1 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 flex items-center gap-5 relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <span className="text-4xl relative z-10">📂</span>
                <div className="relative z-10">
                  <p className="vrtueux-title font-semibold text-white/80 text-xl transition-colors duration-300">
                    Mission : Catalogue de contenus VR
                  </p>
                  <p className="text-sm font-mono text-zinc-500 mt-1">Voir le projet →</p>
                </div>
              </Link>

              <Link
                to="/ProjetVR"
                className="vrtueux-link flex-1 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 flex items-center gap-5 relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <span className="text-4xl relative z-10">📂</span>
                <div className="relative z-10">
                  <p className="vrtueux-title font-semibold text-white/80 text-xl transition-colors duration-300">
                    Projet : Site web dynamique
                  </p>
                  <p className="text-sm font-mono text-zinc-500 mt-1">Voir le projet →</p>
                </div>
              </Link>

            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default VRtueux;