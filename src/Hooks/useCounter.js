import React, { useState } from "react";

function useCounter(initialValue) {
  const [counter, setCounter] = useState(initialValue);

  const incrementCounter = () => {
    setCounter((c) => c + 1);
  };

  return [counter, incrementCounter];
}

export default useCounter;
