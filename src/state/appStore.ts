import  { create } from "zustand";
import { CardColor, CardData } from "../models/cardData";

interface CardGameState {
  playerHand: CardData[];
  drawPile: CardData[];
  currentActiveCard: CardData | null;
  discardPile: CardData[];
  opponentHand: CardData[];

  // setCurrentActiveCard: (card: CardData | null) => void;
  // Actions to modify the state
  // setPlayerHand: (cards: Card[]) => void;
  // addToDrawPile: (card: Card) => void;

  // addToDiscardPile: (card: Card) => void;
  // setOpponentHand: (cards: Card[]) => void;
}

export const useCardGameStore = create<CardGameState>((set) => ({
  playerHand: [
    new CardData(CardColor.Blue, 1)
  ],
  drawPile: [],
  currentActiveCard: new CardData(CardColor.Blue, 1),
  discardPile: [],
  opponentHand: [new CardData(CardColor.Blue, 1)],

  // setCurrentActiveCard: (card: CardData) => set({ currentActiveCard: card }),
  // setPlayerHand: (cards) => set({ playerHand: cards }),
  // addToDrawPile: (card) => set((state) => ({ drawPile: [...state.drawPile, card] })),
  // addToDiscardPile: (card) => set((state) => ({ discardPile: [...state.discardPile, card] })),
  // setOpponentHand: (cards) => set({ opponentHand: cards }),
}));

export default useCardGameStore;
