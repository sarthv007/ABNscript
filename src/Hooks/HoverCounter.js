import React, { useState } from "react";
import useCounter from "./useCounter";

function HoverCounter() {
  let name = "sidhy";
  console.log(name);
  const [counter, incrementCounter] = useCounter(0);
  //   const [counter, setCounter] = useState(0);

  //   const incrementCounter = () => {
  //     setCounter((c) => c + 1);
  //   };

  return (
    <>
      <h2 onMouseEnter={incrementCounter}>Counter: {counter}</h2>
    </>
  );
}

export default HoverCounter;
