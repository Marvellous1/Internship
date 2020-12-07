import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light navbar-expand-md navbar-lg container py-3 mb-5">
          <NavLink to="/" className="navbar-brad brand-logo">
            ZANA
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mr-3">
                <NavLink
                  to="/order"
                  className="nav-link"
                  activeClassName="NavActive"
                >
                  Order
                </NavLink>
              </li>
              <li className="nav-item mr-3">
                <NavLink
                  to="/profile"
                  className="nav-link"
                  activeClassName="NavActive"
                >
                  Profile
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
