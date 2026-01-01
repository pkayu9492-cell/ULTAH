import React, { useState } from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface FloatingPhotoFrameProps {
  delay: string; // Tailwind animation delay class, e.g., 'delay-100'
  imageSrc: string; // Placeholder image source
}

const FloatingPhotoFrame: React.FC<FloatingPhotoFrameProps> = ({ delay, imageSrc }) => {
  const [showText, setShowText] = useState(false);
  const [textOpacity, setTextOpacity] = useState(0);

  const handleClick = () => {
    if (showText) return;

    setShowText(true);
    setTextOpacity(1);

    // Fade out effect
    const fadeOutTimer = setTimeout(() => {
      setTextOpacity(0);
    }, 500); // Show for 0.5s before starting fade

    // Reset state after fade out completes (1s transition + 0.5s delay)
    const resetTimer = setTimeout(() => {
      setShowText(false);
    }, 1500);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(resetTimer);
    };
  };

  return (
    <div
      className={cn(
        "relative w-40 h-40 md:w-56 md:h-56 bg-pastel-pink/70 border-4 border-pastel-pink shadow-xl rounded-xl p-2 cursor-pointer transition-all duration-500 hover:scale-[1.02] flex items-center justify-center",
        "animate-float",
        delay
      )}
      onClick={handleClick}
    >
      {/* Placeholder Image */}
      <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center text-gray-500 text-sm overflow-hidden">
        <img src={imageSrc} alt="Couple Photo Placeholder" className="w-full h-full object-cover" />
      </div>

      {/* Floating Text */}
      {showText && (
        <div
          className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xl font-bold text-pastel-text transition-opacity duration-1000 pointer-events-none"
          style={{ opacity: textOpacity }}
        >
          My Love
        </div>
      )}
    </div>
  );
};

export default FloatingPhotoFrame;