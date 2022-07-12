import React, { useState, useEffect } from "react";
import CurrencySelector from "./CurrencySelector";

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  }
  console.log(response);
  throw new Error("Request was either a 404 or a 500");
};
const json = (response) => response.json();

const CurrencyConverter = () => {
  let [amount, setAmount] = useState(1);
  let [currency1, setCurrency1] = useState("USD");
  let [currency2, setCurrency2] = useState("GBP");
  let [conversionRates, setConversionRates] = useState({});
  let [convertedValue, setConvertedValue] = useState(1);

  const getConversion = (currency2, givenAmount) => {
    console.log(conversionRates[currency2]);
    let rate = Number(conversionRates[currency2]);
    setConvertedValue(givenAmount * rate);
  };

  const switchButton = () => {
    let temp = currency1;
    setCurrency1(currency2);
    setCurrency2(temp);
  };

  useEffect(() => {
    fetch(`https://altexchangerateapi.herokuapp.com/latest?from=${currency1}`)
      .then(checkStatus)
      .then(json)
      .then((data) => {
        setConversionRates(data.rates);
      });
  }, [currency1, currency2, amount]);

  useEffect(() => {
    getConversion(currency2, amount);
  }, [conversionRates]);

  return (
    <div
      id="exchange"
      className="container col border rounded bg-light px-4 py-4 mt-5 "
    >
      <div className="row">
        {/* CurrencySelector */}
        <div className="row col-md-5 align-items-center mx-auto">
          <CurrencySelector
            id="currency1"
            value={currency1}
            changeCurrency={setCurrency1}
          />
        </div>
        {/* Switch Button */}
        <button
          id="switch"
          className="btn btn-sm border rounded col-md- mx-auto my-3 shadow-sm"
          onClick={() => switchButton()}
        >
          <i className="fa-solid fa-arrow-right-arrow-left fs-5"></i>
        </button>
        {/* CurrencySelector */}
        <div className="row col-md-5 align-items-center mx-auto">
          <CurrencySelector
            id="currency2"
            value={currency2}
            changeCurrency={setCurrency2}
          />
        </div>
      </div>
      <hr className="my-4" />
      {/* Section for Amount Input */}
      <div className="row fw-bold text-center text-dark">
        <form className="d-flex col-md-8 mb-3">
          <label className="col-6 col-md-6 h3 form-label">Amount</label>
          <input
            className="col-6 col-md-6 border-0 shadow-sm text-end px-3 fs-4"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </form>
        <div className="col-md-4 h2 fw-bold">
          {convertedValue} {currency2}
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
