export enum CardColor {
  Green = "bg-green-500",
  Blue = "bg-blue-500",
  Red = "bg-red-500",
  Yellow = "bg-yellow-500",
}

export class CardData {
  readonly color: CardColor;
  readonly numberValue: number;

  constructor(color: CardColor, numberValue: number) {
    this.color = color;
    this.numberValue = numberValue;
  }

  // `copyWith` method to return a new instance with optional updated values
  copyWith({
    color,
    numberValue,
  }: {
    color?: CardColor;
    numberValue?: number;
  }): CardData {
    return new CardData(color ?? this.color, numberValue ?? this.numberValue);
  }

  displayCardInfo(): string {
    return `Card: ${this.color} - ${this.numberValue}`;
  }
}
