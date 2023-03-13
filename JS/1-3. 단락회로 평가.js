// and의 경우 앞이 false라면 뒤를 보지 않고 false
// 평가가 false만 보고 종료
console.log(true && true);

// or의 경우 앞이 true라면 뒤를 보지 않고 true
// 평가가 바로 true만 보고 종료
console.log(true || false);

console.log(!true);

const getName = (person) => {
  const name = person && person.name;
  return name || "객체가 아닙니다.";
};

let person = { name: "홍길동" };
const name = getName(person);
console.log(name);
