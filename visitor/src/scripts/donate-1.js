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
  getOverview(); //get latest donors and top donors
}

/* ==========================================================================
      Functions
      ========================================================================== */
const slider = document.getElementById("myRange");
const sliderInput = document.querySelector(".slidecontainer .amount input");
const sliderInputLine = document.querySelector(".slidecontainer .amount .line");
let allowStep2 = true;

slider.oninput = function() {
  console.log(this.value);
  sliderInput.value = this.value;
};

sliderInput.addEventListener("input", checkInput);

//Check input for number and handle if not
function checkInput(e) {
  console.log(e.target.value);
  //check if value is a valid number (even number as strings)
  if (isNaN(e.target.value)) {
    //is not a number
    console.log("Not a number");
    allowStep2 = false;
    sliderInputLine.style.background = "red";
    step1Button.style.background = "#acacac";
  } else {
    //is a number
    console.log("Nummberr");
    allowStep2 = true;
    slider.value = e.target.value;
    sliderInputLine.style.removeProperty("background");
    step1Button.style.removeProperty("background");
  }
}

//Change monthly/yearly
let dropdownOpen = false;
let currentPeriod = "monthly";
const dropdown = document.querySelector("#step-1 .dropdown");
let dropdownLIS;
const dropdownUL = document.querySelector("#step-1 .dropdown ul");
const dropdownLine = document.querySelector("#step-1 .dropdown .line");

// Open/close period dropdown (monthly, yearly)
dropdown.addEventListener("click", toggleDropdown);

function toggleDropdown() {
  if (dropdownOpen) {
    //close dropdown
    dropdown.style.removeProperty("height");
    dropdownLine.style.removeProperty("width");
  } else {
    //open dropdown
    dropdown.style.height = "60px";
    dropdownLine.style.width = "0px";
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

function proceedToStep2(e) {
  if (!allowStep2) {
    //if donation amount is not a number, dont allow to continue
    e.preventDefault();
  }

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
<<<<<<< HEAD
=======
let overview = {};
const recentDonorsTemplate = document.querySelector("#recent-donors-template")
  .content;
const topDonorsTemplate = document.querySelector("#top-donors-template")
  .content;

//Get overview of latets three donations and top three donators
function getOverview() {
  db.collection("overview_visitor")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log("Your document data is: ", doc.data());
        overview = doc.data();
        displayRecentDonors();
        displayTopDonors();
      });
    })
    .catch(function(error) {
      console.log("Error getting documents: ", error);
    });
}

function displayRecentDonors() {
  const recentDonors = document.querySelector("#recentdonors-grid");

  overview.latestDonations.forEach(elem => {
    let clone = recentDonorsTemplate.cloneNode(true);
    clone.querySelector(".card-content p").textContent = elem.name;
    clone.querySelector(".card-content2 p").textContent =
      elem.amount + overview.currency;
    recentDonors.appendChild(clone);
  });
}

function displayTopDonors() {
  const topDonors = document.querySelector("#topdonors-grid");

  overview.topDonors.forEach(elem => {
    let clone = topDonorsTemplate.cloneNode(true);
    clone.querySelector(".card-content p").textContent = elem.name;
    clone.querySelector(".card-content2 p").textContent =
      elem.amount + overview.currency;
    topDonors.appendChild(clone);
  });
}
>>>>>>> lars
