// 자바스크립트 5. Arrow Function은 무엇인가? 함수의 선언과 표현
// Function
// - fundamental building block in the program (프로그램을 구성하는 기본적인 building block)
// - SubProgram can be used multiple times (여러번 재사용 가능한 장점)
// - performs a task or calculates a value (한가지의 task나 값을 계산하는 데 쓰임)

// 1. Function declaration (펑션 정의)
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
  console.log('Hello');
}
printHello();

function log(message) {
	console.log(message);
}

log('message hi');

// 2. Parameters
// premitive parameters: passed by value (메모리에 value가 저장되어 있기 때문에 value를 그대로 전달)
// object parameters: passed by reference (메모리에 reference가 저장되어 있기 때문에 reference를 전달)
function changeName(obj) {
	obj.name = 'coder';
}
const ellie = {name : 'ellie'};
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
	console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// ES6 이전의 코드
function showMessage(message, from) {
	if (from === undefined) {
		from = 'unknown';
	}
	console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
	for (let i = 0; i < args.length; i++) {
		console.log(args[i]);
	}

	// 위를 아래와 같이 사용가능
	for (const arg of args) {
		console.log(arg);
	}

	args.forEach((arg) => console.log(arg));
}
printAll('dream','coding','ellie');

// 5. Local scope (밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.)
let globalMessage = 'global'; // global variable
function printMessage() {
	let message = 'hello';
	console.log(message); // local variable
	console.log(globalMessage);
}
printMessage();

// 6. Return a value (default 값 : undefined)
function sum(a,b) {
	return a + b;
}
const result = sum(1,2); // 3
console.log(`sum: ${sum(1,2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
	if (user.point > 10) {
		// long upgrade logic...
	}
}

// good
function upgradeUser(user) {
	if (user.point <= 10) {
		return;
	}
	// long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assinged as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// 함수를 선언하기 전에 호출할 수 있는데, JavaScript Engeen이 선언하는 것을 제일 위로 올려주기 때문
// a function expresstion is created when the execution reaches it.
const print = function () { // anonymous function
	console.log('print1');
};
print(); // print1
const printAgain = print;
printAgain(); // print1
const sumAgain = sum;
console.log(sumAgain(1,3)); // 4

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
	if (answer === 'love you') {
		printYes();
	} else {
		printNo();
	}
}

// anonymous function
const printYes = function () {
	console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions (함수 안에서 함수자신을 호출하는 것, 무한루프 가능성 있음)
const printNo = function print() {
	console.log('no!');
};
randomQuiz('wrong',printYes,printNo);
randomQuiz('love you',printYes,printNo);

// Arrow function
// always anonymous

// 아래와같이 간략하게 표현가능
//const simplePrint = function () {
//	console.log('simplePrint!');
//}

const simplePrint = () => console.log('simeplePrint!');

// 아래와같이 간략하게 표현가능
//const add = function (a, b) {
//	return a + b;
//}

const add = (a, b) => a + b;

// 괄호를 쓸 수 있으며, return을 해 줘야 함
const simpleMultiply = (a, b) => {
	// do something more
	return a * b;
}

// IIFE: Immediately Invoked Function Expression
// 함수 바로 호출하기 (요즘 잘 쓰이지는 않음)
(function hello() {
	console.log('IIFE');
})();

// Fun Quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

const calculate = (command, a, b) => {
	switch (command) {
	case 'add':
		return a + b;
		//break;
	case 'substract':
		return a - b;
		//break;
	case 'divide':
		return a / b;
		//break;
	case 'multiply':
		return a * b;
		//break;
	case 'remainder':
		return a % b;
		//break;
	default:
		return 'unknown command!';
		//break;
	}
}
console.log(calculate('rem1ainder',5,2));