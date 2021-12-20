import reducer, { increment, reset, State } from "./reducer";

let state: State;

beforeEach(() => {
  state = {
    min: 0,
    max: 3,
    status: "ok",
    value: 0,
  };
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
  expect(endState.value).toBe(state.min);
});
