import React, { useRef } from "react";

const UseRef = () => {
  // Reference a value that’s not needed for rendering.
  // Can also be used to remember the value between rerenders
  // Preferred when no state updates are needed
  let ref = useRef(null);

  const handleSubmit = () => alert(`You have entered: ${ref?.current.value}`);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={ref} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UseRef;
