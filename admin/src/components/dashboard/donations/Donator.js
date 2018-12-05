import React, { Component } from "react";

class Donator extends Component {
  render() {
    return (
      <div id="donator">
        <div>
          <p className="date">12/11/2018</p>
          <p className="name">Johhny Johsen</p>
          <p className="email">johnsen@hotmail.com</p>
          <p className="type">One-time</p>
          <p className="amount">20$</p>
        </div>
      </div>
    );
  }
}

export default Donator;
