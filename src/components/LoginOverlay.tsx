"use client";

import React, { useState } from 'react';
import { Heart, Lock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { showError } from '@/utils/toast';

interface LoginOverlayProps {
  onLoginSuccess: () => void;
}

const LoginOverlay: React.FC<LoginOverlayProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'LADYA' && password === '260205') {
      onLoginSuccess();
    } else {
      showError('Akses Ditolak! Username atau Password salah.');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-pastel-blue/95 backdrop-blur-sm p-4">
      <Card className="w-full max-w-md border-4 border-pastel-pink shadow-2xl bg-white/90 animate-bounce-in">
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto bg-pastel-pink w-16 h-16 rounded-full flex items-center justify-center mb-2">
            <Heart className="text-white fill-white w-8 h-8 animate-pulse" />
          </div>
          <CardTitle className="text-3xl font-extrabold text-pastel-text">Welcome Back!</CardTitle>
          <p className="text-pastel-text/60 text-sm">Silakan masuk untuk melihat kejutanmu ✨</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-pastel-pink" />
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="pl-10 border-2 border-pastel-pink/30 focus:border-pastel-pink rounded-xl h-12"
                required
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-pastel-pink" />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 border-2 border-pastel-pink/30 focus:border-pastel-pink rounded-xl h-12"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full h-12 text-lg font-bold rounded-xl bg-gradient-to-r from-pastel-pink to-pastel-purple text-white hover:opacity-90 transition-all shadow-lg"
            >
              Masuk Ke Hati
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginOverlay;