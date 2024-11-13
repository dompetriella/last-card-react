export enum CardColor {
  Green = "bg-green-500",
  Blue = "bg-blue-500",
  Red = "bg-red-500",
  Yellow = "bg-yellow-500",
}

export class CardData {
  readonly id: number;
  readonly color: CardColor;
  readonly numberValue: number;

  constructor(id: number, color: CardColor, numberValue: number) {
    this.id = id;
    this.color = color;
    this.numberValue = numberValue;
  }

  // `copyWith` method to return a new instance with optional updated values
  copyWith({
    id,
    color,
    numberValue,
  }: {
    id?: number;
    color?: CardColor;
    numberValue?: number;
  }): CardData {
    return new CardData(
      id ?? this.id,
      color ?? this.color,
      numberValue ?? this.numberValue
    );
  }

  displayCardInfo(): string {
    return `Card ID: ${this.id}, Color: ${this.color}, Value: ${this.numberValue}`;
  }
}
