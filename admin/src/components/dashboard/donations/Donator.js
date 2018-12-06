import React, { Component } from "react";

class Donator extends Component {
  render() {
    return (
      <div id="donator">
        <div>
          <p className="date">{this.props.donation.date}</p>
          <p className="name">{this.props.donation.name}</p>
          <p className="email">{this.props.donation.email}</p>
          <p className="type">{this.props.donation.type}</p>
          <p className="amount">
            {this.props.donation.amount + this.props.donation.currency}
          </p>
        </div>
      </div>
    );
  }
}

export default Donator;
