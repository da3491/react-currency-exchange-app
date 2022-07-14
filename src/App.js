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

const App = () => {
  const ConvertTab = () => {
    return (
      <div className="my-5">
        <CurrencyConverter />
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
        <Route path="exchange_rates" element={<DataTable />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
