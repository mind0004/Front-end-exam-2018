const submitButton = document.querySelector("input[type='submit']");
const submit = document.querySelector("form .submit");
const checking = document.querySelector("form .checking");
const submitContainer = document.querySelector("form .submit .container");

submitButton.addEventListener("click", handleSubmitClick);

//Handle the click on the submit button
function handleSubmitClick(e) {
  e.preventDefault();

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
