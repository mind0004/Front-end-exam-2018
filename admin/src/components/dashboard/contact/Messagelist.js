import React, { Component } from "react";
import Message from "./Message";
import { connect } from "react-redux";

class Messagelist extends Component {
  render() {
    const allMessages = this.props.messages.map(message => {
      return <Message key={message.id} message={message} />;
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
                  <th>E-mail</th>
                  <th>Institute</th>
                  <th>Message</th>
                  <th>Susan Boyle</th>
                </tr>
                {allMessages}
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
    messages: state.messages
  };
};

export default connect(mapStatetoProps)(Messagelist);
