// 자바스크립트 11. 비동기 처리의 시작 콜백 이해하기, 콜백 지옥 체험 😱 JavaScript Callback
'use strict';

// JavaScript is synchronous.
// Execute the code block in order after hoisting.
// hoisting 된 이후부터 code가 우리가 작성한 순서대로 동기적으로 실행
// hoisting : var, function declaration 이 자동으로 맨 위로 올려지는 것

// callback function : 우리가 전달한 함수를 나중에 불러줘

// 동기적 실행방법
console.log('1');
console.log('2');
console.log('3');

// 비동기적인 실행방법
console.log('4');
setTimeout(() => console.log('5'), 1000);
console.log('6');

// === Synchronous callback ===
// printImmediately 함수선언
function printImmediately(print) {
	print();
}

// printImmediately 함수호출
printImmediately(() => console.log('hello'));

// === Asynchronous callback ===
// printWithDelay 함수선언
function printWithDelay(print0, timeout0) {
	setTimeout(print0, timeout0);
}

// printWithDelay 함수호출
printWithDelay(() => console.log('async callback'), 2000);

// === Callback Hell example ===
// 가독성이 낮다
// 비즈니스 로직을 한눈에 이해하기 어렵다
// 에러발생이나 디버깅 시 처리가 어렵다
// 유지보수 어렵다
// class make
class UserStorage {
	loginUser(id, password, onSuccess, onError) {
		setTimeout(() => { // BackEnd가 없으므로 타임아웃을 주면서 네트워크 통신을 하는 척 ~
			if (
				(id === 'ellie' && password === 'dream') ||
				(id === 'coder' && password === 'academy')
			) {
				onSuccess(id);
			} else {
				onError(new Error('not found'));
			}
		}, 2000);
	}

	getRoles(user, onSuccess, onError) { // 한꺼번에 받아오는게 좋지만 예제를 위해 나쁜 backend를 사용해 보자.
		setTimeout(() => {
			if (user === 'ellie') {
				onSuccess({ name: 'ellie', role: 'admin' });
			} else {
				onError(new Error('access deny'));
			}
		}, 1000);
	}
}

// logic start
const userStorage = new UserStorage();
const id = prompt('Enter ID');
const pw = prompt('Enter PW');
userStorage.loginUser(
	id, 
	pw, 
	user => {
		userStorage.getRoles(
			user, 
			userWithRole => {
				alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
			}, 
			error => {console.log(error);}
		)
	}, 
	error => {console.log(error)}
);

