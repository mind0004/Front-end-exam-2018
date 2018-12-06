import React, { Component } from "react";
import DonatorList from "./donations/DonatorList";

class Donations extends Component {
  render() {
    return (
      <div>
        <h2>Donations</h2>

        <DonatorList />
      </div>
    );
  }
}

export default Donations;
