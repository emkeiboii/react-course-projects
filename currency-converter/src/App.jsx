// https://api.frankfurter.app/currencies

import { useEffect, useState } from "react";

export default function App() {
  const [value, setValue] = useState(0);
  const [currency1, setCurrency1] = useState("EUR");
  const [currency2, setCurrency2] = useState("USD");
  const [convertedValue, setConvertedValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currencyList, setCurrencyList] = useState([]);

  useEffect(
    function () {
      const controller = new AbortController();
      setIsLoading(true);
      async function convert() {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${value}&from=${currency1}&to=${currency2}`,
          { signal: controller.signal }
        );

        const data = await res.json();
        setConvertedValue(data.rates[currency2]);
        setIsLoading(false);
      }
      if (currency1 === currency2) return setConvertedValue(value);
      convert();
    },
    [value, currency1, currency2]
  );

  useEffect(function () {
    const controller = new AbortController();
    async function getCurrencies() {
      const res = await fetch(`https://api.frankfurter.app/currencies`, {
        signal: controller.signal,
      });

      const data = await res.json();
      const currencyKeys = Object.keys(data);
      setCurrencyList(currencyKeys);
      console.log(currencyKeys);
    }
    getCurrencies();
  }, []);
  function handleReverse() {
    setCurrency1(currency2);
    setCurrency2(currency1);
  }

  return (
    <div className="currency-converter">
      <div className="currency-container">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <select
          value={currency1}
          onChange={(e) => setCurrency1(e.target.value)}
        >
          {currencyList.map((currency) => (
            <option key={currency}>{currency}</option>
          ))}
        </select>
      </div>
      <button className="btn-reverse" onClick={handleReverse}>
        &harr;
      </button>
      <div className="currency-container">
        <input
          className="select-disable"
          disabled
          value={
            value
              ? isLoading
                ? "Converting..."
                : `${convertedValue} ${currency2}`
              : "Convert to"
          }
        />
        <select
          value={currency2}
          onChange={(e) => setCurrency2(e.target.value)}
        >
          {currencyList.map((currency) => (
            <option key={currency}>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
