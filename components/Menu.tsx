import React from 'react';
import { combos, burgers } from '../data/menuData';
import ProductCard from './ProductCard';
import { Flame } from 'lucide-react';

const Menu: React.FC = () => {
  return (
    <section id="menu-section" className="relative bg-black py-24 px-4 min-h-screen z-10">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-4 text-demon-red animate-pulse">
            <Flame size={24} />
            <span className="uppercase tracking-[0.5em] font-bold text-sm">Dark Kitchen</span>
            <Flame size={24} />
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter">
            Nuestro Menú
          </h2>
          <div className="h-1 w-24 bg-demon-red mx-auto mt-6"></div>
        </div>

        {/* Section: Combos */}
        <div className="mb-24">
          <div className="flex items-end gap-4 mb-12 border-b border-zinc-800 pb-4">
            <h3 className="font-display text-4xl text-white font-bold uppercase">Los Combos</h3>
            <span className="text-demon-red font-display text-xl mb-1">/ Destacados</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {combos.map((combo) => (
              <ProductCard key={combo.id} product={combo} />
            ))}
          </div>
        </div>

        {/* Section: Burgers */}
        <div>
          <div className="flex items-end gap-4 mb-12 border-b border-zinc-800 pb-4">
            <h3 className="font-display text-4xl text-white font-bold uppercase">Las Burgers</h3>
            <span className="text-demon-red font-display text-xl mb-1">/ Individuales</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {burgers.map((burger) => (
              <ProductCard key={burger.id} product={burger} />
            ))}
          </div>
        </div>

      </div>

      {/* Decorative background elements inside the solid black section */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-demon-red/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-demon-red/5 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
};

export default Menu;