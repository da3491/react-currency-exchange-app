import React, { useState, useEffect } from "react";
import { checkStatus, json } from "../utils/fetchUtils";

// Component
import CurrencySelector from "./CurrencySelector";

const DataTable = () => {
  let [amount, setAmount] = useState(1);
  let [currency1, setCurrency1] = useState("USD");
  let [conversionRates, setConversionRates] = useState({});
  let [currencies, setCurrencies] = useState({});

  useEffect(() => {
    fetch(`https://altexchangerateapi.herokuapp.com/latest`)
      .then(checkStatus)
      .then(json)
      .then((data) => {
        setCurrencies(data.rates);
      });
  }, []);

  useEffect(() => {
    fetch(`https://altexchangerateapi.herokuapp.com/latest?from=${currency1}`)
      .then(checkStatus)
      .then(json)
      .then((data) => {
        console.log(typeof amount);
        setConversionRates(data.rates);
      });
  }, [currency1]);

  return (
    <div id="page-2" className="my-5">
      <div className="container shadow-lg">
        <div className="row bg-light rounded py-3">
          <div className="row col-md-6 my-2 align-items-center">
            <div className="col-4 fw-bold text-end">Currency</div>
            <CurrencySelector />
          </div>
          <div className="row col-md-6 my-2 align-items-center">
            <div className="col-4 fw-bold text-end text-ali">Amount</div>
            <input className="col-8 border-0 shadow-sm" type="number" />
          </div>
        </div>
      </div>
      <div className="container shadow-lg">
        <div className="row bg-light rounded py-3 my-3 table-responsive">
          <table className="table table-striped">
            <thead>
              <tr className="text-center">
                <th>Currency</th>
                <th>Exchange Rate</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(conversionRates).map((item) => {
                return (
                  <tr className="text-center" key={item}>
                    <td>{item[0]}</td>
                    <td>{item[1]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
