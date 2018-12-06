import React, { Component } from "react";
import Messagelist from "./messages/Messagelist";

class Messages extends Component {
  render() {
    return (
      <div>
        <h2>Messages</h2>
        <Messagelist />
      </div>
    );
  }
}

export default Messages;
