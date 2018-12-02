//Lars

/* ==========================================================================
   Global variables
   ========================================================================== */
const body = document.querySelector("body");
const chartCanvas = document.querySelector("#myChart");
let wasteChart, wasteChartInterval;
/* ==========================================================================
   Initialize
   ========================================================================== */
document.addEventListener("DOMContentLoaded", init);
function init() {
  //do stuff after page has loaded
  const doc = document.documentElement;

  drawInitalChart();

  wasteChartInterval = setInterval(() => {
    if (
      (window.pageYOffset || document.documentElement.scrollTop) >
      chartCanvas.getBoundingClientRect().top
    ) {
      clearInterval(wasteChartInterval);
      updateChart();
    }
  }, 1000);
}

/* ==========================================================================
   Functions
   ========================================================================== */

//Draw chart
function drawInitalChart() {
  console.log("drawcanvas");
  wasteChart = new Chart(chartCanvas.getContext("2d"), {
    type: "line",
    data: {
      labels: [
        "1950",
        "1960",
        "1970",
        "1980",
        "1990",
        "2000",
        "2010",
        "2020",
        "2030",
        "2040",
        "2050"
      ],
      datasets: [
        {
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          label: "All plastic recycled",
          borderColor: "rgba(0,0,0,0)",
          fill: false
        },
        {
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          label: "Plastic generated",
          borderColor: "rgba(0,0,0,0)",
          fill: false
        }
      ]
    },
    options: {
      bezierCurve: true,
      scales: {
        yAxes: [
          {
            ticks: {
              min: 0,
              max: 28500,
              stepSize: 5000
            },
            scaleLabel: {
              position: "top",
              display: true,
              labelString: "Million metric tons",
              fontStyle: "bold"
            },
            position: "right",
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
      },
      elements: {
        point: {
          radius: 0
        }
      },
      aspectRatio: 1,
      legend: {
        labels: {
          usePointStyle: true,
          padding: 50
        }
      }
    }
  });
}

function updateChart() {
  console.log("update canvas");
  wasteChart.data.datasets[0].borderColor = "#3e95cd";
  wasteChart.data.datasets[0].data = [
    0,
    0,
    0,
    0,
    0,
    0,
    50,
    800,
    2000,
    5000,
    8000
  ];
  wasteChart.data.datasets[1].borderColor = "#8e5ea2";
  (wasteChart.data.datasets[1].data = [
    0,
    0,
    50,
    500,
    1500,
    2500,
    5000,
    8000,
    13000,
    20000,
    26000
  ]),
    wasteChart.update();
}
