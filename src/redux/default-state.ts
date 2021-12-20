// INITIAL STATE
export type Status = "ok" | "set" | "error";
export interface State {
  min: string;
  max: string;
  value: number;
  status: Status;
}

const defaultState: State = {
  min: "0",
  max: "3",
  value: 0,
  status: "ok",
};

export default defaultState;