import React, { Component } from "react";
import moment from "moment";

class DateAndTime extends Component {
  state = {
    date: "",
    time: ""
  };

  componentDidMount() {
    this.timeInterval = setInterval(() => this.tick(), 10000);
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval);
  }

  tick = () => {
    moment.locale();
    const date = moment().format("L");
    const time = moment().format("LT");
    this.setState({
      date,
      time
    });
  };

  render() {
    return (
      <div className="date-and-time">
        <p>
          {this.state.date} - {this.state.time}
        </p>
      </div>
    );
  }
}

export default DateAndTime;
