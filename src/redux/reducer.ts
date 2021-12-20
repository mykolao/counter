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

const reducer = () => {};

export default reducer;
