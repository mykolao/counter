import { State } from "./reducer";

let state: State;

beforeEach(() => {
  state = {
    min: 0,
    max: 3,
    status: "ok",
    value: 0,
  };
});
