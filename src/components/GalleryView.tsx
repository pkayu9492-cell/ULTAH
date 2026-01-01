import React, { useState } from "react";
import { Heart } from "lucide-react";
import Lightbox from "./Lightbox";

const GalleryView: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Data foto galeri sesuai dengan nama file di folder public
  const moments = [
    { id: 1, src: "/Galeri 1.jpg", caption: "Momen Manis 1" },
    { id: 2, src: "/Galeri 2.jpg", caption: "Momen Manis 2" },
    { id: 3, src: "/Galeri 3.jpg", caption: "Momen Manis 3" },
    { id: 4, src: "/Galeri 4.jpg", caption: "Momen Manis 4" },
    { id: 5, src: "/Galeri 5.jpg", caption: "Momen Manis 5" },
    { id: 6, src: "/Galeri 6.jpg", caption: "Momen Manis 6" },
    { id: 7, src: "/Galeri 7.jpg", caption: "Momen Manis 7" },
  ];

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="p-6 bg-white/80 rounded-3xl shadow-inner border border-pastel-pink/50">
        <h2 className="text-2xl font-bold mb-6 text-center text-pastel-text">Our Sweet Memories ✨</h2>
        {/* Grid disesuaikan agar tetap rapi meski jumlah foto ganjil (7 foto) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {moments.map((moment) => (
            <div 
              key={moment.id} 
              className="relative group overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.05] cursor-pointer"
              onClick={() => handleImageClick(moment.src)}
            >
              <img
                src={moment.src}
                alt={moment.caption}
                className="w-full h-40 object-cover bg-gray-200"
              />
              <div className="absolute inset-0 bg-pastel-pink/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Heart className="w-8 h-8 text-white fill-white" />
              </div>
              {/* Menampilkan caption saat kursor diarahkan ke foto (optional) */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white text-xs p-1 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                {moment.caption}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Component */}
      {selectedImage && (
        <Lightbox
          isOpen={!!selectedImage}
          onClose={handleCloseLightbox}
          imageSrc={selectedImage}
        />
      )}
    </>
  );
};

export default GalleryView;