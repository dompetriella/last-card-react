import "./App.css";
import Card from "./components/card";

function App() {
  return (
    <>
      <div className="flex flex-col w-screen h-screen">
        <div className="flex bg-blue-400 size-full"></div>
        <div className="flex bg-red-400 w-screen justify-center p-4">
          <Card value={1} />
          <Card value={2} />
          <Card value={3} />
        </div>
      </div>
    </>
  );
}

export default App;
