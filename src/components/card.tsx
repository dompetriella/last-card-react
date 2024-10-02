import { useState } from "react";

export default Card;

function Card({ value }: { value: number }) {
  let [isClicked, setIsClicked] = useState(false);
  return (
    <button
      className={`${isClicked ? "translate-y-[-2em]" : "bg-green-500"} 
        h-56 w-40 p-2 bg-white border-black border-2 rounded-2xl`}
      onClick={() => setIsClicked(!isClicked)}
    >
      <div
        className={`${isClicked ? "bg-green-400" : "bg-green-500"} 
          flex size-full rounded-2xl justify-center items-center`}
      >
        <h3 className="text-8xl text-white stroke-text font-extrabold">
          {value}
        </h3>
      </div>
    </button>
  );
}
