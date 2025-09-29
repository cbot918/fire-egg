import { GameCard } from "./GameCard";

interface EquipmentItem {
  name: string;
  stats?: string;
}

interface EquipmentProps {
  weapon?: EquipmentItem;
  armor?: EquipmentItem;
  pants?: EquipmentItem;
}

const defaultEquipment = {
  weapon: { name: "武器" },
  armor: { name: "鎧甲" },
  pants: { name: "褲子" },
};

export function Equipment({ weapon, armor, pants }: EquipmentProps) {
  const equipment = {
    weapon: weapon || defaultEquipment.weapon,
    armor: armor || defaultEquipment.armor,
    pants: pants || defaultEquipment.pants,
  };

  return (
    <div className="grid grid-cols-3 gap-2">
      {Object.entries(equipment).map(([type, item]) => {
        const equipmentItem = item as EquipmentItem;
        return (
          <GameCard
            key={type}
            title={equipmentItem.name}
            variant="equipment"
            className="text-center p-2 min-h-[80px] flex flex-col justify-center"
          >
            {equipmentItem.stats && (
              <div className="text-xs text-fantasy-gold mt-1">
                {equipmentItem.stats}
              </div>
            )}
          </GameCard>
        );
      })}
    </div>
  );
}