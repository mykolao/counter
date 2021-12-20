import LocalStorage from "../local-storage/local-storage";
import { State, Status } from "./default-state";

// ACTION CREATORS
export const increment = () => ({ type: "INCREMENT" } as const);
type IncAction = ReturnType<typeof increment>;

export const reset = () => ({ type: "RESET" } as const);
type ResAction = ReturnType<typeof reset>;

export const setStatus = (status: Status) =>
  ({
    type: "SET_STATUS",
    payload: { status },
  } as const);
type SetStatAction = ReturnType<typeof setStatus>;

export const setMin = (min: string) =>
  ({
    type: "SET_MIN",
    payload: { min },
  } as const);
type setMinAction = ReturnType<typeof setMin>;

export const setMax = (max: string) =>
  ({
    type: "SET_Max",
    payload: { max },
  } as const);
type setMaxAction = ReturnType<typeof setMax>;

type Action =
  | IncAction
  | ResAction
  | SetStatAction
  | setMinAction
  | setMaxAction;

// REDUCER
const reducer = (
  state: State = LocalStorage.getState(),
  action: Action
): State => {
  let resultState: State;

  switch (action.type) {
    case "INCREMENT":
      resultState = {
        ...state,
        value: state.value + 1,
      };
      break;

    case "RESET":
      resultState = {
        ...state,
        value: Number(state.min),
      };
      break;

    case "SET_STATUS":
    case "SET_MIN":
    case "SET_Max":
      resultState = {
        ...state,
        ...action.payload,
      };
      break;

    default:
      resultState = state;
  }

  LocalStorage.setState(resultState);
  return resultState;
};

export default reducer;
