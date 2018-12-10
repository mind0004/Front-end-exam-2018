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

const nameInput = document.querySelector("#step-2 input[name='name']");
const emailInput = document.querySelector("#step-2 input[name='email']");

const step2Button = document.querySelector("#step-2 .step2Button");

step2Button.addEventListener("click", createDonation);

function createDonation(e) {
  e.preventDefault();

  console.log("RUUN");

  const step1Data = JSON.parse(sessionStorage.getItem("step1Data"));
  const checkBox = document.querySelector("#step-2 #subcheckbox");
  const name = checkBox.checked ? "Anonymous" : nameInput.value;

  db.collection("donations")
    .add({
      date: moment()
        .subtract(10, "days")
        .calendar(),
      name: name,
      email: emailInput.value,
      amount: step1Data.amount,
      currency: step1Data.currency,
      type: step1Data.type
    })
    .then(function(docRef) {
      window.location = "../donate/step-3.html";
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
}