import CurrencySelector from "./CurrencySelector";

const DataTable = (props) => {
  const {
    currencies,
    currency1,
    amount,
    convertedValue,
    conversionRates,
    getRates,
    getConversion,
    changeCurrency,
    changeAmount,
  } = props;

  return (
    <div id="page-2" className="my-5 container">
      <div className="row bg-light rounded py-3">
        <div className="row col-md-6 my-2 align-items-center">
          <div className="col-4 fw-bold text-end text-ali" value={amount}>
            Amount
          </div>
          <input
            className="col-8 border-0 shadow-sm"
            type="number"
            onChange={(e) => changeAmount(e.target.value)}
          />
        </div>
        {/* Currency Selector */}
        <div className="row col-md-6 my-2 align-items-center">
          <div className="col-4 fw-bold text-end">Currency</div>
          <CurrencySelector
            selected={currency1}
            currencies={currencies}
            changeCurrency={changeCurrency}
          />
        </div>
      </div>
      {/* Table Section */}
      <div className="row bg-light rounded py-3 my-3">
        <table className="table table-striped">
          <thead>
            <tr className="text-center">
              <th>Currency</th>
              <th>Exchange Rate</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(conversionRates).map((rate) => {
              return (
                <tr className="text-center" key={rate[0]}>
                  <td>{rate[0]}</td>
                  <td>{rate[1]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
