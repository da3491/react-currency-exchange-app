import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

// additional APIS
// https://www.frankfurter.app/docs/
// https://www.chartjs.org/docs/latest/getting-started/
// https://restcountries.com/#api-endpoints-v3-code

// Components
import NavBar from "./components/NavBar";
import CurrencyConverter from "./components/CurrencyConverter";
import DataChart from "./components/DataChart";
import DataTable from "./components/DataTable";
import Footer from "./components/Footer";

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  }
  throw new Error("Request was either a 404 or a 500");
};
const json = (response) => response.json();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
      currency1: "USD",
      currency2: "AUD",
      amount: 1,
      conversionRates: [],
      convertedValue: "",
    };

    this.getRates = this.getRates.bind(this);
    this.getConversion = this.getConversion.bind(this);
    this.changeCurrency = this.changeCurrency.bind(this);
    this.switchButton = this.switchButton.bind(this);
  }

  componentDidMount() {
    fetch(`https://altexchangerateapi.herokuapp.com/latest`)
      .then(checkStatus)
      .then(json)
      .then((data) => {
        this.setState({ currencies: data.rates });
      });
    this.getRates("USD");
  }

  // Fetch call for rates based on selected currency
  getRates(givenCurrency) {
    fetch(
      `https://altexchangerateapi.herokuapp.com/latest?from=${givenCurrency}`
    )
      .then(checkStatus)
      .then(json)
      .then((data) => {
        this.setState({ conversionRates: data.rates });
      });
  }

  // Does not work
  // Finds the rate based on currency1 and provided currency2
  getConversion(amount, currency2) {
    console.log(amount, currency2);
    let rate = Number(this.state.conversionRates[currency2]).toFixed(2);
    this.setState({ convertedValue: amount * rate });
  }

  // Updates selected currencies
  changeCurrency(value, selectCur = "currency1") {
    this.setState({ [selectCur]: value });
  }

  // Switches selected currencies
  switchButton(cur1, cur2) {
    this.setState({
      currency1: cur2,
      currency2: cur1,
    });
  }

  render() {
    const {
      currencies,
      currency1,
      currency2,
      amount,
      convertedValue,
      conversionRates,
    } = this.state;

    const ConvertTab = () => {
      return (
        <div className="my-5">
          <CurrencyConverter
            currencies={currencies}
            currency1={currency1}
            currency2={currency2}
            amount={amount}
            convertedValue={convertedValue}
            changeCurrency={this.changeCurrency}
            getRates={this.getRates}
            getConversion={this.getConversion}
            switchButton={this.switchButton}
          />
          <DataChart />
        </div>
      );
    };

    return (
      <div className="container-md">
        <NavBar />
        <Routes>
          <Route path="/" element={<ConvertTab to="convert" />}></Route>
          <Route path="convert" element={<ConvertTab />}></Route>
          <Route
            path="exchange_rates"
            element={
              <DataTable
                currencies={currencies}
                currency1={currency1}
                amount={amount}
                convertedValue={convertedValue}
                conversionRates={conversionRates}
                changeCurrency={this.changeCurrency}
                getConversion={this.getConversion}
                getRates={this.getRates}
              />
            }
          ></Route>
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
