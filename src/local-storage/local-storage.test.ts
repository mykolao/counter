import defaultState, { State } from "../redux/default-state";
import LocalStorage from "./local-storage";

beforeEach(() => {
  LocalStorage.clearState();
});

test("LocalStorage should have default state", () => {
  const state: State = LocalStorage.getState();
  expect(state).toBe(defaultState);
});

test("LocalStorage should be changed", ()=> {
  const input: State = {
    min: 1,
    max: 2,
    value: 1,
    status: "set"
  }
  LocalStorage.setState(input);

  const result = LocalStorage.getState();
  expect(result.max).toBe(2);
  expect(result.value).toBe(1);
  expect(result.status).toBe("set");
})
