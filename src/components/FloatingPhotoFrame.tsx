import React, { useState } from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface FloatingPhotoFrameProps {
  delay: string; // Tailwind animation delay class, e.g., 'delay-100'
  imageSrc: string; // Placeholder image source
}

const FloatingPhotoFrame: React.FC<FloatingPhotoFrameProps> = ({ delay, imageSrc }) => {
  const [showText, setShowText] = useState(false);
  const [textKey, setTextKey] = useState(0); // Key to re-trigger animation

  const handleClick = () => {
    if (showText) return;

    setShowText(true);
    setTextKey(prev => prev + 1); // Trigger re-render/re-animation

    // Reset state after animation completes (0.5s animation + 1s delay)
    const resetTimer = setTimeout(() => {
      setShowText(false);
    }, 1500);

    return () => {
      clearTimeout(resetTimer);
    };
  };

  return (
    <div
      className={cn(
        "relative w-40 h-40 md:w-56 md:h-56 bg-pastel-pink/70 border-4 border-pastel-pink shadow-xl rounded-xl p-2 cursor-pointer transition-all duration-500 flex items-center justify-center",
        "animate-float hover:scale-110 hover:rotate-2", // Updated hover effects
        delay
      )}
      onClick={handleClick}
    >
      {/* Placeholder Image */}
      <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center text-gray-500 text-sm overflow-hidden">
        <img src={imageSrc} alt="Couple Photo Placeholder" className="w-full h-full object-cover" />
      </div>

      {/* Floating Text with Bounce Animation */}
      {showText && (
        <div
          key={textKey} // Use key to force re-animation
          className={cn(
            "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-extrabold text-pastel-text pointer-events-none",
            "animate-bounce-in" // Apply the new bounce animation
          )}
        >
          My Love
        </div>
      )}
    </div>
  );
};

export default FloatingPhotoFrame;