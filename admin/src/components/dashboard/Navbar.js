import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import UserPicture from "../../assets/img/user-picture.png";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authAction";

//Left navbar of the dashboard to navigate around
class Navbar extends Component {
  state = {
    showMobileMenu: false
  };

  handleLogout = () => {
    this.props.signOut();
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
                <NavLink exact to="/dashboard/" activeClassName="active">
                  Overview
                  <div className="active-background">
                    <div />
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/donations" activeClassName="active">
                  Donations
                  <div className="active-background">
                    <div />
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/messages" activeClassName="active">
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
            <p className="logout-button" onClick={this.handleLogout}>
              Logout
            </p>
          </div>
        </div>
      </div>
    );
  }
}

//use the signOut action
const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps,
  undefined,
  { pure: false }
)(Navbar);

//missing own props or what?
