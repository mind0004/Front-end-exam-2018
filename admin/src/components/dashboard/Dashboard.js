import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Overview from "./Overview";
import Donations from "./Donations";
import Contact from "./Contact";

export class Dashboard extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="dashboard">
          <h2>Dashboard</h2>

          <Navbar />
          <Switch>
            <Route exact path="./" component={Overview} />
            <Route path="/dashboard/donations" component={Donations} />
            <Route path="/dashboard/contact" component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Dashboard;
