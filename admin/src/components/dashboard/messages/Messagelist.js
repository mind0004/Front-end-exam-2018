import React, { Component } from "react";
import Message from "./Message";
import { searchByName } from "../../../store/actions/messageAction";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

class MessageList extends Component {
  handleSearchChange = e => {
    this.props.searchByName(e.target.value);
  };

  render() {
    //Check if search results are available
    const searchDataExists = !this.props.messagesSearch
      ? false
      : this.props.messagesSearch.searchByName.length > 0;

    //Display search results or all messages or loading
    const displayMessages = searchDataExists ? (
      this.props.messagesSearch.searchByName.map(message => {
        return <Message key={Math.random()} message={message} />;
      })
    ) : this.props.messages ? (
      this.props.messages.map(message => {
        return <Message key={message.id} message={message} />;
      })
    ) : (
      <tr className="message">
        <td className="date">Loading</td>
      </tr>
    );

    return (
      <div>
        <div id="message-list">
          <div className="card list">
            <div className="card-content">
              <header>
                <div className="search">
                  <div className="input-field">
                    <input
                      type="text"
                      name="search"
                      placeholder=" "
                      onChange={this.handleSearchChange}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 96 109"
                      className="magnifier"
                    >
                      <path d="M96 102L64 62a37 37 0 1 0-9 7l32 40a1 1 0 0 0 2 0l6-5a1 1 0 0 0 1-2zM18 52a24 24 0 1 1 34 4 24 24 0 0 1-34-4z" />
                    </svg>
                    <label>Search by exact name...</label>
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
                  {displayMessages}
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
    messages: state.firestore.ordered.messages,
    messagesSearch: state.messages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchByName: term => dispatch(searchByName(term))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([{ collection: "messages", orderBy: ["timestamp", "desc"] }])
)(MessageList);
