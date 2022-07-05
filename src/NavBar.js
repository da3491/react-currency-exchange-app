import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <ul id="nav" className="nav nav-tabs">
      <li className="nav-item w-50 text-center">
        <NavLink
          to="convert"
          className="nav-link text-dark fw-bold"
          aria-current="page"
        >
          Convert
        </NavLink>
      </li>
      <li className="nav-item w-50 text-center">
        <NavLink to="exchange_rates" className="nav-link text-dark fw-bold">
          Exchange Rate
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
