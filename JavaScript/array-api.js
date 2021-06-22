// 자바스크립트 9. 유용한 10가지 배열 함수들. Array APIs 총정리 | 프론트엔드 개발자 입문편 ( JavaScript ES6)
'use strict';

// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    //console.log(fruits.toString());
    const result = fruits.join();
    console.log(result);
  }

  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const fruits02 = fruits.split(','); // split Ctrl+클릭 후 ES5 클릭후 아래것 클릭
    //const fruits02 = fruits.split(',',2); // 2개의 배열만 받아서 만들고 싶을 때
    console.log(fruits02);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array); // 자체배열도 리버스 해버리는 점 주의
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    //const result = array.splice(0, 2); // 원래 배열을 수정해서 적합하지 않다.
    //console.log(array);
    //console.log(result);

    const result = array.slice(2);
    console.log(array);
    console.log(result);
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
    // 내가 한 것
    //students.forEach(students => {
//      students.score >= 90 ? console.log(students) : '';
    //});

    // find API를 이용 (첫 결과를 return 하면 멈춤)
    // find API 안의 콜백함수는 boolean type을 리턴
    const result = students.find(function (student) {
      //console.log(student);
      return student.score === 90;
    })

    // 애로우 펑션으로 수정하기 (function 생략, return 생략, 한줄이면 괄호 생략)
    // const result = students.find((student) => student.score === 90);

    console.log(result);
  }
  
  // Q6. make an array of enrolled students
  {
    //내가 해봤찌만 으악 어렵다.
    //const result = students.forEach(students.enrolled === 'true' ? students : '');
    //console.log(result);

    const result = students.filter((stu) => stu.enrolled);
    console.log(result);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
    const result = students.map((student) => student.score);
    console.log(result);
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
    //일부 배열의 조건을 만족해야 할 때 some
    const result = students.some((student => student.score < 50));
    console.log(result);

    // 모든 배열의 조건을 만족해야 할 때 every
    const result2 = !students.every((student => student.score >= 50));
    console.log(result2);
  }
  
  // Q9. compute students' average score
  {
    // reduce
    // 뭔지 어렵다.
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    const result = students
      .map((student) => student.score)
      //.filter((score) => score >= 50) 이런식으로 추가 가능
      .join();
    console.log(result);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    const result = students
      .map((student) => student.score)
      .sort((a, b) => a - b)
      .join()
    console.log(result);
  }