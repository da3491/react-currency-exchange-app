import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

// Components
import NavBar from "./NavBar";
import CurrencyConverter from "./CurrencyConverter";
import DataChart from "./DataChart";
import DataTable from "./DataTable";
import Footer from "./Footer";

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
      currency2: "GBP",
      conversionRates: [],
      convertedValue: "",
      chartData: [],
    };

    this.changeCurrency = this.changeCurrency.bind(this);
    this.switchButton = this.switchButton.bind(this);
    this.getRates = this.getRates.bind(this);
    this.getConversion = this.getConversion.bind(this);
  }

  componentDidMount() {
    fetch(`https://altexchangerateapi.herokuapp.com/latest`)
      .then(checkStatus)
      .then(json)
      .then((data) => {
        this.setState({ currencies: data.rates });
      });
    // Promise.all([
    //   fetch(`https://altexchangerateapi.herokuapp.com/latest`),
    //   fetch(`https://altexchangerateapi.herokuapp.com/currencies`),
    // ])
    //   .then(checkStatus)
    //   .then(json)
    //   .then(([res1, res2]) => {
    //     this.setState({ currencies: res1.rates, symbols: res2 });
    //   });
  }

  changeCurrency(id, value) {
    this.setState({ [id]: value });
  }

  switchButton(cur1, cur2) {
    this.setState({
      currency1: cur2,
      currency2: cur1,
    });
  }

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

  getConversion(amount) {
    this.getRates(this.state.currency1);
    let rate = Number(this.state.conversionRates[this.state.currency2]).toFixed(
      2
    );
    this.setState({ convertedValue: amount * rate });
  }

  getChartData() {
    fetch(`https://altexchangerateapi.herokuapp.com/2022-06-01..`)
      .then(checkStatus)
      .then(json)
      .then((data) => {
        this.setState({ chartData: data });
      });
  }

  render() {
    const ConvertTab = () => {
      return (
        <div className="my-5">
          <CurrencyConverter
            currencies={this.state.currencies}
            currency1={this.state.currency1}
            currency2={this.state.currency2}
            convertedValue={this.state.convertedValue}
            changeCurrency={this.changeCurrency}
            switchButton={this.switchButton}
            convertCurrency={this.convertCurrency}
            getConversion={this.getConversion}
          />
          <DataChart chartData={this.state.chartData} />
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
                getRates={this.getRates}
                currencies={this.state.currencies}
                conversionRates={this.state.conversionRates}
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
