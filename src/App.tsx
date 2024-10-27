import { act } from "react";
import "./App.css";
import Card from "./components/card";
import { CardData } from "./models/cardData";
import useCardGameStore from "./state/appStore";

function App() {

  const playerHand = useCardGameStore((state) => state.playerHand);
  const activeCard = useCardGameStore((state) => state.currentActiveCard);
  const opponentHand = useCardGameStore((state) => state.opponentHand);

  return (
    <>
      <div className="flex flex-col w-screen h-screen">
        <div className="flex justify-center items-center  h-1/2  bg-green-400 size-full">
          {opponentHand.map((card: CardData) => (
            <Card cardData={card} isSmall={true} />
          ))}

        </div>
        <div className="flex justify-center items-center    bg-blue-400 size-full">
          <Card cardData={activeCard!} isFaceUp={true} />
        </div>
        <div className="flex bg-red-400 w-screen h-1/3 justify-center p-4">
          {playerHand.map((card: CardData) => (
            <Card cardData={card} isFaceUp={true} isPlayerOwned={true} />
          ))}

        </div>
      </div>
    </>
  );
}

export default App;
