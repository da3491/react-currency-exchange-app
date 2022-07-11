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
  console.log(response);
  throw new Error("Request was either a 404 or a 500");
};
const json = (response) => response.json();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
      currency1: "USD",
      currency2: "GBP",
      amount: "",
      conversionRates: [],
      convertedValue: "",
    };

    this.getRates = this.getRates.bind(this);
    this.getConversion = this.getConversion.bind(this);
    this.changeCurrency = this.changeCurrency.bind(this);
    this.changeAmount = this.changeAmount.bind(this);
    this.switchButton = this.switchButton.bind(this);
  }

  componentDidMount() {
    // Promise.all([
    //   fetch(`https://altexchangerateapi.herokuapp.com/latest?from=USD`),
    //   fetch(`https://altexchangerateapi.herokuapp.com/latest`),
    // ]).then((results) => {
    //   results.forEach((request) => {
    //     checkStatus(request);
    //     json(request);
    //   });
    // }).then(([res1, res2]) => {
    //   this.setState({currencies: res1.rates, })
    // });
    fetch(
      `https://altexchangerateapi.herokuapp.com/latest?from=${this.state.currency1}`
    )
      .then(checkStatus)
      .then(json)
      .then((data) => {
        this.setState({ currencies: data.rates });
      });
    this.getRates(this.state.currency1);
    this.getConversion(1, this.state.currency2);
  }

  // Fetch call for rates based on selected currency
  getRates(givenCurrency) {
    // Issue: The value passed is incorrect and should have been swapped.
    console.log("getting rates for: " + givenCurrency);
    fetch(
      `https://altexchangerateapi.herokuapp.com/latest?from=${givenCurrency}`
    )
      .then(checkStatus)
      .then(json)
      .then((data) => {
        this.setState({ conversionRates: data.rates });
      });
    // console.log(this.state.conversionRates);
  }

  // Updates selected currencies
  changeCurrency(value, selectCur = "currency1") {
    this.setState({ [selectCur]: value });
    console.log(this.state[selectCur] + " changed to: " + value);
  }

  changeAmount(newAmount) {
    this.setState({ amount: newAmount });
  }

  // Finds the rate based on currency1 and provided currency2
  // Issue: Does not work
  getConversion(currency2, givenAmount = 1) {
    // Used in Converter and Table

    let rate = Number(this.state.conversionRates[currency2]).toFixed(2);
    this.setState({ amount: givenAmount, convertedValue: givenAmount * rate });
  }

  // Switches selected currencies
  switchButton(cur1, cur2) {
    // Issue: Does not indicate change in logs after setting state to swapped values. Yet it shows in DOM.
    console.log("before: " + this.state.currency1, this.state.currency2);
    // This shows the same results
    let temp = cur1;
    cur1 = cur2;
    cur2 = temp;
    // this.setState({
    //   currency1: cur2,
    //   currency2: cur1,
    // });
    console.log("cur2: " + cur2);
    this.setState({ currency1: cur2 });
    console.log(this.state.currency1);
    this.setState({ currency2: temp });
    console.log("after: " + this.state.currency1, this.state.currency2);
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
        <h2 className="text-center fw-bold my-4">Currency Converter</h2>
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
                changeAmount={this.changeAmount}
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
