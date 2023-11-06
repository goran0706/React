import { memo, useCallback, useState } from "react";

// Memoize the component and don't rerender it unless the props are changed since the last render.
const CountButton = memo(({ count, onClick }) => {
  return <button onClick={onClick}>{count}</button>;
});

const DualCounter = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // Memoize the functions so the props onClick passed to the CountButton remains the same between rerenders
  const inc1 = useCallback(() => setCount1((count) => ++count), []);
  const inc2 = useCallback(() => setCount2((count) => ++count), []);

  return (
    <>
      <CountButton count={count1} onClick={inc1} />
      <CountButton count={count2} onClick={inc2} />
    </>
  );
};

export default DualCounter;
