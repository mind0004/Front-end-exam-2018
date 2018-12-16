import React, { Component } from "react";

//Donator component to display each donator
class Donator extends Component {
  render() {
    return (
      <tr className="donator">
        <td className="date">{this.props.donation.date}</td>
        <td className="name">{this.props.donation.name}</td>
        <td className="email">{this.props.donation.email}</td>
        <td className="type">{this.props.donation.type}</td>
        <td className="amount">
          {this.props.donation.amount + this.props.donation.currency}
        </td>
      </tr>
    );
  }
}

export default Donator;
