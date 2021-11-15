import { useState } from "react";
import { CounterLimits } from "../App";
import Button from "../Button";
import Input, { inputStatus } from "../Input";

interface props {
  values: CounterLimits;
  onChange: () => void;
  onError: () => void;
  onSet: (v: CounterLimits) => void;
}

const Settings = ({ values, onChange, onSet, onError }: props) => {
  const [state, setState] = useState<CounterLimits>(values);
  const [min, max] = state;

  const setHandler = () => onSet(state);
  const changeHandler = () => onChange();

  const isValid = min < max;

  if(!isValid) onError();

  const minInputChangeHandler = (val: number) => {
    setState([val, state[1]]);
    changeHandler();
  };

  const minInputStatus = isValid
    ? inputStatus.good
    : inputStatus.bad;

  const maxInputChangeHandler = (val: number) =>
    setState([state[0], val]);
  const maxInputStatus = isValid
    ? inputStatus.good
    : inputStatus.bad;

  const setButton = isValid && state !== values;
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
