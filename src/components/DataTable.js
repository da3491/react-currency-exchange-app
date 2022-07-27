const DataTable = (props) => {
  const { currencies, conversionRates, getRates } = props;

  return (
    <div id="page-2" className="my-5">
      <div className="container shadow-lg">
        <div className="row bg-light rounded py-3">
          <div className="row col-md-6 my-2 align-items-center">
            <div className="col-4 fw-bold text-end">Currency</div>
            <select
              className="col-8 border-0 shadow-sm"
              onChange={(e) => getRates(e.target.value)}
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
