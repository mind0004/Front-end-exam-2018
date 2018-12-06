import React, { Component } from "react";
import Summary from "./overview/Summary";
import DonationsByType from "./overview/DonationsByType";
import TopDonors from "./overview/TopDonors";
import RecurringDonations from "./overview/RecurringDonations";
import { connect } from "react-redux";

class Overview extends Component {
  render() {
    console.log(this.props.overview);
    return (
      <div id="overview">
        <h2 className="dashboard-title">Overview</h2>
        <Summary />
        <DonationsByType />
        <TopDonors />
        <RecurringDonations />
      </div>
    );
  }
}

const mapStatetoProps = (state, ownProps) => {
  return {
    overview: state.overview
  };
};

export default connect(mapStatetoProps)(Overview);
