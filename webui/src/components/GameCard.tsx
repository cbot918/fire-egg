import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface GameCardProps {
  title: string;
  children?: React.ReactNode;
  variant?: "default" | "hero" | "dragon" | "gold" | "equipment";
  className?: string;
}

const variantStyles = {
  default: "bg-card border-border",
  hero: "bg-gradient-hero border-fantasy-hero shadow-glow",
  dragon: "bg-gradient-dragon border-fantasy-dragon shadow-fantasy",
  gold: "bg-gradient-gold border-fantasy-gold text-accent-foreground",
  equipment: "bg-card border-fantasy-equipment",
};

export function GameCard({ title, children, variant = "default", className }: GameCardProps) {
  return (
    <Card className={cn(
      "p-4 rounded-xl transition-smooth hover:scale-105",
      variantStyles[variant],
      className
    )}>
      <div className="text-center font-bold text-lg mb-2">
        {title}
      </div>
      {children}
    </Card>
  );
}