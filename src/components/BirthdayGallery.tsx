"use client";

import React from 'react';
import { Heart } from 'lucide-react';

const BirthdayGallery = () => {
  const photos = [
    "/Galeri 1.jpg", "/Galeri 2.jpg", "/Galeri 3.jpg",
    "/Galeri 4.jpg", "/Galeri 5.jpg", "/Galeri 6.jpg", "/Galeri 7.jpg"
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-primary">Our Beautiful Moments</h2>
        <p className="text-muted-foreground">Setiap foto punya cerita, dan kamu adalah bagian terbaiknya.</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((src, index) => (
          <div 
            key={index} 
            className={`relative group overflow-hidden rounded-2xl border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 ${
              index === 0 ? 'col-span-2 row-span-2 h-80' : 'h-40'
            }`}
          >
            <img 
              src={src} 
              alt={`Moment ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Heart className="text-primary fill-primary w-8 h-8 animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BirthdayGallery;