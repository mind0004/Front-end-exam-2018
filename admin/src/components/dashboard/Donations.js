import React, { Component } from "react";
import DonatorList from "./donations/DonatorList";

//Show all donations
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
