import React from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
}

const Lightbox: React.FC<LightboxProps> = ({ isOpen, onClose, imageSrc }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className={cn(
          "sm:max-w-[80vw] max-w-[95vw] h-auto p-0 border-4 border-pastel-pink/80 bg-pastel-cream/95 rounded-3xl",
          "data-[state=open]:animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10"
        )}
      >
        <div className="relative w-full h-full max-h-[90vh] overflow-hidden rounded-3xl">
          <img 
            src={imageSrc} 
            alt="Full Screen View" 
            className="w-full h-full object-contain max-h-[90vh]" 
          />
          
          {/* Tombol Tutup (X) */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-pastel-pink text-pastel-text shadow-lg hover:bg-pastel-pink/80 transition-colors z-30"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Lightbox;