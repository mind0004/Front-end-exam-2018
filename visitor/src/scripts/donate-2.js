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

//////////////////////////////////////////

// Validator.js input validation

const nameInput = document.querySelector("#step-2 input[name='name']");
const emailInput = document.querySelector("#step-2 input[name='email']");
const cardHolderNameInput = document.querySelector(
  "#step-2 input[name='cardname']"
);
const cardNumberInput = document.querySelector(
  "#step-2 input[name='cardnumber']"
);
const cardMonthInput = document.querySelector(
  "#step-2 input[name='cardmonth']"
);
const cardYearInput = document.querySelector("#step-2 input[name='cardyear']");
const cardCvvInput = document.querySelector("#step-2 input[name='cvv']");

const submitButton = document.querySelector(".submit");
const submit = document.querySelector("form .submit");
const paymentForm = document.querySelector("#step-2 #paymentForm");
const errorMessage = document.querySelector("form .error-message");
const checking = document.querySelector("form .checking");
const submitContainer = document.querySelector("form .submit .container");

// Look through the form when clicked, display any errors. If no errors were found, go to createDonation();
paymentForm.addEventListener("submit", handleSubmitClick);

function handleSubmitClick(e) {
  e.preventDefault();
  errorMessage.innerHTML = "";
  //Activate loading animation
  submit.classList.add("move-up");
  checking.classList.add("active");

  //Check
  setTimeout(checkingForm, 1000);
}

//Checking for submit, display loading
function checkingForm() {
  let inputsValid = true;
  let error = []; //Store all error massages inside here

  /*
    BUGFIX - Removed because wrong validator and when user is anyonymous, dont check for any length
  if (!validator.isByteLength(nameInput.value, { min: 3 })) {
    //invalid name
    inputsValid = false;
    error.push("- Name has to be at least 3 characters");
  }
  */
  if (!validator.isEmail(emailInput.value)) {
    //invalid invalid email
    inputsValid = false;
    error.push("- Invalid email");
  }

  if (
    !validator.isNumeric(cardNumberInput.value) ||
    cardNumberInput.value.length != 16
  ) {
    //invalid card holder name
    inputsValid = false;
    error.push("- Card number has to be 16 characters");
  }

  if (
    !validator.isNumeric(cardMonthInput.value) ||
    cardMonthInput.value.length < 2
  ) {
    //invalid card month
    inputsValid = false;
    error.push("- Please specify the month by two numeric characters");
  }

  if (
    !validator.isNumeric(cardYearInput.value) ||
    cardYearInput.value.length < 2
  ) {
    //invalid card year
    inputsValid = false;
    error.push("- Please specify the exact year of expiration");
  }

  if (!validator.isNumeric(cardCvvInput.value, { min: 3 })) {
    //invalid card CVV
    inputsValid = false;
    error.push("- CVV has to be 3 characters");
  }

  //inputsValid = true;

  if (inputsValid) {
    //inputs are valid, continue
    createDonation();
  } else {
    //inputs are invalid, reject
    checkingError();
    console.log(error);
    errorMessage.innerHTML = error.join("<br>");
  }
}

//Submit was successfull, display the success
function checkingSuccess() {
  submitContainer.classList.add("send");
  checking.classList.add("send");
}

//Submit failed due input errors, revert to button
function checkingError() {
  submit.classList.remove("move-up");
  checking.classList.remove("active");
}

/////////////////////////////////////////////////////////////

// No errors were found, this function fires off
function createDonation() {
  console.log("RUUN");

  // Session storage from step-1.html, amount of donation + donation type
  const step1Data = JSON.parse(sessionStorage.getItem("step1Data"));

  const checkBox = document.querySelector("#step-2 #subcheckbox");
  const name = checkBox.checked ? "Anonymous" : nameInput.value;
  const timestamp = +new Date();

  // moment.js real time show
  const dateToday = moment().format("DD/MM/YYYY");

  // Add information to firebase
  db.collection("donations")
    .add({
      date: dateToday,
      name: name,
      email: emailInput.value,
      amount: step1Data.amount,
      currency: step1Data.currency,
      type: step1Data.type,
      timestamp: timestamp
    })
    .then(function(docRef) {
      window.location = "../donate/step-3.html";
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
}
