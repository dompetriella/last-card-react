import  { create } from "zustand";
import {  CardData } from "../models/cardData";
import { generateStartingDeck } from "../gameLogic/startGame";
import { Player } from "../models/player";

interface CardGameState {
  players: Player[];
  drawPile: CardData[];
  playPile: CardData[]

  startGame: () => void
  shufflePlayPileIntoDrawPile: () => void,
  //
  drawCardFromDrawPile: () => CardData | null
  playCardFromPlayerHand: (card: CardData, playerId: number) => CardData
  //
  addCardToPlayPile: (card: CardData) => void
  addCardToPlayerHand: (playerId: number, card: CardData) => void
  addCardToDrawPile: (card: CardData) => void

}

export const useCardGameStore = create<CardGameState>((set, get) => ({
  players: [],
  drawPile: [],
  playPile: [],

  startGame() {
    // get players
    set({ players: [], drawPile: [], playPile: []})
    // create starting deck
    set({drawPile: generateStartingDeck(), players: [new Player({id: 0}), new Player({id: 1})]})

    // deal hands to players
    const playerIds: Array<number> = get().players.map(player => player.id);
    for (const id of playerIds) {
      for (let index = 0; index < 7; index++) {
        const card: CardData | null = get().drawCardFromDrawPile();
        if (card !== null) {
           get().addCardToPlayerHand(id, card);
        } 
      }
    }

    const card: CardData | null = get().drawCardFromDrawPile();
    if (card !== null) {
      get().addCardToPlayPile(card);
    }
  },

  shufflePlayPileIntoDrawPile() {
      
  },

  drawCardFromDrawPile() {
    let drawPile = get().drawPile;
    if (drawPile.length === 0) {
      return null;
    }
    const topCard: CardData = drawPile[0];
    const updatedDrawPile: CardData[] = drawPile.splice(1);
    set({ drawPile: updatedDrawPile})
    return topCard;
  },

  playCardFromPlayerHand(card: CardData, playerId: number) {
    const players = get().players;
    const playerById: Player | undefined = players.find(player => player.id == playerId);
    if (playerById === undefined) {
      return card;
    }
    let playerCards: CardData[] = playerById.cards;
    const updatedPlayerCards: CardData[] = playerCards.filter(c => c.id == card.id);
    const updatedPlayer: Player = playerById.copyWith({cards: updatedPlayerCards});
    set({ players: players.map(player => (player.id === playerId ? updatedPlayer : player))})
    return card;
  },

  //
  addCardToPlayPile(card: CardData) {
    const playPile: CardData[] = get().playPile;
    set({playPile: [card, ...playPile]})
  },
  addCardToPlayerHand(playerId: number, card: CardData) {
    const players: Player[] = get().players;
    const player: Player = players.filter(p => p.id == playerId)[0];
    let playerCards: CardData[] = player.cards;
    const updatedPlayerCards: CardData[] = [...playerCards, card];
    const updatedPlayer: Player = player.copyWith({cards: updatedPlayerCards});
    set({ players: players.map(player => (player.id === playerId ? updatedPlayer : player))})
  },
  addCardToDrawPile(card: CardData) {
    const drawPile: CardData[] = get().drawPile;
    set({drawPile: [...drawPile, card]})
  }


}));

export default useCardGameStore;
