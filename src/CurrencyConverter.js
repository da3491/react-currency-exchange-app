const CurrencySelector = (props) => {
  // const currencies = props.currency;

  return (
    <select className="form-select col shadow-sm border-0">
      {/* {Object.keys(currencies).map((option) => {
        return (
          <option value={option} key={option}>
            {option}
          </option>
        );
      })} */}
    </select>
  );
};

const CurrencyConverter = (props) => {
  return (
    <div
      id="exchange"
      className="container col border rounded bg-light px-4 py-4 mt-5 "
    >
      <div className="row">
        <div className="row col-md-5 align-items-center mx-auto">
          <CurrencySelector currency={props.currencies} />
        </div>
        <button
          id="switch"
          className="btn btn-sm border rounded col-md- mx-auto my-3 shadow-sm"
        >
          <i className="fa-solid fa-arrow-right-arrow-left fs-5"></i>
        </button>
        <div className="row col-md-5 align-items-center mx-auto">
          <CurrencySelector currency={props.currencies} />
        </div>
      </div>
      <hr className="my-4" />
      <div className="row fw-bold text-center text-dark">
        <div className="d-flex col-md-8 mb-3">
          <div className="col-6 col-md-6 h3">Amount</div>
          <input className="col-6 col-md-6 border-0 shadow-sm" type="number" />
        </div>
        <div className="col-md-4 h2 fw-bold">.95 EUR</div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
