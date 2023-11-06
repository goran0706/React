import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState({
    fname: "John",
    lname: "Doe",
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
  });
  const [colors, setColors] = useState(["red", "yellow"]);
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  // 1) Updating state
  const reset = () => setCount(0);

  // 2) updating state based on the previous state
  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);

  // 3) Updating nested objects in state
  const updatePerson = () => {
    setPerson({
      ...person,
      address: {
        ...person.address,
        zip: "10002",
      },
    });
  };

  // 4) Updating array:
  // Add elements to an array
  const addColor = (color) => setColors([...colors, color]);

  // Update elements in an array
  const updateColor = (color) =>
    setColors(colors.map((c) => (c === color ? color : c)));

  // Remove elements from an array
  const removeColor = (color) => setColors(colors.filter((c) => c !== color));

  // 5) Updating array of objects
  // Find and update only the required object inside the array
  const updateObject = () => {
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };

  return (
    <div>
      <h1>Use State</h1>
      <h2>Count: {count}</h2>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <h2>
        <p>{`Person: ${person.fname} ${person.lname}`}</p>
        <p>{`Address: ${person.address.street} ${person.address.city} ${person.address.state} ${person.address.zip}`}</p>
      </h2>
      <button onClick={() => updatePerson({ fname: "Jane", lname: "Doe" })}>
        Update Person
      </button>
    </div>
  );
};

export { UseState as default };
