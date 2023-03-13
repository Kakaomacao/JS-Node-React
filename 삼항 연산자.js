// <삼항 연산자>
// 조건문을 줄여서 작성하게 해줌
// 조건식 ? 참일 때 실행할 부분 : 거짓일 때 실행할 부분

let a = 3;
a >= 0 ? console.log("양수") : console.log("음수");

let b = [];
b.length === 0 ? console.log("빈 배열") : console.log("안 빈 배열");

let c = [1, 23];
const arrayStatus = c.length === 0 ? "빈 배열" : "안 빈 배열";
console.log(arrayStatus);

// 삼항 연산자도 Truthy와 Falsy 사용 가능
let d = [];
const result = d ? true : false;
console.log(result);

// 중첩도 가능
// TODO : 학점 계산 프로그램
// 90점 이상 : A+
// 50점 이상 : B+
// 둘 다 아니면 False

let score = 60;
score >= 90
  ? console.log("A+")
  : score >= 50
  ? console.log("B+")
  : console.log("F");

// 가독성이 떨어지기 때문에 이런 경우 그냥 if문을 사용하는 것이 더 좋음
if (score >= 90) {
  console.log("A+");
} else if (score >= 50) {
  console.log("B+");
} else {
  console.log("F");
}
