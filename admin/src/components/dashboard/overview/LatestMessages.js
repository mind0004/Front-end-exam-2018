import React, { Component } from "react";

class LatestMessages extends Component {
  render() {
    //console.log(this.props.messages);
    return (
      <div className="recurring-donations card">
        <h2>Latest messages</h2>
        <div className="card-content">
          <table>
            <tbody>
              <tr>
                <th>{this.props.messages[0].date}</th>
                <th>{this.props.messages[0].name}</th>
                <th>{this.props.messages[0].institute}</th>
              </tr>

              <tr>
                <th>{this.props.messages[1].date}</th>
                <th>{this.props.messages[1].name}</th>
                <th>{this.props.messages[1].institute}</th>
              </tr>

              <tr>
                <th>{this.props.messages[2].date}</th>
                <th>{this.props.messages[2].name}</th>
                <th>{this.props.messages[2].institute}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default LatestMessages;
