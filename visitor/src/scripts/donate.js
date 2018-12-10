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

// Save data to sessionStorage
sessionStorage.setItem("key", "value");
const step1Button = document.querySelector("#step-1 .step1Button");

step1Button.addEventListener("click", proceedToStep2);

function proceedToStep2() {
  const donationInput = document.querySelector("#step-1 .slider");
}

// Get saved data from sessionStorage
var data = sessionStorage.getItem("key");

// Remove saved data from sessionStorage
sessionStorage.removeItem("key");

// Remove all saved data from sessionStorage
sessionStorage.clear();
