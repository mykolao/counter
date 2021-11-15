import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Settings, { CounterValues } from "./Settings";

type CounterLimits = [number, number];
type CounterStatus = "ok" | "set" | "error";
interface CounterState {
  value: number;
  limits: CounterLimits;
  status: CounterStatus;
}

const fetchState = (): CounterValues => {
  const item = localStorage.getItem("counter-limits");

  return item == null
    ? [0, 1]
    : item.split(",").map((n) => Number(n));
};

const saveState = (state: CounterValues) =>
  localStorage.setItem("counter-limits", String(state));

function App() {
  // const [state, setState] = useState<CounterValues>(fetchState);

  // const onSetHandler = (values: CounterValues) => {
  //   saveState(values);
  //   setState(values);
  // };
  return (
    <div className="app-container">
      {/* <Settings values={state} onSet={onSetHandler} />
      <Counter
        values={state}
        status="ok"
        initialValue={state[0]}
      /> */}
    </div>
  );
}

export default App;
