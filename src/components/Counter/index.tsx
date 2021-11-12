import { useState } from "react";
import Button from "../Button";
import Label from "../Label";
import { CounterValues } from "../Settings";

interface props {
  values: CounterValues;
}

const Counter = ({ values }: props) => {
  const [minState, maxState] = values;
  const [state, setState] = useState(minState);

  const incrementHandler = () => setState(state + 1);
  const resetHandler = () => setState(minState);

  const labelColor: "red" | "blue" =
    state === maxState ? "red" : "blue";

  const incButton: boolean = state < maxState;

  const resButton: boolean = state > minState;
  return (
    <div className="block">
      <div className="section counter-panel">
        <Label value={state} color={labelColor} />
      </div>
      <div className="section control-panel">
        <Button
          value="Incr"
          disabled={!incButton}
          onClick={incrementHandler}
        />
        <Button
          value="Reset"
          disabled={!resButton}
          onClick={resetHandler}
        />
      </div>
    </div>
  );
};

export default Counter;
