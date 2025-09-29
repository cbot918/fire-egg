import { GameCard } from "./GameCard";
import { Button } from "@/components/ui/button";

const quests = [
  { name: "冒險者公會", variant: "default" as const },
  { name: "武鬥會", variant: "hero" as const },
  { name: "打紅龍王", variant: "dragon" as const },
];

export function MainThread() {
  return (
    <GameCard title="Main Thread" className="h-full">
      <div className="space-y-4">
        {quests.map((quest, index) => (
          <Button
            key={index}
            variant="outline"
            className={`w-full p-4 h-auto text-center font-medium rounded-xl transition-smooth hover:scale-105 ${
              quest.variant === "hero" 
                ? "border-fantasy-hero hover:bg-fantasy-hero/10" 
                : quest.variant === "dragon"
                ? "border-fantasy-dragon hover:bg-fantasy-dragon/10"
                : "border-primary hover:bg-primary/10"
            }`}
          >
            {quest.name}
          </Button>
        ))}
      </div>
    </GameCard>
  );
}