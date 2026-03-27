import React from "react";
import { PScolaire } from "../components/Projects_sco";

/* PAGES AVEC LES DIFF PROJETS */
export const ProjetScolaire = () => {
  return (
    <div>  
        <div className="h-screen overflow-auto bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
        {<PScolaire />}
                        {/* Footer decoration */}
                <div className="h-5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 flex justify-center items-center text-white">
                    Le maillon le plus faible de la cybersécurité, c’est l’être humain. - Kevin Mitnick
                </div>
      </div>
    </div>
  );
};