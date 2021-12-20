
const Settings = () => {
  return <></>
  // const [state, setState] = useState<CounterLimits>(values);
  // const [min, max] = state;

  // const isValid = min < max;

  // const setHandler = () => onSet(state);
  // const changeHandler = () => onChange();

  // const minInputChangeHandler = (val: number) => {
  //   if (val >= max) onError();
  //   else changeHandler();
  //   setState([val, state[1]]);
  // };

  // const minInputStatus = isValid
  //   ? inputStatus.good
  //   : inputStatus.bad;

  // const maxInputChangeHandler = (val: number) => {
  //   if (val <= min) onError();
  //   else changeHandler();

  //   setState([state[0], val]);
  // };

  // const maxInputStatus = isValid
  //   ? inputStatus.good
  //   : inputStatus.bad;

  // const setButton = isValid && state !== values;
  // return (
  //   <div className="block">
  //     <div className="section input-panel">
  //       <div className="input-label">Max Value</div>
  //       <Input
  //         value={state[1]}
  //         status={maxInputStatus}
  //         onValueChange={maxInputChangeHandler}
  //       />
  //       <div className="input-label">Min Value</div>
  //       <Input
  //         value={state[0]}
  //         status={minInputStatus}
  //         onValueChange={minInputChangeHandler}
  //       />
  //     </div>
  //     <div className="section control-panel">
  //       <Button
  //         disabled={!setButton}
  //         value="Set"
  //         onClick={setHandler}
  //       />
  //     </div>
  //   </div>
  // );
};

export default Settings;
