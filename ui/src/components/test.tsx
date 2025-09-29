import { useState } from "react";
import { GameCard } from "./GameCard";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const tabs = ["EVENT", "SHOP", "MONSTER"];

export function NavigationTabs() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <Dialog open={!!activeTab} onOpenChange={(open) => !open && setActiveTab(null)}>
        {tabs.map((tab) => (
          <DialogTrigger
            key={tab}
            asChild
            onClick={() => setActiveTab(tab)}
          >
            <GameCard
              title={tab}
              variant={tab === "EVENT" ? "gold" : tab === "MONSTER" ? "dragon" : "default"}
              className="cursor-pointer hover:scale-105 transition-smooth"
            />
          </DialogTrigger>
        ))}

        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {console.log("hihi")}
              {activeTab === "EVENT" && "Event Dialog"}
              {activeTab === "SHOP" && "Shop Dialog"}
              {activeTab === "MONSTER" && "Monster Dialog"}
            </DialogTitle>
            <DialogDescription>
              {activeTab === "EVENT" && "這裡是活動的內容"}
              {activeTab === "SHOP" && "這裡是商店的內容"}
              {activeTab === "MONSTER" && "這裡是怪物的內容"}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
