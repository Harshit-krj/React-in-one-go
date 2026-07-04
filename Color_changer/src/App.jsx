import { useState } from "react";

function App() {
  const [color, setcolor] = useState("olive");
  const [color1, setcolor1] = useState("black");
  return (
    <>
      <div
        className="min-h-screen fixed w-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div
          className="flex flex-wrap justify-center text-5xl py-10 "
          style={{ fontFamily: "monospace",color:color1 }}
        >
          welcome to color changer
        </div>
        <div className="fixed flex flex-wrap justify-center bottom-12 px-1 inset-x-0">
          <div className="flex flex-wrap gap-2 px-1 py-2 border-2 rounded-2xl bg-white">
            <button
              onClick={() => setcolor("red")}
              style={{ backgroundColor: "Red" }}
              className="outline-none px-4 py-1 rounded-full"
            >
              Red
            </button>
            <button
              onClick={() => setcolor("green")}
              style={{ backgroundColor: "green" }}
              className="outline-none px-4 py-1 rounded-full"
            >
              Green
            </button>
            <button
              onClick={() => setcolor("olive")}
              style={{ backgroundColor: "olive" }}
              className="outline-none px-4 py-1 rounded-full"
            >
              olive
            </button>
            <button
              onClick={() => {setcolor("White"),setcolor1("black")}}
              style={{ backgroundColor: "White" }}
              className="outline-2 px-4 py-1 rounded-full"
            >
              White
            </button>
            <button
              onClick={() => {setcolor("black"),setcolor1("white")}}
              style={{ backgroundColor: "black" }}
              className="outline-none px-4 py-1 rounded-full text-amber-50"
            >
              black
            </button>
            <button
              onClick={() => setcolor("pink")}
              style={{ backgroundColor: "pink" }}
              className="outline-none px-4 py-1 rounded-full"
            >
              pink
            </button>
            <button
              onClick={() => setcolor("yellow")}
              style={{ backgroundColor: "yellow" }}
              className="outline-none px-4 py-1 rounded-full"
            >
              yellow
            </button>
            <button
              onClick={() => setcolor("gray")}
              style={{ backgroundColor: "gray" }}
              className="outline-none px-4 py-1 rounded-full"
            >
              gray
            </button>
            <button
              onClick={() => setcolor("blue")}
              style={{ backgroundColor: "blue" }}
              className="outline-none px-4 py-1 rounded-full"
            >
              blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
