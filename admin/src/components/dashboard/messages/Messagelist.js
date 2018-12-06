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
        <div id="message-list">
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
                  <option value="institute">Institute</option>
                </select>
              </div>
            </header>

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
