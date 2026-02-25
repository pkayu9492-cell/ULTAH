"use client";

import React from 'react';
import { X } from 'lucide-react';

interface LightboxProps {
  src: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ src, onClose }) => {
  return (
    <div 
      className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[210]"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Large Image */}
      <div 
        className="relative max-w-5xl w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
      >
        <img 
          src={src} 
          alt="Full view" 
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in duration-300"
        />
      </div>
    </div>
  );
};

export default Lightbox;