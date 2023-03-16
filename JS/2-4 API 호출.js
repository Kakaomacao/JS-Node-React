// API 호출하기
// Application Programming Interface

// 서버에 데이터 요청 및 요청 데이터 전달 받기
// 언제 요청한 데이터를 언제 전달 받을지 알 수 없음
// 따라서 Promise를 이용하여 비 동기 호출

// fetch : Promise를 반환하는 API를 돕는 내장 함수
async function getData() {
  let rawResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
  let jsonReponse = await rawResponse.json();
  console.log(jsonReponse);
}

getData();