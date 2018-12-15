import React, { Component } from "react";

class LatestMessages extends Component {
  render() {
    const latestThreeMessages = this.props.messages ? (
      this.props.messages.map((message, i) => {
        if (i < 3) {
          return (
            <tr key={message.id}>
              <th>{message.date}</th>
              <th>{message.name}</th>
              <th>{message.institute}</th>
            </tr>
          );
        }
      })
    ) : (
      <p>Loading</p>
    );

    //console.log(this.props.messages);
    return (
      <div className="recurring-donations card">
        <h2>Latest messages</h2>
        <div className="card-content">
          <table>
            <tbody>{latestThreeMessages}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default LatestMessages;
