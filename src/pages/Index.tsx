import React from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Star } from "lucide-react";
import FloatingPhotoFrame from "@/components/FloatingPhotoFrame";
import { Button } from "@/components/ui/button";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  const navigate = useNavigate();

  const handleTransition = () => {
    // Memberikan sedikit penundaan untuk simulasi transisi yang halus sebelum navigasi
    setTimeout(() => {
      navigate("/dashboard");
    }, 300);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pastel-blue relative overflow-hidden p-4">
      {/* Dekorasi Latar Belakang Estetik (Bintang & Hati) */}
      <Star className="absolute top-10 left-10 w-8 h-8 text-pastel-yellow animate-pulse" />
      <Heart className="absolute bottom-5 right-1/4 w-6 h-6 text-pastel-pink animate-float delay-500" />
      <Star className="absolute top-1/4 right-20 w-5 h-5 text-pastel-yellow/80 animate-float delay-1000" />
      <Heart className="absolute bottom-20 left-1/4 w-10 h-10 text-pastel-pink/90 animate-pulse delay-700" />
      <Star className="absolute top-1/2 left-5 w-4 h-4 text-pastel-yellow/60 animate-float delay-200" />
      <Heart className="absolute top-1/3 right-5 w-7 h-7 text-pastel-pink/70 animate-pulse delay-1500" />

      <div className="flex flex-col items-center space-y-12 z-10">
        
        {/* Teks Selamat Tahun Baru */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-pastel-text text-center tracking-wider mb-4 p-4 bg-pastel-yellow/70 rounded-2xl shadow-xl border-4 border-pastel-pink">
          SELAMAT TAHUN BARU SAYANG
        </h1>

        {/* Bingkai Foto Mengambang dengan Foto Kamu */}
        <div className="flex space-x-8">
          <FloatingPhotoFrame 
            delay="delay-0" 
            imageSrc="/Foto depan 1.jpg" 
          />
          <FloatingPhotoFrame 
            delay="delay-500" 
            imageSrc="/Foto depan 2.jpg" 
          />
        </div>

        {/* Tombol 'Tekan' Berdenyut (Pill shape, Gradient, Smoother Pulse) */}
        <Button
          onClick={handleTransition}
          className="w-48 h-16 text-xl font-extrabold rounded-full shadow-2xl transition-all duration-300
                     bg-gradient-to-r from-pastel-pink to-pastel-purple text-pastel-text hover:from-pastel-pink/90 hover:to-pastel-purple/90
                     border-4 border-pastel-yellow
                     animate-pulse"
        >
          Tekan
        </Button>
      </div>
      
      <div className="absolute bottom-0">
        <MadeWithDyad />
      </div>
    </div>
  );
};

export default Index;