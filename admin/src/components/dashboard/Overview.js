import React, { Component } from "react";
import Summary from "./overview/Summary";
import DonationsByType from "./overview/DonationsByType";
import TopDonors from "./overview/TopDonors";
import LatestMessages from "./overview/LatestMessages";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

//Default first page of dashboard showing the most interesting data
class Overview extends Component {
  render() {
    const allOverview =
      this.props.overview && this.props.messages ? (
        <div className="container">
          <Summary overview={this.props.overview[0]} />
          <DonationsByType overview={this.props.overview[0]} />
          <TopDonors overview={this.props.overview[0]} />
          <LatestMessages messages={this.props.messages} />
        </div>
      ) : (
        <p>Loading</p>
      );
    return (
      <div id="overview">
        <h2 className="dashboard-title">Overview</h2>
        {allOverview}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  //console.log(state);
  return {
    overview: state.firestore.ordered.overview,
    messages: state.firestore.ordered.messages
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "overview" }, { collection: "messages" }])
)(Overview);
