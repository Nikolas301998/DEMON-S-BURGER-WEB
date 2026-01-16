import React from 'react';
import BackgroundVideo from './components/BackgroundVideo';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import { MapPin, Instagram, Phone } from 'lucide-react';

function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundVideo />
      <Navbar />
      
      <main>
        <Hero />
        <Menu />
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900 text-white py-12 px-4 z-20 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left">
            <h4 className="font-display text-2xl font-bold uppercase tracking-widest text-demon-red mb-2">
              Demon's Burger
            </h4>
            <p className="text-gray-500 text-sm">Providencia, Santiago, Chile.</p>
          </div>

          <div className="flex gap-8">
            <a href="#" className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <Instagram size={24} />
              <span className="text-xs uppercase tracking-widest">Instagram</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <MapPin size={24} />
              <span className="text-xs uppercase tracking-widest">Ubicación</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <Phone size={24} />
              <span className="text-xs uppercase tracking-widest">Contacto</span>
            </a>
          </div>

          <div className="text-center md:text-right text-gray-600 text-xs">
            <p>&copy; {new Date().getFullYear()} Demon's Burger.</p>
            <p>El pacto es eterno.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;