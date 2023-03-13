// 비 구조화 할당 (구조 분해 할당)

// 배열의 선언 분리 비 구조화 할당
let [one, two, three, four = "four"] = ["one", "two", "three"];
console.log(one, two, three, four);

// swap에도 응용 가능
let i = 10;
let j = 20;

[i, j] = [j, i];
console.log(i, j);

// 객체의 비 구조화 할당
let object = { a: "one", b: "two", c: "three", name: "홍길동" };

// key값의 순서는 상관없음
let { name: myName, a, b, c, abc = "four" } = object;
console.log(a, b, c, myName, abc);
