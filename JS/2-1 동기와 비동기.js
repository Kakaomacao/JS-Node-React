// 동기 & 비동기

// 동기 방식
// JS는 코드가 작성된 순서대로 작업을 처리
// 이전 작업이 진행 중 일 때는 다음 작업을 수행하지 않고 기다림
// 단점 : 하나의 작업이 오래 걸리면 전반적인 흐름이 느려짐

// 쓰레드를 여러 개 사용하는 방법인 MultiThread 방식으로 작동하여 작업 분할
// But JS는 싱글 쓰레드로 작동
// 따라서 비동기 방식으로 여러 개의 작업을 동시에 실행

function taskA(a, b, cb) {
  setTimeout(() => {
    const res = a + b;
    cb(res);
  }, 3000);
}

function taskB(a, cb) {
  setTimeout(() => {
    const res = a * 2;
    cb(res);
  }, 1000);
}

function taskC(a, cb) {
  setTimeout(() => {
    const res = a * -1;
    cb(res);
  }, 2000);
}

taskA(3, 4, (res) => {
  console.log("A Task Result :", res);
});

taskB(7, (res) => {
  console.log("B Task Result :", res);
});

taskC(14, (res) => {
  console.log("C Task Result :", res);
});

console.log("코드 끝 1");

// JS Engine
// 메모리 할당 : Heap -> 코드 실행 : Stack

// 비동기 함수가 call stack에 들어오면 Web APIs로 보냄
// 그 다음 Callback Queue로 보냄
// 그리고 콜백 함수를 Call Stack으로 보냄

// 비동기 처리의 결과를 또 다른 비동기 처리의 결과로 넣을 수 있음
// 콜백 지옥 -> Promise로 해결
taskA(4, 5, (a_res) => {
  console.log("A Result :", a_res);
  taskB(a_res, (b_res) => {
    console.log("B Result :", b_res);
    taskC(b_res, (c_res) => {
      console.log("C Result :", c_res);
    });
  });
});

console.log("코드 끝 2");
