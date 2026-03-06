
import { Profil } from "../components/CV";


export const CV = () => {
  return (
    <div>  
        <div className="h-screen overflow-auto bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative pt-50">
        {<Profil />}
      </div>  
    </div>
  );
};