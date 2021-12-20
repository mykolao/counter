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

export const setMin = (min: number) =>
  ({
    type: "SET_MIN",
    payload: { min },
  } as const);
type setMinAction = ReturnType<typeof setMin>;

export const setMax = (max: number) =>
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

// INITIAL STATE
type Status = "ok" | "set" | "error";
export interface State {
  min: number;
  max: number;
  value: number;
  status: Status;
}

const initialState: State = {
  min: 0,
  max: 1,
  value: 0,
  status: "ok",
};

// REDUCER
const reducer = (
  state: State = initialState,
  action: Action
): State => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        value: state.value + 1,
      };

    case "RESET":
      return {
        ...state,
        value: state.min,
      };

    case "SET_STATUS":
    case "SET_MIN":
    case "SET_Max":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
