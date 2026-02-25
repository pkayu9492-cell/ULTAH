"use client";

import React, { useState } from 'react';
import { Heart, Maximize2 } from 'lucide-react';
import Lightbox from './Lightbox';

const BirthdayGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
    "/Galeri 1.jpg", "/Galeri 2.jpg", "/Galeri 3.jpg",
    "/Galeri 4.jpg", "/Galeri 5.jpg", "/Galeri 6.jpg", "/Galeri 7.jpg"
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-primary">Our Beautiful Moments</h2>
        <p className="text-muted-foreground">Klik foto untuk memperbesar momen indah kita.</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((src, index) => (
          <div 
            key={index} 
            onClick={() => setSelectedImage(src)}
            className={`relative group overflow-hidden rounded-[10px] border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 cursor-pointer ${
              index === 0 ? 'col-span-2 row-span-2 h-80' : 'h-40'
            }`}
          >
            {/* Proper Image Tag */}
            <img 
              src={src} 
              alt={`Moment ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              style={{ borderRadius: '10px' }}
            />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
              <Maximize2 className="text-white w-6 h-6" />
              <Heart className="text-primary fill-primary w-6 h-6 animate-pulse" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {selectedImage && (
        <Lightbox 
          src={selectedImage} 
          onClose={() => setSelectedImage(null)} 
        />
      )}
    </div>
  );
};

export default BirthdayGallery;