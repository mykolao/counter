export const increment = () => ({ type: "INCREMENT" } as const);
type IncAction = ReturnType<typeof increment>;

export const reset = () => ({ type: "RESET" } as const);
type ResAction = ReturnType<typeof reset>;

type Action = IncAction | ResAction;

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

    default:
      return state;
  }
};

export default reducer;
