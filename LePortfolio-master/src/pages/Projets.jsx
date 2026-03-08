import React from "react";
import { PStages } from "../components/Projects_p";

/* PAGES AVEC LES DIFF PROJETS */
export const Projets = () => {
  return (
    <div>  
        <div className="h-screen overflow-auto bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative pt-50">
        {<PStages />}
      </div>
    </div>
  );
};