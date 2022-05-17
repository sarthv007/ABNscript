import React, { useState } from "react";

import useCounter from "./useCounter";

function ClickCounter() {
  const [counter, incrementCounter] = useCounter(0);
  //   const [counter, setCounter] = useState(0);

  //   const incrementCounter = () => {
  //     setCounter((c) => c + 1);
  //   };

  return (
    <>
      <h2>Counter: {counter}</h2>
      <button onClick={incrementCounter}>Increment</button>
    </>
  );
}

export default ClickCounter;
