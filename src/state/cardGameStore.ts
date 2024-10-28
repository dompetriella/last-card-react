import  { create } from "zustand";
import { CardColor, CardData } from "../models/cardData";
import { generateStartingDeck } from "../gameLogic/startGame";
import { lastIndexOf } from "lodash";

interface CardGameState {
  playerHand: CardData[];
  drawPile: CardData[];
  currentActiveCard: CardData | null;
  discardPile: CardData[];
  opponentHand: CardData[];

  startGame: () => void
  setCurrentActiveCard: (card: CardData) => void
  drawCardAndAddToPlayerHand: () => void

 
  // Actions to modify the state
  // setPlayerHand: (cards: Card[]) => void;
  // addToDrawPile: (card: Card) => void;

  // addToDiscardPile: (card: Card) => void;
  // setOpponentHand: (cards: Card[]) => void;
}

export const useCardGameStore = create<CardGameState>((set, get) => ({
  playerHand: [
    
  ],
  drawPile: [],
  currentActiveCard: null,
  discardPile: [],
  opponentHand: [],

  startGame() {
    set({drawPile: generateStartingDeck()})
  },

  setCurrentActiveCard: (card: CardData) => set({ currentActiveCard: card }),
  drawCardAndAddToPlayerHand() {
    let drawPile = get().drawPile
    const playerHand = get().playerHand;
    if (drawPile.length === 0) {

    }
    let lastIndex = drawPile.length-1
    let card: CardData = drawPile[lastIndex];
    set({ drawPile: drawPile.slice(0, lastIndex) });
    if (card == null) {
      console.log(card)
    } 

    set({ playerHand: [...playerHand, card]})
  },
  // setPlayerHand: (cards) => set({ playerHand: cards }),
  // addToDrawPile: (card) => set((state) => ({ drawPile: [...state.drawPile, card] })),
  // addToDiscardPile: (card) => set((state) => ({ discardPile: [...state.discardPile, card] })),
  // setOpponentHand: (cards) => set({ opponentHand: cards }),
}));

export default useCardGameStore;
