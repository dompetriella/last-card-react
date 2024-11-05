import { CardData } from "./cardData";

export class Player {
  id: number;
  cards: CardData[];
  isActive: boolean;

  constructor({
    id,
    cards = [],
    isActive = false,
  }: {
    id: number;
    cards?: CardData[];
    isActive?: boolean;
  }) {
    this.id = id;
    this.cards = cards;
    this.isActive = isActive;
  }

  copyWith({
    id,
    cards,
    isActive,
  }: {
    id?: number;
    cards?: CardData[];
    isActive?: boolean;
  }): Player {
    return new Player({
      id: id ?? this.id,
      cards: cards ?? this.cards,
      isActive: isActive ?? this.isActive,
    });
  }
}
