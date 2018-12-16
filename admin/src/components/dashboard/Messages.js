import React, { Component } from "react";
import Messagelist from "./messages/Messagelist";

//Show all messages
class Messages extends Component {
  render() {
    return (
      <div>
        <h2 className="dashboard-title">Messages</h2>
        <Messagelist />
      </div>
    );
  }
}

export default Messages;
