"use client";

import { useReducer } from "react";

const initialState = {
  past: [],
  count: 0,
  future: [],
};

function reducer(state, action) {
  const { past, count, future } = state;

  // past = []
  // count = 0
  // future = []
  switch (action) {
    // past = [0]
    // count = 1
    // future = []
    case "increment":
      return { ...state, count: count + 1, past: [...past, count] };
    case "decrement":
      return { ...state, count: count - 1, past: [...past, count] };

    // past = [0, 1, 2, 3]
    // count = 4
    // future = []
    case "undo":
      // past = [0, 1, 2]
      // count = 3
      // future = [4]
      const undoCount = past.at([-1]);
      const undoPast = past.slice(0, -1);
      const undoFuture = [...future, count];

      return { ...state, count: undoCount, past: undoPast, future: undoFuture };

    // past = [0, 1, 2]
    // count = 3
    // future = [5, 4]
    case "redo":
      // past = [0, 1, 2, 3]
      // count = 4
      // future = [5]
      const redoCount = future.at([-1]);
      const redoPast = [...past, count];
      const redoFuture = future.slice(0, -1);

      return { ...state, count: redoCount, past: redoPast, future: redoFuture };

    default:
      break;
  }
}

export default function CounterWithUndoRedo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  const handleIncrement = () => dispatch("increment");
  const handleDecrement = () => dispatch("decrement");
  const handleUndo = () => dispatch("undo");
  const handleRedo = () => dispatch("redo");

  return (
    <div>
      <h1>Counter: {state.count}</h1>
      <button className="link" onClick={handleDecrement}>
        Decrement
      </button>
      <button className="link" onClick={handleIncrement}>
        Increment
      </button>
      <button
        className="link"
        onClick={handleUndo}
        disabled={!state.past.length}
      >
        Undo
      </button>
      <button
        className="link"
        onClick={handleRedo}
        disabled={!state.future.length}
      >
        Redo
      </button>
    </div>
  );
}
