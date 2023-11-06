import React from 'react';

// Several ways of using useReducer hook:
// simple (state, newState) ... reducer returns the new state
// simulate setState using Object API - spread the state and the action inside the reducer
// simulate setState using Function API - accept the previous state as param, then spread the state and the action inside the reducer
// dispatch an action

const countReducer = (state, action) => ({ ...state, ...action });

function Counter({ step = 1, initialCount = 0 }) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  });
  const { count } = state;

  const increment = () => setState({ count: count + step }); // Using the Object API
  const decrement = () => setState({ count: count - step }); // Using the Object API

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
