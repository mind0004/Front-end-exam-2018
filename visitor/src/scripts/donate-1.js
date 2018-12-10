//Mini

/* ==========================================================================
   Global variables
   ========================================================================== */
const body = document.querySelector("body");

/* ==========================================================================
      Initialize
      ========================================================================== */
document.addEventListener("DOMContentLoaded", init);
function init() {
  //do stuff after page has loaded
}

/* ==========================================================================
      Functions
      ========================================================================== */
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
};

//Change monthly/yearly
let dropdownOpen = false;
let currentPeriod = "monthly";
const dropdown = document.querySelector("#step-1 .dropdown");
let dropdownLIS;
const dropdownUL = document.querySelector("#step-1 .dropdown ul");

//Open/close period dropdown
dropdown.addEventListener("click", toggleDropdown);

function toggleDropdown() {
  if (dropdownOpen) {
    //close dropdown
    dropdown.style.removeProperty("height");
  } else {
    //open dropdown
    dropdown.style.height = "42px";
  }
  dropdownOpen = !dropdownOpen;
}

//Change between period with refreshing onclick
function addClickEventToLI() {
  dropdownLIS = document.querySelectorAll("#step-1 .dropdown li");
  dropdownLIS.forEach(li => {
    li.addEventListener("click", togglePeriod);
  });
}
addClickEventToLI();
function togglePeriod(e) {
  console.log(e.target.textContent);
  currentPeriod = e.target.textContent;
  if (currentPeriod === "monthly") {
    dropdownUL.innerHTML = `<li><strong>monthly</strong></li><li><strong>yearly</strong></li>`;
  } else {
    dropdownUL.innerHTML = `<li><strong>yearly</strong></li><li><strong>monthly</strong></li>`;
  }
  addClickEventToLI();
}

//############################################
//Session storage

// Save data to sessionStorage
const step1Button = document.querySelector("#step-1 .step1Button");

step1Button.addEventListener("click", proceedToStep2);

function proceedToStep2() {
  const donationInput = document.querySelector("#step-1 .slider");
  const checkBox = document.querySelector("#step-1 #checkbox");
  const type = checkBox.checked ? currentPeriod : "one-time";

  const step1Data = {
    amount: donationInput.value,
    type: type,
    currency: "$"
  };

  sessionStorage.setItem("step1Data", JSON.stringify(step1Data));
}

/*
// Get saved data from sessionStorage
var data = sessionStorage.getItem("key");

// Remove saved data from sessionStorage
sessionStorage.removeItem("key");

*/
