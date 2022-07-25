import React from "react";

import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div className="container-md bg-design">
      <NavBar />
      <h2 className="text-center fw-bold my-4">Currency Converter</h2>
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
