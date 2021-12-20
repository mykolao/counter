import LocalStorage from "../local-storage/local-storage";
import defaultState, { State } from "./default-state";
import reducer, {
  increment,
  reset,
  setMax,
  setMin,
  setStatus,
} from "./reducer";

let state: State;

beforeEach(() => {
  state = defaultState;
});

test("Value should be incremented", () => {
  const endState = reducer(state, increment());
  expect(endState.value).toBe(1);

  let endState2 = reducer(endState, increment());
  expect(endState2.value).toBe(2);
});

test("Value should be reset", () => {
  const endState = reducer(
    reducer(state, increment()),
    reset()
  );
  expect(endState.value).toBe(Number(state.min));
});

test("Status should change", () => {
  const endState = reducer(state, setStatus("set"));
  expect(endState.status).toBe("set");
});

test("Min value should change", () => {
  const endState = reducer(state, setMin("1"));
  expect(endState.min).toBe("1");
});

test("Max value should change", () => {
  const endState = reducer(state, setMax("2"));
  expect(endState.max).toBe("2");
});

test("State should be saved in LocalStorage", () => {
  const endState = reducer(state, setStatus("error"));
  expect(endState).toStrictEqual(LocalStorage.getState());
})
