import { useState } from "react";
import Button from "../Button";
import Input, { inputStatus } from "../Input";

const Settings = () => {
  const [state, setState] = useState<[number, number]>([0, 1]);
  const [minInput, setMinInput] = useState<number>(0);
  const [maxInput, setMaxInput] = useState<number>(0);

  const setHandler = () => {};
  const minInputChangeHandler = () => {};
  const minInputStatus = inputStatus.good;

  const maxInputChangeHandler = () => {};
  const maxInputStatus = inputStatus.good;

  const setButton = false;
  return (
    <div className="block">
      <div className="section input-panel">
        <div className="input-label">Min Value</div>
        <Input
          value={state[0]}
          status={minInputStatus}
          onValueChange={minInputChangeHandler}
        />
        <div className="input-label">Max Value</div>
        <Input
          value={state[1]}
          status={maxInputStatus}
          onValueChange={maxInputChangeHandler}
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
