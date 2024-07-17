// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const passwordConfirmInput = document.querySelector("#password-confirm-input");

// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");

// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// add callback function for firstNameInput.onkeyup event
firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};

emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
};

passwordInput.onkeyup = () => {
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");
};

passwordConfirmInput.onkeyup = () => {
  passwordConfirmInput.classList.remove("is-valid");
  passwordConfirmInput.classList.remove("is-invalid");
};

// add callback function for submit button.
submitBtn.onclick = () => {
  isFirstNameOk = false;
  isLastNameOk = false;
  isEmailOk = false;
  isPasswordOk = false;
  isPasswordConfirmOk = false;

  // validate first name
  if (firstNameInput.value.length <= 0) {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  if (lastNameInput.value.length <= 0) {
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  }

  if (validateEmail(emailInput.value)) {
    emailInput.classList.add("is-valid");
    isEmailOk = true;
  } else {
    emailInput.classList.add("is-invalid")
  }

  if (passwordInput.value.length < 6) {
    passwordInput.classList.add("is-invalid");
  } else {
    passwordInput.classList.add("is-valid");
    isPasswordOk = true;
  }

  if (passwordConfirmInput.value !== passwordInput.value || passwordConfirmInput.value.length == 0) {
    passwordConfirmInput.classList.add("is-invalid");
  } else {
    passwordConfirmInput.classList.add("is-valid");
    isPasswordConfirmOk = true;
  }

  if (isFirstNameOk && isLastNameOk && isEmailOk && isPasswordOk && isPasswordConfirmOk == true) alert("Registered successfully");
};

resetBtn.onclick = () => {
  firstNameInput.value = "";
  lastNameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  passwordConfirmInput.value = "";

  isFirstNameOk = false;
  isLastNameOk = false;
  isEmailOk = false;
  isPasswordOk = false;
  isPasswordConfirmOk = false;

  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");

  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");

  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");

  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");

  passwordConfirmInput.classList.remove("is-valid");
  passwordConfirmInput.classList.remove("is-invalid");

}
