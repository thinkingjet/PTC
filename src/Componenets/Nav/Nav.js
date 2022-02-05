import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <img src="./images/logo.png" className="nav-logo" />
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contribute</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
