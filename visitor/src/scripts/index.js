//Lars

/* ==========================================================================
   Global variables
   ========================================================================== */
const chartCanvas = document.querySelector("#myChart");
const timelineCheckBoxes = document.querySelectorAll(
  ".research-state .timeline .check"
);
const timelineLine = document.querySelector(".research-state .timeline .line");
let wasteChart, scrollPositionInterval;
/* ==========================================================================
   Initialize
   ========================================================================== */
document.addEventListener("DOMContentLoaded", init);
function init() {
  //do stuff after page has loaded

  //Draw chart WITHOUT lines
  drawInitalChart();
  const doc = document.documentElement;
  console.log(chartCanvas.getBoundingClientRect());
  //Check if chart is visible on the screen, if yes, draw lines
  scrollPositionInterval = setInterval(() => {
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop; //current scroll pos
    if (
      scrollPos >
      chartCanvas.getBoundingClientRect().top +
        chartCanvas.getBoundingClientRect().height
    ) {
      // chart is visible
      updateChart(); //draw lines
    }

    if (
      scrollPos >
      timelineCheckBoxes[timelineCheckBoxes.length - 1].getBoundingClientRect()
        .top +
        550
    ) {
      //timeline is visible
      animateTimeline();
      clearInterval(scrollPositionInterval); //stop interval
    }
  }, 1000);
}

/* ==========================================================================
   Functions
   ========================================================================== */

//Draw initial chart, but dont populate yet
function drawInitalChart() {
  console.log("drawcanvas");
  Chart.defaults.global.animation.duration = 3000; //Chart draw speed
  wasteChart = new Chart(chartCanvas.getContext("2d"), {
    defaults: {
      global: {
        animation: {
          duration: 7000
        }
      }
    },
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
          padding: 10
        }
      }
    }
  });
}

//populate chart with data for visual drawing effects
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

//Animate timeline line and checkboxes
function animateTimeline() {
  console.log("Animate timeline");
  let i = 0;
  const amountOfBoxesToFill = 3; //Amount of checkboxes to fill
  drawBox();
  const checkBoxInterval = setInterval(drawBox, 800);

  function drawBox() {
    if (i < amountOfBoxesToFill) {
      //Fill next checkbox
      timelineCheckBoxes[i].classList.add("active");
    } else {
      //Stop checkbox filling
      clearInterval(checkBoxInterval); //stop interval
    }
    ++i;
  }

  timelineLine.style.transition = `all ${timelineCheckBoxes.length}s`;
  timelineLine.style.height = "100%";
}
