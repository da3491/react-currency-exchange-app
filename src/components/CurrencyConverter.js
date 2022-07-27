const CurrencySelector = (props) => {
  const { id, currencies, value, changeCurrency } = props;

  return (
    <select
      className="form-select form-select-sm col shadow-sm border-0"
      onChange={(event) => changeCurrency(id, event.target.value)}
      value={value}
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

const CurrencyConverter = (props) => {
  const {
    currencies,
    currency1,
    currency2,
    convertedValue,
    changeCurrency,
    switchButton,
    getConversion,
  } = props;

  return (
    <div
      id="exchange"
      className="container col border rounded bg-light px-4 py-4 mt-5 shadow-lg"
    >
      <div className="row overflow-auto">
        <div className="row col-md-5 align-items-center mx-auto">
          <CurrencySelector
            id="currency1"
            value={currency1}
            currencies={currencies}
            changeCurrency={changeCurrency}
          />
        </div>
        <button
          id="switch"
          className="btn btn-sm border rounded col-md- mx-auto my-3 shadow-sm"
          onClick={() => switchButton(currency1, currency2)}
        >
          <i className="fa-solid fa-arrow-right-arrow-left fs-5"></i>
        </button>
        <div className="row col-md-5 align-items-center mx-auto">
          <CurrencySelector
            id="currency2"
            value={currency2}
            currencies={currencies}
            changeCurrency={changeCurrency}
          />
        </div>
      </div>
      <hr className="my-4" />
      <div className="row fw-bold text-center text-dark">
        <div className="d-flex col-md-8 mb-3">
          <div className="col-6 col-md-6 h3">Amount</div>
          <input
            className="col-6 col-md-6 border-0 shadow-sm"
            type="number"
            onChange={(e) => getConversion(e.target.value)}
          />
        </div>
        <div className="col-md-4 h2 fw-bold">
          {convertedValue} {currency2}
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
