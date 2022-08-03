const loginForm = document.querySelector("#login-form");
const loginFormInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//string만 포함된 변수는 대문자로 표기
//중요하지 않은 정보
//Error 확인 ★
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onLoginSubmit(event){
	event.preventDefault();
	loginForm.classList.add(HIDDEN_CLASSNAME);
	localStorage.setItem(USERNAME_KEY, loginFormInput.value);
	//loginSayHello.innerHTML = 'Hello ' + username; //아래 형식으로 사용하자
	// greeting.innerText = `Hello ${username}`;
	// greeting.classList.remove(HIDDEN_CLASSNAME);
	paintGreeting();
}

function paintGreeting () {
	const username = localStorage.getItem(USERNAME_KEY);
	greeting.innerText = `Hello ${username}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

console.log(savedUsername);
console.log(greeting);

if (savedUsername === null) {
	//show the form
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit)
}	else {
	//show the greetings
	paintGreeting();
	}

