import { useState } from "react";
import { CardData } from "../models/cardData";
import useCardGameStore from "../state/cardGameStore";

export default Card;

function Card({
  cardData,
  isSmall = false,
  isPlayerOwned = false,
  isFaceUp = false,
}: {
  cardData: CardData;
  isSmall?: boolean;
  isPlayerOwned?: boolean;
  isFaceUp?: boolean;
}) {
  let [isClicked, setIsClicked] = useState(false);

  const playPile = useCardGameStore((state) => state.playPile);

  const playCardAction = useCardGameStore(
    (state) => state.playCardFromPlayerHand
  );
  const addCardToPlayPileAction = useCardGameStore(
    (state) => state.addCardToPlayPile
  );

  function getCardColor(): string {
    if (!isFaceUp) {
      return "bg-black";
    } else if (isClicked) {
      return "bg-white";
    } else {
      return cardData.color;
    }
  }

  function handleCardPlaying() {
    if (isClicked) {
      if (playPile.length > 0) {
        const currentActiveCard: CardData = playPile[playPile.length - 1];
        if (
          currentActiveCard.color === cardData.color ||
          currentActiveCard.numberValue === cardData.numberValue
        ) {
          const playedCard: CardData = playCardAction(cardData, 0);
          addCardToPlayPileAction(playedCard);
        }
      }
    }

    if (isPlayerOwned) {
      setIsClicked(!isClicked);
    }
  }

  return (
    <button
      className={`${isClicked ? "translate-y-[-2em]" : "bg-white"} 
        ${isSmall ? "h-28 w-20 p-1" : "h-56 w-40 p-2"} m-2 bg-white border-black border-2 rounded-2xl`}
      onClick={handleCardPlaying}
    >
      <div
        className={`${getCardColor()} 
        
          flex size-full rounded-2xl justify-center items-center`}
      >
        <h3 className={`text-white text-8xl stroke-text  font-extrabold`}>
          {isFaceUp ? cardData.numberValue : ""}
        </h3>
      </div>
    </button>
  );
}
