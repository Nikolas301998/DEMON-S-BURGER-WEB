import { ChevronRight } from 'lucide-react';
import React from 'react';

const Hero: React.FC = () => {
  const handleScroll = () => {
    const menuSection = document.getElementById('menu-section');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Usamos 'justify-end' para mandar todo al fondo (botones) y dejar el resto limpio
    <section className="bg-transparent relative h-screen flex flex-col items-center justify-end pb-24 overflow-hidden px-4">

      {/* AQUÍ YA NO HAY TEXTO. EL LOGO DEL FONDO BRILLARÁ SOLO 🔥 */}

      {/* BOTONES (Se quedan abajo) */}
      <div className="relative z-10 flex flex-col md:flex-row gap-4 items-center justify-center">
        
        <button 
          onClick={handleScroll}
          className="px-8 py-4 bg-[#ff0000] hover:bg-[#cc0000] text-white font-bold uppercase tracking-widest rounded-sm transition-all duration-200 shadow-[0_0_20px_rgba(255,0,0,0.4)] hover:shadow-[0_0_40px_rgba(255,0,0,0.8)] hover:scale-105"
        >
          Ver Menú
        </button>

        <a 
          href="#" 
          className="group px-8 py-4 border-2 border-white/30 hover:border-[#ff0000] text-white font-bold uppercase tracking-widest rounded-sm backdrop-blur-sm transition-all duration-200 hover:bg-black/50 flex items-center gap-2"
        >
          Pide Ahora
          <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </a>

      </div>

    </section>
  );
};

export default Hero;