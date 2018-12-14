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
const checking = document.querySelector("form .checking");
const submitContainer = document.querySelector("form .submit .container");

submitButton.addEventListener("click", handleSubmitClick);

//Handle the click on the submit button
function handleSubmitClick(e) {
  e.preventDefault();
  createNewMessage(e);
  animateChecking();
}

//Checking for submit
function animateChecking() {
  submit.classList.add("move-up");
  checking.classList.add("active");

  setTimeout(animateSuccess, 2000);
}

//Submit was successfull, display the success
function animateSuccess() {
  submitContainer.classList.add("send");
  checking.classList.add("send");
}

//FIREBASE CREATE MESSAGE

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

function createNewMessage(e) {
  const timestamp = +new Date();
  e.preventDefault();
  db.collection("messages")
    .add({
      date: moment()
        .subtract(10, "days")
        .calendar(),
      institute: instituteInput.value,
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value,
      timestamp: timestamp
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
}
