import { CardColor, CardData } from "../models/cardData";

export function generateStartingDeck(): CardData[] {
  let cards: CardData[] = []
  for (const colorValue of Object.values(CardColor)) {
    for (let index = 0; index < 10; index++) {
      cards.push(new CardData(colorValue, index))
    }
  }

  var shuffledCards = shuffleArray(cards);
  return shuffledCards;
}

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}