"use client";

import React, { useState } from 'react';
import { Send, Star, Info, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { showError } from '@/utils/toast';

const BirthdayWishes = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/pkayu9492@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
      } else {
        throw new Error();
      }
    } catch (error) {
      setStatus('idle');
      showError("Gagal mengirim pesan. Silakan coba lagi.");
    }
  };

  if (status === 'success') {
    return (
      <div className="max-w-md mx-auto text-center space-y-6 p-8 bg-white/5 rounded-3xl border border-primary/30 animate-in zoom-in duration-500">
        <div className="mx-auto bg-green-500/20 w-20 h-20 rounded-full flex items-center justify-center">
          <CheckCircle2 className="text-green-500 w-12 h-12" />
        </div>
        <h2 className="text-2xl font-bold text-white">Terima kasih, Ladya!</h2>
        <p className="text-primary/80">Harapanmu sudah terkirim ke Alfan. ❤️</p>
        <Button 
          onClick={() => setStatus('idle')}
          variant="outline"
          className="rounded-xl border-primary/30 text-primary"
        >
          Tulis Harapan Lain
        </Button>
      </div>
    );
  }

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
        onSubmit={handleSubmit}
        className="space-y-4 bg-white/5 p-6 rounded-3xl border border-white/10 shadow-xl"
      >
        <div className="space-y-2">
          <label className="text-sm font-medium text-primary/80 ml-1">Nama Kamu</label>
          <Input 
            name="name" 
            defaultValue="LADYA" 
            readOnly 
            className="bg-black/20 border-primary/20 rounded-xl text-white"
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-primary/80 ml-1">Harapanmu</label>
          <Textarea 
            name="message" 
            placeholder="Tulis harapanmu di sini..." 
            className="min-h-[150px] bg-black/20 border-primary/20 rounded-xl focus:border-primary transition-colors text-white"
            required
          />
        </div>

        <div className="flex gap-3 p-3 bg-primary/10 rounded-xl border border-primary/20">
          <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <p className="text-xs text-primary/90 leading-relaxed">
            Setelah klik kirim, silakan cek email <strong>pkayu9492@gmail.com</strong> untuk aktivasi pertama kali agar pesan bisa masuk.
          </p>
        </div>

        <Button 
          type="submit" 
          disabled={status === 'submitting'}
          className="w-full h-12 rounded-xl bg-primary hover:bg-primary/80 text-white font-bold text-lg shadow-lg shadow-primary/20 group"
        >
          {status === 'submitting' ? 'Mengirim...' : 'Kirim ke Alfan'}
          <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Button>
      </form>
    </div>
  );
};

export default BirthdayWishes;