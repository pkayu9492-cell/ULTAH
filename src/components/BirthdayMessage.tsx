"use client";

import React from 'react';
import { Sparkles } from 'lucide-react';

const BirthdayMessage = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="inline-block p-3 rounded-full bg-primary/10 mb-4">
        <Sparkles className="w-8 h-8 text-primary animate-pulse" />
      </div>
      
      <h2 className="text-4xl font-extrabold bg-gradient-to-r from-primary to-soft-pink bg-clip-text text-transparent">
        Happy Birthday, Ladya!
      </h2>
      
      <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl space-y-6 leading-relaxed">
        <p className="text-xl italic text-primary/90">"Untuk seseorang yang membuat duniaku lebih berwarna..."</p>
        
        <p className="text-lg text-foreground/80">
          Selamat ulang tahun, Sayang. Di hari spesialmu ini, aku hanya ingin kamu tahu betapa berartinya kehadiranmu bagiku. Kamu adalah alasan di balik senyumku dan kekuatan di setiap langkahku.
        </p>
        
        <p className="text-lg text-foreground/80">
          Semoga di usia yang baru ini, semua impianmu menjadi nyata, kebahagiaan selalu menyertaimu, dan kita bisa terus mengukir kenangan indah bersama selamanya.
        </p>
        
        <div className="pt-4">
          <p className="font-bold text-primary">With all my love,</p>
          <p className="text-2xl font-extrabold tracking-widest uppercase mt-1">Alfan</p>
        </div>
      </div>
    </div>
  );
};

export default BirthdayMessage;