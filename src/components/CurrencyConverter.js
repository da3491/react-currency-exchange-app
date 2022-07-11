import CurrencySelector from "./CurrencySelector";

const CurrencyConverter = (props) => {
  const {
    currencies,
    currency1,
    currency2,
    amount,
    convertedValue,
    getRates,
    getConversion,
    switchButton,
    changeCurrency,
  } = props;

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
            selected={currency1}
            currencies={currencies}
            changeCurrency={changeCurrency}
          />
        </div>
        {/* Switch Button */}
        <button
          id="switch"
          className="btn btn-sm border rounded col-md- mx-auto my-3 shadow-sm"
          onClick={() => {
            switchButton(currency1, currency2);
            // value of currency1 after swapping
            console.log("after again: " + currency1, currency2);
            getRates(currency1);
            getConversion(currency2, amount);
          }}
        >
          <i className="fa-solid fa-arrow-right-arrow-left fs-5"></i>
        </button>
        {/* CurrencySelector */}
        <div className="row col-md-5 align-items-center mx-auto">
          <CurrencySelector
            id="currency2"
            selected={currency2}
            currencies={currencies}
            changeCurrency={changeCurrency}
            onChange={() => getRates(currency1)}
          />
        </div>
      </div>
      <hr className="my-4" />
      {/* Section for Chart */}
      <div className="row fw-bold text-center text-dark">
        <form className="d-flex col-md-8 mb-3">
          <label className="col-6 col-md-6 h3 form-label">Amount</label>
          <input
            className="col-6 col-md-6 border-0 shadow-sm text-end px-3 fs-4"
            type="number"
            onChange={(e) => {
              setTimeout(() => {
                e.preventDefault();
                getRates(currency1);
                getConversion(currency2, e.target.value);
              }, 1000);
            }}
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
