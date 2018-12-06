import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  state = {
    showMobileMenu: false
  };

  render() {
    return (
      <div id="navbar">
        <div
          id="burger-menu"
          onClick={this.props.toggleMobileMenu}
          className={this.props.showMobileMenu ? "active" : ""}
        >
          <span />
          <span />
          <span />
        </div>

        <div
          className={
            this.props.showMobileMenu
              ? "container mobile-menu-active"
              : "container"
          }
        >
          <div className="logo">
            <h3>Polyeco</h3>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/dashboard/">
                  Overview
                  <div className="active-background">
                    <div />
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/donations">
                  Donations
                  <div className="active-background">
                    <div />
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/messages">
                  Messages
                  <div className="active-background">
                    <div />
                  </div>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
