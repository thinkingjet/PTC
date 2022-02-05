import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <img
        src="https://raw.githubusercontent.com/swwayam/donation/dev/public/images/logo.png"
        alt="img"
        className="nav-logo"
      />
      <ul className="nav-links">
        <li>
          <a href="https://raw.githubusercontent.com/swwayam/donation/dev/public/images/logo.png">
            Home
          </a>
        </li>
        <li>
          <a href="https://raw.githubusercontent.com/swwayam/donation/dev/public/images/logo.png">
            About
          </a>
        </li>
        <li>
          <a href="https://raw.githubusercontent.com/swwayam/donation/dev/public/images/logo.png">
            Contribute
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
