import { CardColor, CardData } from "../models/cardData";

export function generateStartingDeck(): CardData[] {
  let cards: CardData[] = []
  for (const colorValue of Object.values(CardColor)) {
    for (let index = 0; index < 10; index++) {
      cards.push(new CardData(colorValue, index))
    }
  }
  return cards;
}