import React from "react";

function TitleComponet() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      document.title = `Counter value is: ${count}`;
    }, 1000);
    return () => {
      //clean up function
      //it is same like a componentWillUnmount
      clearTimeout(timer);
    };
  }, [count]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h2>Counter: {count}</h2>
      <br />
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </>
  );
}

export default TitleComponet;
