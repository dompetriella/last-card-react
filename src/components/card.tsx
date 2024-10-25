import { useState } from "react";
import { CardData } from "../models/cardData";

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
  return (
    <button
      className={`${isClicked ? "translate-y-[-2em]" : "bg-white"} 
        ${isSmall ? "h-28 w-20 p-1" : "h-56 w-40 p-2"} m-2 bg-white border-black border-2 rounded-2xl`}
      onClick={() => (isPlayerOwned ? setIsClicked(!isClicked) : null)}
    >
      <div
        className={`${isClicked ? "bg-white" : cardData.color} 
        
          flex size-full rounded-2xl justify-center items-center`}
      >
        <h3 className={`text-white text-8xl stroke-text  font-extrabold`}>
          {isFaceUp ? cardData.numberValue : ""}
        </h3>
      </div>
    </button>
  );
}
