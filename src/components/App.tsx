import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Settings, { CounterValues } from "./Settings";

function App() {
  const [state, setState] = useState<CounterValues>(() => {
    const item = localStorage.getItem("counter-limits");

    return item == null
      ? [1, 1]
      : item.split(",").map((n) => Number(n));
  });

  const onSetHandler = (values: CounterValues) =>
    setState(values);

  return (
    <div className="app-container">
      <Settings values={state} onSet={onSetHandler} />
      <Counter />
    </div>
  );
}

export default App;
