import { useState } from "react";
import "./App.css";
import Button from "./Button";
import Label from "./Label";

function App() {
  // const [state, setState] = useState(0);
  // const [minState, maxState] = [0, 5];

  // const incrementHandler = () => setState(state + 1);
  // const resetHandler = () => setState(0);

  // const labelColor: "red" | "blue" =
  //   state === maxState ? "red" : "blue";

  // const incButton: boolean = state < maxState;

  // const resButton: boolean = state > minState;

  return (
    <div className="app-container">
      {/* <div className="app">
        <div className="section label">
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
      </div> */}
    </div>
  );
}

export default App;
