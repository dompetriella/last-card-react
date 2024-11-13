import { act } from "react";
import "./App.css";
import Card from "./components/card";
import { CardColor, CardData } from "./models/cardData";
import useCardGameStore from "./state/cardGameStore";

function App() {
  const drawPile = useCardGameStore((state) => state.drawPile);
  const playPile = useCardGameStore((state) => state.playPile);
  const players = useCardGameStore((state) => state.players);

  const startGameAction = useCardGameStore((state) => state.startGame);

  console.log(playPile);

  return (
    <>
      <div className="flex flex-col w-screen h-screen">
        <button
          onClick={startGameAction}
          className="bg-blue-500 rounded-3xl p-4"
        >
          Start Game
        </button>

        <div className="flex justify-center items-center  h-1/2  bg-green-400 size-full">
          {players.length > 0
            ? players[1].cards.map((card: CardData) => (
                <Card cardData={card} isSmall={true} />
              ))
            : null}
        </div>

        <div className="flex justify-center items-center bg-blue-400 size-full">
          <div className="flex size-full  justify-end  items-center">
            {drawPile.map((card: CardData) => (
              <div className="absolute">
                <Card cardData={card} />
              </div>
            ))}
          </div>
          <div className="w-16"></div>
          <div className="flex size-full justify-start items-center">
            {playPile.length > 0 ? (
              playPile.map((card: CardData) => (
                <div className="absolute">
                  <Card cardData={card} isFaceUp={true} />
                </div>
              ))
            ) : (
              <Card cardData={new CardData(1, CardColor.Blue, 0)} />
            )}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-blue-500 rounded-3xl p-4">Deal Hand</button>
          <div className="w-8"></div>
          <button className="bg-blue-500 rounded-3xl p-4">Draw Card</button>
        </div>
        <div className="flex bg-red-400 w-screen h-1/3 justify-start p-4">
          <div className="flex justify-center w-full min-h-60">
            {players.length > 0
              ? players[0].cards.map((card: CardData) => (
                  <Card cardData={card} isFaceUp={true} isPlayerOwned={true} />
                ))
              : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
