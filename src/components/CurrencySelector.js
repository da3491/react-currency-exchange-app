const CurrencySelector = (props) => {
  const { id, selected, currencies, changeCurrency } = props;

  return (
    <select
      className="form-select col shadow-sm border-0"
      value={selected}
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
