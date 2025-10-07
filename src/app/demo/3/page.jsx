"use client";

import { useReducer } from "react";
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return { ...state, count: state.count + state.step };
    case "decrement":
      return { ...state, count: state.count - state.step };
    case "increment-step":
      return { ...state, step: state.step + 1 };
    case "decrement-step":
      return { ...state, step: state.step - 1 };
    default:
      break;
  }
};

const initialState = {
  count: 0,
  step: 1,
};

export default function Page() {
  const [{ count, step }, dispatch] = useReducer(reducer, initialState);

  return (
    <main>
      <div>
        <h1>Counter 0</h1>
        <div>
          <h1>count: {count}</h1>
          <h1>step: {step}</h1>
          <div>
            <button onClick={() => dispatch("decrement")}>-</button>
            <button onClick={() => dispatch("increment")}>+</button>
          </div>
          <div>
            <button onClick={() => dispatch("decrement-step")}>- step</button>
            <button onClick={() => dispatch("increment-step")}>+ step</button>
          </div>
        </div>
      </div>
      <div>
        <h1>Counter 1</h1>
        <Counter1 />
      </div>
      <div>
        <h1>Counter 2</h1>
        <Counter2 />
      </div>
    </main>
  );
}
