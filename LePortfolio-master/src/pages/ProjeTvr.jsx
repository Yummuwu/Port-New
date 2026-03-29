
import ProjVR from "../components/ProjectVR";

export function VRProj() {
  return (
    <div>
      <div className="h-screen overflow-auto bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative pt-50">
        {<ProjVR/>}
      </div>
    </div>
  );
};