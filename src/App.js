import React from "react";
import useCounter from "./useCounter";
import "./style.css";

const App = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div className="counter-container">
      <h1>Counter: {count}</h1>
      <button className="button-increment" onClick={increment}>
        Increment
      </button>
      <button className="button-decrement" onClick={decrement}>
        Decrement
      </button>
      <button className="button-reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default App;
