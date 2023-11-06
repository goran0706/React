import React from 'react';

// Several ways of using useReducer hook:
// simple (state, newState) ... reducer returns the new state
// simulate setState using Object API - spread the state and the action inside the reducer
// simulate setState using Function API - accept the previous state as param, then spread the state and the action inside the reducer
// dispatch an action

function countReducer(state, step) {
  return state + step; // increment the counter and return the new state
}

function Counter({ step = 1, initialCount = 0 }) {
  const [count, changeCount] = React.useReducer(countReducer, initialCount);

  const increment = () => changeCount(step); // pass the new value
  const decrement = () => changeCount(step); // pass the new value

  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <p>{count}</p>
    </div>
  );
}

function App() {
  return <Counter />;
}

export default App;
