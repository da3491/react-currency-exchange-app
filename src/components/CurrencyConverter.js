import React, { useState, useEffect } from "react";
import { checkStatus, json } from "../utils/fetchUtils";
import currencies from "../utils/currencies";
import CurrencySelector from "./CurrencySelector";
import DataChart from "./DataChart";

const CurrencyConverter = () => {
  let [amount, setAmount] = useState(1);
  let [currency1, setCurrency1] = useState("USD");
  let [currency2, setCurrency2] = useState("GBP");
  let [conversionRates, setConversionRates] = useState({});
  let [convertedValue, setConvertedValue] = useState(1);
  let [historicalData, setHistoricalData] = useState({});

  const getHistoricalRates = (currency1, currency2) => {
    const endDate = new Date().toISOString().split("T")[0];
    const startDate = new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0];
    fetch(
      `https://altexchangerateapi.herokuapp.com/${startDate}..${endDate}?from${currency1}to=${currency2}`
    )
      .then(checkStatus)
      .then(json)
      .then((data) => {
        const chartLabels = Object.keys(data.rates);
        const chartData = Object.values(data.rates).map(
          (rate) => rate[currency2]
        );
        const chartLabel = `${currency1}/${currency2}`;
        const historicalData = { chartLabels, chartData, chartLabel };
        console.log(historicalData);
        // buildChart(chartLabels, chartData, chartLabel);
        setHistoricalData(historicalData);
      })
      .catch((error) => console.log(error.message));
  };

  const getConversion = (currency2, givenAmount) => {
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
  }, [currency1]);

  useEffect(() => {
    getConversion(currency2, amount);
  }, [conversionRates, amount, currency2]);

  // Change in currency will fetch data for chart and update state
  useEffect(() => {
    getHistoricalRates(currency1, currency2);
  }, [currency1, currency2]);

  return (
    <div>
      {/* Exchange Section */}
      <div
        id="exchange"
        className="container col border rounded bg-light px-4 py-3 mt-5 "
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

        <div className="d-flex flex-column flex-md-row justify-content-center fw-bold text-center text-dark">
          <form className="d-flex align-items-center mb-3">
            <label className="col-3 h3 form-label">
              {currencies[currency1].symbol}
            </label>
            <input
              className="col-6 border-0 shadow-sm text-center px-3 fs-4"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </form>
          <div className="d-flex justify-content-center h2 fw-bold">
            <span className="fs-2 fw-bold">=</span>
            <span className="mx-2">{currencies[currency2].symbol}</span>
            <span>{convertedValue.toFixed(4)}</span>
          </div>
        </div>
      </div>
      {/* Chart Component */}
      <div className="container bg-light rounded my-3">
        <DataChart historicalData={historicalData} />
      </div>
    </div>
  );
};

export default CurrencyConverter;
