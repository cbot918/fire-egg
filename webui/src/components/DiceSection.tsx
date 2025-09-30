import { GameCard } from "./GameCard";
import { Button } from "@/components/ui/button";
import { Dice6 } from "lucide-react";

export function DiceSection() {
  return (
    <GameCard title="骰子" variant="gold" className="h-full">
      <div className="flex flex-col items-center justify-center py-8">
        <Button
          size="lg"
          className="w-20 h-20 rounded-full bg-gradient-gold text-accent-foreground hover:shadow-glow transition-smooth"
        >
          <Dice6 size={32} />
        </Button>
        <div className="mt-4 text-center">
          <div className="text-2xl font-bold text-fantasy-gold">6</div>
          <div className="text-sm text-muted-foreground">點擊擲骰</div>
        </div>
      </div>
    </GameCard>
  );
}