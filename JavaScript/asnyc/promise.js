// 자바스크립트 12. 프로미스 개념부터 활용까지 JavaScript Promise
'use strict';

// Promise is a JavaScript object for asynchronous operation.
// 비동기적인 것을 수행할 때 콜백함수 대신에 유용하게 사용

// point
// 1. state (상태)
// 2. producer / consumer 의 차이점

// state: pending -> fullfilled or rejected
// Producer vs Consumer

// 1. Producer
// When new Promise is created, the executor runs authomatically. 중요
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
	// 네트워크 통신이나 파일에서 무엇인가를 읽어올 때 시간이 걸림
	// 이런 것을 동기적으로 하면 다음 코드가 실행되는데 시간이 지체되기 때문에
	// 시간이 걸리는 것들은 promise를 통해 비동기적으로 처리하는 것이 좋다.

	// promise 는 만들자마자 실행이 되기 때문에
	// 사용자가 버튼을 눌렀을 때만 네트워크 통신을 해야 되는 로직 같은 것에 사용은 좋지 않다.
	console.log('doing something...');
	setTimeout(() => {
		resolve('ellie');
		//reject(new Error('No network'));
	}, 2000);
})

// 2. Consumers: then(성공 시 수행 / 값전달 promise 전달 가능), catch(에러 시 수행), finally(성공,실패 상관없이 마지막에 수행)
promise
	.then((value0) => {
	console.log(value0);
	})
	.catch(error => {
		console.log(error);
	})
	.finally(() => {
		console.log('finally');
	});

// 3. Promise chaining
const fetchNumber = new Promise((resolve1, reject1) => {
	setTimeout(() => resolve1(1), 1000);
});

fetchNumber
	.then(num => num * 2)
	.then(num => num * 3)
	.then(num => {
		return new Promise((resolve2, reject2) => {
			setTimeout(() => resolve2(num -1), 1000);
		});
	})
	.then(num => console.log(num));

// 4. Error Handling
const getHen = () =>
	new Promise((resolve, reject) => {
		setTimeout(() => resolve('🐓'), 1000);
	});
const getEgg = hen =>
	new Promise((resolve, reject) => {
		//setTimeout(() => resolve(`${hen} => 🥚`), 1000);
		setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
	});
const cook = egg => 
	new Promise((resolve, reject) => {
		setTimeout(() => resolve(`${egg} => 🍳`), 1000);
	});

getHen()
	.then(a => getEgg(a))
	.catch(error => { // 윗줄에서 에러 발생 시 에러 처리하기 
		return '🍞';
	})
	.then(b => cook(b))
	.then(c => console.log(c))
	.catch(console.log);
//한가지 값만 받아오는 경우 아래와 같이 생략이 가능
	//getHen()
	//.then(getEgg)
	//.then(cook)
	//.then(console.log);

