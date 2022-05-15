import React, { useCallback, useState } from "react";
import Child from "./Child";

function DemoComponent() {
  const [flag, setFlag] = useState(false);
  const [todo, setTodo] = useState([{ task: "do code" }]);

  const handleClick = () => {
    setFlag(!flag);
  };

  const changeData = React.useCallback(() => {
    console.log("test");
  }, [todo]);

  const addTodo = () => {
    setTodo([...todo, { taks: "do program" }]);
  };

  return (
    <>
      <h1>Demo Component running</h1>
      <button onClick={handleClick}>Change Flag</button>

      <br />

      <button onClick={addTodo}>Add Todo</button>

      <Child todo={todo} handleClick={changeData} />
    </>
  );
}

export default DemoComponent;
