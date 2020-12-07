import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-light navbar-expand-md navbar-lg container py-3 mb-5">
          <NavLink to="/" class="navbar-brad brand-logo">
            ZANA
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
            <ul class="navbar-nav ml-auto">
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
