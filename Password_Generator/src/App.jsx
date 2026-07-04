import { useCallback, useEffect, useState ,useRef} from "react";
import "./App.css";
function App() {
  const [length, setleng] = useState(8);
  const [password, setpass] = useState("");
  const [numberallowed, setnumberall] = useState(false);
  const [charac, setch] = useState(false);
  const passref=useRef(null);
  const psswrdgen = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberallowed) str += "1234567890";
    if (charac) str += "!@#$%^&*()_+-=[]{}";
    let p = "";
    for (let i = 0; i < length; i++) {
      let idx = Math.floor(Math.random() * str.length );
      p += str.charAt(idx);
    }
    setpass(p);
  }, [length, numberallowed, charac,setpass]);
  const copyclip = useCallback(() => {
    passref.current.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    psswrdgen();
  }, [psswrdgen]);

  return (
    <>
      <div className="w-full flex flex-col gap-2 bg-gray-600 text-white rounded-xl p-3">
        <h1 className="text-center text-2xl">Password Generator </h1>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Password"
            ref={passref}
            value={password}
            readOnly
            className="flex-1 px-3 py-2 rounded text-black border-2"
          ></input>
          <button className="bg-blue-600 px-4 rounded" onClick={copyclip}>copy</button>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="range"
            min="3"
            max="100"
            value={length}
            onChange={(e) => setleng(e.target.value)}
            className="accent-blue-500 cursor-pointer"
          ></input>
          <span className="text-sm">Length: {length}</span>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="numberallow"
              defaultChecked={numberallowed}
              onChange={() => setnumberall(!numberallowed)}
            />
            <label htmlFor="numberallow">Numbers</label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="charallow"
              defaultChecked={charac}
              onChange={() => {
                setch(!charac);
              }}
            />
            <label htmlFor="charallow">Special Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
