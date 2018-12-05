import React, { Component } from "react";
import Donator from "./Donator";

class DonatorList extends Component {
  render() {
    return (
      <div>
        <h3>Donator List</h3>

        <Donator />
      </div>
    );
  }
}

export default DonatorList;
