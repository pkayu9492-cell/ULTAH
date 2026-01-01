import React from "react";
import { Mail, Sparkles, Heart } from "lucide-react";

const MessageView: React.FC = () => {
  // Ganti teks di bawah ini dengan pesan pribadimu untuk pacar
  const message = "Selamat awal tahun, Sayang! ❤️ Di tahun yang baru ini, aku berharap hubungan kita semakin kuat, penuh tawa, dan selalu dipenuhi kebahagiaan. Terima kasih sudah menjadi bagian terindah dalam hidupku. Mari buat lebih banyak kenangan hebat bersama selamanya!";

  return (
    <div className="p-8 bg-pastel-yellow/70 rounded-2xl shadow-2xl border-4 border-pastel-pink flex flex-col items-center text-center max-w-lg mx-auto transform transition-transform hover:scale-[1.02]">
      <Mail className="w-12 h-12 text-pastel-pink mb-4 animate-bounce" />
      
      <h2 className="text-3xl font-extrabold mb-4 text-pastel-text flex items-center gap-2">
        <Sparkles className="w-6 h-6 text-pastel-pink" />
        Love Letter
        <Sparkles className="w-6 h-6 text-pastel-pink" />
      </h2>

      <div className="bg-white/90 p-6 rounded-xl shadow-inner border-2 border-dashed border-pastel-pink/50 relative">
        {/* Dekorasi hati kecil di sudut kotak */}
        <Heart className="absolute -top-3 -right-3 w-8 h-8 text-pastel-pink fill-pastel-pink rotate-12" />
        
        <p className="text-lg italic text-pastel-text leading-relaxed font-medium">
          "{message}"
        </p>
        
        <div className="mt-4 flex justify-center gap-1">
          <Heart className="w-4 h-4 text-pastel-pink fill-pastel-pink animate-pulse" />
          <Heart className="w-4 h-4 text-pastel-pink fill-pastel-pink animate-pulse delay-75" />
          <Heart className="w-4 h-4 text-pastel-pink fill-pastel-pink animate-pulse delay-150" />
        </div>
      </div>
      
      <p className="mt-6 text-sm font-bold text-pastel-pink tracking-widest uppercase">
        Forever & Always
      </p>
    </div>
  );
};

export default MessageView;