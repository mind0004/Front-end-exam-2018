import React, { Component } from "react";
import DonatorList from "./donations/DonatorList";

class Donations extends Component {
  render() {
    return (
      <div>
        <h3>Donations</h3>

        <DonatorList />
      </div>
    );
  }
}

export default Donations;
