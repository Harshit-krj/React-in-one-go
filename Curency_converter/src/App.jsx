import { useState } from "react";
import "./App.css";
import usecurrencyinfo from "./hooks/currencyinfo";
import Inputbox from "./component/Inputbox";

function App() {
  const [from, setfrom] = useState("usd");
  const [to, setto] = useState("inr");
  const [amount, setamount] = useState(0);
  const [convertedamt, setcon] = useState(0);
  const currencylist = usecurrencyinfo(from);
  const option = Object.keys(currencylist);
  console.log(currencylist);
    const swap = () => {
  const f = from;
  const t = to;

  setfrom(t);
  setto(f);

  setamount(convertedamt);
  setcon(amount);
};

  
  const convert = () => {
    setcon(amount * currencylist[to]);
  };
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-center "
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg')`,
      }}
    >
      <div className="w-full">
        <div className="bg-white/30 border border-gray-60 backdrop-blur-sm rounded-xl max-w-md w-full p-5 mx-auto">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <Inputbox
                label="from"
                amount={amount}
                onamountchange={(amount) => setamount(amount)}
                oncurrencychange={(currency) => setfrom(currency)}
                currencyoptions={option}
                selectedvalue={from}
              ></Inputbox>
            </div>
            <div className="relative h-0.5">
              <button className="absolute left-1/2 -translate-1/2  bg-blue-500 border border-white text-white px-2 py-0.5 rounded-sm" type="button" onClick={swap}>
                swap
              </button>
            </div>
            <div className="w-full mb-1">
              <Inputbox
                label="to"
                amount={convertedamt}
                amountdisable
                oncurrencychange={(currency) => setto(currency)}
                currencyoptions={option}
                selectedvalue={to}
              ></Inputbox>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
