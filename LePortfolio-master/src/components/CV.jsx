
export const Profil = () => {
  return (
    
    <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-[2rem] shadow-2xl relative p-8 md:p-50 border border-white/20 transition-all duration-500 w-[50%] items-center mx-auto">
    <div className="flex gap-8">
    {/* Smaller card */}
    <div className="flex-1 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-[2rem] shadow-2xl relative p-8 border border-white/20 transition-all duration-500"></div>

    {/* Larger card */}
    <div className="flex-2 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-[2rem] shadow-2xl relative p-8 border border-white/20 transition-all duration-500"></div>
     <div className="flex-1 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-[2rem] shadow-2xl relative p-8 border border-white/20 transition-all duration-500"></div>
    </div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            Mon profil 
        </div>
    Mes compétences
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            Mes compétences
        </div>
    Mes expériences
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            Mes expériences
        </div>
    </div>
  );
};
