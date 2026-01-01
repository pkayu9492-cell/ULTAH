import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardMenuCard from "@/components/DashboardMenuCard";
import GalleryView from "@/components/GalleryView";
import MessageView from "@/components/MessageView";
import { Image, MessageSquare, ArrowLeft } from "lucide-react";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";

type ActiveView = 'gallery' | 'message';

const Dashboard = () => {
  const [activeView, setActiveView] = useState<ActiveView>('gallery');
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const renderContent = () => {
    switch (activeView) {
      case 'gallery':
        return <GalleryView />;
      case 'message':
        return <MessageView />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 bg-pastel-blue transition-opacity duration-1000 relative">
      
      {/* Tombol Kembali */}
      <div className="absolute top-4 left-4 z-20">
        <Button 
          onClick={handleBack}
          variant="outline"
          className="rounded-full p-2 h-10 w-10 bg-pastel-pink/80 border-pastel-text text-pastel-text shadow-md hover:bg-pastel-pink"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
      </div>

      <header className="w-full max-w-4xl py-8 text-center">
        <h1 className="text-5xl font-extrabold text-pastel-text mb-2">
          Our Special Place ✨
        </h1>
        <p className="text-lg text-pastel-text/80">Happy New Year, My Love!</p>
      </header>

      {/* Menu Cards */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row justify-center gap-6 mb-10">
        <DashboardMenuCard
          title="Menu Galeri"
          icon={Image}
          onClick={() => setActiveView('gallery')}
          colorClass={activeView === 'gallery' ? 'bg-pastel-pink shadow-2xl' : 'bg-pastel-pink/50'}
        />
        <DashboardMenuCard
          title="Menu Pesan"
          icon={MessageSquare}
          onClick={() => setActiveView('message')}
          colorClass={activeView === 'message' ? 'bg-pastel-yellow shadow-2xl' : 'bg-pastel-yellow/50'}
        />
      </div>

      {/* Content Area */}
      <main className="w-full max-w-4xl min-h-[400px] p-4">
        {renderContent()}
      </main>
      
      <div className="mt-auto">
        <MadeWithDyad />
      </div>
    </div>
  );
};

export default Dashboard;