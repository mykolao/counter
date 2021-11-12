import { ChangeEvent } from "react";

export enum inputStatus {
  good = "good",
  bad = "bad",
}
interface props {
  value: number;
  status: inputStatus;
  onValueChange: (v: number) => void;
}

const Input = ({ value, status, onValueChange }: props) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    onValueChange(Number(e.target.value));

  return (
    <input
      min={0}
      className={`input ${status}`}
      value={value}
      type="number"
      onChange={onChangeHandler}
    />
  );
};

export default Input;
