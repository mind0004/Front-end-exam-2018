import React, { Component } from "react";
import { Line } from "react-chartjs-2";

//Display the summary with this week, this month, in total and overview of last months
class Summary extends Component {
  render() {
    console.log(this.props.overview);

    const currency = this.props.overview.currency;

    const chartData = {
      labels: this.props.overview.donationsByMonth.map(elem => elem.month),
      datasets: [
        {
          label: "Donation in " + currency,
          fill: false,
          lineTension: 0,
          backgroundColor: "#F2EA2A",
          borderColor: "#F2EA2A",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "white",
          pointBackgroundColor: "#00ABD6",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#F2EA2A",
          pointHoverBorderColor: "white",
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          pointHitRadius: 10,
          data: this.props.overview.donationsByMonth.map(elem => elem.amount)
        }
      ]
    };

    const chartOptions = {
      maintainAspectRatio: true,
      tooltips: {
        mode: "label",
        callbacks: {
          label: function(tooltipItems, data) {
            return "Donation: " + tooltipItems.yLabel + currency;
          }
        },
        backgroundColor: "#f6f6f6",
        borderColor: "green",
        titleFontColor: "#464646",
        bodyFontColor: "#464646"
      },
      scales: {
        yAxes: [
          {
            ticks: {
              min: 0, // it is for ignoring negative step.
              beginAtZero: true
            },
            gridLines: {
              display: true,
              color: ["rgba(0,0,0,0)"]
            }
          }
        ],
        xAxes: [
          {
            gridLines: {
              display: false
            }
          }
        ]
      }
    };

    console.log(this.props.overview);
    return (
      <div className="summary card">
        <div className="card-content">
          <header>
            <h3>Donations</h3>
          </header>
          <div className="this-week">
            <h4>Donated this week</h4>
            <p>{this.props.overview.thisWeek + this.props.overview.currency}</p>
          </div>
          <div className="this-month">
            <h4>Donated this month</h4>
            <p>
              {this.props.overview.thisMonth + this.props.overview.currency}
            </p>
          </div>
          <div className="total">
            <h4>Donated in total</h4>
            <p>{this.props.overview.inTotal + this.props.overview.currency}</p>
          </div>
          <div className="month-graph">
            <h4>Donated by month</h4>
            <Line
              data={chartData}
              options={chartOptions}
              width={1600}
              height={600}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Summary;
