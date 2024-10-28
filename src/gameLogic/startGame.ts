import { CardColor, CardData } from "../models/cardData";

function generateStartingDeck(): CardData[] {
  let cards: CardData[] = []
  for (const colorValue of Object.values(CardColor)) {
    for (let index = 0; index < 9; index++) {
      cards.push(new CardData(colorValue, index))
    }
  }
  return cards;
}