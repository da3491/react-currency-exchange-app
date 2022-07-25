import currencies from "../utils/currencies";

const CurrencySelector = (props) => {
  const { id, value, changeCurrency } = props;

  return (
    <select
      className="form-select col shadow-sm border-0"
      value={value}
      onChange={(e) => changeCurrency(e.target.value, id)}
    >
      {Object.entries(currencies).map((option) => {
        const acronym = option[0];
        const name = option[1].name;
        return (
          <option value={acronym} key={acronym}>
            {acronym} - {name}
          </option>
        );
      })}
    </select>
  );
};

export default CurrencySelector;
