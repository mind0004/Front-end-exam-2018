import React, { Component } from "react";
import Donator from "./Donator";
import { connect } from "react-redux";

class DonatorList extends Component {
  render() {
    const allDonations = this.props.donations.map(donation => {
      return <Donator key={donation.id} donation={donation} />;
    });

    return (
      <div>
        <div id="donator-list">
          <h3>Donator List</h3>

          <div className="card">
            <table>
              <tbody>
                <tr>
                  <th className="active">Date</th>
                  <th>Name</th>
                  <th>E-mail</th>
                  <th>Type</th>
                  <th>Amount</th>
                </tr>
                {allDonations}
              </tbody>
            </table>
          </div>
        </div>
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
