const loginForm = document.querySelector("#login-form");
const loginFormInput = document.querySelector("#login-form input");
const sayHello = document.querySelector("#sayHello");
const USERNAME_KEY = "username";
const HIDDEN_KEY = "hidden";

function greeting(event) {
  event.preventDefault();
  localStorage.setItem(USERNAME_KEY, loginFormInput.value);
  loginFormInput.value = "";
  paintGreeting();
}

function paintGreeting() {
  const savedUserName = localStorage.getItem(USERNAME_KEY);

  if (savedUserName) {
    loginForm.classList.add(HIDDEN_KEY);
    sayHello.classList.remove(HIDDEN_KEY);
    sayHello.innerText = `Hello ${savedUserName}`
  }
}

loginForm.addEventListener("submit",greeting);
paintGreeting();