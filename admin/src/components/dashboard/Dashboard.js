import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Overview from "./Overview";
import Donations from "./Donations";
import Messages from "./Messages";

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
    return (
      <BrowserRouter>
        <div id="dashboard">
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

export default Dashboard;
