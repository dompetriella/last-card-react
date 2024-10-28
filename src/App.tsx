import { act } from "react";
import "./App.css";
import Card from "./components/card";
import { CardData } from "./models/cardData";
import useCardGameStore from "./state/cardGameStore";

function App() {
  const playerHand = useCardGameStore((state) => state.playerHand);
  const activeCard = useCardGameStore((state) => state.currentActiveCard);
  const opponentHand = useCardGameStore((state) => state.opponentHand);

  return (
    <>
      <div className="flex flex-col w-screen h-screen">
        <button className="bg-blue-500 rounded-3xl p-4">Start Game</button>
        <div className="flex justify-center items-center  h-1/2  bg-green-400 size-full">
          {opponentHand.map((card: CardData) => (
            <Card cardData={card} isSmall={true} />
          ))}
        </div>
        <div className="flex justify-center items-center bg-blue-400 size-full">
          {activeCard != null ? (
            <Card cardData={activeCard!} isFaceUp={true} />
          ) : (
            <div></div>
          )}
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-blue-500 rounded-3xl p-4">Deal Hand</button>
          <div className="w-8"></div>
          <button className="bg-blue-500 rounded-3xl p-4">Draw Card</button>
        </div>
        <div className="flex bg-red-400 w-screen h-1/3 justify-start p-4">
          <div className="flex justify-center w-full min-h-60">
            {playerHand.map((card: CardData) => (
              <Card cardData={card} isFaceUp={true} isPlayerOwned={true} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
