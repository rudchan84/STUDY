// 1. String concatenation
console.log('my' + ' cat')
console.log('1' + 2)
console.log(`string literals: 1 + 2 = ${1+2}`) // 줄바꿈 가능 ' 쉼표도 출력가능

// 2. Numeric operatiors
console.log(1 + 1); // 더하기
console.log(1 - 1); // 빼기
console.log(1 / 1); // 나누기
console.log(1 * 1); // 곱하기
console.log(5 % 2); // 나머지
console.log(2 ** 3); // 2의 3승

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; // counter + 1 값을 preIncrement에 할당
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++; // counter 값을 postIncrement에 할당 후 counter + 1을 한다
console.log(`preIncrement: ${postIncrement}, counter: ${counter}`);
// -도 위와 같이 동작

// 4. Assignment operatiors
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y; // x = x - y;
x *= y; // x = x * y;
x /= y; // x = x / y;

// 5. Comparison operators
console.log(10 < 6); // less than 
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than 
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), true값이 나오면 뒤의 연산은 무시한다 value1 이 true이면 check 함수는 실행하지 않는다
// 따라서 연산이 많이 걸리는 것은 or의 뒤에 배치가 효율적!!!!
console.log(`or: ${value1 || value2 || check()}`);

// && (and), 처음부터 false가 나오면 뒤의 연산은 무시
// 따라서 연산이 많이 걸리는 것은 and의 뒤에 배치가 효율적!!!!
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something - nullableObject가 null이면 nullableObject.something는 실행X
// &&는 NULL체크할 때도 많이 쓰인다.
// 위 2번째줄을 코드로 풀어보자면 아래와 같음
//if (nullableObject != null) {
//	nullableObject.something;
//}

function check() {
	for (let i = 0; i < 10; i++) {
		//wasting time
		console.log('😱');
	}
	return true;
}

// ! (not) 값을 반대로 바꿔줌
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion (타입을 변경해서 검사)
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion (타입이 다르면 다른걸로 인식)
// 코딩할 때 이것으로 사용 권장
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
// object는 메모리에 들어갈 때 reference 형식으로 들어간다
const ellie1 = {name: 'ellie' };
const ellie2 = {name: 'ellie' }; 
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// equality - puzzler (퀴즈)
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

// 8. Conditional operators: if
// if, else if, else
const name = 'ellie';
if (name === 'ellie') {
	console.log('Welcome, Ellie!');
} else if (name === 'coder') {
	console.log('You are amazing coder');
} else {
	console.log('unkown');
}

// 9. Ternary operator: ? (if를 좀 더 간단히 쓸 수 있음)
// condition ? value1 : value2;
// 가독성을 위해 간단할 때에만 사용하는 것이 좋음
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
	case 'IE':
		console.log('go away!');
		break;
	case 'Chrome':
	case 'Firefox':
		console.log('love you! rome');
		break;
	default:
		console.log('same all!');
		break;
}

// 11. loops 반복문
// [while loop], while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
	console.log(`while: ${i}`);
	i--;
}

// [do while loop], body code is executed first,
// the check the condition.
// do 안의 문을 먼저 실행 후 while 조건을 체크
do {
	console.log(`do while: ${i}`);
	i--;
} while (i>0);

// [for loop], for(begin; condition; step)
for (i = 3; i > 0; i--) {
	console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
	// inline variable declaration
	// 안에서 지역변수를 설정
	console.log(`inline variable for: ${i}`);
}

// nested loops (CPU에 좋지 않음.)
for (let i = 0; i < 10; i++) {
	for (let j = 0; j < 10; j++) {
		console.log(`i: ${i}, j: ${j}`);
	}
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let r = 0; r < 11; r++) {
	if (r % 2 !== 0) {
		continue;
	}
	console.log(`Q1r: ${r}`);
}

// continue 를 쓰려고 위처럼 했지만 아래처럼 하는 것이 좋음
for (let r = 0; r < 11; r++) {
	if (r % 2 === 0) {
		console.log(`Q1r_nocontinue: ${r}`);
	}
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let r = 0; r < 11; r++) {
	console.log(`Q2r: ${r}`);
	if (r === 8) {
		break;
	}
}
