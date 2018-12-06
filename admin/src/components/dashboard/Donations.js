import React, { Component } from "react";
import DonatorList from "./donations/DonatorList";

class Donations extends Component {
  render() {
    return (
      <div id="donations">
        <h2 className="dashboard-title">Donations</h2>

        <DonatorList />
      </div>
    );
  }
}

export default Donations;
