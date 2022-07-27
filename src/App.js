import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

// APIS
// https://www.frankfurter.app/docs/
// https://www.chartjs.org/docs/latest/getting-started/
// https://restcountries.com/#api-endpoints-v3-code

// Components
import Layout from "./components/Layout";
import CurrencyConverter from "./components/CurrencyConverter";
import DataTable from "./components/DataTable";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<CurrencyConverter to="convert" />}></Route>
        <Route path="convert" element={<CurrencyConverter />}></Route>
        <Route path="exchange_rates" element={<DataTable />}></Route>
      </Routes>
    </Layout>
  );
};

export default App;
