"use client";

import React from 'react';

const BackgroundDecorations = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Falling Stars */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            top: `${Math.random() * 50}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 100 + 50}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 3 + 2}s`
          }}
        />
      ))}
      
      {/* Soft Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-rose-gold/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-rose-gold/10 blur-[120px] rounded-full" />
    </div>
  );
};

export default BackgroundDecorations;