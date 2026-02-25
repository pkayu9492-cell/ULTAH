"use client";

import React from 'react';
import { Send, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { showSuccess } from '@/utils/toast';

const BirthdayWishes = () => {
  const handleSubmit = (e: React.FormEvent) => {
    // Formspree will handle the actual submission via the action attribute
    // We just show a toast for better UX
    showSuccess("Harapanmu telah terkirim ke Alfan! ❤️");
  };

  return (
    <div className="max-w-md mx-auto space-y-8 animate-in fade-in duration-700">
      <div className="text-center space-y-2">
        <div className="flex justify-center gap-2 mb-4">
          <Star className="text-primary fill-primary w-6 h-6 animate-spin-slow" />
          <Star className="text-primary fill-primary w-6 h-6 animate-bounce" />
          <Star className="text-primary fill-primary w-6 h-6 animate-spin-slow" />
        </div>
        <h2 className="text-3xl font-bold text-primary">Make a Wish</h2>
        <p className="text-muted-foreground">Tuliskan harapanmu untuk masa depan kita.</p>
      </div>

      <form 
        action="https://formspree.io/f/pkayu9492@gmail.com" 
        method="POST"
        onSubmit={handleSubmit}
        className="space-y-4 bg-white/5 p-6 rounded-3xl border border-white/10"
      >
        <div className="space-y-2">
          <label className="text-sm font-medium text-primary/80 ml-1">Nama Kamu</label>
          <Input 
            name="name" 
            defaultValue="LADYA" 
            readOnly 
            className="bg-black/20 border-primary/20 rounded-xl"
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-primary/80 ml-1">Harapanmu</label>
          <Textarea 
            name="message" 
            placeholder="Tulis harapanmu di sini..." 
            className="min-h-[150px] bg-black/20 border-primary/20 rounded-xl focus:border-primary transition-colors"
            required
          />
        </div>

        <Button 
          type="submit" 
          className="w-full h-12 rounded-xl bg-primary hover:bg-primary/80 text-white font-bold text-lg shadow-lg shadow-primary/20 group"
        >
          Kirim ke Alfan
          <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Button>
      </form>
    </div>
  );
};

export default BirthdayWishes;