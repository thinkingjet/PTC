import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <div>
        <a href="#" className="nav-logo">
          cL
        </a>
      </div>
      <div>
        <ul className="nav-links">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contribute</a>
          </li>
          <li>
            <a href="#">Donate</a>
          </li>
        </ul>
      </div>
      <div className="auth">
        <li>
          <a href="#">Login</a>
        </li>
        <li>
          <a href="#">Signup</a>
        </li>
      </div>
    </nav>
  );
}

export default Nav;
