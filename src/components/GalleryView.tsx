import React from "react";
import { Heart } from "lucide-react";

const GalleryView: React.FC = () => {
  // Placeholder data for moments
  const moments = [
    { id: 1, src: "/placeholder.svg", caption: "Momen 1" },
    { id: 2, src: "/placeholder.svg", caption: "Momen 2" },
    { id: 3, src: "/placeholder.svg", caption: "Momen 3" },
    { id: 4, src: "/placeholder.svg", caption: "Momen 4" },
  ];

  return (
    <div className="p-6 bg-white/80 rounded-xl shadow-inner border border-pastel-pink/50">
      <h2 className="text-2xl font-bold mb-6 text-center text-pastel-text">Our Sweet Memories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {moments.map((moment) => (
          <div key={moment.id} className="relative group overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.05]">
            <img
              src={moment.src}
              alt={moment.caption}
              className="w-full h-32 object-cover bg-gray-300"
            />
            <div className="absolute inset-0 bg-pastel-pink/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Heart className="w-8 h-8 text-white fill-white" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryView;