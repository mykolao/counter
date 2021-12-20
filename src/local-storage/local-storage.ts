import defaultState, { State } from "../redux/default-state";

const KEY = "counter-state";

const parseState = (text: string | null): State => {
  return text ? JSON.parse(text) : defaultState;
};

const getState = (): State => {
  return parseState(localStorage.getItem(KEY));
};

const setState = (state: State): void => {
  let str = JSON.stringify(state);
  localStorage.setItem(KEY, str);
};

const clearState = (): void => {
  localStorage.removeItem(KEY);
};

const LocalStorage = {
  getState,
  setState,
  clearState,
};

export default LocalStorage;
