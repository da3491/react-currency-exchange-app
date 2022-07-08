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
  } = props;

  return (
    <div id="page-2" className="my-5">
      <div className="container">
        <div className="row bg-light rounded py-3">
          <div className="row col-md-6 my-2 align-items-center">
            <div className="col-4 fw-bold text-end text-ali" value={amount}>
              Amount
            </div>
            <input className="col-8 border-0 shadow-sm" type="number" />
          </div>
          <div className="row col-md-6 my-2 align-items-center">
            <div className="col-4 fw-bold text-end">Currency</div>
            <select
              className="col-8 border-0 shadow-sm"
              value={currency1}
              onChange={(e) => {
                changeCurrency(e.target.value);
                getRates(e.target.value);
                getConversion(amount, currency1);
              }}
            >
              {Object.keys(currencies).map((option) => {
                return (
                  <option value={option} key={option}>
                    {option}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row bg-light rounded py-3 my-3">
          <table className="table table-striped">
            <thead>
              <tr className="text-center">
                <th>Currency</th>
                <th>Exchange Rate</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(conversionRates).forEach((rate) => {
                // getConversion(amount, rate[0]);
                return (
                  <tr className="text-center" key={rate[0]}>
                    <td>{rate[0]}</td>
                    <td>{convertedValue}</td>
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
