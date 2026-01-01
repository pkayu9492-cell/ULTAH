import React from "react";
import { Mail, Sparkles } from "lucide-react";

const MessageView: React.FC = () => {
  const message = "Pesan dan harapan untuk hubungan kita di tahun ini dan selamanya.";

  return (
    <div className="p-8 bg-pastel-yellow/70 rounded-xl shadow-2xl border-4 border-pastel-pink flex flex-col items-center text-center max-w-lg mx-auto">
      <Mail className="w-12 h-12 text-pastel-text mb-4" />
      <h2 className="text-3xl font-extrabold mb-4 text-pastel-text">Love Letter</h2>
      <div className="bg-white p-6 rounded-lg shadow-inner border border-pastel-pink/50">
        <p className="text-lg italic text-pastel-text leading-relaxed">
          {message}
        </p>
        <Sparkles className="w-4 h-4 mt-4 mx-auto text-pastel-pink fill-pastel-pink" />
      </div>
    </div>
  );
};

export default MessageView;