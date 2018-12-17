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
                <td>
                  {this.props.overview.topDonors[0].amount +
                    this.props.overview.currency}
                </td>
                <td>{this.props.overview.topDonors[0].name}</td>
              </tr>

              <tr>
                <td>
                  {this.props.overview.topDonors[1].amount +
                    this.props.overview.currency}
                </td>
                <td>{this.props.overview.topDonors[1].name}</td>
              </tr>

              <tr>
                <td>
                  {this.props.overview.topDonors[2].amount +
                    this.props.overview.currency}
                </td>
                <td>{this.props.overview.topDonors[2].name}</td>
              </tr>

              {/* <tr>
                <td>
                  {this.props.overview.topDonors[3].amount +
                    this.props.overview.currency}
                </td>
                <td>{this.props.overview.topDonors[3].name}</td>
              </tr>

              <tr>
                <td>
                  {this.props.overview.topDonors[4].amount +
                    this.props.overview.currency}
                </td>
                <td>{this.props.overview.topDonors[4].name}</td>
              </tr> */}

              {/* <tr>
                <td>
                  {this.props.overview.topDonors[5].amount +
                    this.props.overview.currency}
                </td>
                <td>{this.props.overview.topDonors[5].name}</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TopDonors;
