//자바스크립트 8. 배열 제대로 알고 쓰자. 자바스크립트 배열 개념과 APIs 총정리
'use strict';

// Array 🎉

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]); // last data

console.log('Looping');
// 3. Looping over an array
// print all fruits

// a. for
for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
};

// b. for of
for (let fru of fruits) {
	console.log(fru);
}

// c. forEach 라는 API를 이용 Callback함수를 받아온다
// Ctrl + 클릭으로 forEach의 스크립트를 읽어보자.
// 배열 한 라인 마다 내가 지정한 함수를 호출해 준다
fruits.forEach((fc) => console.log(fc));
fruits.forEach((fc, idx) => console.log(fc,idx));
// (fc) => console.log(fc)       =      function(fc) = { console.log(fc); };

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('🍓','🍑');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning (앞에서부터 데이터 넣기)
fruits.unshift('🍖','🥩');
console.log(fruits);

// shift: remove an item to the beginning (앞에서부터 데이터 빼기)
fruits.shift();
//fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// unshift 앞의 데이터를 한칸씩 뒤로 밀어야 해서 느리다
// shift 앞의 데이터를 지우고 한칸씩 당겨와야 해서 느리다
// 가능하면 pop과 push 사용

// splice: remove an item by index position (중간에서 데이터 빼기)
fruits.push('🍓','🍑');
console.log(fruits);

// fruits.splice(1); index 1번부터 뒤를 다 지움 ㅋ
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(0, 1, '🍉','🍅'); // index 0부터 1개 삭제 후 수박과 토마토를 넣어줘
console.log(fruits);

// combine two arrays 두가지의 배열을 묶어서 만들기
const meats = ['🍖','🍗','🥩'];
const fruitsandmeats = fruits.concat(meats);
console.log(fruitsandmeats);

// 5. Searching
// indexOf: find the index (해당 데이터가 몇번째 index인가?)
// 배열안에 업을 때에는 -1
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍉'));

// includes
console.log(fruits.includes('🍉')); // true or false

// lastIndexOf
console.clear();
fruits.push('🍉');
console.log(fruits);
console.log(fruits.indexOf('🍉')); // 수박이 2개일 때 첫번째 값 return
console.log(fruits.lastIndexOf('🍉')); // 수박이 2개일 때 첫번째 값 return

fruits.splice(2,0,'🍉');
console.log(fruits);
console.log(fruits.lastIndexOf('🍉')); // 수박이 2개일 때 첫번째 값 return

// 숙제
// Ctrl 클릭 해서 나오는 문서에서 array 부분 모두 읽어보기!
console.log('Array 문서');
console.log(fruits.length);
console.log(fruits.toString());
console.log(fruits.toLocaleString());

const popitem = fruits.pop();
console.log(fruits.toString());
console.log(popitem); // 잘라진 데이터가 나온닷

const pushnum = fruits.push('🍄');
console.log(fruits.toString());
console.log(pushnum) // push는 INSERT 후 최종 개수를 return한다