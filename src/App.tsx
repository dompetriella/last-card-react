import "./App.css";
import Card from "./components/card";
import { CardColor, CardData } from "./models/cardData";

function App() {
  return (
    <>
      <div className="flex flex-col w-screen h-screen">
        <div className="flex justify-center items-center h-1/2 bg-green-400 size-full">
          <Card cardData={new CardData(CardColor.Green, 10)} isSmall={true} />
          <Card cardData={new CardData(CardColor.Green, 10)} isSmall={true} />
          <Card cardData={new CardData(CardColor.Green, 10)} isSmall={true} />
        </div>
        <div className="flex justify-center items-center bg-blue-400 size-full">
          <Card cardData={new CardData(CardColor.Blue, 10)} isFaceUp={true} />
        </div>
        <div className="flex bg-red-400 w-screen justify-center p-4">
          <Card
            cardData={new CardData(CardColor.Blue, 10)}
            isFaceUp={true}
            isPlayerOwned={true}
          />
          <Card
            cardData={new CardData(CardColor.Red, 10)}
            isFaceUp={true}
            isPlayerOwned={true}
          />
          <Card
            cardData={new CardData(CardColor.Green, 10)}
            isFaceUp={true}
            isPlayerOwned={true}
          />
          <Card
            cardData={new CardData(CardColor.Yellow, 10)}
            isFaceUp={true}
            isPlayerOwned={true}
          />
        </div>
      </div>
    </>
  );
}

export default App;
