const DataTable = () => {
  return (
    <div id="page-2" className="my-5">
      <div className="container">
        <div className="row bg-light rounded py-3">
          <div className="row col-md-6 my-2 align-items-center">
            <div className="col-4 fw-bold text-end text-ali">Amount</div>
            <input className="col-8 border-0 shadow-sm" type="number" />
          </div>
          <div className="row col-md-6 my-2 align-items-center">
            <div className="col-4 fw-bold text-end">Currency</div>
            <select className="col-8 border-0 shadow-sm" name="" id="">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
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
              <tr className="text-center">
                <td>ABC</td>
                <td>1.04</td>
              </tr>
              <tr className="text-center">
                <td>ABC</td>
                <td>1.04</td>
              </tr>
              <tr className="text-center">
                <td>ABC</td>
                <td>1.04</td>
              </tr>
              <tr className="text-center">
                <td>ABC</td>
                <td>1.04</td>
              </tr>
              <tr className="text-center">
                <td>ABC</td>
                <td>1.04</td>
              </tr>
              <tr className="text-center">
                <td>ABC</td>
                <td>1.04</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
