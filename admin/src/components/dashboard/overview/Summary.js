import React, { Component } from "react";

class Summary extends Component {
  render() {
    return (
      <div className="summary card">
        <div className="card-content">
          <header>
            <h3>Donations</h3>
          </header>
          <div className="this-week">
            <h4>Donated this week</h4>
            <p>12.50$</p>
          </div>
          <div className="this-month">
            <h4>Donated this month</h4>
            <p>122.50$</p>
          </div>
          <div className="total">
            <h4>Donated in total</h4>
            <p>28222.50$</p>
          </div>
          <div className="month-graph">
            <h4>Donated by month</h4>
            <div>
              <canvas />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Summary;
