import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Overview from "./Overview";
import Donations from "./Donations";
import Messages from "./Messages";
import DateAndTime from "./extras/DateAndTime";
import { connect } from "react-redux";
import IsAuthUser from "../hoc/IsAuthUser";
import { compose } from "redux";
import config from "../../config/config.json";

//Dashboard is the Top level component enclosing all pages and components inside the admin dashboard
class Dashboard extends Component {
  state = {
    showMobileMenu: false
  };
  toggleMobileMenu = () => {
    if (this.state.showMobileMenu) {
      console.log("Close it");
    } else {
      console.log("Open it");
    }
    this.setState({
      showMobileMenu: !this.state.showMobileMenu
    });
  };
  render() {
    console.log(this.props.location);
    return (
      <BrowserRouter basename={config.path}>
        <div id="dashboard">
          <DateAndTime />
          <Navbar
            showMobileMenu={this.state.showMobileMenu}
            toggleMobileMenu={this.toggleMobileMenu}
          />
          <div
            id="dashboard-components"
            className={this.state.showMobileMenu ? "mobile-menu-active" : ""}
          >
            <div className="main-content">
              <Switch>
                <Route exact path="/dashboard/" component={Overview} />
                <Route path="/dashboard/donations" component={Donations} />
                <Route path="/dashboard/messages" component={Messages} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  //console.log(state);
  return {
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  IsAuthUser
)(Dashboard);
