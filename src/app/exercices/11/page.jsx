"use client";

import { useEffect, useReducer } from "react";
import Slider from "./Slider";

const initialState = {
  count: 0,
  step: 1,
};

const reducer = (state, { action, value }) => {
  switch (action) {
    case "increment":
      return { ...state, count: state.count + state.step };
    case "decrement":
      return { ...state, count: state.count - state.step };
    case "reset":
      return initialState;
    case "update-step":
      return { ...state, step: value };
    default:
      break;
  }
};

export default function Counter() {
  const [{ count, step }, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => dispatch({ action: "increment" });
  const handleDecrement = () => dispatch({ action: "decrement" });
  const handleReset = () => dispatch({ action: "reset" });
  const handleUpdateStep = (step) =>
    dispatch({ action: "update-step", value: step });

  useEffect(() => {
    setInterval(() => {
      dispatch({ action: "increment" });
    }, 1000);
  }, []);

  return (
    <main>
      <div id="notice">
        À l'aide de useEffect et setInterval, faire en sorte que le compteur
        s'incrémente automatiquement toutes les secondes.
      </div>
      <h1>{count}</h1>
      <div>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleReset}>0</button>
      </div>
      <Slider value={step} min={1} max={10} onChange={handleUpdateStep} />
    </main>
  );
}
