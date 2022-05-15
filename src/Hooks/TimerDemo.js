import React, { useEffect, useRef } from "react";

function TimerDemo() {
  const [timer, setTimer] = React.useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((t) => t + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const stopTimerUsingButton = () => {
    getData();
    console.log("value from stopTimerUsingButton", intervalRef.current);
    clearInterval(intervalRef.current);
  };

  const getData = () => {
    console.log("value from getData", intervalRef.current);
  };

  return (
    <>
      <h2>Hook Timer {timer}</h2>
      <button onClick={stopTimerUsingButton}>Stop Timer</button>
    </>
  );
}

export default TimerDemo;
