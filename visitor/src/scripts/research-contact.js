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

//THE REST OF CONTACT.HTML
const submitButton = document.querySelector("input[type='submit']");
const submit = document.querySelector("form .submit");
const errorMessage = document.querySelector("form .error-message");
const checking = document.querySelector("form .checking");
const submitContainer = document.querySelector("form .submit .container");
const instituteInput = document.querySelector(
  "#research-contact input[name='institute']"
);
const nameInput = document.querySelector(
  "#research-contact input[name='name']"
);
const emailInput = document.querySelector(
  "#research-contact input[name='email']"
);
const messageInput = document.querySelector("#research-contact textarea");

submitButton.addEventListener("click", handleSubmitClick);

//Handle the click on the submit button
function handleSubmitClick(e) {
  e.preventDefault();
  errorMessage.innerHTML = "";
  //Activate loading animation
  submit.classList.add("move-up");
  checking.classList.add("active");

  //Check
  setTimeout(checkingForm, 1000);
}

//Checking input fields for submit, display loading
function checkingForm() {
  let inputsValid = true;
  let error = []; //Store all error masssges inside here

  if (!validator.isByteLength(instituteInput.value, { min: 3 })) {
    //institute invalid
    inputsValid = false;
    error.push("- Institute name has to be at least 3 characters");
  }
  if (!validator.isByteLength(nameInput.value, { min: 3 })) {
    //name invalid
    inputsValid = false;
    error.push("- Name has to be at least 3 characters");
  }
  if (!validator.isEmail(emailInput.value)) {
    //email invalid
    inputsValid = false;
    error.push("- Invalid email");
  }
  if (!validator.isByteLength(messageInput.value, { min: 15 })) {
    //message invalid
    inputsValid = false;
    error.push("- Message has to be at least 15 characters");
  }

  //inputsValid = true;

  if (inputsValid) {
    //inputs are valid, continue
    createNewMessage();
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

//FIREBASE CREATE MESSAGE

function createNewMessage() {
  const timestamp = +new Date();
  const dateToday = moment().format("DD/MM/YYYY");
  db.collection("messages")
    .add({
      date: dateToday,
      institute: instituteInput.value,
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value,
      timestamp: timestamp
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      checkingSuccess();
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
      checkingError();
      errorMessage.textContent =
        "Error sending message. Please write directly to hi@polyeco.com";
    });
}
