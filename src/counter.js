import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(count + 1);
  }, []);
  const Increment = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  return (
    <>
      <h1>Counter App</h1>
      <div>{count}</div>
      <div>
        <button onClick={Increment}>Increment</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={resetCount}>Reset</button>
      </div>
    </>
  );
}

export default Counter;
