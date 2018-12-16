import React, { Component } from "react";

//Display the 10 top donors
class TopDonors extends Component {
  render() {
    return (
      <div className="top-donors card">
        <h2>Top donors</h2>
        <div className="card-content">
          <table>
            <tbody>
              <tr>
                <th>
                  {this.props.overview.topDonors[0].amount +
                    this.props.overview.currency}
                </th>
                <th>{this.props.overview.topDonors[0].name}</th>
              </tr>

              <tr>
                <th>
                  {this.props.overview.topDonors[1].amount +
                    this.props.overview.currency}
                </th>
                <th>{this.props.overview.topDonors[1].name}</th>
              </tr>

              <tr>
                <th>
                  {this.props.overview.topDonors[2].amount +
                    this.props.overview.currency}
                </th>
                <th>{this.props.overview.topDonors[2].name}</th>
              </tr>

              <tr>
                <th>
                  {this.props.overview.topDonors[3].amount +
                    this.props.overview.currency}
                </th>
                <th>{this.props.overview.topDonors[3].name}</th>
              </tr>

              <tr>
                <th>
                  {this.props.overview.topDonors[4].amount +
                    this.props.overview.currency}
                </th>
                <th>{this.props.overview.topDonors[4].name}</th>
              </tr>

              <tr>
                <th>
                  {this.props.overview.topDonors[5].amount +
                    this.props.overview.currency}
                </th>
                <th>{this.props.overview.topDonors[5].name}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TopDonors;
