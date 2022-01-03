import { useDispatch, useSelector } from "react-redux";
import { State } from "../redux/default-state";
import { increment, reset } from "../redux/reducer";
import Button from "./Button";
import Label from "./Label";

const Counter = () => {
  // State
  const dispatch = useDispatch();
  const state = useSelector<State, State>((state) => state);
  const { min, max, value, status } = state;
  const minValue = Number(min);
  const maxValue = Number(max);

  // Label Type Calculation
  let label, incButton, resButton;

  let labelColor: "red" | "blue";

  switch (status) {
    case "set":
      incButton = resButton = false;

      label = (
        <Label
          size="32"
          value={"Enter values & press set"}
          color={"blue"}
        />
      );

      break;

    case "ok":
      labelColor = value === maxValue ? "red" : "blue";
      incButton = value < maxValue && status === "ok";
      resButton = value > minValue;

      label = <Label value={value} color={labelColor} />;
      break;

    case "error":
      incButton = resButton = false;

      label = (
        <Label
          size="24"
          value={"Incorrect Values!"}
          color={"red"}
        />
      );
      break;
  }

  // Event Handling
  const incrementHandler = () => {
    dispatch(increment());
  };

  const resetHandler = () => {
    dispatch(reset());
  };

  return (
    <div className="block">
      <div className="section counter-panel">{label}</div>
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
