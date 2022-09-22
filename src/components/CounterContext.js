import React from "react";
import { useContext } from "react";
import { CounterContext } from "../contextState/counterContext";
export default function CounterContextPage() {
  const { count, setCount } = useContext(CounterContext);

  const decrease = () => {
    setCount((count) => count - 1);
  };

  const increase = () => {
    setCount((count) => count + 1);
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}
