console.log('Hello World!');

// 1. Use strict
// added in ES 5
// use this for Vanila JavaScript.
'use strict';

// 2. Variable (변수:변경될 수 있는 값), rw(read/write)
// let (added in ES6) (변수선언)
// Block scope : Block {} 밖에서 변수를 볼 수 없다.
{
  let name = 'ellie';
  console.log(name);
  name = 'Hello';
  console.log(name);
}

console.log(name);

// global scope : 어느곳에서나 변수를 볼 수 있다.
// 어플리케이션이 실행되는 순간부터 끝나는 순간까지 항상 메모리에 존재하기 때문에 최소화로 사용
// class나 함수 if나 필요한 부분에서 정의하여 쓰는 것이 좋다
let globalName = 'global name';

// var (don't ever use this!)
// 아래와 같이 선언하기 전에 값을 넣어서 쓸 수 있다. 
// var hoisting : 어디에 선언했는지 상관없이 항상 선언을 제일 위로 끌어 올려 주는 것
// has no block scope (block 안에서 선언해도 block 밖에서 볼 수 있다) 규모가 큰 프로젝트 들에서는 큰 걸림돌
age = 4;
var age;
console.log(age);

// 3. Constant (변경불가 데이터타입 Immutable datatype) / r(read only)
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note !
// Immutable data types(변경불가): primitive types, frozen objects (i.e. object.freeze())
// Mutable data types(변경가능): all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety (여러 쓰레드에서 값을 변경하는 로직이 있다면 오류를 초래할 수 있다)
//  - reduce human mistakes


// =================================================================================================================
// 4. Variable types (data type)
// primitive, single item(더이상 작은단위로 나누어질 수 없는 한가지 아이템): number, string, boolean, null, undefine, symbol
// object, box container (single item을 모아서 한 box단위로 관리) : 
// function, first-class function( function 도 다른 data type 처럼 변수에 할당 가능, 함수에 parameter로도 return값으로도 전달 가능)

// 결과는 모두 number
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
// 숫자를 0으로 나누거나 문자를 숫자로 나누면 이러한 값들이 나온다.
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
// 아래 두개는 같지만 `를 사용하는 것이 편리하다.
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ', type: ' + typeof helloBob);

// Boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`); 

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
// 같은 값을 넣어도 symbol함수를 쓰면 다른 개체가 된다
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
// for 문으로 같은변수에는 같은 Symbol을 가질 수 있다
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2); //ture
// Symbol 출력하기
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
// Box형태로 생각
const ellie = { name: 'ellie', age: 20 };
ellie.age = 21; // const 형식이지만 안의 변수는 변경이 가능

// =================================================================================================================
// 5. Dynamic typing: dynamically typed language
// 변수를 선언할 때 어떤 타입인지 선언하지 않아도 프로그램이 동작할 때 할당
let text = 'hello';
console.log(text.charAt(0)); // h 첫문자열 출력하는 함수
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); // Error

// 이러한 문제점으로 TypeScript가 뜨고 있다

// https://youtu.be/OCCpGh4ujb8?list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2