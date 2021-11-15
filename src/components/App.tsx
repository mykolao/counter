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
    setState({ value: limits[0], limits, status: "ok" });
  };

  const onChangeHandler = () => {
    setState({ ...state, status: "set" });
  };

  const onErrorHandler = () => {
    setState({ ...state, status: "error" });
  };

  const onCounterChangeHandler = (value: number) =>
    setState({ ...state, value });

  return (
    <div className="app-container">
      <Settings
        values={state.limits}
        onSet={onSetHandler}
        onError={onErrorHandler}
        onChange={onChangeHandler}
      />
      <Counter
        value={state.value}
        status={state.status}
        limits={state.limits}
        onCounterChange={onCounterChangeHandler}
      />
    </div>
  );
}

export default App;
