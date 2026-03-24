import React from 'react';

const galleryItems = [
  { id: 1, type: 'image', category: 'Projects', src: 'https://via.placeholder.com/400x300/1c2b4d/ffffff?text=CubeSat+Assembly' },
  { id: 2, type: 'image', category: 'Events', src: 'https://via.placeholder.com/300x400/1c2b4d/ffffff?text=Team+Meeting' },
  { id: 3, type: 'image', category: 'Launches', src: 'https://via.placeholder.com/400x400/1c2b4d/ffffff?text=Rocket+Launch' },
  { id: 4, type: 'image', category: 'Workshops', src: 'https://via.placeholder.com/300x200/1c2b4d/ffffff?text=Aerospace+Workshop' },
  { id: 5, type: 'image', category: 'Projects', src: 'https://via.placeholder.com/400x500/1c2b4d/ffffff?text=CanSat+Test' }
];

const Gallery = () => {
  return (
    <div className="min-h-screen relative z-10 flex flex-col justify-center px-[5%] pt-24 pb-12">
      <h2 className="font-[family-name:--font-heading] text-4xl text-center mb-12 tracking-widest uppercase text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">Gallery</h2>
      <div className="max-w-[1200px] mx-auto columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {galleryItems.map(item => (
          <div key={item.id} className="group relative overflow-hidden rounded-2xl cursor-pointer break-inside-avoid bg-[rgba(10,10,10,0.85)] backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <img src={item.src} alt={item.category} className="w-full h-auto block transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="font-[family-name:--font-heading] text-white text-2xl uppercase tracking-widest translate-y-5 transition-transform duration-300 group-hover:translate-y-0">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
