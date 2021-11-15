import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Settings from "./Settings";

// Types
export type CounterLimits = number[];
export type CounterStatus = "ok" | "set" | "error";
export interface CounterState {
  value: number;
  limits: CounterLimits;
  status: CounterStatus;
}

const getLimits = (): CounterLimits => {
  const item = localStorage.getItem("counter-limits");

  return item == null
    ? [0, 1]
    : item.split(",").map((n) => Number(n));
};

const setLimits = (state: CounterLimits) =>
  localStorage.setItem("counter-limits", String(state));

const limits = getLimits();
const initialState: CounterState = {
  limits,
  value: limits[0],
  status: "ok",
};

function App() {
  const [state, setState] =
    useState<CounterState>(initialState);

  const onSetHandler = (limits: CounterLimits) => {
    setLimits(limits);
    setState({ ...state, limits, status: "ok" });
  };

  const onChangeHandler = () => {
    setState({ ...state, status: "set" });
  };

  return (
    <div className="app-container">
      <Settings
        values={state.limits}
        onSet={onSetHandler}
        onChange={onChangeHandler}
      />
      {/* <Counter
        values={state}
        status="ok"
        initialValue={state[0]}
      /> */}
    </div>
  );
}

export default App;
