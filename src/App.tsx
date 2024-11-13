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
  const drawCardAction = useCardGameStore(
    (state) => state.drawCardFromDrawPile
  );
  const addCardToHandAction = useCardGameStore(
    (state) => state.addCardToPlayerHand
  );

  function handleDrawCard(): void {
    const playerId: number = 0;
    const drawnCard: CardData | null = drawCardAction();
    if (drawnCard !== null) {
      addCardToHandAction(playerId, drawnCard);
    }
  }

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
          <div className="flex size-full justify-end items-center relative">
            {drawPile.length > 0
              ? drawPile.map((card: CardData) => (
                  <div className="absolute">
                    <Card cardData={card} />
                  </div>
                ))
              : null}
            {drawPile.length > 0 && (
              <button
                className="absolute inset-0 opacity-0"
                onClick={handleDrawCard}
              >
                Invisible Button
              </button>
            )}
          </div>
          <div className="w-16"></div>
          <div className="flex size-full justify-start items-center">
            {playPile.length > 0
              ? playPile.map((card: CardData) => (
                  <div className="absolute">
                    <Card cardData={card} isFaceUp={true} />
                  </div>
                ))
              : null}
          </div>
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
