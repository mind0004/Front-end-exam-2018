// FIREBASE
var config = {
  apiKey: "AIzaSyBrTXlPTks8CPKRbZBSDnTXpPaotL4Wpwg",
  authDomain: "polyeco-eda86.firebaseapp.com",
  databaseURL: "https://polyeco-eda86.firebaseio.com",
  projectId: "polyeco-eda86",
  storageBucket: "polyeco-eda86.appspot.com",
  messagingSenderId: "86781747630"
};
firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

//Get overview of latets three donations and top three donators
function getOverview() {
  db.collection("overview_visitor")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log("Your document data is: ", doc.data());
      });
    })
    .catch(function(error) {
      console.log("Error getting documents: ", error);
    });
}
getOverview();

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

// For slider to show input visually

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

// Open/close period dropdown (monthly, yearly)
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

  // A data object to be stored
  const step1Data = {
    amount: donationInput.value,
    type: type,
    currency: "$"
  };

  sessionStorage.setItem("step1Data", JSON.stringify(step1Data));
}
