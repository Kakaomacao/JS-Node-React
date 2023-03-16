// async & await
// 직관적인 비 동기 처리 코드 작성

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// async function helloAsync() {
//   return delay(3000).then(() => {
//     return "hello async";
//   });
// }

// 위 주석 처리한 코드와 동일
async function helloAsync() {
  await delay(3000);
  return "hello async";
}

async function main() {
  const res = await helloAsync();
  console.log(res);
}

main();
