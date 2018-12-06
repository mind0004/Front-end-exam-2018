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
                  <option value="institute">Institute</option>
                </select>
              </div>
            </header>

            <table>
              <tbody>
                <tr>
                  <th className="date active">Date</th>
                  <th className="email">E-mail</th>
                  <th className="institute">Institute</th>
                  <th className="name">Name</th>
                  <th className="message">Message</th>
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