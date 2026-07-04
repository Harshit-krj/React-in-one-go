import { useId } from "react";

function Inputbox({
  label,
  amount,
  oncurrencychange,
  onamountchange,
  currencydisable = false,
  amountdisable = false,
  currencyoptions = [],
  selectedvalue = "usd",
}) {
  const id = useId();
  return (
    <div className="flex bg-white rounded-2xl px-2 py-3">
      <div className="w-1/2 ">
        <label htmlFor={id} className="text-black/50 mb-2 inline-block">
          {label}
        </label>
        <input
          type="number"
          value={amount}
          id={id}
          className="p-2 w-full"
          placeholder="Enter the amount"
          onChange={(e) =>
            onamountchange && onamountchange(Number(e.target.value))
          }
          disabled={amountdisable}
        />
      </div>
      <div className="w-1/2">
        <div className="flex flex-wrap justify-end text-right">
          <p className="text-black/50 mb-2 w-full">Currency</p>
          <select
            value={selectedvalue}
            className=" rounded-sm outline-none p-2 bg-gray-100"
            disabled={currencydisable}
            onChange={(e) =>
              oncurrencychange && oncurrencychange(e.target.value)
            }
          >
            {currencyoptions.map((curr)=>(
                <option value={curr} key={curr}>{curr.toUpperCase()}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
export default Inputbox;
