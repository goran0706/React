import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);

  const inc = () => setCount((count) => ++count);
  const dec = () => setCount((count) => --count);
  const res = () => setCount(0);

  return (
    <div>
      <div>The current count is {count}</div>
      <div>
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
        <button onClick={res}>Reset</button>
      </div>
    </div>
  );
};

export { UseState as default };
