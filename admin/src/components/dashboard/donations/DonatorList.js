import React, { Component } from "react";
import Donator from "./Donator";
import { connect } from "react-redux";

class DonatorList extends Component {
  render() {
    const allDonations = this.props.donations.map(donation => {
      return <Donator donation={donation} />;
    });

    return (
      <div>
        <h3>Donator List</h3>
        {allDonations}
      </div>
    );
  }
}

const mapStatetoProps = (state, ownProps) => {
  return {
    donations: state.donations
  };
};

export default connect(mapStatetoProps)(DonatorList);
