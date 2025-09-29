import { NavigationTabs } from "@/components/NavigationTabs";
import { MainThread } from "@/components/MainThread";
import { PlayerStats } from "@/components/PlayerStats";
import { Equipment } from "@/components/Equipment";
import { DiceSection } from "@/components/DiceSection";
import  item  from "@/data/items";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-primary bg-clip-text text-transparent">
          Fantasy RPG Dashboard
        </h1>
        
        {/* Navigation Tabs */}
        <NavigationTabs />
        
        {/* Main Game Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Thread Section */}
          <div className="lg:col-span-1">
            <MainThread />
          </div>
          
          {/* Player 1 Stats & Equipment */}
          <div className="lg:col-span-1 space-y-4">
            <PlayerStats attack={150} defense={120} money={2500} title={"Knight"} picture={"assets/pictures/knight.jpg"}/>
            <Equipment 
              weapon={{ name: item.cards[0].name, stats: "+"+ item.cards[0].attack +" 攻擊" }}
              armor={{ name: item.cards[1].name, stats: "+"+ item.cards[1].defend +" 防禦" }}
              pants={{ name: item.cards[2].name, stats: "+"+ item.cards[2].defend +" 防禦" }} 
            />
          </div>
          
          {/* Player 2 Stats & Equipment */}
          <div className="lg:col-span-1 space-y-4">
            <PlayerStats attack={130} defense={140} money={1800} title={"Mage"} picture={"assets/pictures/mage.png"}/>
            <Equipment 
              weapon={{ name: "武器", stats: "+40 攻擊" }} 
              armor={{ name: "鎧甲", stats: "+35 防禦" }} 
              pants={{ name: "褲子", stats: "+25 防禦" }} 
            />
          </div>
          
          {/* Dice Section */}
          <div className="lg:col-span-1">
            <DiceSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
