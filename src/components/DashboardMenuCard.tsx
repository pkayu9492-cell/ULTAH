import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardMenuCardProps {
  title: string;
  icon: LucideIcon;
  onClick: () => void;
  colorClass: string; // e.g., 'bg-pastel-yellow'
}

const DashboardMenuCard: React.FC<DashboardMenuCardProps> = ({ title, icon: Icon, onClick, colorClass }) => {
  return (
    <Card
      className={cn(
        "w-full max-w-xs cursor-pointer transition-all duration-300 hover:scale-[1.05] shadow-lg border-4 border-pastel-pink/50",
        colorClass
      )}
      onClick={onClick}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-3xl font-extrabold text-pastel-text">
          {title}
        </CardTitle>
        <Icon className="h-8 w-8 text-pastel-text" />
      </CardHeader>
      <CardContent>
        {/* Optional content area */}
      </CardContent>
    </Card>
  );
};

export default DashboardMenuCard;