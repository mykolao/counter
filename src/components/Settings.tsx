import { useDispatch, useSelector } from "react-redux";
import { State, Status } from "../redux/default-state";
import { setMax, setMin, setStatus } from "../redux/reducer";
import Button from "./Button";
import Input from "./Input";

interface SettingsState {
  min: string;
  max: string;
  status: Status;
}

const Settings = () => {
  const dispatch = useDispatch();

  // Global State
  const state = useSelector<State, SettingsState>(
    ({ min, max, status }) => ({
      min,
      max,
      status,
    })
  );

  // Validation
  const max = Number(state.max);
  const min = Number(state.min);

  const isMaxValid =
    max > 0 && max > min && Boolean(state.max.length);
  const isMinValid =
    min >= 0 && min < max && Boolean(state.min.length);

  const isValid = isMaxValid && isMinValid && max !== min;
  if (state.status === "error" && isValid) {
    dispatch(setStatus("set"));
  } else if (state.status !== "error" && !isValid) {
    dispatch(setStatus("error"));
  }

  const buttonStatus = state.status === "set" ? false : true;

  // Event Handlers
  const inputChangeHandler = (
    value: string,
    type: "max" | "min"
  ) => {
    const isInputValid = Boolean(
      value.length && !isNaN(+value)
    );
    const statusAction = isInputValid
      ? setStatus("set")
      : setStatus("error");

    let valueAction =
      type === "max" ? setMax(value) : setMin(value);

    dispatch(valueAction);
    dispatch(statusAction);
  };

  const onButtonClickHandler = () => {
    dispatch(setStatus("ok"));
  };

  return (
    <div className="block">
      <div className="section input-panel">
        <div className="input-label">Max Value</div>
        <Input
          value={state.max}
          valid={isMaxValid}
          onValueChange={(v) => {
            inputChangeHandler(v, "max");
          }}
        />
        <div className="input-label">Min Value</div>
        <Input
          value={state.min}
          valid={isMinValid}
          onValueChange={(v) => {
            inputChangeHandler(v, "min");
          }}
        />
      </div>
      <div className="section control-panel">
        <Button
          disabled={buttonStatus}
          value="Set"
          onClick={onButtonClickHandler}
        />
      </div>
    </div>
  );
};

export default Settings;
