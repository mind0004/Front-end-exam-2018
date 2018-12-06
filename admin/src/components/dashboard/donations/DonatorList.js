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
          <div className="card list">
            <header>
              <div className="search">
                <div className="input-field">
                  <input type="text" name="email" placeholder=" " />
                  <label>Type to search...</label>
                  <div className="underline" />
                </div>
              </div>
              <div className="filter clearfix">
                <p>Filter by:</p>
                <select>
                  <option value="date">Date</option>
                  <option value="name">Name</option>
                  <option value="email">E-mail</option>
                  <option value="type">Type</option>
                  <option value="amount">Amount</option>
                </select>
              </div>
            </header>

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
