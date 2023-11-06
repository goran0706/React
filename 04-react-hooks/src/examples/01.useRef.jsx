import React, { useRef } from "react";

const UseRef = () => {
  // Reference a value that’s not needed for rendering.
  // Can also be used to remember the value between rerenders
  // Preferred when no state updates are needed
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert("You clicked " + ref.current + " times!");
  }

  return <button onClick={handleClick}>Click me!</button>;
};

export default UseRef;
