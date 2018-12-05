import React, { Component } from "react";
import Summary from "./overview/Summary";
import DonationsByType from "./overview/DonationsByType";
import TopDonors from "./overview/TopDonors";
import RecurringDonations from "./overview/RecurringDonations";

class Overview extends Component {
  render() {
    return (
      <div id="overview">
        <h3>Overview</h3>

        <Summary />
        <DonationsByType />
        <TopDonors />
        <RecurringDonations />
      </div>
    );
  }
}

export default Overview;
