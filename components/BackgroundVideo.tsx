import React from 'react';

const BackgroundVideo: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden bg-black">
      {/* IMAGEN DE FONDO / VIDEO PLACEHOLDER */}
      <img
        src="https://xdkqkatsrvlglxehqnvo.supabase.co/storage/v1/object/public/fondo-demons.jpg/This_is_the_2k_202601160330.jpeg"
        alt="Fondo Demons Burger"
        className="absolute top-0 left-0 w-full h-full object-cover object-center opacity-80"
      />
      
      {/* CAPA DE OSCURIDAD (Overlay) - 50% Opacity */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
    </div>
  );
};

export default BackgroundVideo;