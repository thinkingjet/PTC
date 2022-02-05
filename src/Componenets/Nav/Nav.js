import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-links">
        <li>
          <a href="https://raw.githubusercontent.com/thinkingjet/PTC/dev/public/images/logo.png">
            About
          </a>
        </li>
        <li>
          <a href="https://raw.githubusercontent.com/thinkingjet/PTC/dev/public/images/logo.png">
          <img
            src="https://raw.githubusercontent.com/thinkingjet/PTC/dev/public/images/logo.png"
            alt="img"
            className="nav-logo"
          />
          </a>
        </li>
        <li>
          <a href="https://raw.githubusercontent.com/thinkingjet/PTC/dev/public/images/logo.png">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
