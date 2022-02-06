import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <div>
        <Link to="/" className="nav-logo">
          cL
        </Link>
      </div>
      <div>
        <ul className="nav-links">
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contribute</Link>
          </li>
          <li>
            <Link to="/">Donate</Link>
          </li>
        </ul>
      </div>
      <div className="auth">
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/">Signup</Link>
        </li>
      </div>
    </nav>
  );
}

export default Nav;
