import { useEffect, useState } from "react";

const HandlingEvents = () => {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  // click events
  const dec = () => setCount((c) => c - 1);
  const inc = () => setCount((c) => c + 1);

  // input events
  const handleChange = (e) => setSearch(e.target.value);

  // form events
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Current count is: ${count}, Search term is: ${search}`);
  };

  useEffect(() => {
    const loadHandler = () => console.log("Page is loaded!");
    window.addEventListener("load", loadHandler);

    // run clean-up function... remove the event handler
    return () => window.removeEventListener("load", loadHandler);
  });

  return (
    <div>
      <h1>Handling Events</h1>
      <div>
        <h2>Handling click events</h2>
        <p>Count is: {count}</p>
        <div>
          <button onClick={dec}>-</button>
          <button onClick={inc}>+</button>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <h2>Handling form events</h2>
        <div>
          <label htmlFor="search">Search</label>
          <input type="search" value={search} onChange={handleChange} />
        </div>
      </form>
    </div>
  );
};

export default HandlingEvents;
