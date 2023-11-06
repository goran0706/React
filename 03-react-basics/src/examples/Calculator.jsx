import { useReducer } from "react";

const calculatorReducer = (state, action) => {
  if (action.type === "SET_NUM_ONE") return { ...state, num1: action.number };
  if (action.type === "SET_NUM_TWO") return { ...state, num2: action.number };
  if (action.type === "INCREMENT")
    return { ...state, result: state.num1 + state.num2 };
  if (action.type === "DECREMENT")
    return { ...state, result: state.num1 - state.num2 };
  if (action.type === "MULTIPLY")
    return { ...state, result: state.num1 * state.num2 };
  if (action.type === "DIVIDE")
    return { ...state, result: state.num1 / state.num2 };
};

const initialState = {
  num1: null,
  num2: null,
  result: null,
};

export default function Calculator() {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <>
      <div className="calcNumbers">
        {numbers.map((n) => (
          <button
            key={"num1" + n}
            onClick={() => dispatch({ type: "SET_NUM_ONE", number: n })}
          >
            {n}
          </button>
        ))}
      </div>

      <div className="calcActions">
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
        <button onClick={() => dispatch({ type: "MULTIPLY" })}>*</button>
        <button onClick={() => dispatch({ type: "DIVIDE" })}>/</button>
      </div>

      <div className="calcNumbers">
        {numbers.map((n) => (
          <button
            key={"num2" + n}
            onClick={() => dispatch({ type: "SET_NUM_TWO", number: n })}
          >
            {n}
          </button>
        ))}
      </div>
      <div>Result: {state?.result}</div>
    </>
  );
}
