// Promise
// 콜백 지옥을 탈출하기 위한 객체

// 비동기 작업이 가질 수 있는 3가지 상태
// Pending(대기), Fulfilled(성공), Rejected(실패)
// 대기 -> 성공 : reslove(해결)
// 대기 -> 실패 : reject(거부)

// 2초 뒤에 전달 받은 값이 양수인지 음수인지 판단하는 프로그램
function isPositive(number, resolve, reject) {
  setTimeout(() => {
    if (typeof number === "number") {
      // 성공 -> resolve
      resolve(number >= 0 ? "양수" : "음수");
    } else {
      // 실패 -> reject
      reject("주어진 값이 숫자형 값이 아닙니다.");
    }
  }, 2000);
}

// return 값이 Promise가 됨 => 이 함수는 비 동기 작업을 하고 작업 결과를 Promise 객체로 반환
function isPositiveP(number) {
  const executor = (resolve, reject) => {
    // 실행자
    setTimeout(() => {
      if (typeof number === "number") {
        // 성공 -> resolve
        resolve(number >= 0 ? "양수" : "음수");
      } else {
        // 실패 -> reject
        reject("주어진 값이 숫자형 값이 아닙니다.");
      }
    }, 2000);
  };

  const asyncTask = new Promise(executor);
  return asyncTask;
}

const res = isPositiveP(101);
res
  .then((res) => {
    console.log("작업 성공 :", res);
  })
  .catch((err) => {
    console.log("작업 실패 :", err);
  });

// isPositive(
//   10,
//   (res) => {
//     console.log("성공적으로 수행됨 :", res);
//   },
//   (err) => {
//     console.log("실패 하였음 :", err);
//   }
// );
