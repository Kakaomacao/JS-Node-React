import React from 'react';
import Counter from './Counter';
// import './App.css';
import Container from './Container';
import MyHeader from './MyHeader';

function App() {
  let name = "tomas";

  const style = {
    App : {
      backgroundColor: "black",
    },
    h2 : {
      color: "yellow",
    },
    bold_text : {
      color: "blue",
    }
  };

  const number = 5;

  const counterProps = {
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
  }

  return (
    <Container>
    <div>
      <MyHeader />
        <h2 style={style.h2}>안녕 방가방가 {name}</h2>
        <b id="bold_text">
          {number}는 : {number % 2 === 0 ? "짝수" : "홀수"}
        </b>
      <Counter {...counterProps} />
    </div>
    </Container>
  );
}

export default App;
