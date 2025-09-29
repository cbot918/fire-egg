import { GameCard } from "./GameCard";
import { useState } from "react";
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
      <Dialog>
          {
          tabs.map((tab) => (
            <>
              <DialogTrigger
                onClick={() => setActiveTab(tab)}
              >
                <GameCard
                  key={tab}
                  title={tab}
                  variant={tab === "EVENT" ? "gold" : tab === "MONSTER" ? "dragon" : "default"}
                  className="cursor-pointer hover:scale-105 transition-smooth"
                />
              </DialogTrigger>
            </>
          ))}
          <DialogContent>
          <DialogHeader>
            <DialogTitle>{activeTab}</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}