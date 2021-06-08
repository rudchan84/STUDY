// 자바스크립트 6. 클래스와 오브젝트의 차이점(class vs object), 객체지향 언어 클래스 정리
// class
// 붕어빵을 만드는 틀과 같음
// 정의만 한 것이라서 실제로 메모리에 올라가지 않음
// - template
// - declare once
// - no data in

// object
// 틀을 이용하여 만든 붕어빵
// class를 이용하여 많이 만들 수 있음
// - instance of a class (class를 이용하여 instance를 생성하면 object가 된다)
// - created many tiems
// - data in

'use strict';
// Object-oriented programming
// class: template
// object: instance of class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
	// constructor(생성자)
	constructor(name, age) {
		// fields
		this.name = name;
		this.age = age;
	}

	// methods
	speak() {
		console.log(`${this.name}: hello!`);
	}
}

// object 생성
const ellie = new Person('ellie',20);
console.log(ellie);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
class User {
	constructor(firstname, lastname, age) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.age = age; // = 기준으로 좌 getter 우 setter 이며 각각 get, set 을 호출
	}

	get age() {
		return this._age;
	}

	set age(value) {
		// if (value < 0) {
		//	throw Error('age can not be negative');
		// }
		//this._age = value; // age를 그대로 쓰면 무한루프에 빠진다.
		this._age = value < 0 ? 0 : value; // 이렇게 마이너스 값에 대한 처리
	}
}

// 아래와 같이 나이를 -1로 잘못 넣어 class를 사용해도 방어적인 기능을 할 수 있는 것
const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private)
// 최근에 추가되어 많이 쓰고 있지는 않으며, 지원되지 않는 브라우저도 많음
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Refe
class Experiment {
	publicField = 2;
	#privatedField = 0; //  class 외부에서는 읽기 변경 불가능
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// 최근에 추가되어 많이 쓰고 있지는 않으며, 지원되지 않는 브라우저도 많음
// class에서 공통적으로 사용되는 것을 리턴하고자 할 때 사용하면 좋을 듯
class Article {
	static publisher = 'Dream Coding';
	constructor(articleNumber) {
		this.articleNumber = articleNumber;
	}

	static printPublisher() {
		console.log(Article.publisher);
	}
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined 
console.log(Article.publisher); // Dream Coding , 클래스 내에 저장된 변수
Article.printPublisher(); // Dream Coding , 클래스 내에 저장된 함수

// 5. Inheritance (상속, 다양성)
// a way for one class to extend another class.
class Shape {
	constructor(width, height, color) {
		this.width = width;
		this.height = height;
		this.color = color;
	}

	draw() {
		console.log(`drawing ${this.color} color of`);
	}

	getArea() {
		return width * this.height;
	}
}

// Rectangle class에 Shape class를 확장
class Rectangle extends Shape {}

// Rectangle class로 생성한 object가 정상
const rectangle = new Rectangle(20,20, 'blue');
rectangle.draw();

// Overriding
// 확장을 통해 getArea 함수만 다시 정의하여 다양성을 가져옴
class Triangle extends Shape {
	draw() {
		super.draw(); // super를 이용하여 부모의 draw함수 호출
		console.log('▲');
	}

	getArea() {
		return this.width * this.height / 2;
	}
}

const triangle = new Triangle(40,40,'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceof: 이 class를 이용해 만들어진 object인지 확인
console.log('--instanceof--');
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
// https://youtu.be/_DLhUBWsRtw?list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2

