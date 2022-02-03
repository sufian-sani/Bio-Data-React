import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  //   let count = 0;

  function increase(payload) {
    setCount(count + payload);
    // count++;
  }

  function decrease(payload) {
    setCount(count - payload);
    // count--;
  }

  return (
    <div>
      <p>The Counter is {count}</p>
      <button onClick={() => increase(1)}>Add By 1</button>
      <button onClick={() => increase(5)}>Add By 5</button>
      <button onClick={() => decrease(1)}>Decrease By 1</button>
      <button onClick={() => decrease(5)}>Decrease By 5</button>
    </div>
  );
};

export default Counter;
