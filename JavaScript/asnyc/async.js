// 자바스크립트 13. 비동기의 꽃 JavaScript async 와 await 그리고 유용한 Promise APIs
'use strinct'

// async & await
// clear style of useing promise :)

// 1. async
// function fetchUser() {
// 	// do network requst in 10 secs....
// 	// 사용자 정보 가져오는데 10초 걸리는데
// 	// 동기적으로 처리한다면 사용자는 10초 동안 텅텅 빈 웹페이지를 보게 될 것이다.
// 	//return 'ellie';

// 	// 그래서 사용하는 Promise
// 	return new Promise((resolve, reject) => {
// 		// do network request in 10 secs....
// 		resolve('ellie');
// 	})
// }

// async라는 키워드를 앞에 넣으면 자동으로 Promise로 바뀌는 기능(?)
// 위와 같은 Promise를 아래처럼 사용가능
async function fetchUser() {
	// do network request in 10 secs....
	return 'ellie';
}

const user = fetchUser();
console.log(user);
user.then(console.log);
console.log(user);

// 2. await ✨
// async가 있는 함수 안에서만 사용가능
function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
	await delay(3000);
	return '🍎';
}

async function getBanana() {
	await delay(3000);
	return '🍌';
}

// 6초 후에 리턴
async function pickFruits() {
	const apple = await getApple();
	const banana = await getBanana();
	return `${apple} + ${banana}`;
}

// 두개를 병렬로 처리하려면?
async function pickFruits() {
	const applePromise = getApple();
	const bananaPromise = getBanana();
	const apple = await applePromise;
	const banana = await bananaPromise;
	return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs ✨
// 위 병렬처리를 간단하게
function pickAllFruits() {
	return Promise.all([getApple(), getBanana()]) // array로 전달해서
	.then(fruits => fruits.join(' ++ ')); // string으로 변환해주는 join 사용
}

pickAllFruits().then(console.log);

// 먼저 따지는 첫번째 과일만 가져오겠다.
function pickOnlyOne() {
	return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);