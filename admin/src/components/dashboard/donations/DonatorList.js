import React, { Component } from "react";
import Donator from "./Donator";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

class DonatorList extends Component {
  render() {
    console.log(this.props.donations);
    const allDonations = this.props.donations ? (
      this.props.donations.map(donation => {
        return <Donator key={donation.id} donation={donation} />;
      })
    ) : (
      <tr className="donator">
        <td className="date">Loading</td>
      </tr>
    );

    return (
      <div>
        <div className="donator-list">
          <div className="card list">
            <div className="card-content">
              <header>
                <div className="search">
                  <div className="input-field">
                    <input type="text" name="email" placeholder=" " />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 96 109"
                      className="magnifier"
                    >
                      <path d="M96 102L64 62a37 37 0 1 0-9 7l32 40a1 1 0 0 0 2 0l6-5a1 1 0 0 0 1-2zM18 52a24 24 0 1 1 34 4 24 24 0 0 1-34-4z" />
                    </svg>
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
                    <th className="date active">Date</th>
                    <th className="name">Name</th>
                    <th className="email">E-mail</th>
                    <th className="type">Type</th>
                    <th className="amount">Amount</th>
                  </tr>
                  {allDonations}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    donations: state.firestore.ordered.donations
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "donations", orderBy: ["timestamp", "desc"] }
  ])
)(DonatorList);
