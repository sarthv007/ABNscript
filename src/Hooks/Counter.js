import React, { useState } from "react";
import axios from "axios";
import "./Counter.scss";

function Counter() {
  const [count, setCount] = useState(0);
  const [listUser, setListUser] = useState([]);

  React.useEffect(() => {
    //if we specify a dependacy array as black then it will work like componentDidMount in class component
    axios.get("https://jsonplaceholder.typicode.com/posts").then((result) => {
      console.log(result.data);
      setListUser(result.data);
    });
  }, [count]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const incrementCountBy5 = () => {
    for (let i = 0; i < 5; i++) {
      //setCount(count + 1); //old
      setCount((prevValue) => prevValue + 1); //new
    }
  };

  const userHtml = listUser.map((item) => {
    return <li key={item.id}>{item.title}</li>;
  });

  return (
    <>
      <h2>Counter: {count}</h2>
      <br />
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={incrementCountBy5}>Increment By 5</button>
      <ul>{userHtml}</ul>
    </>
  );
}

export default Counter;
