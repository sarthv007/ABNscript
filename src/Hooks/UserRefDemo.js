import React, { useEffect, useRef } from "react";

function UserRefDemo() {
  const [inputValue, setInputValue] = React.useState("");

  const inputRef = useRef(null);

  const [timer, setTimer] = React.useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    setInterval(() => {
      setTimer((t) => t + 1);
    }, 1000);
  }, []);

  const handleChange = () => {
    console.log(inputRef.current);
    setInputValue(inputRef.current.value);
  };

  return (
    <>
      <input
        onChange={handleChange}
        ref={inputRef}
        name="userName"
        value={inputValue}
      />
      <h2>{inputValue}</h2>

      <h2>Hook Timer {timer}</h2>
    </>
  );
}

export default UserRefDemo;
