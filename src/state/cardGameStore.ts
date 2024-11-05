import  { create } from "zustand";
import {  CardData } from "../models/cardData";
import { generateStartingDeck } from "../gameLogic/startGame";
import { Player } from "../models/player";

interface CardGameState {
  players: Player[];
  drawPile: CardData[];
  currentActiveCard: CardData | null;
  discardPile: CardData[];

  startGame: () => void
  setCurrentActiveCard: (card: CardData) => void
  drawCardAndAddToPlayerHand: (playerId: number) => void

 
  // Actions to modify the state
  // setPlayerHand: (cards: Card[]) => void;
  // addToDrawPile: (card: Card) => void;

  // addToDiscardPile: (card: Card) => void;
  // setOpponentHand: (cards: Card[]) => void;
}

export const useCardGameStore = create<CardGameState>((set, get) => ({
  players: [
    new Player({id: 0}), new Player({id: 1})
  ],
  drawPile: [],
  currentActiveCard: null,
  discardPile: [],
  opponentHand: [],

  startGame() {
    set({drawPile: generateStartingDeck()})
    const playerIds: Array<number> = get().players.map(player => player.id);
    for (const id of playerIds) {
      for (let index = 0; index < 7; index++) {
        get().drawCardAndAddToPlayerHand(id)
      }
      
    }
  },

  setCurrentActiveCard: (card: CardData) => set({ currentActiveCard: card }),
  drawCardAndAddToPlayerHand(playerId: number) {
    let drawPile = get().drawPile
    let players = get().players;
    const player = players.filter((p) => p.id === playerId)[0];
    if (drawPile.length === 0) {
      return;
    }
    let lastIndex = drawPile.length-1
    let card: CardData = drawPile[lastIndex];
    set({ drawPile: drawPile.slice(0, lastIndex) });
    if (card == null) {
      console.log(card)
      return;
    } 

    const playerWithUpdatedHand = player.copyWith({cards: [...player.cards, card]})
    const playerIndex = players.findIndex((p) => p.id == playerId);
    players[playerIndex] = playerWithUpdatedHand;

    set({players: players})
  },
  // setPlayerHand: (cards) => set({ playerHand: cards }),
  // addToDrawPile: (card) => set((state) => ({ drawPile: [...state.drawPile, card] })),
  // addToDiscardPile: (card) => set((state) => ({ discardPile: [...state.discardPile, card] })),
  // setOpponentHand: (cards) => set({ opponentHand: cards }),
}));

export default useCardGameStore;
