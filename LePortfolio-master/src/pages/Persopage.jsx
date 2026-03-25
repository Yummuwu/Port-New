import NavBar from "../components/TopNavBar";
import { Python } from "../components/Perso";

export function PersoProj() {
  return (
    <div>
      <div className="h-screen overflow-auto bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative pt-50">
        {<Python/>}
      </div>
    </div>
  );
};