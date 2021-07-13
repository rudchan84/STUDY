//자바스크립트 10. JSON 개념 정리 와 활용방법 및 유용한 사이트 공유 JavaScript JSON
'use strict';

// JSON
// JavaScript Object Notation

// 1. Object tto JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
	name: 'tory',
	color: 'white',
	size: null,
	//symbol: Symbol("id"), // 자바스크립트에만 있는 symbol은 변환이 되지 않는다.
	birthDate: new Date(),

	jump: () => {
		console.log(`${name} can jump!`);
	}
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);

// 조금도 세밀하게 통제하고 싶을 때 콜백함수를 이용할 수 있다
json = JSON.stringify(rabbit, (key, value) => {
	console.log(`key: ${key}, value: ${value}`);
	//return value; // rabbit의 object를 싸고 있는 가장 최상위 것이 출력됨
	return key === 'name' ? 'ellie' : value;
});
console.log(json);

// 2. JSON > Object
// parse(json)
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump(); //Object의 rabbit은 jump 함수가 있다
// obj.jump();//object -> json -> object의 안에는 jump 함수가 없다. json이 함수를 포함하지 않기 때문

console.log(rabbit.birthDate);
console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); //Error
console.log(obj.birthDate); //json으로 변하면서 string으로 되었다.

//위의 내용을 함수로 변경하여 쓰려면
const obj1 = JSON.parse(json, (key, value0) => {
	console.log(`key: ${key}, value: ${value0}`);
	return key === 'birthDate' ? new Date(value0) : value0
})
console.log(obj1.birthDate.getDate()); // 위와 같이 하면 Error가 나지 않고 함수사용 가능
