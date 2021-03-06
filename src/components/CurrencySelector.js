import React, { useState, useEffect } from "react";

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  }
  console.log(response);
  throw new Error("Request was either a 404 or a 500");
};
const json = (response) => response.json();

const CurrencySelector = (props) => {
  const { id, value, currencies, changeCurrency } = props;
  
  return (
    <select
      className="form-select col shadow-sm border-0"
      value={value}
      onChange={(e) => changeCurrency(e.target.value, id)}
    >
      {Object.keys(currencies).map((option) => {
        return (
          <option value={option} key={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
};

export default CurrencySelector;
