import { GameCard } from "./GameCard";

interface PlayerStatsProps {
  attack: number;
  defense: number;
  money: number;
  title?: string;
  picture: string;
}

export function PlayerStats({ attack, defense, money, title = "英雄", picture}: PlayerStatsProps) {
  return (
    <GameCard title={title} variant="hero" className="h-full">
      <div>
        <img src={picture} alt="knight" />
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center">
          <div className="text-sm text-muted-foreground">攻擊</div>
          <div className="text-xl font-bold text-fantasy-gold">{attack}</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-muted-foreground">防禦</div>
          <div className="text-xl font-bold text-fantasy-gold">{defense}</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-muted-foreground">錢</div>
          <div className="text-xl font-bold text-fantasy-gold">{money}</div>
        </div>
      </div>
    </GameCard>
  );
}