import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import UserPicture from "../../assets/img/user-picture.png";

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
          className={[
            "container",
            this.props.showMobileMenu ? "mobile-menu-active" : ""
          ].join(" ")}
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

          <div className="user">
            <img src={UserPicture} alt="Profile" />
            <p className="name">Johnny</p>
            <p className="logout-button">Logout</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
