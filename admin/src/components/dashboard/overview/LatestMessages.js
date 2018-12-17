import React, { Component } from "react";

//Display the latest three messages
class LatestMessages extends Component {
  render() {
    const latestThreeMessages = this.props.messages ? (
      this.props.messages.map((message, i) => {
        return i < 3 ? (
          <tr key={message.id}>
            <td>{message.date}</td>
            <td>{message.name}</td>
            <td>{message.institute}</td>
          </tr>
        ) : null;
      })
    ) : (
      <tr>
        <th>Loading</th>
      </tr>
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
