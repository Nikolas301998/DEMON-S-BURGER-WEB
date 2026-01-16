import React from 'react';
import { Flame, Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-12 text-white bg-gradient-to-b from-black/80 to-transparent">
      <div className="flex items-center gap-2">
         <Flame className="text-demon-red drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]" size={28} />
         <span className="font-display text-xl md:text-2xl font-bold tracking-[0.2em] uppercase text-white shadow-black drop-shadow-lg">
           Demon's Burger
         </span>
      </div>
      
      <div className="hidden md:flex gap-10 font-display tracking-widest text-sm font-bold">
        <a href="#" className="hover:text-demon-red hover:drop-shadow-[0_0_8px_rgba(255,0,0,0.8)] transition-all">INICIO</a>
        <a href="#menu-section" className="hover:text-demon-red hover:drop-shadow-[0_0_8px_rgba(255,0,0,0.8)] transition-all">MENÚ</a>
        <a href="#" className="hover:text-demon-red hover:drop-shadow-[0_0_8px_rgba(255,0,0,0.8)] transition-all">CONTACTO</a>
      </div>

      <button className="md:hidden text-white">
        <Menu size={28} />
      </button>
    </nav>
  );
};

export default Navbar;