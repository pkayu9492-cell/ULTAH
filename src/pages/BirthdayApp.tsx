"use client";

import React, { useState } from 'react';
import BirthdayGallery from '@/components/BirthdayGallery';
import BirthdayMessage from '@/components/BirthdayMessage';
import BirthdayWishes from '@/components/BirthdayWishes';
import BackgroundDecorations from '@/components/BackgroundDecorations';
import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const BirthdayApp = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    { component: <BirthdayGallery />, title: "Our Gallery" },
    { component: <BirthdayMessage />, title: "A Message for You" },
    { component: <BirthdayWishes />, title: "Make a Wish" }
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center py-12 px-4">
      <BackgroundDecorations />
      
      {/* Progress Indicator */}
      <div className="fixed top-8 flex gap-2 z-50">
        {pages.map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === currentPage ? 'w-8 bg-primary' : 'w-2 bg-white/20'
            }`} 
          />
        ))}
      </div>

      <main className="w-full max-w-4xl z-10 mt-8 mb-24">
        <div key={currentPage} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {pages[currentPage].component}
        </div>
      </main>

      {/* Navigation Buttons */}
      <div className="fixed bottom-8 left-0 right-0 flex justify-center gap-4 px-4 z-50">
        {currentPage > 0 && (
          <Button 
            onClick={prevPage}
            variant="outline"
            className="rounded-full border-primary/50 text-primary hover:bg-primary/10 h-12 px-6"
          >
            <ChevronLeft className="mr-2 w-5 h-5" />
            Back
          </Button>
        )}
        
        {currentPage < pages.length - 1 ? (
          <Button 
            onClick={nextPage}
            className="rounded-full bg-primary hover:bg-primary/80 text-white h-12 px-8 font-bold shadow-xl shadow-primary/20"
          >
            Next
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        ) : (
          <div className="text-primary/60 text-sm font-medium animate-pulse">
            Terima kasih sudah melihat semuanya ❤️
          </div>
        )}
      </div>
    </div>
  );
};

export default BirthdayApp;