import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';



function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleHover = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        onMouseOver={handleHover}
        sx={{
          fontFamily: 'inherit',
          color: 'white',
          fontSize: '2rem',
          fontWeight: '300',
          textTransform: 'none',
          padding: 0,
          minWidth: 'auto',
          '&:hover': {
            backgroundColor: 'transparent',
            color: 'rgba(168, 85, 247, 1)',
          },
        }}
      >
        Projets
      </Button>
      <Menu
        id="fade-menu"
        slotProps={{
          list: {
            'aria-labelledby': 'fade-button',
          },
        }}
        slots={{ transition: Fade }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiPaper-root': {
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(12px)',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            marginTop: '8px',
          },
        }}
      >
        <MenuItem 
          onClick={handleClose} 
          component="a" 
          href="/Stage1"
          sx={{
            color: 'white',
            fontSize: '1.50rem',
            fontWeight: '300',
            '&:hover': {
              backgroundColor: 'rgba(168, 85, 247, 0.2)',
            },
          }}
        >
          Stage 1
        </MenuItem>
        <MenuItem 
          onClick={handleClose} 
          component="a" 
          href="/Stage2"
          sx={{
            color: 'white',
            fontSize: '1.50rem',
            fontWeight: '300',
            '&:hover': {
              backgroundColor: 'rgba(168, 85, 247, 0.2)',
            },
          }}
        >
          Stage 2
        </MenuItem>
        <MenuItem 
          onClick={handleClose}
          component="a" 
          href="/Perso"
          sx={{
            color: 'white',
            fontSize: '1.50rem',
            fontWeight: '300',
            '&:hover': {
              backgroundColor: 'rgba(168, 85, 247, 0.2)',
            },
          }}
        >
          Perso
        </MenuItem>
      </Menu>
    </div>
  );
}

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/10 shadow-xl p-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <a
            href="/" 
            className="text-[2em] text-white font-semibold tracking-tight hover:text-purple-400 transition-colors duration-300"
          >
            Portfolio
          </a>
          <div class="w-80 h-px bg-gray-400"></div>
          <div class="w-20 h-px bg-gray-400"></div>

          {/* Navigation Links */}
          <ul className="text-[2em] hidden md:flex items-center gap-8">
            <li>
              <a 
                href="/" 
                className="text-white font-light hover:text-purple-400 transition-colors duration-300"
              >
                Accueil
              </a>
            </li>
            <li className="h-4 w-px bg-white/20"></li>
              <FadeMenu />
            <li className="h-4 w-px bg-white/20"></li>
            <li>
              <a 
                href="/Contact" 
                className="text-white font-light hover:text-purple-400 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => {
              const mobileMenu = document.getElementById('mobile-menu');
              mobileMenu.classList.toggle('hidden');
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden md:hidden pb-4">
          <ul className="flex flex-col gap-4">
            <li>
              <a 
                href="/" 
                className="block text-white text-sm font-light hover:text-purple-400 transition-colors duration-300"
              >
                Accueil
              </a>
            </li>
            <li className="h-px w-full bg-white/20"></li>
            <li>
              <a 
                href="/Profil" 
                className="block text-white text-sm font-light hover:text-purple-400 transition-colors duration-300"
              >
                Profil
              </a>
            </li>
            <li className="h-px w-full bg-white/20"></li>
            <li>
              <div className="text-white text-sm font-light">Projets</div>
              <div className="ml-4 mt-2 flex flex-col gap-2">
                <a href="/Stage1" className="text-white/80 text-xs font-light hover:text-purple-400">Stage 1</a>
                <a href="/Stage2" className="text-white/80 text-xs font-light hover:text-purple-400">Stage 2</a>
                <span className="text-white/80 text-xs font-light hover:text-purple-400 cursor-pointer">Perso</span>
              </div>
            </li>
            <li className="h-px w-full bg-white/20"></li>
            <li>
              <a 
                href="/Contact" 
                className="block text-white text-sm font-light hover:text-purple-400 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;