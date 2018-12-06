import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Overview from "./Overview";
import Donations from "./Donations";
import Messages from "./Messages";

export class Dashboard extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="dashboard">
          <Navbar />
          <Switch>
            <Route exact path="/dashboard/" component={Overview} />
            <Route path="/dashboard/donations" component={Donations} />
            <Route path="/dashboard/messages" component={Messages} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Dashboard;
