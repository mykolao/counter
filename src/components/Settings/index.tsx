import { useState } from "react";
import Button from "../Button";
import Input, { inputStatus } from "../Input";

const Settings = () => {
  const [state, setState] = useState<number[]>(() => {
    const item = localStorage.getItem("counter-limits");

    return item == null
      ? [1, 1]
      : item.split(",").map((n) => Number(n));
  });
  
  const [min, max] = state;

  const setHandler = () => {};

  const isValid = min < max;

  const minInputChangeHandler = (val: number) =>
    setState([val, state[1]]);
  const minInputStatus = isValid
    ? inputStatus.good
    : inputStatus.bad;

  const maxInputChangeHandler = (val: number) =>
    setState([state[0], val]);
  const maxInputStatus = isValid
    ? inputStatus.good
    : inputStatus.bad;

  const setButton = isValid;
  return (
    <div className="block">
      <div className="section input-panel">
        <div className="input-label">Max Value</div>
        <Input
          value={state[1]}
          status={maxInputStatus}
          onValueChange={maxInputChangeHandler}
        />
        <div className="input-label">Min Value</div>
        <Input
          value={state[0]}
          status={minInputStatus}
          onValueChange={minInputChangeHandler}
        />
      </div>
      <div className="section control-panel">
        <Button
          disabled={!setButton}
          value="Set"
          onClick={setHandler}
        />
      </div>
    </div>
  );
};

export default Settings;
