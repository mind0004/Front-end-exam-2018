import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div id="navbar">
        <div className="container">
          <div className="logo">
            <h3>Polyeco</h3>
          </div>

          <nav>
            <NavLink to="./">Overview</NavLink>
            <NavLink to="/dashboard/donations">Donations</NavLink>
            <NavLink to="/dashboard/contact">Contact</NavLink>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
