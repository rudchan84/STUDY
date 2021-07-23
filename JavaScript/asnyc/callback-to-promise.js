// 자바스크립트 12. 프로미스 개념부터 활용까지 JavaScript Promise
// === Callback Hell example ===
// 가독성이 낮다
// 비즈니스 로직을 한눈에 이해하기 어렵다
// 에러발생이나 디버깅 시 처리가 어렵다
// 유지보수 어렵다
// class make
class UserStorage {
	loginUser(id, password) {
		return new Promise((resolve, reject) => {
			setTimeout(() => { 
				if (
					(id === 'ellie' && password === 'dream') ||
					(id === 'coder' && password === 'academy')
				) {
					resolve(id);
				} else {
					reject(new Error('not found'));
				}
			}, 2000);
		})
	}

	getRoles(user) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (user === 'ellie') {
					resolve({ name: 'ellie', role: 'admin' });
				} else {
					reject(new Error('access deny'));
				}
			}, 1000);
		})
	}
};

// logic start
const userStorage = new UserStorage();
const id = prompt('Enter ID');
const pw = prompt('Enter PW');

// userStorage
// 	.loginUser(id, pw)
// 	.then(userStorage.getRoles)
// 	.then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
// 	.catch(console.log);

// 위의 내용을 async, await로
function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function loginUserAF(id, password) {
	await delay(3000);
	if (
		(id === 'ellie' && password === 'dream') ||
		(id === 'coder' && password === 'academy')
	) {
		return id;
	} else {
		return new Error(`${id} ${pw} Not Found`);
	}
}

async function getRolesAF(user) {
	await delay(1000);
	if (user === 'ellie') {
		return {name: 'ellie', role: 'admin'};
	} else {
		return new Error(`Access Deny`);
	}
}

loginUserAF(id, pw)
	.then(getRolesAF)
	.catch(error => {return})
	.then(a => console.log(`Hello ${a.name}, you have a ${a.role} role`));
	//.then(getRolesAF);
	//.then(console.log(`Hello ${user.name}, you have a ${user.role} role`));
//getRolesAF('ellie').then(console.log);