import Navbar from './components/TopNavBar'
import { NotFound } from './pages/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Profil } from './pages/Profil'
import { Projets } from './pages/Projets'
import Projet1 from './components/ProjetParadisGeek'
import Project2 from './components/ProjetBridge'
import MissionReserv from './components/MissionReser'
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import { Res } from './pages/Stages/Stage1/Reservation'
import { Bdd } from './pages/Stages/Stage1/Bdd'
import { Cata } from './pages/Stages/Stage1/Catalogue'
import { Intern1 } from './pages/Stages/Stage1/VRtueux'
import { Intern2 } from './pages/Stage2/ElixirCreation'
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import BatchPredictionOutlinedIcon from '@mui/icons-material/BatchPredictionOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };


  // Handle icon clicks
  const handleIconClick = (sectionId, path = '/') => {
    if (location.pathname !== path) {
      // Navigate to the page with hash
      navigate(`${path}#${sectionId}`);
    } else {
      // Already on the page, just scroll
      scrollToSection(sectionId);
    }
  };

  return (
    <div className="relative w-[5%] min-w-[70px] pt-35 bg-gradient-to-br from-slate-950 via-purple-650 to-slate-950 border border-white/20 flex justify-center">
      
      {/* Vertical progress bar */}
      <div className="absolute top-6 bottom-6 w-[2px] bg-gray-300 rounded-full">
        <div className="bg-blue-500 rounded-full transition-all duration-200" />
      </div>

      {/* Icons */}
      <ul className="space-y-16 relative z-10">
        <li>
          <button 
            onClick={() => handleIconClick('profile-section')}
            className="block p-2 bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 border border-purple-500 cursor-pointer"
          >
            <AccountCircleOutlinedIcon />
          </button>
        </li>

        <li>
          <button 
            onClick={() => handleIconClick('skills-section')}
            className="block p-2 bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 border border-purple-500 cursor-pointer"
          >
            <PsychologyOutlinedIcon />
          </button>
        </li>

        <li>
          <button 
            onClick={() => handleIconClick('projects-section')}
            className="block p-2 bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 border border-purple-500 cursor-pointer"
          >
            <BatchPredictionOutlinedIcon />
          </button>
        </li>

        <li>
          <button 
            onClick={() => handleIconClick('contact-section')}
            className="block p-2 bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 border border-purple-500 cursor-pointer"
          >
            <AlternateEmailOutlinedIcon />
          </button>
        </li>
      </ul>
    </div>
  );
}


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="flex">
       <Sidebar />

        {/* Main routed content */}
        <div className="w-[95%] min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Profil" element={<Profil />} />
            <Route path="/Projets" element={<Projets />} />
            <Route path="/Stage1" element={<Intern1 />} />
            <Route path="/MissionReser" element={<MissionReserv />} />
            <Route path="/Stage2" element={<Intern2 />} />
            <Route path="/ParadisDuGeek" element={<Projet1 />} />
            <Route path="/Bridge" element={<Project2 />} />
            <Route path="/Reservation" element={<Res />} />
            <Route path="/BaseDonnee" element={<Bdd />} />
            <Route path="/Catalogue" element={<Cata />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
