// 자바스크립트 7. 오브젝트 넌 뭐니?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
'use strict';
// Objects
// One of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value};

// 1. Literals and properties
// Object 생성
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

// object literal
function print(person) {
	console.log(person.name);
	console.log(person.age);
}

const ellie = {name: 'ellie', age:4};
print(ellie);

// Property 추가
ellie.hasjob = true;
console.log(ellie.hasjob);

// Property 삭제
delete ellie.hasjob;
console.log(ellie.hasjob);

// 2. Computed properties (계산된 properties)
// key should be always string
console.log(ellie.name);
console.log(ellie['name']); // 실시간으로 원하는 키의 값을 받아오고 싶을 때

// 어떨때 Computed properties를 쓰면 좋을까? 아래와같이 동적으로 값을 받아와야 할 때! ★
function printValue(obj, key) {
	console.log(obj[key]);
}

printValue(ellie,'name');
printValue(ellie,'age');

// 대괄호를 이용하여 property 추가
ellie['hasjob'] = true;
console.log(ellie.hasjob);

// 3. Property value shorthand(Key와 Value의 이름이 동일하다면 맨 왼쪽과 같이 줄여쓸 수 있다)
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dave', age: 4};
const person4 = makePerson('ellie',30);
console.log(person4);
// class가 없던 시절 object를 만들던 방법
function makePerson(name, age) {
	return {
		name, // = name: name, (Key와 Value의 이름이 동일하다면 맨 왼쪽과 같이 줄여쓸 수 있다)
		age // = age: age
	}
}

// 4. Constructor Function
// 다른 계산을 하지 않고 순수하게 object를 생성하는 함수
function Person(name, age) {
	// this = {}; 생략됨
	this.name = name;
	this.age = age;
	// return this; 생략됨
}

const person5 = new Person('chan',35);
console.log(person5);

// 5. in operator: property existence check (key in obj)
// 해당 key가 object안에 있는지 확인
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (let localkey in ellie) {
	console.log(localkey);
}

// for (value of iterable)
const array = [1, 2, 3, 4, 8];
for (let localvalue of array) {
	console.log(localvalue);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'ellie', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user); // 뭘까요?

// old way
const user3 = {};
for (let key in user) {
	user3[key] = user[key]
}
console.clear();
console.log(user3);

// new way
const user4 = {};
Object.assign(user4, user);
// 또는 const user4 = Object.assign({}, user); 로도 사용 가능
console.log(user4);

// another example
// 앞의 값을 뒤의 값으로 덮어 씌운다
const fruit1 = { color: 'red'};
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
