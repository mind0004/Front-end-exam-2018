import React, { Component } from "react";

//Display the latest three messages
class LatestMessages extends Component {
  render() {
    const latestThreeMessages = this.props.messages ? (
      this.props.messages.map((message, i) => {
        return i < 3 ? (
          <tr key={message.id}>
            <th>{message.date}</th>
            <th>{message.name}</th>
            <th>{message.institute}</th>
          </tr>
        ) : (
          <p />
        );
      })
    ) : (
      <p>Loading</p>
    );

    //console.log(this.props.messages);
    return (
      <div className="latest-messages card">
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
