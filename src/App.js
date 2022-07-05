import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

// Components
import NavBar from "./NavBar";
import CurrencyConverter from "./CurrencyConverter";
import Graph from "./Graph";
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
      symbols: [],
    };
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

  render() {
    const ConvertTab = () => {
      return (
        <div className="my-5">
          <CurrencyConverter />
          <Graph />
        </div>
      );
    };

    return (
      <div className="container-md">
        <NavBar />
        <Routes>
          <Route path="/" element={<ConvertTab to="convert" />}></Route>
          <Route path="convert" element={<ConvertTab />}></Route>
          <Route path="exchange_rates" element={<DataTable />}></Route>
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
