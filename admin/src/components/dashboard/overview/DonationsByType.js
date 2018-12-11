import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

class DonationsByType extends Component {
  render() {
    const chartData = {
      labels: ["One-time", "Monthly", "Yearly"],
      datasets: [
        {
          data: [
            this.props.overview.donationsByType.oneTime,
            this.props.overview.donationsByType.monthly,
            this.props.overview.donationsByType.yearly
          ],
          backgroundColor: ["#0F718C", "rgba(89, 192, 217, 1)", "#94E8FF"],
          hoverBackgroundColor: [
            "rgba(15, 113, 140, 0.66)",
            "rgba(89, 192, 217, 0.66)",
            "rgba(148, 232, 255, 0.67)"
          ]
        }
      ]
    };

    const chartOptions = {
      legendCallback: function(chart) {
        console.log(chart.dataset);
      },
      responsive: true,
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 20,
          padding: 20
        }
      }
    };

    return (
      <div className="donations-by-type card">
        <h2>Donations by type</h2>
        <div className="card-content">
          <div>
            <Doughnut data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
    );
  }
}

export default DonationsByType;
