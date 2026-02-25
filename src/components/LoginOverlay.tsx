"use client";

import React, { useState } from 'react';
import { Heart, Lock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface LoginOverlayProps {
  onLoginSuccess: () => void;
}

const LoginOverlay: React.FC<LoginOverlayProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'LADYA' && password === '260205') {
      onLoginSuccess();
    } else {
      setError(true);
      // Reset error message after 2 seconds
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0c] p-4">
      <Card className="w-full max-w-md border-2 border-primary/30 shadow-[0_0_50px_rgba(180,100,120,0.2)] bg-black/60 backdrop-blur-xl animate-in zoom-in duration-500">
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto bg-primary/20 w-20 h-20 rounded-full flex items-center justify-center mb-2 border border-primary/30">
            <Heart className="text-primary fill-primary w-10 h-10 animate-pulse" />
          </div>
          <CardTitle className="text-3xl font-extrabold text-white tracking-tight">Happy Birthday, Ladya!</CardTitle>
          <p className="text-primary/60 text-sm">Silakan masuk untuk melihat kejutan dari Alfan ✨</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-primary/60" />
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="pl-10 bg-white/5 border-primary/20 focus:border-primary rounded-xl h-12 text-white"
                required
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-primary/60" />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 bg-white/5 border-primary/20 focus:border-primary rounded-xl h-12 text-white"
                required
              />
            </div>
            
            {error && (
              <p className="text-red-400 text-center text-sm font-bold animate-bounce">
                Coba Lagi
              </p>
            )}

            <Button
              type="submit"
              className="w-full h-12 text-lg font-bold rounded-xl bg-primary hover:bg-primary/80 text-white transition-all shadow-lg shadow-primary/20"
            >
              Buka Kejutan ❤️
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginOverlay;