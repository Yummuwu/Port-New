import React from "react";
import { PScolaire } from "../components/Projects_sco";

/* PAGES AVEC LES DIFF PROJETS */
export const ProjetScolaire = () => {
  return (
    <div>  
        <div className="h-screen overflow-auto bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative pt-50">
        {<PScolaire />}
      </div>
    </div>
  );
};