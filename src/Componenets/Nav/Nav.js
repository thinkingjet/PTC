import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <a href="#">
        <img
          src="https://raw.githubusercontent.com/thinkingjet/PTC/dev/public/images/logo.png"
          alt="img"
          className="nav-logo"
        />
      </a>
      <ul className="nav-links">
        <li>
          <a href="#">About</a>
        </li>
        <li></li>
        <li>
          <a href="#">Donate</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
